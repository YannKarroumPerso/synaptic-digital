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
      className={`${tight ? "py-16" : "py-[100px] lg:py-[110px]"} ${className}`}
    >
      {children}
    </section>
  );
}
