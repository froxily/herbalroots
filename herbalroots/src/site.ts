import type { SyntheticEvent } from 'react';

declare const __SITE_URL__: string;

export const siteUrl = __SITE_URL__;
export const basePath = import.meta.env.BASE_URL;

// Keep paths in the catalogue and previously saved bags site-relative.
export function assetPath(path: string) {
  return path.startsWith('/') ? basePath + path.slice(1) : path;
}

export function siteLink(path: string) {
  return new URL(path.replace(/^\//, ''), siteUrl).href;
}

export function imageFallback(path: string) {
  const fallback = assetPath(path);
  return (event: SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    if (image.getAttribute('src') !== fallback) image.src = fallback;
  };
}
