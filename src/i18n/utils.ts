import type { Locale, PageKey } from './routes';
import { routes, navOrder } from './routes';
import fr from './fr';
import en from './en';
import type { Dictionary } from './types';

/** Returns the dictionary for a locale, with FR as the fallback source for empty EN strings. */
export function useTranslations(locale: Locale): Dictionary {
  if (locale === 'fr') return fr;
  return withFallback(en, fr);
}

function withFallback<T>(primary: T, fallback: T): T {
  if (typeof primary === 'string') {
    return (primary.trim() === '' ? fallback : primary) as T;
  }
  if (Array.isArray(primary)) {
    return (primary.length === 0 ? fallback : primary) as T;
  }
  if (primary && typeof primary === 'object') {
    const out: any = {};
    for (const k of Object.keys(primary as any)) {
      out[k] = withFallback((primary as any)[k], (fallback as any)?.[k]);
    }
    return out;
  }
  return primary ?? fallback;
}

/** The URL of the same page in the other locale. */
export function getAltUrl(pageKey: PageKey, current: Locale): string {
  const other: Locale = current === 'fr' ? 'en' : 'fr';
  return routes[pageKey][other];
}

/** Nav items in order for a locale. */
export function getNav(locale: Locale, t: Dictionary) {
  return navOrder.map((key) => ({ key, href: routes[key][locale], label: t.nav[key] }));
}
