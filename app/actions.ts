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
  const projectType = (formData.get("projectType") as string) || "";
  const message = (formData.get("message") as string)?.trim();
  // Honeypot anti-spam : si rempli, on simule un succès sans envoyer
  const honeypot = formData.get("website") as string;

  // Validation basique
  if (!name || !email || !message) {
    return { error: "Tous les champs obligatoires doivent être remplis." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "L'email saisi semble invalide." };
  }
  if (honeypot) {
    // Bot détecté — on retourne succès sans envoyer
    return { success: true, message: "Message envoyé ! On vous répond sous 48h." };
  }

  // Envoi via Formspree (même endpoint que la production actuelle)
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
        projectType: projectType || "Non précisé",
        message,
        _subject: `Nouvelle demande de ${name}${projectType ? ` — ${projectType}` : ""}`,
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
    message: "Message envoyé ! On vous répond sous 48h.",
  };
}
