import { TechIcon } from '@/components/ui/TechIcon';
import { site, socialLinks } from '@/data/content';
import { footerTechNames } from '@/data/tech-icons';
import { Github, Linkedin, Mail, X } from 'lucide-react';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: X,
  email: Mail,
} as const;

const footerSocialLinks = socialLinks.filter((link) => link.icon !== 'resume');

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-shell pb-6 pt-2">
      <div className="section-content border-t border-border pt-4">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-text-secondary">
              {site.name}
            </p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-text-secondary">
              Built with React + TypeScript.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              {footerTechNames.map((name) => (
                <span
                  key={name}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-[var(--color-card)] text-text-primary transition-transform duration-300 hover:scale-110 hover:border-primary/30 hover:bg-[var(--color-surface)]"
                >
                  <TechIcon name={name} size={20} ariaHidden />
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {footerSocialLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.icon === 'email' ? '_self' : '_blank'}
                  rel="noreferrer"
                  aria-label={link.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-[var(--color-card)] text-text-secondary transition-all duration-300 hover:border-primary/30 hover:bg-[var(--color-surface)] hover:text-text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4 text-xs text-text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.name}. Built using React + TypeScript.
          </p>
          <p>{site.role}</p>
        </div>
      </div>
    </footer>
  );
}
