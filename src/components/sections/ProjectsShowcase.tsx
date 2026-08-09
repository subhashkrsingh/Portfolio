import { ProjectCard } from '@/components/cards/ProjectCard';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/utils/cn';
import { useMemo, useState } from 'react';
import type { ProjectItem } from '@/types/content';

type ProjectsShowcaseProps = {
  projects: ProjectItem[];
  showArchive?: boolean;
  className?: string;
};

const lifecyclePriority: Record<ProjectItem['lifecycle'], number> = {
  live: 0,
  'in-development': 1,
  research: 2,
  archived: 3,
};

function sortProjects(projects: ProjectItem[]) {
  return [...projects].sort((left, right) => {
    if (left.featured && !right.featured) {
      return -1;
    }

    if (!left.featured && right.featured) {
      return 1;
    }

    const lifecycleDelta = lifecyclePriority[left.lifecycle] - lifecyclePriority[right.lifecycle];
    if (lifecycleDelta !== 0) {
      return lifecycleDelta;
    }

    return left.title.localeCompare(right.title);
  });
}

export function ProjectsShowcase({ projects, showArchive = false, className }: ProjectsShowcaseProps) {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const { primaryProjects, archiveProjects } = useMemo(() => {
    const sorted = sortProjects(projects);
    const primary = sorted.filter((project) => project.lifecycle !== 'archived');
    const archive = sorted.filter((project) => project.lifecycle === 'archived');

    return {
      primaryProjects: primary,
      archiveProjects: archive,
    };
  }, [projects]);

  const featuredProject = primaryProjects.find((project) => project.featured) ?? primaryProjects[0];
  const supportingProjects = primaryProjects.filter((project) => project.slug !== featuredProject?.slug);

  function toggleProject(slug: string) {
    setExpandedSlug((current) => (current === slug ? null : slug));
  }

  if (!featuredProject) {
    return null;
  }

  return (
    <div className={cn('grid gap-6', className)}>
      <div className="grid gap-6 xl:grid-cols-[1.22fr_0.78fr]">
        <Reveal>
          <ProjectCard
            project={featuredProject}
            density="featured"
            expanded={expandedSlug === featuredProject.slug}
            onToggle={toggleProject}
            className="h-full"
          />
        </Reveal>

        <div className="grid gap-6">
          {supportingProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.04}>
              <ProjectCard
                project={project}
                density="supporting"
                expanded={expandedSlug === project.slug}
                onToggle={toggleProject}
              />
            </Reveal>
          ))}
        </div>
      </div>

      {showArchive && archiveProjects.length > 0 ? (
        <div className="mt-4 grid gap-4">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-text-secondary">
                Archived work
              </p>
              <p className="mt-2 text-sm leading-7 text-text-secondary">
                Earlier experiments and supporting builds are tucked away here so they stay available without
                competing with the current flagship projects.
              </p>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {archiveProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.04}>
                <ProjectCard
                  project={project}
                  density="archive"
                  expanded={expandedSlug === project.slug}
                  onToggle={toggleProject}
                />
              </Reveal>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
