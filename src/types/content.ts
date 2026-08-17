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

export type ProjectLifecycle = 'live' | 'in-development' | 'research' | 'archived';

export type ProjectAction = {
  label: string;
  kind: 'link' | 'toggle';
  href?: string;
  targetId?: string;
  target?: '_blank' | '_self';
  rel?: string;
};

export type ProjectShortcut = {
  label: string;
  href: string;
};

export type ProjectPreviewMetric = {
  label: string;
  value: string;
  tone?: 'primary' | 'secondary' | 'success' | 'warning';
};

export type ProjectScreenshot = {
  src: string;
  title: string;
  category: string;
  alt: string;
};

export type ProjectCaseStudySection = {
  id: string;
  title: string;
  body: string;
  bullets?: string[];
  visual?: 'text' | 'flow' | 'gallery';
};

export type ProjectLiveStatus = {
  sourceUrl: string;
  apiStatus: string;
  lastUpdated: string;
  latestMarketRefresh: string;
  cached: string;
  responseTime: string;
  symbolCount: string;
};

export type ProjectPreview = {
  eyebrow: string;
  headline: string;
  subheadline: string;
  metrics: ProjectPreviewMetric[];
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
  projectType: string;
  lifecycle: ProjectLifecycle;
  featured?: boolean;
  summary: string;
  preview: ProjectPreview;
  caseStudy: ProjectCaseStudySection[];
  architectureSteps: string[];
  stack: string[];
  highlights: string[];
  thumbnailVariant: 'market' | 'coach' | 'hospital' | 'quiz';
  screenshots?: ProjectScreenshot[];
  liveStatus?: ProjectLiveStatus;
  actions: ProjectAction[];
  shortcuts: ProjectShortcut[];
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
