"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/animations";
import styles from "./Skills.module.scss";

export default function Skills() {
  return (
    <section id="skills" className={`section-padding ${styles.skills}`}>
      <div className="section-container">
        <SectionHeading
          label="Skills"
          title="Technical Proficiency"
          description="A comprehensive toolkit for building modern, scalable frontend applications."
          align="center"
          className="mx-auto"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className={styles.grid}
        >
          {skillGroups.map((group) => (
            <motion.div key={group.title} variants={staggerItem} className={styles.card}>
              <h3 className={styles.cardTitle}>{group.title}</h3>
              <div className={styles.skillList}>
                {group.skills.map((skill) => (
                  <span key={skill} className={styles.skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
