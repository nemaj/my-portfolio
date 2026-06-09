"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, projectCategories, contributionFilters } from "@/data/projects";
import { contributionLabels } from "@/lib/site";
import type { ProjectContribution } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import styles from "./Projects.module.scss";

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setGlowPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className={styles.card}
      style={
        {
          "--glow-x": `${glowPos.x}%`,
          "--glow-y": `${glowPos.y}%`,
          "--accent": project.accentColor,
        } as React.CSSProperties
      }
    >
      <Link href={`/projects/${project.slug}`} className={styles.cardLink}>
        <div className={`${styles.imageWrapper} bg-gradient-to-br ${project.gradient}`}>
          <div className={styles.imageOverlay}>
            <span className={styles.viewCase}>View Case Study</span>
            <ArrowUpRight size={24} />
          </div>
          <div className={styles.projectInitial}>
            {project.title.charAt(0)}
          </div>
        </div>

        <div className={styles.cardContent}>
          <div className={styles.cardMeta}>
            <Badge variant="accent">{project.category}</Badge>
            <Badge variant="outline">{contributionLabels[project.contribution]}</Badge>
            <span className={styles.year}>{project.year}</span>
          </div>
          <h3 className={styles.cardTitle}>{project.title}</h3>
          <p className={styles.cardDesc}>{project.description}</p>
          <div className={styles.cardTech}>
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const [contributionFilter, setContributionFilter] = useState<
    ProjectContribution | "all"
  >("all");

  const filtered = projects.filter((p) => {
    const matchesCategory = filter === "All" || p.category === filter;
    const matchesContribution =
      contributionFilter === "all" || p.contribution === contributionFilter;
    return matchesCategory && matchesContribution;
  });

  return (
    <section id="projects" className={`section-padding ${styles.projects}`}>
      <div className="section-container">
        <SectionHeading
          label="Featured Projects"
          title="Selected Work"
          description="Enterprise platforms, SaaS products, and digital experiences built for real-world impact."
        />

        <div className={styles.filters}>
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`${styles.filterBtn} ${filter === cat ? styles.active : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.filters}>
          {contributionFilters.map((item) => (
            <button
              key={item.value}
              onClick={() => setContributionFilter(item.value)}
              className={`${styles.filterBtn} ${contributionFilter === item.value ? styles.active : ""}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <motion.div layout className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
