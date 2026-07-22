import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { certifications } from '@/data/content';
import { Badge } from '@/components/ui/Badge';
import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export function CertificationsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="certifications" className="section-shell section-padding scroll-mt-32">
      <div className="section-content">
        <Reveal>
          <SectionHeading
            eyebrow="Certifications"
            title="Animated certificate cards"
            description="This section is ready for verification links and future credentials without changing the layout."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert, index) => (
            <Reveal key={cert.title} delay={index * 0.04}>
              <motion.article
                className="glass-card relative overflow-hidden p-6"
                whileHover={prefersReducedMotion ? undefined : { y: -5, rotateX: 2, rotateY: -2 }}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Badge variant="outline">{cert.status}</Badge>
                    <h3 className="mt-4 font-display text-2xl font-semibold text-white">{cert.title}</h3>
                    <p className="mt-2 text-sm uppercase tracking-[0.24em] text-text-secondary">
                      {cert.issuer}
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: prefersReducedMotion ? 0 : [0, 3, 0, -3, 0] }}
                    transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5"
                  >
                    <ExternalLink className="h-5 w-5 text-white" />
                  </motion.div>
                </div>
                <p className="mt-5 text-sm leading-7 text-text-secondary">
                  Verification links can be attached later without changing the card structure.
                </p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
