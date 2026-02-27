// src/data/blog.ts
import type { MarkdownInstance } from 'astro';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description?: string;
  categories?: string[];
  content?: string;
  image?: string;
}

// Función para obtener todos los posts
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const posts = import.meta.glob('../content/blog/*.md', { eager: true });
  
  return Object.values(posts).map((post: any) => ({
    slug: post.frontmatter.slug,
    title: post.frontmatter.title,
    date: post.frontmatter.date,
    description: post.frontmatter.description,
    categories: post.frontmatter.categories || [],
    image: extractFirstImage(post.compiledContent?.() || ''),
  })).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// ✅ NUEVA FUNCIÓN: Obtener posts destacados para el home
export async function getFeaturedBlog(limit: number = 6): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts();
  return posts.slice(0, limit);
}

// Función para obtener un post por slug
export async function getBlogPostBySlug(slug: string) {
  const posts = await getAllBlogPosts();
  return posts.find(post => post.slug === slug);
}

// Función para obtener posts por categoría
export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts();
  return posts.filter(post => post.categories?.includes(category));
}

// Función para obtener todas las categorías únicas
export async function getBlogCategories(): Promise<string[]> {
  const posts = await getAllBlogPosts();
  const categories = new Set<string>();
  posts.forEach(post => {
    post.categories?.forEach(cat => categories.add(cat));
  });
  return Array.from(categories);
}

// Función para extraer la primera imagen del contenido
function extractFirstImage(content: string): string | undefined {
  const imgRegex = /<img[^>]+src="([^">]+)"/;
  const match = content.match(imgRegex);
  return match?.[1];
}

// Función para formatear fecha
export function formatBlogDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}