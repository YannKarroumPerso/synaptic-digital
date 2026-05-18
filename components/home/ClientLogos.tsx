import { Container } from "@/components/ui/Container";

/**
 * Bande de logos clients en niveaux de gris.
 * Pour le démarrage, on utilise des "marques génériques" sectorielles plutôt que
 * de fausses marques. Quand Yann a l'autorisation d'afficher les vrais logos de
 * ses clients existants, on remplace les items par leurs SVG.
 */
const sectors = [
  { name: "Artisans BTP", short: "ARTISANS" },
  { name: "Restauration", short: "RESTAURANTS" },
  { name: "Commerces locaux", short: "COMMERCES" },
  { name: "Cabinets pros", short: "PROFESSIONS LIBÉRALES" },
  { name: "Tourisme", short: "TOURISME" },
  { name: "Industries", short: "INDUSTRIES" },
];

export function ClientLogos() {
  return (
    <section className="py-12 lg:py-16 border-y border-border bg-bg-card">
      <Container>
        <p className="text-center text-[12px] text-text-muted uppercase tracking-wider mb-6">
          Ils nous font confiance, par secteur
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 opacity-70">
          {sectors.map((s) => (
            <div
              key={s.short}
              className="text-[15px] font-bold tracking-[0.04em] text-primary/70"
              title={s.name}
            >
              {s.short}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
