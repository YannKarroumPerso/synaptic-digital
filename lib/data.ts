import { LayoutGrid, ShoppingCart, RefreshCw, Search } from "lucide-react";

export const stats = [
  { value: "3", unit: " sem.", label: "Délai moyen de livraison" },
  { value: "100", unit: "%", label: "Mis en ligne dans les délais" },
  { value: "95", unit: "+", label: "Score Lighthouse moyen" },
  { value: "48", unit: "h", label: "Premier retour sur votre projet" },
];

export type Service = {
  slug: string;
  icon: typeof LayoutGrid;
  title: string;
  tagline: string;
  description: string;
  longDescription: string[];
  includes: string[];
  idealFor: string;
  duration: string;
  price: string;
  priceRange: string;
};

export const services: Service[] = [
  {
    slug: "site-vitrine",
    icon: LayoutGrid,
    title: "Site vitrine",
    tagline: "Présentez votre activité, gagnez en visibilité.",
    description:
      "Présentez votre activité avec un site clair, rapide et trouvé sur Google. À partir d'un site one-page jusqu'à 6 pages, livré en 2-3 semaines.",
    longDescription: [
      "Un site vitrine, c'est votre carte de visite digitale — mais en mieux. C'est la première chose que vos prospects voient avant de vous appeler, c'est ce qui les rassure, et c'est ce qui les fait passer à l'action.",
      "On conçoit votre site pour qu'il parle à votre cible précise : votre offre claire en haut de page, vos preuves sociales en milieu de page, et un parcours de contact sans friction en bas. Pas du remplissage : chaque page sert un objectif.",
    ],
    includes: [
      "4 à 6 pages sur-mesure (accueil, services, à propos, contact, mentions légales)",
      "Design unique, adapté à votre identité de marque",
      "Optimisations SEO de base (balises, structure sémantique, vitesse)",
      "Formulaire de contact avec envoi par email",
      "Responsive parfait sur mobile, tablette, desktop",
      "Hébergement Vercel (rapide, sécurisé) inclus la première année",
      "Formation à la modification du contenu courant",
      "30 jours de suivi après mise en ligne",
    ],
    idealFor:
      "TPE et petites PME qui veulent une présence digitale propre et professionnelle, sans pour autant avoir besoin d'une boutique en ligne ou d'outils métier.",
    duration: "Livré en 2 à 3 semaines",
    price: "1 500 €",
    priceRange: "1 500 € – 4 500 €",
  },
  {
    slug: "e-commerce",
    icon: ShoppingCart,
    title: "E-commerce",
    tagline: "Une boutique qui convertit, pas un catalogue.",
    description:
      "Une boutique en ligne fluide, sécurisée, optimisée pour convertir. Catalogue, paiement, gestion intuitive.",
    longDescription: [
      "Beaucoup de boutiques en ligne sont juste des catalogues mal foutus avec un bouton « ajouter au panier ». Nous, on conçoit votre e-commerce comme un parcours d'achat optimisé : 3 clics maximum pour acheter, taux d'abandon minimal, paiement sécurisé sans friction.",
      "On part sur Shopify ou WooCommerce selon votre besoin, avec un thème entièrement custom qui ressemble à votre marque (pas à un site générique). Intégrations paiement, livraison, stock — tout est pré-configuré.",
    ],
    includes: [
      "Boutique sur Shopify ou WooCommerce, thème custom",
      "Jusqu'à 30 produits configurés au lancement (extensible ensuite)",
      "Paiement Stripe, PayPal, Apple/Google Pay",
      "Livraison Mondial Relay + Colissimo + retrait magasin",
      "Tunnel d'achat optimisé (1 page checkout)",
      "Gestion stocks centralisée, alertes rupture",
      "Analytics e-commerce (taux conversion, panier moyen, etc.)",
      "Hébergement + plateforme inclus la première année",
      "Formation complète sur la gestion produits/commandes",
    ],
    idealFor:
      "Commerçants qui passent au digital, marques artisanales qui veulent toucher au-delà de leur région, professionnels qui vendent produits ou prestations en ligne.",
    duration: "Livré en 4 semaines",
    price: "6 500 €",
    priceRange: "6 500 € – 12 000 €",
  },
  {
    slug: "refonte",
    icon: RefreshCw,
    title: "Refonte de site",
    tagline: "Reprendre ce qui marche, jeter le reste.",
    description:
      "Votre site existant est lent, daté ou peu lisible ? On reprend tout, en gardant ce qui marche. Bascule sans coupure.",
    longDescription: [
      "Refaire un site, ce n'est pas tout jeter. C'est garder le bon (vos contenus qui performent, vos URLs qui rankent sur Google, votre identité) et reconstruire le reste pour que le site redevienne un outil business — pas une vitrine fatiguée.",
      "On audite d'abord l'existant : ce qui marche en SEO, ce qui convertit, ce qui freine. Puis on conçoit un nouveau site qui préserve l'acquis et corrige les points bloquants. Bascule en une nuit, redirections 301 propres, zéro perte de trafic.",
    ],
    includes: [
      "Audit complet du site existant (SEO, perf, UX, contenus)",
      "Récupération et nettoyage des contenus à conserver",
      "Plan de redirection 301 pour préserver le SEO acquis",
      "Refonte design + structure + technique en parallèle",
      "Migration sans interruption de service (bascule en une nuit)",
      "Optimisations performance et SEO renforcées",
      "Comparatif avant/après : Lighthouse, trafic, conversion",
      "30 jours de suivi pour ajuster post-bascule",
    ],
    idealFor:
      "Entreprises avec un site existant qui sous-performe (lent, daté, peu mobile-friendly, faible SEO) et qui veulent reprendre la main sans tout recommencer de zéro.",
    duration: "Livrée en 3 à 4 semaines",
    price: "3 500 €",
    priceRange: "3 500 € – 8 000 €",
  },
  {
    slug: "seo-performance",
    icon: Search,
    title: "SEO & Performance",
    tagline: "Être trouvé sur Google, charger en moins de 2 sec.",
    description:
      "Audit, optimisations techniques, structure de contenu. Pour être trouvé par vos prospects sur Google.",
    longDescription: [
      "Vous avez un site, mais il rame ? Il n'apparaît jamais sur Google ? Ce n'est pas une fatalité — la plupart des sites peuvent gagner 20-40 points de score Lighthouse et plusieurs positions sur Google en quelques jours de travail bien ciblé.",
      "On audite, on identifie les 20% d'actions qui produisent 80% du résultat, on les exécute, et on mesure. Travail ponctuel ou accompagnement long terme selon votre besoin.",
    ],
    includes: [
      "Audit technique SEO complet (Search Console, structure, balises, Core Web Vitals)",
      "Audit performance (Lighthouse, GTmetrix, real user metrics)",
      "Plan d'action priorisé avec impact estimé pour chaque optimisation",
      "Implémentation des optimisations techniques (images, CSS, JS, fonts)",
      "Optimisation des contenus existants (titres, méta, sémantique)",
      "Mise en place du tracking analytics avancé",
      "Rapport final avec avant/après mesurable",
      "Possibilité d'accompagnement mensuel (rédaction, suivi positions)",
    ],
    idealFor:
      "Sites existants qui ne convertissent pas faute d'être trouvés sur Google, ou trop lents pour retenir les visiteurs. Audits ponctuels ou accompagnement continu.",
    duration: "1 à 2 semaines pour un audit + chantier d'optimisation",
    price: "1 500 €",
    priceRange: "1 500 € – 4 500 €",
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
    name: "Marc D.",
    role: "Fondateur & stratégie",
    bio: "Pilote chaque projet de bout en bout. Veille à ce que le site serve un vrai objectif business, pas juste à exister.",
    bioExtended: "Quinze ans dans le digital, dont sept à diriger des projets pour des PME et ETI françaises. A fondé Synaptic après avoir trop souvent vu des projets web tourner court — délais qui explosent, sites livrés qui ne servent à rien, devis qui ne tiennent pas. Veille à ce que chaque projet ait un objectif business clair dès le brief.",
    seed: "MarcD",
    bgColor: "fde2cd",
  },
  {
    name: "Sarah L.",
    role: "Direction artistique & UX",
    bio: "Conçoit l'identité visuelle et l'expérience de chaque site. Convaincue qu'un beau design qui ne convertit pas n'est pas un bon design.",
    bioExtended: "Designer formée à l'ESAD, passée par des studios de branding et des agences UX. Trace les premières lignes de chaque projet : structure, hiérarchie, ton visuel. Convaincue qu'un beau design qui ne convertit pas est juste de l'art mal placé.",
    seed: "SarahL",
    bgColor: "fbcca9",
  },
  {
    name: "Karim B.",
    role: "Développement & performance",
    bio: "Construit des sites rapides, sécurisés et maintenables. Obsessionnel des scores Lighthouse à 95+.",
    bioExtended: "Dix ans de développement web, spécialiste des stacks modernes (Next.js, Astro, Shopify). Construit chaque site comme un produit : maintenable, sécurisé, rapide. Surveille les scores Lighthouse comme d'autres surveillent leur poids — toujours au-dessus de 95.",
    seed: "KarimB",
    bgColor: "fde2cd",
  },
  {
    name: "Léa M.",
    role: "SEO & croissance",
    bio: "Intègre le SEO dès la conception. Suit les performances après la mise en ligne pour que le site continue de progresser.",
    bioExtended: "Background SEO chez des plateformes média à fort trafic. Intègre les fondamentaux SEO dès la phase de design (architecture sémantique, contenu, vitesse). Suit chaque site après mise en ligne pour qu'il continue à monter sur Google.",
    seed: "LeaM",
    bgColor: "fbcca9",
  },
];

