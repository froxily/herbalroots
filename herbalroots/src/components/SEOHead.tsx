import { createContext, useContext, useEffect } from 'react';
import { assetPath, siteLink, siteUrl } from '../site';

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
  priorityImage?: string;
  ogType?: 'website' | 'article';
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  jsonLd?: () => Record<string, unknown>;
}

export interface HeadTag {
  tag: 'title' | 'meta' | 'link' | 'script';
  attrs?: Record<string, string>;
  content?: string;
}

export const HeadCollector = createContext<((tags: HeadTag[]) => void) | null>(null);

function getHeadTags({
  title, description, path, priorityImage, ogType = 'website', noindex, publishedTime, modifiedTime, jsonLd,
}: SEOHeadProps): HeadTag[] {
  const tags: HeadTag[] = [{ tag: 'title', content: title }];
  const meta = (key: 'name' | 'property', name: string, content: string) => {
    tags.push({ tag: 'meta', attrs: { [key]: name, content } });
  };

  meta('name', 'description', description);
  meta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow');
  if (priorityImage) {
    tags.push({ tag: 'link', attrs: { rel: 'preload', as: 'image', href: assetPath(priorityImage), fetchpriority: 'high' } });
  }

  if (siteUrl && path && !noindex) {
    const canonical = siteLink(path);
    const socialImage = siteLink('/images/herbalroots-social.png');
    const imageAlt = 'HerbalRoots Ayurvedic hair-care illustration';
    tags.push({ tag: 'link', attrs: { rel: 'canonical', href: canonical } });
    meta('property', 'og:title', title);
    meta('property', 'og:description', description);
    meta('property', 'og:type', ogType);
    meta('property', 'og:url', canonical);
    meta('property', 'og:image', socialImage);
    meta('property', 'og:image:alt', imageAlt);
    meta('property', 'og:site_name', 'HerbalRoots');
    meta('property', 'og:locale', 'en_IN');
    if (publishedTime) meta('property', 'article:published_time', publishedTime);
    if (modifiedTime) meta('property', 'article:modified_time', modifiedTime);
    meta('name', 'twitter:card', 'summary_large_image');
    meta('name', 'twitter:title', title);
    meta('name', 'twitter:description', description);
    meta('name', 'twitter:image', socialImage);
    meta('name', 'twitter:image:alt', imageAlt);

    if (jsonLd) {
      tags.push({
        tag: 'script',
        attrs: { type: 'application/ld+json' },
        content: JSON.stringify(jsonLd()).replace(/</g, '\\u003c'),
      });
    }
  }

  return tags;
}

export function SEOHead(props: SEOHeadProps) {
  const collectHead = useContext(HeadCollector);
  const tags = getHeadTags(props);
  if (collectHead) collectHead(tags);
  const head = JSON.stringify(tags);

  useEffect(() => {
    const nextTags: HeadTag[] = JSON.parse(head);
    const fragment = document.createDocumentFragment();
    for (const { tag, attrs, content } of nextTags) {
      const element = document.createElement(tag);
      element.setAttribute('data-seo', '');
      for (const [name, value] of Object.entries(attrs ?? {})) element.setAttribute(name, value);
      if (content) element.textContent = content;
      fragment.append(element);
    }
    document.head.querySelectorAll('[data-seo]').forEach(element => element.remove());
    document.head.append(fragment);
  }, [head]);

  return null;
}
