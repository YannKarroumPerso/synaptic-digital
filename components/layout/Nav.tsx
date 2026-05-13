import Link from "next/link";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/agence", label: "L'agence" },
  { href: "/services", label: "Services" },
  { href: "/#realisations", label: "Réalisations" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-bg-light/85 backdrop-blur-xl border-b border-border">
      <div className="container-page flex items-center justify-between py-4">
        <Link href="/" className="font-sora font-extrabold text-[22px] text-primary tracking-tight">
          Synaptic<span className="text-accent">.</span>
        </Link>
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
        <Button href="/#contact" variant="primary" className="text-[13px] sm:text-[15px] py-2.5 px-4 sm:py-[14px] sm:px-6">
          Démarrer mon projet
        </Button>
      </div>
    </nav>
  );
}
