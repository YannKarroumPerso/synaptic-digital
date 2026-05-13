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
      const cardWidth = firstCard?.offsetWidth ?? 400;
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
    const cardWidth = firstCard?.offsetWidth ?? 400;
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
    <article className="group flex-shrink-0 w-[88%] sm:w-[460px] bg-bg-card border border-border rounded-3xl overflow-hidden snap-start transition-all duration-300 hover:shadow-lg hover:border-accent">
      {/* Frame device : desktop + smartphone overlay */}
      <div className="relative aspect-[16/10] bg-gradient-to-br from-bg-warm to-[#F2E8DC] border-b border-border overflow-hidden">
        {/* === Desktop mockup === */}
        {/* Mac-style top bar */}
        <div className="absolute top-0 left-0 right-0 h-7 bg-gradient-to-b from-[#F3EFEA] to-[#EBE5DA] z-20 flex items-center px-3 gap-1.5 border-b border-border/50">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E07A6B]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E3B85F]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#7CB87B]" />
        </div>
        {/* Desktop image, offset to leave room for the bar */}
        <div className="absolute inset-0 top-7">
          <Image
            src={real.image}
            alt={`Capture desktop de ${real.name}`}
            fill
            sizes="(max-width: 640px) 88vw, 460px"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        {/* === Smartphone overlay (bottom-right) === */}
        <div className="absolute bottom-3 right-4 w-[76px] z-30">
          <div className="bg-[#1A1A1A] rounded-[16px] p-[3px] shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
            <div className="relative aspect-[9/19.5] bg-white rounded-[13px] overflow-hidden">
              {/* Dynamic island */}
              <div className="absolute top-[4px] left-1/2 -translate-x-1/2 w-7 h-1.5 bg-black rounded-full z-10" />
              <Image
                src={real.imageMobile}
                alt={`Capture mobile de ${real.name}`}
                fill
                sizes="76px"
                className="object-cover object-top"
              />
            </div>
          </div>
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
