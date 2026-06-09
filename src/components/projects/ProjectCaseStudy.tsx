"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { Project } from "@/types";
import { contributionLabels } from "@/lib/site";
import Badge from "@/components/ui/Badge";
import styles from "./ProjectCaseStudy.module.scss";

interface ProjectCaseStudyProps {
  project: Project;
}

export default function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  return (
    <article>
      <section className={`${styles.hero} bg-gradient-to-br ${project.gradient}`}>
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.meta}>
              <Badge variant="accent">{project.category}</Badge>
              <Badge variant="outline">
                {contributionLabels[project.contribution]}
              </Badge>
              <span className={styles.year}>{project.year}</span>
              <span className={styles.role}>{project.role}</span>
            </div>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.description}>{project.longDescription}</p>
            <div className={styles.techStack}>
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
        <div className={styles.heroOverlay} />
      </section>

      <section className={`section-padding ${styles.content}`}>
        <div className="section-container">
          <div className={styles.grid}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={styles.block}
            >
              <h2 className={styles.blockTitle}>Business Impact</h2>
              <ul className={styles.list}>
                {project.impact.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={18} className={styles.checkIcon} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={styles.block}
            >
              <h2 className={styles.blockTitle}>Challenges Solved</h2>
              <ul className={styles.list}>
                {project.challenges.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={18} className={styles.checkIcon} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.preview}
          >
            <div
              className={`${styles.previewImage} bg-gradient-to-br ${project.gradient}`}
            >
              <span
                className={styles.previewInitial}
                style={{ color: project.accentColor }}
              >
                {project.title.charAt(0)}
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </article>
  );
}
