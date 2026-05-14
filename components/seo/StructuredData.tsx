import { faq } from "@/lib/data";

export function StructuredData() {
  // Organization (entité légale)
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Synaptic Digital",
    legalName: "Synaptic Digital EURL",
    url: "https://synaptic-digital.fr",
    logo: "https://synaptic-digital.fr/logo.svg",
    email: "contact@synaptic-digital.fr",
    description:
      "Agence digitale pour petites PME : sites vitrine, e-commerce et refontes livrés en 3 semaines.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "33 rue des Petits Champs",
      postalCode: "16400",
      addressLocality: "Vœuil-et-Giget",
      addressRegion: "Charente",
      addressCountry: "FR",
    },
  };

  // LocalBusiness (signal SEO local fort)
  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://synaptic-digital.fr/#localbusiness",
    name: "Synaptic Digital",
    image: "https://synaptic-digital.fr/logo.svg",
    url: "https://synaptic-digital.fr",
    email: "contact@synaptic-digital.fr",
    priceRange: "€€",
    description:
      "Agence web en Charente et Charente-Maritime. Création de sites vitrine, e-commerce et refonte pour petites PME. Livré en 3 semaines.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "33 rue des Petits Champs",
      postalCode: "16400",
      addressLocality: "Vœuil-et-Giget",
      addressRegion: "Charente",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.6,
      longitude: 0.15,
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Charente" },
      { "@type": "AdministrativeArea", name: "Charente-Maritime" },
      { "@type": "City", name: "Angoulême" },
      { "@type": "City", name: "Cognac" },
      { "@type": "City", name: "Saintes" },
      { "@type": "City", name: "La Rochelle" },
      { "@type": "City", name: "Rochefort" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services Synaptic Digital",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Création de site vitrine" },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "1500",
            priceCurrency: "EUR",
            valueAddedTaxIncluded: false,
          },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Création de site e-commerce" },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "4900",
            priceCurrency: "EUR",
            valueAddedTaxIncluded: false,
          },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Refonte de site web" },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "2900",
            priceCurrency: "EUR",
            valueAddedTaxIncluded: false,
          },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "SEO & Performance" },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "1500",
            priceCurrency: "EUR",
            valueAddedTaxIncluded: false,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Communication social média",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "900",
            priceCurrency: "EUR",
            valueAddedTaxIncluded: false,
          },
        },
      ],
    },
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Synaptic Digital",
    url: "https://synaptic-digital.fr",
    inLanguage: "fr-FR",
    publisher: { "@id": "https://synaptic-digital.fr/#localbusiness" },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </>
  );
}
