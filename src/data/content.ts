import type {
  BlogPost,
  CertificationItem,
  EducationItem,
  ExperienceItem,
  HeroMetric,
  NavItem,
  ProjectItem,
  SkillGroup,
  SocialLink,
  TestimonialItem,
} from '@/types/content';

const siteUrl = (import.meta.env.VITE_SITE_URL || 'http://localhost:5173').replace(/\/$/, '');
const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'hello@example.com';
const githubUsername = import.meta.env.VITE_GITHUB_USERNAME || 'subhash-kumar-singh';

export const site = {
  name: 'Subhash Kumar Singh',
  role: 'AI Engineer & Full Stack Developer',
  headline: 'Building AI-Powered Software That Solves Real Problems',
  subheading:
    'AI Engineer specializing in Generative AI, Python, React, RAG, and full stack development.',
  summary:
    'I design and ship production-minded software that blends AI capability with a calm, reliable user experience.',
  siteUrl,
  contactEmail,
  githubUsername,
  resumeUrl: import.meta.env.VITE_RESUME_URL || '/resume.pdf',
  linkedinUrl: import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/your-profile',
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home', kind: 'anchor' },
  { label: 'About', href: '#about', kind: 'anchor' },
  { label: 'Skills', href: '#skills', kind: 'anchor' },
  { label: 'Projects', href: '#projects', kind: 'anchor' },
  { label: 'Roadmap', href: '#roadmap', kind: 'anchor' },
  { label: 'GitHub', href: '#github', kind: 'anchor' },
  { label: 'Blog', href: '/blog', kind: 'route' },
  { label: 'Contact', href: '#contact', kind: 'anchor' },
];

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: `https://github.com/${githubUsername}`,
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: site.linkedinUrl,
    icon: 'linkedin',
  },
  {
    label: 'Email',
    href: `mailto:${contactEmail}`,
    icon: 'email',
  },
  {
    label: 'Resume',
    href: site.resumeUrl,
    icon: 'resume',
  },
];

export const heroMetrics: HeroMetric[] = [
  {
    label: 'Production mindset',
    value: 'Systems first',
    note: 'Clean architecture, careful UI decisions, and maintainable delivery.',
  },
  {
    label: 'AI focus',
    value: 'LLM ready',
    note: 'Generative AI, RAG, prompt design, embeddings, and agent workflows.',
  },
  {
    label: 'Delivery style',
    value: 'Polished shipping',
    note: 'Responsive interfaces, accessible interactions, and performance awareness.',
  },
];

export const heroTech = ['Python', 'React', 'OpenAI', 'GitHub', 'Node.js', 'PostgreSQL'];

export const aboutTimeline = [
  {
    title: 'Current direction',
    body:
      'I build production-ready AI products and full stack systems that solve business problems, not just technical demos.',
  },
  {
    title: 'Working style',
    body:
      'I care about structure, clarity, and repeatability. Every feature should feel deliberate, testable, and easy to extend.',
  },
  {
    title: 'What I want next',
    body:
      'A role where I can combine product thinking, AI workflows, and dependable engineering to ship meaningful software.',
  },
];

