import { Button } from '@/components/ui/Button';
import { navItems, site } from '@/data/content';
import { useActiveSection } from '@/hooks/useActiveSection';
import { cn } from '@/utils/cn';
import { getNavHref, isNavItemActive } from '@/utils/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from '@/components/navigation/ThemeToggle';

const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

type MobileDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function MobileDrawer({ open, onOpenChange }: MobileDrawerProps) {
  const prefersReducedMotion = useReducedMotion();
  const location = useLocation();
  const activeSection = useActiveSection(sectionIds);

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
            className="fixed inset-0 z-[80] bg-slate-950/65 backdrop-blur-md md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={() => onOpenChange(false)}
          >
            <motion.div
              className="absolute right-0 top-0 h-full w-[88%] max-w-sm border-l border-border bg-[var(--color-surface)] p-5 shadow-[0_24px_80px_rgba(2,6,23,0.3)]"
              initial={prefersReducedMotion ? false : { x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onMouseDown={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display text-lg font-black tracking-[0.24em] text-text-primary">SUBHASH</p>
                  <p className="text-xs uppercase tracking-[0.24em] text-text-secondary">{site.role}</p>
                </div>
                <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <button
                    type="button"
                    onClick={() => onOpenChange(false)}
                    className="rounded-full border border-border bg-[var(--color-card)] p-2 text-text-primary transition-all duration-300 hover:border-primary/30 hover:bg-[var(--color-surface)]"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <nav className="mt-8 grid gap-2">
                {navItems.map((item) => {
                  const activeId = location.pathname.startsWith('/projects')
                    ? 'projects'
                    : location.pathname.startsWith('/blog')
                      ? null
                      : activeSection;
                  const isActive = isNavItemActive(item, location.pathname, activeId);
                  const href = getNavHref(item, location.pathname);

                  const classes = cn(
                    'rounded-2xl border px-4 py-3 text-sm font-medium transition-all duration-300',
                    isActive
                      ? 'border-primary/30 bg-primary/14 text-text-primary shadow-[0_10px_24px_rgba(91,92,255,0.12)]'
                      : 'border-border bg-[var(--color-card)] text-text-secondary hover:border-primary/30 hover:bg-[var(--color-surface)] hover:text-text-primary',
                  );

                  if (item.kind === 'route') {
                    return (
                      <Link key={item.label} to={href} className={classes} onClick={() => onOpenChange(false)}>
                        {item.label}
                      </Link>
                    );
                  }

                  if (item.kind === 'external') {
                    return (
                      <a
                        key={item.label}
                        href={href}
                        download
                        className={classes}
                        onClick={() => onOpenChange(false)}
                      >
                        {item.label}
                      </a>
                    );
                  }

                  return (
                    <a key={item.label} href={href} className={classes} onClick={() => onOpenChange(false)}>
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
