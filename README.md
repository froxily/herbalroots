# HerbalRoots

HerbalRoots is an Ayurvedic hair-care education website for the CSET489 Search Engine Optimization mini-project. It includes a botanical library, a hair-care journal, and a searchable demonstration catalogue with local shopping bag and enquiry flows.

[Visit the live HerbalRoots site](https://froxily.github.io/herbalroots/)

The site is an academic demonstration. The catalogue and forms illustrate a website experience. Form entries and bag contents stay in the browser. The site offers no purchases or payment processing.

## Stack and SEO

React 18, TypeScript, Vite, Tailwind CSS and React Router 6. The production build generates static HTML for 31 public pages, search and a custom 404. Public pages use page-specific titles, descriptions, canonical URLs and social metadata. The build also generates JSON-LD on eligible pages, `sitemap.xml` and `robots.txt`.

## Local development

With Node.js 24 and npm installed, run the following from the repository root.

```sh
cd herbalroots
npm ci
npm run dev
npm run typecheck
npm run build
```

Use the local address printed by Vite. For a publishable artifact, set `VITE_SITE_URL` in `herbalroots/.env.local` to the actual Pages base URL, then run `npm run build:pages`. Output is written to `herbalroots/dist/`.

## Deployment

GitHub Actions builds and deploy on pushes to `main` and supports manual dispatch. The workflow reads the public URL from GitHub Pages configuration.

- [SEO baseline](docs/SEO_BASELINE.md)
- [SEO implementation](docs/SEO_IMPLEMENTATION.md)
- [Local verification](docs/SEO_TEST_RESULTS.md)
- [Deployment report](docs/DEPLOYMENT_REPORT.md)
- [Production SEO verification](docs/PRODUCTION_SEO_VERIFICATION.md)
- [Google tools setup](docs/GOOGLE_TOOLS_SETUP.md)

This React deployment is the GitHub Pages portion of the project. The academic handbook’s separate VPS and WordPress requirement is independent of this deployment.
