# USS Orchid

**Orchid Quest** is the public digital constellation of The Q.U.I.L.L. Project, presented as an interactive research vessel.

> Your mission? To envision. To seek out new ideas and new possibilities. To boldly think what no mind has thought before.

The site is built with [Astro](https://astro.build/) and inspired by the MIT-licensed [Mycelium theme](https://github.com/0bserver07/mycelium-theme). It preserves Mycelium's central ideas: interconnected notes, backlinks, a knowledge graph, and seedling / budding / evergreen growth states.

## Local launch

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

## Publishing

Pushes to `main` build and deploy the site through GitHub Pages. The repository includes:

- `.github/workflows/ci.yml` for pull-request validation
- `.github/workflows/deploy.yml` for GitHub Pages
- `public/CNAME` for `orchid.quest`

In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. Then point the DNS for `orchid.quest` to GitHub Pages.

## Writing

Create Markdown files under `src/content/notes/`.

```yaml
---
title: A New Signal
description: What this note is investigating.
growth: seedling
planted: 2026-07-13
lastTended: 2026-07-13
tags: [research]
constellation: Uncharted Space
draft: false
---
```

Connect notes with `[[Wikilinks]]` or `[[target-slug|custom labels]]`.

## Vessel map

- **Bridge**: the homepage and current mission
- **Astrogation**: the interactive knowledge graph
- **Ship's Log**: all notes by date
- **Missions**: curated narrative routes through the constellation
- **Research Deck**: fields informing Q.U.I.L.L.
- **Engineering**: architecture and active prototypes

## Upstream relationship

This repository is not a GitHub fork. It is a standalone project inspired by Mycelium and retains the Mycelium MIT notice. Theme concepts can be incorporated deliberately without binding Orchid Quest's history to the upstream repository.
