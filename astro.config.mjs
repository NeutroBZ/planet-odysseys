import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  site: 'https://planetodysseys.com',
  output: 'static',
  adapter: vercel(),

  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],

  compressHTML: true,
});