import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { services, type Service } from "@/lib/data";
import {
  Check,
  X,
  Clock,
  Target,
  ArrowRight,
  TrendingUp,
  Zap,
  Search,
  BarChart3,
  ShoppingBag,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Sites vitrine, e-commerce, refonte, SEO",
  description:
    "Découvrez les 4 services de Synaptic Digital pour petites PME : site vitrine, e-commerce, refonte de site, SEO et performance.",
};

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-20 pb-12 lg:pt-24 lg:pb-16 bg-bg-light">
        <div className="absolute -top-40 -left-32 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,123,71,0.08)_0%,transparent_70%)] z-0" />
        <Container className="relative z-10">
          <div className="max-w-[820px] mx-auto text-center">
            <span className="section-eyebrow">Services</span>
            <h1 className="text-primary mb-6">
              4 expertises, calibrées pour les petites PME.
            </h1>
            <p className="text-[20px] text-text-muted leading-relaxed max-w-[680px] mx-auto mb-8">
              Site vitrine, e-commerce, refonte, SEO. Chaque service répond à un objectif business précis.
            </p>
            <div className="flex flex-wrap gap-2.5 justify-center">
              {services.map((s) => (
                <a
                  key={s.slug}
                  href={`#${s.slug}`}
                  className="inline-flex items-center gap-2 bg-bg-card border border-border rounded-full px-4 py-2 text-sm font-medium text-text-dark hover:border-accent hover:text-accent transition-all"
                >
                  <s.icon size={14} />
                  {s.title}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 4 univers visuels distincts */}
      <ServiceEditorial service={services[0]} />
      <ServiceSplitMockup service={services[1]} />
      <ServiceBeforeAfter service={services[2]} />
      <ServiceStats service={services[3]} />

      {/* CTA final */}
      <section className="bg-bg-dark text-text-light py-16 lg:py-20 text-center">
        <Container>
          <h2 className="text-text-light mb-4">Un projet en tête ?</h2>
          <p className="text-text-light/70 text-[18px] max-w-[600px] mx-auto mb-8">
            On échange 30 minutes pour cerner votre besoin, puis on vous envoie un devis détaillé sous 48h.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/#contact" variant="primary" arrow>
              Démarrer mon projet
            </Button>
            <Link
              href="/agence"
              className="btn btn-secondary !border-white/30 !text-text-light hover:!bg-white hover:!text-primary hover:!border-white"
            >
              En savoir plus sur l&apos;agence
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

/* ─────────────────────────────────────────────────
   UNIVERS 1 — ÉDITORIAL (Site vitrine)
   Layout centré, narratif, max-width étroite, citation forte
   ───────────────────────────────────────────────── */
function ServiceEditorial({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <section id={service.slug} className="py-16 lg:py-24 bg-bg-card">
      <Container narrow>
        {/* Header minimaliste */}
        <div className="flex items-center gap-3 mb-8 text-text-muted text-sm">
          <span className="font-sora font-semibold text-accent text-base">01</span>
          <span className="h-px w-12 bg-border" />
          <Icon size={16} />
          <span className="uppercase tracking-wider font-medium">{service.title}</span>
        </div>

        {/* Quote / lead phrase */}
        <blockquote className="font-sora font-bold text-primary leading-[1.1] mb-8 max-w-[760px]" style={{ fontSize: "clamp(32px, 4.2vw, 48px)" }}>
          {service.tagline}
        </blockquote>

        {/* Description longue en prose */}
        <div className="space-y-5 max-w-[680px] text-[18px] text-text-dark leading-relaxed mb-10">
          {service.longDescription.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* Idéal pour — bandeau inline */}
        <div className="flex items-start gap-3 mb-10 text-[15px] text-text-muted max-w-[680px]">
          <Target size={18} className="text-accent shrink-0 mt-1" />
          <p><span className="font-semibold text-primary">Idéal pour</span> · {service.idealFor}</p>
        </div>

        {/* Footer commun — accordion inclus + récap */}
        <ServiceFooter service={service} />
      </Container>
    </section>
  );
}

/* ─────────────────────────────────────────────────
   UNIVERS 2 — SPLIT MOCKUP (E-commerce)
   Layout 2 colonnes asymétrique avec mockup d'écran boutique
   ───────────────────────────────────────────────── */
function ServiceSplitMockup({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <section id={service.slug} className="py-16 lg:py-24 bg-bg-light relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(255,123,71,0.06)_0%,transparent_70%)]" />
      <Container className="relative">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center mb-10">
          {/* Mockup à gauche sur desktop */}
          <div className="order-2 lg:order-1">
            <BoutiqueMockup />
          </div>
          {/* Texte à droite */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6 text-text-muted text-sm">
              <span className="font-sora font-semibold text-accent text-base">02</span>
              <span className="h-px w-12 bg-border" />
              <Icon size={16} />
              <span className="uppercase tracking-wider font-medium">{service.title}</span>
            </div>
            <h2 className="text-primary mb-4">{service.title}</h2>
            <p className="text-accent font-medium text-[18px] mb-6">{service.tagline}</p>
            <div className="space-y-4 text-[17px] text-text-dark leading-relaxed">
              {service.longDescription.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="flex items-start gap-3 mt-6 text-[15px] text-text-muted">
              <Target size={18} className="text-accent shrink-0 mt-1" />
              <p><span className="font-semibold text-primary">Idéal pour</span> · {service.idealFor}</p>
            </div>
          </div>
        </div>
        <ServiceFooter service={service} />
      </Container>
    </section>
  );
}

/* Mockup CSS d'une boutique e-commerce */
function BoutiqueMockup() {
  return (
    <div className="relative max-w-[440px] mx-auto">
      <div className="bg-[#161616] rounded-t-[12px] p-[6px] shadow-[0_24px_64px_rgba(0,0,0,0.18)]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[48px] h-[10px] bg-[#161616] rounded-b-[6px] z-10" />
        <div className="bg-white rounded-[6px] overflow-hidden">
          {/* Mock header */}
          <div className="bg-bg-light px-3 py-2 flex items-center justify-between border-b border-border">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E07A6B]" />
              <span className="w-2 h-2 rounded-full bg-[#E3B85F]" />
              <span className="w-2 h-2 rounded-full bg-[#7CB87B]" />
            </div>
            <div className="text-[9px] text-text-muted font-mono">votre-boutique.fr</div>
            <ShoppingBag size={11} className="text-text-muted" />
          </div>
          {/* Mock content */}
          <div className="p-4">
            <div className="h-4 w-3/5 bg-primary rounded mb-2" />
            <div className="h-2 w-4/5 bg-border rounded mb-1" />
            <div className="h-2 w-3/5 bg-border rounded mb-4" />
            {/* Product grid */}
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-bg-warm rounded-md p-2">
                  <div className="aspect-square bg-accent/20 rounded mb-2 flex items-center justify-center">
                    <ShoppingBag size={14} className="text-accent" />
                  </div>
                  <div className="h-1.5 w-3/4 bg-text-muted/30 rounded mb-1" />
                  <div className="h-2 w-1/2 bg-accent rounded" />
                </div>
              ))}
            </div>
            <div className="mt-4 h-7 bg-accent rounded flex items-center justify-center text-white text-[10px] font-bold">
              Ajouter au panier · 49 €
            </div>
          </div>
        </div>
      </div>
      <div className="h-[2px] bg-gradient-to-b from-[#161616] to-[#444]" />
      <div className="h-[10px] bg-gradient-to-b from-[#D4D7DC] to-[#8B9099]" style={{ clipPath: "polygon(2% 0, 98% 0, 95% 100%, 5% 100%)" }} />
    </div>
  );
}

