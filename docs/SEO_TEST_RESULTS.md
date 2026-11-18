# CSET489 HerbalRoots SEO test results

Tested locally on 18 November 2026 using Node.js 24.20.0, npm 11.19.0 and Chromium 157 via Brave on Windows. The Pages layout was simulated by serving the production output as directory-index files under a project prefix. A reserved HTTPS hostname was used in the isolated build to assert URL generation. It is absent from the application source and deployment settings.

## Results

| Status | Check | Observed result |
| --- | --- | --- |
| PASS | Clean install and TypeScript | `npm ci` installed the locked dependencies. `npm run typecheck` and TypeScript within both build commands completed. |
| PASS | Production HTML | 33 documents generated. The 31 public routes plus search and 404 each had one main landmark and a meaningful primary H1 in raw HTML. |
| PASS | Site URL configuration | Root-host and project-prefix builds generated the expected paths. The publish command failed with no URL. A subsequent local preview build generated HTML and robots.txt and omitted URL-dependent SEO output. |
| PASS | Internal links and resources | HTTP checks covered 97 distinct local link targets including fragments and 24 distinct local resources directly referenced by HTML or structured data. All 31 public routes were reachable from the homepage through static links. |
| PASS | Metadata | All 33 responses had distinct titles and descriptions. All 31 public responses had one matching canonical, Open Graph URL and X card. Client navigation from an article removed its article-only metadata and JSON-LD when moving to an ingredient page. |
| PASS | Sitemap and robots | Parsed the XML, verified the Sitemap Protocol namespace and checked 31 distinct absolute canonical URLs. Verified the robots sitemap pointer and crawl allowance. Search and 404 emitted `noindex, follow` and were absent from the sitemap. |
| PASS | Structured data | Parsed eight JSON-LD graphs, one for WebSite and Organization and seven for Article and BreadcrumbList. Checked article headline and canonical alignment, breadcrumb order, absolute deployment URLs and local image targets. Product and Offer markup was absent. |
| PASS | Images and layout | Checked 106 image elements for alt attributes and positive dimensions. At 320 px, sampled home, About, article, category, product, contact, search and 404 showed no horizontal overflow. Desktop navigation and workflows ran at 1440 px. |
| PASS | Direct URLs and 404 | All listed routes returned 200 with directory indexes, a sample slashless path redirected to its trailing-slash URL on the test server, and a missing URL returned the useful 404 document with HTTP 404. Navigating from an article to an ingredient worked with JavaScript disabled. |
| PASS | Browser interactions | Exercised keyboard skip, desktop and mobile navigation, article load-more and FAQ, query search and category filtering, sort control, adding and restoring the bag after reload, quantity change, newsletter and contact demo submissions, and the first-visit skip and repeat-visit intro states. No page errors or React hydration errors in those workflows. |
| FAIL | Mobile LCP improvement | Median simulated homepage LCP increased from 1.96 s to 2.85 s across the three runs per build. |
| FAIL | Dependency advisory audit | `npm audit --omit=dev` reported two moderate findings through the existing React Router dependency chain. The initial full audit reported 14 findings including tooling. Dependency major-version upgrades are outside this SEO patch. |
| NOT APPLICABLE | Existing project tests and lint | Both `npm run test --if-present` and `npm run lint --if-present` had no matching script. No existing suite or lint config in this app. |
| NOT TESTED | Live GitHub Pages | Publish workflow, final URL, host-root robots discovery and actual Pages HTTP responses require the intended repository and Pages configuration. |
| NOT TESTED | External validators and field performance | Google Rich Results Test, Search Console, public social previews, real-user Core Web Vitals and rankings were outside this local run. Lighthouse accessibility scores cover the automated homepage checks only. |

## Comparable mobile Lighthouse

The original production bundle and updated configured bundle were served from loopback using the same static server implementation with gzip. Lighthouse 13.6.0 used its default simulated mobile profile, 150 ms RTT, 1,638.4 kbps throughput and 4× CPU slowdown. Three homepage navigations per build were recorded. The original clean Vite-preview run is separately reported in [the baseline](SEO_BASELINE.md). These results are lab measurements.

| Median of three runs | Original | Updated |
| --- | ---: | ---: |
| Performance | 99 | 95 |
| Accessibility | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |
| Agentic Browsing | 100 | 100 |
| First Contentful Paint | 1.61 s | 0.82 s |
| Largest Contentful Paint | 1.96 s | 2.85 s |
| Total Blocking Time | 41 ms | 82.5 ms |
| Cumulative Layout Shift | 0.016 | 0.019 |
| Speed Index | 2.09 s | 1.37 s |

The performance scores in run order were 99, 97 and 99 before, then 92, 99 and 95 after. Simulated LCP ranged from 1.96–2.11 s before and 2.26–3.09 s after. Lighthouse found the hero image in the initial HTML with high priority in all updated runs. First paint and Speed Index improved, while the higher median LCP and Total Blocking Time lowered the median performance score. The updated project-prefix build bundled 396.52 kB JavaScript and 42.19 kB CSS before gzip, 111.59 kB and 8.31 kB after gzip. Font binaries are separate hashed resources.
