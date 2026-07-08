import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

const articlesCollection = defineCollection({
	loader: glob({
		base: './src/content/articles',
		pattern: '**/*.{md,mdx}'
	}),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			created: z.coerce.date(),
			tags: z.array(z.string()),
			coverImage: image().nullish(),
			hidden: z.boolean().nullish()
		})
});

export const collections = {
	articles: articlesCollection
};
