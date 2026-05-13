import { LayoutGrid, ShoppingCart, RefreshCw, Search } from "lucide-react";

export const stats = [
  { value: "3", unit: " sem.", label: "Délai moyen de livraison" },
  { value: "100", unit: "%", label: "Mis en ligne dans les délais" },
  { value: "95", unit: "+", label: "Score Lighthouse moyen" },
  { value: "48", unit: "h", label: "Premier retour sur votre projet" },
];

export const services = [
  {
    icon: LayoutGrid,
    title: "Site vitrine",
    description:
      "Présentez votre activité avec un site clair, rapide et trouvé sur Google. 4 à 6 pages, livré en 3 semaines.",
    price: "3 000 €",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Une boutique en ligne fluide, sécurisée, optimisée pour convertir. Catalogue, paiement, gestion intuitive.",
    price: "6 500 €",
  },
  {
    icon: RefreshCw,
    title: "Refonte de site",
    description:
      "Votre site existant est lent, daté ou peu lisible ? On reprend tout, en gardant ce qui marche. Bascule sans coupure.",
    price: "3 500 €",
  },
  {
    icon: Search,
    title: "SEO & Performance",
    description:
      "Audit, optimisations techniques, structure de contenu. Pour être trouvé par vos prospects sur Google.",
    price: "1 500 €",
  },
];

export const pillars = [
  {
    number: "01",
    title: "Design qui sert le business",
    description:
      "Pas un site joli pour être joli. Un design pensé pour guider votre visiteur vers la conversion, sans le perdre dans le décor.",
  },
  {
    number: "02",
    title: "Performance technique réelle",
    description:
      "Score Lighthouse 95+ par défaut. Site qui charge en moins de 2 secondes. Le visiteur ne part pas pendant qu'il attend.",
  },
  {
    number: "03",
    title: "SEO dès la première ligne",
    description:
      "Structure sémantique, contenu optimisé, vitesse — les fondamentaux du SEO sont intégrés dès la conception, pas rajoutés après.",
  },
];

export const methodSteps = [
  {
    number: "01",
    duration: "2 à 3 jours",
    title: "Comprendre",
    description:
      "On prend le temps de cerner votre activité, vos objectifs et vos contraintes. Un échange initial structuré pour partir sur les bonnes bases.",
    yousProvide: "30 min d'échange + accès à votre univers",
    weDeliver: "Un brief écrit que vous validez",
  },
  {
    number: "02",
    duration: "5 à 7 jours",
    title: "Concevoir",
    description:
      "Design des maquettes principales, structure du site, choix techniques. On itère vite, vous validez à chaque jalon.",
    yousProvide: "Retours sur les maquettes",
    weDeliver: "Maquettes desktop + mobile, prêtes à coder",
  },
  {
    number: "03",
    duration: "8 à 12 jours",
    title: "Construire",
    description:
      "Développement intégral, intégration des contenus, optimisations performance et SEO. Pas de bâclage : tests sur tous les navigateurs, mobile compris.",
    yousProvide: "Vos textes et visuels finaux",
    weDeliver: "Le site en preview, accessible à votre équipe",
  },
  {
    number: "04",
    duration: "1 à 2 jours + suivi",
    title: "Lancer & accompagner",
    description:
      "Mise en ligne sur votre domaine, configuration analytics, formation rapide pour que vous puissiez gérer le contenu courant. Suivi 30 jours offert.",
    yousProvide: "Votre OK final",
    weDeliver: "Un site qui tourne + un manuel simple",
  },
];

