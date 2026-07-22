import { socialLinks, site } from '@/data/content';
import { CalendarDays, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  resume: CalendarDays,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-shell pb-10 pt-4">
      <div className="section-content border-t border-white/10 pt-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-text-secondary">
              <Sparkles className="h-3.5 w-3.5" />
              Minimal. Technical. Premium.
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-white">
              Built using React, TypeScript, and a production-minded design system.
            </h2>
            <p className="mt-3 text-sm leading-7 text-text-secondary">
              {site.name} | {site.role} | {year}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.icon === 'email' ? '_self' : '_blank'}
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-text-secondary transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>Built with care for recruiters, founders, and technical interviewers.</p>
          <Link to="/blog" className="font-medium text-white hover:text-blue-200">
            View blog articles
          </Link>
        </div>
      </div>
    </footer>
  );
}
