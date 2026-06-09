"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "mb-16 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent-light mb-4">
        {label}
      </span>
      <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-[-0.02em] text-text-primary mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg leading-relaxed text-text-muted">{description}</p>
      )}
    </motion.div>
  );
}
