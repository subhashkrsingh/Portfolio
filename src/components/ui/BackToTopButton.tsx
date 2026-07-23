import { useScrollProgress } from '@/hooks/useScrollProgress';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export function BackToTopButton() {
  const progress = useScrollProgress();
  const prefersReducedMotion = useReducedMotion();
  const visible = progress > 0.2;

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-[65] inline-flex h-12 w-12 items-center justify-center rounded-full border border-secondary/30 bg-secondary/20 text-white shadow-[0_0_0_1px_rgba(124,92,255,0.12),0_0_40px_rgba(124,92,255,0.28)] backdrop-blur-xl transition-colors hover:bg-secondary/30"
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 16 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUp className="h-4 w-4" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
