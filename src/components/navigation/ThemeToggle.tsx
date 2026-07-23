import { motion, useReducedMotion } from 'framer-motion';
import { MoonStar, SunMedium } from 'lucide-react';
import { useEffect, useState } from 'react';

type ThemeMode = 'midnight' | 'aurora';

const storageKey = 'subhash-portfolio-theme';

function readInitialTheme(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'midnight';
  }

  const stored = window.localStorage.getItem(storageKey);
  if (stored === 'aurora' || stored === 'midnight') {
    return stored;
  }

  return 'midnight';
}

export function ThemeToggle() {
  const prefersReducedMotion = useReducedMotion();
  const [theme, setTheme] = useState<ThemeMode>(readInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(storageKey, theme);
  }, [theme]);

  return (
    <motion.button
      type="button"
      aria-label={`Switch theme to ${theme === 'midnight' ? 'aurora' : 'midnight'}`}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:border-white/20 hover:bg-white/10"
      whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.02 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.96 }}
      onClick={() => setTheme((current) => (current === 'midnight' ? 'aurora' : 'midnight'))}
    >
      {theme === 'midnight' ? <MoonStar className="h-4 w-4" /> : <SunMedium className="h-4 w-4" />}
    </motion.button>
  );
}
