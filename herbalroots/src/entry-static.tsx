import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { HeadCollector, type HeadTag } from './components/SEOHead';
import { ARTICLES } from './data/articles';
import { INGREDIENTS } from './data/ingredients';
import { PRODUCTS } from './data/products';
import { CATEGORY_MAP } from './pages/ShopCategory';
import { basePath } from './site';

export { siteUrl } from './site';

export const searchPath = '/search/';
export const notFoundPath = '/404.html';
export const indexablePaths = [
  '/', '/about/', '/blog/', '/ingredients/', '/shop/', '/contact/',
  '/privacy-policy/', '/terms/', '/disclaimer/',
  ...ARTICLES.map(article => article.path),
  ...INGREDIENTS.map(ingredient => `/ingredients/${ingredient.slug}/`),
  ...Object.keys(CATEGORY_MAP).map(category => `/shop/${category}/`),
  ...PRODUCTS.map(product => `/shop/${product.slug}/`),
];

export function renderPage(path: string) {
  const heads: HeadTag[][] = [];
  const body = renderToString(
    <StaticRouter basename={basePath} location={basePath + path.slice(1)}>
      <HeadCollector.Provider value={tags => heads.push(tags)}>
        <App />
      </HeadCollector.Provider>
    </StaticRouter>
  );

  if (heads.length !== 1) throw new Error(`Expected one SEO head for ${path}, found ${heads.length}.`);
  const [head] = heads;
  const noindex = head.some(tag => tag.attrs?.name === 'robots' && tag.attrs.content.includes('noindex'));
  if (noindex !== (path === searchPath || path === notFoundPath)) {
    throw new Error(`Unexpected indexing directive on ${path}.`);
  }
  return { body, head };
}
