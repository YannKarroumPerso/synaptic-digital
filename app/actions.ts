"use server";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xlgagnly";

export type ContactFormState = {
  success?: boolean;
  error?: string;
  message?: string;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const phone = (formData.get("phone") as string) || "";
  const projectType = (formData.get("projectType") as string) || "";
  const budget = (formData.get("budget") as string) || "";
  const message = (formData.get("message") as string)?.trim() || "";
  const source = (formData.get("source") as string) || "site";
  // Honeypot anti-spam
  const honeypot = formData.get("website") as string;

  // Validation
  if (!name || !email) {
    return { error: "Le nom et l'email sont obligatoires." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "L'email saisi semble invalide." };
  }
  // Pour la landing page Ads : téléphone obligatoire (pour rappel rapide)
  if (source === "ads" && !phone) {
    return { error: "Le numéro de téléphone est obligatoire pour qu'on puisse vous rappeler." };
  }
  // Pour le formulaire site : message obligatoire
  if (source !== "ads" && !message) {
    return { error: "Merci de décrire brièvement votre projet." };
  }
  // Honeypot
  if (honeypot) {
    return { success: true, message: "Message envoyé ! On vous répond sous 48h." };
  }

  // Envoi Formspree
  try {
    const resp = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone: phone || "Non précisé",
        projectType: projectType || "Non précisé",
        budget: budget || "Non précisé",
        message: message || "(pas de message)",
        source,
        _subject: `[${source.toUpperCase()}] Demande de ${name}${projectType ? ` · ${projectType}` : ""}${budget ? ` · ${budget}` : ""}`,
        _replyto: email,
      }),
    });

    if (!resp.ok) {
      const errBody = await resp.text();
      console.error("Formspree error:", resp.status, errBody);
      return {
        error: "Une erreur est survenue. Réessayez ou écrivez-nous à contact@synaptic-digital.fr.",
      };
    }
  } catch (err) {
    console.error("Contact submission error:", err);
    return { error: "Une erreur réseau est survenue. Réessayez dans un instant." };
  }

  return {
    success: true,
    message: "Demande envoyée ! On vous rappelle sous 48h.",
  };
}
