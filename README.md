# NJSharp - Resource Site

This is an educational resource site built with [Astro](https://astro.build) and designed to run on Cloudflare Pages. It features a **Central Content Library** (for Learning Outcomes) and a **Course Database** (defining course structures).

## 📚 Content Management Guide

This site uses two distinct content collections: **Courses** (JSON data) and **Library** (Markdown content).

### 1. How to Add a New Course
Courses are defined as JSON files in `src/content/courses/`.

1.  Create a new file, e.g., `src/content/courses/maths-n5.json`.
2.  Add the following structure:

```json
{
  "title": "Mathematics",
  "description": "The complete National 5 Mathematics course.",
  "level": "National 5",
  "levelId": "l5",
  "units": [
    "algebra",
    "geometry",
    "trigonometry"
  ]
}
```

* level: The human-readable text shown on badges (e.g., "National 5").

* levelId: Crucial. This ID (e.g., "l5") tells the system which folder to look inside within the Content Library.

* units: A list of unit IDs. These IDs link the course to the specific Markdown files in the library.

2. How to Add Units & Learning Outcomes (LOs)

All teaching material lives in src/content/library/. The structure is organized by Level Folder > Unit Folder > LO File.

**Step A: Create the Structure**

If you defined "levelId": "l5" and a unit "algebra" in your course, you must create this exact path: src/content/library/l5/algebra/

**Step B: Add an LO File**

Create a Markdown file for the learning outcome, e.g., src/content/library/l5/algebra/lo1-variables.md.

``` Markdown
---
title: "LO1: Understanding Variables"
unit: "algebra"
order: 1
---

## Introduction
Write your educational content here using Markdown or MDX...
```

* title: The name of the LO shown in the menu.

* unit: Must match the string used in your Course JSON units list.

* order: Controls the sort order in the sidebar menu (1, 2, 3...).

3. Reusing Unit Names (Multi-Level)

You can have an "Algebra" unit in Level 5 and Level 6 without conflict.

    Level 5 Course: Set "levelId": "l5" and include "algebra" in units.

        System looks in: src/content/library/l5/algebra/

    Level 6 Course: Set "levelId": "l6" and include "algebra" in units.

        System looks in: src/content/library/l6/algebra/

This allows you to keep unit names simple ("algebra", "calculus") while keeping the difficulty levels strictly separated in folders.

Technical Setup & Commands

Inside of your project, you'll see the following folders and files:
File/Folder	Description
src/content/courses/	Database: JSON files defining courses.
src/content/library/	Content: Markdown/MDX files organized by level/unit.
src/pages/	Astro routes (URL structure).
public/	Static assets like images and fonts.

Commands

All commands are run from the root of the project, from a terminal:
Command	Action
npm install	Installs dependencies
npm run dev	Starts local dev server at localhost:4321
npm run build	Build your production site to ./dist/
npm run preview	Preview your build locally, before deploying
npm run deploy	Deploy your production site to Cloudflare