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
      className={cn('glass-card p-5', className)}
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.18 }}
    >
      <p className="text-xs font-medium uppercase tracking-[0.28em] text-text-secondary">{label}</p>
      <p className="mt-3 font-display text-2xl font-semibold text-white">{value}</p>
      {note ? <p className="mt-2 text-sm leading-6 text-text-secondary">{note}</p> : null}
    </motion.div>
  );
}
