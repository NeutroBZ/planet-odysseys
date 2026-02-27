// scripts/migrate-wp.js
import fs from 'fs/promises';
import * as fsSync from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import http from 'http';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configuración
const XML_FILE = 'planetodysseys.WordPress.2026-02-26.xml';
const OUTPUT_DIR = 'src/content/blog';
const IMAGES_DIR = 'public/images/blog';

// Función para descargar imágenes usando fs.createWriteStream síncrono
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        // Usar fsSync.createWriteStream en lugar de fs.createWriteStream
        const fileStream = fsSync.createWriteStream(filename);
        response.pipe(fileStream);
        
        fileStream.on('finish', () => {
          fileStream.close();
          resolve(true);
        });
        
        fileStream.on('error', (err) => {
          fsSync.unlink(filename, () => {}); // Eliminar archivo si hay error
          reject(err);
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // Seguir redirects
        downloadImage(response.headers.location, filename).then(resolve).catch(reject);
      } else {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
}

function extractImagesFromHTML(html) {
  const imgRegex = /<img[^>]+src="([^">]+)"/g;
  const images = [];
  let match;
  while ((match = imgRegex.exec(html)) !== null) {
    images.push(match[1]);
  }
  return images;
}

function updateImagePaths(html, postSlug) {
  return html.replace(/<img[^>]+src="([^">]+)"/g, (match, src) => {
    // Extraer el nombre del archivo de la URL
    const filename = src.split('/').pop().split('?')[0];
    // Nueva ruta relativa a public/
    const newPath = `/images/blog/${postSlug}/${filename}`;
    return match.replace(src, newPath);
  });
}

