import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Reveal';
import { heroMetrics, heroTech, site } from '@/data/content';
import { motion, useMotionValue, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowRight, Download, Mail } from 'lucide-react';
import type { MouseEvent } from 'react';

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (prefersReducedMotion) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;
    x.set((event.clientX - centerX) / 20);
    y.set((event.clientY - centerY) / 20);
  };

  const resetMouse = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="home"
      className="section-shell section-padding scroll-mt-32"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetMouse}
    >
      <div className="section-content relative overflow-hidden rounded-[36px] border border-white/10 bg-[rgba(15,23,42,0.56)] px-5 py-8 shadow-card backdrop-blur-2xl sm:px-8 md:px-10 md:py-10">
        <div className="absolute inset-0 bg-mesh opacity-60" />
        <div className="absolute inset-0 surface-line opacity-20" />
        <div className="absolute inset-0 noise-layer" />

        <div className="relative grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="max-w-3xl">
            <Reveal>
              <Badge variant="secondary">AI Engineer | Full Stack Developer</Badge>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                {site.headline.split(' ').map((word, index) => (
                  <motion.span
                    key={`${word}-${index}`}
                    className="mr-4 inline-block"
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 20, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.42, delay: 0.08 + index * 0.03 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary sm:text-xl">
                {site.subheading}
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="#projects" variant="primary">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href={site.resumeUrl} variant="outline" download>
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
                <Button href="#contact" variant="ghost">
                  <Mail className="h-4 w-4" />
                  Let&apos;s Connect
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {heroMetrics.map((metric) => (
                  <motion.div
                    key={metric.label}
                    className="glass-card p-5"
                    whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                    transition={{ duration: 0.18 }}
                  >
                    <p className="text-xs font-medium uppercase tracking-[0.26em] text-text-secondary">
                      {metric.label}
                    </p>
                    <p className="mt-3 font-display text-xl font-semibold text-white">{metric.value}</p>
                    <p className="mt-2 text-sm leading-6 text-text-secondary">{metric.note}</p>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="relative">
            <motion.div
              className="glass-panel relative overflow-hidden p-5 sm:p-6"
              whileHover={prefersReducedMotion ? undefined : { y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
              <motion.div
                className="absolute right-6 top-6 h-24 w-24 rounded-full border border-white/10 bg-white/5"
                style={{ x, y }}
              />
              <motion.div
                className="absolute bottom-8 left-8 h-32 w-32 rounded-full border border-accent/20 bg-accent/10 blur-2xl"
                style={{ x, y }}
              />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.28em] text-text-secondary">
                      Available for
                    </p>
                    <h2 className="mt-2 font-display text-2xl font-semibold text-white">
                      AI products, dashboards, and internal tools.
                    </h2>
                  </div>
                  <div className="rounded-full border border-success/30 bg-success/12 px-3 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-emerald-100">
                    Open to work
                  </div>
                </div>

                <div className="mt-8 grid gap-4">
                  <div className="glass-card p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.26em] text-text-secondary">System card</p>
                        <p className="mt-2 font-display text-xl font-semibold text-white">{site.name}</p>
                      </div>
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-primary/25 via-secondary/20 to-accent/25 text-xl font-bold text-white">
                        SK
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                      {['AI workflow design', 'Production UI', 'API integration', 'RAG foundations'].map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-text-secondary"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {heroTech.map((tech, index) => (
                      <motion.div
                        key={tech}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white"
                        animate={
                          prefersReducedMotion
                            ? undefined
                            : {
                                y: [0, index % 2 === 0 ? -4 : 4, 0],
                              }
                        }
                        transition={{
                          duration: 5 + index * 0.4,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: 'easeInOut',
                        }}
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="mt-6 flex items-center gap-3 text-text-secondary">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <ArrowDown className="h-4 w-4" />
              </span>
              <span className="text-sm uppercase tracking-[0.24em]">Scroll for projects and roadmap</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
