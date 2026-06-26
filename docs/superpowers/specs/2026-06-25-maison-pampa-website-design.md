# Maison Pampa — Website Design Spec

Date: 2026-06-25
Status: Approved (pending spec review)

## 1. Purpose

A cool, modern but not overly professional website for the owner's vacation rental house, **Maison Pampa** (a renovated 1976 *longère normande* in Anvéville, Normandy; hosts Stéphanie & Brice). It presents all the information from the printed guest guide (`guide Maison Pampa - FR.pdf`) in a warm, editorial, browsable form, in French and English. No backend is needed: the content is static.

## 2. Goals & success criteria

- All guide content is reproduced and organized across distinct pages.
- French (default) and English versions, switchable from the header.
- A memorable landing hero where a large serif word rises and disappears *behind* a cut-out of the house façade as the user scrolls (Apple-lockscreen feel).
- A crafted, editorial aesthetic that matches the PDF brand and explicitly avoids generic "AI-generated" design tells.
- Builds to static files deployable for free (Netlify / Vercel / Cloudflare Pages / GitHub Pages).

## 3. Out of scope (for now)

- Real photography (placeholders used; swappable later).
- Actual deployment.
- Access-code gating of sensitive info (the site is public for now; components are built isolated so gating can be added later without redesign).
- Languages beyond FR and EN (structure supports adding more).

## 4. Tech stack

- **Astro**, `output: 'static'`. No backend.
- **i18n**: Astro built-in routing. French is the default locale served at the root (`/`, `/la-maison`, …). English is prefixed (`/en/`, `/en/the-house`, …). `prefixDefaultLocale: false`.
- **Styling**: vanilla CSS with design tokens (custom properties). No Tailwind, to keep the editorial look precise.
- **Hero interaction**: vanilla JS + CSS scroll-driven animation (`animation-timeline: scroll()`), with a JS scroll-listener fallback for browsers lacking support. Honors `prefers-reduced-motion`.
- Fonts: **EB Garamond** (headings/body serif) + **Cormorant Garamond** italic (the "Bienvenue chez nous" style accent), matching the PDF logo. A quiet sans (e.g. system or a neutral grotesk) only if needed for small UI labels — used sparingly, never as pill chips.

## 5. Content model (no duplicated markup)

All guide text lives in two parallel dictionaries with identical key structure:

- `src/i18n/fr.ts`
- `src/i18n/en.ts`

A `useTranslations(locale)` helper returns the active dictionary. Pages render from it, so FR/EN never drift in layout and a new language is just one more file. Missing English keys fall back to the French value.

Content groups (keys): site/brand, navigation labels, home (welcome, longère story, overview links), house info (address, contacts, check-in/out, house rules), equipment guide entries (Wi-Fi, HiFi, heating, dishwasher, hot water, gas, phone, toilets, fireplace, terrace, BBQ, laundry, in-house activities), safety (emergency numbers, first aid, smoke detector, water/electricity shut-offs), restaurants, shopping (markets, fish/oysters, meat/wine, Doudeville shops), activities (flea markets, visits, sports, beaches), FAQ, departure checklist, thank-you.

## 6. Site structure (Option A — six pages)

1. **Accueil** — hero façade; welcome from Stéphanie & Brice; the longère story; overview links to every section.
2. **La Maison** — address & contacts; check-in / check-out; house rules (non-smoking, no pets, no parties, quiet hours, no shoes upstairs, energy, bins).
3. **Guide pratique** — how everything works (all equipment entries), with **Safety & Emergencies** as a clearly separated section on the same page.
4. **Les Environs** — where to eat, shopping, and what to do nearby, presented as tabbed/segmented sections.
5. **FAQ** — the frequent questions in an accordion.
6. **Avant de partir** — the departure checklist plus the thank-you note.

Each page exists at its FR route and its `/en/` counterpart.

## 7. Components

- `Layout.astro` — `<head>`, font loading, header nav, footer. Header holds page links and the `LanguageToggle`.
- `LanguageToggle` — swaps to the equivalent page in the other locale (preserves current page).
- `Hero` — the scroll effect (see §8).
- Section primitives, styled to the editorial system: `Card`, `Tabs` (Les Environs), `Accordion` (FAQ), `InfoRow`, `Checklist`, `ContactCard`, `EmergencyCard`, `EquipmentItem`.
- `PlaceholderImage` — renders a styled placeholder; real photos drop in later by swapping one asset path, no markup change.
- Sensitive-info pieces (Wi-Fi password, key-box location, alarm, personal contacts) are isolated components so they can later be moved behind an access code.

## 8. Hero behaviour

Three stacked layers:

1. Background: sky / garden.
2. Middle: the large serif word (e.g. **PAMPA**).
3. Foreground: a transparent-PNG cut-out of the façade.

On scroll, the middle word translates upward and fades, sitting between background and foreground so it disappears behind the roofline. Implemented with CSS scroll-driven animation and a JS fallback. With `prefers-reduced-motion`, the hero is static (word simply present, no scroll animation). Until a real photo exists, the foreground is a tasteful illustrated/SVG house silhouette; swapping in `facade.png` later requires no code changes. On mobile the effect scales down and remains smooth.

## 9. Visual design — "Botanical Pine"

- Background: warm cream (`#F7F3EA`); secondary tint (`#EDF0E6`); paper white where crispness is wanted.
- Ink: `#2B3A35`. Primary: pine `#2F5D54` / `#244A43`. Accent: sage `#A3B97C` / `#7E955A`.
- Headings in EB Garamond; the brand sub-line in Cormorant italic. Generous margins, asymmetry where it earns it, hairline rules.

### Anti-AI-aesthetic rules (hard constraints)

The site must NOT read as generic AI output. Forbidden:

- Em/long dashes in body copy — use commas, periods, or parentheses.
- Small rounded pill/tag chips (uppercase letter-spaced badges). Use plain text labels, hairline rules, or restrained underlines instead.
- Purple/violet gradients, glassmorphism, blanket glow/shadow on every box.
- Everything-centered layouts and uniform oversized border-radius.
- Emoji in headings; three-icon "feature card" grids; filler marketing fluff.

Prefer real typographic hierarchy, restraint, and print-inspired layout drawn from the PDF.

## 10. Edge cases & error handling

- Missing EN translation key → fall back to FR value.
- Missing image asset → styled `PlaceholderImage`.
- `prefers-reduced-motion` → static hero, no scroll-driven motion.
- Mobile → hero scales; header nav collapses to a menu.
- Language toggle on any page → equivalent page in the other locale.

## 11. Verification

- `astro build` succeeds and emits both FR and EN routes for all six pages.
- Manual: hero scroll effect works in a current browser and degrades gracefully (and with reduced motion); language toggle preserves the current page; all pages responsive; no broken internal links.
- Spot-check that no forbidden anti-AI tells (em dashes, pill chips, etc.) crept in.

## 12. Deployment (later)

Static output in `dist/`, deployable to any static host. Not performed as part of this build unless requested.
