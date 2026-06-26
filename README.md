# Maison Pampa

Static bilingual (French / English) guest guide for the Maison Pampa rental house, built with Astro.

## Develop

- `npm install`
- `npm run dev` then open the printed local URL
- `npm run build` (outputs static files to `dist/`)
- `npm run preview` (serve the built `dist/` locally)
- `npm test` (i18n parity and fallback checks)

## Structure

- Content lives in `src/i18n/fr.ts` and `src/i18n/en.ts`, keyed identically. A Vitest test (`src/i18n/i18n.test.ts`) fails if the two ever drift, so French and English stay in sync. To add a language later, add another dictionary file plus its routes.
- Pages are thin route files under `src/pages/` (French at the root, English under `/en/`) that wrap shared section components in `src/components/sections/`.
- Visual system (colours, fonts, spacing) is in `src/styles/tokens.css`; base styles in `src/styles/global.css`.

## Deploy (Vercel)

Set the production URL in `src/config.ts` (`SITE_URL`) so canonical links, hreflang,
the sitemap and social cards are correct, then deploy:

1. Commit and push the repo to GitHub.
2. On [vercel.com](https://vercel.com), **Add New Project** and import the repo.
   Vercel auto-detects Astro (build `astro build`, output `dist`). Click Deploy.
3. Copy your live URL (e.g. `https://your-project.vercel.app`) into `SITE_URL` in
   `src/config.ts` (and the `Sitemap:` line in `public/robots.txt`), commit, and
   redeploy. When you add a custom domain in Vercel, update `SITE_URL` to that.

Alternatively, `npm i -g vercel && vercel` from the project root.

## The hero (word-behind-the-house effect)

The hero stacks two images of the **same photo**, plus the word between them:

- `public/images/hero-bg.jpg` — the full photo (sky + house + garden)
- `public/images/foreground.webp` — the same frame with the sky erased to transparent

Because both layers use identical `object-fit: cover` they line up exactly, so the
word sits against the sky and is hidden by the house. As you scroll, the word sinks
down behind the house.

**To change the cut-out:** the editable source is `source-photos/foreground.png` (same
dimensions/framing as `hero-bg.jpg`, sky erased to transparent). After editing it, run
`python scripts/optimize-hero.py` to regenerate the optimized `public/images/foreground.webp`.

Other photos can be dropped into `public/images/` and referenced where placeholders
appear (e.g. the "About the house" figure on the home page).

## Booking button

The "Réserver" / "Book" button in the header links to whatever URL is set in
`src/config.ts` (`BOOKING_URL`). Replace that one value with your Airbnb listing URL.

## The gallery

The gallery section on the home page is driven by the `gallery.images` list in
`src/i18n/fr.ts` and `src/i18n/en.ts`. To add a photo: put the file in
`public/images/gallery/` (any size; ~1600px wide keeps it light), then add a matching
entry `{ src, alt }` to **both** dictionaries (same `src`, translated `alt`). The
hover-expand accordion picks it up automatically. Keep the two lists the same length —
a test enforces it.

## Notes

- Fonts are self-hosted via `@fontsource` (no third-party CDN), so no visitor data is sent to Google.
- The guest practical info (Wi-Fi, equipment, checklist, etc.) is intentionally not on the site; it lives on paper in the house.
