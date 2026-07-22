import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/cn';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
  open: boolean;
  title: string;
  subtitle?: string;
  onClose: () => void;
  children: ReactNode;
  className?: string;
};

export function Modal({ open, title, subtitle, onClose, children, className }: ModalProps) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [open, onClose]);

  if (!open || typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[70] flex items-end justify-center bg-slate-950/72 px-4 py-4 backdrop-blur-md md:items-center md:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className={cn('glass-panel relative w-full max-w-5xl overflow-hidden p-5 md:p-8', className)}
            initial={
              prefersReducedMotion
                ? false
                : {
                    opacity: 0,
                    y: 30,
                    scale: 0.98,
                  }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.985 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-text-secondary">
                  Case Study
                </p>
                <h3 id="modal-title" className="mt-2 font-display text-3xl font-semibold text-white">
                  {title}
                </h3>
                {subtitle ? <p className="mt-3 max-w-3xl text-sm leading-7 text-text-secondary">{subtitle}</p> : null}
              </div>
              <Button variant="ghost" className="px-3 py-2" onClick={onClose}>
                <X className="h-4 w-4" />
                Close
              </Button>
            </div>
            <div className="max-h-[78vh] overflow-y-auto pr-1 scrollbar-thin">{children}</div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
