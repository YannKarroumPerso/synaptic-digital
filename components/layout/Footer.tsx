import Link from "next/link";
import { Linkedin, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-bg-dark text-text-light pt-20 pb-8">
      <div className="container-page">
        <div className="grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 pb-10 mb-12 border-b border-white/10">
          <div>
            <div className="font-sora font-extrabold text-[22px] text-text-light mb-4">
              Synaptic<span className="text-accent">.</span>
            </div>
            <p className="text-text-light/70 text-sm max-w-[320px] leading-relaxed mb-6">
              L&apos;agence digitale qui livre aux petites PME. Beau, rapide, trouvé sur Google. En 3 semaines.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Linkedin, label: "LinkedIn", href: "#" },
                { Icon: Instagram, label: "Instagram", href: "#" },
                { Icon: Twitter, label: "X", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-white/[0.06] border border-white/10 rounded-[10px] flex items-center justify-center text-text-light/80 hover:bg-accent hover:text-white hover:border-accent hover:-translate-y-0.5 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
          <FooterColumn
            title="Services"
            links={[
              { label: "Site vitrine", href: "/#services" },
              { label: "E-commerce", href: "/#services" },
              { label: "Refonte", href: "/#services" },
              { label: "SEO & performance", href: "/#services" },
            ]}
          />
          <FooterColumn
            title="Agence"
            links={[
              { label: "Notre approche", href: "/#approche" },
              { label: "L'équipe", href: "/#equipe" },
              { label: "Réalisations", href: "/realisations" },
              { label: "Contact", href: "/#contact" },
            ]}
          />
          <FooterColumn
            title="Contact"
            links={[
              { label: "contact@synaptic-digital.fr", href: "mailto:contact@synaptic-digital.fr" },
              { label: "Réserver un appel", href: "/#contact" },
            ]}
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px] text-text-light/50">
          <span>© 2026 Synaptic Digital EURL. Tous droits réservés.</span>
          <span className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-text-light">
              Mentions légales
            </Link>
            <Link href="/mentions-legales#donnees" className="hover:text-text-light">
              Données personnelles
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h5 className="font-sora font-semibold text-[13px] text-accent uppercase tracking-wider mb-4">
        {title}
      </h5>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-text-light/70 text-sm hover:text-text-light transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
