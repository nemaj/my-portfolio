"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { profile } from "@/data/profile";
import { experiences } from "@/data/experience";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";
import styles from "./Resume.module.scss";

export default function Resume() {
  return (
    <section id="resume" className={`section-padding ${styles.resume}`}>
      <div className="section-container">
        <SectionHeading
          label="Resume"
          title="Professional Overview"
          description="A snapshot of my career trajectory and technical expertise."
        />

        <div className={styles.grid}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={styles.summary}
          >
            <div className={styles.summaryHeader}>
              <FileText size={24} className={styles.icon} />
              <div>
                <h3 className={styles.name}>{profile.name}</h3>
                <p className={styles.title}>{profile.title}</p>
              </div>
            </div>

            <p className={styles.bio}>{profile.summary}</p>

            <div className={styles.details}>
              <div>
                <span className={styles.label}>Email</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
              <div>
                <span className={styles.label}>Phone</span>
                <a href={`tel:${profile.phone}`}>{profile.phone}</a>
              </div>
              <div>
                <span className={styles.label}>Location</span>
                <span>{profile.location}</span>
              </div>
            </div>

            <MagneticButton variant="primary" href="#">
              <Download size={18} />
              Download Resume
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={styles.timeline}
          >
            <h4 className={styles.timelineTitle}>Work History</h4>
            {experiences.map((exp, i) => (
              <div key={exp.id} className={styles.timelineItem}>
                <div className={styles.timelineDot}>
                  {i < experiences.length - 1 && <span className={styles.line} />}
                </div>
                <div className={styles.timelineContent}>
                  <span className={styles.period}>{exp.period}</span>
                  <h5 className={styles.company}>{exp.company}</h5>
                  <p className={styles.role}>{exp.role}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
