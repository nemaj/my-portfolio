import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import styles from "./ProjectBackNav.module.scss";

export default function ProjectBackNav() {
  return (
    <nav className={styles.backNav} aria-label="Project navigation">
      <div className="section-container">
        <Link href="/#projects" className={styles.backLink}>
          <ArrowLeft size={16} />
          Back to Projects
        </Link>
      </div>
    </nav>
  );
}
