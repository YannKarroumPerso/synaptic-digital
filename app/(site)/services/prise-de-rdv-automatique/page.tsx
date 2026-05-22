import type { Metadata } from "next";
import { getAutomationCase, automationCases } from "@/lib/automation-data";
import { CaseStudyLayout } from "@/components/automation/CaseStudyLayout";
import { notFound } from "next/navigation";

const SLUG = "prise-de-rdv-automatique";

const data = getAutomationCase(SLUG);

export const metadata: Metadata = data
  ? {
      title: data.metaTitle,
      description: data.metaDescription,
      keywords: data.keywords,
      alternates: {
        canonical: `https://synaptic-digital.fr/services/${SLUG}`,
      },
      openGraph: {
        title: data.metaTitle,
        description: data.metaDescription,
        url: `https://synaptic-digital.fr/services/${SLUG}`,
        type: "website",
      },
    }
  : {};

export default function Page() {
  const caseData = getAutomationCase(SLUG);
  if (!caseData) return notFound();

  const index = automationCases.findIndex((c) => c.slug === SLUG);
  const otherCases = automationCases
    .filter((c) => c.slug !== SLUG)
    .map((c) => ({ slug: c.slug, shortTitle: c.shortTitle, eyebrow: c.eyebrow }));

  return <CaseStudyLayout data={caseData} caseIndex={index} otherCases={otherCases} />;
}