function extractHTMLFromSerialized(serialized) {
  try {
    // Buscar contenido HTML en el texto serializado
    const contentMatches = serialized.match(/content"\;s:\d+:"(.*?)"(?=;|})/g);
    if (contentMatches) {
      return contentMatches
        .map(m => m.replace(/^content"\;s:\d+:"/, '').replace(/"$/, ''))
        .join('\n\n')
        .replace(/\\"/g, '"')
        .replace(/\\'/g, "'")
        .replace(/\\\\/g, '\\')
        .replace(/\\n/g, '\n')
        .replace(/\\t/g, '');
    }
    
    // Buscar cualquier cosa que parezca HTML
    const htmlMatches = serialized.match(/<p.*?>.*?<\/p>/gs);
    if (htmlMatches) {
      return htmlMatches.join('\n\n');
    }
    
    return '';
  } catch (error) {
    return '';
  }
}

async function migrateWP() {
  console.log('🔄 Iniciando migración con imágenes...');
  
  try {
    // Crear carpetas necesarias
    await fs.mkdir(path.join(__dirname, '..', OUTPUT_DIR), { recursive: true });
    await fs.mkdir(path.join(__dirname, '..', IMAGES_DIR), { recursive: true });
    
    console.log(`📖 Leyendo archivo: ${XML_FILE}`);
    const xml = await fs.readFile(path.join(__dirname, '..', XML_FILE), 'utf-8');
    
    const items = xml.split('<item>').slice(1);
    console.log(`📄 Encontrados ${items.length} items en el XML`);
    
    let postCount = 0;
    let skippedCount = 0;
    let totalImages = 0;
    
    for (const item of items) {
      const itemClose = item.indexOf('</item>');
      const itemContent = item.substring(0, itemClose);
      
      // Verificar que es un post publicado
      if (!itemContent.includes('<wp:post_type><![CDATA[post]]></wp:post_type>')) {
        skippedCount++;
        continue;
      }
      
      const statusMatch = itemContent.match(/<wp:status><!\[CDATA\[(.*?)\]\]><\/wp:status>/);
      if (!statusMatch || statusMatch[1] !== 'publish') {
        skippedCount++;
        continue;
      }
      
      // Extraer título
      const titleMatch = itemContent.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/);
      const title = titleMatch ? titleMatch[1] : 'Sin título';
      
      // Extraer slug
      const slugMatch = itemContent.match(/<wp:post_name><!\[CDATA\[(.*?)\]\]><\/wp:post_name>/);
      let slug = slugMatch ? slugMatch[1] : title.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
      
      // Extraer fecha
      const dateMatch = itemContent.match(/<wp:post_date><!\[CDATA\[(.*?)\]\]><\/wp:post_date>/);
      const date = dateMatch ? dateMatch[1].split(' ')[0] : new Date().toISOString().split('T')[0];
      
      // Extraer categorías
      const categories = [];
      const categoryRegex = /<category domain="category"[^>]*><!\[CDATA\[(.*?)\]\]><\/category>/g;
      let catMatch;
      while ((catMatch = categoryRegex.exec(itemContent)) !== null) {
        categories.push(catMatch[1]);
      }
      
      // Extraer descripción
      let description = '';
      const descMatch = itemContent.match(/<wp:meta_key><!\[CDATA\[_yoast_wpseo_metadesc\]\]><\/wp:meta_key>\s*<wp:meta_value><!\[CDATA\[(.*?)\]\]><\/wp:meta_value>/s);
      if (descMatch) {
        description = descMatch[1].replace(/"/g, '\\"');
      }
      
      // Extraer contenido
      let content = '';
      const metaRegex = /<wp:postmeta>\s*<wp:meta_key><!\[CDATA\[gdlr-core-page-builder\]\]><\/wp:meta_key>\s*<wp:meta_value><!\[CDATA\[(.*?)\]\]><\/wp:meta_value>\s*<\/wp:postmeta>/gs;
      const metaMatch = metaRegex.exec(itemContent);
      
      if (metaMatch) {
        content = extractHTMLFromSerialized(metaMatch[1]);
      }
      
      if (!content) {
        // Buscar en otros meta_values
        const allMetaRegex = /<wp:meta_value><!\[CDATA\[(.*?)\]\]><\/wp:meta_value>/gs;
        let metaValueMatch;
        while ((metaValueMatch = allMetaRegex.exec(itemContent)) !== null) {
          const potentialContent = metaValueMatch[1];
          if (potentialContent.includes('<p') || potentialContent.includes('<img') || potentialContent.includes('<h')) {
            content = potentialContent;
            break;
          }
        }
      }
      
      // PROCESAR IMÁGENES
      let imageCount = 0;
      if (content) {
        // Extraer todas las URLs de imágenes
        const images = extractImagesFromHTML(content);
        imageCount = images.length;
        
        if (images.length > 0) {
          console.log(`\n📸 Post: ${title}`);
          console.log(`   Encontradas ${images.length} imágenes`);
          
          // Crear carpeta específica para este post
          const postImageDir = path.join(__dirname, '..', IMAGES_DIR, slug);
          await fs.mkdir(postImageDir, { recursive: true });
          
          // Descargar cada imagen
          let downloaded = 0;
          for (const imgUrl of images) {
            const filename = imgUrl.split('/').pop().split('?')[0];
            const localPath = path.join(postImageDir, filename);
            
            try {
              // Verificar si ya existe
              await fs.access(localPath);
              console.log(`   ⏭️  Ya existe: ${filename}`);
            } catch {
              // No existe, descargar
              try {
                console.log(`   ⬇️  Descargando: ${filename}`);
                await downloadImage(imgUrl, localPath);
                console.log(`   ✅ Descargada: ${filename}`);
                downloaded++;
                totalImages++;
              } catch (err) {
                console.log(`   ❌ Error: ${filename} - ${err.message}`);
              }
            }
          }
          
          // Actualizar rutas en el contenido
          content = updateImagePaths(content, slug);
          console.log(`   🔗 Rutas actualizadas a: /images/blog/${slug}/`);
        }
      }
      
      // Crear frontmatter
      let frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
slug: "${slug}"
date: "${date}"
`;

      if (categories.length > 0) {
        frontmatter += `categories: [${categories.map(c => `"${c}"`).join(', ')}]\n`;
      }
      
      if (description) {
        frontmatter += `description: "${description}"\n`;
      }
      
      frontmatter += `---\n\n${content}`;
      
      // Guardar archivo
      let filename = path.join(__dirname, '..', OUTPUT_DIR, `${slug}.md`);
      
      let counter = 1;
      while (true) {
        try {
          await fs.access(filename);
          filename = path.join(__dirname, '..', OUTPUT_DIR, `${slug}-${counter}.md`);
          counter++;
        } catch {
          break;
        }
      }
      
      await fs.writeFile(filename, frontmatter, 'utf-8');
      console.log(`   📝 Guardado: ${path.basename(filename)}${imageCount > 0 ? ` (${imageCount} imágenes)` : ''}`);
      
      postCount++;
    }
    
    console.log('\n✨ Migración completada!');
    console.log(`   - Posts convertidos: ${postCount}`);
    console.log(`   - Items ignorados: ${skippedCount}`);
    console.log(`   - Imágenes descargadas: ${totalImages}`);
    console.log(`   - Ubicación posts: ${OUTPUT_DIR}/`);
    console.log(`   - Ubicación imágenes: ${IMAGES_DIR}/`);
    
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

migrateWP();