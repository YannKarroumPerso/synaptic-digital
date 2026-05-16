/**
 * Helpers de tracking analytics.
 * Utilise window.dataLayer (alimenté par Google Tag Manager) pour pousser tous les événements.
 * GTM se charge ensuite de dispatcher vers GA4, Google Ads, Meta Pixel, etc.
 */

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export type TrackEventName =
  // Acquisition principale
  | "lead_form_submit"
  | "lead_form_start"
  | "lead_form_error"
  // CTAs & engagement
  | "cta_click"
  | "phone_click"
  | "email_click"
  | "external_link_click"
  // Navigation
  | "page_view"
  | "scroll_depth"
  // Contenu
  | "service_view"
  | "realisation_view"
  | "blog_article_view"
  | "faq_open";

export type TrackEventParams = {
  // Source du lead (ads / site / direct)
  source?: "ads" | "site" | "blog" | "direct";
  // CTA cliqué (location + label)
  cta_location?: string;
  cta_label?: string;
  // Type de projet (formulaire)
  project_type?: string;
  budget?: string;
  // Page courante
  page_path?: string;
  page_title?: string;
  // Scroll
  scroll_percent?: number;
  // Contenu vu
  content_id?: string;
  content_category?: string;
  // Conversion value
  conversion_value?: number;
  conversion_currency?: string;
  // Autre
  [key: string]: unknown;
};

/**
 * Push un événement dans le dataLayer (consommé par GTM).
 * Safe côté SSR (no-op si window n'existe pas).
 */
export function trackEvent(name: TrackEventName, params: TrackEventParams = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: name,
    ...params,
  });

  // Log en dev pour debug
  if (process.env.NODE_ENV === "development") {
    console.log("📊 Track:", name, params);
  }
}

/**
 * Marqueur de conversion Google Ads spécifique (en plus du dataLayer).
 * Appelé sur le succès du formulaire de la LP /devis.
 */
/**
 * IDs Google Ads (publics, pas un secret) — hardcodés pour simplicité.
 * Override possible via env vars NEXT_PUBLIC_GOOGLE_ADS_ID / _CONVERSION_LABEL.
 */
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-18164827834";
const GOOGLE_ADS_CONVERSION_LABEL =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL || "8lDeCJflkq4cELqN1dVD";

/**
 * Valeur monétaire estimée d'un lead (sert à l'optimisation des enchères Google Ads).
 * Estimation : panier moyen 3000€ × taux conversion 5% = 150€ par lead.
 * Ajustable selon les données réelles dans 2-3 mois.
 */
const LEAD_VALUE_EUR = 150;

export function trackAdsConversion(value: number = LEAD_VALUE_EUR, currency = "EUR") {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_CONVERSION_LABEL}`,
    value,
    currency,
  });
}
