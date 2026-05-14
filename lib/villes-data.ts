export type VilleData = {
  slug: string;
  nom: string;
  nomComplet: string; // pour affichage SEO
  departement: string;
  population: string; // ex "41 000 habitants"
  contexteEconomique: string; // 2-3 phrases
  secteursLocaux: string[]; // secteurs économiques principaux
  exemplesClientsTypes: string[]; // types d'entreprises cibles à mentionner
  pourquoi: string; // pourquoi un site web est important ici (angle local)
  active: boolean; // si false, la page ne sera pas générée
};

export const villes: VilleData[] = [
  {
    slug: "angouleme",
    nom: "Angoulême",
    nomComplet: "Angoulême (16)",
    departement: "Charente",
    population: "environ 41 000 habitants (110 000 sur l'agglomération)",
    contexteEconomique:
      "Préfecture de la Charente et capitale internationale de la bande dessinée, Angoulême concentre une économie tertiaire dense (services, conseil, ingénierie) avec un pôle d'excellence sur l'image numérique et l'audiovisuel. Les zones d'activité de Ma Campagne, La Couronne et Soyaux abritent un tissu de PME industrielles et de services aux entreprises.",
    secteursLocaux: [
      "Industrie de l'image et audiovisuel",
      "Tertiaire et services aux entreprises",
      "Commerce de centre-ville",
      "Restauration et hôtellerie",
      "Artisanat haut de gamme",
    ],
    exemplesClientsTypes: [
      "Studio de production audiovisuel cherchant à structurer sa présence digitale",
      "Cabinet de conseil B2B qui veut générer des leads qualifiés",
      "Restaurant indépendant du centre-ville voulant mettre en avant sa carte saisonnière",
      "Artisan d'art (BD, sérigraphie, design) souhaitant vendre en direct",
    ],
    pourquoi:
      "Angoulême attire chaque année plus de 200 000 visiteurs pour son festival international de la BD, et compte une économie locale très active. Pour une entreprise basée à Angoulême, un site web bien référencé localement, c'est la garantie d'être trouvée à la fois par les habitants de l'agglomération et par les visiteurs de passage.",
    active: true,
  },
  {
    slug: "cognac",
    nom: "Cognac",
    nomComplet: "Cognac (16)",
    departement: "Charente",
    population: "environ 19 000 habitants",
    contexteEconomique:
      "Capitale mondiale du Cognac, la ville concentre une économie viticole et touristique forte. Le tissu local mélange grandes maisons de Cognac, viticulteurs indépendants, hôtellerie haut de gamme et commerces de centre-ville.",
    secteursLocaux: [
      "Viticulture et maisons de Cognac",
      "Tourisme et hôtellerie",
      "Commerce et restauration",
      "Artisanat lié à la filière vin",
      "Services aux entreprises",
    ],
    exemplesClientsTypes: [
      "Viticulteur indépendant voulant vendre en direct (DTC)",
      "Hôtel de charme cherchant à attirer une clientèle internationale",
      "Restaurant gastronomique du centre-ville",
      "Tonnellerie ou atelier artisanal lié au vin",
    ],
    pourquoi:
      "Cognac est connue dans le monde entier, et les entreprises locales — viticoles ou non — bénéficient d'une visibilité internationale potentielle. Encore faut-il que leur site web soit à la hauteur : multilingue, beau, rapide. C'est exactement ce qu'on construit.",
    active: true,
  },
  {
    slug: "saintes",
    nom: "Saintes",
    nomComplet: "Saintes (17)",
    departement: "Charente-Maritime",
    population: "environ 25 000 habitants",
    contexteEconomique:
      "Sous-préfecture de la Charente-Maritime, Saintes est une ville d'art et d'histoire de 25 000 habitants au tissu économique varié. La ville mêle patrimoine touristique, commerce de centre-ville, services de santé (CHU) et un pôle d'éducation.",
    secteursLocaux: [
      "Commerce de centre-ville et artisanat",
      "Tourisme patrimonial",
      "Restauration",
      "Santé et services",
      "Industrie de proximité",
    ],
    exemplesClientsTypes: [
      "Commerçant du centre-ville souhaitant moderniser sa visibilité",
      "Restaurant familial proposant click & collect",
      "Cabinet médical voulant simplifier la prise de rendez-vous",
      "Office de tourisme ou activité touristique cherchant à mieux convertir",
    ],
    pourquoi:
      "Saintes est un carrefour entre les littoraux (Royan, La Rochelle) et l'arrière-pays charentais. Pour les entreprises locales, un bon site web est le levier pour capter à la fois la clientèle de proximité et celle de passage.",
    active: true,
  },
  // Villes à activer en vague B/C (placeholder pour l'instant)
  {
    slug: "la-rochelle",
    nom: "La Rochelle",
    nomComplet: "La Rochelle (17)",
    departement: "Charente-Maritime",
    population: "environ 78 000 habitants",
    contexteEconomique: "",
    secteursLocaux: [],
    exemplesClientsTypes: [],
    pourquoi: "",
    active: false,
  },
  {
    slug: "rochefort",
    nom: "Rochefort",
    nomComplet: "Rochefort (17)",
    departement: "Charente-Maritime",
    population: "environ 25 000 habitants",
    contexteEconomique: "",
    secteursLocaux: [],
    exemplesClientsTypes: [],
    pourquoi: "",
    active: false,
  },
];

export function getVilleBySlug(slug: string): VilleData | undefined {
  return villes.find((v) => v.slug === slug);
}

export function getActiveVilles(): VilleData[] {
  return villes.filter((v) => v.active);
}
