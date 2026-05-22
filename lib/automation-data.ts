import {
  CalendarCheck,
  FileText,
  UtensilsCrossed,
  Users,
  type LucideIcon,
} from "lucide-react";

export interface AutomationStat {
  value: string;
  label: string;
}

export interface AutomationStep {
  title: string;
  description: string;
}

export interface AutomationModule {
  title: string;
  description: string;
}

export interface AutomationFAQ {
  question: string;
  answer: string;
}

export interface AutomationPricingTier {
  name: string;
  price: string;
  priceNote?: string;
  includes: string[];
  highlighted?: boolean;
}

export interface AutomationCase {
  slug: string;
  shortTitle: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  audience: string;
  eyebrow: string;
  h1: string;
  subtitle: string;
  icon: LucideIcon;
  painTitle: string;
  painParagraphs: string[];
  painSignal: string;
  solutionTitle: string;
  solutionIntro: string;
  modules: AutomationModule[];
  stats: AutomationStat[];
  process: AutomationStep[];
  toolStack: string[];
  pricing: AutomationPricingTier[];
  faq: AutomationFAQ[];
}

export const automationCases: AutomationCase[] = [
  /* ----------------------------------------------------------------
     CAS 1 : Prise de RDV automatique
     Cible : kinés, ostéos, coachs, conseillers indépendants
     ---------------------------------------------------------------- */
  {
    slug: "prise-de-rdv-automatique",
    shortTitle: "Prise de RDV automatique",
    title: "Prise de RDV automatique pour pros indépendants",
    metaTitle: "Prise de rendez-vous en ligne, sans gestion manuelle",
    metaDescription:
      "Pour kinés, ostéos, coachs et conseillers : agenda en ligne, rappels SMS, paiement d'acompte, blocage des no-show. Synaptic Digital, Charente.",
    keywords: [
      "prise de rendez-vous en ligne",
      "agenda automatique kiné",
      "réservation osteopathe en ligne",
      "logiciel rdv coach",
      "rdv automatique professionnel",
      "agenda en ligne charente",
    ],
    audience: "Kinés, ostéos, coachs sportifs, conseillers indépendants",
    eyebrow: "Cas d'usage · Pros indépendants",
    h1: "Votre agenda se remplit pendant que vous travaillez.",
    subtitle:
      "Vos clients réservent en ligne, 7 jours sur 7. Les rappels SMS partent tout seuls. Vos no-show s'effondrent. Vous ne touchez plus à un téléphone pour caler un créneau.",
    icon: CalendarCheck,
    painTitle: "Le quotidien que vous connaissez par coeur",
    painParagraphs: [
      "Le téléphone sonne pendant une séance. Vous ne pouvez pas répondre. Le client raccroche, rappelle plus tard, ou pire, va voir le confrère.",
      "Vous passez 20 minutes par jour à répondre à des emails du type \"vous êtes dispo jeudi à 17h ?\". Multiplié par 5 jours, c'est 8 heures par mois passées à caler des créneaux.",
      "Un client sur cinq ne vient pas, sans prévenir. Vous perdez 50 € à chaque fois, multiplié par 4 ou 5 par semaine, ça fait vite 800 € par mois envolés.",
    ],
    painSignal:
      "Si vous reconnaissez 2 phrases sur 3, votre métier vous mange par les administrations.",
    solutionTitle: "Ce qu'on automatise pour vous",
    solutionIntro:
      "Un système de réservation simple côté client, robuste côté gestion. Vous gardez la main sur tout, vous ne touchez à rien au quotidien.",
    modules: [
      {
        title: "Page de réservation publique",
        description:
          "Une page propre à votre image, intégrée à votre site. Vos clients choisissent leur prestation, leur créneau, et confirment en 30 secondes. Compatible mobile, sans inscription obligatoire.",
      },
      {
        title: "Synchronisation agenda en temps réel",
        description:
          "Connectée à Google Agenda, Outlook ou iCal. Si un créneau est pris en cabinet, il disparaît automatiquement en ligne. Plus de double-booking, jamais.",
      },
      {
        title: "Rappels SMS et email automatiques",
        description:
          "Un SMS 24h avant le RDV, un email confirmation immédiate. Le client peut annuler ou reporter sans vous appeler. Vous récupérez le créneau libéré dans la file d'attente automatique.",
      },
      {
        title: "Acompte CB pour bloquer les no-show",
        description:
          "Optionnel : le client laisse une empreinte CB ou un acompte de 10 à 20 €. S'il ne vient pas et ne prévient pas, vous êtes indemnisé. Effet psychologique massif sur l'assiduité.",
      },
    ],
    stats: [
      { value: "90 %", label: "de temps administratif en moins" },
      { value: "65 %", label: "de no-show en moins avec rappel SMS" },
      { value: "2 h", label: "gagnées par jour en moyenne" },
      { value: "24/7", label: "réservation possible, même la nuit" },
    ],
    process: [
      {
        title: "Cadrage 30 minutes",
        description:
          "On regarde votre agenda actuel, vos prestations, vos contraintes. On définit la durée des créneaux, vos jours off, les buffers entre RDV.",
      },
      {
        title: "Setup technique (1 semaine)",
        description:
          "On déploie la page de réservation, on connecte votre agenda, on paramètre les SMS et les paiements. Vous validez chaque étape par retour rapide.",
      },
      {
        title: "Test grandeur nature (3 jours)",
        description:
          "Vous testez avec 2-3 clients de confiance pendant 3 jours, on ajuste les détails (wording, durées, rappels).",
      },
      {
        title: "Mise en ligne et formation 1h",
        description:
          "On active la prise de RDV publique. Formation à distance de 1h pour gérer les exceptions (vacances, fermeture imprévue, déplacement). Vous êtes 100 % autonome.",
      },
    ],
    toolStack: ["Cal.com", "Stripe", "Twilio SMS", "Google Calendar", "Resend email"],
    pricing: [
      {
        name: "Pack Solo",
        price: "1 200 €",
        priceNote: "Installation unique",
        includes: [
          "Page de réservation personnalisée",
          "Sync agenda Google ou Outlook",
          "Rappels email automatiques",
          "Jusqu'à 5 prestations différentes",
          "Hébergement et maintenance 1 an inclus",
        ],
      },
      {
        name: "Pack Pro",
        price: "1 800 €",
        priceNote: "Installation + 1 an de support",
        highlighted: true,
        includes: [
          "Tout le pack Solo",
          "Rappels SMS automatiques (1000 SMS/an inclus)",
          "Acompte CB ou empreinte via Stripe",
          "Gestion file d'attente automatique",
          "Statistiques d'occupation mensuelles",
          "Multi-prestations illimitées",
        ],
      },
    ],
    faq: [
      {
        question: "Pourquoi pas juste Calendly ou Doctolib ?",
        answer:
          "Calendly est très bien pour les cadres en télétravail, moins pour un kiné qui veut un acompte CB et une page intégrée à son site. Doctolib facture 109 €/mois et garde la base client. Notre solution s'intègre à votre site, vous appartient à 100%, et coûte moins cher sur 3 ans.",
      },
      {
        question: "Combien ça coûte par mois après installation ?",
        answer:
          "0 € de frais récurrents obligatoires. Vous payez juste les SMS sortants (environ 0,06 €/SMS chez Twilio) et les frais Stripe si vous prenez des acomptes (1,5 % par transaction). Pour 200 RDV/mois, comptez 15 à 25 €.",
      },
      {
        question: "Et si mon agenda est déjà sur Doctolib ?",
        answer:
          "On peut soit faire cohabiter les deux le temps de la transition, soit récupérer votre base et faire migrer proprement. La sync calendaire évite les double-bookings dans les deux cas.",
      },
      {
        question: "Mes clients âgés vont-ils s'en sortir ?",
        answer:
          "La page est volontairement minimaliste : 3 clics maximum pour réserver. On évite les champs inutiles. Pour ceux qui préfèrent le téléphone, ils peuvent toujours vous appeler, vous notez le RDV manuellement dans le système.",
      },
      {
        question: "Est-ce que je peux bloquer un créneau exceptionnel ?",
        answer:
          "Oui, depuis votre Google Agenda ou directement dans l'interface. Vous fermez 3 jours pour congés, vous bloquez 1h pour une urgence, c'est immédiat côté public.",
      },
    ],
  },

  /* ----------------------------------------------------------------
     CAS 2 : Devis en ligne pour artisan
     Cible : plombiers, électriciens, paysagistes, menuisiers
     ---------------------------------------------------------------- */
  {
    slug: "devis-en-ligne-artisan",
    shortTitle: "Devis en ligne artisan",
    title: "Devis en ligne automatique pour artisans",
    metaTitle: "Devis artisan en ligne, envoyé en 30 secondes",
    metaDescription:
      "Pour artisans BTP, paysagistes, menuisiers : formulaire intelligent, pré-devis instantané, relance auto. Plus jamais de devis perdus. Synaptic, Charente.",
    keywords: [
      "devis en ligne artisan",
      "devis plombier en ligne",
      "devis électricien automatique",
      "formulaire devis paysagiste",
      "logiciel devis artisan",
      "devis bâtiment charente",
    ],
    audience: "Plombiers, électriciens, paysagistes, menuisiers, couvreurs",
    eyebrow: "Cas d'usage · Artisans BTP",
    h1: "Un devis envoyé en 30 secondes, jamais 3 heures.",
    subtitle:
      "Vos prospects décrivent leur chantier depuis votre site. Ils reçoivent un pré-devis instantané. Vous récupérez tous les détails dans votre boîte mail, déjà classés. Les indécis sont relancés automatiquement.",
    icon: FileText,
    painTitle: "Pourquoi vous laissez des chantiers sur la table",
    painParagraphs: [
      "Un prospect appelle un mardi à 11h pendant que vous êtes sur un toit. Vous rappelez à 19h. Il a déjà signé chez le concurrent.",
      "Vous passez 2 à 3 heures par devis pour bien le rédiger. Sur 10 devis, 4 ne donnent rien. C'est 12 heures par mois perdues pour zéro chiffre d'affaires.",
      "Vous oubliez de relancer un client qui hésitait. 3 semaines plus tard, vous tombez sur sa carte de visite : trop tard, le chantier est parti chez quelqu'un d'autre.",
    ],
    painSignal:
      "Le temps de réaction est devenu le critère n°1 du choix d'un artisan en 2026.",
    solutionTitle: "Un système qui qualifie, chiffre, relance",
    solutionIntro:
      "On automatise tout le pré-commercial. Vous ne touchez plus que les leads qualifiés, déjà chiffrés grossièrement, prêts à signer.",
    modules: [
      {
        title: "Formulaire intelligent par type de chantier",
        description:
          "Le prospect choisit son besoin (rénovation salle de bain, installation chaudière, taille haie, etc.). Le formulaire s'adapte avec les bonnes questions : surface, urgence, contraintes, photos. Aucune perte de temps avec des champs inutiles.",
      },
      {
        title: "Pré-devis estimé instantané",
        description:
          "À la soumission, le prospect reçoit une fourchette de prix (par exemple 1 800 à 2 400 €) basée sur vos grilles tarifaires. Il sait à quoi s'attendre, vous pré-qualifiez les budgets fantaisistes.",
      },
      {
        title: "Email avec détail complet et photos",
        description:
          "Vous recevez instantanément un email récap structuré (chantier, contraintes, photos, fourchette de prix proposée, coordonnées). Plus besoin de rappeler pour avoir les infos, vous savez si vous voulez le chantier en 30 secondes.",
      },
      {
        title: "Relance automatique des indécis",
        description:
          "Si pas de retour de votre part en 48h ou si le prospect ne signe pas le devis final en 7 jours, un email automatique part. \"Le devis est toujours valable, voulez-vous qu'on en reparle ?\". 70 % des relancés répondent.",
      },
    ],
    stats: [
      { value: "+180 %", label: "de devis signés sur 6 mois" },
      { value: "30 s", label: "pour envoyer un pré-devis vs 2-3h" },
      { value: "70 %", label: "des prospects relancés répondent" },
      { value: "0", label: "lead oublié dans le post-it" },
    ],
    process: [
      {
        title: "Audit de vos prestations (1h)",
        description:
          "On liste ensemble vos types de chantiers, vos prix au m² ou au forfait, vos contraintes (zone d'intervention, délais, type de clientèle).",
      },
      {
        title: "Construction du formulaire et des règles de prix",
        description:
          "On construit l'arbre de décision : selon les réponses, on calcule la fourchette. Vous validez chaque scénario chiffré avant déploiement.",
      },
      {
        title: "Intégration au site et test",
        description:
          "On intègre le formulaire à votre site (ou on créé une landing dédiée si pas de site). Vous testez en interne pendant 3 jours avec des cas réels.",
      },
      {
        title: "Mise en production et suivi 1 mois",
        description:
          "Le système part en live. On suit avec vous les 30 premiers leads, on ajuste les questions et la grille tarifaire si besoin. Vous êtes ensuite autonome.",
      },
    ],
    toolStack: ["Tally", "n8n", "Resend email", "Notion CRM", "Stripe (devis signés en ligne)"],
    pricing: [
      {
        name: "Pack Artisan",
        price: "1 500 €",
        priceNote: "Installation unique",
        includes: [
          "Formulaire intelligent (jusqu'à 5 types de chantier)",
          "Grille tarifaire et fourchette automatique",
          "Email récap structuré côté artisan",
          "Email confirmation côté prospect",
          "Hébergement et maintenance 1 an inclus",
        ],
      },
      {
        name: "Pack Artisan +",
        price: "2 200 €",
        priceNote: "Installation + 1 an de support",
        highlighted: true,
        includes: [
          "Tout le pack Artisan",
          "Relance automatique J+2 / J+7 / J+14",
          "Suivi pipeline dans un CRM léger (Notion)",
          "Signature de devis en ligne (Stripe)",
          "Synchronisation avec votre logiciel de compta sur demande",
          "Statistiques de conversion mensuelles",
        ],
      },
    ],
    faq: [
      {
        question: "Et si le chantier est très complexe et hors fourchette ?",
        answer:
          "Le système est conçu pour ça : au-delà d'un certain seuil de complexité (par exemple gros oeuvre, multi-corps de métier), le formulaire affiche \"chantier sur mesure, on vous rappelle sous 24h\" sans donner de fourchette. Vous garde la main pour les gros morceaux.",
      },
      {
        question: "Je ne veux pas afficher mes prix publiquement.",
        answer:
          "Le prix est seulement envoyé par email au prospect après soumission du formulaire. Rien n'apparaît publiquement sur votre site. Si vous préférez encore plus discret, on peut envoyer uniquement \"votre devis est en cours d'estimation\" sans fourchette.",
      },
      {
        question: "Ça remplace mon logiciel de devis (EBP, Sage, ProBatik) ?",
        answer:
          "Non. Le système pré-qualifie et chiffre grossièrement. Pour le devis final officiel avec mentions légales, vous continuez à utiliser votre logiciel. Mais vous gagnez 2 à 3 heures par devis car toutes les infos sont déjà collectées.",
      },
      {
        question: "Et les leads téléphone, ils sont perdus ?",
        answer:
          "Non. On ajoute un bouton \"Préférez-vous être rappelé ?\" qui envoie une demande de rappel avec créneaux. Vous gardez les deux canaux mais avec une trace écrite systématique.",
      },
      {
        question: "Combien ça coûte par mois après installation ?",
        answer:
          "0 € de frais récurrents si vous restez sur les outils gratuits qu'on utilise. Si vous voulez le pipeline CRM Notion partagé en équipe, comptez 8 €/mois par utilisateur. Sinon, c'est offert.",
      },
    ],
  },

  /* ----------------------------------------------------------------
     CAS 3 : Réservation restaurant sans commission
     Cible : restaurateurs Charente
     ---------------------------------------------------------------- */
  {
    slug: "reservation-restaurant-sans-commission",
    shortTitle: "Réservation restaurant",
    title: "Système de réservation restaurant sans commission",
    metaTitle: "Réservation restaurant en ligne, 0 % de commission",
    metaDescription:
      "Sortez de TheFork. Système de réservation propriétaire pour restaurant : 0 % commission, empreinte CB anti no-show, données clients à vous. Synaptic, Charente.",
    keywords: [
      "réservation restaurant en ligne",
      "alternative thefork",
      "système réservation restaurateur",
      "logiciel réservation restaurant sans commission",
      "anti no-show restaurant",
      "réservation restaurant charente",
    ],
    audience: "Restaurateurs, bistrots, brasseries, traiteurs avec espace de réception",
    eyebrow: "Cas d'usage · Restaurants",
    h1: "Vos réservations, sans payer 2 € à TheFork.",
    subtitle:
      "Un système de réservation directement sur votre site. Empreinte CB pour neutraliser les no-show. Base clients qui vous appartient. Économisez en moyenne 300 € par mois en commissions.",
    icon: UtensilsCrossed,
    painTitle: "TheFork vous coûte plus cher que vous ne le pensez",
    painParagraphs: [
      "Vous payez entre 2 et 4 € de commission par couvert réservé via TheFork. Avec 200 couverts en ligne par mois, ça fait 400 à 800 € rien qu'en commissions, soit 5 000 à 10 000 € par an.",
      "Vos données clients (emails, fréquence, préférences) appartiennent à TheFork. Vous ne pouvez pas les utiliser pour fidéliser, vous êtes prisonnier du système.",
      "Les no-show vous coûtent l'équivalent de 15 à 20 couverts par mois. Personne ne réserve avec empreinte CB sur TheFork pour un restaurant indépendant, c'est réservé aux étoilés.",
    ],
    painSignal:
      "Vous payez pour gagner des clients qui vous appartiennent déjà.",
    solutionTitle: "Votre propre système de réservation",
    solutionIntro:
      "Un widget de réservation intégré à votre site, design soigné, gestion fluide côté salle. Le tout sans abonnement mensuel ni commission par couvert.",
    modules: [
      {
        title: "Widget de réservation sur votre site",
        description:
          "Vos clients réservent en 30 secondes depuis votre page d'accueil ou Google. Choix du jour, du créneau, du nombre de couverts, allergies optionnelles. Mobile-friendly, 100 % à votre image.",
      },
      {
        title: "Empreinte CB pour anti no-show",
        description:
          "Pour les groupes de 4+ ou les créneaux peak (vendredi 20h), une empreinte CB est demandée. Aucune somme prélevée si la personne vient. En cas de no-show non prévenu, 25 €/personne sont prélevés automatiquement. Le no-show baisse de 50 à 60 %.",
      },
      {
        title: "Gestion salle en temps réel",
        description:
          "Vue calendrier de votre journée, vos tables, vos couverts. Vous bloquez une table pour un habitué, vous changez le plan en live. Compatible smartphone et tablette en salle.",
      },
      {
        title: "Base clients et marketing",
        description:
          "Tous les emails clients vous appartiennent. Vous envoyez 1 fois par mois une promo (\"menu spécial truffe\", \"nouvelle ardoise printemps\") via Brevo ou Resend. Re-fréquence x2 à x3 chez les habitués.",
      },
    ],
    stats: [
      { value: "0 %", label: "de commission par couvert" },
      { value: "55 %", label: "de no-show en moins avec empreinte CB" },
      { value: "300 €", label: "économisés en moyenne par mois" },
      { value: "100 %", label: "des données clients à vous" },
    ],
    process: [
      {
        title: "Audit de votre fonctionnement (1h sur place)",
        description:
          "On vient en service pour voir comment votre salle tourne, vos pics, vos zones de friction. On définit les règles de gestion (durée moyenne, table 2 vs 4, allergies, etc.).",
      },
      {
        title: "Setup widget et règles (1 semaine)",
        description:
          "Déploiement sur votre site, paramétrage des créneaux, des capacités, des règles anti no-show. Vous validez le wording, les confirmations email.",
      },
      {
        title: "Formation équipe (2h sur place)",
        description:
          "Formation pratique pour vous et votre équipe en salle. Cas concrets : annulation de dernière minute, modification de réservation, gestion d'un no-show qui appelle.",
      },
      {
        title: "Transition TheFork (optionnelle)",
        description:
          "Si vous voulez sortir totalement de TheFork, on vous accompagne sur la communication client (\"Bonjour, on a changé notre système...\"). Vous pouvez aussi garder TheFork le temps de prendre vos marques.",
      },
    ],
    toolStack: ["Cal.com (table booking)", "Stripe (empreintes CB)", "Resend email", "Brevo (newsletter)", "Hébergement Vercel"],
    pricing: [
      {
        name: "Pack Resto",
        price: "1 800 €",
        priceNote: "Installation unique",
        includes: [
          "Widget réservation intégré au site",
          "Jusqu'à 3 services par jour (déjeuner, dîner, brunch)",
          "Confirmation email automatique",
          "Vue gestion salle simple",
          "Formation équipe 2h",
          "Hébergement et maintenance 1 an inclus",
        ],
      },
      {
        name: "Pack Resto +",
        price: "2 800 €",
        priceNote: "Installation + 1 an de support",
        highlighted: true,
        includes: [
          "Tout le pack Resto",
          "Empreinte CB anti no-show (Stripe)",
          "Rappels SMS J-1 (500 SMS/an inclus)",
          "Newsletter mensuelle prête à envoyer (template + outil)",
          "Stats mensuelles (taux d'occupation, no-show, top créneaux)",
          "Import de votre base TheFork existante",
        ],
      },
    ],
    faq: [
      {
        question: "Je peux garder TheFork en parallèle ?",
        answer:
          "Oui. Beaucoup de restos partent en hybride : 70 % via leur propre site, 30 % via TheFork pour capter la clientèle hors zone. Avec le temps, vous pouvez basculer entièrement en propre une fois votre base clients constituée.",
      },
      {
        question: "Comment éviter le double-booking ?",
        answer:
          "Le système gère un compteur de couverts par créneau. Si vous fixez 40 couverts à 20h, le widget refuse la 41e réservation pour ce créneau. Si vous gardez TheFork, vous bloquez manuellement les couverts réservés là-bas.",
      },
      {
        question: "Stripe va prélever l'empreinte CB de mes clients ?",
        answer:
          "Non, c'est juste une autorisation, aucune somme n'est prélevée si le client vient. En cas de no-show, vous validez manuellement le prélèvement (vous pouvez choisir de ne pas le faire pour un client fidèle). C'est légal et conforme RGPD à condition que le client soit clairement informé au moment de la réservation.",
      },
      {
        question: "Et si je n'ai pas de site ?",
        answer:
          "On peut créer une landing page de réservation autonome (votresalle.fr/reserver) en moins d'1 semaine. Pas besoin de refondre tout votre site.",
      },
      {
        question: "Combien de temps pour rentabiliser l'investissement ?",
        answer:
          "À 300 € économisés par mois en commission TheFork, le pack Resto + est rentabilisé en 9 mois. À 600 €/mois économisés (restos à fort volume), c'est 5 mois.",
      },
    ],
  },

  /* ----------------------------------------------------------------
     CAS 4 : Gestion leads commerce local
     Cible : commerces, professions libérales, agences immo
     ---------------------------------------------------------------- */
  {
    slug: "gestion-leads-commerce-local",
    shortTitle: "Gestion leads centralisée",
    title: "Centralisation et relance automatique des leads",
    metaTitle: "Gestion leads automatisée pour commerces et pros libéraux",
    metaDescription:
      "Centralisation des leads (formulaire, chat, appel), scoring chaud/tiède/froid, relance auto en 24h. Tripler vos conversions. Synaptic Digital, Charente.",
    keywords: [
      "gestion leads automatique",
      "logiciel suivi prospects",
      "crm petite entreprise",
      "relance prospects automatique",
      "centraliser leads",
      "gestion contacts commerce local",
    ],
    audience: "Commerces, professions libérales, agences immobilières, courtiers, assureurs",
    eyebrow: "Cas d'usage · Commerces et pros libéraux",
    h1: "Chaque lead capté, qualifié, et relancé automatiquement.",
    subtitle:
      "Formulaire, chat, appel manqué, message Instagram : tout atterrit au même endroit. Le système score chaque lead, vous priorisez les chauds, les autres sont relancés sans effort.",
    icon: Users,
    painTitle: "Le scénario qui se répète chez 9 PME sur 10",
    painParagraphs: [
      "Un prospect vous envoie un message sur Instagram à 22h un dimanche. Vous le voyez le mardi midi entre deux RDV. Vous oubliez de répondre. Le prospect est parti depuis longtemps.",
      "Un autre remplit votre formulaire de contact, atterrit dans la boîte commune \"contact@\" que personne ne surveille vraiment. Réponse 4 jours plus tard, prospect refroidi.",
      "Vous suivez votre commercial au tableau blanc avec des post-it. Vous oubliez de relancer Pierre Dupont qui devait \"y réfléchir d'ici 2 semaines\". 6 mois plus tard, vous tombez sur sa fiche : il a signé chez le concurrent.",
    ],
    painSignal:
      "Un lead non traité en moins d'1 heure perd 80 % de sa valeur.",
    solutionTitle: "Toutes vos pistes commerciales, dans une seule vue",
    solutionIntro:
      "Un mini-CRM léger, conçu pour les PME qui n'ont pas envie de payer Salesforce. Tout est centralisé, scoré, relancé tout seul.",
    modules: [
      {
        title: "Centralisation multi-canal",
        description:
          "Formulaire site, chat Crisp, appels manqués, messages Instagram, emails à contact@. Tout est aspiré et regroupé dans une vue unique. Plus rien ne se perd.",
      },
      {
        title: "Scoring automatique chaud/tiède/froid",
        description:
          "Le système évalue chaque lead selon des critères (canal d'origine, urgence déclarée, type de demande, comportement sur le site). Vous traitez les chauds en priorité, les tièdes sont nourris, les froids restent en réserve.",
      },
      {
        title: "Relances email et SMS automatisées",
        description:
          "Pas de réponse d'un lead chaud en 1h ? Notification SMS sur votre téléphone. Pas de retour de votre part en 24h ? Relance automatique côté prospect. Vous ne pouvez plus oublier un lead.",
      },
      {
        title: "Vue pipeline et statistiques",
        description:
          "Vous voyez d'un coup d'oeil combien de leads sont en cours, à quel stade, combien ont signé ce mois-ci. Idéal pour piloter et anticiper les creux.",
      },
    ],
    stats: [
      { value: "0", label: "lead perdu, tout est tracé" },
      { value: "x3", label: "taux de conversion lead vers client" },
      { value: "1 min", label: "réponse moyenne sur les leads chauds" },
      { value: "90 %", label: "des leads relancés automatiquement" },
    ],
    process: [
      {
        title: "Diagnostic acquisition (1h)",
        description:
          "On identifie vos sources de leads actuelles (Google, Facebook, bouche-à-oreille, réseau local). On définit les règles de scoring selon votre métier.",
      },
      {
        title: "Setup CRM et connecteurs (1 semaine)",
        description:
          "Installation du CRM léger, branchement de toutes vos sources (formulaire, chat, email, Instagram via Meta API). Création des templates de relance.",
      },
      {
        title: "Formation 1h",
        description:
          "Comment ajouter un lead à la main, modifier une fiche, suivre une opportunité, exporter les données. Vue mobile pour piloter depuis votre téléphone.",
      },
      {
        title: "Optimisation J+30",
        description:
          "Après 1 mois, on analyse ce qui marche (canaux les plus rentables, scoring à affiner, relances à durcir ou adoucir) et on ajuste.",
      },
    ],
    toolStack: ["Notion CRM", "n8n (automation)", "Crisp Chat", "Brevo", "Twilio SMS", "Make"],
    pricing: [
      {
        name: "Pack Lead",
        price: "1 400 €",
        priceNote: "Installation unique",
        includes: [
          "CRM Notion configuré sur mesure",
          "Centralisation 3 sources (formulaire, chat, email)",
          "Scoring chaud/tiède/froid automatique",
          "1 séquence de relance email standard",
          "Formation 1h",
          "Maintenance et hébergement 1 an inclus",
        ],
      },
      {
        name: "Pack Lead +",
        price: "2 200 €",
        priceNote: "Installation + 1 an de support",
        highlighted: true,
        includes: [
          "Tout le pack Lead",
          "Centralisation 6 sources (ajout Instagram, appels manqués, Google My Business, Facebook)",
          "Relances email ET SMS (300 SMS/an inclus)",
          "3 séquences de relance différentes selon type de lead",
          "Notifications smartphone sur leads chauds",
          "Dashboard pipeline mensuel envoyé par email",
        ],
      },
    ],
    faq: [
      {
        question: "C'est un vrai CRM ou un outil maison ?",
        answer:
          "Pour vous, c'est un CRM. Techniquement on s'appuie sur Notion + n8n, qui sont des outils stables et reconnus. Avantage : c'est 5 à 10 fois moins cher qu'un Salesforce ou HubSpot et largement suffisant pour une PME jusqu'à 20 leads par jour.",
      },
      {
        question: "Mes données sont chez qui ?",
        answer:
          "Elles sont stockées chez Notion (hébergement US, conforme RGPD avec Data Processing Agreement signé) et chez nous pour les automatisations. Vous pouvez exporter toute votre base à tout moment au format CSV. Aucune lock-in technique.",
      },
      {
        question: "Et si je veux passer plus tard sur HubSpot ?",
        answer:
          "Migration possible à tout moment, on exporte vos données et on les ré-importe dans HubSpot. Pas de coût caché.",
      },
      {
        question: "Ma comptable a un logiciel séparé, ça communique ?",
        answer:
          "Si vous voulez, on connecte la sortie \"client signé\" du CRM vers votre logiciel de facturation (Pennylane, Sage, Sellsy, etc.) via Make ou Zapier. Compter 200-400 € en option sur le setup.",
      },
      {
        question: "Et les RGPD, les consentements, je gère ?",
        answer:
          "On intègre dès le départ les mentions de consentement sur les formulaires, la gestion des opt-out, et la suppression sur demande. Compatible CNIL et RGPD natif.",
      },
    ],
  },
];

export function getAutomationCase(slug: string): AutomationCase | undefined {
  return automationCases.find((c) => c.slug === slug);
}
