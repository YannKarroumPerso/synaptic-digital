import { faq } from "@/lib/data";

export function StructuredData() {
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
      addressCountry: "FR",
    },
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Synaptic Digital",
    url: "https://synaptic-digital.fr",
    inLanguage: "fr-FR",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </>
  );
}
