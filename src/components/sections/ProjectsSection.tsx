import { Button } from '@/components/ui/Button';
import { ProjectsShowcase } from '@/components/sections/ProjectsShowcase';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { projects } from '@/data/content';
import { ArrowRight } from 'lucide-react';

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell section-padding scroll-mt-32">
      <div className="section-content">
        <Reveal>
          <SectionHeading
            eyebrow="Featured Projects"
            title="Built like product case studies"
            highlight="product"
            description="Three current builds that show product thinking, AI capability, and production-minded execution."
            action={
              <Button href="/projects" variant="outline">
                View all projects
                <ArrowRight className="h-4 w-4" />
              </Button>
            }
          />
        </Reveal>

        <div className="mt-8">
          <ProjectsShowcase projects={projects} />
        </div>
      </div>
    </section>
  );
}
