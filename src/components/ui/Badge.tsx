"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-colors",
        variant === "default" &&
          "bg-bg-tertiary text-text-secondary border border-white/[0.06]",
        variant === "accent" &&
          "bg-accent/10 text-accent-light border border-accent/20",
        variant === "outline" &&
          "bg-transparent text-text-muted border border-white/[0.08]",
        className
      )}
    >
      {children}
    </motion.span>
  );
}
