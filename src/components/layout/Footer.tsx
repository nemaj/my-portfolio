import { profile } from "@/data/profile";
import { Mail, MapPin, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import styles from "./Footer.module.scss";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="section-container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.initials}>JM</span>
              <div>
                <p className={styles.name}>{profile.name}</p>
                <p className={styles.title}>{profile.title}</p>
              </div>
            </div>
            <p className={styles.tagline}>{profile.positioning}</p>
          </div>

          <div className={styles.links}>
            <h4 className={styles.heading}>Navigation</h4>
            <ul>
              {["About", "Experience", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`}>{item}</a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className={styles.contact}>
            <h4 className={styles.heading}>Contact</h4>
            <ul>
              <li>
                <Mail size={16} />
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <Phone size={16} />
                <a href={`tel:${profile.phone}`}>{profile.phone}</a>
              </li>
              <li>
                <MapPin size={16} />
                <span>{profile.location}</span>
              </li>
            </ul>
          </div>

          <div className={styles.social}>
            <h4 className={styles.heading}>Connect</h4>
            <div className={styles.socialLinks}>
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
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {year} {profile.name}. All rights reserved.</p>
          <p className={styles.credit}>
            Built with Next.js, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
