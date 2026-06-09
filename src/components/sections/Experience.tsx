"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { experiences } from "@/data/experience";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import styles from "./Experience.module.scss";

export default function Experience() {
  const [activeId, setActiveId] = useState(experiences[0].id);

  return (
    <section id="experience" className={`section-padding ${styles.experience}`}>
      <div className="section-container">
        <SectionHeading
          label="Experience"
          title="Professional Journey"
          description="Building impactful digital products across startups, SaaS, and enterprise environments."
        />

        <div className={styles.layout}>
          <div className={styles.timeline}>
            {experiences.map((exp, index) => (
              <motion.button
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveId(exp.id)}
                className={`${styles.timelineItem} ${activeId === exp.id ? styles.active : ""}`}
              >
                <span className={styles.period}>{exp.period}</span>
                <span className={styles.company}>{exp.company}</span>
                <span className={styles.role}>{exp.role}</span>
              </motion.button>
            ))}
          </div>

          <div className={styles.details}>
            <AnimatePresence mode="wait">
              {experiences
                .filter((exp) => exp.id === activeId)
                .map((exp) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className={styles.detailCard}
                  >
                    <div className={styles.detailHeader}>
                      <div>
                        <h3 className={styles.detailCompany}>{exp.company}</h3>
                        <p className={styles.detailRole}>{exp.role}</p>
                        <p className={styles.detailPeriod}>{exp.period}</p>
                      </div>
                    </div>

                    <div className={styles.techStack}>
                      <h4 className={styles.sectionLabel}>Key Technologies</h4>
                      <div className={styles.techBadges}>
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="accent">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className={styles.projects}>
                      <h4 className={styles.sectionLabel}>Projects</h4>
                      {exp.projects.map((project) => (
                        <details key={project.name} className={styles.projectAccordion}>
                          <summary className={styles.projectSummary}>
                            <span>{project.name}</span>
                            <ChevronDown size={18} className={styles.chevron} />
                          </summary>
                          <div className={styles.projectContent}>
                            <p className={styles.projectDesc}>{project.description}</p>
                            <ul className={styles.highlights}>
                              {project.highlights.map((h) => (
                                <li key={h}>{h}</li>
                              ))}
                            </ul>
                            <div className={styles.projectTech}>
                              {project.technologies.map((t) => (
                                <Badge key={t} variant="outline">
                                  {t}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </details>
                      ))}
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
