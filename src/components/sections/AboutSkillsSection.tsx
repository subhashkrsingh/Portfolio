import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { TechIcon } from '@/components/ui/TechIcon';
import { aboutTimeline, skillTiles, site } from '@/data/content';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function AboutSkillsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="section-shell section-padding scroll-mt-32">
      <div className="section-content grid gap-5 lg:grid-cols-[0.94fr_1.06fr]">
        <Reveal>
          <motion.article
            className="glass-panel h-full p-6 md:p-8"
            whileHover={prefersReducedMotion ? undefined : { y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-text-secondary">
              About Me
            </p>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-black leading-[1.02] tracking-[-0.05em] text-text-primary sm:text-5xl lg:text-6xl">
              Turning Ideas Into <span className="text-gradient">Intelligent Solutions</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-text-secondary sm:text-lg">
              {site.summary}
            </p>

            <div className="mt-6 grid gap-4">
              {aboutTimeline.map((item, index) => (
                <div key={item.title} className="relative pl-6">
                  <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-secondary shadow-[0_0_0_6px_rgba(124,92,255,0.12)]" />
                  {index < aboutTimeline.length - 1 ? (
                    <span className="absolute left-[5px] top-5 h-full w-px bg-white/10" />
                  ) : null}
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-sm leading-7 text-text-secondary">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#contact" variant="primary">
                Let&apos;s Connect
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href={site.resumeUrl} variant="outline" download>
                Download Resume
              </Button>
            </div>
          </motion.article>
        </Reveal>

        <Reveal>
          <motion.article
            className="glass-card h-full p-6 md:p-8"
            whileHover={prefersReducedMotion ? undefined : { y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-text-secondary">
                  Technical Skills
                </p>
                <h3 className="mt-4 font-display text-3xl font-semibold text-white">Core stack and tools</h3>
              </div>
              <Button href="/projects" variant="ghost" className="px-0 py-0 text-sm font-semibold">
                View All
              </Button>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {skillTiles.map((tile) => {
                const iconSize = tile.title === 'Git & GitHub' ? 20 : 40;

                return (
                  <motion.div
                    key={tile.title}
                    className="group flex h-full flex-col items-center rounded-[22px] border border-border bg-[var(--color-card)] px-4 py-5 text-center transition-all duration-300 hover:shadow-[0_0_0_1px_rgba(139,92,246,0.12),0_0_40px_rgba(139,92,246,0.16)]"
                    whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-[var(--color-card-soft)] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                      <TechIcon name={tile.title} size={iconSize} ariaHidden />
                    </div>

                    <p className="mt-4 font-medium text-text-primary">{tile.title}</p>
                    <p className="mt-2 text-xs leading-6 text-text-secondary">{tile.description}</p>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {['Product ready', 'AI informed', 'Detail driven'].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-border bg-[var(--color-card)] px-4 py-3 text-sm text-text-secondary"
                >
                  <span className="block text-text-primary">{item}</span>
                  <span className="mt-1 block text-xs leading-6">
                    Designed to ship thoughtful interfaces and production-grade product logic.
                  </span>
                </div>
              ))}
            </div>
          </motion.article>
        </Reveal>
      </div>
    </section>
  );
}
