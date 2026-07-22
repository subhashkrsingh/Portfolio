import { cn } from '@/utils/cn';
import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={
        prefersReducedMotion
          ? false
          : {
              opacity: 0,
              y: 28,
              filter: 'blur(10px)',
            }
      }
      whileInView={
        prefersReducedMotion
          ? undefined
          : {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
            }
      }
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}
