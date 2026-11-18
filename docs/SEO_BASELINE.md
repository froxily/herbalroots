# CSET489 HerbalRoots SEO baseline

Audited on 18 November 2026 before changes to the React application.

## Repository and route inventory

The handoff was a nested extracted directory, with no Git metadata or configured remote. The site root contains the `herbalroots/` React 18, TypeScript, Vite 5, Tailwind and React Router 6 application, the separate PHP `herbalroots-theme/` WordPress theme, a `deployment/` folder for the WordPress/VPS setup, and unrelated academic notebooks, a dataset and a PDF. The React app is the one targeted for GitHub Pages.

| Route group | Original entries |
| --- | --- |
| Core | `/`, `/about/`, `/blog/`, `/ingredients/`, `/shop/`, `/contact/` |
| Legal | `/privacy-policy/`, `/terms/`, `/disclaimer/` |
| Pillar guide | `/hair-fall-treatment-at-home/` |
| Journal details | `/blog/onion-juice-for-hair-fall/`, `/blog/amla-for-hair-growth/`, `/blog/dandruff-home-remedies/`, `/blog/hair-fall-after-delivery/`, `/blog/foods-for-healthy-hair/`, `/blog/how-to-use-bhringraj-oil/` |
| Ingredient details | `/ingredients/amla/`, `/ingredients/bhringraj/`, `/ingredients/neem/`, `/ingredients/shikakai/`, `/ingredients/hibiscus/`, `/ingredients/fenugreek/` |
| Shop categories | `/shop/hair-oils/`, `/shop/shampoos/`, `/shop/hair-masks/` |
| Product details | `/shop/bhringraj-hair-oil/`, `/shop/amla-hair-oil/`, `/shop/herbal-shampoo/`, `/shop/hibiscus-hair-mask/`, `/shop/neem-scalp-care/`, `/shop/shikakai-hair-cleanser/` |
| Utilities | `/search/`, wildcard fallback, `robots.txt` and `sitemap.xml` |

## Observations

- The original TypeScript and Vite production build passed. The only page document was `dist/index.html` with an empty React root and generic homepage metadata. The BrowserRouter and JavaScript effect supplied page content, titles, canonicals, social tags and JSON-LD after loading. Static deep links and a custom Pages 404 were missing.
- Vite, BrowserRouter and public image URLs assumed deployment at the host root. A project prefix would break navigation or assets. The header and footer already used real React Router links, and the UI had a main landmark, skip link, responsive layouts and visible breadcrumbs on detail pages.
- The category dispatcher passed a `slug` route parameter while the category page read `category`, so its three routes redirected to the catalogue. Home also linked to the pillar guide under a duplicate blog path.
- The 31-entry sitemap, robots sitemap pointer, source canonicals and schema identifiers used the example host `herbalroots.in`. Robots also disallowed search, preventing a crawler from reading the noindex directive on that page. Article-specific meta tags could remain after client-side navigation. Social images could be relative SVGs. Product JSON-LD included demo prices and stock as offers. Article JSON-LD used relative images and represented the project-team byline as a person.
- Most pages had a meaningful H1 and many images already had useful alternative text. Some heading levels were skipped and some form controls lacked explicit accessible labels. Mobile had responsive grids and a menu. The homepage floating badge extended beyond its mobile container. The first-visit animation already supported skipping and reduced motion.
- The twenty existing content SVGs were approximately 1.3–6.8 kB each. Cards often lazy-loaded imagery and aspect-ratio wrappers already reserved space. Images lacked explicit intrinsic dimensions, several secondary images loaded eagerly, and the home hero was discovered after JavaScript. Google Fonts supplied a render-blocking stylesheet. About used a remote portrait at a single fixed width.
- The homepage, About page and multiple substantial journal entries existed. The Bhringraj oil guide was selected for editorial improvement because its application timings and benefits read as prescriptive, and it lacked a linked source for its discussion of cosmetic product claims. The other legacy health content was outside the targeted editorial pass.

## Initial mobile Lighthouse snapshot

Lighthouse 13.6.0, Headless Chromium 157 via Brave on Windows, default simulated mobile throttling, cold homepage navigation, original production bundle served using Vite preview on loopback. This was one run. See [test results](SEO_TEST_RESULTS.md) for compressed static-server comparisons.

| Metric | Result |
| --- | ---: |
| Performance | 98 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |
| Agentic Browsing | 50 |
| First Contentful Paint | 1.6 s |
| Largest Contentful Paint | 2.1 s |
| Total Blocking Time | 50 ms |
| Cumulative Layout Shift | 0.016 |
| Speed Index | 1.9 s |

Lighthouse flagged the home hero as missing from the initial document, without a high-priority fetch hint. The initial SEO score reflects a rendered local homepage and does not measure deep-link status, raw HTML coverage or the accuracy of the canonical host. Original bundles were 400.68 kB JavaScript and 40.00 kB CSS before gzip, 112.08 kB and 7.90 kB after gzip. There was no configured app test or lint script.
