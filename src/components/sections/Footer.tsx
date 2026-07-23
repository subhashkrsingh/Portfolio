import { socialLinks, site } from '@/data/content';
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
    <footer className="section-shell pb-8 pt-4">
      <div className="section-content border-t border-white/10 pt-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-text-secondary">
              {site.name}
            </p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-text-secondary">
              Built with React + TypeScript. Designed to feel like a product, not a template.
            </p>
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
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-text-secondary transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. Built using React + TypeScript.
          </p>
          <p>{site.role}</p>
        </div>
      </div>
    </footer>
  );
}
