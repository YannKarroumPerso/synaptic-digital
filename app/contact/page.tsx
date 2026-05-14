import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { Mail, Phone, MapPin, Clock, FileText, MessageCircle, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
 title: "Contact, Parlons de votre projet",
 description:
 "Premier échange gratuit, sans engagement. On vous répond sous 48h, on cale 30 minutes ensemble, et si on est d'accord on vous envoie une proposition détaillée sous 5 jours.",
};

export default function ContactPage() {
 return (
 <>
 {/* HERO */}
 <section className="relative overflow-hidden pt-20 pb-12 lg:pt-24 lg:pb-16 bg-bg-light">
 <div className="absolute -top-40 -right-32 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,123,71,0.08)_0%,transparent_70%)] z-0" />
 <Container className="relative z-10">
 <div className="max-w-[720px] mx-auto text-center">
 <span className="section-eyebrow">Contact</span>
 <h1 className="text-primary mb-6">
 Parlons de votre projet.
 </h1>
 <p className="text-[20px] text-text-muted leading-relaxed">
 Premier échange gratuit, sans engagement. On répond sous 48h, on cale 30 minutes pour comprendre votre besoin, puis on vous envoie une proposition détaillée sous 5 jours si on avance ensemble.
 </p>
 </div>
 </Container>
 </section>

 {/* FORMULAIRE + PROCESS */}
 <Section className="bg-bg-card">
 <Container>
 <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start max-w-[1100px] mx-auto">
 {/* Colonne gauche : process + canaux directs */}
 <div>
 <h2 className="text-primary mb-3">Comment ça se passe</h2>
 <p className="text-text-muted text-[17px] leading-relaxed mb-8">
 Notre approche pour ne pas vous faire perdre votre temps.
 </p>

 <div className="space-y-5 pb-8 mb-8 border-b border-border">
 <ContactStep
 Icon={Clock}
 title="Sous 48h"
 description="Vous recevez un email de réponse, avec quelques questions ciblées si besoin."
 />
 <ContactStep
 Icon={MessageCircle}
 title="30 minutes"
 description="Un échange visio ou téléphone pour bien cadrer votre projet."
 />
 <ContactStep
 Icon={FileText}
 title="Sous 5 jours"
 description="Proposition détaillée avec délai, livrables et tarif fermé, si on est partants."
 />
 </div>

 <h3 className="text-primary text-[18px] mb-4">Autres canaux</h3>
 <div className="space-y-3">
 <ChannelLink
 Icon={Mail}
 label="Email"
 value="contact@synaptic-digital.fr"
 href="mailto:contact@synaptic-digital.fr"
 />
 <ChannelLink
 Icon={MapPin}
 label="Adresse"
 value="33 rue des Petits Champs, 16400 Vœuil-et-Giget"
 />
 </div>
 </div>

 {/* Colonne droite : formulaire */}
 <div>
 <h2 className="text-primary mb-3">Le formulaire</h2>
 <p className="text-text-muted text-[17px] leading-relaxed mb-8">
 Quelques lignes suffisent. On revient vers vous sous 48h, c&apos;est garanti.
 </p>
 <ContactForm variant="light" />
 </div>
 </div>
 </Container>
 </Section>

 {/* FAQ CONTACT */}
 <Section className="bg-bg-light">
 <Container narrow>
 <SectionHeader
 eyebrow="Questions fréquentes"
 title="Avant de nous écrire"
 description="Les questions qu'on nous pose souvent en amont d'un projet."
 />
 <div className="bg-bg-card border border-border rounded-3xl overflow-hidden">
 <ContactFaqItem
 question="Le premier échange est-il vraiment gratuit ?"
 answer="Oui, sans engagement. Les 30 minutes initiales sont là pour comprendre votre projet. Si on n'est pas le bon prestataire, on vous le dit franchement et on peut même vous orienter ailleurs."
 />
 <ContactFaqItem
 question="Combien de temps avant de recevoir un devis ?"
 answer="Réponse à votre email sous 48h. Si on cale un échange, on vous envoie la proposition détaillée sous 5 jours ouvrés après le call (délai, livrables, tarif fermé, conditions)."
 />
 <ContactFaqItem
 question="Vous travaillez avec quels secteurs ?"
 answer="On travaille principalement avec des petites PME tous secteurs : commerce local, services BtoB, e-commerce, restauration, conseil, artisanat structuré. Pas de spécialisation sectorielle stricte, l'important c'est que votre activité ait besoin d'un site qui performe."
 />
 <ContactFaqItem
 question="Vous accompagnez après la mise en ligne ?"
 answer="30 jours de suivi gratuit inclus dans chaque projet (correction, ajustements). Au-delà, on peut proposer un forfait évolution mensuel ou intervenir à la demande."
 />
 <ContactFaqItem
 question="Vous travaillez à distance ou en présentiel ?"
 answer="À distance, partout en France (et Belgique, Suisse, Luxembourg). On utilise Notion/Slack pour le suivi de projet et on fait des points visio réguliers. Pas de déplacement nécessaire."
 />
 </div>
 </Container>
 </Section>
 </>
 );
}

function ContactStep({
 Icon,
 title,
 description,
}: {
 Icon: typeof Clock;
 title: string;
 description: string;
}) {
 return (
 <div className="flex items-start gap-4">
 <div className="w-[52px] h-[52px] bg-accent/12 rounded-2xl flex items-center justify-center shrink-0 text-accent">
 <Icon size={22} />
 </div>
 <div className="flex-1 pt-1">
 <div className="font-sora font-semibold text-[17px] text-primary leading-tight mb-1">
 {title}
 </div>
 <div className="text-[14px] text-text-muted leading-relaxed">{description}</div>
 </div>
 </div>
 );
}

function ChannelLink({
 Icon,
 label,
 value,
 href,
}: {
 Icon: typeof Mail;
 label: string;
 value: string;
 href?: string;
}) {
 const content = (
 <div className="flex items-start gap-3.5 p-4 rounded-2xl border border-border bg-bg-light hover:border-accent transition-colors">
 <Icon size={18} className="text-accent mt-0.5 shrink-0" />
 <div className="flex-1 min-w-0">
 <div className="text-[12px] font-semibold text-text-muted uppercase tracking-wider mb-0.5">
 {label}
 </div>
 <div className="text-[15px] text-text-dark break-words">{value}</div>
 </div>
 </div>
 );
 if (href) return <a href={href} className="block">{content}</a>;
 return content;
}

function ContactFaqItem({ question, answer }: { question: string; answer: string }) {
 return (
 <details className="group border-b border-border last:border-0">
 <summary className="list-none cursor-pointer p-6 flex items-center justify-between gap-4 font-semibold text-[17px] text-primary hover:bg-bg-warm transition-colors">
 <span className="flex items-center gap-3">
 <HelpCircle size={18} className="text-accent shrink-0" />
 {question}
 </span>
 <span className="text-accent text-xl leading-none transition-transform group-open:rotate-45">+</span>
 </summary>
 <div className="px-6 pb-6 pl-[58px] text-text-muted leading-relaxed">{answer}</div>
 </details>
 );
}
