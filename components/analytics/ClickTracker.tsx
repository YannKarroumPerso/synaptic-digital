"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Tracker global de clics sur :
 * - les CTAs (a/button avec data-track-cta)
 * - les liens téléphone (tel:)
 * - les liens email (mailto:)
 * - les liens externes (http(s):// hors du site)
 * - le scroll depth (25/50/75/100%)
 */
export function ClickTracker() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // === Click tracker ===
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a, button");
      if (!target) return;

      // Téléphone
      const href = target.getAttribute("href");
      if (href?.startsWith("tel:")) {
        trackEvent("phone_click", { cta_label: href.replace("tel:", "") });
        return;
      }
      // Email
      if (href?.startsWith("mailto:")) {
        trackEvent("email_click", { cta_label: href.replace("mailto:", "") });
        return;
      }
      // CTA tagué explicitement
      const ctaLabel = target.getAttribute("data-track-cta");
      if (ctaLabel) {
        trackEvent("cta_click", {
          cta_label: ctaLabel,
          cta_location: target.getAttribute("data-track-location") || window.location.pathname,
        });
        return;
      }
      // Lien externe
      if (href?.startsWith("http") && !href.includes("synaptic-digital.fr")) {
        trackEvent("external_link_click", { cta_label: href });
      }
    };

    // === Scroll depth tracker ===
    const tracked = new Set<number>();
    const onScroll = () => {
      const scrollPercent = Math.round(
        ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100
      );
      [25, 50, 75, 100].forEach((threshold) => {
        if (scrollPercent >= threshold && !tracked.has(threshold)) {
          tracked.add(threshold);
          trackEvent("scroll_depth", { scroll_percent: threshold });
        }
      });
    };

    // === FAQ open tracker ===
    const onFaqToggle = (e: Event) => {
      const details = e.target as HTMLDetailsElement;
      if (details.tagName === "DETAILS" && details.open) {
        const question = details.querySelector("summary")?.textContent?.trim().slice(0, 100);
        if (question) trackEvent("faq_open", { content_id: question });
      }
    };

    document.addEventListener("click", onClick);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("toggle", onFaqToggle, true);

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("toggle", onFaqToggle, true);
    };
  }, []);

  return null;
}
