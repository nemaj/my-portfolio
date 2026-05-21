"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

type ScrollRevealProps = {
  as?: "div" | "section" | "article";
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  labelledBy?: string;
};

export default function ScrollReveal({
  as: Tag = "div",
  children,
  className = "",
  delay = 0,
  id,
  labelledBy
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      id={id}
      aria-labelledby={labelledBy}
      className={`scroll-reveal${isVisible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties & Record<"--reveal-delay", string>}
    >
      {children}
    </Tag>
  );
}
