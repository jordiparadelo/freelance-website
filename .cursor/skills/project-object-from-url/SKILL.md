---
name: project-object-from-url
description: Generates a single ready-to-paste TypeScript Project object for PROJECTS in frontend/src/lib/constants.ts from a provided URL. Use when the user asks to create a project entry, portfolio project object, or constants.ts project item from a website link.
---

# Project Object From URL

## When to use

Use this skill when the user explicitly asks to generate one new `Project` entry for `PROJECTS` in `frontend/src/lib/constants.ts` from a URL.

## Required workflow

1. Read `frontend/src/types/index.ts` and follow the `Project` interface exactly.
2. Read existing entries in `frontend/src/lib/constants.ts` and match project style, tone, and structure.
3. Scrape or analyze the provided URL.
4. Translate all discovered content to English.
5. Build exactly one new `Project` object.

## Output format (strict)

Return only:
- A short 1-2 sentence summary.
- One ready-to-paste TypeScript object (no additional prose).

## Required fields

The object must include:
- `id`
- `href`
- `image`
- `title`
- `details` with:
  - `brief`
  - `blob`
  - `client`
  - `type`
  - `industries`
  - `year`
  - `roles`
  - `collaboration`
  - `logo`
- `challenge`
- `services`
- `preview`
- `categories`
- `gallery`

## Constraints

- `preview` must exactly equal the input URL.
- If data is uncertain, use sensible placeholders and annotate with `// TODO: verify`.
- Keep wording concise and portfolio-ready.
- Keep `blob` tight to ~150 characters focus on explain briefly the objective of the type and objective of the site
