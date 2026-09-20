import type { Dictionary } from './types';

const en: Dictionary = {
  meta: {
    siteName: 'Maison Pampa',
    tagline: 'Welcome to our home',
    locationLine: 'Anvéville, Normandy',
    description: 'The guide to Maison Pampa, our restored Normandy longère. Everything you need for a great stay.',
  },
  nav: { home: 'Home', eat: 'Where to Eat', shop: 'Shopping', do: 'What to Do', faq: 'FAQ' },
  bookLabel: 'Book',
  langToggle: { fr: 'FR', en: 'EN', label: 'Language' },
  home: {
    heroWord: 'PAMPA',
    welcomeTitle: 'We would be delighted to welcome you to our family home',
    welcomeBody: [
      'You will find everything you need to feel at home: a fully equipped kitchen, a living room with a large fireplace, three comfortable bedrooms, two bathrooms, and a terrace with all outdoor furniture.',
      'This site presents the house, as well as ideas and advice for your activities around the area, your meals and your shopping.',
    ],
    aboutTitle: 'About the house',
    aboutBody: [
      'The house was built in 1976 in the traditional style of Normandy longères.',
      'When we bought it in 2019 it had been unused for more than 10 years and had barely changed since the day it was built. We slowly restored it, room by room, giving it a boho-chic look and feel. We hope you like it.',
    ],
    hosts: 'Stéphanie & Brice',
    overviewTitle: 'Everything you need to know',
    overview: [
      { key: 'eat', title: 'Where to Eat', text: 'Our favourite spots, from seaside bistros to creative kitchens.' },
      { key: 'shop', title: 'Shopping', text: 'Markets, local producers, fish, meat and good wine.' },
      { key: 'do', title: 'What to Do', text: 'Beaches, walks, visits and activities nearby.' },
      { key: 'faq', title: 'FAQ', text: 'Answers to the most common questions.' },
    ],
  },
  area: {
    title: "The Area",
    tabs: { eat: "Where to eat", shop: "Shopping", do: "What to do" },
    eat: [
      { name: "Auberge de la Durdent", text: "Bucolic and traditional, a 10-minute drive away. Booking required.", address: "3 Rue Saint-Mellon, 76560 Héricourt-en-Caux" },
      { name: "Le Champêtre", text: "Beautifully set by the river Durdent. Booking recommended.", address: "11 Rte de la Vallée, 76450 Le Hanouard" },
      { name: "Esta'frites", text: "Excellent fries, beers and skewers on the beach. Arrive early.", address: "Digue Jean Corruble, 76450 Veulettes-sur-Mer" },
      { name: "Beach Boy", text: "The best burger in the area, opposite the beach. A 30-minute drive.", address: "Parking du casino, Rue du Casino, 76460 Saint-Valery-en-Caux" },
      { name: "Le Wave", text: "Fish & chips, oysters, croque monsieurs by the sea.", address: "5 Digue Jean Corruble, 76450 Veulettes-sur-Mer" },
      { name: "Skéli", text: "Creative cooking. A lovely stop when visiting the Boucles de Seine.", address: "2 Pl. de l'Église, 76490 Rives-en-Seine" },
      { name: "La Source", text: "French neo-bistro, highly recommended. Booking required.", address: "21 Rue Victor Hugo, 76980 Veules-les-Roses" },
      { name: "Chez Jeannette", text: "Simple, effective French cuisine. 10 minutes from the house.", address: "5 Rte de l'Ancien Puits, 76190 Les Hauts-de-Caux" },
      { name: "Allouvi", text: "Our favorite spot in Fécamp. Booking recommended.", address: "23 Quai de la Vicomte, 76400 Fécamp" },
    ],
    shop: [
      { groupTitle: "Markets", items: ["Friday morning: Saint-Valery-en-Caux", "Friday 4–7 pm: organic local producers at the Pré d'Artemare farm", "Saturday morning: Doudeville (small), Yvetot (large)", "Sunday morning: Luneray (large)", "Wednesday morning: Veules-les-Roses (small)", "Monday morning: Cany-Barville (large and lovely)"] },
      { groupTitle: "Shops in Doudeville", items: ["There are no shops in Anvéville. Head to Doudeville (5 minutes): a bakery (Boulangerie du Lin, try the malt and 7-grain bread), a greengrocer with good cheeses, an antiques shop, a pharmacy, a supermarket (Carrefour Market). Small market on Saturday morning."] },
      { groupTitle: "Fish & oysters", items: ["Direct from fishermen every morning (except rough seas) at the Quai d'Amont, Saint-Valery-en-Caux.", "Scallops at Veules-les-Roses on weekends in season.", "Oysters: local producer at Veules-les-Roses (in front of the beach), Saturday and Sunday 8:30 am–12:30 pm / 3–6 pm."] },
      { groupTitle: "Meat & wine", items: ['Farmers: "Ferme du Bosc Mare" in Doudeville, "Le Porc Pailloux" in Baons-le-Comte.', "Wine: \"Le p'tit canon\" in Fontaine-le-Dun (closed Sunday, Monday, Wednesday), also at the Pré d'Artemare farm on Friday afternoons (4–7 pm)."] },
    ],
    do: [
      { groupTitle: "Flea markets", items: ["Doudeville flea market", '"Vérité Annie", Cany-Barville', '"Cabaret", Hautot-sur-Mer', '"Corniquet boutique", Malleville-les-Grès'] },
      { groupTitle: "Visits", items: ["Varengeville-sur-Mer: church and seafarers' cemetery, stained glass by Georges Braque", "Bois des Moutiers (by reservation)", "Shamrock Garden (hydrangeas)", "Cities (40–60 min): Rouen, Le Havre, Étretat, Honfleur, Fécamp"] },
      { groupTitle: "Sports", items: ["Tennis at Veules-les-Roses, in a magnificent outdoor setting", "Golf d'Arnouville: a compact 9 holes for all levels", "Bike rental at Veulettes-sur-Mer for a ride along the Durdent", "Tree-climbing adventure at Angiens", "Catamaran at Veules-les-Roses", "Land yachting at Saint-Aubin-sur-Mer", "Hiking from the house or nearby"] },
      { groupTitle: "Beach", items: ["Tides can be strong in Normandy: watch the timetables.", "Les Petites Dalles: beautiful 1900s houses, an ice-cream van in the car park.", "Saint-Aubin-sur-Mer: the only sandy beach in the area, with a sauna once a month.", "Valleuse de Vasterival (near Varengeville), reachable at low tide only."] },
    ],
  },
  faq: {
    title: "FAQ",
    items: [
      { q: "How do I book?", a: ["Reservations are made exclusively through Airbnb. Click the \"Book\" button to go directly to the listing."] },
      { q: "What are the check-in and check-out times?", a: ["Check-in from 3:00 pm, check-out until 12:00 noon."] },
      { q: "Can we come by train?", a: ["The nearest station is Yvetot (1h40 from Paris Saint-Lazare). There is no bus to the village. You will need to rent a car (agency at the station)."] },
      { q: "Is there parking?", a: ["Yes, 2 spaces are available in the driveway."] },
      { q: "Can I charge my electric car?", a: ["No, the house is not equipped. Two chargers are available in Doudeville, near the Carrefour Market."] },
      { q: "Is Wi-Fi available?", a: ["Yes, high-speed Wi-Fi (500 Mb/s) covers the whole house."] },
      { q: "Are towels and bed linen provided?", a: ["No, we do not provide household linen or bed sheets. You will need to bring your own."] },
      { q: "Can I cook?", a: ["Absolutely. The kitchen is fully equipped."] },
    ],
  },
  gallery: {
    title: "Gallery",
    intro: "A few images of the house and its garden through the seasons.",
    images: [
      { src: "/images/gallery/facade.jpg", alt: "The front of the house" },
      { src: "/images/gallery/interieur.avif", alt: "Inside the house" },
      { src: "/images/gallery/jardin.avif", alt: "The garden" },
      { src: "/images/gallery/terrasse.jpg", alt: "The terrace at golden hour" },
      { src: "/images/gallery/paysage.avif", alt: "The surrounding landscape" },
      { src: "/images/gallery/exterieur_nuit.avif", alt: "The house at nightfall" },
    ],
  },
  footer: { madeWith: '', rights: 'All rights reserved' },
};

export default en;
