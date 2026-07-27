import { Button } from '@/components/ui/Button';
import { navItems } from '@/data/content';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { cn } from '@/utils/cn';
import { getNavHref, isNavItemActive } from '@/utils/navigation';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MobileDrawer } from '@/components/navigation/MobileDrawer';
import { ThemeToggle } from '@/components/navigation/ThemeToggle';

const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

export function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const scrollDirection = useScrollDirection();
  const location = useLocation();
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname, location.hash]);

  const activeId = useMemo(() => {
    if (location.pathname.startsWith('/projects')) {
      return 'projects';
    }
    if (location.pathname.startsWith('/blog')) {
      return 'blog';
    }

    return activeSection || 'home';
  }, [activeSection, location.pathname]);
  const sectionActive = activeId === 'blog' ? null : activeId;

  const hideNavbar = typeof window !== 'undefined' && scrollDirection === 'down' && window.scrollY > 120;

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-4 z-[60] px-4 sm:px-6 lg:px-8"
        initial={false}
        animate={{
          y: hideNavbar ? -120 : 0,
          opacity: hideNavbar ? 0 : 1,
        }}
        transition={{ duration: 0.24, ease: 'easeOut' }}
      >
        <div className="section-shell">
          <div className="glass-panel mx-auto max-w-[1200px] rounded-full px-4 py-3 shadow-[0_18px_50px_rgba(2,6,23,0.14)] md:px-6 md:py-4">
            <div className="flex items-center justify-between gap-3">
              <Link
                to="/"
                className="group inline-flex items-center gap-3 rounded-full border border-border bg-[var(--color-card)] px-4 py-2.5 text-sm font-semibold text-text-primary shadow-[0_10px_28px_rgba(2,6,23,0.08)] transition-all duration-300 hover:border-primary/30 hover:bg-[var(--color-surface)]"
              >
                <span className="font-display text-[0.78rem] font-black tracking-[0.34em]">SUBHASH</span>
                <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-primary via-secondary to-accent shadow-[0_0_0_6px_rgba(139,92,246,0.14)] transition-transform duration-300 group-hover:scale-110" />
              </Link>

              <nav className="hidden items-center gap-1 xl:flex">
                {navItems.map((item) => {
                  const isActive = isNavItemActive(item, location.pathname, sectionActive);
                  const href = getNavHref(item, location.pathname);
                  const classes = cn('nav-link', isActive && 'nav-link-active');

                  return item.kind === 'route' ? (
                    <Link key={item.label} to={href} className={classes}>
                      {item.label}
                    </Link>
                  ) : item.kind === 'external' ? (
                    <a key={item.label} href={href} download className={classes}>
                      {item.label}
                    </a>
                  ) : (
                    <a key={item.label} href={href} className={classes}>
                      {item.label}
                    </a>
                  );
                })}
              </nav>

              <div className="hidden items-center gap-3 md:flex">
                <ThemeToggle />
                <Button href="#contact" variant="primary" className="px-5 py-2.5">
                  <Mail className="h-4 w-4" />
                  Let&apos;s Connect
                </Button>
              </div>

              <MobileDrawer open={drawerOpen} onOpenChange={setDrawerOpen} />
            </div>
          </div>
        </div>
      </motion.header>
      <div className="h-20 md:h-24" />
    </>
  );
}
