import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "blackfin",
    company: "BLACKFIN TECHNOLOGY",
    role: "Frontend Developer",
    period: "Jan 2018 — Apr 2026",
    technologies: [
      "React.js",
      "Next.js",
      "Angular",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "SASS",
      "Firebase",
    ],
    projects: [
      {
        name: "Partbnb",
        description: "Booking platform interfaces with SSR and dynamic listings.",
        technologies: ["Angular", "TypeScript", "Material UI", "SASS", "REST APIs", "SSR"],
        highlights: [
          "Built booking platform interfaces for property reservations",
          "Implemented server-side rendering for SEO and performance",
          "Developed dynamic listing and availability components",
        ],
      },
      {
        name: "LifeDirect",
        description: "Insurance platform with dynamic dashboards and policy management.",
        technologies: ["React.js", "TypeScript", "REST APIs"],
        highlights: [
          "Developed insurance platform UI with complex form workflows",
          "Built dynamic dashboards for policy and claims management",
          "Integrated REST APIs for real-time data visualization",
        ],
      },
      {
        name: "MotorShare",
        description: "Vehicle sharing platform with real-time booking flows.",
        technologies: ["React.js", "Next.js", "Firebase", "SASS"],
        highlights: [
          "Built vehicle sharing platform with booking and availability",
          "Integrated Firebase for authentication and real-time updates",
          "Designed responsive interfaces for mobile-first users",
        ],
      },
      {
        name: "Little Ones Admin Panel",
        description: "Admin dashboard for content and user management.",
        technologies: ["Next.js", "Tailwind CSS", "Firebase"],
        highlights: [
          "Developed admin dashboard with role-based access",
          "Built data tables and content management interfaces",
          "Implemented Firebase-backed authentication flows",
        ],
      },
      {
        name: "PennyCRM",
        description: "CRM application with advanced state management.",
        technologies: ["React.js", "Redux Toolkit", "RTK Query", "TypeScript"],
        highlights: [
          "Built CRM application with Redux Toolkit and RTK Query",
          "Implemented efficient data fetching and caching strategies",
          "Designed reusable component architecture for CRM workflows",
        ],
      },
      {
        name: "MRE Blackfin Tools",
        description: "Internal reporting dashboards with data visualization.",
        technologies: ["Next.js", "Redux Toolkit"],
        highlights: [
          "Developed internal reporting dashboards for business analytics",
          "Built data visualization components for KPI tracking",
          "Optimized dashboard performance for large datasets",
        ],
      },
    ],
  },
  {
    id: "dev-partners",
    company: "DEV PARTNERS PHILIPPINES",
    role: "Frontend Developer / Trainee",
    period: "Jul 2017 — Jan 2018",
    technologies: ["AngularJS", "Bootstrap", "Node.js", "SASS", "JavaScript", "REST APIs"],
    projects: [
      {
        name: "Internal Systems",
        description: "Employee portals and CRM applications for internal operations.",
        technologies: ["AngularJS", "Bootstrap", "SASS", "REST APIs"],
        highlights: [
          "Built internal systems and employee portals",
          "Developed CRM application interfaces",
          "Contributed to WordPress-based project implementations",
        ],
      },
    ],
  },
  {
    id: "segworks",
    company: "SEGWORKS TECHNOLOGIES CORPORATION",
    role: "Website Developer Intern",
    period: "May 2017 — Jun 2017",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    projects: [
      {
        name: "Hospital Information System",
        description: "Web interfaces for hospital information management.",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        highlights: [
          "Contributed to hospital information system development",
          "Built responsive web interfaces for healthcare workflows",
          "Collaborated on database-driven application features",
        ],
      },
    ],
  },
];
