# HerbalRoots production SEO verification

Verified against the public HTTPS deployment on 18 November 2026. The original code deployment was [Actions run 44268192784](https://github.com/froxily/herbalroots/actions/runs/44268192784).

| Status | Live check | Result |
| --- | --- | --- |
| PASS | [Home](https://froxily.github.io/herbalroots/), [About](https://froxily.github.io/herbalroots/about/), [Contact](https://froxily.github.io/herbalroots/contact/) | HTTP 200 with meaningful server-served HTML. GitHub Pages reports enforced HTTPS. |
| PASS | [Catalogue](https://froxily.github.io/herbalroots/shop/), [category](https://froxily.github.io/herbalroots/shop/hair-oils/), [product](https://froxily.github.io/herbalroots/shop/bhringraj-hair-oil/), [journal article](https://froxily.github.io/herbalroots/blog/how-to-use-bhringraj-oil/), [ingredient](https://froxily.github.io/herbalroots/ingredients/bhringraj/) | Direct visits over HTTPS, including with JavaScript disabled. A tested slashless article URL redirected once to its canonical URL. |
| PASS | Prerendering and metadata | All 31 sitemap URLs returned HTTP 200 and rendered one primary H1, a unique title and description, one self-canonical, a matching Open Graph URL and an X card in the original HTML. Search and the custom 404 brought the total checked documents to 33. |
| PASS | [XML sitemap](https://froxily.github.io/herbalroots/sitemap.xml) | Parsed as XML using the sitemap namespace. All 31 distinct entries used the live HTTPS repository path. Each was reachable from the homepage via static links. |
| PASS | [Project robots.txt](https://froxily.github.io/herbalroots/robots.txt) | HTTP 200, allows crawling, and references the live sitemap. The separate [host-root robots.txt](https://froxily.github.io/robots.txt) returned 404. Crawlers do not apply a project-path robots file at the host level. |
| PASS | [Search](https://froxily.github.io/herbalroots/search/?q=amla) and [missing route](https://froxily.github.io/herbalroots/shop/does-not-exist/) | Search worked and emitted `noindex, follow`. A nonexistent path returned the custom 404 with HTTP 404 and `noindex, follow`. Both are excluded from the sitemap. |
| PASS | Structured data | Parsed eight JSON-LD graphs in the original HTML. Home has WebSite and Organization. Seven articles have Article and BreadcrumbList. Headline and canonical alignment, breadcrumb positions, and absolute image targets passed local assertions against live HTML. |
| PASS | Internal links and assets | Checked 97 distinct internal destinations including fragments, and 30 distinct same-site resources including six font files. Verified 106 HTML image instances have alt attributes and dimensions. No broken internal link or asset was found in this crawl. |
| PASS | Desktop and mobile browser checks | Chromium at 1440 px and at 320 px verified CSS, fonts, imagery, desktop and mobile navigation, no horizontal overflow in eight sampled routes, shop category filters, catalogue sorting, search, article FAQ, demo bag persistence, form submissions, and a keyboard skip link. No tested route produced a major browser exception or hydration error. |
| PASS | Google tools disabled state | Privacy Policy showed analytics disabled. The live build uses no supplied Google identifier and no GA tag is loaded by the demo. |
| NOT VERIFIED | Account-side or external checks | Search Console ownership, sitemap submission, GA4 Realtime, Google Rich Results Test, social platform card previews, field Core Web Vitals and indexing status. |

## Production mobile Lighthouse

Three cold homepage navigations with Lighthouse 13.6.0 and Chromium 157 via Brave, using the default simulated mobile profile. The local Phase 1 medians are historical loopback measurements. The production runs used the public Pages delivery path.

| Metric | Phase 1 local median | Production median | Production runs |
| --- | ---: | ---: | --- |
| SEO | 100 | 100 | 100, 100, 100 |
| Performance | 95 | 97 | 81, 100, 97 |
| Accessibility | 100 | 95 | 92, 95, 100 |
| Best Practices | 100 | 100 | 100, 100, 100 |
| First Contentful Paint | 0.82 s | 1.15 s | 1.18 s, 0.97 s, 1.15 s |
| Largest Contentful Paint | 2.85 s | 1.51 s | 2.16 s, 1.51 s, 1.15 s |
| Total Blocking Time | 82.5 ms | 186.5 ms | 459 ms, 21.5 ms, 186.5 ms |
| Cumulative Layout Shift | 0.019 | 0.000 | 0.001, 0.000, 0.000 |
| Speed Index | 1.37 s | 2.87 s | 6.56 s, 1.86 s, 2.87 s |

The slowest run recorded several long main-thread tasks and included time charged to the homepage and its client bundle. The other runs were faster. The lab comparison does not isolate hosting, animation or CPU scheduling as the cause. Lighthouse also flagged low contrast on some small labels and on the intro’s Skip control during one run, plus short tap targets on the concern-card links. Those accessibility findings remain open. No speculative performance changes were made.

Submit the live sitemap and inspect the homepage, About and a journal route after verifying the Search Console property. See [Google tools setup](GOOGLE_TOOLS_SETUP.md).
