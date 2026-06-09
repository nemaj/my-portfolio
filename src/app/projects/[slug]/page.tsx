import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import Badge from "@/components/ui/Badge";
import MagneticButton from "@/components/ui/MagneticButton";
import ProjectCaseStudy from "@/components/projects/ProjectCaseStudy";
import type { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Jamen Mama`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Case Study`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-bg-primary">
      <div className="section-container pt-28 pb-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>
      </div>

      <ProjectCaseStudy project={project} />

      <div className="section-container pb-20 pt-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {project.liveDemo && (
            <MagneticButton variant="primary" href={project.liveDemo}>
              <ExternalLink size={18} />
              Live Demo
            </MagneticButton>
          )}
          {project.github && (
            <MagneticButton variant="secondary" href={project.github}>
              <GithubIcon size={18} />
              View on GitHub
            </MagneticButton>
          )}
        </div>
      </div>
    </main>
  );
}
