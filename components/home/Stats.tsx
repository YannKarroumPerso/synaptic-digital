import { Container } from "@/components/ui/Container";
import { stats } from "@/lib/data";

export function Stats() {
  return (
    <section className="bg-bg-card border-y border-border py-16">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-sora font-bold text-primary leading-none mb-2.5 tracking-tight" style={{ fontSize: "clamp(40px, 4.5vw, 60px)" }}>
                {stat.value}
                <span className="text-accent text-[0.55em] font-semibold">{stat.unit}</span>
              </div>
              <div className="text-[13px] text-text-muted font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
