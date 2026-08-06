import { heroTechNames } from '@/data/tech-icons';

export const techLinks = {
  React: 'https://react.dev',
  TypeScript: 'https://www.typescriptlang.org/',
  JavaScript: 'https://developer.mozilla.org/docs/Web/JavaScript',
  'Node.js': 'https://nodejs.org',
  Python: 'https://python.org',
  'Tailwind CSS': 'https://tailwindcss.com',
  PostgreSQL: 'https://postgresql.org',
  Git: 'https://git-scm.com',
  GitHub: 'https://github.com/subhashkrsingh',
} satisfies Record<(typeof heroTechNames)[number], string>;
