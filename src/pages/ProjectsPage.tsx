import { Button } from '@/components/ui/Button';
import { ProjectsShowcase } from '@/components/sections/ProjectsShowcase';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Seo } from '@/components/seo/Seo';
import { projects, site } from '@/data/content';
import { buildStructuredData } from '@/utils/seo';
import { ArrowLeft } from 'lucide-react';

export function ProjectsPage() {
  return (
    <>
      <Seo
        title={`Projects | ${site.name}`}
        description="Current project case studies featuring a flagship live dashboard, an enterprise hospital system, an AI fitness coach, and archived experiments."
        pathname="/projects"
        structuredData={buildStructuredData()}
      />

      <section className="section-shell section-padding scroll-mt-32">
        <div className="section-content">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <Button href="/" variant="outline">
              <ArrowLeft className="h-4 w-4" />
              Back home
            </Button>
            <Button href="/#contact" variant="primary">
              Start a project
            </Button>
          </div>

          <Reveal>
            <SectionHeading
              eyebrow="Projects"
              title="All current project case studies"
              description="The three current builds are arranged to emphasize the flagship product first, followed by engineering-heavy supporting work. Archived experiments stay available below."
            />
          </Reveal>

          <div className="mt-10">
            <ProjectsShowcase projects={projects} showArchive />
          </div>
        </div>
      </section>
    </>
  );
}