/* ─────────────────────────────────────────────────
   UNIVERS 3 — AVANT / APRÈS (Refonte)
   Deux cards comparatives côte à côte
   ───────────────────────────────────────────────── */
function ServiceBeforeAfter({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <section id={service.slug} className="py-16 lg:py-24 bg-bg-card">
      <Container>
        <div className="max-w-[820px] mx-auto mb-12">
          <div className="flex items-center gap-3 mb-6 text-text-muted text-sm">
            <span className="font-sora font-semibold text-accent text-base">03</span>
            <span className="h-px w-12 bg-border" />
            <Icon size={16} />
            <span className="uppercase tracking-wider font-medium">{service.title}</span>
          </div>
          <h2 className="text-primary mb-4">{service.title}</h2>
          <p className="text-accent font-medium text-[18px] mb-6">{service.tagline}</p>
          <div className="space-y-4 text-[17px] text-text-dark leading-relaxed">
            {service.longDescription.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        {/* Avant/Après cards */}
        <div className="grid md:grid-cols-2 gap-5 max-w-[1000px] mx-auto mb-10">
          <ComparisonCard
            type="before"
            title="Avant"
            items={[
              "Site lent (Lighthouse < 50)",
              "Design daté, peu mobile-friendly",
              "Invisible sur Google",
              "Contenus mal structurés",
              "Difficile à mettre à jour",
            ]}
          />
          <ComparisonCard
            type="after"
            title="Après"
            items={[
              "Score Lighthouse 95+",
              "Design moderne, responsive parfait",
              "Premières positions Google",
              "Structure SEO optimisée",
              "Modifiable en autonomie",
            ]}
          />
        </div>

        <div className="max-w-[820px] mx-auto">
          <div className="flex items-start gap-3 mb-10 text-[15px] text-text-muted">
            <Target size={18} className="text-accent shrink-0 mt-1" />
            <p><span className="font-semibold text-primary">Idéal pour</span> · {service.idealFor}</p>
          </div>
          <ServiceFooter service={service} />
        </div>
      </Container>
    </section>
  );
}

function ComparisonCard({
  type,
  title,
  items,
}: {
  type: "before" | "after";
  title: string;
  items: string[];
}) {
  const isAfter = type === "after";
  return (
    <div
      className={`rounded-3xl p-8 ${
        isAfter
          ? "bg-accent/8 border-2 border-accent"
          : "bg-bg-light border border-border opacity-90"
      }`}
    >
      <div
        className={`text-[13px] font-semibold uppercase tracking-wider mb-5 ${
          isAfter ? "text-accent" : "text-text-muted"
        }`}
      >
        {title}
      </div>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className={`flex items-start gap-3 text-[15px] leading-relaxed ${
              isAfter ? "text-text-dark" : "text-text-muted line-through decoration-text-muted/30"
            }`}
          >
            {isAfter ? (
              <Check size={18} className="text-accent shrink-0 mt-0.5" strokeWidth={2.5} />
            ) : (
              <X size={18} className="text-text-muted shrink-0 mt-0.5" strokeWidth={2.5} />
            )}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   UNIVERS 4 — STATS / DATA (SEO & Performance)
   Grille de chiffres clés en grand, puis description
   ───────────────────────────────────────────────── */
function ServiceStats({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <section id={service.slug} className="py-16 lg:py-24 bg-bg-dark text-text-light relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,123,71,0.12)_0%,transparent_70%)]" />
      <Container className="relative">
        <div className="max-w-[820px] mx-auto mb-12">
          <div className="flex items-center gap-3 mb-6 text-text-light/60 text-sm">
            <span className="font-sora font-semibold text-accent text-base">04</span>
            <span className="h-px w-12 bg-white/20" />
            <Icon size={16} />
            <span className="uppercase tracking-wider font-medium">{service.title}</span>
          </div>
          <h2 className="text-text-light mb-4">{service.title}</h2>
          <p className="text-accent font-medium text-[18px] mb-6">{service.tagline}</p>
          <div className="space-y-4 text-[17px] text-text-light/80 leading-relaxed">
            {service.longDescription.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[1100px] mx-auto mb-12">
          <StatBlock Icon={TrendingUp} value="+180%" label="Trafic organique moyen sur 3 mois" />
          <StatBlock Icon={Zap} value="95+" label="Score Lighthouse après optimisations" />
          <StatBlock Icon={Search} value="-40%" label="Temps de chargement moyen" />
          <StatBlock Icon={BarChart3} value="Top 3" label="Position Google sur les keywords cibles" />
        </div>

        <div className="max-w-[820px] mx-auto">
          <div className="flex items-start gap-3 mb-10 text-[15px] text-text-light/70">
            <Target size={18} className="text-accent shrink-0 mt-1" />
            <p><span className="font-semibold text-text-light">Idéal pour</span> · {service.idealFor}</p>
          </div>
          <ServiceFooter service={service} inverted />
        </div>
      </Container>
    </section>
  );
}

function StatBlock({
  Icon,
  value,
  label,
}: {
  Icon: typeof TrendingUp;
  value: string;
  label: string;
}) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-accent/15 text-accent mb-3">
        <Icon size={20} />
      </div>
      <div className="font-sora font-bold text-accent leading-none mb-2 tracking-tight" style={{ fontSize: "clamp(28px, 3.2vw, 40px)" }}>
        {value}
      </div>
      <div className="text-[12px] text-text-light/60 leading-tight">{label}</div>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   Footer commun — accordéon inclus + CTA (sans tarif chiffré, en attente Yann)
   ───────────────────────────────────────────────── */
function ServiceFooter({ service, inverted = false }: { service: Service; inverted?: boolean }) {
  const bgClass = inverted ? "bg-white/[0.04] border-white/10" : "bg-bg-warm border-border";
  const textClass = inverted ? "text-text-light" : "text-primary";
  const mutedClass = inverted ? "text-text-light/70" : "text-text-muted";

  return (
    <div className="max-w-[820px] mx-auto">
      <details className={`rounded-2xl border ${bgClass} overflow-hidden`}>
        <summary className={`cursor-pointer list-none p-6 flex items-center justify-between gap-4 ${textClass} font-semibold hover:bg-bg-card/30 transition-colors`}>
          <span className="flex items-center gap-3">
            <Check size={18} className="text-accent shrink-0" strokeWidth={2.5} />
            Voir ce qui est inclus ({service.includes.length} points)
          </span>
          <span className="text-accent text-xl leading-none">+</span>
        </summary>
        <ul className="px-6 pb-6 space-y-2.5 pt-1">
          {service.includes.map((item) => (
            <li key={item} className={`flex items-start gap-3 text-[15px] leading-relaxed ${inverted ? "text-text-light/90" : "text-text-dark"}`}>
              <Check size={16} className="text-green-600 shrink-0 mt-0.5" strokeWidth={3} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </details>

      <div className={`mt-6 flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl ${inverted ? "bg-white/[0.04] border border-white/10" : "bg-bg-card border border-border"}`}>
        <div className="flex flex-wrap items-center gap-6">
          <div>
            <div className={`text-[11px] font-semibold uppercase tracking-wider mb-0.5 ${mutedClass}`}>
              Délai
            </div>
            <div className={`text-[15px] font-medium ${textClass} flex items-center gap-2`}>
              <Clock size={14} className="text-accent" />
              {service.duration}
            </div>
          </div>
          <div>
            <div className={`text-[11px] font-semibold uppercase tracking-wider mb-0.5 ${mutedClass}`}>
              Tarif
            </div>
            <div className={`text-[15px] font-medium ${textClass}`}>
              Sur devis · sous 48h
            </div>
          </div>
        </div>
        <Link href="/#contact" className="btn btn-primary text-sm">
          Discuter
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
