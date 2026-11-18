import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { siteUrl } from '../site';

const configuredId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim() ?? '';
const id = /^G-[A-Z0-9]+$/.test(configuredId) ? configuredId : '';
const preferenceKey = 'herbalroots_analytics';
const changeEvent = 'herbalroots-analytics-change';

let initialized = false;
let lastPage = '';

function send(_command: string, ..._parameters: unknown[]) {
  const analyticsWindow: Window & { dataLayer?: unknown[] } = window;
  analyticsWindow.dataLayer ??= [];
  analyticsWindow.dataLayer.push(arguments);
}

function hasConsent() {
  try {
    return localStorage.getItem(preferenceKey) === 'allowed';
  } catch {
    return false;
  }
}

export function Analytics() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (!id || !siteUrl) return;

    const track = () => {
      const allowed = hasConsent();
      Object.assign(window, { [`ga-disable-${id}`]: true });
      if (!allowed) {
        lastPage = '';
        return;
      }

      const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href;
      if (!canonical?.startsWith(siteUrl) || new URL(canonical).pathname !== window.location.pathname) {
        lastPage = '';
        return;
      }
      Object.assign(window, { [`ga-disable-${id}`]: false });
      if (canonical === lastPage) return;

      if (!initialized) {
        initialized = true;
        send('js', new Date());
        send('config', id, {
          send_page_view: false,
          allow_google_signals: false,
          allow_ad_personalization_signals: false,
          cookie_domain: 'none',
          cookie_path: new URL(siteUrl).pathname,
          page_location: canonical,
          page_referrer: '',
        });
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
        document.head.append(script);
      }

      send('set', { page_location: canonical, page_referrer: lastPage });
      send('event', 'page_view', {
        send_to: id,
        page_location: canonical,
        page_title: document.title,
        page_referrer: lastPage,
      });
      lastPage = canonical;
    };

    track();
    window.addEventListener(changeEvent, track);
    window.addEventListener('storage', track);
    return () => {
      window.removeEventListener(changeEvent, track);
      window.removeEventListener('storage', track);
    };
  }, [pathname]);

  return null;
}

export function AnalyticsPreference() {
  const [allowed, setAllowed] = useState(false);
  const [storageError, setStorageError] = useState(false);
  useEffect(() => {
    const read = () => setAllowed(hasConsent());
    read();
    window.addEventListener('storage', read);
    return () => window.removeEventListener('storage', read);
  }, []);

  if (!id || !siteUrl) return <p>Analytics is disabled on this build.</p>;

  const toggle = () => {
    try {
      localStorage.setItem(preferenceKey, allowed ? 'denied' : 'allowed');
      window.dispatchEvent(new Event(changeEvent));
      setAllowed(!allowed);
      setStorageError(false);
    } catch {
      setStorageError(true);
    }
  };

  return (
    <>
      <p>Optional Google Analytics measures visits to public pages. If you allow it, Google can receive browser and device information and set analytics cookies. The integration sends canonical page addresses and titles. Search terms and demo form entries are excluded.</p>
      <button type="button" className="rounded-lg border border-forest px-4 py-2 font-semibold text-forest" onClick={toggle}>
        {allowed ? 'Turn off analytics' : 'Allow analytics'}
      </button>
      <p role="status">{storageError ? 'This browser could not save your analytics preference.' : `Analytics is ${allowed ? 'on' : 'off'}.`}</p>
      <p>Turning analytics off stops future tracking from this site. Clear this site’s browser data to remove existing cookies and your saved preference.</p>
    </>
  );
}
