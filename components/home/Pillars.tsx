import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { pillars } from "@/lib/data";
import { Zap } from "lucide-react";

export function Pillars() {
  return (
    <Section id="approche" className="relative overflow-hidden bg-bg-dark text-text-light">
      <div className="absolute -top-52 -right-24 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,123,71,0.12)_0%,transparent_70%)] z-0" />
      <Container className="relative z-10">
        <SectionHeader
          eyebrow="Notre différence"
          title={
            <>
              Beau, rapide, trouvé sur Google.<br />
              Et livré quand promis.
            </>
          }
          description="La plupart des agences arbitrent entre design, performance et SEO. On refuse l'arbitrage : les trois sont possibles ensemble, à condition d'être méthodique."
          inverted
          wide
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-white/[0.04] border border-white/10 rounded-3xl p-10 px-8 transition-all duration-300 hover:bg-white/[0.08] hover:border-accent hover:-translate-y-1.5"
            >
              <div className="font-sora font-extrabold text-accent text-[56px] leading-none mb-5 tracking-tight">
                {pillar.number}
              </div>
              <h3 className="text-text-light mb-3">{pillar.title}</h3>
              <p className="text-text-light/70 text-[15px] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
        {/* Bannière délai */}
        <div className="bg-gradient-to-br from-accent to-accent-soft rounded-[32px] p-12 flex flex-col md:flex-row items-center gap-8 text-white shadow-[0_24px_64px_rgba(255,123,71,0.25)]">
          <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center text-[56px] shrink-0">
            <Zap size={56} fill="white" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-bold text-white mb-2" style={{ fontSize: "clamp(24px, 2.6vw, 32px)" }}>
              Le tout, livré en 3 à 4 semaines.
            </h3>
            <p className="text-[17px] text-white/90 leading-snug">
              Pas 3 mois. Pas 6 mois. On a industrialisé la méthode pour livrer vite sans bâcler — et vous avez votre site quand vous en avez besoin.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
