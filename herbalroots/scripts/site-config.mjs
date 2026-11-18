import { isIP } from 'node:net';

export function readSiteUrl(value) {
  const input = value?.trim();
  if (!input) return undefined;

  const url = new URL(input);
  const hostname = url.hostname.replace(/\.$/, '');
  if (
    url.protocol !== 'https:' || url.username || url.password || url.port ||
    input.includes('?') || input.includes('#') || !hostname.includes('.') ||
    hostname.endsWith('.localhost') || isIP(hostname) || url.pathname.includes('//') ||
    !/^\/(?:[a-z\d._~-]+\/)*[a-z\d._~-]*\/?$/i.test(url.pathname)
  ) {
    throw new Error('VITE_SITE_URL must be the final public HTTPS site URL, including its Pages project path if applicable.');
  }
  url.pathname = url.pathname.replace(/\/$/, '') + '/';
  return url;
}
