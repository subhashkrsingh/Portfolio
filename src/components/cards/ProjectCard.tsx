import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { TechBadge } from '@/components/ui/TechBadge';
import { ProjectDetailsPanel } from '@/components/cards/ProjectDetailsPanel';
import { ProjectStatusWidget } from '@/components/cards/ProjectStatusWidget';
import { cn } from '@/utils/cn';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { useEffect, useRef } from 'react';
import type { ProjectAction, ProjectItem } from '@/types/content';

type ProjectCardProps = {
  project: ProjectItem;
  expanded: boolean;
  onToggle: (slug: string) => void;
  density?: 'featured' | 'supporting' | 'archive';
  className?: string;
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

function actionVariant(action: ProjectAction) {
  if (action.kind === 'toggle') {
    return 'secondary' as const;
  }

  if (action.label.toLowerCase().includes('live demo')) {
    return 'primary' as const;
  }

  return 'outline' as const;
}

function actionIcon(action: ProjectAction) {
  if (action.kind === 'toggle') {
    return ArrowUpRight;
  }

  if (action.label.toLowerCase().includes('github')) {
    return Github;
  }

  return ExternalLink;
}

function scrollToTarget(targetId: string, prefersReducedMotion: boolean) {
  const target = document.getElementById(targetId);
  if (!target) {
    return;
  }

  target.scrollIntoView({
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
    block: 'start',
  });
}

function ProjectSurface({ project, density }: { project: ProjectItem; density: NonNullable<ProjectCardProps['density']> }) {
  const baseHeight =
    density === 'featured' ? 'min-h-[420px]' : density === 'archive' ? 'min-h-[300px]' : 'min-h-[340px]';
  const surfacePadding = density === 'featured' ? 'p-5 md:p-6' : 'p-4';

  const metricGrid =
    project.thumbnailVariant === 'market'
      ? 'sm:grid-cols-3'
      : project.thumbnailVariant === 'hospital'
        ? 'sm:grid-cols-2'
        : 'sm:grid-cols-3';

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[28px] border border-border bg-[var(--color-surface)] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]',
        baseHeight,
        surfacePadding,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/18 via-transparent to-accent/12 opacity-90" />
      <div className="relative flex h-full flex-col gap-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-text-secondary">
              {project.preview.eyebrow}
            </p>
            <h4 className="mt-2 font-display text-xl font-semibold text-white md:text-2xl">
              {project.preview.headline}
            </h4>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-text-secondary">
              {project.preview.subheadline}
            </p>
          </div>

          {project.liveStatus && project.thumbnailVariant === 'market' ? (
            <div className="w-full max-w-[360px]">
              <ProjectStatusWidget status={project.liveStatus} compact />
            </div>
          ) : (
            <Badge variant={lifecycleVariant(project.lifecycle)}>{lifecycleLabel(project.lifecycle)}</Badge>
          )}
        </div>

        {project.thumbnailVariant === 'market' ? (
          <>
            <div className={cn('grid gap-3', metricGrid)}>
              {project.preview.metrics.map((metric) => (
                <div key={metric.label} className="glass-card p-3">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-text-secondary">{metric.label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{metric.value}</p>
                </div>
              ))}
            </div>

            <div className="flex-1 rounded-[24px] border border-border bg-[var(--color-card)] p-4">
              <div className="flex h-full items-end gap-2">
                {[24, 34, 30, 52, 44, 68, 58, 74, 66, 88].map((height, index) => (
                  <motion.div
                    key={`${project.slug}-bar-${index}`}
                    className="flex-1 rounded-full bg-gradient-to-t from-primary/55 via-secondary/75 to-accent/95"
                    animate={{ height: `${height}%`, opacity: 0.45 + index * 0.04 }}
                    transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.035 }}
                  />
                ))}
              </div>
            </div>
          </>
        ) : null}

        {project.thumbnailVariant === 'hospital' ? (
          <>
            <div className="grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[24px] border border-border bg-[var(--color-card)] p-4">
                <p className="text-[10px] uppercase tracking-[0.24em] text-text-secondary">Architecture preview</p>
                <div className="mt-4 grid gap-3">
                  {project.architectureSteps.slice(0, 4).map((step, index) => (
                    <div key={step} className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-border bg-[var(--color-surface)] text-xs font-semibold text-white">
                        0{index + 1}
                      </span>
                      <span className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-3">
                {project.preview.metrics.slice(0, 4).map((metric) => (
                  <div key={metric.label} className="rounded-[22px] border border-border bg-[var(--color-card)] p-3">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-text-secondary">{metric.label}</p>
                    <p className="mt-2 text-sm font-semibold text-white">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid flex-1 gap-3 rounded-[24px] border border-border bg-[var(--color-card)] p-4 sm:grid-cols-2">
              {project.highlights.slice(0, 4).map((item, index) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-text-secondary">Signal 0{index + 1}</p>
                  <p className="mt-2 text-sm font-medium text-white">{item}</p>
                </div>
              ))}
            </div>
          </>
        ) : null}

        {project.thumbnailVariant === 'coach' ? (
          <>
            <div className="grid gap-3 sm:grid-cols-[0.85fr_1.15fr]">
              <div className="rounded-[24px] border border-border bg-[var(--color-card)] p-4">
                <p className="text-[10px] uppercase tracking-[0.24em] text-text-secondary">Coach momentum</p>
                <div className="mt-4 flex items-center gap-4">
                  <div className="h-20 w-20 rounded-full border border-white/10 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),rgba(255,255,255,0.04))] p-2">
                    <div className="flex h-full w-full items-center justify-center rounded-full border border-accent/25 bg-[var(--color-surface)]">
                      <span className="text-lg font-semibold text-white">65%</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Roadmap led</p>
                    <p className="mt-2 text-sm leading-6 text-text-secondary">
                      The first release keeps the coaching loop focused before voice and vision layers are added.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {project.preview.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-[22px] border border-border bg-[var(--color-card)] p-3">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-text-secondary">{metric.label}</p>
                    <p className="mt-2 text-sm font-semibold text-white">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3 rounded-[24px] border border-border bg-[var(--color-card)] p-4">
              {project.highlights.slice(0, 3).map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" />
                  <p className="text-sm leading-7 text-text-secondary">{item}</p>
                </div>
              ))}
            </div>
          </>
        ) : null}

        {project.thumbnailVariant === 'quiz' ? (
          <>
            <div className="rounded-[24px] border border-border bg-[var(--color-card)] p-4">
              <p className="text-[10px] uppercase tracking-[0.24em] text-text-secondary">Game loop</p>
              <div className="mt-4 rounded-[22px] border border-white/10 bg-[var(--color-surface)] p-4">
                <p className="text-sm text-text-secondary">Who is the father of AI?</p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {['Alan Turing', 'John McCarthy', 'Claude Shannon', 'Geoffrey Hinton'].map((option, index) => (
                    <div
                      key={option}
                      className={cn(
                        'rounded-2xl border px-3 py-2 text-sm transition-colors',
                        index === 1
                          ? 'border-primary/35 bg-primary/14 text-white'
                          : 'border-white/10 bg-white/5 text-text-secondary',
                      )}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {project.preview.metrics.map((metric) => (
                <div key={metric.label} className="rounded-[22px] border border-border bg-[var(--color-card)] p-3">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-text-secondary">{metric.label}</p>
                  <p className="mt-2 text-sm font-semibold text-white">{metric.value}</p>
                </div>
              ))}
            </div>
          </>
        ) : null}

      </div>
    </div>
  );
}

export function ProjectCard({ project, expanded, onToggle, density = 'supporting', className }: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const pendingScrollTarget = useRef<string | null>(null);

  useEffect(() => {
    if (!expanded || !pendingScrollTarget.current) {
      return;
    }

    const targetId = pendingScrollTarget.current;
    pendingScrollTarget.current = null;

    const timeout = window.setTimeout(() => {
      if (targetId) {
        scrollToTarget(targetId, Boolean(prefersReducedMotion));
      }
    }, prefersReducedMotion ? 0 : 280);

    return () => window.clearTimeout(timeout);
  }, [expanded, prefersReducedMotion]);

  const rootClasses = cn(
    'glass-card group relative overflow-hidden p-5 transition-shadow duration-300 hover:shadow-glow',
    density === 'featured' && 'p-6 md:p-7 xl:p-8',
    density === 'archive' && 'border-dashed border-white/12',
    className,
  );

  const actionButtonClasses = 'px-3.5 py-2 text-xs font-semibold';

  function handleAction(action: ProjectAction) {
    if (action.kind === 'link') {
      return;
    }

    if (action.targetId) {
      if (!expanded) {
        pendingScrollTarget.current = action.targetId;
        onToggle(project.slug);
        return;
      }

      scrollToTarget(action.targetId, Boolean(prefersReducedMotion));
      return;
    }

    onToggle(project.slug);
  }

  return (
    <motion.article
      layout
      className={rootClasses}
      whileHover={prefersReducedMotion ? undefined : { y: -8, scale: 1.005 }}
      transition={{ duration: 0.24, ease: 'easeOut' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex h-full flex-col">
        <div className="flex flex-wrap items-start gap-2">
          <Badge variant={lifecycleVariant(project.lifecycle)}>{lifecycleLabel(project.lifecycle)}</Badge>
          <Badge variant="outline">{project.projectType}</Badge>
          {project.featured ? <Badge variant="primary">Flagship</Badge> : null}
          {project.lifecycle === 'archived' ? <Badge variant="outline">Archive</Badge> : null}
        </div>

        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-text-secondary">{project.category}</p>
            <h3 className="mt-2 font-display text-2xl font-black tracking-[-0.03em] text-text-primary transition-colors duration-300 group-hover:text-primary">
              {project.title}
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-text-secondary">{project.summary}</p>
          </div>

          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-text-secondary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
        </div>

        <div className="mt-5">
          <ProjectSurface project={project} density={density} />
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          {project.actions.map((action) => {
            const Icon = actionIcon(action);

            if (action.kind === 'link' && action.href) {
              return (
                <Button
                  key={action.label}
                  href={action.href}
                  variant={actionVariant(action)}
                  target={action.target ?? '_blank'}
                  rel={action.rel ?? 'noreferrer'}
                  className={actionButtonClasses}
                >
                  <Icon className="h-4 w-4" />
                  {action.label}
                </Button>
              );
            }

            return (
              <Button
                key={action.label}
                variant={actionVariant(action)}
                className={actionButtonClasses}
                onClick={() => handleAction(action)}
              >
                <Icon className="h-4 w-4" />
                {action.label}
              </Button>
            );
          })}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, density === 'archive' ? 3 : 4).map((item) => (
            <TechBadge
              key={item}
              name={item}
              label={item}
              iconSize={13}
              className="px-2.5 py-1 text-[11px] group-hover:-translate-y-0.5"
            />
          ))}
        </div>

        <AnimatePresence initial={false}>
          {expanded ? (
            <motion.div
              id={`${project.slug}-case-study`}
              key="expanded-project"
              className="mt-6 border-t border-white/10 pt-6"
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.24, ease: 'easeOut' }}
            >
              <ProjectDetailsPanel project={project} onClose={() => onToggle(project.slug)} />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}
