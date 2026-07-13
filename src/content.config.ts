import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    growth: z.enum(['seedling', 'budding', 'evergreen']).default('seedling'),
    planted: z.coerce.date(),
    lastTended: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    constellation: z.string().default('Uncharted Space'),
    draft: z.boolean().default(false),
    order: z.number().optional()
  })
});

export const collections = { notes };
