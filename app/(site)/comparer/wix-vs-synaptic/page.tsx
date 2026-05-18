import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ComparisonTable, type ComparisonRow } from "@/components/comparer/ComparisonTable";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Wix ou Synaptic Digital, quelle solution pour votre PME en 2026 ?",
  description: "Wix vs agence locale en Charente : tarifs réels sur 5 ans, performance SEO, propriété du site, fonctionnalités. Comparatif honnête sans bullshit.",
  keywords: [
    "wix ou synaptic",
    "alternative wix",
    "wix vs agence",
    "wix vs sur mesure",
    "wix charente",
  ],
  alternates: { canonical: "https://synaptic-digital.fr/comparer/wix-vs-synaptic" },
};

const rows: ComparisonRow[] = [
  {
    feature: "Coût première année",
    competitor: "Environ 200 à 500 €",
    synaptic: "1 500 à 5 000 €",
    detail: "Création + hébergement la 1ère année",
  },
  {
    feature: "Coût sur 5 ans (TTC)",
    competitor: "1 200 à 2 500 €",
    synaptic: "2 250 à 6 500 €",
    detail: "Avec maintenance annuelle 150-400 € chez nous, abonnement Wix 20-40 €/mois chez eux",
  },
  {
    feature: "Vous êtes propriétaire du site",
    competitor: false,
    synaptic: true,
    detail: "Chez Wix, vous louez. Chez nous, vous possédez le code et l'hébergement",
  },
  {
    feature: "Performance Lighthouse",
    competitor: "60 à 80",
    synaptic: "95+",
    detail: "Wix charge des kilooctets de JS inutile, on optimise au gramme près",
  },
  {
    feature: "SEO sur mesure",
    competitor: "Limité au template",
    synaptic: "Sur mesure complet",
    detail: "Schema.org, GEO, IndexNow, URL propres, meta optimisées par page",
  },
  {
    feature: "Design unique",
    competitor: false,
    synaptic: true,
    detail: "Sur Wix, vous adaptez un template. Chez nous, on conçoit pour vous",
  },
  {
    feature: "Vous pouvez migrer ailleurs",
    competitor: false,
    synaptic: true,
    detail: "Le code Wix est propriétaire. Notre code en Next.js est portable partout",
  },
  {
    feature: "Référencement local",
    competitor: "Faible",
    synaptic: "Optimisé Charente",
    detail: "On crée des pages villes dédiées, on configure votre Google Business Profile",
  },
  {
    feature: "Interlocuteur dédié",
    competitor: false,
    synaptic: true,
    detail: "Vous parlez à la personne qui fait le travail, pas à un support international",
  },
  {
    feature: "Délai de livraison",
    competitor: "DIY, variable",
    synaptic: "3 à 4 semaines",
    detail: "Si vous le faites vous-même sur Wix, comptez 30 à 80h de votre temps",
  },
  {
    feature: "Capacité d'évolution",
    competitor: "Bloqué par la plateforme",
    synaptic: "Évolutif sans plafond",
    detail: "Sur Wix, certaines fonctions premium sont impossibles. On code ce qu'il vous faut",
  },
];

export default function WixVsSynapticPage() {
  return (
    <>
      <Section className="pt-16 lg:pt-24 pb-10">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 text-[12px] font-semibold text-accent uppercase tracking-wider mb-5">
              Comparatif honnête
            </div>
            <h1 className="text-primary font-sora mb-6">
              Wix ou Synaptic Digital, quel choix pour votre PME en Charente ?
            </h1>
            <p className="text-[19px] text-text-muted leading-relaxed">
              Wix est une solution sérieuse pour qui veut bricoler son site soi-même à petit prix.
              Une agence locale comme Synaptic Digital est différente : on conçoit, on livre et on optimise pour vous,
              avec un site dont vous êtes propriétaire. Voici le comparatif sans bullshit.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-8 lg:py-12">
        <Container>
          <ComparisonTable competitorName="Wix (DIY)" rows={rows} />
        </Container>
      </Section>

      <Section className="py-12 lg:py-16">
        <Container>
          <div className="max-w-3xl space-y-6 text-[16px] text-text-dark leading-relaxed">
            <h2 className="text-primary font-sora">Quand Wix est le bon choix</h2>
            <p>
              Wix est une bonne plateforme si vous êtes un freelance débutant, un solopreneur avec un budget
              très serré, ou si vous voulez tester un projet avant d'investir. Le DIY est valable quand le site
              est secondaire à votre activité.
            </p>
            <p>
              En revanche, dès que le site devient critique pour vos ventes, vos rendez-vous ou votre image,
              les limites de Wix se font sentir. SEO bridé, performance moyenne, dépendance à la plateforme,
              impossibilité de migrer. C'est là qu'une agence locale prend son sens.
            </p>

            <h2 className="text-primary font-sora pt-4">Quand Synaptic Digital est le bon choix</h2>
            <p>
              Vous êtes une PME en Charente, Charente-Maritime ou Dordogne, vous avez un vrai business à faire
              tourner, et vous avez besoin d'un site qui ramène des clients sans que vous ayez à le bricoler.
              C'est notre métier.
            </p>
            <p>
              Pour 1 500 à 5 000 € de création, vous avez un site sur mesure, rapide, bien référencé localement,
              dont vous êtes propriétaire à 100 %. Pas d'abonnement piégeux, pas de surprise sur la migration,
              et un interlocuteur unique basé à Angoulême.
            </p>

            <h2 className="text-primary font-sora pt-4">Ce que disent nos clients qui ont quitté Wix</h2>
            <p>
              On a accompagné plusieurs PME charentaises dans la migration depuis Wix. La phrase qui revient
              le plus souvent : "J'aurais dû le faire 2 ans plus tôt." La performance SEO change tout, et la
              tranquillité de ne plus avoir à mettre à jour soi-même est un soulagement.
            </p>
            <p>
              Pour aller plus loin sur le choix initial site vitrine vs e-commerce, on a écrit
              un <Link href="/blog/site-vitrine-ou-ecommerce-choisir-pme" className="text-accent hover:underline">guide complet ici</Link>.
              Pour comprendre le détail des prix d'agence, voir
              notre <Link href="/blog/combien-coute-site-web-pme" className="text-accent hover:underline">article sur les tarifs réels</Link>.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-14 lg:py-20 bg-primary text-white">
        <Container className="text-center">
          <h2 className="font-sora mb-5">Prêt à passer à un vrai site sur mesure ?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Devis détaillé sous 48h, sans engagement, transparent. On vous dit honnêtement si Synaptic est
            le bon choix pour votre projet, et sinon on vous oriente.
          </p>
          <Button href="/devis" variant="primary" arrow>
            Recevoir mon devis sous 48h
          </Button>
        </Container>
      </Section>
    </>
  );
}
