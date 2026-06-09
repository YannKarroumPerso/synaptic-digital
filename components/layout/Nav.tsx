import Link from "next/link";
import { Phone } from "lucide-react";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { href: "/agence", label: "L'agence" },
  { href: "/services", label: "Services" },
  { href: "/services/automatisation-pme", label: "Automatisation" },
  { href: "/blog", label: "Ressources" },
];

const PHONE_DISPLAY = "07 83 33 70 65";
const PHONE_TEL = "tel:+33783337065";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-bg-light/85 backdrop-blur-xl border-b border-border">
      <div className="container-page py-3 sm:py-4">
        {/* Layout MOBILE / TABLETTE : burger gauche · logo centre · CTA droite */}
        <div className="lg:hidden flex items-center gap-2">
          <div className="flex-1 flex justify-start">
            <MobileMenu links={navLinks} />
          </div>
          <Link
            href="/"
            className="font-sora font-extrabold text-[20px] sm:text-[22px] text-primary tracking-tight"
            aria-label="Accueil Synaptic Digital"
          >
            Synaptic<span className="text-accent">.</span>
          </Link>
          <div className="flex-1 flex justify-end items-center gap-1.5 sm:gap-2">
            <a
              href={PHONE_TEL}
              aria-label={`Nous appeler au ${PHONE_DISPLAY}`}
              className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl border border-border bg-bg-card text-primary hover:bg-accent hover:text-white hover:border-accent transition-all shrink-0"
              data-track-cta="header_phone_call"
              data-track-location="nav"
            >
              <Phone size={18} strokeWidth={2} />
            </a>
            <Link
              href="/devis"
              className="btn btn-primary whitespace-nowrap text-[12px] sm:text-[14px] py-2 px-3 sm:py-2.5 sm:px-4"
            data-track-cta="header_cta_demarrer"
            data-track-location="nav"
            >
              <span className="sm:hidden">Démarrer</span>
              <span className="hidden sm:inline">Démarrer mon projet</span>
            </Link>
          </div>
        </div>

        {/* Layout DESKTOP : logo gauche · liens centre · CTA droite */}
        <div className="hidden lg:flex items-center justify-between gap-6">
          <Link
            href="/"
            className="font-sora font-extrabold text-[22px] text-primary tracking-tight"
            aria-label="Accueil Synaptic Digital"
          >
            Synaptic<span className="text-accent">.</span>
          </Link>
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] text-text-dark font-medium hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href={PHONE_TEL}
              aria-label={`Nous appeler au ${PHONE_DISPLAY}`}
              className="inline-flex items-center gap-2 text-[15px] font-medium text-text-dark hover:text-accent transition-colors whitespace-nowrap"
              data-track-cta="header_phone_call"
              data-track-location="nav"
            >
              <Phone size={16} strokeWidth={2.2} className="text-accent" />
              {PHONE_DISPLAY}
            </a>
            <Link
              href="/devis"
              className="btn btn-primary whitespace-nowrap text-[15px] py-[14px] px-6"
              data-track-cta="header_cta_demarrer"
              data-track-location="nav"
            >
              Démarrer mon projet
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
