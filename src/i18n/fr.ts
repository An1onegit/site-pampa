import type { Dictionary } from './types';

const fr: Dictionary = {
  meta: {
    siteName: 'Maison Pampa',
    tagline: 'Bienvenue chez nous',
    locationLine: 'Anvéville, Normandie',
    description: "Le guide de la Maison Pampa, notre longère normande rénovée. Tout pour profiter de votre séjour.",
  },
  nav: { home: 'Accueil', eat: 'Où manger', shop: 'Shopping', do: 'Que faire', faq: 'FAQ' },
  bookLabel: 'Réserver',
  langToggle: { fr: 'FR', en: 'EN', label: 'Langue' },
  home: {
    heroWord: 'PAMPA',
    welcomeTitle: 'Bienvenue dans notre maison de famille',
    welcomeBody: [
      "Nous sommes ravis de vous accueillir et espérons que vous passerez un séjour confortable et agréable.",
      "Cette maison chaleureuse est conçue pour vous offrir un séjour relaxant. Vous y trouverez tout ce dont vous avez besoin pour vous sentir comme chez vous, d'une cuisine entièrement équipée à une connexion internet haut débit.",
      "Vous trouverez ici des idées et des conseils pour vos repas, vos achats et vos activités aux alentours.",
    ],
    aboutTitle: 'À propos de la maison',
    aboutBody: [
      "La maison a été construite en 1976 dans le style traditionnel des longères normandes.",
      "Lorsque nous avons acheté la maison en 2019, elle n'avait pas été utilisée depuis plus de 10 ans et avait à peine changé depuis le jour de sa construction. Nous l'avons lentement rénovée, pièce par pièce, lui donnant un aspect et une atmosphère bohème chic. Nous espérons qu'elle vous plaira.",
    ],
    hosts: 'Stéphanie & Brice',
    overviewTitle: "Tout ce qu'il faut savoir",
    overview: [
      { key: 'eat', title: 'Où manger', text: 'Nos adresses préférées, des bistrots de bord de mer aux tables créatives.' },
      { key: 'shop', title: 'Shopping', text: 'Marchés, producteurs locaux, poisson, viande et bons vins.' },
      { key: 'do', title: 'Que faire', text: 'Plages, balades, visites et activités aux alentours.' },
      { key: 'faq', title: 'Questions fréquentes', text: 'Les réponses aux questions les plus courantes.' },
    ],
  },
  area: {
    title: "Les Environs",
    tabs: { eat: "Où manger", shop: "Shopping", do: "Que faire" },
    eat: [
      { name: "Auberge de la Durdent", text: "Bucolique et traditionnel, à 10 min en voiture. Réservation obligatoire.", address: "3 Rue Saint-Mellon, 76560 Héricourt-en-Caux" },
      { name: "Le Champêtre", text: "Joliment situé près de la rivière Durdent. Réservation recommandée.", address: "11 Rte de la Vallée, 76450 Le Hanouard" },
      { name: "Esta'frites", text: "Excellentes frites, bières et brochettes sur la plage. Arrivez tôt.", address: "Digue Jean Corruble, 76450 Veulettes-sur-Mer" },
      { name: "Beach Boy", text: "Le meilleur burger de la région, face à la plage. 30 min en voiture.", address: "Parking du casino, Rue du Casino, 76460 Saint-Valery-en-Caux" },
      { name: "Skéli", text: "Cuisine créative. Belle pause lors de la visite des Boucles de Seine.", address: "2 Pl. de l'Église, 76490 Rives-en-Seine" },
      { name: "La Source", text: "Néobistrot français, fortement recommandé. Réservation obligatoire.", address: "21 Rue Victor Hugo, 76980 Veules-les-Roses" },
    ],
    shop: [
      { groupTitle: "Marchés", items: ["Vendredi matin : Saint-Valery-en-Caux", "Vendredi 16h–19h : producteurs bio à la ferme du Pré d'Artemare", "Samedi matin : Doudeville (petit), Yvetot (grand)", "Dimanche matin : Luneray (grand)", "Mercredi matin : Veules-les-Roses (petit)", "Lundi matin : Cany-Barville (grand et beau)"] },
      { groupTitle: "Commerces à Doudeville", items: ["Pas de commerces à Anvéville. Rendez-vous à Doudeville (5 min) : boulangerie (Boulangerie du Lin, essayez le pain au malt et les 7 graines), primeur avec de bons fromages, antiquaire, pharmacie, supermarché (Carrefour Market). Petit marché le samedi matin."] },
      { groupTitle: "Poisson & huîtres", items: ["Vente directe pêcheurs tous les matins (sauf mauvaise mer) au Quai d'Amont, Saint-Valery-en-Caux.", "Coquilles Saint-Jacques à Veules-les-Roses le week-end en saison.", "Huîtres : producteur local à Veules-les-Roses (devant la plage), samedi et dimanche 8h30–12h30 / 15h–18h."] },
      { groupTitle: "Viande & vin", items: ["Éleveurs : « Ferme du Bosc Mare » à Doudeville, « Le Porc Pailloux » à Baons-le-Comte.", "Vin : « Le p'tit canon » à Fontaine-le-Dun (fermé dimanche, lundi, mercredi), aussi à la ferme du Pré d'Artemare le vendredi après-midi (16h–19h)."] },
    ],
    do: [
      { groupTitle: "Brocantes", items: ["Brocante de Doudeville", "« Vérité Annie », Cany-Barville", "« Cabaret », Hautot-sur-Mer", "« Corniquet boutique », Malleville-les-Grès"] },
      { groupTitle: "Visites", items: ["Varengeville-sur-Mer : église et cimetière de la Marine, vitrail de Georges Braque", "Bois des Moutiers (sur réservation)", "Jardin de Shamrock (hortensias)", "Villes (40–60 min) : Rouen, Le Havre, Étretat, Honfleur, Fécamp"] },
      { groupTitle: "Sports", items: ["Tennis à Veules-les-Roses, cadre extérieur magnifique", "Golf d'Arnouville : compact 9 trous accessible à tous", "Location de vélos à Veulettes-sur-Mer le long de la Durdent", "Accrobranche à Angiens", "Catamaran à Veules-les-Roses", "Char à voile à Saint-Aubin-sur-Mer"] },
      { groupTitle: "Plage", items: ["La marée peut être forte en Normandie : attention aux horaires.", "Les Petites Dalles : belles maisons 1900, camion à glaces sur le parking.", "Saint-Aubin-sur-Mer : seule plage de sable de la région, sauna une fois par mois.", "Valleuse de Vasterival (près de Varengeville), accessible à marée basse uniquement."] },
    ],
  },
  faq: {
    title: "Questions fréquentes",
    items: [
      { q: "Quels sont les horaires d'arrivée et de départ ?", a: ["Check-in à partir de 15:00, check-out jusqu'à 12:00."] },
      { q: "Pouvons-nous venir en train ?", a: ["La gare la plus proche est Yvetot (1h40 de Paris Saint-Lazare). Il n'y a pas de bus desservant le village : louez une voiture (agence à la gare), sauf si vous apportez un vélo."] },
      { q: "Y a-t-il un parking ?", a: ["Oui, 2 places sont disponibles dans l'allée."] },
      { q: "Puis-je recharger mon véhicule électrique ?", a: ["Non, la maison n'est pas équipée. Deux chargeurs sont disponibles à Doudeville, près du Carrefour Market."] },
      { q: "Le Wi-Fi est-il disponible ?", a: ["Oui, le Wi-Fi haut débit (500 Mb/s) couvre toute la maison."] },
      { q: "Les serviettes et les draps sont-ils fournis ?", a: ["Non, merci d'apporter les vôtres."] },
      { q: "Puis-je cuisiner ?", a: ["Absolument. La cuisine est entièrement équipée. Servez-vous et nettoyez après usage."] },
      { q: "Que faire des poubelles ?", a: ["La collecte a lieu le vendredi matin (décalée d'un jour en cas de jour férié). Le point de dépôt est à 50 m au-dessus de la maison, devant le n°296 : déposez le jeudi soir ou avant 10h le vendredi. Sinon, laissez le sac dans le garage, nous nous en occuperons."] },
    ],
  },
  gallery: {
    title: "Galerie",
    intro: "Quelques images de la maison et de son jardin, au fil des saisons.",
    images: [
      { src: "/images/gallery/facade.jpg", alt: "La façade de la maison" },
      { src: "/images/gallery/interieur.avif", alt: "L'intérieur de la maison" },
      { src: "/images/gallery/jardin.avif", alt: "Le jardin" },
      { src: "/images/gallery/terrasse.jpg", alt: "La terrasse au coucher du soleil" },
      { src: "/images/gallery/paysage.avif", alt: "Le paysage alentour" },
      { src: "/images/gallery/exterieur_nuit.avif", alt: "La maison à la tombée de la nuit" },
    ],
  },
  footer: { madeWith: '', rights: 'Tous droits réservés' },
};

export default fr;
