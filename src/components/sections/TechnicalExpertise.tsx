"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Zap,
  Database,
  Component,
  Plug,
  Smartphone,
  Accessibility,
  Search,
} from "lucide-react";
import { expertiseAreas } from "@/data/expertise";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/animations";
import styles from "./TechnicalExpertise.module.scss";

const iconMap: Record<string, React.ElementType> = {
  layers: Layers,
  zap: Zap,
  database: Database,
  component: Component,
  plug: Plug,
  smartphone: Smartphone,
  accessibility: Accessibility,
  search: Search,
};

export default function TechnicalExpertise() {
  return (
    <section id="expertise" className={`section-padding ${styles.expertise}`}>
      <div className="section-container">
        <SectionHeading
          label="Technical Expertise"
          title="Core Competencies"
          description="Deep specialization across the full frontend engineering spectrum."
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
          {expertiseAreas.map((area) => {
            const Icon = iconMap[area.icon] || Layers;
            return (
              <motion.div key={area.title} variants={staggerItem} className={styles.card}>
                <div className={styles.iconWrapper}>
                  <Icon size={22} />
                </div>
                <h3 className={styles.cardTitle}>{area.title}</h3>
                <p className={styles.cardDesc}>{area.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
