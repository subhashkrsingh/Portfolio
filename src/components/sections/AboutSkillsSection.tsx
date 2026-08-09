import { Button } from '@/components/ui/Button';
import { SkillCard } from '@/components/cards/SkillCard';
import { Reveal } from '@/components/ui/Reveal';
import { aboutTimeline, site } from '@/data/content';
import { techSkillGroups } from '@/data/tech-icons';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function AboutSkillsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <section id="about" className="section-shell section-padding scroll-mt-32">
        <div className="section-content">
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
        </div>
      </section>

      <section id="skills" className="section-shell section-padding scroll-mt-32">
        <div className="section-content">
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
                  <h3 className="mt-4 font-display text-3xl font-semibold text-white">
                    Core stack and tools
                  </h3>
                </div>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {techSkillGroups.map((skill) => (
                  <SkillCard key={skill.category} skill={skill} className="h-full" />
                ))}
              </div>
            </motion.article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
