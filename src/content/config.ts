import { z, defineCollection } from 'astro:content';

const articlesCollection = defineCollection({
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
