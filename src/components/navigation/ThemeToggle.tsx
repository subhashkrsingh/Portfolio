import { motion, useReducedMotion } from 'framer-motion';
import { MoonStar, SunMedium } from 'lucide-react';
import { useEffect, useState } from 'react';

type ThemeMode = 'dark' | 'light';

const storageKey = 'subhash-portfolio-theme';

function readInitialTheme(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'dark';
  }

  const stored = window.localStorage.getItem(storageKey);
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }

  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export function ThemeToggle() {
  const prefersReducedMotion = useReducedMotion();
  const [theme, setTheme] = useState<ThemeMode>(readInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(storageKey, theme);

    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) {
      themeMeta.setAttribute('content', theme === 'light' ? '#ffffff' : '#060816');
    }
  }, [theme]);

  return (
    <motion.button
      type="button"
      aria-label={`Switch theme to ${theme === 'dark' ? 'light' : 'dark'}`}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-[var(--color-card)] text-text-primary shadow-[0_12px_28px_rgba(2,6,23,0.08)] transition-all duration-300 hover:border-primary/30 hover:bg-[var(--color-surface)]"
      whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.02 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.96 }}
      onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
    >
      {theme === 'dark' ? <MoonStar className="h-4 w-4" /> : <SunMedium className="h-4 w-4" />}
    </motion.button>
  );
}
