"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import styles from "./ProjectBackNav.module.scss";

export default function ProjectBackNav() {
  const router = useRouter();

  const handleBackToProjects = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("scrollTarget", "projects");
    }

    router.push("/", { scroll: false });
  };

  return (
    <nav className={styles.backNav} aria-label="Project navigation">
      <div className="section-container">
        <button
          type="button"
          onClick={handleBackToProjects}
          className={styles.backLink}
        >
          <ArrowLeft size={16} />
          Back to Projects
        </button>
      </div>
    </nav>
  );
}
