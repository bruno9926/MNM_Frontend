# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **pnpm** (see `pnpm-lock.yaml`).

- `pnpm dev` — start the Vite dev server with HMR
- `pnpm build` — typecheck (`tsc -b`) then production build (`vite build`)
- `pnpm lint` — run ESLint over the repo
- `pnpm preview` — serve the production build locally

There is no test runner configured yet (no test script, no Vitest/Jest dependency).

`verbatimModuleSyntax` is enabled in `tsconfig.app.json`, so type-only imports must use `import type { ... }` (a plain `import` of a type-only binding will fail the build). ESLint currently uses `tseslint.configs.recommended` (not type-aware); the type-checked configs (`recommendedTypeChecked`/`strictTypeChecked`) described in `README.md` are not enabled.

## Architecture

MNM ("Music Near Me") is a React 19 + TypeScript SPA on Vite, styled with Tailwind CSS v4 (CSS-first config, no `tailwind.config.js` — configured via the `@tailwindcss/vite` plugin in `vite.config.ts`). Routing uses `react-router` (`src/app/routes/AppRoutes.tsx`, with path tokens in `routes.ts`; all pages except `NotFound` sit under a pathless `MainLayout` route). There's no data-fetching/state library yet: data is local mock arrays.

**Folder convention** (feature-sliced-design-like — follow this for new UI rather than inventing a new layout):
- `src/shared/ui/atoms/` — generic, app-wide reusable UI primitives (e.g. `Button.tsx`, `NavigationButton.tsx`).
- `src/shared/ui/components/` — larger reusable UI blocks composed from atoms that don't carry enough domain weight to be a feature (e.g. `FeaturedStory.tsx`: photo + title + description + "Leer Historia" link, content passed via props).
- `src/shared/ui/layout/` — app shell: `MainLayout` (navbar + `<Outlet />` + footer), `NavBar`, `Footer`.
- `src/features/{feature}/ui/` and `src/features/{feature}/model/` — feature-specific components and types. E.g. the `events` feature has `ui/MusicEvent.tsx` (a presentational event card) and `ui/NearMusicEvents.tsx` (composes mock data + renders a horizontally-scrolling list of `MusicEvent` cards), with the `MusicEvent` type in `model/musicEvent.ts`. The type is named `MusicEvent`, not `Event`, specifically to avoid shadowing the DOM's global `Event` type.
- `src/pages/` — page-level components that compose features into a full screen (e.g. `Home.tsx`), wired into `App.tsx`.

**Styling/theming system** lives in `src/styles/` (imported from `main.tsx` via `styles/index.css`):
- `index.css` is the entry point only: imports Tailwind and the other files (`themes` → `base` → `utilities`), declares the `dark` custom variant, and holds the `@theme inline` block. There's no `components.css` yet; create it (`@layer components`) only when a semantic composite class is needed.
- `themes.css` — semantic color tokens (`background`, `foreground`, `card`, `primary`, `secondary`, `muted`, `accent`, `destructive`, `border`, `input`, `ring`) as CSS custom properties on `:root` (a light palette — currently just a placeholder, not actually used) and `.dark` (the real palette), plus the brand gradients (`--gradient-brand`, `--gradient-brand-strong`) and `--background-gradient`. They're exposed as Tailwind utilities (`bg-primary`, `text-foreground`, etc.) by the `@theme inline` block in `index.css`, which maps `--color-*` to the `var(--*)` custom properties.
- `base.css` — element defaults in `@layer base` (`*` border color, `body` background gradient/font).
- `utilities.css` — custom utilities via Tailwind v4's `@utility` directive (not `@layer utilities`): `page-padding` (responsive horizontal page padding), `heroic-font` (applies the display font), `bg-brand-gradient` / `text-brand-gradient-strong` (brand gradients as background / clipped text), `scrollbar-thin` (styled thin scrollbar). There's also a custom font-size token, `text-gigantic` (150px), in the `@theme` block.
- Dark mode is *not* driven by `prefers-color-scheme` or a runtime toggle — `<html class="dark">` is hardcoded in `index.html`. If a theme toggle is added later, it needs to set/remove that class.
- Two Google Fonts are loaded via a `<link>` in `index.html`: **BBH Bartle** for display/headline text (applied via the `heroic-font` utility class) and **Trispace** as the default body font (set on `body` in `base.css`).
