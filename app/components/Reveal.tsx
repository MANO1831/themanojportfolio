"use client";

import type { ReactNode } from "react";
import { useReveal } from "@/src/hooks/use-reveal";

type RevealProps = {
  as?: "section" | "footer";
  id?: string;
  className?: string;
  children: ReactNode;
  threshold?: number;
};

export function Reveal({
  as = "section",
  id,
  className = "",
  children,
  threshold = 0.15,
}: RevealProps) {
  const { ref, shown } = useReveal<HTMLElement>(threshold);
  const Element = as;

  return (
    <Element
      ref={ref}
      id={id}
      className={`reveal-section${shown ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
    >
      {children}
    </Element>
  );
}