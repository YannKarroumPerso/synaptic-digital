import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { realisations } from "@/lib/data";
import { RealMockup } from "@/components/realisations/RealMockup";

export function RealisationsTeaser() {
  return (
    <Section id="realisations" className="bg-bg-light">
      <Container>
        <SectionHeader
          eyebrow="Réalisations"
          title="Quelques projets récents"
          description="Des sites livrés pour des PME comme la vôtre. Pas de captures Photoshopées : des projets en ligne, avec des résultats concrets."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {realisations.slice(0, 3).map((r) => (
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
                <div className="text-sm text-text-muted flex items-center gap-1.5">
                  <span className="text-accent font-bold">→</span> {r.result}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Button href="/realisations" variant="secondary" arrow>
            Voir toutes les réalisations
          </Button>
        </div>
      </Container>
    </Section>
  );
}
