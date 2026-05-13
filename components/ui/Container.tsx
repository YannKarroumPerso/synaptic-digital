import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  narrow?: boolean;
  className?: string;
}

export function Container({ children, narrow = false, className = "" }: ContainerProps) {
  return (
    <div className={`${narrow ? "container-narrow" : "container-page"} ${className}`}>
      {children}
    </div>
  );
}
