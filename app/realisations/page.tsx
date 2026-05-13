import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { realisations } from "@/lib/data";
import { RealMockup } from "@/components/realisations/RealMockup";

export const metadata: Metadata = {
  title: "Réalisations — Sites web livrés",
  description:
    "Découvrez les sites web que nous avons conçus et livrés pour des PME en France. Cas clients détaillés avec résultats mesurables.",
};

export default function RealisationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 lg:pt-28 bg-bg-light text-center">
        <div className="absolute top-1/5 right-[5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(255,123,71,0.07)_0%,transparent_70%)] z-0" />
        <Container className="relative z-10">
          <span className="section-eyebrow">Réalisations</span>
          <h1 className="text-primary mb-5">Nos réalisations</h1>
          <p className="text-text-muted text-[19px] max-w-[700px] mx-auto leading-relaxed">
            Des projets livrés à des PME comme la vôtre. Sans Photoshop, sans habillage, sans esbroufe — des sites en ligne, avec des résultats mesurables.
          </p>
        </Container>
      </section>

      {/* Contenu */}
      <section className="py-16">
        <Container>
          {/* Filtres (visuels uniquement, non fonctionnels) */}
          <div className="flex flex-wrap gap-2.5 justify-center mb-14">
            {["Tous", "Commerce local", "Services BtoB", "E-commerce", "Industrie"].map((filter, idx) => (
              <button
                key={filter}
                className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all ${
                  idx === 0
                    ? "bg-primary text-white border-primary"
                    : "bg-bg-card text-text-dark border-border hover:border-accent hover:text-accent"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Grille des cas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-[1200px] mx-auto">
            {realisations.map((r) => (
              <Link
                key={r.slug}
                href={`/realisations/${r.slug}`}
                className="group block bg-bg-card border border-border rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-accent"
              >
                <RealMockup style={r.mockupStyle} client={r.client} />
                <div className="p-7 px-7">
                  <div className="text-[12px] font-semibold text-accent uppercase tracking-wider mb-2.5">
                    {r.sector} · {r.projectType}
                  </div>
                  <h4 className="text-primary text-[19px] mb-2">{r.client}</h4>
                  <p className="text-sm text-text-muted mb-4 leading-relaxed">{r.description}</p>
                  <div className="pt-4 border-t border-border">
                    <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                      → {r.result}
                    </span>
                  </div>
                </div>
              </Link>
            ))}

            {/* Emplacement pour futurs cas */}
            <div className="bg-bg-card border border-border rounded-3xl overflow-hidden opacity-50">
              <div className="aspect-[16/10] flex items-center justify-center bg-bg-warm text-text-muted">
                <div className="text-center">
                  <div className="text-3xl mb-1">+</div>
                  <div className="text-xs uppercase tracking-wider">Bientôt</div>
                </div>
              </div>
              <div className="p-7">
                <div className="text-[12px] font-semibold text-accent uppercase tracking-wider mb-2.5">
                  Industrie · Refonte de site
                </div>
                <h4 className="text-primary text-[19px] mb-2">Nouveau cas client</h4>
                <p className="text-sm text-text-muted leading-relaxed">
                  Emplacement extensible pour les prochains projets livrés.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA bas */}
      <section className="bg-bg-dark text-text-light py-20 text-center">
        <Container>
          <h2 className="text-text-light mb-4">Votre projet pourrait être le prochain</h2>
          <p className="text-text-light/70 text-[18px] max-w-[600px] mx-auto mb-8">
            3 semaines pour un site qui vous ressemble, qui se charge vite et qui vous trouve sur Google. Devis sous 48h.
          </p>
          <Button href="/#contact" variant="primary" arrow>
            Démarrer mon projet
          </Button>
        </Container>
      </section>
    </>
  );
}
