import type { Metadata } from "next";
import Link from "next/link";
import { Check, Clock, Zap, Search, Star, ArrowRight } from "lucide-react";
import { LandingForm } from "@/components/landing/LandingForm";
import { LandingMockup } from "@/components/landing/LandingMockup";

export const metadata: Metadata = {
  title: "Devis site web PME, livré en 3 semaines, détaillé sous 48h",
  description:
    "Demandez votre devis gratuit pour un site web professionnel. Sites vitrine, e-commerce, refonte. Devis détaillé sous 48h. Sans engagement.",
};

const benefits = [
  {
    Icon: Clock,
    title: "Livré en 3 semaines",
    text: "Pas 3 mois. Notre méthode rodée livre en 21 jours max, sans bâcler.",
  },
  {
    Icon: Zap,
    title: "Devis détaillé sous 48h",
    text: "Tarif transparent, ventilé poste par poste. Pas de mauvaise surprise en cours de projet.",
  },
  {
    Icon: Search,
    title: "SEO intégré",
    text: "Site optimisé Google dès la mise en ligne. Pas besoin de payer un référenceur après.",
  },
  {
    Icon: Check,
    title: "Suivi 30 jours offert",
    text: "Corrections et ajustements pendant un mois après la livraison.",
  },
];

const testimonials = [
  {
    text: "En 19 jours on avait un site neuf. Deux mois après, on a multiplié par 3 les demandes de devis.",
    author: "Sophie M.",
    role: "Gérante, Commerce local",
  },
  {
    text: "Très clair du début à la fin. Le résultat est exactement ce qu'on voulait, livré dans les délais.",
    author: "Pierre L.",
    role: "Dirigeant, Cabinet conseil",
  },
];

const faqs = [
  {
    q: "Combien coûte vraiment un site web ?",
    a: "Le bon prix dépend de votre projet précis. On vous envoie un devis détaillé sous 48h après notre échange initial, ventilé poste par poste, sans engagement. Vous pouvez aussi consulter notre guide complet sur les prix d un site internet PME en 2026 sur le blog.",
  },
  {
    q: "En combien de temps mon site est-il en ligne ?",
    a: "3 semaines en moyenne pour un site vitrine, 4 semaines pour un e-commerce. C'est notre engagement contractuel. Le délai démarre quand vous nous transmettez vos contenus (textes, photos).",
  },
  {
    q: "Suis-je propriétaire du site à la livraison ?",
    a: "Oui, intégralement. Code source, contenu, design, accès hébergement, tout vous appartient et est transférable. Pas de dépendance à notre agence après livraison.",
  },
  {
    q: "Vous travaillez avec qui ?",
    a: "Petites PME et TPE en France, principalement en Charente, Charente-Maritime et environs. Tous secteurs : commerce, services, restauration, professions libérales, artisanat structuré, e-commerce.",
  },
];

