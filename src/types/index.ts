import type { StaticImageData } from "next/image";

export type ProjectHeadlineCategory =
  | "SaaS Products"
  | "Marketplaces"
  | "FinTech / InsurTech"
  | "Enterprise Applications"
  | "Internal Business Tools";

export type ProjectCategory =
  | "Marketplace / Rental Platform"
  | "SaaS CRM Platform"
  | "Enterprise / Financial Tool"
  | "Marketplace Platform"
  | "Admin Dashboard / Internal SaaS"
  | "InsurTech / Financial Services Platform";

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
  headlineCategory: ProjectHeadlineCategory;
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
  images?: StaticImageData[];
}

export interface Expertise {
  title: string;
  description: string;
  icon: string;
}
