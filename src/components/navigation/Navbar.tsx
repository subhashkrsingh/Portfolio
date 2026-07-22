import { Button } from '@/components/ui/Button';
import { navItems, site } from '@/data/content';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MobileDrawer } from '@/components/navigation/MobileDrawer';

const sectionIds = ['home', 'about', 'skills', 'projects', 'roadmap', 'github', 'blog', 'contact'];

export function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const scrollDirection = useScrollDirection();
  const location = useLocation();
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname, location.hash]);

  const activeId = useMemo(() => {
    if (location.pathname.startsWith('/blog')) {
      return 'blog';
    }

    return activeSection || 'home';
  }, [activeSection, location.pathname]);

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
          <div className="glass-panel">
            <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3 md:px-6">
              <Link to="/" className="group flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-bold text-white transition-colors group-hover:bg-white/10">
                  SK
                </div>
                <div className="hidden sm:block">
                  <p className="font-display text-sm font-semibold text-white">{site.name}</p>
                  <p className="text-xs uppercase tracking-[0.24em] text-text-secondary">{site.role}</p>
                </div>
              </Link>

              <nav className="hidden items-center gap-1 lg:flex">
                {navItems.map((item) => {
                  const isActive =
                    item.kind === 'route'
                      ? location.pathname.startsWith(item.href)
                      : activeId === item.href.replace('#', '');

                  const classes = cn(
                    'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    isActive ? 'bg-white/10 text-white' : 'text-text-secondary hover:bg-white/5 hover:text-white',
                  );

                  return item.kind === 'route' ? (
                    <Link key={item.label} to={item.href} className={classes}>
                      {item.label}
                    </Link>
                  ) : (
                    <a key={item.label} href={item.href} className={classes}>
                      {item.label}
                    </a>
                  );
                })}
              </nav>

              <div className="hidden items-center gap-3 md:flex">
                <Button href={site.resumeUrl} variant="outline" download className="px-4 py-2">
                  <Download className="h-4 w-4" />
                  Resume
                </Button>
                <Button href="#contact" variant="primary" className="px-4 py-2">
                  <Mail className="h-4 w-4" />
                  Contact
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
