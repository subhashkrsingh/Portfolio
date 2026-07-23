import { portfolioStats } from '@/data/content';
import { Reveal } from '@/components/ui/Reveal';
import { motion, useReducedMotion } from 'framer-motion';
import { BriefcaseBusiness, GraduationCap, Rocket, Trophy } from 'lucide-react';

const iconMap = {
  rocket: Rocket,
  briefcase: BriefcaseBusiness,
  graduation: GraduationCap,
  trophy: Trophy,
} as const;

export function StatsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-shell pb-24 md:pb-28 xl:pb-36">
      <div className="section-content">
        <Reveal>
          <div className="glass-card overflow-hidden">
            <div className="grid divide-y divide-white/10 md:grid-cols-4 md:divide-x md:divide-y-0">
              {portfolioStats.map((item, index) => {
                const Icon = iconMap[item.iconKey];

                return (
                  <motion.div
                    key={item.label}
                    className="flex items-center gap-4 px-6 py-6 md:px-8"
                    whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                    transition={{ duration: 0.18 }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.28em] text-text-secondary">
                        {item.label}
                      </p>
                      <p className="mt-2 font-display text-2xl font-semibold text-white">{item.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
