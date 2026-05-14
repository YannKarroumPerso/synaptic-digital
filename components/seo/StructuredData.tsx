import {
  localBusinessSchema,
  websiteSchema,
  faqSchema,
  teamPersonsSchema,
  methodHowToSchema,
  breadcrumbSchema,
  jsonLdToScript,
} from "@/lib/schema";
import { faq, methodSteps } from "@/lib/data";

/**
 * Schemas globaux à injecter dans le layout root.
 * Disponibles sur toutes les pages.
 */
export function StructuredData() {
  const schemas = [
    localBusinessSchema(),
    websiteSchema(),
    faqSchema(faq),
    methodHowToSchema(methodSteps),
    ...teamPersonsSchema(),
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdToScript(schema) }}
        />
      ))}
    </>
  );
}

/**
 * Composant breadcrumb réutilisable pour chaque page secondaire.
 * Usage : <PageSchemas breadcrumb={[{name: "Accueil", url: "/"}, {name: "Services"}]} />
 */
export function PageSchemas({
  breadcrumb,
  additional = [],
}: {
  breadcrumb: { name: string; url?: string }[];
  additional?: object[];
}) {
  const schemas = [breadcrumbSchema(breadcrumb), ...additional];
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdToScript(schema) }}
        />
      ))}
    </>
  );
}
