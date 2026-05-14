import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Check, Zap } from "lucide-react";

export function Hero() {
 return (
 <section className="relative overflow-hidden py-20 lg:pt-20 lg:pb-24">
 <div className="absolute -top-52 -right-52 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(255,123,71,0.08)_0%,transparent_70%)] z-0" />
 <div className="absolute -bottom-24 -left-36 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(26,40,64,0.05)_0%,transparent_70%)] z-0" />
 <Container className="relative z-10">
 <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
 <div>
 <div className="inline-flex items-center gap-2.5 bg-bg-card border border-border rounded-full px-4 py-2.5 text-[13px] font-medium text-text-dark mb-7 shadow-sm">
 <span className="relative w-2 h-2 rounded-full bg-green-600">
 <span className="absolute inset-[-4px] rounded-full bg-green-600 opacity-30 animate-[ping-soft_2s_infinite]" />
 </span>
 Devis sous 48h, sans engagement
 </div>
 <h1 className="text-primary mb-6">
 Des sites <HeroHighlight>beaux</HeroHighlight>,{" "}
 <HeroHighlight>rapides</HeroHighlight>, trouvés sur Google.
 <br />
 Livrés en 3 semaines.
 </h1>
 <p className="text-[19px] text-text-muted leading-relaxed mb-9 max-w-[540px]">
 On conçoit, développe et lance le site qui fera décoller votre PME. Design soigné, performance technique, SEO intégré dès le départ, sans le délai habituel de 3 mois.
 </p>
 <div className="flex flex-wrap gap-3 items-center mb-8">
 <Button href="#contact" variant="primary" arrow>
 Démarrer mon projet
 </Button>
 <Button href="/#realisations" variant="secondary">
 Voir nos réalisations
 </Button>
 </div>
 <div className="flex flex-wrap items-center gap-3 text-[13px] text-text-muted">
 <span className="text-accent text-base tracking-[2px]">★★★★★</span>
 <span>4.9/5 sur les avis clients</span>
 <span className="opacity-30">•</span>
 <span>
 <strong>50+</strong> projets livrés
 </span>
 </div>
 </div>
 <HeroMockup />
 </div>
 </Container>
 </section>
 );
}

function HeroHighlight({ children }: { children: React.ReactNode }) {
 return (
 <span className="relative inline-block text-accent">
 {children}
 <span className="absolute left-0 bottom-0 w-full h-2 bg-accent-light opacity-30 rounded -z-10" />
 </span>
 );
}

function HeroMockup() {
 return (
 <div className="relative" style={{ perspective: "1200px" }}>
 <div
 className="bg-bg-card rounded-[18px] shadow-xl border border-border overflow-hidden transition-transform duration-500 hover:[transform:rotateY(-2deg)_rotateX(1deg)]"
 style={{ transform: "rotateY(-6deg) rotateX(3deg)" }}
 >
 {/* Mock browser bar */}
 <div className="bg-gradient-to-b from-[#F3EFEA] to-bg-light px-4 py-3.5 flex items-center gap-2 border-b border-border">
 <span className="w-2.5 h-2.5 rounded-full bg-[#E07A6B]" />
 <span className="w-2.5 h-2.5 rounded-full bg-[#E3B85F]" />
 <span className="w-2.5 h-2.5 rounded-full bg-[#7CB87B]" />
 <span className="ml-3 text-xs text-text-muted bg-white px-3 py-1 rounded-full flex-1">
 🔒 votreentreprise.fr
 </span>
 </div>
 {/* Mock content */}
 <div className="p-8 min-h-[380px] bg-gradient-to-br from-white to-bg-warm">
 <div className="flex justify-between items-center mb-8">
 <span className="font-sora font-extrabold text-base text-primary">
 VotreEntreprise<span className="text-accent">.</span>
 </span>
 <div className="flex gap-3">
 {[1, 2, 3].map((i) => (
 <span key={i} className="w-12 h-2 bg-border rounded" />
 ))}
 </div>
 </div>
 <div className="h-6 bg-primary rounded-md w-4/5 mb-2.5" />
 <div className="h-6 bg-accent rounded-md w-1/2 mb-2.5" />
 <div className="space-y-1.5 mb-5">
 <div className="h-2.5 bg-text-muted/30 rounded w-[90%]" />
 <div className="h-2.5 bg-text-muted/30 rounded w-[85%]" />
 <div className="h-2.5 bg-text-muted/30 rounded w-[70%]" />
 </div>
 <div className="h-9 bg-accent rounded-lg w-[150px] flex items-center justify-center text-white font-semibold text-[11px] shadow-accent">
 Découvrir →
 </div>
 <div className="grid grid-cols-2 gap-3 mt-8">
 {[1, 2].map((i) => (
 <div key={i} className="bg-white border border-border rounded-xl p-4">
 <div className="w-7 h-7 bg-accent/12 rounded-lg mb-3 flex items-center justify-center text-accent">
 <Check size={16} strokeWidth={3} />
 </div>
 <div className="h-2.5 bg-primary rounded w-[65%] mb-2" />
 <div className="h-1.5 bg-border rounded mb-1" />
 <div className="h-1.5 bg-border rounded w-3/5" />
 </div>
 ))}
 </div>
 </div>
 </div>
 {/* Floating badges */}
 <div className="absolute top-[16%] -right-4 lg:-right-8 bg-white rounded-2xl px-4 py-3.5 shadow-lg border border-border flex items-center gap-3 z-10 animate-float text-[13px]">
 <div className="w-9 h-9 rounded-xl bg-green-600 flex items-center justify-center text-white font-bold">
 <Check size={18} strokeWidth={3} />
 </div>
 <div>
 <div className="text-[13px] font-semibold text-primary whitespace-nowrap">
 Score Lighthouse
 </div>
 <div className="font-sora font-bold text-primary text-lg leading-none">98/100</div>
 </div>
 </div>
 <div
 className="absolute bottom-[12%] -left-4 lg:-left-10 bg-white rounded-2xl px-4 py-3.5 shadow-lg border border-border flex items-center gap-3 z-10 animate-float text-[13px]"
 style={{ animationDelay: "0.5s" }}
 >
 <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center text-white">
 <Zap size={18} strokeWidth={2.5} fill="white" />
 </div>
 <div>
 <div className="text-[13px] font-semibold text-primary whitespace-nowrap">Mis en ligne</div>
 <div className="text-[11px] text-text-muted">en 19 jours</div>
 </div>
 </div>
 </div>
 );
}
