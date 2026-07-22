import { motion, useReducedMotion } from 'framer-motion';

export function Backdrop() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-mesh opacity-70" />
      <div className="absolute inset-0 surface-line opacity-25" />
      <div className="noise-layer absolute inset-0" />
      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, 18, 0, -12, 0],
                y: [0, -12, 0, 10, 0],
              }
        }
        transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        className="absolute left-[8%] top-[14%] h-72 w-72 rounded-full bg-primary/15 blur-3xl"
      />
      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, -16, 0, 14, 0],
                y: [0, 10, 0, -8, 0],
              }
        }
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        className="absolute right-[4%] top-[12%] h-80 w-80 rounded-full bg-secondary/15 blur-3xl"
      />
      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, 10, 0, -8, 0],
                y: [0, 12, 0, -14, 0],
              }
        }
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        className="absolute bottom-[8%] left-[36%] h-96 w-96 rounded-full bg-accent/12 blur-3xl"
      />
    </div>
  );
}
