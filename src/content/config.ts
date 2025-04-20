import { z, defineCollection } from 'astro:content';

const articleCollection = defineCollection({
    schema: z.object({
        title: z.string().max(100).min(1),
        date: z.string().regex(/^\d{4}-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01])$/), // YYYY-MM-DD
    }),
  });

export const collections = {
    // ${workingDirectory}/src/content/ninety/
    'ninety': articleCollection,
};
