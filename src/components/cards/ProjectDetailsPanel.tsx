import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ProjectStatusWidget } from '@/components/cards/ProjectStatusWidget';
import { TechBadge } from '@/components/ui/TechBadge';
import { cn } from '@/utils/cn';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronUp, ExternalLink, Github } from 'lucide-react';
import type { ProjectCaseStudySection, ProjectItem } from '@/types/content';

type ProjectDetailsPanelProps = {
  project: ProjectItem;
  onClose: () => void;
};

function lifecycleVariant(lifecycle: ProjectItem['lifecycle']) {
  switch (lifecycle) {
    case 'live':
      return 'success' as const;
    case 'in-development':
      return 'secondary' as const;
    case 'research':
      return 'primary' as const;
    case 'archived':
      return 'outline' as const;
    default:
      return 'outline' as const;
  }
}

function lifecycleLabel(lifecycle: ProjectItem['lifecycle']) {
  switch (lifecycle) {
    case 'live':
      return 'Live';
    case 'in-development':
      return 'In Development';
    case 'research':
      return 'Research';
    case 'archived':
      return 'Archived';
    default:
      return lifecycle;
  }
}

function SectionVisual({
  project,
  section,
}: {
  project: ProjectItem;
  section: ProjectCaseStudySection;
}) {
  if (section.visual === 'flow') {
    return (
      <div className="mt-4 grid gap-3">
        {project.architectureSteps.map((step, index) => (
          <div key={`${section.id}-${step}`} className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-border bg-[var(--color-card)] text-xs font-semibold text-white">
              0{index + 1}
            </div>
            <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-sm font-medium text-white">{step}</p>
            </div>
            {index < project.architectureSteps.length - 1 ? (
              <ChevronUp className="hidden h-4 w-4 shrink-0 rotate-90 text-text-secondary sm:block" />
            ) : null}
          </div>
        ))}
      </div>
    );
  }

  if (section.visual === 'gallery') {
    const galleryItems = section.bullets ?? project.highlights.slice(0, 3);

    return (
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {galleryItems.slice(0, 3).map((item, index) => (
          <div
            key={`${section.id}-gallery-${item}`}
            className={cn(
              'rounded-[22px] border border-white/10 bg-[var(--color-card)] p-4',
              index === 0 && 'sm:col-span-2',
            )}
          >
            <p className="text-[10px] uppercase tracking-[0.24em] text-text-secondary">
              Frame 0{index + 1}
            </p>
            <div className="mt-3 h-20 rounded-2xl border border-white/10 bg-gradient-to-br from-primary/12 via-transparent to-accent/12" />
            <p className="mt-3 text-sm font-medium text-white">{item}</p>
          </div>
        ))}
      </div>
    );
  }

  return null;
}

function CaseStudySection({
  project,
  section,
}: {
  project: ProjectItem;
  section: ProjectCaseStudySection;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id={section.id}
      className="glass-card p-5"
      whileHover={prefersReducedMotion ? undefined : { y: -3 }}
      transition={{ duration: 0.18 }}
    >
      <p className="text-xs font-medium uppercase tracking-[0.28em] text-text-secondary">{section.title}</p>
      <p className="mt-3 text-sm leading-7 text-text-secondary">{section.body}</p>

      {section.bullets && section.bullets.length > 0 ? (
        <ul className="mt-4 grid gap-3 text-sm leading-7 text-text-secondary">
          {section.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}

      <SectionVisual project={project} section={section} />
    </motion.section>
  );
}

function ProjectScreenshotGallery({ project }: { project: ProjectItem }) {
  const prefersReducedMotion = useReducedMotion();
  const screenshots = project.screenshots ?? [];

  if (!screenshots.length) {
    return null;
  }

  return (
    <motion.section
      id={`${project.slug}-screenshots`}
      className="glass-card p-5"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
    >
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-text-secondary">
            Screenshot gallery
          </p>
          <h5 className="mt-2 font-display text-xl font-semibold text-white">EnergiXchange product tour</h5>
        </div>
        <Badge variant="outline">{screenshots.length} frames</Badge>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {screenshots.map((screenshot, index) => (
          <figure
            key={screenshot.src}
            className={cn(
              'overflow-hidden rounded-[22px] border border-white/10 bg-[var(--color-card)]',
              index === 0 && 'sm:col-span-2',
            )}
          >
            <img
              src={screenshot.src}
              alt={screenshot.alt}
              loading="lazy"
              decoding="async"
              className={cn(
                'w-full object-cover object-top',
                index === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]',
              )}
            />
            <figcaption className="flex items-center justify-between gap-3 px-4 py-3">
              <span className="text-sm font-semibold text-white">{screenshot.title}</span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-text-secondary">
                {screenshot.category}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </motion.section>
  );
}

export function ProjectDetailsPanel({ project, onClose }: ProjectDetailsPanelProps) {
  return (
    <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
      <div className="grid gap-4">
        <div className="glass-card p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-text-secondary">
                Case study overview
              </p>
              <h4 className="mt-2 font-display text-2xl font-semibold text-white">{project.title}</h4>
              <p className="mt-3 text-sm leading-7 text-text-secondary">{project.preview.subheadline}</p>
            </div>

            <Button
              variant="ghost"
              className="px-3 py-2 text-xs font-semibold"
              onClick={onClose}
              ariaLabel={`View less ${project.title} details`}
            >
              <ChevronUp className="h-4 w-4" />
              View Less
            </Button>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <Badge variant={lifecycleVariant(project.lifecycle)}>{lifecycleLabel(project.lifecycle)}</Badge>
            <Badge variant="outline">{project.projectType}</Badge>
            <Badge variant="secondary">{project.category}</Badge>
            {project.featured ? <Badge variant="primary">Flagship</Badge> : null}
          </div>

          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {project.preview.metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-[10px] uppercase tracking-[0.24em] text-text-secondary">{metric.label}</p>
                <p className="mt-2 text-sm font-semibold text-white">{metric.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.shortcuts.map((shortcut) => (
              <Button key={shortcut.label} href={shortcut.href} variant="outline" className="px-3 py-2 text-xs">
                {shortcut.label}
              </Button>
            ))}
          </div>
        </div>

        {project.liveStatus ? (
          <div id={`${project.slug}-live-status`}>
            <ProjectStatusWidget status={project.liveStatus} />
          </div>
        ) : null}

        <div className="glass-card p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-text-secondary">Tech stack</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <TechBadge key={item} name={item} label={item} iconSize={13} className="px-2.5 py-1.5" />
            ))}
          </div>
        </div>

        <div className="glass-card p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-text-secondary">
            External links
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {project.links.github ? (
              <Button href={project.links.github} variant="outline" target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" />
                GitHub
              </Button>
            ) : null}
            {project.links.live ? (
              <Button href={project.links.live} variant="primary" target="_blank" rel="noreferrer">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </Button>
            ) : null}
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        <ProjectScreenshotGallery project={project} />

        {project.caseStudy.map((section) => (
          <CaseStudySection key={section.id} project={project} section={section} />
        ))}

        <motion.section
          className="glass-card p-5"
          whileHover={{ y: -3 }}
          transition={{ duration: 0.18 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-text-secondary">
            Key takeaways
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.highlights.map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
