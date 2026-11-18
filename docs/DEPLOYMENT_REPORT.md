# HerbalRoots deployment report

Deployed on 18 November 2026 for the CSET489 SEO mini-project.

| Item | Value |
| --- | --- |
| Public GitHub repository | [froxily/herbalroots](https://github.com/froxily/herbalroots) |
| Live Pages site | [HerbalRoots](https://froxily.github.io/herbalroots/) |
| Workflow | [Deploy HerbalRoots to GitHub Pages](https://github.com/froxily/herbalroots/actions/workflows/pages.yml) |
| Initial deployment | [Run 44268192784](https://github.com/froxily/herbalroots/actions/runs/44268192784), build and deploy succeeded |
| Branch and environment | `main` and `github-pages` |
| Configuration | Actions publishing, public access and enforced HTTPS |

## Build and release

The workflow runs on pushes to `main` and on manual dispatch. The build job uses Node.js 24 and installs locked packages with `npm ci`. Then `npm run build:pages` runs TypeScript, builds the Vite assets, prerenders all routes and checks the canonical/indexing configuration. The workflow uploads only `herbalroots/dist/`. The deploy job uses the official Pages deployment action and has Pages write and OIDC token permissions.

GitHub Pages supplies its configured base URL to `VITE_SITE_URL`. The build uses that value for the asset and router prefix, canonical URLs, social metadata, JSON-LD, sitemap entries and the robots sitemap reference. There is no separate publishing branch.

The deliverable contains the React app, font licenses and illustration assets, and its SEO and deployment documentation. Unrelated notebooks, the dataset, and the separate WordPress and VPS files remain in the local handoff outside the public Git repository. The Git commit author uses the account’s GitHub noreply address.

## Limitations and follow-up

- This project site serves [robots.txt below its repository path](https://froxily.github.io/herbalroots/robots.txt). A crawler uses the host-root robots file. Submit the project sitemap directly in Search Console. [Google robots.txt scope](https://developers.google.com/crawling/docs/robots-txt/create-robots-txt)
- The installed React Router 6.30.6 is the latest 6.x release available at audit time. The audit still reports two moderate production entries in the React Router dependency chain. Their available advisory fix requires React Router 7. The production app uses a static build and React Router’s declarative browser router, with no server hydration error payload. The deployment retained version 6. The full CI audit also reports 14 findings including build dependencies. [React Router advisory 1](https://github.com/advisories/GHSA-wrjc-x8rr-h8h6) · [React Router advisory 2](https://github.com/advisories/GHSA-337j-9hxr-rhxg)
- Search Console ownership and GA4 configuration await the project owner’s Google account and actual identifiers. GA4 is disabled in this deployment. See [Google tools setup](GOOGLE_TOOLS_SETUP.md).
- Hosting on GitHub Pages addresses the React deployment. The handbook’s separate VPS and WordPress requirement remains separate.

See the [production SEO verification](PRODUCTION_SEO_VERIFICATION.md) for live HTTP, browser and Lighthouse checks.
