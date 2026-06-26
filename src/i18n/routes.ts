export type Locale = 'fr' | 'en';
export type PageKey = 'home' | 'eat' | 'shop' | 'do' | 'faq';

export const routes: Record<PageKey, Record<Locale, string>> = {
  home: { fr: '/',          en: '/en/' },
  eat:  { fr: '/ou-manger', en: '/en/where-to-eat' },
  shop: { fr: '/shopping',  en: '/en/shopping' },
  do:   { fr: '/que-faire', en: '/en/what-to-do' },
  faq:  { fr: '/faq',       en: '/en/faq' },
};

export const navOrder: PageKey[] = ['home', 'eat', 'shop', 'do', 'faq'];
