import roadmapData from '@/data/currently-building.json';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { LearningRoadmap } from '@/types/content';
import { Badge } from '@/components/ui/Badge';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, Circle, ArrowRight } from 'lucide-react';

const roadmap = roadmapData as LearningRoadmap;

function statusVariant(status: string) {
  switch (status.toLowerCase()) {
    case 'completed':
      return 'success' as const;
    case 'learning':
      return 'primary' as const;
    case 'next':
      return 'secondary' as const;
    case 'upcoming':
      return 'outline' as const;
    default:
      return 'warning' as const;
  }
}

export function RoadmapSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="roadmap" className="section-shell section-padding scroll-mt-32">
      <div className="section-content">
        <Reveal>
          <SectionHeading
            eyebrow="Currently Building"
            title="Roadmap and learning journey"
            description="This section is powered by JSON so it stays easy to update as the work changes."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 xl:grid-cols-[1fr_0.95fr]">
          <div className="grid gap-6">
            {roadmap.projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.04}>
                <motion.article
                  className="glass-card p-6"
                  whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                  transition={{ duration: 0.18 }}
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.28em] text-text-secondary">
                        {project.phase}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-semibold text-white">{project.title}</h3>
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-text-secondary">{project.summary}</p>
                    </div>
                    <Badge variant={project.progress >= 70 ? 'success' : 'secondary'}>
                      {project.progress}%
                    </Badge>
                  </div>

                  <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/6">
                    <motion.div
                      className="h-full origin-left rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: project.progress / 100 }}
                      transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.05 }}
                    />
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {project.milestones.map((milestone) => (
                      <div
                        key={milestone.label}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white"
                      >
                        {milestone.done ? (
                          <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                        ) : (
                          <Circle className="h-4 w-4 text-text-secondary" />
                        )}
                        <span className={milestone.done ? 'text-white' : 'text-text-secondary'}>
                          {milestone.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <motion.aside className="glass-card p-6">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-text-secondary">
                AI learning path
              </p>
              <h3 className="mt-4 font-display text-3xl font-semibold text-white">
                A live timeline that is easy to extend.
              </h3>
              <div className="mt-6 grid gap-3">
                {roadmap.learningJourney.map((item, index) => (
                  <div
                    key={`${item.topic}-${index}`}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-full border ${
                          statusVariant(item.status) === 'success'
                            ? 'border-success/30 bg-success/12 text-emerald-200'
                            : statusVariant(item.status) === 'primary'
                              ? 'border-primary/30 bg-primary/12 text-blue-100'
                              : statusVariant(item.status) === 'secondary'
                                ? 'border-secondary/30 bg-secondary/12 text-violet-100'
                                : statusVariant(item.status) === 'warning'
                                  ? 'border-warning/30 bg-warning/12 text-amber-100'
                                  : 'border-white/10 bg-white/5 text-text-secondary'
                        }`}
                      >
                        {item.status.toLowerCase() === 'completed' ? (
                          <CheckCircle2 className="h-4 w-4" />
                        ) : (
                          <ArrowRight className="h-4 w-4" />
                        )}
                      </span>
                      <div>
                        <p className="font-medium text-white">{item.topic}</p>
                        <p className="text-xs uppercase tracking-[0.24em] text-text-secondary">
                          {item.status}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
