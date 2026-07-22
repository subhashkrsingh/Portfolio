import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { testimonials } from '@/data/content';
import { motion, useReducedMotion } from 'framer-motion';
import { Quote } from 'lucide-react';

export function TestimonialsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="testimonials" className="section-shell section-padding scroll-mt-32">
      <div className="section-content">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="Placeholder architecture"
            description="Ready for future recommendations, client notes, or manager feedback without a redesign."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <Reveal key={`${item.name}-${index}`} delay={index * 0.04}>
              <motion.article
                className="glass-card relative overflow-hidden p-6"
                whileHover={prefersReducedMotion ? undefined : { y: -4 }}
              >
                <Quote className="absolute right-5 top-5 h-8 w-8 text-white/10" />
                <p className="text-sm leading-8 text-text-secondary">{item.quote}</p>
                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="font-display text-lg font-semibold text-white">{item.name}</p>
                  <p className="text-xs uppercase tracking-[0.24em] text-text-secondary">{item.role}</p>
                  <p className="mt-2 text-sm text-text-secondary">{item.note}</p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
