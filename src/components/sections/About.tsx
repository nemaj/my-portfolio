"use client";

import { motion } from "framer-motion";
import { profile, aboutStats, aboutHighlights } from "@/data/profile";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/animations";
import styles from "./About.module.scss";

export default function About() {
  return (
    <section id="about" className={`section-padding ${styles.about}`}>
      <div className="section-container">
        <SectionHeading
          label="About"
          title="Engineering Digital Products That Scale"
          description={profile.positioning}
        />

        <div className={styles.grid}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={styles.content}
          >
            <p className={styles.intro}>
              <strong>{profile.name}</strong> is a Senior Frontend Developer with
              extensive experience building scalable web applications for startups,
              SaaS businesses, insurance platforms, booking systems, and enterprise
              products.
            </p>
            <p className={styles.description}>
              With over 8 years of hands-on experience, I specialize in architecting
              performant frontend systems using React, Next.js, Angular, and TypeScript.
              I thrive in cross-functional teams, translating complex business
              requirements into elegant, user-centered interfaces.
            </p>

            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={styles.highlights}
            >
              {aboutHighlights.map((item) => (
                <motion.li key={item} variants={staggerItem} className={styles.highlightItem}>
                  <span className={styles.bullet} />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className={styles.stats}
          >
            {aboutStats.map((stat) => (
              <motion.div key={stat.label} variants={staggerItem} className={styles.statCard}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
