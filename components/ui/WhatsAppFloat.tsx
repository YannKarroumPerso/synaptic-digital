"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

/**
 * Bouton WhatsApp flottant, présent sur toutes les pages.
 * Numéro à configurer via NEXT_PUBLIC_WHATSAPP_NUMBER (format international sans +).
 * Si absent, fallback sur le numéro placeholder fourni par Yann à activer.
 */
export function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(true);

  // Format international SANS le + (par exemple "33612345678" pour +33 6 12 34 56 78)
  // À remplacer par le vrai numéro de Yann via env var ou ici directement
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "33612345678";
  const message = encodeURIComponent(
    "Bonjour, je viens de votre site Synaptic Digital, j'aimerais discuter de mon projet."
  );
  const href = `https://wa.me/${phone}?text=${message}`;

  function onClick() {
    trackEvent("cta_click", {
      cta_location: "whatsapp_float",
      cta_label: "whatsapp",
      source: "site",
    });
  }

  function dismiss(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setShowTooltip(false);
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      aria-label="Discuter sur WhatsApp"
      className="fixed bottom-5 right-5 z-[100] group"
    >
      <div className="flex items-center gap-3">
        {showTooltip && (
          <div className="hidden sm:flex items-center gap-2 bg-bg-card border border-border rounded-2xl shadow-lg px-4 py-2.5 animate-[fade-in_0.4s_ease-out]">
            <span className="text-[13px] font-medium text-primary whitespace-nowrap">
              Une question ? On répond sous 1h.
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
        <div className="bg-[#25D366] hover:bg-[#1faa4f] text-white rounded-full p-3.5 shadow-xl transition-all hover:scale-110 active:scale-95">
          <MessageCircle size={26} strokeWidth={2} />
        </div>
      </div>
    </a>
  );
}
