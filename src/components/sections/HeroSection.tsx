import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { site, socialLinks } from '@/data/content';
import { cn } from '@/utils/cn';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Atom,
  Braces,
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Play,
  ServerCog,
  Wind,
  X,
} from 'lucide-react';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: X,
  email: Mail,
  resume: Mail,
} as const;

const floatingCards = [
  { title: 'React', subtitle: 'UI systems', icon: Atom, position: 'top-10 left-6', delay: 0 },
  { title: 'TypeScript', subtitle: 'Strict types', icon: Braces, position: 'top-4 right-8', delay: 0.12 },
  { title: 'Tailwind', subtitle: 'Design tokens', icon: Wind, position: 'bottom-12 left-0', delay: 0.24 },
  { title: 'Node.js', subtitle: 'Backend logic', icon: ServerCog, position: 'bottom-4 right-4', delay: 0.34 },
];

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="home" className="section-shell section-padding scroll-mt-32">
      <div className="section-content hero-stage relative overflow-hidden rounded-[40px] border border-border bg-[var(--color-surface)] px-6 py-8 shadow-card dark:py-10 sm:px-8 md:px-10 md:py-12 dark:md:py-14 lg:px-12 lg:py-14 dark:lg:py-16">
        <div className="absolute inset-0 hero-starfield opacity-20" />
        <div className="absolute inset-0 surface-line opacity-20" />
        <div className="absolute inset-0 noise-layer" />
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-primary/12 blur-3xl" />
        <div className="absolute right-0 top-16 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-accent/8 blur-3xl" />

        <div className="relative grid gap-10 dark:gap-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          <div className="w-full max-w-[620px]">
            <Reveal>
              <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-[var(--color-card)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.34em] text-primary shadow-[0_10px_28px_rgba(91,92,255,0.08)]">
                <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-primary via-secondary to-accent shadow-[0_0_0_6px_rgba(139,92,246,0.12)]" />
                AI Engineer | Full Stack Developer
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.42em] text-secondary dark:mt-10">
                Hi, I&apos;m
              </p>
              <h1 className="mt-4 max-w-[12ch] text-balance font-display text-[clamp(3.75rem,8vw,5rem)] font-black leading-[0.92] tracking-[-0.08em] text-text-primary dark:mt-5 sm:text-[4.5rem] lg:text-[5rem]">
                <span className="hero-name-gradient block">{site.name}</span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 max-w-[580px] text-lg leading-8 text-text-secondary dark:mt-7 sm:text-xl">
                AI Engineer specializing in Generative AI, Python, React, RAG, and Full Stack Development.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-8 flex flex-wrap gap-4 dark:mt-10">
                <Button href="#projects" variant="primary">
                  View My Work
                  <Play className="h-4 w-4 fill-current" />
                </Button>
                <Button href={site.resumeUrl} variant="secondary" download>
                  Download Resume
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-6 flex flex-wrap gap-3 dark:mt-9">
                {socialLinks.slice(0, 4).map((link, index) => {
                  const Icon = iconMap[link.icon];
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target={link.icon === 'email' ? '_self' : '_blank'}
                      rel="noreferrer"
                      aria-label={link.label}
                      className={cn(
                        'inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-[var(--color-card)] text-text-primary shadow-[0_10px_24px_rgba(2,6,23,0.08)] transition-all duration-300 hover:border-primary/30 hover:bg-[var(--color-surface)] hover:text-primary',
                      )}
                      whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.04 }}
                      whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
                      transition={{ duration: 0.18, delay: index * 0.03 }}
                    >
                      <Icon className="h-4 w-4" />
                    </motion.a>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <motion.a
                href="#about"
                className="mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.34em] text-text-secondary transition-colors duration-300 hover:text-text-primary dark:mt-12"
                animate={prefersReducedMotion ? undefined : { y: [0, 3, 0] }}
                transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
              >
                Scroll to explore
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-[var(--color-card)] text-text-primary">
                  <ChevronDown className="h-4 w-4" />
                </span>
              </motion.a>
            </Reveal>
          </div>

          <Reveal delay={0.08} className="relative">
            <motion.div
              className="relative mx-auto flex min-h-[560px] w-full max-w-[640px] items-center justify-center"
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <motion.div
                className="absolute h-[440px] w-[440px] rounded-full hero-glow blur-3xl"
                animate={prefersReducedMotion ? undefined : { scale: [1, 1.04, 1], opacity: [0.55, 0.85, 0.55] }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
              />

              <motion.div
                className="hero-orbit absolute h-[500px] w-[500px] rounded-full"
                animate={prefersReducedMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 42, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
              />
              <motion.div
                className="hero-orbit absolute h-[360px] w-[360px] rounded-full border-dashed border-white/10"
                animate={prefersReducedMotion ? undefined : { rotate: -360 }}
                transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
              />

              <div className="absolute inset-0 hero-starfield opacity-15" />

              <motion.div
                className="relative z-10 flex h-[260px] w-[260px] items-center justify-center rounded-full border border-border bg-[var(--color-surface)] p-4 shadow-[0_24px_70px_rgba(2,6,23,0.16)]"
                animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
              >
                <div className="flex h-full w-full items-center justify-center rounded-full border border-border bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),var(--color-surface)_62%)] p-4">
                  <div className="flex h-[180px] w-[180px] items-center justify-center rounded-full border border-border bg-[linear-gradient(145deg,rgba(139,92,246,0.18),rgba(59,130,246,0.16),rgba(34,211,238,0.14))] text-center">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.34em] text-text-secondary">
                        AI Engineer
                      </p>
                      <p className="mt-3 font-display text-4xl font-black tracking-[-0.08em] text-text-primary">
                        SK
                      </p>
                      <p className="mt-2 text-xs uppercase tracking-[0.3em] text-text-secondary">
                        Subhash Kumar Singh
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="hidden md:block">
                {floatingCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <motion.div
                      key={card.title}
                      className={cn(
                        'absolute w-[160px] rounded-[24px] border border-border bg-[var(--color-card)] p-4 shadow-[0_18px_40px_rgba(2,6,23,0.16)] backdrop-blur-xl',
                        card.position,
                      )}
                      animate={prefersReducedMotion ? undefined : { y: [0, -8, 0], rotate: [0, 1, 0] }}
                      transition={{
                        duration: 6 + card.delay * 10,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: 'easeInOut',
                        delay: card.delay,
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-gradient-to-br from-primary/15 via-secondary/15 to-accent/15 text-text-primary">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-text-primary">{card.title}</p>
                          <p className="mt-1 text-xs text-text-secondary">{card.subtitle}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
