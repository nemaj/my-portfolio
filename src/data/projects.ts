import type { Project, ProjectContribution } from "@/types";

export const projects: Project[] = [
  {
    slug: "partbnb",
    title: "Partbnb",
    category: "Booking Platform",
    contribution: "built-from-scratch",
    description:
      "A modern property booking platform with dynamic listings, availability management, and SSR-powered search experiences.",
    longDescription:
      "Partbnb is a comprehensive booking platform designed for property reservations. As the lead frontend developer, I architected the entire user-facing experience using Angular with TypeScript, implementing server-side rendering for optimal SEO and performance. The platform handles complex booking flows, dynamic availability calendars, and responsive property listing interfaces.",
    technologies: ["Angular", "TypeScript", "Material UI", "SASS", "REST APIs", "SSR"],
    impact: [
      "Reduced page load time by 40% through SSR implementation",
      "Improved booking conversion with streamlined UX flows",
      "Enabled SEO-friendly property discovery for organic traffic",
    ],
    challenges: [
      "Implementing complex availability logic across multiple property types",
      "Optimizing SSR performance for dynamic listing pages",
      "Building accessible form workflows for multi-step bookings",
    ],
    liveDemo: "#",
    github: "#",
    gradient: "from-blue-600/30 via-indigo-600/20 to-violet-600/30",
    accentColor: "#3B82F6",
    year: "2023",
    role: "Frontend Developer",
  },
  {
    slug: "lifedirect",
    title: "LifeDirect",
    category: "Insurance",
    contribution: "major-contributor",
    description:
      "Enterprise insurance platform with dynamic dashboards, policy management, and claims processing interfaces.",
    longDescription:
      "LifeDirect is an enterprise-grade insurance platform serving policyholders and agents. I developed the frontend using React.js and TypeScript, building complex dashboard interfaces for policy management, claims tracking, and real-time data visualization. The platform integrates with multiple REST APIs to deliver a seamless insurance experience.",
    technologies: ["React.js", "TypeScript", "REST APIs", "SASS"],
    impact: [
      "Streamlined policy management for thousands of users",
      "Reduced claims processing time with intuitive dashboards",
      "Improved data accuracy through validated form workflows",
    ],
    challenges: [
      "Managing complex insurance form validation rules",
      "Building performant dashboards with large datasets",
      "Integrating multiple API endpoints with unified state",
    ],
    liveDemo: "#",
    github: "#",
    gradient: "from-emerald-600/30 via-teal-600/20 to-cyan-600/30",
    accentColor: "#10B981",
    year: "2022",
    role: "Frontend Developer",
  },
  {
    slug: "motorshare",
    title: "MotorShare",
    category: "SaaS",
    contribution: "built-from-scratch",
    description:
      "Vehicle sharing SaaS platform with real-time booking, Firebase authentication, and mobile-first design.",
    longDescription:
      "MotorShare is a vehicle sharing platform that connects vehicle owners with renters. Built with React.js and Next.js, the platform features real-time availability updates powered by Firebase, responsive booking flows, and a polished mobile-first interface. I led the frontend architecture and component system design.",
    technologies: ["React.js", "Next.js", "Firebase", "SASS"],
    impact: [
      "Enabled real-time vehicle availability across the platform",
      "Achieved 95+ Lighthouse performance scores",
      "Delivered seamless mobile booking experience",
    ],
    challenges: [
      "Real-time synchronization of vehicle availability data",
      "Designing intuitive booking flows for mobile users",
      "Firebase authentication integration with custom UI",
    ],
    liveDemo: "#",
    github: "#",
    gradient: "from-orange-600/30 via-amber-600/20 to-yellow-600/30",
    accentColor: "#F59E0B",
    year: "2023",
    role: "Frontend Developer",
  },
  {
    slug: "little-ones-admin",
    title: "Little Ones Admin Panel",
    category: "Dashboard",
    contribution: "built-from-scratch",
    description:
      "Feature-rich admin dashboard with role-based access, data tables, and Firebase-backed content management.",
    longDescription:
      "The Little Ones Admin Panel is a comprehensive dashboard for managing users, content, and platform operations. Built with Next.js and Tailwind CSS, it features role-based access control, responsive data tables, and Firebase-powered authentication. I designed the component architecture for scalability and maintainability.",
    technologies: ["Next.js", "Tailwind CSS", "Firebase", "TypeScript"],
    impact: [
      "Reduced admin task completion time by 50%",
      "Implemented role-based access for secure operations",
      "Built reusable dashboard components for future features",
    ],
    challenges: [
      "Designing flexible data table components for varied content",
      "Implementing secure role-based navigation patterns",
      "Optimizing dashboard load times with code splitting",
    ],
    liveDemo: "#",
    github: "#",
    gradient: "from-violet-600/30 via-purple-600/20 to-fuchsia-600/30",
    accentColor: "#8B5CF6",
    year: "2024",
    role: "Frontend Developer",
  },
  {
    slug: "pennycrm",
    title: "PennyCRM",
    category: "CRM",
    contribution: "built-from-scratch",
    description:
      "Full-featured CRM application with Redux Toolkit, RTK Query, and advanced contact management workflows.",
    longDescription:
      "PennyCRM is a customer relationship management application designed for sales teams. I architected the frontend using React.js with Redux Toolkit and RTK Query for efficient data fetching and caching. The application features contact management, pipeline tracking, and activity logging with a focus on performance and developer experience.",
    technologies: ["React.js", "Redux Toolkit", "RTK Query", "TypeScript"],
    impact: [
      "Improved sales team productivity with intuitive CRM workflows",
      "Reduced API calls by 60% through RTK Query caching",
      "Established reusable patterns for future CRM features",
    ],
    challenges: [
      "Designing efficient RTK Query cache invalidation strategies",
      "Building complex filter and search interfaces",
      "Managing optimistic updates for real-time CRM actions",
    ],
    liveDemo: "#",
    github: "#",
    gradient: "from-rose-600/30 via-pink-600/20 to-red-600/30",
    accentColor: "#EC4899",
    year: "2023",
    role: "Frontend Developer",
  },
  {
    slug: "mre-blackfin-tools",
    title: "MRE Blackfin Tools",
    category: "Enterprise",
    contribution: "major-contributor",
    description:
      "Internal enterprise reporting dashboards with data visualization, KPI tracking, and Redux-powered analytics.",
    longDescription:
      "MRE Blackfin Tools is an internal enterprise platform for business reporting and analytics. Built with Next.js and Redux Toolkit, it provides teams with real-time KPI dashboards, data visualization components, and exportable reports. I focused on performance optimization for handling large datasets and creating intuitive data presentation.",
    technologies: ["Next.js", "Redux Toolkit", "TypeScript", "SASS"],
    impact: [
      "Centralized reporting for multiple business units",
      "Reduced report generation time from hours to minutes",
      "Enabled data-driven decision making across teams",
    ],
    challenges: [
      "Rendering performant charts with large datasets",
      "Building flexible dashboard layout system",
      "Implementing secure data access patterns",
    ],
    liveDemo: "#",
    github: "#",
    gradient: "from-slate-600/30 via-gray-600/20 to-zinc-600/30",
    accentColor: "#64748B",
    year: "2024",
    role: "Frontend Developer",
  },
];

export const projectCategories = [
  "All",
  "SaaS",
  "Enterprise",
  "Dashboard",
  "CRM",
  "Booking Platform",
  "Insurance",
] as const;

export const contributionFilters: { label: string; value: ProjectContribution | "all" }[] = [
  { label: "All Projects", value: "all" },
  { label: "Built From Scratch", value: "built-from-scratch" },
  { label: "Major Contributor", value: "major-contributor" },
  { label: "Contributor / Maintenance", value: "contributor-maintenance" },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
