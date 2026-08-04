import type { CSSProperties } from 'react';
import type { IconType } from 'react-icons';
import {
  SiGit,
  SiGithub,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

type TechGlyph = {
  icon: IconType;
  color: string;
  glow: string;
};

export type TechIconDefinition = {
  label: string;
  glyphs: TechGlyph[];
  aliases: string[];
};

const techCatalog = [
  {
    label: 'React',
    glyphs: [
      {
        icon: SiReact,
        color: '#61DAFB',
        glow: 'rgba(97, 218, 251, 0.45)',
      },
    ],
    aliases: ['react', 'reactjs'],
  },
  {
    label: 'TypeScript',
    glyphs: [
      {
        icon: SiTypescript,
        color: '#3178C6',
        glow: 'rgba(49, 120, 198, 0.45)',
      },
    ],
    aliases: ['typescript', 'ts'],
  },
  {
    label: 'JavaScript',
    glyphs: [
      {
        icon: SiJavascript,
        color: '#F7DF1E',
        glow: 'rgba(247, 223, 30, 0.4)',
      },
    ],
    aliases: ['javascript', 'js'],
  },
  {
    label: 'Node.js',
    glyphs: [
      {
        icon: SiNodedotjs,
        color: '#339933',
        glow: 'rgba(51, 153, 51, 0.45)',
      },
    ],
    aliases: ['node', 'node.js', 'nodejs'],
  },
  {
    label: 'Python',
    glyphs: [
      {
        icon: SiPython,
        color: '#3776AB',
        glow: 'rgba(55, 118, 171, 0.45)',
      },
    ],
    aliases: ['python', 'py'],
  },
  {
    label: 'Tailwind CSS',
    glyphs: [
      {
        icon: SiTailwindcss,
        color: '#06B6D4',
        glow: 'rgba(6, 182, 212, 0.45)',
      },
    ],
    aliases: ['tailwind', 'tailwind css', 'tailwindcss'],
  },
  {
    label: 'PostgreSQL',
    glyphs: [
      {
        icon: SiPostgresql,
        color: '#4169E1',
        glow: 'rgba(65, 105, 225, 0.45)',
      },
    ],
    aliases: ['postgres', 'postgresql', 'postgresql db'],
  },
  {
    label: 'Git',
    glyphs: [
      {
        icon: SiGit,
        color: '#F05032',
        glow: 'rgba(240, 80, 50, 0.45)',
      },
    ],
    aliases: ['git', 'git version control'],
  },
  {
    label: 'GitHub',
    glyphs: [
      {
        icon: SiGithub,
        color: 'var(--tech-github-color)',
        glow: 'var(--tech-github-glow)',
      },
    ],
    aliases: ['github', 'git hub'],
  },
  {
    label: 'Git & GitHub',
    glyphs: [
      {
        icon: SiGit,
        color: '#F05032',
        glow: 'rgba(240, 80, 50, 0.45)',
      },
      {
        icon: SiGithub,
        color: 'var(--tech-github-color)',
        glow: 'var(--tech-github-glow)',
      },
    ],
    aliases: ['git & github', 'git and github', 'gitgithub', 'gitandgithub'],
  },
] satisfies readonly TechIconDefinition[];

const normalizeTechName = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '');

const techLookup = new Map<string, TechIconDefinition>();

for (const entry of techCatalog) {
  techLookup.set(normalizeTechName(entry.label), entry);

  for (const alias of entry.aliases) {
    techLookup.set(normalizeTechName(alias), entry);
  }
}

export function getTechIconDefinition(name: string): TechIconDefinition | null {
  return techLookup.get(normalizeTechName(name)) ?? null;
}

export const heroTechNames = [
  'React',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Python',
  'Tailwind CSS',
  'PostgreSQL',
  'Git',
  'GitHub',
] as const;

export const footerTechNames = ['React', 'TypeScript', 'JavaScript', 'Node.js', 'GitHub'] as const;

export type TechIconStyle = CSSProperties & {
  '--tech-glow'?: string;
  '--tech-shadow-blur'?: string;
};
