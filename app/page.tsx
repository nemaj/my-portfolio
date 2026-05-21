import ScrollReveal from "./components/ScrollReveal";

const projects = [
  {
    name: "Partbnb",
    url: "http://www.partbnb.com/",
    type: "Marketplace web app",
    stack: ["Angular", "TypeScript", "Material UI", "SASS", "SSR"],
    summary:
      "Built public-facing and admin interfaces, integrated REST APIs, server-side rendering, analytics tracking, and shared Git workflows for a four-person product team.",
    accent: "green",
    preview: "booking"
  },
  {
    name: "LifeDirect",
    url: "https://www.lifedirect.co.nz/",
    type: "Insurance comparison platform",
    stack: ["React", "Hooks", "Context API", "TypeScript", "REST APIs"],
    summary:
      "Developed responsive dashboards and policy comparison flows with reusable React patterns and API-driven customer journeys.",
    accent: "blue",
    preview: "comparison"
  },
  {
    name: "MotorShare",
    url: "https://www.motorshare.co.nz/",
    type: "Vehicle sharing platform",
    stack: ["React", "Next.js", "Firebase CMS", "SASS"],
    summary:
      "Implemented client-side routing, dynamic content, database-driven interfaces, and responsive product pages for vehicle listings and customer flows.",
    accent: "coral",
    preview: "listing"
  },
  {
    name: "MRE BlackFin Tools",
    url: "https://mre.blackfin.tools/",
    type: "Reporting dashboard",
    stack: ["React", "Next.js", "Tailwind CSS", "Redux Toolkit", "Charts"],
    summary:
      "Created modular dashboards and reporting interfaces with charting, performance optimization, and maintainable feature organization.",
    accent: "ink",
    preview: "analytics"
  },
  {
    name: "Little Ones Admin",
    url: "https://littleones-devel-admin.web.app/",
    type: "Admin dashboard",
    stack: ["React", "Next.js", "Tailwind CSS", "Firebase"],
    summary:
      "Built reusable admin components, Firebase-backed data screens, and state management patterns for efficient operational workflows.",
    accent: "green",
    preview: "admin"
  },
  {
    name: "Insurance Admin",
    url: "https://insurance-admin-test.web.app/quote-engine/list",
    type: "Quote engine admin",
    stack: ["React", "TypeScript", "Admin UI", "REST APIs"],
    summary:
      "Contributed to quote-engine management workflows, data-heavy screens, and internal tools for insurance operations.",
    accent: "blue",
    preview: "quote"
  },
  {
    name: "Penny CRM",
    url: "https://app.pennycrm.co.nz/",
    type: "CRM application",
    stack: ["React", "TypeScript", "Redux", "RTK Query", "Tailwind CSS"],
    summary:
      "Designed CRM UI components and API integrations to support customer management, data querying, and reusable product workflows.",
    accent: "coral",
    preview: "crm"
  }
];

const skills = [
  "React.js",
  "Next.js",
  "Angular",
  "TypeScript",
  "JavaScript ES6+",
  "Tailwind CSS",
  "SASS",
  "Material UI",
  "Redux Toolkit",
  "RTK Query",
  "Context API",
  "REST APIs",
  "Firebase",
  "SSR",
  "Responsive UI",
  "Node.js",
  "Git"
];

const timeline = [
  {
    period: "Jan 2018 - Apr 2026",
    company: "BlackFin Technology",
    role: "Frontend Developer",
    details:
      "Delivered startup and enterprise web applications across React, Next.js, Angular, TypeScript, Firebase, dashboards, admin tools, and customer-facing products."
  },
  {
    period: "Jul 2017 - Jan 2018",
    company: "Dev Partners Philippines",
    role: "Frontend Developer / Trainee",
    details:
      "Developed internal systems, employee portals, client websites, WordPress features, and CRM interfaces using AngularJS, Bootstrap, SASS, JavaScript, Node.js, and REST APIs."
  },
  {
    period: "May 2017 - Jun 2017",
    company: "Segworks Technologies Corporation",
    role: "Website Developer Intern",
    details:
      "Fixed bugs and provided technical support for a Hospital Information System using HTML, CSS, JavaScript, PHP, MySQL, and Git workflows."
  }
];

