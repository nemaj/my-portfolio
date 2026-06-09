export type ProjectCategory =
  | "SaaS"
  | "Enterprise"
  | "Dashboard"
  | "CRM"
  | "Booking Platform"
  | "Insurance";

export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  positioning: string;
  summary: string;
  linkedin: string;
  github: string;
  availability: "available" | "limited" | "unavailable";
}

export interface Stat {
  label: string;
  value: string;
}

export interface ExperienceProject {
  name: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  technologies: string[];
  projects: ExperienceProject[];
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  longDescription: string;
  technologies: string[];
  impact: string[];
  challenges: string[];
  liveDemo?: string;
  github?: string;
  gradient: string;
  accentColor: string;
  year: string;
  role: string;
}

export interface Expertise {
  title: string;
  description: string;
  icon: string;
}
