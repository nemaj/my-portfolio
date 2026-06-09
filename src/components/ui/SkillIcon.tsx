import type { IconType } from "react-icons";
import {
  SiAngular,
  SiBitbucket,
  SiBootstrap,
  SiCss,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenproject,
  SiReact,
  SiSass,
  SiSketch,
  SiSlack,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { BsMicrosoftTeams } from "react-icons/bs";
import { LuWorkflow } from "react-icons/lu";

const skillIconMap: Record<string, IconType> = {
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  Angular: SiAngular,
  TypeScript: SiTypescript,
  "JavaScript (ES6+)": SiJavascript,
  HTML5: SiHtml5,
  CSS3: SiCss,
  Sass: SiSass,
  "Tailwind CSS": SiTailwindcss,
  Bootstrap: SiBootstrap,
  "Material UI": SiMui,
  Redux: SiReact,
  "Redux Toolkit": SiReact,
  "RTK Query": SiReact,
  "Context API": SiReact,
  "REST APIs": LuWorkflow,
  Firebase: SiFirebase,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Git: SiGit,
  GitHub: SiGithub,
  GitLab: SiGitlab,
  BitBucket: SiBitbucket,
  Vercel: SiVercel,
  Figma: SiFigma,
  Sketch: SiSketch,
  Jira: SiJira,
  Trello: SiTrello,
  Slack: SiSlack,
  Teams: BsMicrosoftTeams,
  "Agile Methodology": LuWorkflow,
  "Open Project": SiOpenproject,
};

interface SkillIconProps {
  skill: string;
  size?: number;
  className?: string;
}

export default function SkillIcon({ skill, size = 16, className }: SkillIconProps) {
  const Icon = skillIconMap[skill];

  if (!Icon) return null;

  return <Icon size={size} className={className} aria-hidden />;
}
