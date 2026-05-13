import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { Clock, Phone, FileText } from "lucide-react";

export function Contact() {
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
          <ContactForm variant="dark" />
        </div>
      </Container>
    </Section>
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