function ProjectVisual({
  name,
  accent,
  preview
}: {
  name: string;
  accent: string;
  preview: string;
}) {
  return (
    <div className={`project-visual project-visual--${accent}`} aria-hidden="true">
      <div className="browser-bar">
        <span />
        <span />
        <span />
      </div>
      <div className={`preview-window preview-window--${preview}`}>
        <div className="preview-sidebar">
          <span />
          <span />
          <span />
        </div>
        <div className="preview-stage">
          <div className="preview-toolbar">
            <span />
            <span />
          </div>
          <div className="preview-grid">
            <div className="preview-card preview-card--primary">
              <span />
              <strong />
            </div>
            <div className="preview-card preview-card--chart">
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="preview-card preview-card--list">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
        <div className="preview-cursor" />
      </div>
      <strong className="preview-label">{name}</strong>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Jamen Mama home">
          <span>JM</span>
          Jamen Mama
        </a>
        <nav aria-label="Primary navigation">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Frontend Developer</p>
          <h1>React and Next.js interfaces for products people actually use.</h1>
          <p className="hero-lede">
            I am Jamen Mama, a frontend developer with 8+ years of experience
            building scalable web applications, admin tools, dashboards, and
            customer-facing interfaces with React, Next.js, Angular, TypeScript,
            Firebase, and REST APIs.
          </p>
          <div className="hero-actions" aria-label="Contact links">
            <a className="button button--primary" href="mailto:jamen.dev@gmail.com">
              Email me
            </a>
            <a className="button button--secondary" href="https://github.com/nemaj">
              GitHub
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Portfolio highlights">
          <div className="metric">
            <span>8+</span>
            <p>Years building production web applications</p>
          </div>
          <div className="metric metric--dark">
            <span>7</span>
            <p>Featured projects across marketplaces, CRM, admin, and insurance</p>
          </div>
          <div className="hero-stack">
            {["React", "Next.js", "TypeScript", "Firebase"].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </aside>
      </section>

      <ScrollReveal
        as="section"
        className="section section--skills"
        labelledBy="skills-title"
      >
        <div className="section-heading">
          <p className="eyebrow">Core toolkit</p>
          <h2 id="skills-title">Modern frontend engineering, from polished UI to API-heavy dashboards.</h2>
        </div>
        <div className="skill-cloud">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal
        as="section"
        className="section"
        id="projects"
        labelledBy="projects-title"
      >
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2 id="projects-title">Projects shaped around real product workflows.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <ScrollReveal
              as="article"
              className="project-card"
              delay={index * 90}
              key={project.name}
            >
              <ProjectVisual
                name={project.name}
                accent={project.accent}
                preview={project.preview}
              />
              <div className="project-body">
                <div>
                  <p className="project-type">{project.type}</p>
                  <h3>{project.name}</h3>
                </div>
                <p>{project.summary}</p>
                <div className="tag-list" aria-label={`${project.name} technology stack`}>
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <a className="project-link" href={project.url}>
                  Visit project
                  <span aria-hidden="true">-&gt;</span>
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal
        as="section"
        className="section section--experience"
        id="experience"
        labelledBy="experience-title"
      >
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2 id="experience-title">A steady path through agency, startup, and enterprise product work.</h2>
        </div>
        <div className="timeline">
          {timeline.map((item, index) => (
            <ScrollReveal
              as="article"
              className="timeline-item"
              delay={index * 110}
              key={`${item.company}-${item.period}`}
            >
              <p>{item.period}</p>
              <div>
                <h3>{item.role}</h3>
                <strong>{item.company}</strong>
                <span>{item.details}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal
        as="section"
        className="contact"
        id="contact"
        labelledBy="contact-title"
      >
        <div>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Let&apos;s build fast, maintainable frontend experiences.</h2>
          <p>
            Based in South Cotabato, Philippines. Available for frontend roles and
            product teams that need React, Next.js, Angular, and TypeScript depth.
          </p>
        </div>
        <div className="contact-links">
          <a href="mailto:jamen.dev@gmail.com">jamen.dev@gmail.com</a>
          <a href="tel:+639950315549">+63 995 031 5549</a>
          <a href="https://github.com/nemaj">github.com/nemaj</a>
        </div>
      </ScrollReveal>
    </main>
  );
}
