import { Badge } from '@/components/ui/Badge';
import { cn } from '@/utils/cn';
import { motion, useReducedMotion } from 'framer-motion';
import { BrainCircuit, Code2, Database, MonitorSmartphone, ServerCog, Sparkles, Wrench } from 'lucide-react';
import type { SkillGroup } from '@/types/content';

type SkillCardProps = {
  skill: SkillGroup;
  className?: string;
};

const iconMap = {
  code: Code2,
  monitor: MonitorSmartphone,
  server: ServerCog,
  database: Database,
  brain: BrainCircuit,
  tool: Wrench,
  spark: Sparkles,
} as const;

export function SkillCard({ skill, className }: SkillCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const Icon = iconMap[skill.iconKey as keyof typeof iconMap] ?? Code2;

  return (
    <motion.article
      className={cn(
        'glass-card group relative overflow-hidden p-6 transition-shadow duration-300 hover:shadow-glow',
        className,
      )}
      whileHover={prefersReducedMotion ? undefined : { y: -8, rotateX: 3, rotateY: -3, scale: 1.01 }}
      transition={{ duration: 0.24, ease: 'easeOut' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-[var(--color-card)] text-text-primary transition-transform duration-300 group-hover:scale-110 group-hover:border-primary/30">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold tracking-[-0.03em] text-text-primary">
              {skill.category}
            </h3>
            <p className="text-sm text-text-secondary">{skill.summary}</p>
          </div>
        </div>
        <Badge variant="secondary">{skill.level}</Badge>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-border bg-[var(--color-card)] px-3 py-1 text-xs font-medium text-text-secondary transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-primary/30 group-hover:bg-primary/10 group-hover:text-text-primary"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
