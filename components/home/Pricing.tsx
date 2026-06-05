import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Scale, FileText, ShieldCheck, ArrowRight } from "lucide-react";

const pillars = [
  {
    Icon: Scale,
    title: "Compétitif vs le marché français",
    text: "Tarif aligné sur le standard agence française PME. Systématiquement en dessous des cabinets parisiens, toujours au-dessus du freelance qui plante son client à mi-projet. On préfère perdre face à plus cher que face à plus sérieux.",
  },
  {
    Icon: FileText,
    title: "Devis détaillé, ligne par ligne",
    text: "Vous recevez sous 48h un devis qui ventile chaque poste : design, dev, SEO, contenu, hébergement, suivi. Vous savez exactement ce que vous payez, et vous pouvez ajuster.",
  },
  {
    Icon: ShieldCheck,
    title: "Engagement de résultat, zéro coût caché",
    text: "Pas de surprise en cours de route. Le prix annoncé est le prix livré. Si on rate le délai, on offre un mois de suivi supplémentaire. C'est écrit dans le devis.",
  },
];

export function Pricing() {
  return (
    <Section className="bg-bg-card">
      <Container>
        <SectionHeader
          eyebrow="Combien ça coûte ?"
          title="Compétitif. Transparent. Sans effet surprise."
          description="Pas de grille standardisée qui force votre projet dans une case trop petite ou trop grande. On calibre chaque devis à votre besoin réel, sur 3 principes simples."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1100px] mx-auto">
          {pillars.map((p) => {
            const Icon = p.Icon;
            return (
              <div
                key={p.title}
                className="bg-bg-light border border-border rounded-3xl p-9 px-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-accent"
              >
                <div className="w-14 h-14 bg-bg-warm rounded-2xl flex items-center justify-center mb-6 text-accent">
                  <Icon size={24} strokeWidth={2} />
                </div>
                <h4 className="text-primary text-[19px] mb-3 leading-snug">{p.title}</h4>
                <p className="text-text-muted text-[15px] leading-relaxed">{p.text}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-[760px] mx-auto mt-14 rounded-3xl bg-bg-light border border-border p-10 text-center">
          <h3 className="text-primary text-[24px] md:text-[28px] mb-3 leading-tight">
            Curieux de savoir combien votre projet coûterait ?
          </h3>
          <p className="text-text-muted text-[16px] leading-relaxed mb-7 max-w-[520px] mx-auto">
            Un échange de 30 minutes, un devis détaillé sous 48h, sans engagement. Vous avez votre chiffre précis avant de décider quoi que ce soit.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-full hover:bg-accent/90 transition-colors"
            >
              Demander un devis gratuit
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/blog/combien-coute-site-web-pme"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:underline group"
            >
              Lire le guide complet sur les prix
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