export const team = [
  {
    name: "Marc Dupont",
    role: "Fondateur & stratégie",
    bio: "Pilote chaque projet de bout en bout. Veille à ce que le site serve un vrai objectif business, pas juste à exister.",
    seed: "Marc",
    bgColor: "fde2cd",
  },
  {
    name: "Sarah Lefèvre",
    role: "Direction artistique & UX",
    bio: "Conçoit l'identité visuelle et l'expérience de chaque site. Convaincue qu'un beau design qui ne convertit pas n'est pas un bon design.",
    seed: "Sarah",
    bgColor: "fbcca9",
  },
  {
    name: "Karim Benyahia",
    role: "Développement & performance",
    bio: "Construit des sites rapides, sécurisés et maintenables. Obsessionnel des scores Lighthouse à 95+.",
    seed: "Karim",
    bgColor: "fde2cd",
  },
  {
    name: "Léa Moreau",
    role: "SEO & croissance",
    bio: "Intègre le SEO dès la conception. Suit les performances après la mise en ligne pour que le site continue de progresser.",
    seed: "Lea",
    bgColor: "fbcca9",
  },
];

export const testimonials = [
  {
    text: "En 19 jours on avait un site neuf, et 2 mois après on a multiplié par 3 les demandes de devis. On regrette de ne pas l'avoir fait plus tôt.",
    author: "Sophie Martin",
    role: "Gérante · Boulangerie Martin",
    initials: "SM",
    gradient: "from-accent to-accent-soft",
  },
  {
    text: "Très clair du début à la fin. On savait toujours où on en était. Le résultat est exactement ce qu'on voulait, livré dans les délais.",
    author: "Pierre Laurent",
    role: "Dirigeant · Cabinet Laurent & Associés",
    initials: "PL",
    gradient: "from-primary to-primary-light",
  },
  {
    text: "On nous avait promis 4 mois ailleurs. Synaptic a livré en 3 semaines, et le site est mieux. Score Google 99 sur la home.",
    author: "Émilie Rousseau",
    role: "Co-fondatrice · Boutique Bohème",
    initials: "ER",
    gradient: "from-green-600 to-green-400",
  },
];

export const pricing = [
  {
    title: "Site vitrine",
    range: "3 000 € – 4 500 €",
    duration: "Livré en 3 semaines",
    features: [
      "4 à 6 pages",
      "Design sur-mesure",
      "SEO de base",
      "Formulaire de contact",
      "Hébergement Vercel 1 an inclus",
    ],
    featured: false,
  },
  {
    title: "Site étoffé / E-commerce simple",
    range: "4 500 € – 7 500 €",
    duration: "Livré en 3 à 4 semaines",
    features: [
      "6 à 10 pages",
      "SEO renforcé",
      "Intégration analytics",
      "Formulaires avancés ou boutique de base",
      "Hébergement Vercel 1 an inclus",
    ],
    featured: true,
  },
  {
    title: "Projet plus complexe",
    range: "Sur devis",
    duration: "Délai à définir ensemble",
    features: [
      "Plateforme métier",
      "E-commerce avancé",
      "Multi-langues",
      "Intégrations sur-mesure",
      "Accompagnement long terme",
    ],
    featured: false,
  },
];

export const faq = [
  {
    question: "Pourquoi livrer en 3 semaines, c'est pas trop court ?",
    answer:
      "On a structuré la méthode pour aller vite sans bâcler : composants design réutilisables, process clair, équipe rodée. Le délai court vient de l'absence de zones grises dans le projet — pas d'une qualité moindre.",
  },
  {
    question: "Que se passe-t-il si je veux modifier le site après livraison ?",
    answer:
      "On vous forme à modifier le contenu courant (textes, images, articles). Pour les évolutions plus structurelles, on peut intervenir à la demande sur un format ponctuel ou un forfait mensuel d'évolution.",
  },
  {
    question: "Vous hébergez le site ?",
    answer:
      "Le site est hébergé sur Vercel (ou OVH, à votre choix). Hébergement performant inclus la première année. Ensuite, environ 20 €/mois selon l'option.",
  },
  {
    question: "Est-ce que je suis propriétaire du site ?",
    answer:
      "Oui, intégralement. Code source, contenu, design — tout vous appartient. On vous transmet l'accès complet à la mise en ligne.",
  },
  {
    question: "Travaillez-vous avec des entreprises hors France ?",
    answer:
      "On travaille principalement avec des PME françaises, mais on accompagne aussi des clients en Belgique, Suisse, Luxembourg. La langue de travail est le français.",
  },
  {
    question: "Vous faites du référencement après la livraison ?",
    answer:
      "Le SEO est intégré dès la conception (structure, contenu, vitesse). Pour un travail SEO continu (création de contenus, netlinking…), on propose un accompagnement séparé.",
  },
];

