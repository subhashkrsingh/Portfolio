import { useScrollProgress } from '@/hooks/useScrollProgress';
import { motion, useReducedMotion } from 'framer-motion';

export function ScrollProgress() {
  const progress = useScrollProgress();
  const prefersReducedMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="fixed left-0 top-0 z-[60] h-1 w-full bg-transparent">
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-primary via-secondary to-accent"
        initial={false}
        animate={{ scaleX: progress }}
        transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.16, ease: 'easeOut' }}
      />
    </div>
  );
}
