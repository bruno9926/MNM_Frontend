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

MNM ("Music Near Me") is a React 19 + TypeScript SPA on Vite, styled with Tailwind CSS v4 (CSS-first config, no `tailwind.config.js` — configured via the `@tailwindcss/vite` plugin in `vite.config.ts`). There's no router or data-fetching/state library yet: `App.tsx` renders `pages/Home.tsx` directly, and data is local mock arrays.

**Folder convention** (feature-sliced-design-like — follow this for new UI rather than inventing a new layout):
- `src/shared/ui/atoms/` — generic, app-wide reusable UI primitives (e.g. `Button.tsx`).
- `src/features/{feature}/ui/` and `src/features/{feature}/model/` — feature-specific components and types. E.g. the `events` feature has `ui/MusicEvent.tsx` (a presentational event card) and `ui/NearMusicEvents.tsx` (composes mock data + renders a horizontally-scrolling list of `MusicEvent` cards), with the `MusicEvent` type in `model/musicEvent.ts`. The type is named `MusicEvent`, not `Event`, specifically to avoid shadowing the DOM's global `Event` type.
- `src/pages/` — page-level components that compose features into a full screen (e.g. `Home.tsx`), wired into `App.tsx`.

**Styling/theming system** lives in `src/index.css`:
- Semantic color tokens (`background`, `foreground`, `card`, `primary`, `secondary`, `muted`, `accent`, `destructive`, `border`, `input`, `ring`) are defined as CSS custom properties on `:root` (a light palette — currently just a placeholder, not actually used) and `.dark` (the real palette). They're exposed as Tailwind utilities (`bg-primary`, `text-foreground`, etc.) via an `@theme inline` block that maps `--color-*` to the `var(--*)` custom properties.
- Dark mode is *not* driven by `prefers-color-scheme` or a runtime toggle — `<html class="dark">` is hardcoded in `index.html`. If a theme toggle is added later, it needs to set/remove that class.
- Custom one-off utilities are added with Tailwind v4's `@utility` directive (not `@layer utilities`): `page-padding` (responsive horizontal page padding), `heroic-font` (applies the display font), `scrollbar-thin` (styled thin scrollbar, `::-webkit-scrollbar-*` + Firefox `scrollbar-color`). There's also a custom font-size token, `text-gigantic` (150px), defined in the `@theme` block.
- Two Google Fonts are loaded via a `<link>` in `index.html`: **BBH Bartle** for display/headline text (applied via the `heroic-font` utility class) and **Trispace** as the default body font (set on `body` in `index.css`).
