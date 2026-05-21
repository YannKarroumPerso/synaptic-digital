import Script from "next/script";

/**
 * Composant Google Analytics 4 chargé en direct via gtag.js.
 * Cohabite avec GTM et Google Ads (3 trackings indépendants pour robustesse).
 *
 * Activation : récupérer le Measurement ID sur https://analytics.google.com
 * (format G-XXXXXXXXXX) puis le mettre dans NEXT_PUBLIC_GA4_MEASUREMENT_ID
 * OU hardcoder ici en fallback (l'ID public n'est pas un secret).
 *
 * Le Consent Mode v2 est déjà initialisé par ConsentModeInit avec analytics_storage=denied
 * par défaut. GA4 respectera ce statut et passera en 'consented' quand le visiteur acceptera
 * via la bannière cookies.
 */
export function GoogleAnalytics() {
  const measurementId =
    process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || "G-1J6SR8MXVV";

  return (
    <>
      <Script
        id="gtag-ga4-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script id="gtag-ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          if (typeof window.gtag !== 'function') {
            window.gtag = function(){ dataLayer.push(arguments); };
          }
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            anonymize_ip: true,
            send_page_view: true
          });
        `}
      </Script>
    </>
  );
}
