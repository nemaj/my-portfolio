"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { profile } from "@/data/profile";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";
import styles from "./Contact.module.scss";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const body = [
      `Name: ${formState.name}`,
      `Email: ${formState.email}`,
      "",
      formState.message,
    ].join("\n");

    const mailtoLink = `mailto:${profile.email}?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className={`section-padding ${styles.contact}`}>
      <div className="section-container">
        <SectionHeading
          label="Contact"
          title="Let's Build Something Exceptional"
          description="Available for senior frontend opportunities, startup projects, and enterprise web application development."
          align="center"
          className="mx-auto"
        />

        <div className={styles.grid}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={styles.info}
          >
            <div className={styles.infoCard}>
              <a href={`mailto:${profile.email}`} className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <Mail size={20} />
                </div>
                <div>
                  <span className={styles.infoLabel}>Email</span>
                  <span className={styles.infoValue}>{profile.email}</span>
                </div>
              </a>

              <a href={`tel:${profile.phone}`} className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <Phone size={20} />
                </div>
                <div>
                  <span className={styles.infoLabel}>Phone</span>
                  <span className={styles.infoValue}>{profile.phone}</span>
                </div>
              </a>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <MapPin size={20} />
                </div>
                <div>
                  <span className={styles.infoLabel}>Location</span>
                  <span className={styles.infoValue}>{profile.location}</span>
                </div>
              </div>
            </div>

            <div className={styles.social}>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GithubIcon size={20} />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className={styles.form}
          >
            <div className={styles.formRow}>
              <div className={styles.field}>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  placeholder="Your name"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                type="text"
                required
                value={formState.subject}
                onChange={(e) =>
                  setFormState({ ...formState, subject: e.target.value })
                }
                placeholder="Project inquiry"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                placeholder="Tell me about your project..."
              />
            </div>

            <MagneticButton type="submit" variant="primary">
              {submitted ? "Message Sent!" : "Send Message"}
              <Send size={18} />
            </MagneticButton>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
