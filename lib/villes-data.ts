export type ProfilProspect = {
 type: string; // ex "Cabinet B2B"
 exemple: string; // 1 ligne concrète
 besoin: string; // ce qu'on lui apporte
};

export type VilleData = {
 slug: string;
 nom: string;
 nomComplet: string;
 departement: string;
 bassinTaille: string; // ex "110 000 habitants sur l'agglo"

 // Angle business, PAS du Wikipedia
 intro: string; // 1-2 phrases qui posent la situation business locale
 observationMarche: string; // 2-3 phrases d'observation sur le marché web local
 pourquoiCeMarche: string; // pourquoi ça vaut le coup de bosser ici (perspective Yann)

 // Profils prospects concrets (pas "secteurs économiques")
 profils: ProfilProspect[];

 // Distance / zones desservies depuis le siège
 distance: string;

 // FAQ optionnelle, ciblage SEO local + rich results Google
 faq?: { question: string; answer: string }[];

 active: boolean;
};

export const villes: VilleData[] = [
 {
 slug: "angouleme",
 nom: "Angoulême",
 nomComplet: "Angoulême (Charente)",
 departement: "Charente",
 bassinTaille: "agglomération de 110 000 habitants",
 intro:
 "Préfecture de la Charente, Angoulême concentre une grande partie de l'activité économique du département. Beaucoup d'entreprises y cherchent un site web qui les rende visibles localement, et la plupart sont mal servies aujourd'hui.",
 observationMarche:
 "Sur les recherches type \"[métier] Angoulême\" sur Google, les 3 premiers résultats locaux sont souvent des annuaires (PagesJaunes, Yelp), pas des sites d'entreprises. Quand on creuse, on s'aperçoit que la plupart des agences locales n'optimisent pas vraiment le SEO local pour leurs clients. Résultat : c'est un marché où une PME bien équipée prend rapidement de l'avance.",
 pourquoiCeMarche:
 "Pour une entreprise basée à Angoulême ou dans l'agglomération, un site web bien fait et bien référencé en local, c'est mathématique : tous les jours, des prospects cherchent votre métier sur Google avec votre ville comme requête. Si vous êtes là, ils vous appellent. Sinon, ils appellent quelqu'un d'autre.",
 profils: [
 {
 type: "Cabinet conseil ou profession libérale",
 exemple: "Avocat, expert-comptable, cabinet RH, consultant indépendant",
 besoin:
 "Un site qui inspire la confiance dès la première seconde et qui se positionne sur les requêtes locales (\"avocat affaires Angoulême\", \"expert-comptable Charente\").",
 },
 {
 type: "Commerçant ou artisan structuré",
 exemple: "Boutique du centre-ville, paysagiste, restaurateur indépendant, agence immobilière",
 besoin:
 "Un site qui sert de vitrine, permet le contact facile (formulaire, prise de RDV) et apparaît sur Google Maps + pack 3 local.",
 },
 {
 type: "PME tertiaire 5-30 salariés",
 exemple: "Société de services, bureau d'études, agence de communication, formation",
 besoin:
 "Un site qui structure le message, génère des leads B2B qualifiés et affiche le sérieux nécessaire face à des concurrents bordelais ou parisiens.",
 },
 ],
 distance: "À 15 minutes de notre siège, on intervient sans frais de déplacement.",
 active: true,
 },
 {
 slug: "cognac",
 nom: "Cognac",
 nomComplet: "Cognac (Charente)",
 departement: "Charente",
 bassinTaille: "agglomération de 35 000 habitants",
 intro:
 "À 40 minutes d'Angoulême, Cognac concentre une économie locale dense, viticole, touristique, artisanale et commerciale. Beaucoup d'entreprises ici ont besoin d'un site web qui parle aussi bien à une clientèle locale qu'à des prospects internationaux (en particulier autour de la filière du Cognac).",
 observationMarche:
 "Le marché web local cognaçais est encore moins équipé qu'à Angoulême : beaucoup de sites datent de 5 à 10 ans, peu sont multilingues malgré une clientèle souvent internationale. Quand un acheteur étranger cherche \"family-owned cognac maker\", les premiers résultats sont rarement les producteurs locaux, ils sont là, mais leurs sites ne le disent pas.",
 pourquoiCeMarche:
 "Une PME à Cognac peut avoir une clientèle française locale ET une visibilité internationale via le web, si elle s'en donne les moyens. Bilingue, schema bien fait, photos qui montrent l'authenticité, c'est techniquement à portée pour le budget d'une petite entreprise.",
 profils: [
 {
 type: "Viticulteur indépendant ou petite maison",
 exemple: "Producteur familial qui vend en direct et veut toucher des clients particuliers",
 besoin:
 "Un site bilingue (FR/EN) avec boutique en ligne sécurisée, mise en valeur du domaine, SEO local et international (\"cognac family producer\", \"acheter cognac directement\").",
 },
 {
 type: "Hôtel de charme, gîte, restaurant",
 exemple: "Activité touristique qui capte une clientèle de passage attirée par le Cognac",
 besoin:
 "Un site qui convertit dès le premier coup d'œil : réservation directe, photos qualité, traduction anglaise propre.",
 },
 {
 type: "Artisan ou commerce de centre-ville",
 exemple: "Tonnellerie, atelier d'art, boutique indépendante",
 besoin:
 "Une présence digitale qui sort des PagesJaunes : Google Business optimisé, site vitrine clair, possibilité click & collect ou prise de RDV.",
 },
 ],
 distance: "À 45 minutes de notre siège. On se déplace sur Cognac sans frais pour les premiers échanges.",
 faq: [
 {
 question: "Combien coûte la création d'un site internet à Cognac ?",
 answer:
 "La création d'un site internet à Cognac démarre à 1 500 € pour un site vitrine professionnel, livré en 3 semaines. Le budget dépend du nombre de pages, du besoin de boutique en ligne et d'une version bilingue FR/EN, fréquente pour les maisons de Cognac qui visent une clientèle internationale. On vous remet un devis détaillé sous 48h, sans surprise.",
 },
 {
 question: "Pourquoi choisir une agence web à Cognac plutôt qu'un freelance à distance ?",
 answer:
 "Une agence web qui connaît le marché cognaçais comprend vos enjeux : clientèle locale, tourisme viticole, acheteurs étrangers. On se déplace gratuitement sur Cognac pour cadrer le projet, et on intègre dès le départ le référencement local pour que vous sortiez sur les recherches \"création site internet Cognac\" et \"agence web Cognac\".",
 },
 {
 question: "Faites-vous des sites bilingues FR/EN pour la filière du Cognac ?",
 answer:
 "Oui. Beaucoup de producteurs et de maisons de Cognac ont une clientèle internationale mais un site uniquement en français. On construit des sites bilingues propres, avec un balisage technique qui permet à Google de servir la bonne langue selon le pays du visiteur.",
 },
 {
 question: "En combien de temps livrez-vous un site web à Cognac ?",
 answer:
 "Trois semaines en moyenne, du brief à la mise en ligne. Notre méthode est rodée : compréhension du besoin, maquettes, développement avec performance et SEO intégrés, puis lancement et suivi pendant 30 jours.",
 },
 {
 question: "Assurez-vous le référencement local sur Google à Cognac ?",
 answer:
 "Oui, le SEO local est intégré à chaque site qu'on livre à Cognac : structure optimisée, balises ciblées sur vos services et votre ville, configuration de votre fiche Google Business Profile. C'est ce qui vous fait remonter face aux concurrents sur les recherches locales.",
 },
 ],
 active: true,
 },
 {
 slug: "saintes",
 nom: "Saintes",
 nomComplet: "Saintes (Charente-Maritime)",
 departement: "Charente-Maritime",
 bassinTaille: "agglomération de 60 000 habitants",
 intro:
 "Sous-préfecture de la Charente-Maritime, Saintes est un carrefour entre l'arrière-pays charentais et le littoral (Royan, La Rochelle). Pour les entreprises locales, ça signifie une clientèle hétérogène : habitants de l'agglomération, touristes en route vers la côte, professionnels de passage.",
 observationMarche:
 "Le marché web saintongeais est typique : beaucoup d'entreprises performantes mais sous-équipées digitalement. Les TPE locales font confiance au bouche-à-oreille, ce qui marche bien jusqu'à ce qu'un concurrent mieux équipé sur Google leur prenne 30% de leurs leads en quelques mois.",
 pourquoiCeMarche:
 "À Saintes, le SEO local est un levier sous-exploité. Sur la plupart des métiers (santé, services, commerce, restauration), il suffit d'un site web propre + une fiche Google Business bien tenue pour passer dans le top 3 des recherches géolocalisées. C'est un avantage compétitif rapide à prendre.",
 profils: [
 {
 type: "Professionnel de santé en libéral",
 exemple: "Cabinet dentaire, kinésithérapeute, ostéopathe, psychologue",
 besoin:
 "Un site qui rassure, permet la prise de RDV en ligne (Doctolib ou direct) et apparaît dès qu'un patient cherche \"[spécialité] Saintes\".",
 },
 {
 type: "Commerce de centre-ville ou de proximité",
 exemple: "Boutique indépendante, fleuriste, opticien, restaurant familial",
 besoin:
 "Une visibilité digitale qui complète le passage en boutique : Google Business à jour, site avec carte/horaires/contact facile, click & collect si pertinent.",
 },
 {
 type: "Activité touristique ou services aux voyageurs",
 exemple: "Gîte, chambre d'hôte, location de vélos, guide indépendant",
 besoin:
 "Un site qui convertit les recherches du type \"[activité] Saintes\" ou \"[activité] Charente-Maritime\" en réservations directes (sans passer par Booking ou Airbnb).",
 },
 ],
 distance: "À 1h15 de notre siège. On intervient sur Saintes en visio + 1 RDV physique en début de projet.",
 active: true,
 },
 {
 slug: "la-rochelle",
 nom: "La Rochelle",
 nomComplet: "La Rochelle (Charente-Maritime)",
 departement: "Charente-Maritime",
 bassinTaille: "agglomération de 170 000 habitants",
 intro: "",
 observationMarche: "",
 pourquoiCeMarche: "",
 profils: [],
 distance: "",
 active: false,
 },
 {
 slug: "rochefort",
 nom: "Rochefort",
 nomComplet: "Rochefort (Charente-Maritime)",
 departement: "Charente-Maritime",
 bassinTaille: "agglomération de 65 000 habitants",
 intro: "",
 observationMarche: "",
 pourquoiCeMarche: "",
 profils: [],
 distance: "",
 active: false,
 },
];

export function getVilleBySlug(slug: string): VilleData | undefined {
 return villes.find((v) => v.slug === slug);
}

export function getActiveVilles(): VilleData[] {
 return villes.filter((v) => v.active);
}
