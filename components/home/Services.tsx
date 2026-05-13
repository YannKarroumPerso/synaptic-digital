import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services } from "@/lib/data";

export function Services() {
  return (
    <Section id="services">
      <Container>
        <SectionHeader
          eyebrow="Ce qu'on fait"
          title="Le bon site, pour le bon projet"
          description="4 formats principaux, calibrés pour les petites PME qui veulent un site sérieux sans y passer 6 mois."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-bg-card border border-border rounded-3xl p-9 px-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-accent overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-accent/[0.04] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-bg-warm rounded-2xl flex items-center justify-center mb-6 text-accent">
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  <h3 className="text-primary mb-3">{service.title}</h3>
                  <p className="text-text-muted text-[15px] leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <div className="pt-4 border-t border-border text-sm text-text-muted">
                    À partir de{" "}
                    <strong className="font-sora font-bold text-accent text-[17px]">
                      {service.price}
                    </strong>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:underline group"
          >
            Voir le détail de chaque service
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
