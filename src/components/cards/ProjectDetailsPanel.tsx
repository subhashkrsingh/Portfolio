import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import type { ProjectItem } from '@/types/content';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

type ProjectDetailsPanelProps = {
  project: ProjectItem;
};

export function ProjectDetailsPanel({ project }: ProjectDetailsPanelProps) {
  const detailCards = [
    { title: 'Problem', body: project.problem },
    { title: 'Solution', body: project.solution },
    { title: 'Architecture', body: project.architecture },
    { title: 'Challenge', body: project.challenge },
    { title: 'Lesson learned', body: project.lesson },
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
      <div className="grid gap-4">
        <div className="glass-card p-5">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{project.category}</Badge>
            <Badge variant="outline">{project.status}</Badge>
          </div>

          <p className="mt-5 text-xs font-medium uppercase tracking-[0.28em] text-text-secondary">
            Technology stack
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <Badge key={item} variant="outline">
                {item}
              </Badge>
            ))}
          </div>
        </div>

        <div className="glass-card p-5">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-text-secondary">
            Performance signals
          </p>
          <ul className="mt-4 grid gap-3 text-sm leading-7 text-text-secondary">
            {project.metrics.map((metric) => (
              <li key={metric} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>{metric}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-3">
          {project.links.github ? (
            <Button href={project.links.github} variant="outline" target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" />
              GitHub
            </Button>
          ) : null}
          {project.links.live ? (
            <Button href={project.links.live} variant="primary" target="_blank" rel="noreferrer">
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </Button>
          ) : null}
        </div>
      </div>

      <div className="grid gap-4">
        {detailCards.map((card) => (
          <motion.div
            key={card.title}
            className="glass-card p-5"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.18 }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-text-secondary">
              {card.title}
            </p>
            <p className="mt-3 text-sm leading-7 text-text-secondary">{card.body}</p>
          </motion.div>
        ))}

        <div className="glass-card p-5">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-text-secondary">
            Key takeaways
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {project.highlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
