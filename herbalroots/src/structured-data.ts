import { siteLink } from './site';
import type { Article } from './types';

const teamName = 'HerbalRoots Project Team';

function publisher() {
  return { '@id': siteLink('/#project-team') };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': siteLink('/#website'),
        url: siteLink('/'),
        name: 'HerbalRoots',
        inLanguage: 'en-IN',
        publisher: publisher(),
      },
      {
        '@type': 'Organization',
        ...publisher(),
        name: teamName,
        url: siteLink('/about/'),
        logo: siteLink('/logo-icon.svg'),
        description: 'University project team behind the HerbalRoots academic SEO demonstration.',
      },
    ],
  };
}

export function articleSchema(article: Article) {
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: article.isPillar ? 'Guides & Journal' : 'Journal', path: '/blog/' },
    ...article.isPillar ? [] : [{
      name: article.category,
      path: `/blog/?category=${encodeURIComponent(article.category)}`,
    }],
    { name: article.isPillar ? 'Hair Fall Treatment at Home' : article.title, path: article.path },
  ];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': siteLink(article.path + '#article'),
        mainEntityOfPage: { '@type': 'WebPage', '@id': siteLink(article.path) },
        headline: article.title,
        description: article.metaDescription,
        datePublished: article.publishedDate,
        dateModified: article.updatedDate ?? article.publishedDate,
        inLanguage: 'en-IN',
        image: siteLink(article.featuredImage),
        author: { '@type': 'Organization', name: article.author.name, url: siteLink('/about/') },
        publisher: publisher(),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: crumbs.map(({ name, path }, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name,
          item: siteLink(path),
        })),
      },
    ],
  };
}
