# pskeough.github.io

Patrick Keough — personal portfolio site (Astro + Tailwind, Editorial Broadsheet design system).

## Stack

- Astro 5 (static output)
- Tailwind CSS
- MDX content collections (typed via Zod)
- Deployed to GitHub Pages via `withastro/action@v2`

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build
npm run preview
```

## Content

All site content lives under `src/content/` as MDX, organized into four collections:

| Collection | Path                           | Notes                              |
| ---------- | ------------------------------ | ---------------------------------- |
| research   | `src/content/research/`        | Papers and audits                  |
| projects   | `src/content/projects/`        | Software builds                    |
| writing    | `src/content/writing/`         | Categorized via frontmatter        |
| about      | `src/content/about/index.mdx`  | Bio                                |

Frontmatter schemas are defined in `src/content/config.ts`.

Many MDX files contain `<!-- TODO: Insert human prose here -->` sentinels — these mark places where Patrick's human-authored prose belongs. **Do not fill these in with AI-generated content.**

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml` which builds and publishes to GitHub Pages.

The `site` URL is set in `astro.config.mjs` to `https://pskeough.github.io`. Update if the repo or domain changes.
