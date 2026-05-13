import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { realisations, getRealisationBySlug } from "@/lib/data";
import { RealMockup } from "@/components/realisations/RealMockup";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return realisations.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const r = getRealisationBySlug(params.slug);
  if (!r) return { title: "Cas non trouvé" };
  return {
    title: `${r.client} — Cas client`,
    description: r.description,
  };
}

export default function RealisationDetail({ params }: PageProps) {
  const r = getRealisationBySlug(params.slug);
  if (!r) notFound();

  return (
    <>
      {/* Hero du cas */}
      <section className="relative overflow-hidden py-16 lg:pt-16 lg:pb-20 bg-bg-light">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,123,71,0.08)_0%,transparent_70%)] z-0" />
        <Container className="relative z-10">
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-muted mb-7 hover:text-accent transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Voir toutes les réalisations
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
            <div>
              <div className="text-[13px] font-semibold text-accent uppercase tracking-wider mb-4">
                Cas client · {r.sector}
              </div>
              <h1 className="text-primary mb-4">{r.client}</h1>
              <p className="text-[20px] text-text-muted leading-snug mb-8 max-w-[560px]">
                {r.description}
              </p>
              <div className="flex flex-wrap gap-6 pt-7 border-t border-border">
                <MetaItem label="Type de projet" value={r.projectType} />
                <MetaItem label="Délai de livraison" value={r.duration} />
                <MetaItem label="Année" value={r.year} />
                <MetaItem
                  label="Site en ligne"
                  value={r.liveUrl + " →"}
                  isLink
                />
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl border border-border">
              <RealMockup style={r.mockupStyle} client={r.client} size="large" />
            </div>
          </div>
        </Container>
      </section>

      {/* Bandeau résultats */}
      <section className="bg-bg-dark text-text-light py-16">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 text-center">
            {r.results.map((result) => (
              <div key={result.label}>
                <div className="font-sora font-bold text-accent leading-none mb-2.5 tracking-tight" style={{ fontSize: "clamp(36px, 4vw, 52px)" }}>
                  {result.value}
                </div>
                <div className="text-[13px] text-text-light/70 font-medium uppercase tracking-wider">
                  {result.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contenu */}
      <section className="py-24">
        <Container>
          <div className="max-w-[780px] mx-auto space-y-16">
            <div>
              <h2 className="text-primary mb-6">Le contexte</h2>
              <p className="text-[17px] leading-relaxed text-text-dark">{r.context}</p>
            </div>
            <div>
              <h2 className="text-primary mb-6">Ce qu&apos;on a fait</h2>
              <p className="text-[17px] leading-relaxed text-text-dark mb-8">
                On a tout repris. Pas un lifting, une vraie refonte de bout en bout. En {r.duration}, du brief à la mise en ligne.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
                {r.whatWeDid.map((item) => (
                  <div
                    key={item.title}
                    className="bg-bg-light border-l-[3px] border-accent rounded-r-xl px-6 py-5"
                  >
                    <h4 className="text-[13px] font-semibold text-accent uppercase tracking-wider mb-2">
                      {item.title}
                    </h4>
                    <p className="text-[15px] leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-primary mb-6">Les résultats, après mise en ligne</h2>
              <p className="text-[17px] leading-relaxed text-text-dark">{r.outcome}</p>
            </div>
          </div>

          {/* Citation client */}
          <div className="relative max-w-[900px] mx-auto bg-bg-warm rounded-[32px] p-12 md:p-14 my-20">
            <span className="absolute -top-2.5 left-8 font-sora text-accent text-[140px] leading-none opacity-30">&ldquo;</span>
            <blockquote className="relative z-10 font-sora font-semibold text-primary leading-snug mb-6" style={{ fontSize: "clamp(20px, 2.4vw, 26px)" }}>
              {r.testimonial.quote}
            </blockquote>
            <div className="flex items-center gap-3.5 relative z-10">
              <div className="w-13 h-13 rounded-full bg-gradient-to-br from-accent to-accent-soft text-white flex items-center justify-center font-bold text-base p-3">
                {r.testimonial.initials}
              </div>
              <div>
                <div className="text-base font-semibold text-primary">{r.testimonial.author}</div>
                <div className="text-[13px] text-text-muted">{r.testimonial.role}</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-bg-dark text-text-light py-20 text-center">
        <Container>
          <h2 className="text-text-light mb-4">Un projet similaire en tête ?</h2>
          <p className="text-text-light/70 text-[18px] mb-8">
            3 semaines pour un site qui vous ressemble. Devis sous 48h, sans engagement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/#contact" variant="primary" arrow>
              Discuter de votre projet
            </Button>
            <Button href="/realisations" variant="secondary">
              ← Voir toutes les réalisations
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

function MetaItem({ label, value, isLink }: { label: string; value: string; isLink?: boolean }) {
  return (
    <div className="text-[13px]">
      <span className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">
        {label}
      </span>
      {isLink ? (
        <a href="#" className="font-sora font-semibold text-accent hover:underline">
          {value}
        </a>
      ) : (
        <span className="font-sora font-semibold text-primary">{value}</span>
      )}
    </div>
  );
}
