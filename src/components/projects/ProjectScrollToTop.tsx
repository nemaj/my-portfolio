"use client";

import { useEffect } from "react";

interface ProjectScrollToTopProps {
  slug: string;
}

export default function ProjectScrollToTop({ slug }: ProjectScrollToTopProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [slug]);

  return null;
}
