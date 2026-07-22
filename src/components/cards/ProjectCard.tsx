import { Badge } from '@/components/ui/Badge';
import { cn } from '@/utils/cn';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { ProjectItem } from '@/types/content';

type ProjectCardProps = {
  project: ProjectItem;
  onOpen: (project: ProjectItem) => void;
  className?: string;
};

function ProjectThumbnail({ project }: { project: ProjectItem }) {
  const base =
    'relative overflow-hidden rounded-[24px] border border-white/10 bg-slate-900/80 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]';

  if (project.thumbnailVariant === 'market') {
    return (
      <div className={cn(base, 'min-h-[240px]')}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/12" />
        <div className="relative flex h-full flex-col">
          <div className="flex items-center justify-between text-xs text-text-secondary">
            <span>Market pulse</span>
            <span>Live analytics</span>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="glass-card p-3">
              <p className="text-[10px] uppercase tracking-[0.24em] text-text-secondary">Index</p>
              <p className="mt-2 text-lg font-semibold text-white">1,248</p>
            </div>
            <div className="glass-card p-3">
              <p className="text-[10px] uppercase tracking-[0.24em] text-text-secondary">Trend</p>
              <p className="mt-2 text-lg font-semibold text-emerald-200">+18.6%</p>
            </div>
            <div className="glass-card p-3">
              <p className="text-[10px] uppercase tracking-[0.24em] text-text-secondary">Latency</p>
              <p className="mt-2 text-lg font-semibold text-sky-100">Cached</p>
            </div>
          </div>
          <div className="mt-4 flex-1 rounded-[22px] border border-white/10 bg-black/20 p-4">
            <div className="flex h-full items-end gap-2">
              {[28, 42, 35, 60, 48, 75, 58, 86, 68, 92].map((height, index) => (
                <motion.div
                  key={`${project.slug}-${height}`}
                  className="flex-1 rounded-full bg-gradient-to-t from-primary/50 via-secondary/70 to-accent/90"
                  animate={{ height: `${height}%`, opacity: 0.4 + index * 0.05 }}
                  transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.04 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.thumbnailVariant === 'coach') {
    return (
      <div className={cn(base, 'min-h-[240px]')}>
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/18 via-transparent to-primary/10" />
        <div className="relative grid h-full gap-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-text-secondary">AI Coach</p>
              <p className="mt-1 text-lg font-semibold text-white">Daily plan</p>
            </div>
            <div className="h-16 w-16 rounded-full border border-white/10 bg-white/5 p-2">
              <div className="flex h-full w-full items-center justify-center rounded-full border border-accent/30 bg-black/30">
                <span className="text-sm font-semibold text-white">65%</span>
              </div>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="glass-card p-3">
              <p className="text-xs uppercase tracking-[0.24em] text-text-secondary">Meal</p>
              <p className="mt-2 text-sm font-medium text-white">High protein bowl</p>
            </div>
            <div className="glass-card p-3">
              <p className="text-xs uppercase tracking-[0.24em] text-text-secondary">Workout</p>
              <p className="mt-2 text-sm font-medium text-white">Upper body focus</p>
            </div>
          </div>
          <div className="grid flex-1 gap-3 rounded-[22px] border border-white/10 bg-black/20 p-4">
            <div className="flex items-start gap-3">
              <div className="mt-1 h-3 w-3 rounded-full bg-success" />
              <p className="text-sm text-text-secondary">Calculate BMI and adapt the plan.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 h-3 w-3 rounded-full bg-accent" />
              <p className="text-sm text-text-secondary">Recommend meals based on protein target.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 h-3 w-3 rounded-full bg-secondary" />
              <p className="text-sm text-text-secondary">Voice coaching is queued for the next milestone.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.thumbnailVariant === 'hospital') {
    return (
      <div className={cn(base, 'min-h-[240px]')}>
        <div className="absolute inset-0 bg-gradient-to-br from-accent/16 via-transparent to-primary/10" />
        <div className="relative grid h-full gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.24em] text-text-secondary">IPD Overview</span>
            <span className="rounded-full border border-success/30 bg-success/12 px-2 py-1 text-[10px] uppercase tracking-[0.22em] text-emerald-100">
              Authenticated
            </span>
          </div>
          <div className="glass-card p-3">
            <div className="grid grid-cols-3 gap-2 text-xs text-text-secondary">
              <span>Patient</span>
              <span>Doctor</span>
              <span>Status</span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
              <span className="text-white">Ward 12A</span>
              <span className="text-white">Dr. Mehra</span>
              <span className="text-emerald-200">Admitted</span>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-3">
            <div className="glass-card p-3">
              <p className="text-xs uppercase tracking-[0.24em] text-text-secondary">Billing</p>
              <p className="mt-2 text-lg font-semibold text-white">Ready</p>
            </div>
            <div className="glass-card p-3">
              <p className="text-xs uppercase tracking-[0.24em] text-text-secondary">Reports</p>
              <p className="mt-2 text-lg font-semibold text-white">Queued</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(base, 'min-h-[240px]')}>
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/18 via-transparent to-primary/10" />
      <div className="relative grid h-full gap-3">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.24em] text-text-secondary">Game engine</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.22em] text-text-secondary">
            Replay ready
          </span>
        </div>
        <div className="glass-card p-4">
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
        <div className="grid grid-cols-3 gap-3">
          <div className="glass-card p-3">
            <p className="text-[10px] uppercase tracking-[0.24em] text-text-secondary">Life lines</p>
            <p className="mt-2 text-sm font-semibold text-white">3 left</p>
          </div>
          <div className="glass-card p-3">
            <p className="text-[10px] uppercase tracking-[0.24em] text-text-secondary">Score</p>
            <p className="mt-2 text-sm font-semibold text-white">1,420</p>
          </div>
          <div className="glass-card p-3">
            <p className="text-[10px] uppercase tracking-[0.24em] text-text-secondary">Rank</p>
            <p className="mt-2 text-sm font-semibold text-white">#08</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({ project, onOpen, className }: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      className={cn('glass-card group overflow-hidden p-5', className)}
      whileHover={prefersReducedMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.22 }}
    >
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="flex w-full flex-col text-left outline-none"
      >
        <ProjectThumbnail project={project} />
        <div className="mt-5 flex items-start justify-between gap-3">
          <div>
            <Badge variant={project.status.includes('Complete') ? 'success' : 'primary'}>{project.status}</Badge>
            <h3 className="mt-4 font-display text-2xl font-semibold text-white">{project.title}</h3>
            <p className="mt-2 text-sm uppercase tracking-[0.22em] text-text-secondary">
              {project.category}
            </p>
          </div>
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-text-secondary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
        <p className="mt-4 text-sm leading-7 text-text-secondary">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-text-secondary"
            >
              {item}
            </span>
          ))}
        </div>
      </button>
    </motion.article>
  );
}