export const skills: SkillGroup[] = [
  {
    category: 'Programming',
    summary: 'Core languages I use to design systems, write automation, and ship products.',
    level: 'Advanced',
    iconKey: 'code',
    items: ['Python', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Frontend',
    summary: 'Interfaces that stay fast, readable, and accessible across devices.',
    level: 'Advanced',
    iconKey: 'monitor',
    items: ['React', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    category: 'Backend',
    summary: 'APIs and server logic with a focus on reliable data flow and clean boundaries.',
    level: 'Strong',
    iconKey: 'server',
    items: ['Node.js', 'Express', 'REST APIs'],
  },
  {
    category: 'Databases',
    summary: 'Structured persistence and query design for transactional and analytics workloads.',
    level: 'Strong',
    iconKey: 'database',
    items: ['PostgreSQL', 'MySQL'],
  },
  {
    category: 'AI',
    summary: 'Practical foundations for building intelligent product features and workflows.',
    level: 'Growing',
    iconKey: 'brain',
    items: [
      'Generative AI',
      'Prompt Engineering',
      'RAG',
      'Embeddings',
      'Vector Search',
      'LLM Fundamentals',
    ],
  },
  {
    category: 'Tools',
    summary: 'The everyday tooling that keeps work organized, testable, and reproducible.',
    level: 'Reliable',
    iconKey: 'tool',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'SAP'],
  },
  {
    category: 'Future',
    summary: 'The next layer of capability I am actively building toward.',
    level: 'Exploring',
    iconKey: 'spark',
    items: ['LangChain', 'LangGraph', 'MCP', 'AI Agents', 'Fine-Tuning'],
  },
];

export const projects: ProjectItem[] = [
  {
    slug: 'energixchange',
    title: 'EnergiXchange',
    category: 'Professional Dashboard',
    status: 'Featured',
    summary:
      'A live market analytics dashboard designed to make fast scanning, comparison, and decision-making feel calm and intentional.',
    problem:
      'Financial and market data becomes hard to interpret when the interface is noisy, slow, or too dense for mobile screens.',
    solution:
      'Built a responsive analytics experience with interactive charts, cache-aware refresh logic, and a layout tuned for quick reading.',
    architecture:
      'API data layer -> cached requests -> chart widgets -> comparative panels -> mobile-friendly summary cards.',
    challenge:
      'Balancing information density with clarity while keeping the dashboard readable across breakpoints.',
    lesson:
      'Data-heavy products feel better when the visual hierarchy is strict and every interaction has a job.',
    stack: ['React', 'TypeScript', 'Chart UI', 'API Integration', 'Responsive Design', 'Caching'],
    metrics: [
      'Interactive chart surface for rapid scanability',
      'Repeated requests designed to reuse cached results',
      'Layout optimized for desktop and compact mobile dashboards',
    ],
    highlights: ['Live market analytics', 'Responsive cards', 'Interactive charts', 'Caching strategy'],
    thumbnailVariant: 'market',
    links: {
      github: `https://github.com/${githubUsername}`,
      live: siteUrl,
    },
  },
  {
    slug: 'ai-fitness-coach',
    title: 'AI Fitness Coach',
    category: 'Currently Building',
    status: '65% Complete',
    summary:
      'An AI-powered health assistant for BMI, calories, protein, meal guidance, workout planning, and future voice interaction.',
    problem:
      'Health apps often split planning, guidance, and tracking into disconnected screens that do not adapt to user goals.',
    solution:
      'Designing a single coach-style experience that turns inputs into recommendations, reminders, and a simple conversational flow.',
    architecture:
      'User profile -> nutrition and workout rules -> recommendation engine -> conversational assistant -> future wearable inputs.',
    challenge:
      'Keeping the product helpful without making the experience feel clinical or overwhelming.',
    lesson:
      'AI features are more useful when the interaction model stays focused on one clear outcome.',
    stack: ['React', 'TypeScript', 'AI Recommendations', 'Health Tracking', 'Voice Ready', 'Roadmap Driven'],
    metrics: [
      'Roadmap tracked from a structured JSON source',
      'Inputs scoped for BMI, calories, protein, meals, and workouts',
      'Voice and vision layers planned without cluttering the core UI',
    ],
    highlights: ['BMI tracking', 'Meal planning', 'Workout suggestions', 'Voice assistant'],
    thumbnailVariant: 'coach',
    links: {
      github: `https://github.com/${githubUsername}`,
      live: siteUrl,
    },
  },
  {
    slug: 'hospital-ipd-management-system',
    title: 'Hospital IPD Management System',
    category: 'Patient Management',
    status: 'Enterprise Flow',
    summary:
      'A structured management concept for admissions, billing, doctor coordination, reports, and secure administrative workflows.',
    problem:
      'Hospital operations need clear navigation, permission boundaries, and efficient status tracking to reduce manual overhead.',
    solution:
      'Created an interface model for patient records, doctor queues, billing, and reports with authenticated admin access.',
    architecture:
      'Authentication layer -> role-based screens -> patient records -> billing workflow -> reporting and audit-ready views.',
    challenge:
      'Designing a trustworthy interface for operational teams that have limited time and high accuracy needs.',
    lesson:
      'Enterprise software succeeds when the UI lowers cognitive load and exposes the right information at the right time.',
    stack: ['React', 'TypeScript', 'Authentication', 'Reporting', 'Admin UI', 'Database Ready'],
    metrics: [
      'Distinct screens for patient, billing, and reports',
      'Admin-first structure with explicit role boundaries',
      'Layout designed for operational speed and clarity',
    ],
    highlights: ['Patient management', 'Billing', 'Doctors', 'Reports', 'Admin'],
    thumbnailVariant: 'hospital',
    links: {
      github: `https://github.com/${githubUsername}`,
      live: siteUrl,
    },
  },
  {
    slug: 'kbc-quiz-platform',
    title: 'KBC Quiz Platform',
    category: 'Game Engine',
    status: 'Featured',
    summary:
      'A polished quiz platform with lifelines, leaderboard flow, replay support, and a responsive interface built like a product.',
    problem:
      'Quiz experiences often feel playful but under-engineered, which hurts retention and replayability.',
    solution:
      'Designed a game loop with clean states, responsive answer flow, and visual feedback that supports focus and momentum.',
    architecture:
      'Question engine -> score state -> lifelines -> leaderboard -> replay flow -> results summary.',
    challenge:
      'Keeping the UI crisp while making the gameplay feel dynamic and easy to understand quickly.',
    lesson:
      'Even small interactive products benefit from careful state modeling and a clear progression system.',
    stack: ['React', 'TypeScript', 'State Management', 'Leaderboard', 'Replay System', 'Responsive UI'],
    metrics: [
      'State-driven quiz flow',
      'Support for lifelines and replay',
      'Product-style visual hierarchy for a focused gameplay loop',
    ],
    highlights: ['Lifelines', 'Leaderboard', 'Replay system', 'Professional UI'],
    thumbnailVariant: 'quiz',
    links: {
      github: `https://github.com/${githubUsername}`,
      live: siteUrl,
    },
  },
];

export const experience: ExperienceItem[] = [
  {
    org: 'NTPC Limited',
    role: 'Apprentice',
    period: 'Apprenticeship',
    location: 'India',
    bullets: [
      'Supported documentation and office automation workflows.',
      'Worked with digital processes that required clear communication and dependable follow-through.',
      'Gained exposure to SAP-oriented environments and cross-team collaboration.',
      'Strengthened problem-solving habits through structured operational work.',
    ],
  },
];

export const education: EducationItem[] = [
  {
    school: 'STET Computer Science',
    degree: 'B.Tech, Computer Science',
    period: 'Academic foundation',
    details: ['Core computer science training', 'Engineering problem solving', 'Systems thinking'],
  },
  {
    school: 'Professional Courses',
    degree: 'Generative AI, Python',
    period: 'Ongoing learning',
    details: ['Prompt engineering', 'AI fundamentals', 'Practical Python application'],
  },
];

export const certifications: CertificationItem[] = [
  {
    title: 'Generative AI Foundations',
    issuer: 'Verification link pending',
    status: 'Ready to add',
  },
  {
    title: 'Python for Professional Workflows',
    issuer: 'Verification link pending',
    status: 'Ready to add',
  },
  {
    title: 'Full Stack Engineering Practice',
    issuer: 'Verification link pending',
    status: 'Ready to add',
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote:
      'This section is intentionally ready for future recommendations, client notes, or manager feedback.',
    name: 'Placeholder',
    role: 'Testimonial slot',
    note: 'Drop in a real quote when available.',
  },
  {
    quote:
      'The architecture is ready for short-form endorsements without requiring a redesign later.',
    name: 'Placeholder',
    role: 'Testimonial slot',
    note: 'Optimized for future expansion.',
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'designing-rag-systems-that-stay-useful-in-production',
    title: 'Designing RAG Systems That Stay Useful in Production',
    excerpt:
      'A practical view of how retrieval, ranking, prompt context, and interface design work together in real AI products.',
    date: '2026-07-01',
    readTime: '6 min read',
    category: 'RAG',
    content: `# Designing RAG Systems That Stay Useful in Production

Retrieval Augmented Generation is only useful when the pipeline is reliable enough for actual users. A demo can hide a lot of flaws. Production traffic cannot.

## What matters most

1. Retrieval quality
2. Context size discipline
3. Response grounding
4. Fast fallback behavior

The best systems do not over-serve context. They serve the right context.

## A simple mental model

    const context = retrieve(query);
    const prompt = composePrompt(context, userIntent);
    const answer = generate(prompt);

The hard part is not the code above. The hard part is deciding what belongs in context, how to score it, and when to refuse an answer.

## Product advice

- Let the interface show confidence signals.
- Keep source citations visible.
- Keep failure states graceful.
- Measure answer usefulness, not just token count.

RAG becomes valuable when the product respects the user's time.`,
  },
  {
    slug: 'prompt-engineering-is-product-engineering',
    title: 'Prompt Engineering Is Product Engineering',
    excerpt:
      'Why prompt design should be treated as part of the product system, not a one-off prompt string hidden in code.',
    date: '2026-06-18',
    readTime: '5 min read',
    category: 'Prompting',
    content: `# Prompt Engineering Is Product Engineering

The prompt is part of the interface. It shapes reliability, tone, and user trust.

## Good prompts do three things

- Set the task clearly
- Constrain the output format
- Tell the model what to do when information is missing

When prompts are treated like throwaway strings, the product becomes hard to debug.

## What to version

| Item | Why it matters |
| --- | --- |
| System prompt | Core behavior |
| Tool schema | Integration contract |
| Output format | UI stability |
| Guardrails | Safety and consistency |

## The engineering view

Prompt changes should be reviewed like code changes. They affect behavior, quality, and downstream components.

That is why I treat prompt work as a real engineering discipline rather than an improvisation layer.`,
  },
  {
    slug: 'how-to-think-about-ai-features-in-full-stack-apps',
    title: 'How I Think About AI Features in Full Stack Apps',
    excerpt:
      'A framework for deciding where AI belongs in a product and how to avoid shipping expensive complexity without value.',
    date: '2026-05-29',
    readTime: '7 min read',
    category: 'AI Engineering',
    content: `# How I Think About AI Features in Full Stack Apps

An AI feature should earn its place in the product. If it does not make the product clearer, faster, or more useful, it is probably not ready.

## My checklist

1. Can the feature be explained in one sentence?
2. Can the user recover from a bad output?
3. Does the UI make the result easy to inspect?
4. Do we have a fallback when the model fails?

## Practical architecture

Use the UI to collect intent, the backend to enforce boundaries, and the model only where probabilistic reasoning adds value.

    type Intent = {
      goal: string;
      constraints: string[];
    };

    // Clear inputs create better outputs.

## The habit I try to keep

I keep asking: "What is the product promise, and how does this AI step help fulfill it?"

That question keeps features useful instead of merely impressive.`,
  },
];

export const heroSections = {
  introduction:
    'Visitors should immediately understand that this portfolio is a product, not a template.',
  subcopy:
    'The design language leans premium, technical, and minimal so the engineering story stays front and center.',
};
