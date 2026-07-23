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
  MoonStar,
  Play,
  ServerCog,
  Sparkles,
  Wind,
  X,
} from 'lucide-react';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: X,
  email: Mail,
  resume: MoonStar,
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
      <div className="section-content relative overflow-hidden rounded-[36px] border border-white/10 bg-[rgba(8,12,24,0.74)] px-5 py-8 shadow-card backdrop-blur-2xl sm:px-8 md:px-10 md:py-12">
        <div className="absolute inset-0 hero-starfield opacity-30" />
        <div className="absolute inset-0 surface-line opacity-15" />
        <div className="absolute inset-0 noise-layer opacity-70" />
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-primary/12 blur-3xl" />
        <div className="absolute right-0 top-16 h-80 w-80 rounded-full bg-secondary/12 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="max-w-2xl">
            <Reveal>
              <div className="inline-flex items-center gap-3 rounded-full border border-success/25 bg-success/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-100">
                <span className="h-2.5 w-2.5 rounded-full bg-success shadow-[0_0_0_6px_rgba(16,185,129,0.12)]" />
                AI Engineer | Full Stack Developer
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <p className="mt-8 text-xs font-medium uppercase tracking-[0.38em] text-text-secondary">
                Premium engineering portfolio
              </p>
              <h1 className="mt-4 font-display text-5xl font-semibold leading-[1] tracking-tight text-white sm:text-6xl lg:text-[72px]">
                Hi, I&apos;m
                <span className="mt-3 block text-gradient">{site.name}</span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-[560px] text-lg leading-8 text-text-secondary sm:text-xl">
                AI Engineer specializing in Generative AI, Python, React, RAG, and Full Stack Development.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="#projects" variant="primary">
                  View My Work
                  <Play className="h-4 w-4 fill-current" />
                </Button>
                <Button href={site.resumeUrl} variant="outline" download>
                  Download Resume
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap gap-3">
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
                        'inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:border-secondary/35 hover:bg-secondary/15 hover:text-white',
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
                className="mt-10 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.34em] text-text-secondary transition-colors hover:text-white"
                animate={prefersReducedMotion ? undefined : { y: [0, 3, 0] }}
                transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
              >
                Scroll to explore
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white">
                  <ChevronDown className="h-4 w-4" />
                </span>
              </motion.a>
            </Reveal>
          </div>

          <Reveal delay={0.08} className="relative">
            <motion.div
              className="relative mx-auto flex min-h-[560px] w-full max-w-[620px] items-center justify-center"
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <motion.div
                className="absolute h-[430px] w-[430px] rounded-full bg-gradient-to-br from-primary/28 via-secondary/22 to-accent/22 blur-3xl"
                animate={prefersReducedMotion ? undefined : { scale: [1, 1.04, 1], opacity: [0.75, 0.92, 0.75] }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
              />

              <motion.div
                className="hero-orbit absolute h-[500px] w-[500px] rounded-full"
                animate={prefersReducedMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 42, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
              />
              <motion.div
                className="hero-orbit absolute h-[360px] w-[360px] rounded-full border-dashed border-white/8"
                animate={prefersReducedMotion ? undefined : { rotate: -360 }}
                transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
              />

              <div className="absolute inset-0 hero-starfield opacity-20" />

              <motion.div
                className="relative z-10 flex h-[250px] w-[250px] items-center justify-center rounded-full border border-white/12 bg-[rgba(255,255,255,0.05)] p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_0_70px_rgba(124,92,255,0.22)]"
                animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
              >
                <div className="flex h-full w-full items-center justify-center rounded-full border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),rgba(15,23,42,0.92)_60%)]">
                  <div className="flex h-[180px] w-[180px] items-center justify-center rounded-full border border-white/10 bg-[linear-gradient(145deg,rgba(59,130,246,0.2),rgba(139,92,246,0.18),rgba(6,182,212,0.16))] text-center">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.34em] text-text-secondary">
                        AI Engineer
                      </p>
                      <p className="mt-3 font-display text-4xl font-semibold tracking-tight text-white">SK</p>
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
                        'absolute w-[150px] rounded-[22px] border border-white/10 bg-[rgba(16,20,40,0.8)] p-4 shadow-[0_20px_50px_rgba(2,6,23,0.35)] backdrop-blur-xl',
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
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">{card.title}</p>
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
