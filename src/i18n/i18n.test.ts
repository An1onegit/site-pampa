import { describe, it, expect } from 'vitest';
import fr from './fr';
import en from './en';
import { useTranslations, getAltUrl, getNav } from './utils';

// Recurse into array elements (using index in the path) so the comparison
// catches differing array LENGTHS and per-element shape, not just key names.
// This is what makes a missing or extra EN translation fail the test.
function keyPaths(obj: any, prefix = ''): string[] {
  if (obj === null || typeof obj !== 'object') return [prefix];
  if (Array.isArray(obj)) {
    return obj.flatMap((item, i) => keyPaths(item, `${prefix}[${i}]`));
  }
  return Object.keys(obj).flatMap((k) => keyPaths(obj[k], prefix ? `${prefix}.${k}` : k));
}

describe('dictionaries', () => {
  it('fr and en have identical key structures', () => {
    expect(keyPaths(en)).toEqual(keyPaths(fr));
  });

  it('useTranslations(fr) returns french', () => {
    expect(useTranslations('fr').nav.home).toBe('Accueil');
  });

  it('empty en string falls back to fr', () => {
    const t = useTranslations('en');
    expect(t.meta.siteName).toBe('Maison Pampa');
  });

  it('getAltUrl returns the other-locale URL', () => {
    expect(getAltUrl('eat', 'fr')).toBe('/en/where-to-eat');
    expect(getAltUrl('eat', 'en')).toBe('/ou-manger');
  });

  it('getNav returns the pages in order', () => {
    const nav = getNav('fr', fr);
    expect(nav.map((n) => n.key)).toEqual(['home', 'eat', 'shop', 'do', 'faq']);
    expect(nav[0].href).toBe('/');
  });
});
