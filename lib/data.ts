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

// Réalisations — affichées en vitrine sur la home, non-cliquables, sans détail
export type Realisation = {
  name: string;
  category: string;
  description: string;
  image: string; // chemin local /public
};

export const realisations: Realisation[] = [
  {
    name: "Altitude Trail",
    category: "Média éditorial",
    description: "Média d'actualités trail running : courses, ultra-trail, entraînement, nutrition.",
    image: "/realisations/altitude-trail.png",
  },
  {
    name: "Plumestack",
    category: "Plateforme SaaS",
    description: "Plateforme tout-en-un pour lancer un média rentable sur sa niche en 10 minutes.",
    image: "/realisations/plumestack.png",
  },
  {
    name: "Allure",
    category: "SaaS · IA générative",
    description: "Plateforme qui transforme un trail en site événementiel professionnel via IA, en 7 minutes.",
    image: "/realisations/allure.png",
  },
  {
    name: "Saveurs",
    category: "Site éditorial · Cuisine",
    description: "Site de recettes saisonnières — design éditorial chaleureux, photo dominante.",
    image: "/realisations/plumestack-recette.png",
  },
  {
    name: "Carnet de voyage",
    category: "Site éditorial · Voyage",
    description: "Carnet de voyage : récits longs, guides utiles, bons plans testés sur le terrain.",
    image: "/realisations/plumestack-voyage.png",
  },
];
