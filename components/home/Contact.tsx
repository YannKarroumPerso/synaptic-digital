"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { submitContactForm, ContactFormState } from "@/app/actions";
import { Clock, Phone, FileText } from "lucide-react";

const initialState: ContactFormState = {};

export function Contact() {
  const [state, formAction] = useFormState(submitContactForm, initialState);

  return (
    <Section id="contact" className="relative overflow-hidden bg-bg-dark text-text-light">
      <div className="absolute -top-36 -left-24 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,123,71,0.1)_0%,transparent_70%)] z-0" />
      <Container narrow className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <span className="section-eyebrow">Démarrer mon projet</span>
            <h2 className="text-text-light mb-5 mt-4">Parlons-en concrètement</h2>
            <p className="text-text-light/70 text-[17px] leading-relaxed mb-8">
              Premier échange gratuit, sans engagement. On vous répond sous 48h, on cale 30 minutes ensemble pour comprendre votre projet, et si on est d&apos;accord, on vous envoie une proposition détaillée sous 5 jours.
            </p>
            <div className="flex flex-col gap-5 pt-7 border-t border-white/10">
              <ContactStep
                Icon={Clock}
                title="Sous 48h"
                description="Vous recevez un email de réponse"
              />
              <ContactStep
                Icon={Phone}
                title="30 minutes"
                description="Un échange pour cadrer votre projet"
              />
              <ContactStep
                Icon={FileText}
                title="Sous 5 jours"
                description="Proposition détaillée si on avance ensemble"
              />
            </div>
          </div>
          <form
            action={formAction}
            className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
          >
            <FormField label="Nom" name="name" required type="text" placeholder="Votre nom" />
            <FormField
              label="Email professionnel"
              name="email"
              required
              type="email"
              placeholder="vous@entreprise.fr"
            />
            <div className="mb-4">
              <label className="block">
                <span className="block text-[13px] font-semibold text-text-light mb-2">
                  Type de projet
                </span>
                <select
                  name="projectType"
                  className="w-full px-4 py-3 font-inter text-[15px] bg-white/[0.06] border border-white/15 rounded-[10px] text-text-light focus:outline-none focus:border-accent focus:bg-white/[0.08] transition-all"
                >
                  <option value="">— Choisir —</option>
                  <option value="Site vitrine">Site vitrine</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Refonte de site existant">Refonte de site existant</option>
                  <option value="SEO et performance">SEO &amp; performance</option>
                  <option value="Autre">Autre / je ne sais pas encore</option>
                </select>
              </label>
            </div>
            <div className="mb-4">
              <label className="block">
                <span className="block text-[13px] font-semibold text-text-light mb-2">
                  Parlez-nous de votre projet <span className="text-accent">*</span>
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Quelques lignes suffisent — vos objectifs, votre activité, vos délais, ce qui vous bloque aujourd'hui."
                  className="w-full px-4 py-3 font-inter text-[15px] bg-white/[0.06] border border-white/15 rounded-[10px] text-text-light placeholder:text-text-light/40 focus:outline-none focus:border-accent focus:bg-white/[0.08] transition-all resize-none"
                />
              </label>
            </div>
            {/* Honeypot anti-spam — champ caché, les humains ne le verront pas */}
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
              <p className="mt-3 text-sm text-red-300 text-center">{state.error}</p>
            )}
            {state.success && (
              <p className="mt-3 text-sm text-green-300 text-center font-semibold">
                ✓ {state.message}
              </p>
            )}
            <p className="mt-3.5 text-xs text-text-light/50 text-center leading-relaxed">
              En envoyant ce formulaire, vous acceptez d&apos;être recontacté par email. Vos données ne sont pas partagées avec des tiers.
            </p>
          </form>
        </div>
      </Container>
    </Section>
  );
}

function FormField({
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
    <div className="mb-4">
      <label className="block">
        <span className="block text-[13px] font-semibold text-text-light mb-2">
          {label} {required && <span className="text-accent">*</span>}
        </span>
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          className="w-full px-4 py-3 font-inter text-[15px] bg-white/[0.06] border border-white/15 rounded-[10px] text-text-light placeholder:text-text-light/40 focus:outline-none focus:border-accent focus:bg-white/[0.08] transition-all"
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
      className="btn btn-primary w-full justify-center py-4 text-base mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {pending ? "Envoi en cours…" : "Envoyer ma demande →"}
    </button>
  );
}

function ContactStep({
  Icon,
  title,
  description,
}: {
  Icon: typeof Clock;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-[52px] h-[52px] bg-accent/12 rounded-2xl flex items-center justify-center shrink-0 text-accent">
        <Icon size={24} />
      </div>
      <div>
        <div className="font-sora font-semibold text-[17px] text-text-light leading-tight">
          {title}
        </div>
        <div className="text-sm text-text-light/60 mt-0.5">{description}</div>
      </div>
    </div>
  );
}
