import { ProjectCard } from '@/components/cards/ProjectCard';
import { ProjectDetailsPanel } from '@/components/cards/ProjectDetailsPanel';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Seo } from '@/components/seo/Seo';
import { projects, site } from '@/data/content';
import { buildStructuredData } from '@/utils/seo';
import { useState } from 'react';
import type { ProjectItem } from '@/types/content';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { ArrowLeft } from 'lucide-react';

export function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <>
      <Seo
        title={`Projects | ${site.name}`}
        description="Full portfolio project gallery with interactive cards and detailed case study modals."
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
              title="All project case studies"
              description="A fuller gallery of the work, including the featured dashboard, AI product, hospital system, and quiz platform."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.04}>
                <ProjectCard project={project} onOpen={setSelectedProject} />
              </Reveal>
            ))}
          </div>
        </div>

        <Modal
          open={Boolean(selectedProject)}
          title={selectedProject?.title ?? ''}
          subtitle={selectedProject?.summary}
          onClose={() => setSelectedProject(null)}
        >
          {selectedProject ? <ProjectDetailsPanel project={selectedProject} /> : null}
        </Modal>
      </section>
    </>
  );
}
