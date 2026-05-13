import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  tight?: boolean;
}

export function Section({ children, id, className = "", tight = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`${tight ? "py-10" : "py-12 lg:py-16"} ${className}`}
    >
      {children}
    </section>
  );
}
