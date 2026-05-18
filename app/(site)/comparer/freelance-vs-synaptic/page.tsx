import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ComparisonTable, type ComparisonRow } from "@/components/comparer/ComparisonTable";

export const metadata: Metadata = {
  title: "Freelance ou agence pour mon site web, comment choisir en 2026",
  description: "Freelance vs agence Synaptic Digital pour PME charentaise : prix, fiabilité, suivi post-livraison, garanties. Comparatif sans détour.",
  keywords: [
    "freelance ou agence web",
    "agence ou freelance site web",
    "freelance vs agence",
    "freelance site internet charente",
    "agence web pme",
  ],
  alternates: { canonical: "https://synaptic-digital.fr/comparer/freelance-vs-synaptic" },
};

const rows: ComparisonRow[] = [
  {
    feature: "Prix de création",
    competitor: "600 à 3 000 €",
    synaptic: "1 500 à 5 000 €",
    detail: "Freelance souvent moins cher à l'instant T, mais coût caché derrière",
  },
  {
    feature: "Risque d'abandon en cours",
    competitor: "Élevé",
    synaptic: "Quasi nul",
    detail: "1 freelance sur 5 disparaît avant la fin (changement de cap pro, surcharge, maladie)",
  },
  {
    feature: "Délai garanti contractuellement",
    competitor: "Variable",
    synaptic: "3 à 4 semaines, garanti",
  },
  {
    feature: "Maintenance après livraison",
    competitor: "Souvent absente",
    synaptic: "Contrat optionnel inclus",
    detail: "Un freelance ne peut pas garantir d'être dispo dans 2 ans",
  },
  {
    feature: "SEO inclus dans la livraison",
    competitor: "Variable selon le freelance",
    synaptic: "Inclus dès le départ",
  },
  {
    feature: "Possibilité de monter en charge",
    competitor: "Limitée à 1 personne",
    synaptic: "Équipe, on peut renforcer",
  },
  {
    feature: "Continuité en cas d'indisponibilité",
    competitor: "Rupture totale",
    synaptic: "Backup interne",
  },
  {
    feature: "Facturation",
    competitor: "Variable, parfois opaque",
    synaptic: "Devis détaillé, transparent",
  },
  {
    feature: "Suivi post-livraison à 3 et 6 mois",
    competitor: "Rare",
    synaptic: "Inclus dans le contrat",
  },
  {
    feature: "Vous pouvez rappeler 2 ans après",
    competitor: "Souvent impossible",
    synaptic: "Oui",
    detail: "Synaptic est une structure pérenne, pas un projet individuel",
  },
];

export default function FreelanceVsSynapticPage() {
  return (
    <>
      <Section className="pt-16 lg:pt-24 pb-10">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 text-[12px] font-semibold text-accent uppercase tracking-wider mb-5">
              Comparatif honnête
            </div>
            <h1 className="text-primary font-sora mb-6">
              Freelance ou agence pour mon site web, comment choisir ?
            </h1>
            <p className="text-[19px] text-text-muted leading-relaxed">
              Un bon freelance peut faire des merveilles. Mais le risque opérationnel est élevé pour une PME qui dépend de son site
              pour ses ventes. Voici ce qui change quand vous passez par une structure comme Synaptic Digital, basée à Angoulême.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-8 lg:py-12">
        <Container>
          <ComparisonTable competitorName="Freelance" rows={rows} />
        </Container>
      </Section>

      <Section className="py-12 lg:py-16">
        <Container>
          <div className="max-w-3xl space-y-6 text-[16px] text-text-dark leading-relaxed">
            <h2 className="text-primary font-sora">Le freelance, quand c'est le bon choix</h2>
            <p>
              Un freelance compétent est idéal pour un projet ponctuel à budget serré, une mission spécialisée (par exemple
              un audit SEO ou une refonte graphique d'une page), ou quand vous avez déjà une équipe interne capable de prendre
              le relais à la livraison.
            </p>
            <p>
              Dans ces cas, vous gagnez en flexibilité et en prix. Et vous gardez l'agilité d'avoir un seul interlocuteur direct,
              ce qui est appréciable.
            </p>

            <h2 className="text-primary font-sora pt-4">Quand l'agence devient indispensable</h2>
            <p>
              Dès que votre site est critique pour votre chiffre d'affaires (lead gen, e-commerce, prise de RDV, communication
              de marque), le risque de dépendre d'une seule personne devient trop important. Un freelance qui tombe malade,
              qui change de cap pro ou qui se trouve débordé peut vous laisser sans support pendant des mois.
            </p>
            <p>
              On voit régulièrement en Charente des PME qui ont dépensé 1 500 € chez un freelance, qui se retrouvent 18 mois après
              avec un site abandonné, le freelance injoignable, et qui doivent tout refaire. Le coût total finit par doubler le
              prix d'agence initial.
            </p>

            <h2 className="text-primary font-sora pt-4">Notre garantie</h2>
            <p>
              Chez Synaptic Digital, on s'engage contractuellement sur les délais (3 à 4 semaines), sur la maintenance
              post-livraison, et sur la continuité du service. Si l'interlocuteur principal n'est pas dispo, un binôme prend le relais.
              Le code et l'hébergement sont à votre nom : si vous voulez partir un jour, vous partez avec tout.
            </p>
            <p>
              Pour comprendre nos engagements en détail, voir
              la <Link href="/agence" className="text-accent hover:underline">page agence</Link>.
              Pour les délais détaillés, voir
              notre <Link href="/blog/delai-creation-site-web" className="text-accent hover:underline">guide délais création</Link>.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-14 lg:py-20 bg-primary text-white">
        <Container className="text-center">
          <h2 className="font-sora mb-5">Envie de la stabilité d'une agence locale ?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Devis transparent sous 48h, basé à Angoulême, équipe pérenne. On parle 20 minutes ensemble pour voir
            si on est le bon match pour votre projet.
          </p>
          <Button href="/devis" variant="primary" arrow>
            Recevoir mon devis sous 48h
          </Button>
        </Container>
      </Section>
    </>
  );
}
