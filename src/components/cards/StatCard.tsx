import { cn } from '@/utils/cn';
import { motion, useReducedMotion } from 'framer-motion';

type StatCardProps = {
  label: string;
  value: string;
  note?: string;
  className?: string;
};

export function StatCard({ label, value, note, className }: StatCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn('glass-card group relative overflow-hidden p-5', className)}
      whileHover={prefersReducedMotion ? undefined : { y: -6, scale: 1.01 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <p className="relative text-xs font-medium uppercase tracking-[0.28em] text-text-secondary">{label}</p>
      <p className="relative mt-3 font-display text-2xl font-black tracking-[-0.03em] text-text-primary">
        {value}
      </p>
      {note ? <p className="mt-2 text-sm leading-6 text-text-secondary">{note}</p> : null}
    </motion.div>
  );
}
