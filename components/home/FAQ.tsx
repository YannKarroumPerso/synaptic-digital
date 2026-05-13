import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { faq } from "@/lib/data";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  return (
    <Section className="bg-bg-light">
      <Container narrow>
        <SectionHeader
          eyebrow="FAQ"
          title="Vos questions, nos réponses"
          description={undefined}
        />
        <p className="text-center text-text-muted text-[18px] -mt-12 mb-16">
          Les réponses aux questions qu&apos;on nous pose le plus souvent. Une autre question ?{" "}
          <Link href="#contact" className="text-accent font-semibold">
            Écrivez-nous
          </Link>
          .
        </p>
        <div className="bg-bg-card border border-border rounded-3xl overflow-hidden">
          {faq.map((item, idx) => (
            <details
              key={idx}
              className="group border-b border-border last:border-0"
              open={idx === 0}
            >
              <summary className="list-none cursor-pointer py-6 px-7 flex items-center justify-between gap-4 font-semibold text-[17px] text-primary hover:bg-bg-warm transition-colors">
                <span>{item.question}</span>
                <ChevronDown
                  size={20}
                  className="text-accent shrink-0 transition-transform duration-300 group-open:rotate-180"
                  strokeWidth={2.5}
                />
              </summary>
              <div className="px-7 pb-6 text-text-muted leading-relaxed">{item.answer}</div>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
