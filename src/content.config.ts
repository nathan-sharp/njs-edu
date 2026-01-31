// src/content.config.ts
import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const library = defineCollection({
	// Loads LOs from src/content/library/
	loader: glob({ base: "./src/content/library", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		unit: z.string(), // Must match the ID in the course file
		order: z.number().default(0), // Used to sort LOs in the menu
	}),
});

const courses = defineCollection({
	// Loads Courses from src/content/courses/
	loader: glob({ base: "./src/content/courses", pattern: "**/*.{json,yaml}" }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		level: z.string(),
		units: z.array(z.string()), // List of unit IDs
	}),
});

export const collections = { library, courses };