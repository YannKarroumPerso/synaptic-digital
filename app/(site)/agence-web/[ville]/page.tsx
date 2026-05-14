import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageSchemas } from "@/components/seo/StructuredData";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { getVilleBySlug, getActiveVilles, type ProfilProspect } from "@/lib/villes-data";
import { services } from "@/lib/data";
import { MapPin, ArrowRight, Search, Target, Users, Compass } from "lucide-react";

interface PageProps {
 params: { ville: string };
}

export async function generateStaticParams() {
 return getActiveVilles().map((v) => ({ ville: v.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
 const ville = getVilleBySlug(params.ville);
 if (!ville || !ville.active) return { title: "Page introuvable" };

 return {
 title: `Création site web ${ville.nom}, Agence web ${ville.departement}`,
 description: `Agence digitale à ${ville.nom} : sites vitrine, e-commerce, refonte pour PME locales. Livré en 3 semaines, à partir de 1 500 €. SEO local intégré.`,
 keywords: [
 `création site web ${ville.nom}`,
 `agence web ${ville.nom}`,
 `agence digitale ${ville.nom}`,
 `site internet ${ville.nom}`,
 `référencement local ${ville.nom}`,
 `création site internet ${ville.departement}`,
 ],
 openGraph: {
 title: `Création site web ${ville.nom}, Synaptic Digital`,
 description: `Agence web pour PME de ${ville.nom} et ${ville.departement}. Sites livrés en 3 semaines.`,
 },
 };
}

export default function AgenceWebVillePage({ params }: PageProps) {
 const ville = getVilleBySlug(params.ville);
 if (!ville || !ville.active) notFound();

 return (
 <>
 {/* HERO */}
 <section className="relative overflow-hidden pt-16 pb-12 lg:pt-20 lg:pb-14 bg-bg-light">
 <div className="absolute -top-40 -right-32 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,123,71,0.08)_0%,transparent_70%)] z-0" />
 <Container className="relative z-10">
 <div className="max-w-[820px] mx-auto">
 <div className="inline-flex items-center gap-2 bg-bg-card border border-border rounded-full px-3.5 py-1.5 text-[13px] font-medium text-text-dark mb-5">
 <MapPin size={13} className="text-accent" />
 <span>{ville.nomComplet} · {ville.bassinTaille}</span>
 </div>
 <h1 className="text-primary mb-6">
 Création de site web à <span className="text-accent">{ville.nom}</span>.
 </h1>
 <p className="text-[20px] text-text-muted leading-relaxed mb-8">
 {ville.intro}
 </p>
 <div className="flex flex-wrap gap-3">
 <Button href="/devis" variant="primary" arrow>
 Démarrer mon projet
 </Button>
 <Button href="/services" variant="secondary">
 Voir tous les services
 </Button>
 </div>
 </div>
 </Container>
 </section>

 {/* OBSERVATION MARCHÉ, l'angle business, pas Wikipedia */}
 <Section className="bg-bg-card">
 <Container narrow>
 <div className="flex items-center gap-3 mb-5 text-text-muted text-sm">
 <Search size={16} className="text-accent" />
 <span className="uppercase tracking-wider font-medium">Ce qu&apos;on observe</span>
 </div>
 <h2 className="text-primary mb-5">Le marché web à {ville.nom} aujourd&apos;hui</h2>
 <p className="text-[18px] text-text-dark leading-relaxed mb-5">
 {ville.observationMarche}
 </p>
 <p className="text-[17px] text-text-muted leading-relaxed">
 {ville.pourquoiCeMarche}
 </p>
 </Container>
 </Section>

 {/* PROFILS, qui on accompagne concrètement (pas "secteurs économiques") */}
 <Section className="bg-bg-light">
 <Container>
 <div className="text-center max-w-[720px] mx-auto mb-12">
 <span className="section-eyebrow">Qui on accompagne</span>
 <h2 className="text-primary mb-4">Profils typiques qu&apos;on accompagne à {ville.nom}</h2>
 <p className="text-text-muted text-[18px] leading-relaxed">
 Pas un secteur en particulier, un type de besoin. Si votre profil ressemble à l&apos;un de ces 3, on saura quoi vous proposer.
 </p>
 </div>
 <div className="grid md:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
 {ville.profils.map((p, i) => (
 <ProfilCard key={p.type} profil={p} index={i + 1} />
 ))}
 </div>
 </Container>
 </Section>

 {/* SERVICES, réutilise data.ts */}
 <Section className="bg-bg-card">
 <Container>
 <div className="text-center mb-12 max-w-[720px] mx-auto">
 <span className="section-eyebrow">Nos services</span>
 <h2 className="text-primary mb-4">Tout ce qu&apos;on fait, pour {ville.nom} et ailleurs</h2>
 <p className="text-text-muted text-[18px] leading-relaxed">
 {ville.distance} Les tarifs sont les mêmes quel que soit le lieu, l&apos;intervention idem.
 </p>
 </div>
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1100px] mx-auto">
 {services.map((service) => {
 const Icon = service.icon;
 return (
 <Link
 key={service.slug}
 href={`/services#${service.slug}`}
 className="group bg-bg-light border border-border rounded-3xl p-7 transition-all hover:-translate-y-1 hover:shadow-md hover:border-accent flex flex-col"
 >
 <div className="w-12 h-12 bg-bg-warm rounded-2xl flex items-center justify-center text-accent mb-5">
 <Icon size={22} />
 </div>
 <h3 className="text-primary text-[18px] mb-2">{service.title}</h3>
 <p className="text-sm text-text-muted leading-relaxed flex-1 mb-4">
 {service.description}
 </p>
 <div className="pt-4 border-t border-border text-sm text-text-muted mt-auto">
 À partir de <strong className="text-accent font-bold">{service.price}</strong>
 </div>
 </Link>
 );
 })}
 </div>
 </Container>
 </Section>

 {/* MÉTHODE EXPRESS */}
 <Section className="bg-bg-warm">
 <Container narrow>
 <div className="text-center mb-12">
 <span className="section-eyebrow">Comment ça se passe</span>
 <h2 className="text-primary mb-4">Notre méthode pour livrer en 3 semaines</h2>
 <p className="text-text-muted text-[18px] leading-relaxed">
 Une chaîne de production rodée, vous savez à chaque étape où on en est.
 </p>
 </div>
 <div className="grid sm:grid-cols-4 gap-4">
 {[
 { n: "01", t: "Comprendre", d: "Brief structuré · 2-3 jours" },
 { n: "02", t: "Concevoir", d: "Maquettes desktop+mobile · 5-7 jours" },
 { n: "03", t: "Construire", d: "Dev + perf + SEO · 8-12 jours" },
 { n: "04", t: "Lancer", d: "Mise en ligne + suivi 30j · 1-2 jours" },
 ].map((s) => (
 <div key={s.n} className="bg-bg-card border border-border rounded-2xl p-5 text-center">
 <div className="font-sora font-bold text-accent text-[28px] leading-none mb-2">
 {s.n}
 </div>
 <h4 className="text-primary text-[16px] mb-2">{s.t}</h4>
 <p className="text-[12px] text-text-muted leading-relaxed">{s.d}</p>
 </div>
 ))}
 </div>
 <div className="text-center mt-10">
 <Link href="/agence" className="inline-flex items-center gap-2 text-accent font-semibold hover:underline">
 Voir notre approche en détail
 <ArrowRight size={16} />
 </Link>
 </div>
 </Container>
 </Section>

 {/* MAILLAGE, autres villes */}
 <Section className="bg-bg-light tight">
 <Container>
 <div className="text-center mb-8">
 <h2 className="text-primary mb-2 text-[26px]">On intervient aussi à</h2>
 <p className="text-text-muted text-[15px]">
 Charente et Charente-Maritime, premier échange à distance, déplacement gratuit pour cadrer.
 </p>
 </div>
 <div className="flex flex-wrap gap-3 justify-center max-w-[800px] mx-auto">
 {getActiveVilles()
 .filter((v) => v.slug !== ville.slug)
 .map((v) => (
 <Link
 key={v.slug}
 href={`/agence-web/${v.slug}`}
 className="inline-flex items-center gap-2 bg-bg-card border border-border rounded-full px-5 py-2.5 text-sm font-medium text-text-dark hover:border-accent hover:text-accent transition-all"
 >
 <MapPin size={14} />
 Agence web {v.nom}
 </Link>
 ))}
 </div>
 </Container>
 </Section>

 {/* CTA */}
 <section className="bg-bg-dark text-text-light py-16 text-center">
 <Container>
 <h2 className="text-text-light mb-4">Un projet de site à {ville.nom} ?</h2>
 <p className="text-text-light/70 text-[18px] max-w-[600px] mx-auto mb-8">
 Premier échange gratuit. Devis détaillé sous 48h. Livré en 3 semaines.
 </p>
 <div className="flex flex-wrap justify-center gap-4">
 <Button href="/devis" variant="primary" arrow>
 Démarrer mon projet
 </Button>
 <Link
 href="/blog"
 className="btn btn-secondary !border-white/30 !text-text-light hover:!bg-white hover:!text-primary hover:!border-white"
 >
 Lire nos ressources
 </Link>
 </div>
 </Container>
 </section>
 </>
 );
}

function ProfilCard({ profil, index }: { profil: ProfilProspect; index: number }) {
 return (
 <article className="bg-bg-card border border-border rounded-3xl p-7 flex flex-col">
 <div className="flex items-center gap-3 mb-4">
 <div className="font-sora font-bold text-accent text-[32px] leading-none">
 {String(index).padStart(2, "0")}
 </div>
 <div className="h-px flex-1 bg-border" />
 </div>
 <h3 className="text-primary text-[19px] leading-tight mb-2">{profil.type}</h3>
 <p className="text-sm text-text-muted leading-relaxed mb-4 italic">{profil.exemple}</p>
 <div className="pt-4 border-t border-border text-[14px] text-text-dark leading-relaxed mt-auto">
 <span className="block text-[11px] font-semibold text-accent uppercase tracking-wider mb-1.5">
 Ce qu&apos;on lui apporte
 </span>
 {profil.besoin}
 </div>
 </article>
 );
}
