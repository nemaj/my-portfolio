"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { profile, heroTechnologies } from "@/data/profile";
import AnimatedText from "@/components/ui/AnimatedText";
import Badge from "@/components/ui/Badge";
import MagneticButton from "@/components/ui/MagneticButton";
import { scrollToSection } from "@/lib/utils";
import styles from "./Hero.module.scss";

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const init = () => {
      particles.length = 0;
      const count = Math.min(60, Math.floor(canvas.offsetWidth / 20));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.offsetWidth) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.offsetHeight) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96, 165, 250, ${p.opacity})`;
        ctx.fill();
      });
      animationId = requestAnimationFrame(draw);
    };

    resize();
    init();
    draw();
    window.addEventListener("resize", () => { resize(); init(); });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", () => { resize(); init(); });
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.particles} />;
}

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
      });
    };
    const el = heroRef.current;
    el?.addEventListener("mousemove", handleMouseMove);
    return () => el?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="hero" ref={heroRef} className={styles.hero}>
      <div className={styles.gridBg} />
      <ParticleField />

      <div
        className={styles.gradientOrb}
        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
      />

      <div className="section-container relative z-10">
        <div className={styles.content}>
          <div className={styles.textCol}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={styles.availability}
            >
              <span className={styles.dot} />
              Available for new opportunities
            </motion.div>

            <AnimatedText
              text="Building Scalable Frontend Experiences for Modern Businesses"
              className={styles.headline}
              delay={0.3}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className={styles.subheadline}
            >
              Senior Frontend Developer with 8+ years of experience delivering
              enterprise-grade web applications, SaaS platforms, and startup
              products using React, Next.js, Angular, and TypeScript.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
              className={styles.ctas}
            >
              <MagneticButton
                variant="primary"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
                <ArrowRight size={18} />
              </MagneticButton>
              <MagneticButton
                variant="secondary"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className={styles.techBadges}
            >
              {heroTechnologies.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={styles.profileCol}
          >
            <div className={styles.profileCard}>
              <div className={styles.profileImage}>
                <span className={styles.initials}>JM</span>
                <div className={styles.profileGlow} />
              </div>
              <div className={styles.profileInfo}>
                <h3 className={styles.profileName}>{profile.name}</h3>
                <p className={styles.profileTitle}>{profile.title}</p>
                <p className={styles.profileLocation}>{profile.location}</p>
              </div>
              <div className={styles.experienceCounter}>
                <span className={styles.counterValue}>8+</span>
                <span className={styles.counterLabel}>Years of Experience</span>
              </div>
            </div>

            <div className={styles.floatingTech}>
              {["React", "Next.js", "TS"].map((tech, i) => (
                <motion.span
                  key={tech}
                  className={styles.floatingBadge}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={() => scrollToSection("about")}
          className={styles.scrollIndicator}
          aria-label="Scroll to about section"
        >
          <span>Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={18} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
