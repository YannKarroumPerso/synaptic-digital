import Script from "next/script";

/**
 * Snippet GTM dans le <head>.
 * Chargé seulement si NEXT_PUBLIC_GTM_ID est défini.
 *
 * Note : avec Consent Mode v2, GTM est chargé mais ne déclenche
 * les vrais tags (GA4, Ads, Pixel) que si l'utilisateur a consenti.
 * Le consent par défaut est "denied" (voir ConsentBanner.tsx).
 */
export function GoogleTagManager() {
  // GTM ID hardcoded (valeur publique, pas un secret)
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-NCQCXMTM";

  return (
    <Script id="gtm" strategy="afterInteractive">
      {`
        (function(w,d,s,l,i){
          w[l]=w[l]||[];
          w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
          var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
          j.async=true;
          j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${gtmId}');
      `}
    </Script>
  );
}

/**
 * Noscript fallback pour utilisateurs sans JS.
 * À placer juste après <body> dans le layout.
 */
export function GoogleTagManagerNoScript() {
  // GTM ID hardcoded (valeur publique, pas un secret)
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-NCQCXMTM";
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}

/**
 * Tag Google Ads chargé en direct (gtag.js).
 * Garantit que les events de conversion partent même si GTM est mal configuré.
 * Respecte le Consent Mode v2 : si ad_storage = denied, gtag.js ne pose pas de cookie
 * et envoie un "ping" anonyme (conversion modeling).
 */
export function GoogleAdsTag() {
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-18164827834";
  return (
    <>
      <Script
        id="gtag-ads-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${adsId}`}
      />
      <Script id="gtag-ads-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          if (typeof window.gtag !== 'function') {
            window.gtag = function(){ dataLayer.push(arguments); };
          }
          gtag('js', new Date());
          gtag('config', '${adsId}');
        `}
      </Script>
    </>
  );
}

/**
 * Initialisation du dataLayer + Consent Mode v2 (RGPD).
 * Tous les consents sont "denied" par défaut. La bannière les passera à "granted"
 * si l'utilisateur accepte.
 */
export function ConsentModeInit() {
  return (
    <Script id="consent-init" strategy="beforeInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('consent', 'default', {
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
          analytics_storage: 'denied',
          functionality_storage: 'granted',
          security_storage: 'granted',
          wait_for_update: 500
        });
      `}
    </Script>
  );
}
