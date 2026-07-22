import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { education } from '@/data/content';
import { TimelineItem } from '@/components/timeline/TimelineItem';

export function EducationSection() {
  return (
    <section id="education" className="section-shell section-padding scroll-mt-32">
      <div className="section-content">
        <Reveal>
          <SectionHeading
            eyebrow="Education"
            title="Formal foundation and ongoing learning"
            description="The portfolio includes the academic base and the professional learning path that supports the AI roadmap."
          />
        </Reveal>

        <div className="mt-10 grid gap-5">
          {education.map((item) => (
            <Reveal key={item.school}>
              <TimelineItem
                title={item.degree}
                subtitle={item.school}
                period={item.period}
                bullets={item.details}
                note="Structured learning and practical engineering"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
