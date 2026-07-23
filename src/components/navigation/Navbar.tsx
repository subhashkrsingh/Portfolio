import { Button } from '@/components/ui/Button';
import { navItems, site } from '@/data/content';
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

  const hideNavbar = scrollDirection === 'down' && window.scrollY > 120;

  return (
    <>
      <motion.header
        className="fixed left-0 top-0 z-[60] w-full px-3 pt-3 md:px-5"
        initial={false}
        animate={{
          y: hideNavbar ? -120 : 0,
          opacity: hideNavbar ? 0 : 1,
        }}
        transition={{ duration: 0.24, ease: 'easeOut' }}
      >
        <div className="section-shell">
          <div className="rounded-[28px] border border-white/10 bg-[rgba(8,12,24,0.48)] backdrop-blur-2xl">
            <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3 md:px-6">
              <Link to="/" className="group flex items-center gap-3">
                <div className="flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 text-sm font-bold text-white transition-colors group-hover:bg-white/10">
                  <span>SUBHASH.</span>
                  <span className="h-2 w-2 rounded-full bg-secondary shadow-[0_0_0_6px_rgba(124,92,255,0.15)]" />
                </div>
                <div className="hidden sm:block">
                  <p className="font-display text-sm font-semibold text-white">{site.role}</p>
                </div>
              </Link>

              <nav className="hidden items-center gap-1 xl:flex">
                {navItems.map((item) => {
                  const isActive = isNavItemActive(item, location.pathname, sectionActive);
                  const href = getNavHref(item, location.pathname);

                  const classes = cn(
                    'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    isActive ? 'bg-white/10 text-white' : 'text-text-secondary hover:bg-white/5 hover:text-white',
                  );

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
                <Button href="#contact" variant="primary" className="px-4 py-2">
                  <Mail className="h-4 w-4" />
                  Let&apos;s Connect
                </Button>
              </div>

              <MobileDrawer open={drawerOpen} onOpenChange={setDrawerOpen} />
            </div>
          </div>
        </div>
      </motion.header>
      <div className="h-24 md:h-28" />
    </>
  );
}
