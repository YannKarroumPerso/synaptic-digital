import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { getVilleBySlug, getActiveVilles } from "@/lib/villes-data";
import { services } from "@/lib/data";
import { MapPin, Clock, Check, ArrowRight, Building2, Compass } from "lucide-react";

interface PageProps {
  params: { ville: string };
}

export async function generateStaticParams() {
  return getActiveVilles().map((v) => ({ ville: v.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const ville = getVilleBySlug(params.ville);
  if (!ville || !ville.active) return { title: "Page introuvable" };

  return {
    title: `Création site web ${ville.nom} — Agence web ${ville.departement}`,
    description: `Agence de création de sites web à ${ville.nom} (${ville.departement}). Site vitrine, e-commerce, refonte livrés en 3 semaines. À partir de 1 500 €.`,
    keywords: [
      `création site web ${ville.nom}`,
      `agence web ${ville.nom}`,
      `agence digitale ${ville.nom}`,
      `site internet ${ville.nom}`,
      `${ville.nom} agence digitale`,
      `création site internet ${ville.departement}`,
    ],
    openGraph: {
      title: `Création site web ${ville.nom} — Synaptic Digital`,
      description: `Agence web pour PME à ${ville.nom} et ${ville.departement}. Sites livrés en 3 semaines.`,
    },
  };
}

export default function AgenceWebVillePage({ params }: PageProps) {
  const ville = getVilleBySlug(params.ville);
  if (!ville || !ville.active) notFound();

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-16 pb-12 lg:pt-20 lg:pb-16 bg-bg-light">
        <div className="absolute -top-40 -right-32 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,123,71,0.08)_0%,transparent_70%)] z-0" />
        <Container className="relative z-10">
          <div className="max-w-[820px] mx-auto">
            <div className="flex items-center gap-2 text-sm text-text-muted mb-4">
              <MapPin size={14} className="text-accent" />
              <span>{ville.nomComplet} · {ville.departement}</span>
            </div>
            <h1 className="text-primary mb-6">
              Création de site web à <span className="text-accent">{ville.nom}</span>.
            </h1>
            <p className="text-[20px] text-text-muted leading-relaxed mb-8">
              Agence digitale pour les PME et TPE de {ville.nom} et alentours. Sites vitrine, e-commerce, refontes — livrés en 3 semaines, à partir de 1 500 €.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact" variant="primary" arrow>
                Démarrer mon projet
              </Button>
              <Button href="/services" variant="secondary">
                Voir tous les services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* STATS rapides */}
      <section className="bg-bg-card border-y border-border py-12">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-[920px] mx-auto">
            <Stat value="3 sem." label="Délai de livraison" />
            <Stat value="95+" label="Score Lighthouse moyen" />
            <Stat value="48h" label="Premier retour devis" />
            <Stat value="100%" label="Sites livrés à temps" />
          </div>
        </Container>
      </section>

      {/* POURQUOI UN SITE WEB À [VILLE] */}
      <Section className="bg-bg-card">
        <Container narrow>
          <div className="flex items-center gap-3 mb-6 text-text-muted text-sm">
            <Compass size={16} className="text-accent" />
            <span className="uppercase tracking-wider font-medium">Pourquoi nous</span>
          </div>
          <h2 className="text-primary mb-6">Pourquoi un site web qui performe à {ville.nom} ?</h2>
          <p className="text-[18px] text-text-dark leading-relaxed mb-5">{ville.pourquoi}</p>
          <p className="text-[17px] text-text-muted leading-relaxed">
            On accompagne les entreprises de {ville.nom} et de la {ville.departement} sur leur stack digitale : site web vitrine, e-commerce, refonte, SEO local. Notre méthode est rodée pour livrer en 3 à 4 semaines, sans sacrifier la qualité.
          </p>
        </Container>
      </Section>

      {/* CONTEXTE LOCAL */}
      <Section className="bg-bg-light">
        <Container>
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 max-w-[1100px] mx-auto">
            <div>
              <div className="flex items-center gap-3 mb-6 text-text-muted text-sm">
                <Building2 size={16} className="text-accent" />
                <span className="uppercase tracking-wider font-medium">L&apos;économie locale</span>
              </div>
              <h2 className="text-primary mb-4">L&apos;économie de {ville.nom} qu&apos;on connaît</h2>
              <p className="text-text-muted text-[16px] leading-relaxed">{ville.contexteEconomique}</p>
              <div className="mt-8 text-[13px] text-text-muted">
                <strong className="text-primary">Population :</strong> {ville.population}
              </div>
            </div>
            <div>
              <h3 className="text-primary mb-5 text-[20px]">Secteurs présents à {ville.nom}</h3>
              <ul className="space-y-3 mb-8">
                {ville.secteursLocaux.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-[16px] text-text-dark">
                    <Check size={18} className="text-accent shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <h3 className="text-primary mb-5 text-[20px]">Profils d&apos;entreprise qu&apos;on accompagne</h3>
              <ul className="space-y-3">
                {ville.exemplesClientsTypes.map((e) => (
                  <li key={e} className="flex items-start gap-3 text-[15px] text-text-muted">
                    <ArrowRight size={16} className="text-accent shrink-0 mt-1" />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* SERVICES */}
      <Section className="bg-bg-card">
        <Container>
          <div className="text-center mb-12 max-w-[720px] mx-auto">
            <span className="section-eyebrow">Services à {ville.nom}</span>
            <h2 className="text-primary mb-4">Tout ce qu&apos;on fait pour les entreprises de {ville.nom}</h2>
            <p className="text-text-muted text-[18px]">
              5 expertises calibrées pour les petites PME. Délais courts, prix transparents, aucun jargon.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1100px] mx-auto">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={`/services#${service.slug}`}
                  className="group bg-bg-light border border-border rounded-3xl p-7 transition-all hover:-translate-y-1 hover:shadow-md hover:border-accent flex flex-col"
                >
                  <div className="w-12 h-12 bg-bg-warm rounded-2xl flex items-center justify-center text-accent mb-5">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-primary text-[18px] mb-2">{service.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed flex-1 mb-4">
                    {service.description}
                  </p>
                  <div className="pt-4 border-t border-border text-sm text-text-muted mt-auto">
                    À partir de <strong className="text-accent font-bold">{service.price}</strong>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* MÉTHODE EXPRESS */}
      <Section className="bg-bg-warm">
        <Container narrow>
          <div className="text-center mb-12">
            <span className="section-eyebrow">Comment ça se passe</span>
            <h2 className="text-primary mb-4">Notre méthode pour livrer en 3 semaines à {ville.nom}</h2>
            <p className="text-text-muted text-[18px] leading-relaxed">
              Une chaîne de production rodée, sans zone d&apos;ombre.
            </p>
          </div>
          <div className="grid sm:grid-cols-4 gap-4">
            {[
              { n: "01", t: "Comprendre", d: "Brief structuré · 2-3 jours" },
              { n: "02", t: "Concevoir", d: "Maquettes desktop+mobile · 5-7 jours" },
              { n: "03", t: "Construire", d: "Dev + perf + SEO · 8-12 jours" },
              { n: "04", t: "Lancer", d: "Mise en ligne + suivi 30j · 1-2 jours" },
            ].map((s) => (
              <div
                key={s.n}
                className="bg-bg-card border border-border rounded-2xl p-5 text-center"
              >
                <div className="font-sora font-bold text-accent text-[28px] leading-none mb-2">
                  {s.n}
                </div>
                <h4 className="text-primary text-[16px] mb-2">{s.t}</h4>
                <p className="text-[12px] text-text-muted leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/agence" className="inline-flex items-center gap-2 text-accent font-semibold hover:underline">
              Voir notre approche en détail
              <ArrowRight size={16} />
            </Link>
          </div>
        </Container>
      </Section>

      {/* AUTRES VILLES */}
      <Section className="bg-bg-light">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-primary mb-2 text-[28px]">On intervient aussi dans toute la région</h2>
            <p className="text-text-muted">
              Charente et Charente-Maritime — déplacement gratuit pour les premiers échanges.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center max-w-[800px] mx-auto">
            {getActiveVilles()
              .filter((v) => v.slug !== ville.slug)
              .map((v) => (
                <Link
                  key={v.slug}
                  href={`/agence-web/${v.slug}`}
                  className="inline-flex items-center gap-2 bg-bg-card border border-border rounded-full px-5 py-2.5 text-sm font-medium text-text-dark hover:border-accent hover:text-accent transition-all"
                >
                  <MapPin size={14} />
                  Agence web {v.nom}
                </Link>
              ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <section className="bg-bg-dark text-text-light py-16 text-center">
        <Container>
          <h2 className="text-text-light mb-4">Un projet de site web à {ville.nom} ?</h2>
          <p className="text-text-light/70 text-[18px] max-w-[600px] mx-auto mb-8">
            Premier échange gratuit. Devis détaillé sous 48h. Livré en 3 semaines.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" arrow>
              Démarrer mon projet
            </Button>
            <Link
              href="/blog"
              className="btn btn-secondary !border-white/30 !text-text-light hover:!bg-white hover:!text-primary hover:!border-white"
            >
              Lire nos ressources
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-sora font-bold text-primary text-[clamp(28px,3.5vw,40px)] leading-none mb-2 tracking-tight">
        {value}
      </div>
      <div className="text-[12px] text-text-muted font-medium uppercase tracking-wider">{label}</div>
    </div>
  );
}
