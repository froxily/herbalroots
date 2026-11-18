# Google tools setup

Use the verified Pages URL in the [project README](../README.md). Keep the trailing slash and the repository path when registering the site. You need access to your own Google account and to this GitHub repository’s Actions variables.

## Search Console

1. Open [Google Search Console](https://search.google.com/search-console/), choose **Add property**, select **URL prefix**, and paste the live Pages URL exactly as shown in the README.
2. Choose **HTML tag** in the ownership verification dialog. Copy only the value inside the tag’s `content` attribute. In this GitHub repository, open **Settings → Secrets and variables → Actions → Variables**, create `GSC_VERIFICATION` with that value, and run **Deploy HerbalRoots to GitHub Pages** on `main` from the Actions tab. You can also supply the value to the project maintainer to deploy it. The React production build places it in the homepage’s static head.
3. Alternatively, download the HTML verification file Google supplies. Keep its filename and contents, place it in `herbalroots/public/`, commit and push to `main`, and check that the file opens directly at that filename under the Pages URL.
4. Once the deployment is live, confirm the homepage source has the tag or the verification file returns HTTP 200, then select **Verify** in Search Console. Keep the verification method in place for recurring ownership checks. [Verify site ownership](https://support.google.com/webmasters/answer/9008080)
5. Under **Sitemaps**, submit `sitemap.xml` under the same URL-prefix property. Open **URL Inspection** and inspect the homepage, About and a journal article by their full canonical URLs. Use **Test live URL** for current accessibility. If appropriate, choose **Request indexing** for individual new or revised pages. Check **Page indexing** later. Verification, sitemap submission and indexing requests do not guarantee indexing. [Search Console getting started](https://support.google.com/webmasters/answer/10267942) · [Google sitemap submission](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)

## Google Analytics 4

1. Open [Google Analytics](https://analytics.google.com/). Under **Admin → Create → Property**, create a GA4 property, then in **Data streams** add a **Web** stream for the live Pages URL. Copy the web stream’s `G-` Measurement ID. [GA4 property and stream setup](https://support.google.com/analytics/answer/14183469)
2. Turn **Enhanced measurement** off for this stream before activation. HerbalRoots manually sends one sanitized page view per public canonical page transition. In particular, automatic history-based measurement can generate duplicate events and include a search query. [GA4 page-view settings](https://developers.google.com/analytics/devguides/collection/ga4/views)
3. In GitHub **Settings → Secrets and variables → Actions → Variables**, create `VITE_GA_MEASUREMENT_ID` with your actual Measurement ID and run the deployment workflow on `main`. For a local configured build, supply it in `herbalroots/.env.local`. The Measurement ID is public client configuration. Do not put an API secret or account credential in a Vite variable.
4. Open the live site with a test browser, open **Privacy Policy**, and select **Allow analytics**. Visit another public page through a site link. In GA4, open **Reports → Realtime** to look for activity and `page_view` events. Use DebugView or Tag Assistant for a one-event-per-navigation check. Check that search and query strings are absent. Return to Privacy Policy and turn analytics off when done. [GA4 Realtime](https://support.google.com/analytics/answer/9271392)
5. Leave the variable unset if you do not want analytics. While the variable is set, the tag still requires the visitor to opt in on the Privacy Policy page. Use a dedicated web stream for this demo and review account retention and privacy settings before enabling it.

**Manual inputs** are the Search Console verification value or file, and the GA4 Measurement ID. Neither has been supplied.
