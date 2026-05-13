"use server";

export type ContactFormState = {
  success?: boolean;
  error?: string;
  message?: string;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const projectType = formData.get("projectType") as string;
  const message = formData.get("message") as string;

  // Validation basique
  if (!name || !email || !message) {
    return { error: "Tous les champs obligatoires doivent être remplis." };
  }
  if (!email.includes("@")) {
    return { error: "L'email saisi semble invalide." };
  }

  // Si RESEND_API_KEY est configurée, on envoie un vrai email.
  // Sinon, on log dans la console (mode dev) et on simule succès.
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    try {
      const resp = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "contact@synaptic-digital.fr",
          to: "contact@synaptic-digital.fr",
          reply_to: email,
          subject: `Nouvelle demande de ${name} (${projectType || "type non précisé"})`,
          text: `Nom : ${name}\nEmail : ${email}\nType de projet : ${projectType || "—"}\n\nMessage :\n${message}`,
        }),
      });
      if (!resp.ok) {
        const errData = await resp.text();
        console.error("Resend error:", errData);
        return { error: "Une erreur est survenue. Réessayez ou écrivez-nous à contact@synaptic-digital.fr." };
      }
    } catch (err) {
      console.error("Contact submission error:", err);
      return { error: "Une erreur réseau est survenue. Réessayez dans un instant." };
    }
  } else {
    // Mode dev : log dans la console serveur
    console.log("📩 Nouveau message de contact (mode dev — pas d'envoi réel) :");
    console.log({ name, email, projectType, message });
  }

  return {
    success: true,
    message: "Message envoyé ! On vous répond sous 48h.",
  };
}
