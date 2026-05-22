import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { automationCases } from "@/lib/automation-data";
import {
  ArrowRight,
  Zap,
  Clock,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Workflow,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Automatisation pour PME en Charente, cas d'usage concrets",
  description:
    "Automatisez la prise de RDV, les devis artisan, les réservations restaurant et la gestion des leads. Solutions sur mesure pour PME charentaises. Synaptic Digital.",
  keywords: [
    "automatisation pme",
    "automatisation entreprise charente",
    "automatiser devis artisan",
    "automatiser réservation restaurant",
    "automatisation prise de rdv",
    "agence automatisation angoulême",
  ],
  alternates: { canonical: "https://synaptic-digital.fr/services/automatisation-pme" },
  openGraph: {
    title: "Automatisation pour PME, cas d'usage concrets",
    description:
      "4 cas d'usage automatisation conçus pour PME locales. Tarifs transparents, livraison en 2-3 semaines.",
    url: "https://synaptic-digital.fr/services/automatisation-pme",
    type: "website",
  },
};

const benefits = [
  {
    icon: Clock,
    title: "Vous récupérez du temps",
    body: "2 à 8 heures gagnées par semaine sur le travail administratif répétitif. Vous les remettez sur le coeur de votre métier.",
  },
  {
    icon: TrendingUp,
    title: "Vous convertissez plus",
    body: "Réponse instantanée aux prospects, relances qui partent toutes seules. Conversions multipliées par 2 à 3 sur 90 jours.",
  },
  {
    icon: ShieldCheck,
    title: "Vous arrêtez de perdre des opportunités",
    body: "Plus de leads oubliés, plus de devis perdus, plus de no-show non sanctionnés. Tout est tracé, rien ne tombe entre les chaises.",
  },
  {
    icon: Sparkles,
    title: "Vous gardez la simplicité",
    body: "Aucun logiciel à apprendre pour vous. Tout se passe dans votre mail ou sur votre téléphone. Vos clients ne voient que de la fluidité.",
  },
];

