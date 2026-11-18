# CSET489 HerbalRoots SEO implementation

The React application now publishes 31 indexable pages as complete HTML documents. Search and the custom 404 are also prerendered. React hydrates those documents and serves subsequent in-app navigation. Query-filtered pages render using the actual browser query. The catalogue, local bag and enquiry flow, local demo forms, brand and layouts use the existing React components.

## Changes and rationale

| Original problem | Change and effect |
| --- | --- |
| Empty HTML shell and root-only routing | The existing Vite build emits the client assets, then renders the same React tree with a static router. Each canonical route gets an `index.html` and the deployable artifact includes `404.html`. Important content and internal links are available in the response without executing JavaScript. |
| Incorrect canonical host and project paths | `VITE_SITE_URL` is the sole input for Vite’s asset base, the router basename and all SEO URLs. The generated sitemap uses the same self-canonicals as the pages. The Pages workflow obtains the real URL from GitHub. |
| Metadata applied only after JS and stale article fields | The build and client use one metadata component. It emits distinct titles and descriptions, a canonical, robots directives, Open Graph and X cards. Client navigation replaces the managed tags together. The 1200 × 630 PNG card uses existing HerbalRoots artwork. |
| Conflicting crawl and indexing directives | Robots allows crawling and points to the sitemap on configured builds. Search and 404 use `noindex, follow` and have no canonical or sitemap entry. Search links use the trailing-slash path. |
| Invalid shop category and pillar-guide links | Fixed the route parameter, linked the homepage card to the pillar URL from the journal data, and reused the 404 UI for unknown article, product and ingredient slugs. Kept real HTML navigation and breadcrumb links. |
| Misleading offer data and inconsistent schema URLs | Added linked WebSite and academic project-team Organization data on the homepage. Seven guides have Article and BreadcrumbList graphs with deployment URLs, visible titles and real project bylines. Demo stock and prices remain visible in the catalogue. Demo listings do not qualify for Product/Offer rich-result markup, and the unneeded FAQ rich-result markup was removed. |
| Unverified benefit copy and missing sourcing | Revised the existing Bhringraj wash-day guide in place, including practical ingredient-label checks, an example routine, related site links, a conclusion and an FDA reference identified as US guidance. Updated About, contact and privacy copy to reflect the academic site and local form storage. [FDA cosmetic labeling claims](https://www.fda.gov/cosmetics/cosmetics-labeling/cosmetics-labeling-claims) |
| Late image discovery and external font CSS | Kept the lightweight illustration SVGs, supplied intrinsic dimensions and descriptive alt text, lazy-loaded secondary imagery and preloaded the home hero. The About portrait requests an 800 × 600 WebP. The same DM Serif Display and Inter families now load local Latin and Latin Extended WOFF2 files with font-display swap. |
| Accessibility and hydration | Improved heading hierarchy, field labels, navigation landmarks, keyboard skip target and small-screen layout. Restored bag and intro state after hydration so the initial browser tree matches the static HTML. |

## Files changed

- Build and deploy — `.github/workflows/pages.yml`, `herbalroots/.env.example`, `herbalroots/package.json`, `herbalroots/index.html`, `herbalroots/vite.config.ts`, `herbalroots/scripts/build.mjs`, `herbalroots/scripts/site-config.mjs`.
- Rendering and SEO — `herbalroots/src/App.tsx`, `main.tsx`, `entry-static.tsx`, `site.ts`, `vite-env.d.ts`, `structured-data.ts` and `components/SEOHead.tsx` under `herbalroots/src/`. Removed the fixed `herbalroots/public/robots.txt` and `herbalroots/public/sitemap.xml`.
- Page changes — all 16 files under `herbalroots/src/pages/` for page metadata, with targeted link, content, heading, image and accessibility changes where applicable. The Bhringraj guide content and its optional contextual link type live in `herbalroots/src/data/articles.ts` and `herbalroots/src/types/index.ts`.
- Shared UI — `ArticleCard.tsx`, `CartDrawer.tsx`, `Footer.tsx`, `Header.tsx`, `HerbalRootsIntro.tsx`, `IngredientCard.tsx`, `NewsletterSection.tsx`, `ProductCard.tsx` under `herbalroots/src/components/` and `herbalroots/src/context/CartContext.tsx`.
- Media and documentation — `herbalroots/src/fonts/` (CSS and six WOFF2 files), `herbalroots/public/fonts/` (two OFL licenses), `herbalroots/public/images/herbalroots-social.png`, plus the README and three `docs/SEO_*.md` reports.

## Publish on GitHub Pages

1. Put the contents of this project root in the intended GitHub repository so that `.github/workflows/pages.yml` is at its root. In **Settings → Pages**, select **GitHub Actions** as the publishing source. If using a custom domain, configure it there before building. [GitHub Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
2. Run **Deploy HerbalRoots to GitHub Pages** from the intended branch in the Actions tab. It builds with the configured Pages base URL and publishes only `herbalroots/dist/`. The workflow uses manual dispatch. [GitHub custom Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
3. If building locally, run `npm ci` in `herbalroots/`, set `VITE_SITE_URL` in `.env.local` or the environment to the final HTTPS URL including any project path, then run `npm run build:pages`. Publish `dist/`. Plain `npm run build` without a URL is a preview build with no sitemap, canonical, social URL metadata or JSON-LD. Use `npm run preview` for local preview. Vite’s preview server can rewrite missing paths to the app, so use an ordinary static file server to test true 404 behavior.
4. After publishing, check a deep article, a category, an unknown URL, `sitemap.xml`, and the public HTML canonical. Submit the sitemap in Search Console and check a live article in the Rich Results Test. [Google sitemap submission](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)

## Hosting boundaries and remaining work

- A project site publishes its generated robots file under the project path. Crawler directives apply only at the host root. If the account controls the host-root Pages site, its robots.txt can reference the project sitemap. The project sitemap can also be submitted directly in Search Console. [Google robots.txt location](https://developers.google.com/crawling/docs/robots-txt/create-robots-txt)
- GitHub Pages serves the top-level `404.html` for missing URLs. The app package cannot set custom HTTP status or redirect rules on GitHub Pages. Directory-based URLs and canonical tags are used for known pages. [GitHub custom 404 pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site)
- The final host and repository were not provided. Live routing, social card previews, Search Console and public URL validation remain pending. The About portrait still depends on its original external host. Legacy health articles and catalogue claims still need editorial review before reuse beyond the academic prototype.
- Local mobile Lighthouse showed faster first paint and a higher median LCP. The existing React Router dependency chain has outstanding advisories. See the [test results](SEO_TEST_RESULTS.md) for measurements and audit status.
