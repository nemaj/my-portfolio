import type { Project, ProjectHeadlineCategory } from "@/types";

import motor1 from "@/assets/motorshare/1.png";
import motor2 from "@/assets/motorshare/2.png";
import motor3 from "@/assets/motorshare/3.png";
import motor4 from "@/assets/motorshare/4.png";
import motor5 from "@/assets/motorshare/5.png";
import motor6 from "@/assets/motorshare/6.png";
import motor7 from "@/assets/motorshare/7.png";
import motor8 from "@/assets/motorshare/8.png";

import partbnb1 from "@/assets/partbnb/1.png";

import lifedirect1 from "@/assets/lifedirect/1.png";
import lifedirect2 from "@/assets/lifedirect/2.png";
import lifedirect3 from "@/assets/lifedirect/3.png";
import lifedirect4 from "@/assets/lifedirect/4.png";

import littleones1 from "@/assets/littleones/1.png";
import littleones2 from "@/assets/littleones/2.png";
import littleones3 from "@/assets/littleones/3.png";

import penny1 from "@/assets/penny/1.png";
import penny2 from "@/assets/penny/2.png";
import penny3 from "@/assets/penny/3.png";
import penny4 from "@/assets/penny/4.png";
import penny5 from "@/assets/penny/5.png";

import mre1 from "@/assets/mre/1.png";
import mre2 from "@/assets/mre/2.png";
import mre3 from "@/assets/mre/3.png";
import mre4 from "@/assets/mre/4.png";
import mre5 from "@/assets/mre/5.png";
import mre6 from "@/assets/mre/6.png";
import mre7 from "@/assets/mre/7.png";
import mre8 from "@/assets/mre/8.png";

export const projects: Project[] = [
  {
    slug: "motorshare",
    title: "MotorShare NZ",
    category: "Marketplace / Rental Platform",
    headlineCategory: "Marketplaces",
    description:
      "Vehicle rental platform featuring real-time booking, dynamic availability, and SEO-optimized SSR.",
    longDescription:
      "MotorShare NZ is a vehicle sharing marketplace that enables vehicle owners to list and manage vehicles while allowing renters to browse, book, and track availability in real time. Built with React.js and Next.js, the platform utilizes Server-Side Rendering (SSR) to deliver SEO-friendly, high-performance pages and dynamic data rendering. I contributed to the frontend architecture, developed reusable component systems, implemented responsive booking workflows, integrated Firebase for authentication and real-time updates, and optimized the user experience across desktop and mobile devices.",
    technologies: ["React.js", "Next.js", "Firebase", "SASS", "Context API"],
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
    images: [motor1, motor2, motor3, motor4, motor5, motor6, motor7, motor8],
  },
  {
    slug: "partbnb",
    title: "PartBnB",
    category: "Marketplace Platform",
    headlineCategory: "Marketplaces",
    description:
      "A modern property booking marketplace with dynamic listings, availability management, and SSR-powered search experiences.",
    longDescription:
      "PartBnB is a comprehensive booking marketplace designed for property reservations. As the lead frontend developer, I architected the entire user-facing experience using Angular with TypeScript, implementing server-side rendering for optimal SEO and performance. The platform handles complex booking flows, dynamic availability calendars, and responsive property listing interfaces.",
    technologies: [
      "Angular",
      "TypeScript",
      "Material UI",
      "SASS",
      "REST APIs",
      "SSR",
    ],
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
    images: [partbnb1],
  },
  {
    slug: "lifedirect",
    title: "LifeDirect NZ",
    category: "InsurTech / Financial Services Platform",
    headlineCategory: "FinTech / InsurTech",
    description:
      "Enterprise InsurTech platform with dynamic dashboards, policy management, and claims processing interfaces.",
    longDescription:
      "LifeDirect NZ is an enterprise-grade insurance platform serving policyholders and agents. I developed the frontend using React.js and TypeScript, building complex dashboard interfaces for policy management, claims tracking, and real-time data visualization. The platform integrates with multiple REST APIs to deliver a seamless insurance experience.",
    technologies: [
      "React.js",
      "TypeScript",
      "Bootstrap",
      "Context API",
      "REST APIs",
      "SASS",
    ],
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
    images: [lifedirect1, lifedirect2, lifedirect3, lifedirect4],
  },
  {
    slug: "little-ones-admin",
    title: "Little Ones Admin",
    category: "Admin Dashboard / Internal SaaS",
    headlineCategory: "Internal Business Tools",
    description:
      "Feature-rich admin dashboard with role-based access, data tables, and Firebase-backed content management.",
    longDescription:
      "The Little Ones Admin Panel is a comprehensive internal SaaS dashboard for managing users, content, and platform operations. Built with Next.js and Tailwind CSS, it features role-based access control, responsive data tables, and Firebase-powered authentication. I designed the component architecture for scalability and maintainability.",
    technologies: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Firebase",
      "TypeScript",
    ],
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
    images: [littleones1, littleones2, littleones3],
  },
  {
    slug: "pennycrm",
    title: "Penny CRM",
    category: "SaaS CRM Platform",
    headlineCategory: "SaaS Products",
    description:
      "Full-featured SaaS CRM with Redux Toolkit, RTK Query, and advanced contact management workflows.",
    longDescription:
      "Penny CRM is a customer relationship management SaaS application designed for sales teams. I architected the frontend using React.js with Redux Toolkit and RTK Query for efficient data fetching and caching. The application features contact management, pipeline tracking, and activity logging with a focus on performance and developer experience.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "RTK Query",
      "TypeScript",
    ],
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
    images: [penny1, penny2, penny3, penny4, penny5],
  },
  {
    slug: "mre-blackfin-tools",
    title: "MRE Blackfin Tools",
    category: "Enterprise / Financial Tool",
    headlineCategory: "Enterprise Applications",
    description:
      "Enterprise financial reporting dashboards with data visualization, KPI tracking, and Redux-powered analytics.",
    longDescription:
      "MRE Blackfin Tools is an internal enterprise platform for business reporting and financial analytics. Built with Next.js and Redux Toolkit, it provides teams with real-time KPI dashboards, data visualization components, and exportable reports. I focused on performance optimization for handling large datasets and creating intuitive data presentation.",
    technologies: ["React.js", "Redux Toolkit", "TypeScript", "SASS"],
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
    images: [mre1, mre2, mre3, mre4, mre5, mre6, mre7, mre8],
  },
];

export const projectCategories: ("All" | ProjectHeadlineCategory)[] = [
  "All",
  "SaaS Products",
  "Marketplaces",
  "FinTech / InsurTech",
  "Enterprise Applications",
  "Internal Business Tools",
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