export default function DevisLandingPage() {
  return (
    <>
      {/* HEADER MINIMAL : logo seul, pas de nav (best practice Google Ads) */}
      <header className="border-b border-border bg-bg-light">
        <div className="container-page flex items-center justify-between py-4">
          <Link href="/" aria-label="Retour a l accueil Synaptic Digital" className="font-sora font-extrabold text-[22px] text-primary tracking-tight hover:opacity-80 transition-opacity">
            Synaptic<span className="text-accent">.</span>
          </Link>
        </div>
      </header>

      {/* HERO + FORMULAIRE */}
      <section className="relative overflow-hidden py-10 lg:py-14 bg-bg-light">
        <div className="absolute -top-40 -right-32 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,123,71,0.08)_0%,transparent_70%)] z-0" />
        <div className="container-page relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-start min-w-0">
            {/* Colonne gauche : pitch */}
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/12 text-accent rounded-full px-3.5 py-1.5 text-[13px] font-semibold mb-6">
                <Star size={13} fill="currentColor" />
                Note 4.9/5 · Plus de 50 PME accompagnées
              </div>
              <h1 className="text-primary mb-5" style={{ fontSize: "clamp(28px, 5vw, 56px)", fontWeight: 700, lineHeight: 1.07, letterSpacing: "-0.02em" }}>
                Votre site web pro,<br />
                <span className="text-accent">livré en 3 semaines.</span><br />
                Devis gratuit sous 48h.
              </h1>
              <p className="text-[18px] text-text-muted leading-relaxed mb-8 max-w-[540px]">
                Site vitrine, e-commerce ou refonte. Design soigné, SEO intégré, livré dans les délais. Devis détaillé sous 48h, sans engagement.
              </p>

              {/* Garanties chip row */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                {["Devis gratuit", "Sans engagement", "Réponse sous 48h", "Livré quand promis"].map((g) => (
                  <span
                    key={g}
                    className="inline-flex items-center gap-2 bg-bg-card border border-border rounded-full px-3.5 py-1.5 text-[13px] font-medium text-text-dark"
                  >
                    <Check size={13} className="text-green-600" strokeWidth={3} />
                    {g}
                  </span>
                ))}
              </div>

              {/* Mockup laptop (cache sur mobile pour donner de l'air au form) */}
              <div className="hidden lg:block">
                <LandingMockup />
              </div>
            </div>

            {/* Colonne droite : formulaire */}
            <div className="lg:sticky lg:top-6">
              <LandingForm />
            </div>
          </div>
        </div>
      </section>

      {/* BÉNÉFICES */}
      <section className="py-14 lg:py-20 bg-bg-card border-y border-border">
        <div className="container-page">
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <span className="inline-block text-[13px] font-semibold text-accent uppercase tracking-[0.1em] mb-3">
              Pourquoi Synaptic
            </span>
            <h2 className="text-primary" style={{ fontSize: "clamp(28px, 3.6vw, 40px)", fontWeight: 700, lineHeight: 1.15 }}>
              Ce qui fait la différence
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1100px] mx-auto">
            {benefits.map((b) => (
              <div key={b.title} className="bg-bg-light border border-border rounded-3xl p-7">
                <div className="w-12 h-12 bg-bg-warm rounded-2xl flex items-center justify-center text-accent mb-5">
                  <b.Icon size={22} />
                </div>
                <h3 className="text-primary text-[18px] font-semibold mb-2 font-sora">{b.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES + STATS */}
      <section className="py-14 lg:py-20 bg-bg-light">
        <div className="container-page">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 max-w-[1100px] mx-auto items-center">
            <div>
              <span className="inline-block text-[13px] font-semibold text-accent uppercase tracking-[0.1em] mb-3">
                Ils nous ont fait confiance
              </span>
              <h2 className="text-primary mb-6" style={{ fontSize: "clamp(28px, 3.6vw, 38px)", fontWeight: 700 }}>
                Quelques chiffres qui parlent
              </h2>
              <div className="grid grid-cols-2 gap-6 min-w-0">
                <Stat value="50+" label="PME accompagnées" />
                <Stat value="3 sem." label="Délai moyen" />
                <Stat value="95+" label="Score Lighthouse" />
                <Stat value="4.9/5" label="Note clients" />
              </div>
            </div>
            <div className="space-y-4">
              {testimonials.map((t) => (
                <div key={t.author} className="bg-bg-card border border-border rounded-3xl p-6">
                  <div className="flex gap-0.5 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={14} className="text-accent" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-text-dark text-[15px] leading-relaxed italic mb-3">&laquo; {t.text} &raquo;</p>
                  <div className="text-[13px]">
                    <span className="font-semibold text-primary">{t.author}</span>
                    <span className="text-text-muted"> · {t.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ COURTE */}
      <section className="py-14 lg:py-20 bg-bg-card">
        <div className="container-narrow">
          <div className="text-center mb-10">
            <span className="inline-block text-[13px] font-semibold text-accent uppercase tracking-[0.1em] mb-3">
              FAQ
            </span>
            <h2 className="text-primary" style={{ fontSize: "clamp(28px, 3.6vw, 38px)", fontWeight: 700 }}>
              Vos questions avant de demander un devis
            </h2>
          </div>
          <div className="bg-bg-light border border-border rounded-3xl overflow-hidden">
            {faqs.map((f, i) => (
              <details key={i} className="group border-b border-border last:border-0" open={i === 0}>
                <summary className="list-none cursor-pointer p-6 flex items-center justify-between gap-4 font-semibold text-[17px] text-primary hover:bg-bg-card transition-colors">
                  <span>{f.q}</span>
                  <span className="text-accent text-xl leading-none transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-6 pb-6 text-text-muted leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-14 lg:py-20 bg-bg-dark text-text-light">
        <div className="container-page text-center">
          <h2 className="text-text-light mb-4" style={{ fontSize: "clamp(28px, 3.6vw, 40px)", fontWeight: 700, lineHeight: 1.15 }}>
            Prêt à recevoir votre devis ?
          </h2>
          <p className="text-text-light/70 text-[18px] max-w-[600px] mx-auto mb-8">
            5 minutes pour remplir le formulaire. 48h pour recevoir une proposition détaillée. Aucun engagement.
          </p>
          <a
            href="#form-devis"
            className="btn btn-primary text-base"
          >
            Remplir le formulaire
            <ArrowRight size={16} />
          </a>
          <div className="mt-6 text-[13px] text-text-light/50">
            ou écrivez-nous : <a href="mailto:contact@synaptic-digital.fr" className="text-accent hover:underline">contact@synaptic-digital.fr</a>
          </div>
        </div>
      </section>

      {/* FOOTER MINIMAL */}
      <footer className="bg-bg-dark text-text-light/50 py-6 border-t border-white/10">
        <div className="container-page flex flex-col sm:flex-row justify-between items-center gap-3 text-[13px]">
          <span>© 2026 Synaptic Digital EURL. Tous droits réservés.</span>
          <Link href="/mentions-legales" className="hover:text-text-light transition-colors">
            Mentions légales
          </Link>
        </div>
      </footer>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="min-w-0">
      <div className="font-sora font-bold text-primary leading-none mb-1.5 tracking-tight break-words" style={{ fontSize: "clamp(30px, 4vw, 48px)" }}>
        {value}
      </div>
      <div className="text-[13px] text-text-muted uppercase tracking-wider font-medium">{label}</div>
    </div>
  );
}
