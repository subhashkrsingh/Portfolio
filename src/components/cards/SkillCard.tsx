import { Badge } from '@/components/ui/Badge';
import { TechBadge } from '@/components/ui/TechBadge';
import { TechIcon } from '@/components/ui/TechIcon';
import { useExpandableOverflow } from '@/hooks/useExpandableOverflow';
import { getTechIconDefinition } from '@/data/tech-icons';
import { cn } from '@/utils/cn';
import { motion, useReducedMotion } from 'framer-motion';
import {
  BrainCircuit,
  ChevronDown,
  Code2,
  Database,
  MonitorSmartphone,
  ServerCog,
  Sparkles,
  Wrench,
} from 'lucide-react';
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

const COLLAPSED_MAX_HEIGHT = 232;

export function SkillCard({ skill, className }: SkillCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const Icon = iconMap[skill.iconKey as keyof typeof iconMap] ?? Code2;
  const leadingTech = getTechIconDefinition(skill.iconKey);
  const {
    containerRef,
    contentRef,
    isExpanded,
    setIsExpanded,
    hiddenCount,
    shouldShowToggle,
    maxHeight,
    toggleId,
    registerItemRef,
  } = useExpandableOverflow({
    itemCount: skill.items.length,
    collapsedMaxHeight: COLLAPSED_MAX_HEIGHT,
  });

  const visibleCount = Math.max(skill.items.length - hiddenCount, 0);
  const toggleTransition = prefersReducedMotion ? { duration: 0 } : { duration: 0.24, ease: 'easeInOut' };

  return (
    <motion.article
      layout
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
            {leadingTech ? <TechIcon name={skill.iconKey} size={28} ariaHidden /> : <Icon className="h-5 w-5" />}
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

      <motion.div
        layout
        id={toggleId}
        ref={containerRef}
        className="relative mt-5 overflow-hidden"
        initial={false}
        animate={{ maxHeight }}
        transition={toggleTransition}
      >
        <div ref={contentRef} className="flex flex-wrap gap-2">
          {skill.items.map((item, index) => {
            const isHidden = hiddenCount > 0 && !isExpanded && index >= visibleCount;

            return (
              <motion.div
                key={item}
                ref={registerItemRef(index)}
                initial={false}
                animate={{ opacity: isHidden ? 0 : 1, y: isHidden ? 8 : 0 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.22,
                  ease: 'easeOut',
                  delay:
                    prefersReducedMotion || !isExpanded || index < visibleCount
                      ? 0
                      : (index - visibleCount) * 0.03,
                }}
                className={cn('shrink-0', isHidden && 'pointer-events-none')}
              >
                <TechBadge
                  name={item}
                  label={item}
                  iconSize={13}
                  href={getTechIconDefinition(item)?.url ?? undefined}
                  ariaHidden={isHidden}
                  tabIndex={isHidden ? -1 : undefined}
                  className="px-2.5 py-1 text-[11px] group-hover:-translate-y-0.5"
                />
              </motion.div>
            );
          })}
        </div>

        {hiddenCount > 0 && !isExpanded ? (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[var(--color-card)] to-transparent"
          />
        ) : null}
      </motion.div>

      {shouldShowToggle ? (
        <motion.button
          type="button"
          onClick={() => setIsExpanded((current) => !current)}
          aria-expanded={isExpanded}
          aria-controls={toggleId}
          className="mt-4 inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-1.5 text-xs font-semibold text-text-primary shadow-[0_0_0_1px_rgba(255,255,255,0.05)] transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:text-white hover:shadow-[0_0_0_1px_rgba(139,92,246,0.18),0_0_20px_rgba(139,92,246,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-0"
          whileHover={prefersReducedMotion ? undefined : { y: -1 }}
          whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
          transition={toggleTransition}
        >
          <span>{isExpanded ? 'Show Less' : `View ${hiddenCount} More Skills`}</span>
          <motion.span
            aria-hidden="true"
            className="inline-flex"
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={toggleTransition}
          >
            <ChevronDown className="h-3.5 w-3.5" />
          </motion.span>
        </motion.button>
      ) : null}
    </motion.article>
  );
}