export default function AutomatisationPmePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-20 pb-12 lg:pt-24 lg:pb-16 bg-bg-light">
        <div className="absolute -top-40 -left-32 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,123,71,0.10)_0%,transparent_70%)] z-0" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(26,40,64,0.06)_0%,transparent_70%)] z-0" />
        <Container className="relative z-10">
          <div className="max-w-[860px]">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 text-[12px] font-semibold text-accent uppercase tracking-wider mb-6">
              <Workflow size={14} />
              Automatisation PME
            </div>
            <h1 className="text-primary mb-6">
              Automatisez ce qui vous prend du temps. Concentrez-vous sur ce qui compte.
            </h1>
            <p className="text-[20px] text-text-muted leading-relaxed mb-8">
              4 cas d'usage pensés pour les PME charentaises. Pas de jargon, pas de logiciel à apprendre. Vous nous donnez un problème, on construit le système qui le règle en 2 à 3 semaines.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/devis" variant="primary" arrow>
                Discuter de mon cas
              </Button>
              <Link
                href="#cas"
                className="text-[15px] font-semibold text-primary hover:text-accent transition-colors inline-flex items-center gap-1"
              >
                Voir les 4 cas d'usage
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* WHY AUTOMATE */}
      <section className="py-16 lg:py-20 bg-bg-card">
        <Container>
          <div className="max-w-[680px] mb-12">
            <span className="section-eyebrow">Pourquoi automatiser</span>
            <h2 className="text-primary">
              L'automatisation n'est plus réservée aux grosses boîtes.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b) => (
              <article
                key={b.title}
                className="bg-bg-light rounded-3xl p-7 border border-border hover:border-accent/40 hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 rounded-2xl bg-accent/12 text-accent flex items-center justify-center mb-4">
                  <b.icon size={20} />
                </div>
                <h3 className="text-primary text-[18px] mb-2">{b.title}</h3>
                <p className="text-[15px] text-text-dark leading-relaxed">{b.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* LES 4 CAS */}
      <section id="cas" className="py-16 lg:py-24 bg-bg-light">
        <Container>
          <div className="max-w-[760px] mb-12">
            <span className="section-eyebrow">4 cas d'usage</span>
            <h2 className="text-primary mb-5">
              Choisissez votre quotidien, on s'occupe du reste.
            </h2>
            <p className="text-[18px] text-text-muted leading-relaxed">
              Chaque cas est packagé : périmètre clair, tarif transparent, livraison en 2 à 3 semaines. Vous pouvez démarrer par un seul, ou les combiner si plusieurs résonnent.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {automationCases.map((c, i) => {
              const Icon = c.icon;
              return (
                <Link
                  key={c.slug}
                  href={`/services/${c.slug}`}
                  className="group bg-bg-card border border-border rounded-3xl p-8 hover:border-accent hover:shadow-lg transition-all flex flex-col"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-accent/12 text-accent flex items-center justify-center">
                      <Icon size={22} />
                    </div>
                    <span className="font-sora font-semibold text-text-muted/60 text-[14px]">
                      {String(i + 1).padStart(2, "0")} / 04
                    </span>
                  </div>
                  <div className="text-[12px] font-semibold uppercase tracking-wider text-accent mb-3">
                    {c.eyebrow}
                  </div>
                  <h3 className="text-primary text-[22px] mb-3 leading-snug">
                    {c.title}
                  </h3>
                  <p className="text-[15px] text-text-muted leading-relaxed mb-5 flex-1">
                    {c.subtitle}
                  </p>
                  <div className="border-t border-border pt-4 flex items-center justify-between gap-3">
                    <span className="text-[13px] text-text-muted">
                      <span className="text-text-dark font-medium">Pour qui :</span>{" "}
                      {c.audience}
                    </span>
                    <span className="text-accent text-sm font-semibold inline-flex items-center gap-1 shrink-0">
                      Voir le cas
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* METHODE */}
      <section className="py-16 lg:py-24 bg-bg-card">
        <Container narrow>
          <div className="max-w-[720px] mb-12">
            <span className="section-eyebrow">Notre méthode</span>
            <h2 className="text-primary mb-5">
              Pas de promesse vague. Un cadre méthodique.
            </h2>
            <p className="text-[18px] text-text-muted leading-relaxed">
              On ne vend pas de l'IA fumeuse. On construit des systèmes simples, robustes, qui résolvent un problème métier précis. Vous en êtes 100 % propriétaire à la fin.
            </p>
          </div>

          <div className="space-y-5">
            {[
              {
                step: "01",
                title: "Vous décrivez votre douleur",
                body: "Pas votre besoin technique. Votre douleur. \"Mon agenda est ingérable\", \"je perds des devis\", \"TheFork me coûte une fortune\". On part de là.",
              },
              {
                step: "02",
                title: "On vous propose un cadrage écrit",
                body: "Pas de bla-bla. Un document de 2 pages avec le périmètre exact, les modules, le délai, le tarif, ce qui est inclus et exclu. Vous signez ou pas.",
              },
              {
                step: "03",
                title: "On livre en 2 à 3 semaines",
                body: "Setup, test grandeur nature avec 2-3 cas réels, formation 1h, mise en production. Vous voyez le résultat avant de payer le solde.",
              },
              {
                step: "04",
                title: "Un mois de suivi inclus",
                body: "On observe les 30 premiers jours avec vous. Ajustements, optimisations, débriefing chiffré. Ensuite vous êtes autonome, on reste joignable.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="flex items-start gap-5 p-6 bg-bg-light rounded-2xl border border-border"
              >
                <div className="font-sora font-bold text-[28px] text-accent leading-none shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="text-primary text-[18px] mb-2">{s.title}</h3>
                  <p className="text-[15px] text-text-dark leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* GARANTIES */}
      <section className="py-16 bg-bg-warm">
        <Container narrow>
          <div className="text-center mb-10">
            <span className="section-eyebrow">Engagements</span>
            <h2 className="text-primary">Ce qu'on s'engage à faire (et à ne pas faire).</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              "Vous restez propriétaire de toutes vos données et de tous vos comptes",
              "Vous pouvez tout exporter à tout moment, aucun lock-in technique",
              "Tarifs forfaitaires, jamais de surfacturation à la livraison",
              "On ne facture pas le temps passé en ajustements le mois suivant",
              "Documentation utilisateur claire fournie en fin de mission",
              "Aucun abonnement Synaptic obligatoire après la livraison",
            ].map((line) => (
              <div
                key={line}
                className="flex items-start gap-3 bg-bg-card border border-border rounded-2xl p-5"
              >
                <Check size={18} className="text-accent shrink-0 mt-1" strokeWidth={2.5} />
                <span className="text-[15px] text-text-dark leading-relaxed">{line}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ chapeau */}
      <section className="py-16 lg:py-20 bg-bg-light">
        <Container narrow>
          <div className="mb-10">
            <span className="section-eyebrow">Questions générales</span>
            <h2 className="text-primary">Avant de réserver un échange.</h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: "Mon métier n'est pas dans les 4 cas, est-ce que c'est faisable ?",
                a: "Très probablement oui. Les 4 cas sont nos plus demandés en Charente, mais on a déjà automatisé des choses pour des cabinets comptables, des syndics, des associations. Si votre douleur est répétitive et chronophage, on peut presque toujours la traiter. Réservez 20 minutes, on regarde ensemble.",
              },
              {
                q: "Combien ça coûte en tout, vraiment ?",
                a: "Entre 1 200 € et 2 800 € selon le cas et le pack. C'est un coût unique, pas un abonnement. Les seuls coûts récurrents sont les services tiers (SMS, Stripe, hébergement) qui restent souvent sous 30 €/mois.",
              },
              {
                q: "Vous utilisez de l'IA, c'est risqué ?",
                a: "On utilise très peu d'IA générative dans ces systèmes (sauf cas spécifiques). On préfère des règles métier explicites, plus prévisibles et auditables. Quand on utilise de l'IA, c'est pour des tâches bien circonscrites (résumer un email, classer un lead) et toujours sous votre contrôle.",
              },
              {
                q: "Et si je veux arrêter dans 6 mois ?",
                a: "Vous gardez tout. Le code, les automatisations, les données, les comptes. On vous transmet un dossier de passation que n'importe quel prestataire pourra reprendre. Vous n'êtes jamais prisonnier de nous.",
              },
              {
                q: "Vous formez des prestataires concurrents ?",
                a: "Non. On accompagne seulement des entreprises finales. On ne fait pas de marque blanche pour d'autres agences.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="bg-bg-card rounded-2xl border border-border overflow-hidden group"
              >
                <summary className="cursor-pointer list-none p-6 flex items-center justify-between gap-4 text-primary font-semibold hover:bg-bg-warm/40 transition-colors">
                  <span className="text-[17px]">{item.q}</span>
                  <span className="text-accent text-2xl leading-none shrink-0 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-1 text-[16px] text-text-dark leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA FINAL */}
      <section className="bg-bg-dark text-text-light py-16 lg:py-20 text-center">
        <Container>
          <div className="max-w-[720px] mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/[0.08] border border-white/15 rounded-full px-4 py-1.5 text-[12px] font-semibold text-text-light uppercase tracking-wider mb-6">
              <Zap size={14} className="text-accent" />
              Premier RDV gratuit
            </div>
            <h2 className="text-text-light mb-4">
              Décrivez votre douleur, on regarde si c'est jouable.
            </h2>
            <p className="text-text-light/70 text-[18px] mb-8">
              20 minutes en visio ou par téléphone, sans engagement. Si on ne peut rien faire pour vous, on vous le dit franchement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/devis" variant="primary" arrow>
                Réserver un échange
              </Button>
              <Link
                href="/services"
                className="btn btn-secondary !border-white/30 !text-text-light hover:!bg-white hover:!text-primary hover:!border-white"
              >
                Retour aux services
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
