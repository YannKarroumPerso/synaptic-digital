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
export function trackAdsConversion(value?: number, currency = "EUR") {
  if (typeof window === "undefined" || !window.gtag) return;
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const conversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;
  if (!adsId || !conversionLabel) return;

  window.gtag("event", "conversion", {
    send_to: `${adsId}/${conversionLabel}`,
    value,
    currency,
  });
}
