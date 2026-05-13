import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { services, type Service } from "@/lib/data";
import { Check, Clock, Target, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Sites vitrine, e-commerce, refonte, SEO",
  description:
    "Découvrez les 4 services de Synaptic Digital pour petites PME : site vitrine, e-commerce, refonte de site, SEO et performance. Délais courts, prix transparents.",
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
              Site vitrine, e-commerce, refonte, SEO. Chaque service répond à un objectif business précis. Pas de package fourre-tout, pas d&apos;option cachée.
            </p>
            {/* Navigation rapide entre services */}
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

      {/* DÉTAIL DE CHAQUE SERVICE */}
      {services.map((service, idx) => (
        <ServiceDetail key={service.slug} service={service} index={idx} />
      ))}

      {/* CTA */}
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

function ServiceDetail({ service, index }: { service: Service; index: number }) {
  const isEven = index % 2 === 0;
  const bg = isEven ? "bg-bg-card" : "bg-bg-light";
  const Icon = service.icon;

  return (
    <Section id={service.slug} className={bg}>
      <Container>
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start max-w-[1180px] mx-auto">
          {/* Colonne gauche : titre + description longue */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="font-sora font-extrabold text-accent text-[44px] leading-none tracking-tight">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="h-[2px] w-12 bg-accent" />
              <div className="w-12 h-12 bg-accent/12 rounded-2xl flex items-center justify-center text-accent">
                <Icon size={24} />
              </div>
            </div>
            <h2 className="text-primary mb-3">{service.title}</h2>
            <p className="text-[18px] font-medium text-accent mb-6">{service.tagline}</p>
            <div className="space-y-4">
              {service.longDescription.map((para, i) => (
                <p key={i} className="text-[17px] text-text-dark leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Idéal pour */}
            <div className="mt-8 p-6 bg-bg-warm rounded-2xl border-l-[3px] border-accent">
              <div className="flex items-center gap-2 text-[13px] font-semibold text-accent uppercase tracking-wider mb-2">
                <Target size={14} />
                Idéal pour
              </div>
              <p className="text-[15px] text-text-dark leading-relaxed">{service.idealFor}</p>
            </div>
          </div>

          {/* Colonne droite : box récap (inclus + délai + prix + CTA) */}
          <aside className="lg:sticky lg:top-24">
            <div className="bg-bg-card border border-border rounded-3xl overflow-hidden shadow-md">
              {/* Header */}
              <div className="bg-bg-dark text-text-light p-7">
                <div className="flex items-center gap-2 text-[12px] font-semibold text-accent uppercase tracking-wider mb-2">
                  <Clock size={14} />
                  {service.duration}
                </div>
                <div className="text-text-light/70 text-sm mb-1">À partir de</div>
                <div className="font-sora font-bold text-accent text-[36px] leading-none tracking-tight">
                  {service.price}
                </div>
                <div className="text-text-light/50 text-xs mt-1.5">
                  Fourchette : {service.priceRange}
                </div>
              </div>
              {/* Includes */}
              <div className="p-7">
                <div className="text-[13px] font-semibold text-primary uppercase tracking-wider mb-4">
                  Ce qui est inclus
                </div>
                <ul className="space-y-3">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[14px] leading-relaxed text-text-dark">
                      <Check size={16} className="text-green-600 shrink-0 mt-0.5" strokeWidth={3} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#contact"
                  className="btn btn-primary w-full justify-center mt-6"
                >
                  Discuter de mon projet
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </Section>
  );
}
