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
      className={cn('glass-card group p-6 transition-shadow duration-300 hover:shadow-glow', className)}
      whileHover={prefersReducedMotion ? undefined : { y: -5, rotateX: 2, rotateY: -2 }}
      transition={{ duration: 0.22 }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-white">{skill.category}</h3>
            <p className="text-sm text-text-secondary">{skill.summary}</p>
          </div>
        </div>
        <Badge variant="secondary">{skill.level}</Badge>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-text-secondary"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
