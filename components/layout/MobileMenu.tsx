"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X, Mail, MapPin } from "lucide-react";

type NavLink = { href: string; label: string };

export function MobileMenu({ links }: { links: NavLink[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Pour SSR : on attend que le composant soit monté côté client avant de rendre le portal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock scroll body quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Fermer le menu sur ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const drawer = (
    <>
      {/* Backdrop */}
      <div
        className={`lg:hidden fixed inset-0 z-[100] bg-bg-dark/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer right-side */}
      <aside
        className={`lg:hidden fixed top-0 right-0 bottom-0 z-[110] w-[min(380px,88vw)] bg-bg-light shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
      >
        {/* Header du drawer */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="font-sora font-extrabold text-[22px] text-primary tracking-tight"
          >
            Synaptic<span className="text-accent">.</span>
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="w-11 h-11 flex items-center justify-center rounded-xl text-primary hover:bg-bg-warm transition-colors"
            aria-label="Fermer le menu"
          >
            <X size={22} strokeWidth={2} />
          </button>
        </div>

        {/* Liens nav */}
        <nav className="flex-1 flex flex-col gap-1 px-4 py-6 overflow-y-auto">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="group flex items-center justify-between text-[20px] font-sora font-semibold text-primary py-4 px-3 rounded-xl hover:bg-bg-card transition-colors"
            >
              <span>{link.label}</span>
              <span className="text-accent text-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                →
              </span>
            </Link>
          ))}
        </nav>

        {/* Footer du drawer : contact direct */}
        <div className="px-6 py-6 border-t border-border">
          <div className="flex flex-col gap-2.5 text-sm">
            <a
              href="mailto:contact@synaptic-digital.fr"
              className="flex items-center gap-2.5 text-text-muted hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Mail size={14} className="text-accent" />
              contact@synaptic-digital.fr
            </a>
            <div className="flex items-center gap-2.5 text-text-muted">
              <MapPin size={14} className="text-accent" />
              Charente et Charente-Maritime
            </div>
          </div>
        </div>
      </aside>
    </>
  );

  return (
    <>
      {/* Bouton burger reste dans la nav */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="lg:hidden w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl border border-border bg-bg-card text-primary hover:bg-primary hover:text-white hover:border-primary transition-all shrink-0"
        aria-label="Ouvrir le menu"
        aria-expanded={isOpen}
      >
        <Menu size={20} strokeWidth={2} className="sm:hidden" />
        <Menu size={22} strokeWidth={2} className="hidden sm:block" />
      </button>

      {/* Drawer + backdrop sont portés directement sous document.body
          pour échapper au stacking context créé par backdrop-blur de la nav */}
      {mounted && createPortal(drawer, document.body)}
    </>
  );
}
