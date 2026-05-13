import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary";
  arrow?: boolean;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function Button({
  href,
  variant = "primary",
  arrow = false,
  children,
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = `btn ${variant === "primary" ? "btn-primary" : "btn-secondary"} ${
    arrow ? "btn-arrow" : ""
  } ${className}`;

  if (href) {
    if (href.startsWith("/") || href.startsWith("#")) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
