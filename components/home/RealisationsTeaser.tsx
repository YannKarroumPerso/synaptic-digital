"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { realisations, type Realisation } from "@/lib/data";

export function RealisationsTeaser() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const update = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scroller;
      setCanScrollLeft(scrollLeft > 8);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 8);
      const firstCard = scroller.querySelector<HTMLElement>(":scope > article");
      const cardWidth = firstCard?.offsetWidth ?? 460;
      const gap = 24;
      setActiveIndex(Math.min(Math.round(scrollLeft / (cardWidth + gap)), realisations.length - 1));
    };

    update();
    scroller.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      scroller.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const firstCard = scroller.querySelector<HTMLElement>(":scope > article");
    const cardWidth = firstCard?.offsetWidth ?? 460;
    const gap = 24;
    scroller.scrollBy({
      left: direction === "left" ? -(cardWidth + gap) : cardWidth + gap,
      behavior: "smooth",
    });
  };

  return (
    <Section id="realisations" className="bg-bg-light relative overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-[640px]">
            <span className="section-eyebrow">Réalisations</span>
            <h2 className="text-primary mb-4">Quelques projets récents</h2>
            <p className="text-text-muted text-[18px] leading-relaxed">
              Un échantillon de ce qu&apos;on a livré ces derniers mois — du média éditorial à la plateforme SaaS générative, en passant par les sites de marque.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <SliderButton direction="left" disabled={!canScrollLeft} onClick={() => scroll("left")} label="Précédent" />
            <SliderButton direction="right" disabled={!canScrollRight} onClick={() => scroll("right")} label="Suivant" />
          </div>
        </div>
      </Container>

      <div className="relative">
        <div
          ref={scrollerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 scroll-no-bar"
          style={{
            paddingLeft: "max(24px, calc((100vw - 1240px) / 2 + 24px))",
            paddingRight: "24px",
            scrollPaddingLeft: "max(24px, calc((100vw - 1240px) / 2 + 24px))",
          }}
        >
          {realisations.map((real) => (
            <RealisationCard key={real.name} real={real} />
          ))}
          <div className="shrink-0 w-1" aria-hidden="true" />
        </div>
        <div
          className={`pointer-events-none absolute right-0 top-0 bottom-6 w-16 sm:w-32 bg-gradient-to-l from-bg-light to-transparent transition-opacity duration-300 ${
            canScrollRight ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <Container className="mt-2">
        <div className="flex gap-2 justify-center">
          {realisations.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-8 bg-accent" : "w-1.5 bg-border"
              }`}
              aria-hidden="true"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function RealisationCard({ real }: { real: Realisation }) {
  return (
    <article className="group flex-shrink-0 w-[88%] sm:w-[480px] bg-bg-card border border-border rounded-3xl overflow-hidden snap-start transition-all duration-300 hover:shadow-lg hover:border-accent">
      {/* Visual zone */}
      <div className="relative bg-gradient-to-br from-bg-warm to-[#F2E8DC] border-b border-border px-7 pt-8 pb-5 overflow-hidden">
        <LaptopMockup imageSrc={real.image} alt={`Capture desktop de ${real.name}`} />
        {/* Smartphone overlay : flottant en bas-droite, partiellement dans la zone laptop */}
        <div className="absolute bottom-2 right-5 z-30">
          <PhoneMockup imageSrc={real.imageMobile} alt={`Capture mobile de ${real.name}`} />
        </div>
      </div>

      {/* Meta */}
      <div className="p-7">
        <div className="text-[12px] font-semibold text-accent uppercase tracking-wider mb-2">
          {real.category}
        </div>
        <h4 className="text-primary text-[19px] mb-2">{real.name}</h4>
        <p className="text-sm text-text-muted leading-relaxed">{real.description}</p>
      </div>
    </article>
  );
}

/* === Mockup laptop en CSS pur (bezel + notch + base/socle) === */
function LaptopMockup({ imageSrc, alt }: { imageSrc: string; alt: string }) {
  return (
    <div className="relative w-full">
      {/* Bezel = corps noir avec border-radius en haut, en bas presque droit */}
      <div className="relative bg-[#161616] rounded-t-[12px] rounded-b-[6px] p-[6px] pb-[8px] shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[48px] h-[10px] bg-[#161616] rounded-b-[6px] z-10" />
        {/* Screen */}
        <div className="relative aspect-[16/10] bg-white rounded-[5px] overflow-hidden">
          <Image
            src={imageSrc}
            alt={alt}
            fill
            sizes="(max-width: 640px) 88vw, 480px"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </div>
      {/* Base / socle */}
      <div className="relative">
        {/* Trait charnière */}
        <div className="h-[2px] bg-gradient-to-b from-[#161616] to-[#444]" />
        {/* Trapèze base (clip-path pour effet perspective) */}
        <div
          className="h-[12px] bg-gradient-to-b from-[#D4D7DC] via-[#B0B5BD] to-[#8B9099]"
          style={{ clipPath: "polygon(2% 0, 98% 0, 95% 100%, 5% 100%)" }}
        >
          {/* Petite encoche centrale du touchpad (visible quand on regarde le laptop ouvert) */}
          <div className="mx-auto mt-0 w-[40px] h-[3px] bg-[#666] opacity-30 rounded-b-md" />
        </div>
      </div>
    </div>
  );
}

/* === Mockup smartphone en CSS pur (bezel + dynamic island) === */
function PhoneMockup({ imageSrc, alt }: { imageSrc: string; alt: string }) {
  return (
    <div className="w-[72px]">
      <div className="bg-[#1A1A1A] rounded-[14px] p-[3px] shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
        <div className="relative aspect-[9/19.5] bg-white rounded-[11px] overflow-hidden">
          <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-6 h-[5px] bg-black rounded-full z-10" />
          <Image
            src={imageSrc}
            alt={alt}
            fill
            sizes="72px"
            className="object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}

function SliderButton({
  direction,
  disabled,
  onClick,
  label,
}: {
  direction: "left" | "right";
  disabled: boolean;
  onClick: () => void;
  label: string;
}) {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="w-12 h-12 rounded-full bg-bg-card border border-border flex items-center justify-center text-primary transition-all duration-200 hover:bg-primary hover:text-white hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-bg-card disabled:hover:text-primary disabled:hover:border-border"
    >
      <Icon size={20} strokeWidth={2.5} />
    </button>
  );
}
