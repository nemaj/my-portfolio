"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";
import { cn, scrollToSection } from "@/lib/utils";
import styles from "./Header.module.scss";

const navLinks = [
  { label: "About", href: "about" },
  { label: "Experience", href: "experience" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Expertise", href: "expertise" },
  { label: "Contact", href: "contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    scrollToSection(href);
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(styles.header, scrolled && styles.scrolled)}
    >
      <div className="section-container flex items-center justify-between h-20">
        <button
          onClick={() => handleNav("hero")}
          className={styles.logo}
          aria-label="Go to top"
        >
          <span className={styles.logoInitials}>JM</span>
          <span className={styles.logoName}>{profile.name.split(" ")[0]}</span>
        </button>

        <nav className={styles.desktopNav} aria-label="Main navigation">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={styles.navLink}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => handleNav("contact")}
          className={styles.ctaButton}
        >
          Let&apos;s Talk
        </button>

        <button
          className={styles.mobileToggle}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={styles.mobileMenu}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleNav(link.href)}
                className={styles.mobileLink}
              >
                {link.label}
              </motion.button>
            ))}
            <button
              onClick={() => handleNav("contact")}
              className={styles.mobileCta}
            >
              Let&apos;s Talk
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
