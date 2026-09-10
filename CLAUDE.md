# Kristen's Website

Portfolio site for an accountant (the developer's wife).

## Stack

- Vite + React + TypeScript
- Tailwind CSS (v4, via `@tailwindcss/vite` plugin — no separate `tailwind.config.js`)
- Package manager: pnpm (use `pnpm`, not `npm`/`yarn` — see `pnpm-lock.yaml`)

## Scripts

- `pnpm dev` — start the Vite dev server (http://localhost:5173)
- `pnpm build` — type-check (`tsc -b`) then `vite build` to `dist/`
- `pnpm lint` — ESLint
- `pnpm test:e2e` / `pnpm test:e2e:ui` — Playwright e2e tests (see `e2e/`)

## Hosting & Deployment

- Built and hosted as a static site on GitHub Pages, served from `dist/`.
- `.github/workflows/deploy.yml` builds the app and deploys `dist/` to Pages via `actions/deploy-pages` on every push to a dedicated `builds` branch — push/merge into `builds` whenever the current state should go live for client review, independent of what's in progress on `separate-pages`/`dev`/`main`. Requires the repo's Settings → Pages → Source to be set to "GitHub Actions" (one-time manual step).
- No custom domain yet, so this is a GitHub project page served from a `/kristen-accounting-website-project/` subpath — see the `base` in `vite.config.ts`, the `basename` on `BrowserRouter` in `src/main.tsx`, and the `public/404.html` SPA-redirect fallback (all three need updating together if a custom domain or root `username.github.io` page is set up later, since that changes the base path to `/`).

## Project Structure

- `src/App.tsx` — currently a single-file monolith containing the whole page (header, hero, services, about, testimonials, contact form, footer sections). Not yet split into components — don't assume a `components/` directory exists.
- `src/assets/` — images/icons used by the site.
- `e2e/` — Playwright specs (`home.spec.ts` so far), configured via `playwright.config.ts` at repo root.
- `references/` — design inspiration, not app code:
  - `reference-sites.md` lists sites to draw from: beverlyaccounting.com (elegance) and honestaccountinggroup.com (animations).
  - `logo-reference.png`
- `studio/` — the Sanity Studio project (its own pnpm workspace with its own `package.json`/lockfile). Out of scope for now — see below.
- `dist/` — build output, gitignored.

## Not Implemented Yet

These are planned but intentionally out of scope until called for — don't build them proactively:

- **Sanity CMS**: will eventually provide data hosting/management so the client (the accountant) can edit content herself under her own Sanity account. Not wired up until the static site is built out as needed. Ignore the Sanity Studio project in `/studio` for now.
- **Contact form (Formspree)**: the contact form UI exists in `App.tsx` (`#contact` section) but `handleSubmit` is a stub — it doesn't actually submit anywhere yet. Will eventually POST via Formspree.
- **Cloudflare Turnstile**: will protect the contact form once implemented, but not until further notice.

## Tooling Notes

- A Playwright MCP server is configured in `.mcp.json` (`pnpm dlx @playwright/mcp@latest`) — available for browser-driven checks in addition to the `test:e2e` Playwright test suite.
- A Sanity MCP server is also connected in this environment for future CMS work, but the Studio itself isn't part of the active build yet.
