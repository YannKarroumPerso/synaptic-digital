import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { methodSteps } from "@/lib/data";

export function Method() {
  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="Comment ça se passe"
          title="4 étapes claires, zéro zone d'ombre"
          description="Une méthode rodée pour aller vite sans rien laisser au hasard. Vous savez à chaque étape où on en est et ce qui vient ensuite."
        />
        <div className="max-w-[880px] mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-[35px] top-8 bottom-8 w-0.5 bg-border z-0 hidden sm:block" />
          {methodSteps.map((step, idx) => (
            <div key={step.number} className="flex gap-7 mb-8 last:mb-0 relative z-10">
              <div className="w-[72px] h-[72px] bg-bg-card border-2 border-accent rounded-full flex items-center justify-center font-sora font-bold text-[22px] text-accent shrink-0 shadow-md">
                {step.number}
              </div>
              <div className="flex-1 bg-bg-card border border-border rounded-[20px] px-8 py-7 mt-1 shadow-sm">
                <div className="text-[13px] font-semibold text-accent uppercase tracking-wider mb-2">
                  {step.duration}
                </div>
                <h3 className="text-primary text-[24px] mb-2.5">{step.title}</h3>
                <p className="text-text-muted text-[15px] leading-relaxed mb-5">
                  {step.description}
                </p>
                <div className="border-t border-border pt-4 flex flex-col gap-2.5">
                  <DelivRow label="Vous fournissez" value={step.yousProvide} />
                  <DelivRow label="On livre" value={step.weDeliver} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function DelivRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-3 text-sm">
      <span className="text-[12px] font-semibold text-accent uppercase tracking-wider min-w-[110px] sm:min-w-[110px]">
        {label}
      </span>
      <span className="text-text-dark">{value}</span>
    </div>
  );
}
