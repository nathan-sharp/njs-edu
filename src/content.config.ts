// src/content.config.ts
import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const library = defineCollection({
	loader: glob({ base: "./src/content/library", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		unit: z.string(),
		order: z.number().default(0),
	}),
});

const courses = defineCollection({
	loader: glob({ base: "./src/content/courses", pattern: "**/*.{json,yaml}" }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		level: z.string(),
		levelId: z.string(),
		units: z.array(z.string()),
	}),
});

// RENAMED FROM 'blog' TO 'news'
const news = defineCollection({
	loader: glob({ base: "./src/content/news", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

// Export 'news' instead of 'blog'
export const collections = { library, courses, news };