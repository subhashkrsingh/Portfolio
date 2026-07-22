import { Button } from '@/components/ui/Button';
import { navItems, site } from '@/data/content';
import { cn } from '@/utils/cn';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

type MobileDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function MobileDrawer({ open, onOpenChange }: MobileDrawerProps) {
  const prefersReducedMotion = useReducedMotion();
  const location = useLocation();

  return (
    <>
      <Button
        variant="outline"
        className="px-4 py-2 md:hidden"
        onClick={() => onOpenChange(true)}
      >
        <Menu className="h-4 w-4" />
        Menu
      </Button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[80] bg-slate-950/75 backdrop-blur-md md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={() => onOpenChange(false)}
          >
            <motion.div
              className="absolute right-0 top-0 h-full w-[88%] max-w-sm border-l border-white/10 bg-[rgba(5,8,22,0.96)] p-5 shadow-2xl"
              initial={prefersReducedMotion ? false : { x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onMouseDown={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display text-lg font-semibold text-white">{site.name}</p>
                  <p className="text-xs uppercase tracking-[0.24em] text-text-secondary">{site.role}</p>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenChange(false)}
                  className="rounded-full border border-white/10 bg-white/5 p-2 text-text-primary transition-colors hover:bg-white/10"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <nav className="mt-8 grid gap-2">
                {navItems.map((item) => {
                  const isActive = item.kind === 'route'
                    ? location.pathname.startsWith(item.href)
                    : location.hash === item.href || (!location.hash && item.href === '#home');

                  const classes = cn(
                    'rounded-2xl border px-4 py-3 text-sm font-medium transition-colors',
                    isActive
                      ? 'border-primary/30 bg-primary/14 text-white'
                      : 'border-white/10 bg-white/5 text-text-secondary hover:border-white/20 hover:bg-white/10',
                  );

                  if (item.kind === 'route') {
                    return (
                      <Link key={item.label} to={item.href} className={classes} onClick={() => onOpenChange(false)}>
                        {item.label}
                      </Link>
                    );
                  }

                  return (
                    <a key={item.label} href={item.href} className={classes} onClick={() => onOpenChange(false)}>
                      {item.label}
                    </a>
                  );
                })}
              </nav>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
