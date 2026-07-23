import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { aboutTimeline, skillTiles, site } from '@/data/content';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Code2,
  GitBranch,
  Braces,
  Bot,
  Database,
  MonitorSmartphone,
  Server,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

const iconMap = {
  react: MonitorSmartphone,
  typescript: Braces,
  javascript: Code2,
  node: Server,
  python: Bot,
  tailwind: Sparkles,
  postgres: Database,
  git: GitBranch,
} as const;

export function AboutSkillsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="section-shell section-padding scroll-mt-32">
      <div className="section-content grid gap-6 lg:grid-cols-[0.94fr_1.06fr]">
        <Reveal>
          <motion.article
            className="glass-panel h-full p-6 md:p-8"
            whileHover={prefersReducedMotion ? undefined : { y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-text-secondary">
              About Me
            </p>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl">
              Turning Ideas Into <span className="text-gradient">Intelligent Solutions</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-text-secondary sm:text-lg">
              {site.summary}
            </p>

            <div className="mt-8 grid gap-5">
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

            <div className="mt-8 flex flex-wrap gap-3">
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

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {skillTiles.map((tile) => {
                const Icon = iconMap[tile.iconKey];

                return (
                  <motion.div
                    key={tile.title}
                    className="group rounded-[22px] border border-white/10 bg-white/5 px-4 py-4 transition-shadow hover:shadow-[0_0_0_1px_rgba(124,92,255,0.14),0_0_40px_rgba(124,92,255,0.18)]"
                    whileHover={prefersReducedMotion ? undefined : { y: -3 }}
                    transition={{ duration: 0.18 }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/40 text-white">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium text-white">{tile.title}</p>
                        <p className="mt-1 text-xs leading-6 text-text-secondary">{tile.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {['Product ready', 'AI informed', 'Detail driven'].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-text-secondary"
                >
                  <span className="block text-white">{item}</span>
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
