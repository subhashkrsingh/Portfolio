import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { aboutTimeline } from '@/data/content';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Layers3, Sparkles, Target } from 'lucide-react';

const iconMap = [Target, Layers3, Sparkles];

export function AboutSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="section-shell section-padding scroll-mt-32">
      <div className="section-content">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Professional story"
            description="This portfolio is written like a product narrative: what I build, how I think, and why the details matter."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <motion.article
              className="glass-card h-full p-6"
              whileHover={prefersReducedMotion ? undefined : { y: -4 }}
            >
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-text-secondary">
                Engineering philosophy
              </p>
              <h3 className="mt-4 font-display text-3xl font-semibold text-white">
                Build systems that are easy to trust, easy to extend, and easy to explain.
              </h3>
              <p className="mt-4 text-sm leading-7 text-text-secondary">
                I care about structure and clarity. Whether I am designing an AI workflow or a standard
                dashboard, the goal is the same: make the product feel deliberate, useful, and reliable.
              </p>
              <div className="mt-6 grid gap-3">
                {['Current role: Apprenticeship experience at NTPC Limited', 'AI focus: Generative AI, RAG, prompt design', 'Goal: production-ready products, not demos'].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-text-secondary">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </motion.article>
          </Reveal>

          <div className="grid gap-4">
            {aboutTimeline.map((item, index) => {
              const Icon = iconMap[index] ?? ArrowRight;
              return (
                <Reveal key={item.title} delay={index * 0.04}>
                  <motion.article
                    className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-card backdrop-blur-xl"
                    whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                  >
                    <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent" />
                    <div className="flex items-start gap-4 pl-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.28em] text-text-secondary">
                          Timeline {String(index + 1).padStart(2, '0')}
                        </p>
                        <h3 className="mt-2 font-display text-2xl font-semibold text-white">{item.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-text-secondary">{item.body}</p>
                      </div>
                    </div>
                  </motion.article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
