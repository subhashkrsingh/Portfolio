import type { CSSProperties } from 'react';
import type { IconType } from 'react-icons';
import type { SkillGroup } from '@/types/content';
import {
  SiCss,
  SiDocker,
  SiDotnet,
  SiExpress,
  SiGit,
  SiGithub,
  SiJavascript,
  SiLangchain,
  SiNodedotjs,
  SiOpenaigym,
  SiPostman,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiSharp,
  SiSqlite,
  SiReact,
  SiVscodium,
  SiTailwindcss,
  SiTypescript,
  SiHtml5,
} from 'react-icons/si';

type TechCategory = 'Frontend' | 'Backend' | 'Database & ORM' | 'AI & Generative AI' | 'Tools & DevOps';

type TechGlyph = {
  icon: IconType;
  color: string;
  glow: string;
};

export type TechIconDefinition = {
  label: string;
  category: TechCategory;
  brandColor: string;
  url: string;
  glyphs: TechGlyph[];
  aliases: string[];
};

const techCatalog = [
  {
    label: 'React',
    category: 'Frontend',
    brandColor: '#61DAFB',
    url: 'https://react.dev',
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
    category: 'Frontend',
    brandColor: '#3178C6',
    url: 'https://www.typescriptlang.org/',
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
    category: 'Frontend',
    brandColor: '#F7DF1E',
    url: 'https://developer.mozilla.org/docs/Web/JavaScript',
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
    label: 'HTML5',
    category: 'Frontend',
    brandColor: '#E34F26',
    url: 'https://developer.mozilla.org/docs/Web/HTML',
    glyphs: [
      {
        icon: SiHtml5,
        color: '#E34F26',
        glow: 'rgba(227, 79, 38, 0.4)',
      },
    ],
    aliases: ['html', 'html5'],
  },
  {
    label: 'CSS3',
    category: 'Frontend',
    brandColor: '#1572B6',
    url: 'https://developer.mozilla.org/docs/Web/CSS',
    glyphs: [
      {
        icon: SiCss,
        color: '#1572B6',
        glow: 'rgba(21, 114, 182, 0.4)',
      },
    ],
    aliases: ['css', 'css3'],
  },
  {
    label: 'Tailwind CSS',
    category: 'Frontend',
    brandColor: '#06B6D4',
    url: 'https://tailwindcss.com',
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
    label: 'Node.js',
    category: 'Backend',
    brandColor: '#339933',
    url: 'https://nodejs.org',
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
    label: 'Express.js',
    category: 'Backend',
    brandColor: '#000000',
    url: 'https://expressjs.com',
    glyphs: [
      {
        icon: SiExpress,
        color: '#ffffff',
        glow: 'rgba(255, 255, 255, 0.18)',
      },
    ],
    aliases: ['express', 'expressjs'],
  },
  {
    label: 'C#',
    category: 'Backend',
    brandColor: '#68217A',
    url: 'https://learn.microsoft.com/dotnet/csharp/',
    glyphs: [
      {
        icon: SiSharp,
        color: '#68217A',
        glow: 'rgba(104, 33, 122, 0.4)',
      },
    ],
    aliases: ['csharp', 'c#'],
  },
  {
    label: 'ASP.NET Core',
    category: 'Backend',
    brandColor: '#512BD4',
    url: 'https://learn.microsoft.com/aspnet/core/',
    glyphs: [
      {
        icon: SiDotnet,
        color: '#512BD4',
        glow: 'rgba(81, 43, 212, 0.4)',
      },
    ],
    aliases: ['aspnetcore', 'asp.net core', 'asp.net'],
  },
  {
    label: 'PostgreSQL',
    category: 'Database & ORM',
    brandColor: '#4169E1',
    url: 'https://postgresql.org',
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
    label: 'SQL Server',
    category: 'Database & ORM',
    brandColor: '#CC2927',
    url: 'https://learn.microsoft.com/sql/sql-server/',
    glyphs: [
      {
        icon: SiSqlite,
        color: '#CC2927',
        glow: 'rgba(204, 41, 39, 0.35)',
      },
    ],
    aliases: ['sql server', 'mssql', 'sqlserver'],
  },
  {
    label: 'Prisma ORM',
    category: 'Database & ORM',
    brandColor: '#2D3748',
    url: 'https://www.prisma.io/',
    glyphs: [
      {
        icon: SiPrisma,
        color: '#2D3748',
        glow: 'rgba(45, 55, 72, 0.35)',
      },
    ],
    aliases: ['prisma', 'prisma orm'],
  },
  {
    label: 'Python',
    category: 'AI & Generative AI',
    brandColor: '#3776AB',
    url: 'https://python.org',
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
    label: 'Generative AI',
    category: 'AI & Generative AI',
    brandColor: '#10A37F',
    url: 'https://platform.openai.com/docs',
    glyphs: [
      {
        icon: SiOpenaigym,
        color: '#10A37F',
        glow: 'rgba(16, 163, 127, 0.35)',
      },
    ],
    aliases: ['generative ai', 'gen ai', 'genai'],
  },
  {
    label: 'Prompt Engineering',
    category: 'AI & Generative AI',
    brandColor: '#10A37F',
    url: 'https://platform.openai.com/docs/guides/prompt-engineering',
    glyphs: [
      {
        icon: SiOpenaigym,
        color: '#10A37F',
        glow: 'rgba(16, 163, 127, 0.35)',
      },
    ],
    aliases: ['prompt engineering', 'prompting'],
  },
  {
    label: 'LLMs',
    category: 'AI & Generative AI',
    brandColor: '#10A37F',
    url: 'https://platform.openai.com/docs',
    glyphs: [
      {
        icon: SiOpenaigym,
        color: '#10A37F',
        glow: 'rgba(16, 163, 127, 0.35)',
      },
    ],
    aliases: ['llms', 'large language models'],
  },
  {
    label: 'RAG',
    category: 'AI & Generative AI',
    brandColor: '#10A37F',
    url: 'https://platform.openai.com/docs/guides/retrieval',
    glyphs: [
      {
        icon: SiLangchain,
        color: '#1C3C3C',
        glow: 'rgba(28, 60, 60, 0.35)',
      },
    ],
    aliases: ['rag', 'retrieval augmented generation'],
  },
  {
    label: 'OpenAI API',
    category: 'AI & Generative AI',
    brandColor: '#10A37F',
    url: 'https://platform.openai.com/',
    glyphs: [
      {
        icon: SiOpenaigym,
        color: '#10A37F',
        glow: 'rgba(16, 163, 127, 0.35)',
      },
    ],
    aliases: ['openai', 'openai api'],
  },
  {
    label: 'LangChain',
    category: 'AI & Generative AI',
    brandColor: '#1C3C3C',
    url: 'https://www.langchain.com/',
    glyphs: [
      {
        icon: SiLangchain,
        color: '#1C3C3C',
        glow: 'rgba(28, 60, 60, 0.35)',
      },
    ],
    aliases: ['langchain'],
  },
  {
    label: 'Embeddings',
    category: 'AI & Generative AI',
    brandColor: '#10A37F',
    url: 'https://platform.openai.com/docs/guides/embeddings',
    glyphs: [
      {
        icon: SiOpenaigym,
        color: '#10A37F',
        glow: 'rgba(16, 163, 127, 0.35)',
      },
    ],
    aliases: ['embeddings'],
  },
  {
    label: 'Vector Databases (Basic)',
    category: 'AI & Generative AI',
    brandColor: '#4F46E5',
    url: 'https://www.pinecone.io/learn/vector-database/',
    glyphs: [
      {
        icon: SiOpenaigym,
        color: '#4F46E5',
        glow: 'rgba(79, 70, 229, 0.32)',
      },
    ],
    aliases: ['vector databases', 'vector database', 'vector search'],
  },
  {
    label: 'AI Model Evaluation',
    category: 'AI & Generative AI',
    brandColor: '#10A37F',
    url: 'https://platform.openai.com/docs/guides/evals',
    glyphs: [
      {
        icon: SiOpenaigym,
        color: '#10A37F',
        glow: 'rgba(16, 163, 127, 0.35)',
      },
    ],
    aliases: ['ai model evaluation', 'evals', 'model evaluation'],
  },
  {
    label: 'Git',
    category: 'Tools & DevOps',
    brandColor: '#F05032',
    url: 'https://git-scm.com',
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
    category: 'Tools & DevOps',
    brandColor: 'var(--tech-github-color)',
    url: 'https://github.com/subhashkrsingh',
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
    label: 'Docker',
    category: 'Tools & DevOps',
    brandColor: '#2496ED',
    url: 'https://www.docker.com/',
    glyphs: [
      {
        icon: SiDocker,
        color: '#2496ED',
        glow: 'rgba(36, 150, 237, 0.35)',
      },
    ],
    aliases: ['docker'],
  },
  {
    label: 'Postman',
    category: 'Tools & DevOps',
    brandColor: '#FF6C37',
    url: 'https://www.postman.com/',
    glyphs: [
      {
        icon: SiPostman,
        color: '#FF6C37',
        glow: 'rgba(255, 108, 55, 0.35)',
      },
    ],
    aliases: ['postman'],
  },
  {
    label: 'VS Code',
    category: 'Tools & DevOps',
    brandColor: '#007ACC',
    url: 'https://code.visualstudio.com/',
    glyphs: [
      {
        icon: SiVscodium,
        color: '#007ACC',
        glow: 'rgba(0, 122, 204, 0.35)',
      },
    ],
    aliases: ['vs code', 'vscode', 'visual studio code'],
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

export function getTechUrl(name: string): string | null {
  return getTechIconDefinition(name)?.url ?? null;
}

export const techSkillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    summary: 'Modern interfaces and responsive UI work.',
    level: 'Advanced',
    iconKey: 'React',
    items: techCatalog
      .filter((entry) => entry.category === 'Frontend')
      .map((entry) => entry.label),
  },
  {
    category: 'Backend',
    summary: 'APIs, server logic, and application boundaries.',
    level: 'Strong',
    iconKey: 'Node.js',
    items: techCatalog
      .filter((entry) => entry.category === 'Backend')
      .map((entry) => entry.label),
  },
  {
    category: 'Database & ORM',
    summary: 'Data persistence, querying, and schema design.',
    level: 'Strong',
    iconKey: 'PostgreSQL',
    items: techCatalog
      .filter((entry) => entry.category === 'Database & ORM')
      .map((entry) => entry.label),
  },
  {
    category: 'AI & Generative AI',
    summary: 'LLM workflows, retrieval, prompting, and evaluation.',
    level: 'Growing',
    iconKey: 'Python',
    items: techCatalog
      .filter((entry) => entry.category === 'AI & Generative AI')
      .map((entry) => entry.label),
  },
  {
    category: 'Tools & DevOps',
    summary: 'Version control, tooling, and delivery workflow.',
    level: 'Reliable',
    iconKey: 'Git',
    items: techCatalog
      .filter((entry) => entry.category === 'Tools & DevOps')
      .map((entry) => entry.label),
  },
];

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
