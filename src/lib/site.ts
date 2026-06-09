const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const resumeUrl = `${basePath}/Jamen-Mama-Resume.pdf`;

export const contributionLabels = {
  "built-from-scratch": "Built From Scratch",
  "major-contributor": "Major Contributor",
  "contributor-maintenance": "Contributor / Maintenance",
} as const;
