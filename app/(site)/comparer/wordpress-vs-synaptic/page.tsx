import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ComparisonTable, type ComparisonRow } from "@/components/comparer/ComparisonTable";

export const metadata: Metadata = {
  title: "Wordpress ou Synaptic Digital, quelle solution en 2026 ?",
  description: "Wordpress vs sur mesure pour PME charentaise : sécurité, performance, maintenance, coût réel sur 5 ans. Comparatif honnête.",
  keywords: [
    "wordpress ou synaptic",
    "alternative wordpress",
    "wordpress vs sur mesure",
    "wordpress maintenance",
    "wordpress charente",
  ],
  alternates: { canonical: "https://synaptic-digital.fr/comparer/wordpress-vs-synaptic" },
};

const rows: ComparisonRow[] = [
  {
    feature: "Coût création",
    competitor: "1 500 à 8 000 €",
    synaptic: "1 500 à 5 000 €",
    detail: "WP demande souvent plus de configurations payantes",
  },
  {
    feature: "Coût maintenance annuelle",
    competitor: "500 à 1 500 €",
    synaptic: "150 à 400 €",
    detail: "WP : mises à jour mensuelles obligatoires, plugins payants, sécurité à patcher",
  },
  {
    feature: "Sécurité",
    competitor: "Cible #1 des attaques",
    synaptic: "Surface d'attaque réduite",
    detail: "WordPress représente 40 % du web et concentre 90 % des piratages CMS",
  },
  {
    feature: "Performance Lighthouse",
    competitor: "50 à 75",
    synaptic: "95+",
    detail: "WP charge des plugins lourds. Notre stack Next.js compile en statique",
  },
  {
    feature: "Plugins à payer",
    competitor: "Yoast SEO, WPRocket, Elementor Pro... 200-500 €/an",
    synaptic: "Inclus dans la création",
    detail: "Tout est codé en dur, rien à acheter, rien à mettre à jour",
  },
  {
    feature: "Délai de livraison",
    competitor: "4 à 12 semaines",
    synaptic: "3 à 4 semaines",
  },
  {
    feature: "SEO technique",
    competitor: "Plugin Yoast à configurer",
    synaptic: "Sur mesure dès le départ",
  },
  {
    feature: "Mise à jour facile par vous",
    competitor: "Oui, via l'admin WP",
    synaptic: "Oui, via CMS headless ou nous",
    detail: "Si vous tenez à éditer vous-même, on peut intégrer un CMS headless (Sanity, Strapi)",
  },
  {
    feature: "Risque de panne",
    competitor: "Plugin obsolète = site cassé",
    synaptic: "Site statique = pas de panne",
    detail: "WP : 1 plugin pas à jour peut bloquer tout le site. Notre site n'a pas de dépendance runtime",
  },
];

export default function WordpressVsSynapticPage() {
  return (
    <>
      <Section className="pt-16 lg:pt-24 pb-10">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 text-[12px] font-semibold text-accent uppercase tracking-wider mb-5">
              Comparatif honnête
            </div>
            <h1 className="text-primary font-sora mb-6">
              Wordpress ou Synaptic Digital, qu'est-ce qui vous convient ?
            </h1>
            <p className="text-[19px] text-text-muted leading-relaxed">
              WordPress fait tourner 40 % du web. C'est puissant, flexible, mais aussi lourd, vulnérable et coûteux à maintenir.
              Pour une PME en Charente, est-ce vraiment le meilleur choix en 2026 ? On compare.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-8 lg:py-12">
        <Container>
          <ComparisonTable competitorName="WordPress" rows={rows} />
        </Container>
      </Section>

      <Section className="py-12 lg:py-16">
        <Container>
          <div className="max-w-3xl space-y-6 text-[16px] text-text-dark leading-relaxed">
            <h2 className="text-primary font-sora">La vraie problématique de Wordpress en 2026</h2>
            <p>
              WordPress était une excellente solution en 2015. En 2026, la réalité a changé : les exigences Google
              en performance (Core Web Vitals) sont devenues strictes, et un site WP avec ses plugins habituels
              peine à atteindre les seuils. Plus grave, la maintenance devient un travail à temps partiel non rémunéré
              pour le propriétaire.
            </p>
            <p>
              On a vu plusieurs PME charentaises se faire pirater leur site WP parce qu'un plugin n'avait pas été mis à jour
              pendant 2 mois. La récupération coûte entre 500 et 3 000 €, sans parler du SEO qui dégringole pendant la panne.
            </p>

            <h2 className="text-primary font-sora pt-4">Quand WordPress reste le bon choix</h2>
            <p>
              WP est encore pertinent si vous gérez un blog très volumineux (plus de 200 articles avec modifs quotidiennes),
              si vous avez une équipe interne qui maîtrise déjà l'écosystème, ou si vous voulez un système collaboratif d'édition
              avec plusieurs rédacteurs.
            </p>
            <p>
              Pour une PME charentaise classique (artisan, commerce, profession libérale, restaurant), notre approche
              Next.js sur mesure est plus rapide à livrer, plus rapide à charger, et moins coûteuse à maintenir sur 5 ans.
            </p>

            <h2 className="text-primary font-sora pt-4">Pour les cas où vous tenez à éditer vous-même</h2>
            <p>
              Si l'éditabilité par vous-même est essentielle, on peut intégrer un CMS headless (Sanity, Strapi, ou même
              un simple Notion connecté en API). Vous gardez la liberté d'édition de WP, sans ses inconvénients en performance.
            </p>
            <p>
              Pour comprendre nos tarifs en détail, voir
              notre <Link href="/blog/combien-coute-site-web-pme" className="text-accent hover:underline">article sur les vrais prix</Link>.
              Pour le délai, on a écrit un <Link href="/blog/delai-creation-site-web" className="text-accent hover:underline">guide complet</Link>.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-14 lg:py-20 bg-primary text-white">
        <Container className="text-center">
          <h2 className="font-sora mb-5">Vous avez un Wordpress qui vous coûte trop ?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            On peut migrer votre site WordPress vers un Next.js statique en 3-4 semaines, sans perdre votre SEO,
            avec un coût de maintenance divisé par 4. Audit gratuit avant devis.
          </p>
          <Button href="/devis" variant="primary" arrow>
            Demander un audit gratuit
          </Button>
        </Container>
      </Section>
    </>
  );
}
