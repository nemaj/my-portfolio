"use client";

import { useEffect } from "react";
import { scrollToSection } from "@/lib/utils";

const SCROLL_TARGET_KEY = "scrollTarget";

function scrollToTarget(target: string) {
  if (target === "hero") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const element = document.getElementById(target);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function scrollToTargetWithRetry(target: string, attempts = 6) {
  if (target === "hero") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const element = document.getElementById(target);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  if (attempts > 0) {
    window.setTimeout(() => scrollToTargetWithRetry(target, attempts - 1), 100);
  }
}

export default function ScrollTargetHandler() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const target = sessionStorage.getItem(SCROLL_TARGET_KEY);
    if (target) {
      sessionStorage.removeItem(SCROLL_TARGET_KEY);
      scrollToTargetWithRetry(target);
    }

    if (window.location.hash) {
      history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
    }
  }, []);

  return null;
}
