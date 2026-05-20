"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitContactForm, ContactFormState } from "@/app/actions";
import { trackEvent, trackAdsConversion } from "@/lib/analytics";
import { useEffect } from "react";
import { ArrowRight, Phone } from "lucide-react";

const initialState: ContactFormState = {};

export function LandingForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);

  // Track les événements analytics
  useEffect(() => {
    if (state.success) {
      trackEvent("lead_form_submit", { source: "ads" });
      trackAdsConversion(); // déclenche la conversion Google Ads
    } else if (state.error) {
      trackEvent("lead_form_error", { source: "ads" });
    }
  }, [state]);

  return (
    <div id="form-devis" className="bg-bg-card border-2 border-accent/30 rounded-3xl p-4 sm:p-7 lg:p-8 shadow-xl max-w-full">
      <div className="flex items-center gap-2 mb-2 text-accent font-semibold text-[13px] uppercase tracking-wider">
        <Phone size={14} />
        Recontact sous 48h, garanti
      </div>
      <h2 className="text-primary mb-2 font-sora font-bold text-[24px] leading-tight">
        Recevez votre devis détaillé
      </h2>
      <p className="text-text-muted text-[14px] mb-6 leading-relaxed">
        5 champs, 1 minute. Vous recevez la proposition sous 48h max, par email.
      </p>

      <form action={formAction} className="space-y-3.5">
        {/* Champ caché : marque le formulaire comme venant de la LP Google Ads */}
        <input type="hidden" name="source" value="ads" />

        <Field
          name="name"
          label="Votre nom"
          required
          type="text"
          placeholder="Prénom Nom"
        />
        <Field
          name="phone"
          label="Téléphone"
          required
          type="tel"
          placeholder="06 12 34 56 78"
        />
        <Field
          name="email"
          label="Email professionnel"
          required
          type="email"
          placeholder="vous@entreprise.fr"
        />

        <div>
          <label className="block">
            <span className="block text-[13px] font-semibold text-primary mb-1.5">
              Type de projet <span className="text-accent">*</span>
            </span>
            <select
              name="projectType"
              required
              className="w-full px-4 py-2.5 text-[15px] bg-bg-light border border-border rounded-[10px] text-text-dark focus:outline-none focus:border-accent focus:bg-bg-card transition-all"
            >
              <option value="">— Choisir —</option>
              <option value="Site vitrine">Site vitrine</option>
              <option value="E-commerce">E-commerce</option>
              <option value="Refonte de site">Refonte de site</option>
              <option value="SEO et performance">SEO &amp; performance</option>
              <option value="Communication social média">Communication social média</option>
              <option value="Autre">Autre</option>
            </select>
          </label>
        </div>

        <div>
          <label className="block">
            <span className="block text-[13px] font-semibold text-primary mb-1.5">
              Budget approximatif
            </span>
            <select
              name="budget"
              className="w-full px-4 py-2.5 text-[15px] bg-bg-light border border-border rounded-[10px] text-text-dark focus:outline-none focus:border-accent focus:bg-bg-card transition-all"
            >
              <option value="">— Préciser si possible —</option>
              <option value="1 500 - 3 000 €">1 500 € — 3 000 €</option>
              <option value="3 000 - 5 000 €">3 000 € — 5 000 €</option>
              <option value="5 000 - 8 000 €">5 000 € — 8 000 €</option>
              <option value="8 000 €+">8 000 € et plus</option>
              <option value="À définir">À définir avec vous</option>
            </select>
          </label>
        </div>

        <div>
          <label className="block">
            <span className="block text-[13px] font-semibold text-primary mb-1.5">
              Message (optionnel)
            </span>
            <textarea
              name="message"
              rows={3}
              placeholder="2-3 lignes sur votre projet, si vous le souhaitez"
              className="w-full px-4 py-2.5 text-[15px] bg-bg-light border border-border rounded-[10px] text-text-dark placeholder:text-text-muted/60 focus:outline-none focus:border-accent focus:bg-bg-card transition-all resize-none"
            />
          </label>
        </div>

        {/* Honeypot */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="absolute left-[-9999px] opacity-0"
          aria-hidden="true"
        />

        <SubmitButton />

        {state.error && (
          <p className="text-sm text-red-600 text-center font-medium">{state.error}</p>
        )}
        {state.success && (
          <div className="bg-green-50 border border-green-300 text-green-800 rounded-xl p-4 text-center">
            <strong className="block mb-1">✓ {state.message}</strong>
            <span className="text-sm">
              Vous recevez un email de confirmation. On vous rappelle au numéro indiqué sous 48h.
            </span>
          </div>
        )}

        <p className="text-[11px] text-text-muted text-center leading-relaxed pt-2">
          Vos données sont traitées en confidentialité. Aucun spam, aucun partage tiers.
        </p>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  required,
  type,
  placeholder,
}: {
  label: string;
  name: string;
  required?: boolean;
  type: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block">
        <span className="block text-[13px] font-semibold text-primary mb-1.5">
          {label} {required && <span className="text-accent">*</span>}
        </span>
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          className="w-full px-4 py-2.5 text-[15px] bg-bg-light border border-border rounded-[10px] text-text-dark placeholder:text-text-muted/60 focus:outline-none focus:border-accent focus:bg-bg-card transition-all"
        />
      </label>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="btn btn-primary w-full justify-center py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed mt-2"
      // data-attribute pour facilement hook un événement de conversion Google Ads ensuite
      data-conversion="lead-ads"
    >
      {pending ? (
        "Envoi en cours…"
      ) : (
        <>
          Recevoir mon devis sous 48h
          <ArrowRight size={16} />
        </>
      )}
    </button>
  );
}
