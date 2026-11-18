import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { build, loadEnv } from 'vite';
import { readSiteUrl } from './site-config.mjs';

const mode = 'production';
const env = loadEnv(mode, process.cwd(), ['VITE_', 'GSC_']);
const configuredSite = readSiteUrl(env.VITE_SITE_URL);
const verification = env.GSC_VERIFICATION?.trim();
if (verification && !/^[A-Za-z0-9_-]+={0,2}$/.test(verification)) {
  throw new Error('GSC_VERIFICATION must contain only the content value of the Search Console meta tag.');
}
if (process.argv.includes('--require-site') && !configuredSite) {
  throw new Error('Set VITE_SITE_URL to the final GitHub Pages URL before building for deployment.');
}

await build({ mode });
await build({
  mode,
  ssr: { noExternal: ['react-router-dom'] },
  build: { ssr: 'src/entry-static.tsx', outDir: 'dist-ssr', copyPublicDir: false },
});

const { indexablePaths, searchPath, notFoundPath, renderPage, siteUrl } =
  await import(pathToFileURL(resolve('dist-ssr/entry-static.js')).href);
const template = await readFile('dist/index.html', 'utf8');

const escape = value => value.replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[char]);

function renderTag({ tag, attrs = {}, content = '' }) {
  const attributes = Object.entries(attrs).map(([key, value]) => ` ${key}="${escape(value)}"`).join('');
  const open = `<${tag} data-seo${attributes}>`;
  if (tag === 'meta' || tag === 'link') return open;
  return open + (tag === 'script' ? content : escape(content)) + `</${tag}>`;
}

const paths = [...indexablePaths, searchPath, notFoundPath];
if (new Set(paths).size !== paths.length) throw new Error('Duplicate prerender paths.');

const canonicals = [];
for (const path of paths) {
  const { body, head } = renderPage(path);
  if (siteUrl && indexablePaths.includes(path)) {
    const canonical = head.find(tag => tag.attrs?.rel === 'canonical')?.attrs.href;
    const expected = new URL(path.slice(1), siteUrl).href;
    if (canonical !== expected) throw new Error(`Expected canonical ${expected}, got ${canonical}.`);
    canonicals.push(canonical);
  }
  let html = template
    .replace(/<!-- page-head -->[\s\S]*?<!-- \/page-head -->/, () => head.map(renderTag).join('\n    '))
    .replace('<div id="root"></div>', () => `<div id="root" data-prerendered="${path}">${body}</div>`);
  if (path === '/' && siteUrl && verification) {
    html = html.replace('</head>', `  <meta name="google-site-verification" content="${verification}">\n  </head>`);
  }
  const file = path === notFoundPath ? 'dist/404.html' : `dist${path}index.html`;
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html);
}

const robots = 'User-agent: *\nAllow: /\n';
if (siteUrl) {
  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...canonicals.map(url => `  <url><loc>${escape(url)}</loc></url>`),
    '</urlset>', '',
  ].join('\n');
  await writeFile('dist/sitemap.xml', sitemap);
  await writeFile('dist/robots.txt', robots + `Sitemap: ${new URL('sitemap.xml', siteUrl).href}\n`);
} else {
  await writeFile('dist/robots.txt', robots);
  console.log('Preview build: set VITE_SITE_URL to generate canonical URLs, social URL tags, JSON-LD and the sitemap.');
}

await writeFile('dist/.nojekyll', '');
console.log(`Prerendered ${paths.length} pages.`);
