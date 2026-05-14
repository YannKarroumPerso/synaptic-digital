"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitContactForm, ContactFormState } from "@/app/actions";

const initialState: ContactFormState = {};

interface ContactFormProps {
 variant?: "light" | "dark";
}

export function ContactForm({ variant = "dark" }: ContactFormProps) {
 const [state, formAction] = useFormState(submitContactForm, initialState);
 const isDark = variant === "dark";

 const labelClass = isDark ? "text-text-light" : "text-primary";
 const inputBase = isDark
 ? "bg-white/[0.06] border-white/15 text-text-light placeholder:text-text-light/40 focus:bg-white/[0.08]"
 : "bg-bg-light border-border text-text-dark placeholder:text-text-muted/60 focus:bg-bg-card";
 const containerClass = isDark
 ? "bg-white/[0.04] border border-white/10 backdrop-blur-sm"
 : "bg-bg-card border border-border shadow-sm";
 const legalClass = isDark ? "text-text-light/50" : "text-text-muted";

 return (
 <form action={formAction} className={`${containerClass} rounded-3xl p-8`}>
 <FormField
 label="Nom"
 name="name"
 required
 type="text"
 placeholder="Votre nom"
 labelClass={labelClass}
 inputClass={inputBase}
 />
 <FormField
 label="Email professionnel"
 name="email"
 required
 type="email"
 placeholder="vous@entreprise.fr"
 labelClass={labelClass}
 inputClass={inputBase}
 />
 <div className="mb-4">
 <label className="block">
 <span className={`block text-[13px] font-semibold ${labelClass} mb-2`}>
 Type de projet
 </span>
 <select
 name="projectType"
 className={`w-full px-4 py-3 font-inter text-[15px] border rounded-[10px] focus:outline-none focus:border-accent transition-all ${inputBase}`}
 >
 <option value="">, Choisir , </option>
 <option value="Site vitrine">Site vitrine</option>
 <option value="E-commerce">E-commerce</option>
 <option value="Refonte de site existant">Refonte de site existant</option>
 <option value="SEO et performance">SEO &amp; performance</option>
 <option value="Communication social média">Communication social média</option>
 <option value="Autre">Autre / je ne sais pas encore</option>
 </select>
 </label>
 </div>
 <div className="mb-4">
 <label className="block">
 <span className={`block text-[13px] font-semibold ${labelClass} mb-2`}>
 Parlez-nous de votre projet <span className="text-accent">*</span>
 </span>
 <textarea
 name="message"
 required
 rows={5}
 placeholder="Quelques lignes suffisent, vos objectifs, votre activité, vos délais, ce qui vous bloque aujourd'hui."
 className={`w-full px-4 py-3 font-inter text-[15px] border rounded-[10px] focus:outline-none focus:border-accent transition-all resize-none ${inputBase}`}
 />
 </label>
 </div>
 {/* Honeypot anti-spam */}
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
 <p className="mt-3 text-sm text-green-400 text-center font-semibold">
 ✓ {state.message}
 </p>
 )}
 <p className={`mt-3.5 text-xs ${legalClass} text-center leading-relaxed`}>
 En envoyant ce formulaire, vous acceptez d&apos;être recontacté par email. Vos données ne sont pas partagées avec des tiers.
 </p>
 </form>
 );
}

function FormField({
 label,
 name,
 required,
 type,
 placeholder,
 labelClass,
 inputClass,
}: {
 label: string;
 name: string;
 required?: boolean;
 type: string;
 placeholder?: string;
 labelClass: string;
 inputClass: string;
}) {
 return (
 <div className="mb-4">
 <label className="block">
 <span className={`block text-[13px] font-semibold ${labelClass} mb-2`}>
 {label} {required && <span className="text-accent">*</span>}
 </span>
 <input
 type={type}
 name={name}
 required={required}
 placeholder={placeholder}
 className={`w-full px-4 py-3 font-inter text-[15px] border rounded-[10px] focus:outline-none focus:border-accent transition-all ${inputClass}`}
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
