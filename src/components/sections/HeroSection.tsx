import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { TechIcon } from '@/components/ui/TechIcon';
import { site, socialLinks } from '@/data/content';
import { techLinks } from '@/data/tech-links';
import { heroTechNames } from '@/data/tech-icons';
import { cn } from '@/utils/cn';
import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Play, X } from 'lucide-react';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: X,
  email: Mail,
  resume: Mail,
} as const;

const orbitingTech = heroTechNames.map((name, index) => ({
  name,
  href: techLinks[name],
  angle: -90 + index * 40,
}));

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const [orbitPaused, setOrbitPaused] = useState(false);

  return (
    <section id="home" className="section-shell section-padding scroll-mt-22">
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
              className="relative mx-auto flex min-h-[460px] w-full max-w-[640px] items-center justify-center sm:min-h-[520px] lg:min-h-[560px]"
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <motion.div
                className="absolute h-[360px] w-[360px] rounded-full hero-glow blur-3xl sm:h-[420px] sm:w-[420px] lg:h-[460px] lg:w-[460px]"
                animate={prefersReducedMotion ? undefined : { scale: [1, 1.04, 1], opacity: [0.55, 0.85, 0.55] }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
              />

              <motion.div
                className="hero-orbit absolute h-[360px] w-[360px] rounded-full sm:h-[440px] sm:w-[440px] lg:h-[500px] lg:w-[500px]"
                animate={{ rotate: 360 }}
                transition={{ duration: 42, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
              />

              <div className="absolute inset-0 hero-starfield opacity-15" />

              <div className="relative z-10 flex h-[320px] w-[320px] items-center justify-center overflow-hidden rounded-full border border-border bg-[linear-gradient(145deg,rgba(139,92,246,0.18),rgba(59,130,246,0.16),rgba(34,211,238,0.14))] text-center sm:h-[390px] sm:w-[390px] lg:h-[430px] lg:w-[430px]">
                <img
                  src="/ProfilePic.png"
                  alt="Profile photo of Subhash Kumar Singh"
                  className="block h-[300px] w-[300px] rounded-full object-cover object-center sm:h-[370px] sm:w-[370px] lg:h-[410px] lg:w-[410px]"
                />
              </div>

              <div
                className={cn(
                  'absolute inset-0 z-20 hero-tech-orbit pointer-events-none',
                  '[--orbit-radius:180px] sm:[--orbit-radius:220px] lg:[--orbit-radius:250px]',
                )}
                style={{ animationPlayState: orbitPaused ? 'paused' : 'running' }}
              >
                {orbitingTech.map((item) => {
                  const positionStyle = {
                    transform: `translate(-50%, -50%) rotate(${item.angle}deg) translateX(var(--orbit-radius)) rotate(${-item.angle}deg)`,
                  } as const;

                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={item.name}
                      onMouseEnter={() => setOrbitPaused(true)}
                      onMouseLeave={() => setOrbitPaused(false)}
                      onFocus={() => setOrbitPaused(true)}
                      onBlur={() => setOrbitPaused(false)}
                      className="group hero-tech-badge absolute left-1/2 top-1/2 pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-border bg-[var(--color-card)]/90 shadow-[0_12px_28px_rgba(2,6,23,0.18)] backdrop-blur-xl transition-transform duration-300 hover:scale-110 hover:shadow-[0_16px_36px_rgba(2,6,23,0.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)] sm:h-10 sm:w-10 lg:h-12 lg:w-12"
                      style={positionStyle}
                    >
                      <div
                        className="hero-tech-badge-inner relative flex items-center justify-center"
                        style={{ animationPlayState: orbitPaused ? 'paused' : 'running' }}
                      >
                        <TechIcon name={item.name} size={26} ariaHidden />
                      </div>
                    </a>
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