// Données des réalisations
export type Realisation = {
  slug: string;
  client: string;
  sector: string;
  projectType: string;
  description: string;
  result: string;
  year: string;
  duration: string;
  mockupStyle: "boulangerie" | "conseil" | "boutique";
  liveUrl: string;
  results: { value: string; label: string }[];
  context: string;
  whatWeDid: { title: string; description: string }[];
  outcome: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
    initials: string;
  };
};

export const realisations: Realisation[] = [
  {
    slug: "boulangerie-martin",
    client: "Boulangerie Martin",
    sector: "Commerce local",
    projectType: "Site vitrine + SEO local",
    description: "Refonte complète + SEO local pour une boulangerie artisanale parisienne.",
    result: "+340% demandes de devis",
    year: "2025",
    duration: "19 jours",
    mockupStyle: "boulangerie",
    liveUrl: "boulangerie-martin.fr",
    results: [
      { value: "+340%", label: "Demandes de devis (2 mois)" },
      { value: "98", label: "Score Lighthouse" },
      { value: "Top 3", label: "Google « boulangerie 18ᵉ »" },
      { value: "19 j.", label: "De brief à mise en ligne" },
    ],
    context:
      "Boulangerie Martin, c'est trois générations de boulangers dans le 18ᵉ, une farine 100% bio, et un savoir-faire reconnu de quartier. Mais leur site web ne reflétait rien de tout ça : une page WordPress vieille de 8 ans, lente, illisible sur mobile, et complètement invisible sur Google. Quand Sophie Martin nous a contactés, elle avait un problème simple : ses prospects ne la trouvaient pas. L'objectif fixé : doubler les demandes de devis pros en 6 mois, avec un site livré avant la rentrée.",
    whatWeDid: [
      {
        title: "Stratégie",
        description:
          "Repositionner le site autour de 2 audiences : les habitants du quartier (vitrine) et les pros qui cherchent un fournisseur événementiel (formulaire devis dédié).",
      },
      {
        title: "Design",
        description:
          "Identité chaleureuse, photo dominante (le pain, le levain), typo Cormorant pour le côté artisan. Pas de fioritures, juste ce qui donne envie.",
      },
      {
        title: "Performance",
        description:
          "Build statique, images optimisées AVIF, lazy loading, fonts pré-chargées. Le site charge en 1,2 seconde sur mobile en 4G.",
      },
      {
        title: "SEO local",
        description:
          "Mots-clés \"boulangerie [quartier]\" intégrés naturellement, schema.org LocalBusiness, fiche Google Business optimisée, backlinks locaux.",
      },
    ],
    outcome:
      "Le pari a été tenu et dépassé. +340% de demandes de devis pros entre la mise en ligne et la fin du deuxième mois. La boulangerie est passée de la page 7 à la 3ᵉ position sur \"boulangerie 18ᵉ\". Le ROI sur le projet a été rentabilisé en moins de 3 mois.",
    testimonial: {
      quote:
        "En 19 jours on avait un site neuf, et 2 mois après on a multiplié par 3 les demandes de devis. On regrette de ne pas l'avoir fait plus tôt.",
      author: "Sophie Martin",
      role: "Gérante · Boulangerie Martin",
      initials: "SM",
    },
  },
  {
    slug: "laurent-associes",
    client: "Laurent & Associés",
    sector: "Services BtoB",
    projectType: "Site vitrine",
    description: "Site vitrine premium pour un cabinet de conseil en stratégie d'entreprise.",
    result: "Top 3 Google",
    year: "2025",
    duration: "22 jours",
    mockupStyle: "conseil",
    liveUrl: "laurent-associes.fr",
    results: [
      { value: "Top 3", label: "Google « cabinet conseil Bordeaux »" },
      { value: "94", label: "Score Lighthouse" },
      { value: "+180%", label: "Trafic organique (3 mois)" },
      { value: "22 j.", label: "De brief à mise en ligne" },
    ],
    context:
      "Cabinet de conseil en stratégie installé à Bordeaux, 15 ans d'expérience, plus de 200 missions livrées — mais un site web qui ne reflétait pas l'expertise. Le cabinet voulait reprendre la main sur sa présence digitale et capter une part du marché qui passait par les recommandations LinkedIn.",
    whatWeDid: [
      { title: "Positionnement", description: "Mise en avant des 15 ans d'expérience et de 3 cas clients étoffés." },
      { title: "Design", description: "Identité sobre et institutionnelle, typo sérif pour les titres, beaucoup d'air." },
      { title: "SEO", description: "Optimisation locale + mots-clés métier (conseil stratégie, transformation, M&A)." },
      { title: "Contenus", description: "Rédaction de 4 pages services avec angles uniques pour chaque expertise." },
    ],
    outcome:
      "3 mois après le lancement, le cabinet apparaît en top 3 sur les requêtes locales clés. Le trafic organique a été multiplié par 2,8. Plusieurs prospects entrants par mois mentionnent le site comme premier contact.",
    testimonial: {
      quote:
        "Très clair du début à la fin. On savait toujours où on en était. Le résultat est exactement ce qu'on voulait, livré dans les délais.",
      author: "Pierre Laurent",
      role: "Dirigeant · Cabinet Laurent & Associés",
      initials: "PL",
    },
  },
  {
    slug: "boutique-boheme",
    client: "Boutique Bohème",
    sector: "E-commerce",
    projectType: "Boutique en ligne",
    description: "Lancement d'une boutique en ligne de mode artisanale française.",
    result: "38 ventes en 1ère semaine",
    year: "2025",
    duration: "26 jours",
    mockupStyle: "boutique",
    liveUrl: "boutique-boheme.fr",
    results: [
      { value: "38", label: "Ventes 1ère semaine" },
      { value: "97", label: "Score Lighthouse" },
      { value: "3,2%", label: "Taux de conversion" },
      { value: "26 j.", label: "De brief à mise en ligne" },
    ],
    context:
      "Marque de mode artisanale française, jusqu'ici présente uniquement en marchés et boutiques physiques partenaires. Souhaitait passer au e-commerce sans bouleverser l'identité artisanale qui fait sa singularité.",
    whatWeDid: [
      { title: "Stratégie", description: "Différencier la marque des e-commerçants mass-market par un parti pris éditorial fort." },
      { title: "Design", description: "Typo italique éditoriale, photos produits chaleureuses, parcours d'achat fluide en 3 clics max." },
      { title: "Plateforme", description: "Boutique sur Shopify Hydrogen + Next.js pour une performance e-commerce maximale." },
      { title: "Logistique", description: "Intégration des expéditions Mondial Relay + Colissimo, gestion stocks centralisée." },
    ],
    outcome:
      "Lancement réussi : 38 ventes la première semaine, taux de conversion à 3,2% (vs 1,8% moyenne mode). Le panier moyen est 28% supérieur au panier des marchés physiques.",
    testimonial: {
      quote:
        "On nous avait promis 4 mois ailleurs. Synaptic a livré en 3 semaines, et le site est mieux. Score Google 99 sur la home.",
      author: "Émilie Rousseau",
      role: "Co-fondatrice · Boutique Bohème",
      initials: "ER",
    },
  },
];

export function getRealisationBySlug(slug: string) {
  return realisations.find((r) => r.slug === slug);
}
