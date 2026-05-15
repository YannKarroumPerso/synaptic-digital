"use client";

import { useEffect, useState } from "react";

type ConsentState = "pending" | "all" | "essential" | "custom";
type ConsentChoices = {
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "synaptic_consent_v1";

export function ConsentBanner() {
  const [state, setState] = useState<ConsentState>("pending");
  const [showCustom, setShowCustom] = useState(false);
  const [choices, setChoices] = useState<ConsentChoices>({
    analytics: false,
    marketing: false,
  });

  // Au mount : récupérer le consentement existant
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        applyConsent(parsed.analytics, parsed.marketing);
        setState(parsed.state || "essential");
      }
    } catch {
      // ignore parse errors
    }
  }, []);

  function applyConsent(analytics: boolean, marketing: boolean) {
    if (typeof window === "undefined" || !window.gtag) return;
    window.gtag("consent", "update", {
      analytics_storage: analytics ? "granted" : "denied",
      ad_storage: marketing ? "granted" : "denied",
      ad_user_data: marketing ? "granted" : "denied",
      ad_personalization: marketing ? "granted" : "denied",
    });
  }

  function save(newState: ConsentState, newChoices: ConsentChoices) {
    if (typeof window === "undefined") return;
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ...newChoices, state: newState, ts: Date.now() })
    );
    applyConsent(newChoices.analytics, newChoices.marketing);
    setState(newState);
  }

  function acceptAll() {
    save("all", { analytics: true, marketing: true });
  }
  function rejectAll() {
    save("essential", { analytics: false, marketing: false });
  }
  function saveCustom() {
    save("custom", choices);
  }

  // Si déjà consenti, ne pas afficher
  if (state !== "pending") return null;

  return (
    <div
      role="dialog"
      aria-label="Bannière de consentement aux cookies"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-[420px] bg-bg-card border border-border rounded-2xl shadow-2xl z-[200] p-5"
    >
      {!showCustom ? (
        <>
          <h3 className="font-sora font-semibold text-primary text-[17px] mb-2">
            Cookies
          </h3>
          <p className="text-text-muted text-[14px] leading-relaxed mb-4">
            On utilise des cookies pour comprendre comment vous naviguez (analytics) et
            mesurer l&apos;efficacité de nos pubs (marketing). Les cookies techniques
            (nécessaires au site) sont toujours actifs.
          </p>
          <div className="flex flex-col gap-2">
            <button
              onClick={acceptAll}
              className="btn btn-primary w-full justify-center text-[14px] py-2.5"
            >
              Tout accepter
            </button>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={rejectAll}
                className="btn btn-secondary text-[13px] py-2 justify-center"
              >
                Refuser
              </button>
              <button
                onClick={() => setShowCustom(true)}
                className="btn btn-secondary text-[13px] py-2 justify-center"
              >
                Personnaliser
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <h3 className="font-sora font-semibold text-primary text-[17px] mb-3">
            Mes préférences
          </h3>
          <div className="space-y-3 mb-4">
            <ChoiceRow label="Cookies techniques" sublabel="Toujours actifs (navigation, formulaire, sécurité)" checked disabled />
            <ChoiceRow
              label="Analytics"
              sublabel="Comprendre comment vous naviguez (anonymisé)"
              checked={choices.analytics}
              onChange={(v) => setChoices({ ...choices, analytics: v })}
            />
            <ChoiceRow
              label="Marketing"
              sublabel="Mesurer l'efficacité des pubs (Google Ads, Meta)"
              checked={choices.marketing}
              onChange={(v) => setChoices({ ...choices, marketing: v })}
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setShowCustom(false)}
              className="btn btn-secondary text-[13px] py-2 justify-center"
            >
              Retour
            </button>
            <button
              onClick={saveCustom}
              className="btn btn-primary text-[13px] py-2 justify-center"
            >
              Enregistrer
            </button>
          </div>
        </>
      )}
    </div>
  );
}

function ChoiceRow({
  label,
  sublabel,
  checked,
  disabled,
  onChange,
}: {
  label: string;
  sublabel: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <label className={`flex items-start gap-3 p-3 rounded-xl border ${disabled ? "bg-bg-light border-border" : "bg-bg-card border-border cursor-pointer hover:border-accent"}`}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="mt-1 w-4 h-4 accent-accent"
      />
      <div className="flex-1">
        <div className="text-[14px] font-semibold text-primary">{label}</div>
        <div className="text-[12px] text-text-muted">{sublabel}</div>
      </div>
    </label>
  );
}
