export type NavItem = {
  label: string;
  href: string;
  kind: 'anchor' | 'route' | 'external';
};

export type SocialLink = {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'twitter' | 'email' | 'resume';
};

export type PortfolioStat = {
  label: string;
  value: string;
  iconKey: 'rocket' | 'briefcase' | 'graduation' | 'trophy';
};

export type SkillTile = {
  title: string;
  description?: string;
  iconKey: 'react' | 'typescript' | 'javascript' | 'node' | 'python' | 'tailwind' | 'postgres' | 'git';
};

export type ContactDetail = {
  label: string;
  value: string;
  href?: string;
  iconKey: 'email' | 'phone' | 'location';
};

export type SkillGroup = {
  category: string;
  summary: string;
  level: string;
  iconKey: string;
  items: string[];
};

export type ProjectItem = {
  slug: string;
  title: string;
  category: string;
  status: string;
  summary: string;
  problem: string;
  solution: string;
  architecture: string;
  challenge: string;
  lesson: string;
  stack: string[];
  metrics: string[];
  highlights: string[];
  thumbnailVariant: 'market' | 'coach' | 'hospital' | 'quiz';
  links: {
    github?: string;
    live?: string;
  };
};

export type ExperienceItem = {
  org: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
};

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  details: string[];
};

export type CertificationItem = {
  title: string;
  issuer: string;
  status: string;
  link?: string;
};

export type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
  note: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
};

export type HeroMetric = {
  label: string;
  value: string;
  note: string;
};

export type LearningRoadmap = {
  projects: Array<{
    title: string;
    progress: number;
    phase: string;
    summary: string;
    milestones: Array<{
      label: string;
      done: boolean;
    }>;
  }>;
  learningJourney: Array<{
    topic: string;
    status: string;
  }>;
};
