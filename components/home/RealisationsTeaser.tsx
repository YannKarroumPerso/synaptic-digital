"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { realisations } from "@/lib/data";

export function RealisationsTeaser() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const updateScrollState = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scroller;
      setCanScrollLeft(scrollLeft > 8);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 8);
    };

    updateScrollState();
    scroller.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      scroller.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const firstCard = scroller.querySelector<HTMLElement>(":scope > div");
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
        {/* Header + nav arrows */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-[640px]">
            <span className="section-eyebrow">Réalisations</span>
            <h2 className="text-primary mb-4">Quelques projets récents</h2>
            <p className="text-text-muted text-[18px] leading-relaxed">
              Un échantillon de ce qu&apos;on a livré ces derniers mois — du média éditorial à la plateforme SaaS générative, en passant par les sites de marque.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <SliderButton
              direction="left"
              disabled={!canScrollLeft}
              onClick={() => scroll("left")}
              label="Précédent"
            />
            <SliderButton
              direction="right"
              disabled={!canScrollRight}
              onClick={() => scroll("right")}
              label="Suivant"
            />
          </div>
        </div>
      </Container>

      {/* Slider full-bleed (déborde du container sur la droite) */}
      <div className="relative">
        <div
          ref={scrollerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scroll-no-bar"
          style={{
            paddingLeft: "max(24px, calc((100vw - 1240px) / 2 + 24px))",
            paddingRight: "24px",
            scrollPaddingLeft: "max(24px, calc((100vw - 1240px) / 2 + 24px))",
          }}
        >
          {realisations.map((real) => (
            <article
              key={real.name}
              className="group flex-shrink-0 w-[85%] sm:w-[420px] bg-bg-card border border-border rounded-3xl overflow-hidden snap-start transition-all duration-300 hover:shadow-lg hover:border-accent"
            >
              <div className="aspect-[16/10] bg-bg-warm border-b border-border overflow-hidden relative">
                <Image
                  src={real.image}
                  alt={`Capture de ${real.name}`}
                  fill
                  sizes="(max-width: 640px) 85vw, 420px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <div className="text-[12px] font-semibold text-accent uppercase tracking-wider mb-2">
                  {real.category}
                </div>
                <h4 className="text-primary text-[19px] mb-2">{real.name}</h4>
                <p className="text-sm text-text-muted leading-relaxed">{real.description}</p>
              </div>
            </article>
          ))}
          {/* Spacer pour donner de l'air à la fin du slider */}
          <div className="shrink-0 w-1" aria-hidden="true" />
        </div>
        {/* Fade-out gradient sur la droite pour suggérer le scroll */}
        <div
          className={`pointer-events-none absolute right-0 top-0 bottom-4 w-16 sm:w-32 bg-gradient-to-l from-bg-light to-transparent transition-opacity duration-300 ${
            canScrollRight ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Pagination indicator */}
      <Container className="mt-6">
        <PaginationIndicator scrollerRef={scrollerRef} count={realisations.length} />
      </Container>
    </Section>
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

function PaginationIndicator({
  scrollerRef,
  count,
}: {
  scrollerRef: React.RefObject<HTMLDivElement>;
  count: number;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const onScroll = () => {
      const firstCard = scroller.querySelector<HTMLElement>(":scope > div:not([aria-hidden])");
      const cardWidth = firstCard?.offsetWidth ?? 400;
      const gap = 24;
      const newIndex = Math.round(scroller.scrollLeft / (cardWidth + gap));
      setActiveIndex(Math.min(newIndex, count - 1));
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", onScroll);
  }, [scrollerRef, count]);

  return (
    <div className="flex gap-2 justify-center">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            i === activeIndex ? "w-8 bg-accent" : "w-1.5 bg-border"
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
