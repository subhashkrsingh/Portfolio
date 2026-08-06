import { Badge } from '@/components/ui/Badge';
import { TechBadge } from '@/components/ui/TechBadge';
import { TechIcon } from '@/components/ui/TechIcon';
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
import { useId, useLayoutEffect, useRef, useState } from 'react';
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

const COLLAPSED_BADGE_HEIGHT = 96;

export function SkillCard({ skill, className }: SkillCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isExpanded, setIsExpanded] = useState(false);
  const [visibleBadgeCount, setVisibleBadgeCount] = useState(skill.items.length);
  const badgeListRef = useRef<HTMLDivElement | null>(null);
  const badgeRefs = useRef<Array<HTMLDivElement | null>>([]);
  const badgeListId = useId();
  const Icon = iconMap[skill.iconKey as keyof typeof iconMap] ?? Code2;
  const leadingTech = getTechIconDefinition(skill.iconKey);

  useLayoutEffect(() => {
    const measureVisibleBadges = () => {
      const container = badgeListRef.current;
      if (!container) {
        return;
      }

      const badgeNodes = badgeRefs.current.filter((node): node is HTMLDivElement => Boolean(node));
      if (badgeNodes.length === 0) {
        setVisibleBadgeCount(skill.items.length);
        return;
      }

      const visibleBottom = container.getBoundingClientRect().top + COLLAPSED_BADGE_HEIGHT;
      let nextVisibleCount = 0;

      for (const badgeNode of badgeNodes) {
        if (badgeNode.getBoundingClientRect().bottom <= visibleBottom - 1) {
          nextVisibleCount += 1;
        }
      }

      setVisibleBadgeCount((current) => (current === nextVisibleCount ? current : nextVisibleCount));
    };

    let frame = 0;

    const scheduleMeasure = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(measureVisibleBadges);
    };

    scheduleMeasure();

    const observer = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(scheduleMeasure);
    if (badgeListRef.current) {
      observer?.observe(badgeListRef.current);
    }
    window.addEventListener('resize', scheduleMeasure);

    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', scheduleMeasure);
      window.cancelAnimationFrame(frame);
    };
  }, [skill.items.length]);

  const hiddenBadgeCount = Math.max(skill.items.length - visibleBadgeCount, 0);
  const hasOverflow = hiddenBadgeCount > 0;
  const shouldShowToggle = hasOverflow || isExpanded;
  const badgeListHeight = hasOverflow && !isExpanded ? COLLAPSED_BADGE_HEIGHT : 'auto';
  const motionTransition = prefersReducedMotion ? { duration: 0 } : { duration: 0.24, ease: 'easeOut' };
  const heightTransition = prefersReducedMotion ? { duration: 0 } : { duration: 0.32, ease: 'easeInOut' };

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
        id={badgeListId}
        ref={badgeListRef}
        className="relative mt-5 overflow-hidden"
        initial={false}
        animate={{ height: badgeListHeight }}
        transition={heightTransition}
      >
        <div className="flex flex-wrap gap-2">
          {skill.items.map((item, index) => {
            const isHidden = hasOverflow && !isExpanded && index >= visibleBadgeCount;

            return (
              <motion.div
                key={item}
                ref={(node) => {
                  badgeRefs.current[index] = node;
                }}
                initial={false}
                animate={{ opacity: isHidden ? 0 : 1, y: isHidden ? 8 : 0 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.2,
                  ease: 'easeOut',
                  delay: prefersReducedMotion || !isExpanded || index < visibleBadgeCount ? 0 : (index - visibleBadgeCount) * 0.03,
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

        {hasOverflow && !isExpanded ? (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[var(--color-card)] to-transparent"
          />
        ) : null}
      </motion.div>

      {shouldShowToggle ? (
        <motion.button
          layout
          type="button"
          onClick={() => setIsExpanded((current) => !current)}
          aria-expanded={isExpanded}
          aria-controls={badgeListId}
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-2 text-sm font-semibold text-text-primary transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-0"
          whileHover={prefersReducedMotion ? undefined : { y: -1 }}
          whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
          transition={motionTransition}
        >
          <span>{isExpanded ? 'View Less' : `View More (${hiddenBadgeCount})`}</span>
          <motion.span
            aria-hidden="true"
            className="inline-flex"
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={motionTransition}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.span>
        </motion.button>
      ) : null}
    </motion.article>
  );
}
