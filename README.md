# Nexa Hub Services — nexahubservices.in

Marketing website for **Nexa Hub Services** (React + Vite + Tailwind CSS).

```bash
npm install
npm run dev      # local development
npm run build    # production build → dist/
```

## Before going live

| What | Where |
| --- | --- |
| Logo | `src/components/Logo.jsx` → import the logo files and set `LOGO_DARK` / `LOGO_LIGHT` |
| Favicons & social share images | `public/favicon-32.png`, `favicon-192.png`, `favicon-512.png`, `favicon-maskable-512.png`, `og-image.jpg`, `twitter-card.jpg` |
| Business email (currently `info@nexahubservices.in`) | `src/utils/constants.js` → `BRAND.email`, `index.html`, `public/llms.txt` |
| Office street address / Google Maps link (optional) | `src/utils/constants.js` → `BRAND.address`, `BRAND.mapLink` |
| Social profile links (icons appear automatically once filled) | `src/utils/constants.js` → `BRAND.social`, `index.html` → `sameAs` |
| Founder photo (replaces the monogram) | `src/utils/constants.js` → `TEAM[0].image` |
| Stats, prices & testimonials (demo values) | `src/utils/constants.js` → `STATS`, `SERVICES`, `PARENT_SERVICES`, `TESTIMONIALS` |

Service pages are generated from `SERVICES` in `src/utils/constants.js` via the `/services/:slug` route — add an entry there (and to `public/sitemap.xml`) to create a new page.

## SEO / AEO / GEO

- Per-page titles, descriptions, canonical URLs, Open Graph and Twitter tags via `src/components/SEO.jsx`
- JSON-LD: ProfessionalService / LocalBusiness with Ahmedabad geo & founder (`index.html`), Service, BreadcrumbList, FAQPage and Blog (`src/utils/schema.js`)
- `public/sitemap.xml`, `public/robots.txt` (AI crawlers allowed) and `public/llms.txt`
