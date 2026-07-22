import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { skills } from '@/data/content';
import { SkillCard } from '@/components/cards/SkillCard';
import { motion } from 'framer-motion';

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell section-padding scroll-mt-32">
      <div className="section-content">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Organized by expertise"
            description="A modular view of the stack I use today and the tools I am actively building toward."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-6 md:grid-cols-2">
            {skills.slice(0, 6).map((skill, index) => (
              <Reveal key={skill.category} delay={index * 0.03}>
                <SkillCard skill={skill} />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <motion.aside className="glass-card flex h-full flex-col justify-between p-6">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-text-secondary">
                  Future stack
                </p>
                <h3 className="mt-4 font-display text-3xl font-semibold text-white">
                  The next layer of capability is already in motion.
                </h3>
                <p className="mt-4 text-sm leading-7 text-text-secondary">
                  The architecture is ready for LangChain, LangGraph, MCP, AI agents, and fine-tuning
                  work without needing a redesign.
                </p>
              </div>

              <div className="mt-8 grid gap-3">
                {skills[6].items.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white"
                  >
                    {item}
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
