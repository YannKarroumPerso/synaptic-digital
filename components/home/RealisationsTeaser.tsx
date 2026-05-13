import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { realisations } from "@/lib/data";

export function RealisationsTeaser() {
  return (
    <Section id="realisations" className="bg-bg-light">
      <Container>
        <SectionHeader
          eyebrow="Réalisations"
          title="Quelques projets récents"
          description="Un échantillon de ce qu'on a livré ces derniers mois — du média éditorial à la plateforme SaaS générative, en passant par les sites de marque."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
          {realisations.map((real) => (
            <div
              key={real.name}
              className="group bg-bg-card border border-border rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-accent"
            >
              <div className="aspect-[16/10] bg-bg-warm border-b border-border overflow-hidden relative">
                <Image
                  src={real.image}
                  alt={`Capture de ${real.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <div className="text-[12px] font-semibold text-accent uppercase tracking-wider mb-2">
                  {real.category}
                </div>
                <h4 className="text-primary text-[19px] mb-2">{real.name}</h4>
                <p className="text-sm text-text-muted leading-relaxed">{real.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
