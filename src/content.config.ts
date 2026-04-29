import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('K9 Academy'),
    tags: z.array(z.string()),
    keywords: z.array(z.string()),
    servicePage: z.string(),
    servicePageLabel: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
