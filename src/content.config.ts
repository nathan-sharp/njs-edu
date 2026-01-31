// src/content.config.ts
import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const library = defineCollection({
	// Loader looks at all folders recursively (l5, l6, etc.)
	loader: glob({ base: "./src/content/library", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		unit: z.string(), // e.g. "algebra" (kept generic)
		order: z.number().default(0),
	}),
});

const courses = defineCollection({
	loader: glob({ base: "./src/content/courses", pattern: "**/*.{json,yaml}" }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		level: z.string(), // Human readable: "National 5"
		levelId: z.string(), // FOLDER NAME: "l5" (Must match library folder)
		units: z.array(z.string()), // e.g. ["algebra", "geometry"]
	}),
});

export const collections = { library, courses };