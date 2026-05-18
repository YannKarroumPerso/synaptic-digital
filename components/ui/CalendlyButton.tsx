"use client";

import { useEffect, useState } from "react";
import { Calendar, X } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

/**
 * Bouton flottant "Réserver un appel" qui ouvre Calendly en popup.
 * Activation : créer un compte Calendly, copier l'URL publique et la mettre
 * dans NEXT_PUBLIC_CALENDLY_URL (format : https://calendly.com/ton-pseudo/30min).
 * Si l'env var n'est pas définie, le composant ne s'affiche pas.
 */
export function CalendlyButton() {
  const [showTooltip, setShowTooltip] = useState(true);
  const url = process.env.NEXT_PUBLIC_CALENDLY_URL;

  // Charger le widget Calendly (popup) une seule fois
  useEffect(() => {
    if (!url) return;
    if (document.getElementById("calendly-widget-script")) return;
    const script = document.createElement("script");
    script.id = "calendly-widget-script";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);
  }, [url]);

  if (!url) return null;

  function onClick(e: React.MouseEvent) {
    e.preventDefault();
    trackEvent("cta_click", {
      cta_location: "calendly_float",
      cta_label: "calendly",
      source: "site",
    });
    // @ts-expect-error global Calendly
    if (typeof window !== "undefined" && window.Calendly) {
      // @ts-expect-error global Calendly
      window.Calendly.initPopupWidget({ url });
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  }

  function dismiss(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setShowTooltip(false);
  }

  return (
    <button
      onClick={onClick}
      aria-label="Réserver un appel"
      className="fixed bottom-5 right-5 z-[100] group"
    >
      <div className="flex items-center gap-3">
        {showTooltip && (
          <div
            role="presentation"
            onClick={(e) => e.stopPropagation()}
            className="hidden sm:flex items-center gap-2 bg-bg-card border border-border rounded-2xl shadow-lg px-4 py-2.5 animate-[fade-in_0.4s_ease-out]"
          >
            <span className="text-[13px] font-medium text-primary whitespace-nowrap">
              Réserver un appel de 20 min, gratuit.
            </span>
            <button
              onClick={dismiss}
              aria-label="Fermer"
              className="text-text-muted hover:text-primary transition-colors p-0.5"
            >
              <X size={14} />
            </button>
          </div>
        )}
        <div className="bg-accent hover:bg-orange-600 text-white rounded-full p-3.5 shadow-xl transition-all hover:scale-110 active:scale-95">
          <Calendar size={26} strokeWidth={2} />
        </div>
      </div>
    </button>
  );
}
