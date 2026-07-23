import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { experience } from '@/data/content';
import { motion, useReducedMotion } from 'framer-motion';
import { BriefcaseBusiness, MapPin, Sparkles } from 'lucide-react';

export function ExperienceSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="experience" className="section-shell section-padding scroll-mt-32">
      <div className="section-content">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="A timeline of practical engineering"
            description="The apprenticeship experience that shaped how I think about documentation, process, and dependable delivery."
          />
        </Reveal>

        <div className="mt-10 grid gap-6">
          {experience.map((item, index) => (
            <Reveal key={`${item.org}-${item.role}`} delay={index * 0.05}>
              <motion.article
                className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[rgba(8,12,24,0.7)] p-6 shadow-card backdrop-blur-2xl md:p-8"
                whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute inset-y-0 left-10 hidden w-px bg-gradient-to-b from-secondary/40 via-white/10 to-transparent md:block" />

                <div className="grid gap-6 md:grid-cols-[160px_1fr]">
                  <div className="flex flex-col gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-lg font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_0_40px_rgba(124,92,255,0.18)]">
                      NT
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.28em] text-text-secondary">
                        Timeline
                      </p>
                      <p className="mt-2 text-sm font-medium text-white">{item.period}</p>
                      <p className="mt-1 inline-flex items-center gap-2 text-sm text-text-secondary">
                        <MapPin className="h-4 w-4" />
                        {item.location}
                      </p>
                    </div>
                  </div>

                  <div className="relative md:pl-8">
                    <span className="absolute left-0 top-2 hidden h-4 w-4 rounded-full bg-secondary shadow-[0_0_0_6px_rgba(124,92,255,0.12)] md:block" />

                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.28em] text-text-secondary">
                          Apprentice
                        </p>
                        <h3 className="mt-3 font-display text-3xl font-semibold text-white">{item.org}</h3>
                      </div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-text-secondary">
                        <BriefcaseBusiness className="h-3.5 w-3.5" />
                        Operations & Process
                      </div>
                    </div>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-text-secondary">
                      A hands-on role that strengthened how I document work, move through workflows, and
                      collaborate in environments where reliability matters.
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {item.bullets.map((bullet) => (
                        <div
                          key={bullet}
                          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-7 text-text-secondary"
                        >
                          {bullet}
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-success/25 bg-success/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-100">
                      <Sparkles className="h-3.5 w-3.5" />
                      Built habits for dependable delivery
                    </div>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