export const testimonials = [
  {
    text: "En 19 jours on avait un site neuf. Deux mois après, on a multiplié par 3 les demandes de devis. On regrette juste de ne pas l'avoir fait plus tôt.",
    author: "Sophie M.",
    role: "Gérante · Commerce local",
    initials: "SM",
    gradient: "from-accent to-accent-soft",
  },
  {
    text: "Très clair du début à la fin. On savait toujours où on en était. Le résultat est exactement ce qu'on voulait, livré dans les délais.",
    author: "Pierre L.",
    role: "Dirigeant · Cabinet conseil",
    initials: "PL",
    gradient: "from-primary to-primary-light",
  },
  {
    text: "On nous avait promis 4 mois ailleurs. Synaptic a livré en 3 semaines, et le site est mieux. Score Google 99 sur la home.",
    author: "Émilie R.",
    role: "Co-fondatrice · E-commerce mode",
    initials: "ER",
    gradient: "from-green-600 to-green-400",
  },
];

export const pricing = [
  {
    title: "Site vitrine",
    range: "1 500 € – 4 500 €",
    duration: "Livré en 2 à 3 semaines",
    features: [
      "One-page ou jusqu'à 6 pages",
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

// Réalisations — affichées en vitrine sur la home, non-cliquables, sans détail
export type Realisation = {
  name: string;
  category: string;
  description: string;
  image: string; // chemin local /public, desktop
  imageMobile: string; // chemin local /public, version mobile
};

export const realisations: Realisation[] = [
  {
    name: "Altitude Trail",
    category: "Média éditorial",
    description: "Média d'actualités trail running : courses, ultra-trail, entraînement, nutrition.",
    image: "/realisations/altitude-trail.png",
    imageMobile: "/realisations/altitude-trail-mobile.png",
  },
  {
    name: "Plumestack",
    category: "Plateforme SaaS",
    description: "Plateforme tout-en-un pour lancer un média rentable sur sa niche en 10 minutes.",
    image: "/realisations/plumestack.png",
    imageMobile: "/realisations/plumestack-mobile.png",
  },
  {
    name: "Allure",
    category: "SaaS · IA générative",
    description: "Plateforme qui transforme un trail en site événementiel professionnel via IA, en 7 minutes.",
    image: "/realisations/allure.png",
    imageMobile: "/realisations/allure-mobile.png",
  },
  {
    name: "Saveurs",
    category: "Site éditorial · Cuisine",
    description: "Site de recettes saisonnières — design éditorial chaleureux, photo dominante.",
    image: "/realisations/plumestack-recette.png",
    imageMobile: "/realisations/plumestack-recette-mobile.png",
  },
  {
    name: "Carnet de voyage",
    category: "Site éditorial · Voyage",
    description: "Carnet de voyage : récits longs, guides utiles, bons plans testés sur le terrain.",
    image: "/realisations/plumestack-voyage.png",
    imageMobile: "/realisations/plumestack-voyage-mobile.png",
  },
];
