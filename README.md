# Bitessy marketing website

A static, one-page public website for Bitessy and its first product, RewardBite. Built with Vite, React, TypeScript and plain CSS. Manrope is served locally as a single 25 KB variable Latin font, with font-display: swap; its SIL Open Font License is included in public/fonts/OFL.txt. RewardBite is in development and testing; the product composition uses fictional demo content.

Motion uses CSS keyframes, one-time IntersectionObserver reveals, and bounded desktop pointer parallax through requestAnimationFrame. Reduced-motion preferences show content immediately and disable motion; no animation library is required.

## Local development

```sh
npm install
npm run dev
```

## Checks

```sh
npm run typecheck
npm run lint
npm run build
```

Use `npm run preview` to preview the production build locally.

## Cloudflare Pages deployment

- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`
- Production custom domain: `bitessy.com`
- Environment variables: none required

The output is static. No backend, API, authentication, analytics or deployment credentials are needed. No deployment credentials should exist in this repository. Deployment is an owner action; this implementation does not deploy automatically.

## Structure

- `src/App.tsx`: page sections and authoritative company copy
- `src/components/`: header, original brand mark, illustrative product visual
- `src/sections/Capabilities.tsx`: capability grid and original inline icons
- `src/styles/site.css`: responsive layout, focus states and reduced-motion support
- `public/`: favicon, robots.txt and sitemap.xml
- `index.html`: canonical URL and search/social metadata
