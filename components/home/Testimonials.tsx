import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { testimonials } from "@/lib/data";

export function Testimonials() {
 return (
 <Section className="bg-bg-light">
 <Container>
 <SectionHeader
 eyebrow="Ils en parlent"
 title="Ce que disent nos clients"
 description="Pas des verbatim générés ou écrits par nous. Voici ce que nos clients PME disent vraiment du travail livré."
 />
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
 {testimonials.map((t) => (
 <div
 key={t.author}
 className="bg-bg-card border border-border rounded-3xl p-8 px-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
 >
 <div className="text-accent text-lg tracking-[2px] mb-4">★★★★★</div>
 <p className="text-[17px] leading-relaxed text-text-dark mb-6 flex-1">
 &laquo; {t.text} &raquo;
 </p>
 <div className="flex items-center gap-3.5 pt-5 border-t border-border">
 <div
 className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.gradient} text-white flex items-center justify-center font-bold text-[15px] shrink-0`}
 >
 {t.initials}
 </div>
 <div>
 <div className="text-[15px] font-semibold text-primary">{t.author}</div>
 <div className="text-[13px] text-text-muted">{t.role}</div>
 </div>
 </div>
 </div>
 ))}
 </div>
 <p className="text-center mt-10 text-[13px] text-text-muted">
 💡 <em>Témoignages placeholder, à remplacer par les vrais avec accord d&apos;utilisation.</em>
 </p>
 </Container>
 </Section>
 );
}
