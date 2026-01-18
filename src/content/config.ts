import { defineCollection, z } from 'astro:content';
import { AUTHOR_NAME } from '../consts';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		author: z.string().default(AUTHOR_NAME),
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = { blog };
