import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  ArrowRight,
  Check,
  Clock,
  AlertTriangle,
  Sparkles,
  Target,
  ChevronRight,
} from "lucide-react";
import type { AutomationCase } from "@/lib/automation-data";

interface CaseStudyLayoutProps {
  data: AutomationCase;
  caseIndex: number;
  otherCases: { slug: string; shortTitle: string; eyebrow: string }[];
}

export function CaseStudyLayout({ data, caseIndex, otherCases }: CaseStudyLayoutProps) {
  const Icon = data.icon;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-20 pb-12 lg:pt-24 lg:pb-16 bg-bg-light">
        <div className="absolute -top-40 -left-32 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,123,71,0.10)_0%,transparent_70%)] z-0" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(26,40,64,0.06)_0%,transparent_70%)] z-0" />
        <Container className="relative z-10">
          <div className="flex items-center gap-2 text-sm text-text-muted mb-8">
            <Link href="/services" className="hover:text-accent transition-colors">
              Services
            </Link>
            <ChevronRight size={14} />
            <Link
              href="/services/automatisation-pme"
              className="hover:text-accent transition-colors"
            >
              Automatisation PME
            </Link>
            <ChevronRight size={14} />
            <span className="text-text-dark font-medium truncate">{data.shortTitle}</span>
          </div>

          <div className="max-w-[860px]">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 text-[12px] font-semibold text-accent uppercase tracking-wider mb-6">
              <Icon size={14} />
              {data.eyebrow}
            </div>
            <h1 className="text-primary mb-6">{data.h1}</h1>
            <p className="text-[20px] text-text-muted leading-relaxed mb-8">
              {data.subtitle}
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-2">
              <Button href="/devis" variant="primary" arrow>
                Discuter de mon cas
              </Button>
              <Link
                href="#tarifs"
                className="text-[15px] font-semibold text-primary hover:text-accent transition-colors inline-flex items-center gap-1"
              >
                Voir les tarifs
                <ArrowRight size={14} />
              </Link>
            </div>
            <p className="text-sm text-text-muted mt-6 flex items-center gap-2">
              <Target size={14} className="text-accent shrink-0" />
              <span>
                <span className="font-semibold text-primary">Pour qui</span> · {data.audience}
              </span>
            </p>
          </div>
        </Container>
      </section>

      {/* PROBLÈME */}
      <section className="py-16 lg:py-20 bg-bg-card">
        <Container narrow>
          <div className="inline-flex items-center gap-2 bg-bg-warm border border-border rounded-full px-3 py-1 text-[12px] font-semibold text-text-muted uppercase tracking-wider mb-6">
            <AlertTriangle size={12} />
            Avant
          </div>
          <h2 className="text-primary mb-8 max-w-[760px]">{data.painTitle}</h2>
          <div className="space-y-5 text-[18px] text-text-dark leading-relaxed max-w-[720px] mb-8">
            {data.painParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <blockquote className="border-l-4 border-accent pl-6 py-3 italic text-[20px] text-primary font-medium leading-snug max-w-[720px]">
            {data.painSignal}
          </blockquote>
        </Container>
      </section>

      {/* SOLUTION */}
      <section className="py-16 lg:py-24 bg-bg-light">
        <Container>
          <div className="max-w-[820px] mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-3 py-1 text-[12px] font-semibold text-accent uppercase tracking-wider mb-6">
              <Sparkles size={12} />
              Après
            </div>
            <h2 className="text-primary mb-5">{data.solutionTitle}</h2>
            <p className="text-[18px] text-text-muted leading-relaxed">
              {data.solutionIntro}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {data.modules.map((mod, i) => (
              <article
                key={i}
                className="bg-bg-card rounded-3xl p-7 border border-border hover:border-accent/40 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-accent/12 text-accent flex items-center justify-center font-sora font-bold shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-primary mb-2 text-[20px]">{mod.title}</h3>
                    <p className="text-[15px] text-text-dark leading-relaxed">
                      {mod.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* STATS */}
      <section className="py-16 lg:py-20 bg-bg-dark text-text-light relative overflow-hidden">
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,123,71,0.14)_0%,transparent_70%)]" />
        <Container className="relative">
          <div className="max-w-[680px] mb-10">
            <span className="section-eyebrow">Le résultat concret</span>
            <h2 className="text-text-light">
              Ce que vous allez observer dans les 60 jours.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {data.stats.map((s, i) => (
              <div key={i} className="text-center md:text-left">
                <div
                  className="font-sora font-bold text-accent leading-none mb-3 tracking-tight"
                  style={{ fontSize: "clamp(32px, 4.4vw, 56px)" }}
                >
                  {s.value}
                </div>
                <div className="text-[13px] text-text-light/70 leading-snug max-w-[180px] mx-auto md:mx-0">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section className="py-16 lg:py-24 bg-bg-card">
        <Container narrow>
          <div className="mb-12">
            <span className="section-eyebrow">Comment on s'y prend</span>
            <h2 className="text-primary">
              4 étapes, 2 à 3 semaines, vous gardez la main.
            </h2>
          </div>

          <ol className="relative border-l-2 border-accent/30 ml-3 space-y-10">
            {data.process.map((step, i) => (
              <li key={i} className="pl-8 relative">
                <span className="absolute -left-[19px] top-0 w-9 h-9 rounded-full bg-accent text-white flex items-center justify-center font-sora font-bold text-[15px] shadow-accent">
                  {i + 1}
                </span>
                <h3 className="text-primary mb-2">{step.title}</h3>
                <p className="text-[16px] text-text-dark leading-relaxed">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>

          {/* Stack */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="text-[12px] font-semibold uppercase tracking-wider text-text-muted mb-4">
              Outils utilisés (vous n'avez rien à installer)
            </div>
            <div className="flex flex-wrap gap-2">
              {data.toolStack.map((tool) => (
                <span
                  key={tool}
                  className="inline-flex items-center bg-bg-warm border border-border rounded-full px-3 py-1.5 text-sm font-medium text-text-dark"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* TARIFS */}
      <section id="tarifs" className="py-16 lg:py-24 bg-bg-warm">
        <Container>
          <div className="text-center max-w-[680px] mx-auto mb-12">
            <span className="section-eyebrow">Tarifs transparents</span>
            <h2 className="text-primary mb-4">Investissement clair, sans surprise.</h2>
            <p className="text-[17px] text-text-muted">
              Paiement en 2 fois (50 % au démarrage, 50 % à la livraison). Aucun frais récurrent caché.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-[920px] mx-auto">
            {data.pricing.map((tier) => (
              <article
                key={tier.name}
                className={`rounded-3xl p-8 ${
                  tier.highlighted
                    ? "bg-bg-card border-2 border-accent shadow-lg relative"
                    : "bg-bg-card border border-border"
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 right-6 bg-accent text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Recommandé
                  </span>
                )}
                <h3 className="text-primary mb-2 text-[24px]">{tier.name}</h3>
                <div className="mb-1">
                  <span className="text-text-muted text-sm">À partir de </span>
                  <span className="font-sora font-bold text-accent text-[32px]">
                    {tier.price}
                  </span>
                </div>
                {tier.priceNote && (
                  <p className="text-[13px] text-text-muted mb-5">{tier.priceNote}</p>
                )}
                <ul className="space-y-2.5 mb-7">
                  {tier.includes.map((line) => (
                    <li
                      key={line}
                      className="flex items-start gap-2.5 text-[15px] text-text-dark leading-snug"
                    >
                      <Check size={16} className="text-accent shrink-0 mt-1" strokeWidth={2.5} />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  href="/devis"
                  variant={tier.highlighted ? "primary" : "secondary"}
                  arrow
                  className="w-full justify-center"
                >
                  Démarrer
                </Button>
              </article>
            ))}
          </div>

          <p className="text-center text-sm text-text-muted mt-8 flex items-center justify-center gap-2">
            <Clock size={14} className="text-accent" />
            <span>Délai de livraison moyen : 2 à 3 semaines après cadrage.</span>
          </p>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-bg-light">
        <Container narrow>
          <div className="mb-10">
            <span className="section-eyebrow">Questions fréquentes</span>
            <h2 className="text-primary">Ce que les autres m'ont déjà demandé.</h2>
          </div>
          <div className="space-y-3">
            {data.faq.map((item) => (
              <details
                key={item.question}
                className="bg-bg-card rounded-2xl border border-border overflow-hidden group"
              >
                <summary className="cursor-pointer list-none p-6 flex items-center justify-between gap-4 text-primary font-semibold hover:bg-bg-warm/40 transition-colors">
                  <span className="text-[17px]">{item.question}</span>
                  <span className="text-accent text-2xl leading-none shrink-0 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-1 text-[16px] text-text-dark leading-relaxed">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* AUTRES CAS */}
      {otherCases.length > 0 && (
        <section className="py-16 bg-bg-warm border-t border-border">
          <Container>
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="section-eyebrow">Vous avez peut-être aussi besoin de</span>
                <h2 className="text-primary text-[28px] md:text-[34px]">
                  Les autres cas d'usage automatisation.
                </h2>
              </div>
              <Link
                href="/services/automatisation-pme"
                className="text-[15px] font-semibold text-accent hover:underline inline-flex items-center gap-1"
              >
                Voir tous les cas
                <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {otherCases.map((c) => (
                <Link
                  key={c.slug}
                  href={`/services/${c.slug}`}
                  className="bg-bg-card border border-border rounded-2xl p-6 hover:border-accent hover:shadow-md transition-all group"
                >
                  <div className="text-[12px] font-semibold uppercase tracking-wider text-accent mb-2">
                    {c.eyebrow}
                  </div>
                  <div className="text-primary font-sora font-bold text-[18px] leading-tight mb-3">
                    {c.shortTitle}
                  </div>
                  <span className="text-accent text-sm font-semibold inline-flex items-center gap-1">
                    Voir le cas
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA FINAL */}
      <section className="bg-bg-dark text-text-light py-16 lg:py-20 text-center">
        <Container>
          <div className="max-w-[720px] mx-auto">
            <h2 className="text-text-light mb-4">
              Vous voulez en parler 20 minutes ?
            </h2>
            <p className="text-text-light/70 text-[18px] mb-8">
              On regarde ensemble si l'automatisation a du sens pour votre métier. Pas de relance commerciale lourde, juste un retour honnête.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/devis" variant="primary" arrow>
                Réserver un échange
              </Button>
              <Link
                href="/services/automatisation-pme"
                className="btn btn-secondary !border-white/30 !text-text-light hover:!bg-white hover:!text-primary hover:!border-white"
              >
                Voir les autres cas
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
