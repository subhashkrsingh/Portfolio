import { Badge } from '@/components/ui/Badge';
import { cn } from '@/utils/cn';
import { motion, useReducedMotion } from 'framer-motion';

type TimelineItemProps = {
  title: string;
  subtitle: string;
  period: string;
  bullets: string[];
  note?: string;
  className?: string;
};

export function TimelineItem({ title, subtitle, period, bullets, note, className }: TimelineItemProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      className={cn(
        'relative rounded-[28px] border border-white/10 bg-white/5 px-6 py-6 pl-10 shadow-card backdrop-blur-xl',
        className,
      )}
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <span className="absolute left-6 top-7 h-3.5 w-3.5 rounded-full border border-white/20 bg-accent/80 shadow-[0_0_0_8px_rgba(6,182,212,0.1)]" />
      <div className="absolute left-[22px] top-0 h-full w-px bg-gradient-to-b from-white/12 via-white/8 to-transparent" />
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.26em] text-text-secondary">{period}</p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm leading-7 text-text-secondary">{subtitle}</p>
        </div>
        <Badge variant="secondary" className="self-start">
          Timeline
        </Badge>
      </div>
      <ul className="mt-5 grid gap-2 text-sm leading-7 text-text-secondary sm:grid-cols-2">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      {note ? <p className="mt-4 text-xs uppercase tracking-[0.24em] text-text-secondary">{note}</p> : null}
    </motion.article>
  );
}
