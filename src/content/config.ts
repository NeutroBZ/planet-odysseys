// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.string().transform(str => new Date(str)),
    categories: z.array(z.string()).optional(),
    description: z.string().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};