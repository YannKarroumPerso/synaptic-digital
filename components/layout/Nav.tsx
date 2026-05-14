import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { href: "/agence", label: "L'agence" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Ressources" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-bg-light/85 backdrop-blur-xl border-b border-border">
      <div className="container-page flex items-center justify-between py-3 sm:py-4 gap-3">
        <Link
          href="/"
          className="font-sora font-extrabold text-[20px] sm:text-[22px] text-primary tracking-tight shrink-0"
        >
          Synaptic<span className="text-accent">.</span>
        </Link>

        {/* Liens desktop (cachés sous lg) */}
        <div className="hidden lg:flex gap-8">
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

        {/* CTA toujours visible + burger sous lg */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          <Link
            href="/contact"
            className="btn btn-primary whitespace-nowrap text-[12px] sm:text-[15px] py-2 px-3 sm:py-[14px] sm:px-6"
          >
            <span className="sm:hidden">Démarrer</span>
            <span className="hidden sm:inline">Démarrer mon projet</span>
          </Link>
          <MobileMenu links={navLinks} />
        </div>
      </div>
    </nav>
  );
}
