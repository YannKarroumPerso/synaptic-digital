import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { pricing } from "@/lib/data";
import { Check } from "lucide-react";

export function Pricing() {
 return (
 <Section className="bg-bg-card">
 <Container>
 <SectionHeader
 eyebrow="Combien ça coûte ?"
 title="Des fourchettes claires, pas figées"
 description="Le bon prix dépend de votre projet. Voici des ordres de grandeur pour vous repérer."
 />
 <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1100px] mx-auto">
 {pricing.map((p) => (
 <div
 key={p.title}
 className={`relative rounded-3xl p-9 px-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
 p.featured
 ? "bg-bg-card border-2 border-accent shadow-[0_16px_48px_rgba(255,123,71,0.15)]"
 : "bg-bg-light border border-border"
 }`}
 >
 {p.featured && (
 <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
 Le plus demandé
 </div>
 )}
 <h4 className="text-primary text-[18px] mb-3">{p.title}</h4>
 <div className="font-sora font-bold text-accent text-[32px] tracking-tight mb-1">
 {p.range}
 </div>
 <div className="text-[13px] text-text-muted mb-5 pb-5 border-b border-border">
 {p.duration}
 </div>
 <ul className="space-y-2.5">
 {p.features.map((feature) => (
 <li key={feature} className="flex items-start gap-3 text-sm text-text-dark leading-snug">
 <Check size={16} className="text-green-600 shrink-0 mt-0.5" strokeWidth={3} />
 <span>{feature}</span>
 </li>
 ))}
 </ul>
 </div>
 ))}
 </div>
 <p className="text-center mt-10 text-sm text-text-muted italic">
 Pas figé, chaque projet est calibré selon votre besoin. Devis détaillé sous 48h.
 </p>
 </Container>
 </Section>
 );
}
