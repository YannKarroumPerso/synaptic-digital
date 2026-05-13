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
      className={`${tight ? "py-12" : "py-16 lg:py-20"} ${className}`}
    >
      {children}
    </section>
  );
}
