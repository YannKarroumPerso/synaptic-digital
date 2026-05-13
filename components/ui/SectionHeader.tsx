import { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  wide?: boolean;
  inverted?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  wide = false,
  inverted = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`${
        align === "center" ? "text-center mx-auto" : ""
      } ${wide ? "max-w-[860px]" : "max-w-[720px]"} mb-16`}
    >
      {eyebrow && (
        <span className="section-eyebrow">
          {eyebrow}
        </span>
      )}
      <h2 className={`mb-4 ${inverted ? "text-text-light" : "text-primary"}`}>
        {title}
      </h2>
      {description && (
        <p
          className={`text-[18px] leading-relaxed ${
            inverted ? "text-text-light/70" : "text-text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
