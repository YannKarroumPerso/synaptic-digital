import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/seo/StructuredData";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { GoogleTagManager, GoogleTagManagerNoScript, ConsentModeInit, GoogleAdsTag } from "@/components/analytics/GoogleTagManager";
import { ConsentBanner } from "@/components/analytics/ConsentBanner";
import { ClickTracker } from "@/components/analytics/ClickTracker";
import { CrispChat } from "@/components/ui/CrispChat";
import { CalendlyButton } from "@/components/ui/CalendlyButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://synaptic-digital.fr"),
  title: {
    default: "Synaptic Digital, Agence web PME, sites livrés en 3 semaines",
    template: "%s | Synaptic Digital",
  },
  description:
    "Sites vitrine, e-commerce et refontes pour petites PME en Charente. Design soigné, performance technique, SEO intégré. Livré en 3 semaines, à partir de 1 500 €.",
  keywords: [
    "agence web PME",
    "création site internet",
    "agence digitale Charente",
    "site vitrine",
    "e-commerce",
    "SEO local",
    "agence web Angoulême",
    "création site web Cognac",
  ],
  authors: [{ name: "Synaptic Digital EURL" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://synaptic-digital.fr",
    siteName: "Synaptic Digital",
    title: "Synaptic Digital, Agence web PME",
    description:
      "Sites vitrine, e-commerce et refontes pour petites PME. Livré en 3 semaines.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Synaptic Digital",
    description: "Agence web pour PME, sites livrés en 3 semaines.",
  },
  verification: {
    google: "01BYbdLdTVj03W6IYYTN1LYeqDgR9APnHOr1DfBTLvI",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${sora.variable}`}>
      <head>
        {/* Consent Mode v2 : tous les consents 'denied' par défaut (RGPD) */}
        <ConsentModeInit />
        {/* GTM container (charge gtm.js mais respecte le consent) */}
        <GoogleTagManager />
        {/* Tag Google Ads en direct (fallback robuste pour les conversions) */}
        <GoogleAdsTag />
      </head>
      <body>
        {/* GTM noscript fallback */}
        <GoogleTagManagerNoScript />
        <StructuredData />
        {children}
        <ClickTracker />
        <ConsentBanner />
        <CalendlyButton />
        <CrispChat />
        <VercelAnalytics />
      </body>
    </html>
  );
}
