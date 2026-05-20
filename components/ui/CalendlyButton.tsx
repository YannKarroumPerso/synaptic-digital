"use client";

import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

/**
 * Bouton flottant "Réserver un appel" qui ouvre Calendly en popup.
 * Sur desktop : pill élargie avec label permanent "Réserver un appel".
 * Sur mobile : pill compacte avec icône + label court.
 */
export function CalendlyButton() {
  const [mounted, setMounted] = useState(false);
  const url =
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    "https://calendly.com/yannkarroum/30min";

  useEffect(() => {
    setMounted(true);
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

  return (
    <button
      onClick={onClick}
      aria-label="Réserver un appel gratuit de 20 minutes"
      className={`fixed bottom-5 right-5 z-[100] group inline-flex items-center gap-2.5 bg-accent hover:bg-orange-600 text-white rounded-full shadow-xl transition-all hover:scale-105 active:scale-95 px-4 py-3 sm:px-5 sm:py-3.5 ${
        mounted ? "animate-[fade-in_0.6s_ease-out]" : "opacity-0"
      }`}
    >
      <span className="relative flex items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
        <Calendar size={22} strokeWidth={2.2} className="relative" />
      </span>
      <span className="text-[14px] sm:text-[15px] font-semibold whitespace-nowrap">
        Réserver un appel
      </span>
    </button>
  );
}
