export interface Dictionary {
  meta: { siteName: string; tagline: string; locationLine: string; description: string };
  nav: { home: string; eat: string; shop: string; do: string; faq: string };
  bookLabel: string;
  langToggle: { fr: string; en: string; label: string };
  home: {
    heroWord: string;
    welcomeTitle: string;
    welcomeBody: string[];
    aboutTitle: string;
    aboutBody: string[];
    hosts: string;
    overviewTitle: string;
    overview: { key: string; title: string; text: string }[];
  };
  area: {
    title: string;
    tabs: { eat: string; shop: string; do: string };
    eat: { name: string; text: string; address: string }[];
    shop: { groupTitle: string; items: string[] }[];
    do: { groupTitle: string; items: string[] }[];
  };
  faq: { title: string; items: { q: string; a: string[] }[] };
  gallery: {
    title: string;
    intro: string;
    images: { src: string; alt: string }[];
  };
  footer: { madeWith: string; rights: string };
}
