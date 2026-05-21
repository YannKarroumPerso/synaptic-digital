import { faq, services, team, realisations } from "@/lib/data";
import { getActiveVilles } from "@/lib/villes-data";
import type { Post } from "@/lib/blog";

const BASE_URL = "https://synaptic-digital.fr";
const ORG_ID = `${BASE_URL}/#localbusiness`;

// ============================================================
// 1. LocalBusiness étendu (signal SEO local fort)
// ============================================================
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: "Synaptic Digital",
    alternateName: "Synaptic Digital EURL",
    image: `${BASE_URL}/logo.svg`,
    logo: `${BASE_URL}/logo.svg`,
    url: BASE_URL,
    email: "contact@synaptic-digital.fr",
    priceRange: "€€",
    foundingDate: "2024",
    founder: { "@type": "Person", name: "Yann Karroum" },
    description:
      "Agence web en Charente et Charente-Maritime. Création de sites vitrine, e-commerce, refonte et SEO pour petites PME. Sites livrés en 3 semaines, à partir de 1 500 €.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "33 rue des Petits Champs",
      postalCode: "16400",
      addressLocality: "Vœuil-et-Giget",
      addressRegion: "Charente",
      addressCountry: "FR",
    },
    geo: { "@type": "GeoCoordinates", latitude: 45.6, longitude: 0.15 },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Charente" },
      { "@type": "AdministrativeArea", name: "Charente-Maritime" },
      ...getActiveVilles().map((v) => ({ "@type": "City", name: v.nom })),
    ],
    knowsAbout: [
      "Création de site web",
      "Site vitrine",
      "E-commerce",
      "Refonte de site web",
      "SEO local",
      "Communication social média",
      "Performance web",
      "Next.js",
      "WordPress",
      "Shopify",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services Synaptic Digital",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: s.price.replace(/[^\d]/g, ""),
          priceCurrency: "EUR",
          valueAddedTaxIncluded: false,
        },
      })),
    },
    sameAs: [],
  };
}

// ============================================================
// 2. Website (avec searchAction si on a une recherche, sinon basique)
// ============================================================
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: "Synaptic Digital",
    url: BASE_URL,
    inLanguage: "fr-FR",
    publisher: { "@id": ORG_ID },
    description:
      "Agence digitale pour petites PME. Sites vitrine, e-commerce, refonte, SEO. Livré en 3 semaines.",
  };
}

// ============================================================
// 3. BreadcrumbList — à appeler avec le chemin de la page
// ============================================================
export function breadcrumbSchema(items: { name: string; url?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.url ? { item: item.url } : {}),
    })),
  };
}

// ============================================================
// 4. FAQ Schema (pour la home et les pages services)
// ============================================================
export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

// ============================================================
// 5. Service Schema (pour chaque page service)
// ============================================================
export function serviceSchema(serviceSlug: string) {
  const service = services.find((s) => s.slug === serviceSlug);
  if (!service) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: { "@id": ORG_ID },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Charente" },
      { "@type": "AdministrativeArea", name: "Charente-Maritime" },
    ],
    offers: {
      "@type": "Offer",
      price: service.price.replace(/[^\d]/g, ""),
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: service.price.replace(/[^\d]/g, ""),
        priceCurrency: "EUR",
        valueAddedTaxIncluded: false,
        description: `À partir de ${service.price}`,
      },
      availability: "https://schema.org/InStock",
      url: `${BASE_URL}/services#${service.slug}`,
    },
    serviceType: service.title,
    termsOfService: `${BASE_URL}/mentions-legales`,
  };
}

// ============================================================
// 6. Article Schema (pour chaque article de blog)
// ============================================================
export function articleSchema(post: Post, url: string) {
  const articleType =
    post.type === "etude" ? "Report" :
    post.type === "decryptage" ? "NewsArticle" : "Article";

  return {
    "@context": "https://schema.org",
    "@type": articleType,
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "Synaptic Digital", url: BASE_URL },
    publisher: { "@id": ORG_ID },
    image: post.cover || `${BASE_URL}/logo.svg`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: (post.keywords || []).join(", "),
    inLanguage: "fr-FR",
    isAccessibleForFree: true,
    articleSection: post.theme,
  };
}

// ============================================================
// 7. Person schemas pour l'équipe
// ============================================================
export function teamPersonsSchema() {
  return team.map((member) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    description: member.bio,
    worksFor: { "@id": ORG_ID },
    image: `https://api.dicebear.com/7.x/lorelei/svg?seed=${member.seed}${member.hairVariant ? `&hair=${member.hairVariant}` : ""}`,
  }));
}

// ============================================================
// 8. HowTo Schema (pour la méthode 4 étapes)
// ============================================================
export function methodHowToSchema(methodSteps: { number: string; title: string; description: string; duration: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment Synaptic Digital livre un site web en 3 semaines",
    description: "La méthode en 4 étapes pour livrer un site web professionnel en moins d'un mois.",
    totalTime: "P21D",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "EUR",
      value: "1500",
    },
    step: methodSteps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.title,
      text: step.description,
      url: `${BASE_URL}/agence#methode-${step.number}`,
    })),
  };
}

// ============================================================
// 9. Helper : sérialiser proprement en script tag
// ============================================================
export function jsonLdToScript(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
