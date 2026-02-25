// src/types/astro.d.ts
import type { Tour } from '../data/tours';

declare module 'astro' {
  interface AstroGlobalProps {
    featuredTours?: Tour[];
  }
}