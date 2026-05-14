import Link from "next/link";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { href: "/agence", label: "L'agence" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Ressources" },
];

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
          <div className="flex-1 flex justify-end">
            <Link
              href="/devis"
              className="btn btn-primary whitespace-nowrap text-[12px] sm:text-[14px] py-2 px-3 sm:py-2.5 sm:px-4"
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
          <Link
            href="/devis"
            className="btn btn-primary whitespace-nowrap text-[15px] py-[14px] px-6"
          >
            Démarrer mon projet
          </Link>
        </div>
      </div>
    </nav>
  );
}
