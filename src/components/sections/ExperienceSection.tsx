import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { experience } from '@/data/content';
import { TimelineItem } from '@/components/timeline/TimelineItem';

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell section-padding scroll-mt-32">
      <div className="section-content">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Timeline of professional growth"
            description="A concise view of the apprenticeship experience that shaped how I work with process, communication, and reliability."
          />
        </Reveal>

        <div className="mt-10 grid gap-5">
          {experience.map((item) => (
            <Reveal key={item.org}>
              <TimelineItem
                title={`${item.org} - ${item.role}`}
                subtitle={item.location}
                period={item.period}
                bullets={item.bullets}
                note="Operational discipline and cross-team collaboration"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
