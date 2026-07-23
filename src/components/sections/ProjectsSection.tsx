import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Modal } from '@/components/ui/Modal';
import { projects } from '@/data/content';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { ProjectDetailsPanel } from '@/components/cards/ProjectDetailsPanel';
import { useState } from 'react';
import type { ProjectItem } from '@/types/content';
import { ArrowRight } from 'lucide-react';

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="section-shell section-padding scroll-mt-32">
      <div className="section-content">
        <Reveal>
          <SectionHeading
            eyebrow="Featured Projects"
            title="Built like product case studies"
            description="Three selected builds that show product thinking, AI capability, and production-minded execution."
            action={
              <Button href="/projects" variant="outline">
                View all projects
                <ArrowRight className="h-4 w-4" />
              </Button>
            }
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
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
  );
}
