import type {
  ContactDetail,
  BlogPost,
  CertificationItem,
  EducationItem,
  ExperienceItem,
  HeroMetric,
  NavItem,
  ProjectItem,
  ProjectScreenshot,
  PortfolioStat,
  SkillTile,
  SkillGroup,
  SocialLink,
  TestimonialItem,
} from '@/types/content';

const siteUrl = (import.meta.env.VITE_SITE_URL || 'http://localhost:5173').replace(/\/$/, '');
const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'subhashkr2026singh@gmail.com';
const githubUsername = import.meta.env.VITE_GITHUB_USERNAME || 'subhashkrsingh';
const gmailComposeUrl = (email: string) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

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
  twitterUrl: import.meta.env.VITE_TWITTER_URL || 'https://x.com/',
  resumeUrl: import.meta.env.VITE_RESUME_URL || '/resume.pdf',
  linkedinUrl: import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/your-profile',
  phone: import.meta.env.VITE_PHONE_NUMBER || 'Available on request',
  location: import.meta.env.VITE_LOCATION || 'India',
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home', kind: 'anchor' },
  { label: 'About', href: '#about', kind: 'anchor' },
  { label: 'Skills', href: '#skills', kind: 'anchor' },
  { label: 'Projects', href: '#projects', kind: 'anchor' },
  { label: 'Experience', href: '#experience', kind: 'anchor' },
  { label: 'Resume', href: site.resumeUrl, kind: 'external' },
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
    label: 'Twitter',
    href: site.twitterUrl,
    icon: 'twitter',
  },
  {
    label: 'Email',
    href: gmailComposeUrl(contactEmail),
    icon: 'email',
  },
  {
    label: 'Resume',
    href: site.resumeUrl,
    icon: 'resume',
  },
];

export const portfolioStats: PortfolioStat[] = [
  {
    label: 'Projects Completed',
    value: '15+',
    iconKey: 'rocket',
  },
  {
    label: 'Experience',
    value: '1+ Years',
    iconKey: 'briefcase',
  },
  {
    label: 'Technologies',
    value: '20+',
    iconKey: 'graduation',
  },
  {
    label: 'Problems Solved',
    value: '300+',
    iconKey: 'trophy',
  },
];

export const aboutHighlights = [
  'AI & Machine Learning',
  'Clean Code',
  'Problem Solver',
  'Lifelong Learner',
];

export const contactDetails: ContactDetail[] = [
  {
    label: 'Email',
    value: contactEmail,
    href: gmailComposeUrl(contactEmail),
    iconKey: 'email',
  },
  {
    label: 'Phone',
    value: site.phone,
    iconKey: 'phone',
  },
  {
    label: 'Location',
    value: site.location,
    iconKey: 'location',
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

export const heroTech = ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Python', 'Tailwind CSS', 'PostgreSQL', 'Git', 'GitHub'];

const energixchangeScreenshots: ProjectScreenshot[] = [
  {
    src: '/Projects/EnergiXchange/01_Energy_Dashboard_Hero.webp',
    title: 'Energy Dashboard',
    category: 'Energy',
    alt: 'EnergiXchange Energy Dashboard hero screenshot',
  },
  {
    src: '/Projects/EnergiXchange/02_Energy_Insights.webp',
    title: 'Energy Insights',
    category: 'Energy',
    alt: 'EnergiXchange Energy Insights screenshot',
  },
  {
    src: '/Projects/EnergiXchange/03_Energy_Stocks_Table.webp',
    title: 'Energy Stocks Table',
    category: 'Energy',
    alt: 'EnergiXchange Energy Stocks Table screenshot',
  },
  {
    src: '/Projects/EnergiXchange/04_Oil_Gas_Dashboard.webp',
    title: 'Oil & Gas Dashboard',
    category: 'Oil & Gas',
    alt: 'EnergiXchange Oil and Gas Dashboard screenshot',
  },
  {
    src: '/Projects/EnergiXchange/05_Oil_Gas_Intraday.webp',
    title: 'Oil & Gas Intraday',
    category: 'Oil & Gas',
    alt: 'EnergiXchange Oil and Gas Intraday screenshot',
  },
  {
    src: '/Projects/EnergiXchange/06_Oil_Gas_Performance.webp',
    title: 'Oil & Gas Performance',
    category: 'Oil & Gas',
    alt: 'EnergiXchange Oil and Gas Performance screenshot',
  },
  {
    src: '/Projects/EnergiXchange/07_Oil_Gas_Insights.webp',
    title: 'Oil & Gas Insights',
    category: 'Oil & Gas',
    alt: 'EnergiXchange Oil and Gas Insights screenshot',
  },
  {
    src: '/Projects/EnergiXchange/08_Oil_Gas_Stocks_Table.webp',
    title: 'Oil & Gas Stocks Table',
    category: 'Oil & Gas',
    alt: 'EnergiXchange Oil and Gas Stocks Table screenshot',
  },
  {
    src: '/Projects/EnergiXchange/09_Real_Estate_Dashboard.webp',
    title: 'Real Estate Dashboard',
    category: 'Real Estate',
    alt: 'EnergiXchange Real Estate Dashboard screenshot',
  },
  {
    src: '/Projects/EnergiXchange/10_Real_Estate_Intraday.webp',
    title: 'Real Estate Intraday',
    category: 'Real Estate',
    alt: 'EnergiXchange Real Estate Intraday screenshot',
  },
  {
    src: '/Projects/EnergiXchange/11_Real_Estate_Performance.webp',
    title: 'Real Estate Performance',
    category: 'Real Estate',
    alt: 'EnergiXchange Real Estate Performance screenshot',
  },
  {
    src: '/Projects/EnergiXchange/12_Real_Estate_Insights.webp',
    title: 'Real Estate Insights',
    category: 'Real Estate',
    alt: 'EnergiXchange Real Estate Insights screenshot',
  },
  {
    src: '/Projects/EnergiXchange/13_Real_Estate_Stocks_Table_A.webp',
    title: 'Real Estate Stocks Table A',
    category: 'Real Estate',
    alt: 'EnergiXchange Real Estate Stocks Table A screenshot',
  },
  {
    src: '/Projects/EnergiXchange/14_Real_Estate_Stocks_Table_B.webp',
    title: 'Real Estate Stocks Table B',
    category: 'Real Estate',
    alt: 'EnergiXchange Real Estate Stocks Table B screenshot',
  },
  {
    src: '/Projects/EnergiXchange/15_Real_Estate_Stocks_Table_C.webp',
    title: 'Real Estate Stocks Table C',
    category: 'Real Estate',
    alt: 'EnergiXchange Real Estate Stocks Table C screenshot',
  },
];

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
    category: 'Market Intelligence',
    projectType: 'AI Engineering Product',
    lifecycle: 'live',
    featured: true,
    summary:
      'A flagship market analytics dashboard that turns noisy financial signals into a calm, scan-friendly product experience.',
    preview: {
      eyebrow: 'Flagship project',
      headline: 'Live market intelligence, distilled',
      subheadline:
        'Production-minded dashboards, cache-aware refreshes, and a layout tuned for fast decision-making.',
      metrics: [
        { label: 'API', value: 'Online', tone: 'success' },
        { label: 'Refresh', value: 'Cached', tone: 'primary' },
        { label: 'Scan', value: 'Low friction', tone: 'secondary' },
      ],
    },
    caseStudy: [
      {
        id: 'energixchange-case-study',
        title: 'Problem',
        body:
          'Market data becomes difficult to trust when the interface is noisy, laggy, or too dense for quick reading.',
        bullets: [
          'Reduce cognitive load for rapid market checks.',
          'Keep the mobile experience useful instead of shrinking the desktop layout.',
          'Make refresh behavior visible so the dashboard feels dependable.',
        ],
      },
      {
        id: 'energixchange-solution',
        title: 'Solution',
        body:
          'Built a responsive analytics surface with clear hierarchy, cache-aware refresh logic, and chart-driven summaries that feel closer to a product launch than a portfolio tile.',
      },
      {
        id: 'energixchange-features',
        title: 'Key Features',
        body: 'The UI is optimized for glanceability and repeat usage.',
        bullets: [
          'Interactive chart surface for rapid scanability.',
          'Cache-friendly refresh flow that avoids unnecessary churn.',
          'Compact summary cards that stay readable on tablet and mobile.',
          'A live status widget that can fall back safely when the source is unreachable.',
        ],
      },
      {
        id: 'energixchange-challenges',
        title: 'Technical Challenges',
        body:
          'The hardest part was balancing dense data presentation with a premium visual rhythm, especially across breakpoints and reduced-motion preferences.',
      },
      {
        id: 'energixchange-architecture',
        title: 'Architecture',
        body:
          'API data source -> cache-aware fetch layer -> live status widget -> chart and comparison widgets -> responsive case-study shell.',
        visual: 'flow',
      },
      {
        id: 'energixchange-outcome',
        title: 'Outcome',
        body:
          'The result reads like a production product showcase, not a screenshot dump, which makes the engineering story easier for recruiters to trust.',
      },
      {
        id: 'energixchange-future',
        title: 'Future Improvements',
        body: 'Watchlists, saved comparisons, alerting, and richer market summaries would be the next natural layer.',
        bullets: ['Watchlists', 'Saved views', 'Price alerts', 'Per-symbol deep dives'],
      },
    ],
    architectureSteps: [
      'Market data source',
      'Cache-aware fetch layer',
      'Signal normalization',
      'Insight widgets',
      'Responsive dashboard shell',
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Chart UI', 'API Integration', 'Caching'],
    highlights: ['Live market analytics', 'Cache-aware refresh', 'Responsive summary cards', 'Fast scanability'],
    thumbnailVariant: 'market',
    screenshots: energixchangeScreenshots,
    liveStatus: {
      sourceUrl: 'https://dashboard-app-ten-orpin.vercel.app/energy-sector',
      apiStatus: 'Checking live demo',
      lastUpdated: 'Auto-check on page load',
      latestMarketRefresh: 'Live market snapshot',
      cached: 'Fallback ready',
      responseTime: 'Measuring',
      symbolCount: 'Dynamic feed',
    },
    actions: [
      {
        label: 'Live Demo',
        kind: 'link',
        href: 'https://dashboard-app-ten-orpin.vercel.app/energy-sector',
        target: '_blank',
        rel: 'noreferrer',
      },
      {
        label: 'GitHub',
        kind: 'link',
        href: `https://github.com/${githubUsername}`,
        target: '_blank',
        rel: 'noreferrer',
      },
      {
        label: 'Case Study',
        kind: 'toggle',
        targetId: 'energixchange-case-study',
      },
    ],
    shortcuts: [
      { label: 'Live status', href: '#energixchange-live-status' },
      { label: 'Architecture', href: '#energixchange-architecture' },
      { label: 'Outcome', href: '#energixchange-outcome' },
    ],
    links: {
      github: `https://github.com/${githubUsername}`,
      live: 'https://dashboard-app-ten-orpin.vercel.app/energy-sector',
    },
  },
  {
    slug: 'ai-fitness-coach',
    title: 'AI Fitness Coach',
    category: 'Personal AI Product',
    projectType: 'Research / Building',
    lifecycle: 'research',
    summary:
      'An AI-powered health assistant for BMI, calories, protein, meal guidance, workout planning, and future voice interaction.',
    preview: {
      eyebrow: 'Research in motion',
      headline: 'A coach-shaped AI product',
      subheadline:
        'Roadmap-led, conversational, and designed to evolve into voice and vision without cluttering the core experience.',
      metrics: [
        { label: 'BMI', value: 'Tracked', tone: 'success' },
        { label: 'Meals', value: 'Planned', tone: 'primary' },
        { label: 'Voice', value: 'Queued', tone: 'secondary' },
      ],
    },
    caseStudy: [
      {
        id: 'ai-fitness-coach-problem',
        title: 'Problem',
        body:
          'Most fitness apps split tracking, advice, and planning across disconnected screens, which makes it hard to keep momentum.',
      },
      {
        id: 'ai-fitness-coach-solution',
        title: 'Solution',
        body:
          'Designing a single coach-style experience that converts user inputs into recommendations, reminders, and a simple conversational flow.',
      },
      {
        id: 'ai-fitness-coach-features',
        title: 'Key Features',
        body: 'The product is being shaped around one clear outcome: useful guidance with minimal friction.',
        bullets: [
          'BMI, calories, protein, meal, and workout inputs in one place.',
          'Recommendation logic that can grow with more user context.',
          'Voice and vision readiness without overloading the first release.',
        ],
      },
      {
        id: 'ai-fitness-coach-challenges',
        title: 'Technical Challenges',
        body:
          'The main challenge is keeping the experience helpful and human without drifting into a clinical or overly complex product shape.',
      },
      {
        id: 'ai-fitness-coach-roadmap',
        title: 'Roadmap',
        body: 'The roadmap is intentionally visible so future scope stays clear.',
        bullets: [
          'Finish the recommendation engine.',
          'Ship meal planning and workout guidance.',
          'Add a voice assistant when the core coach feels stable.',
          'Explore vision inputs only after the fundamentals are proven.',
        ],
      },
      {
        id: 'ai-fitness-coach-ai-architecture',
        title: 'AI Architecture',
        body:
          'Profile inputs -> nutrition rules -> workout rules -> recommendation engine -> conversational layer -> future voice and vision inputs.',
        visual: 'flow',
      },
      {
        id: 'ai-fitness-coach-outcome',
        title: 'Outcome',
        body:
          'This remains a research build, but the architecture already tells a strong story about how AI can be used with product discipline.',
      },
      {
        id: 'ai-fitness-coach-future',
        title: 'Future Improvements',
        body:
          'A richer assistant memory layer, wearable integrations, and guided habits are the natural next steps once the core loop is stable.',
        bullets: ['Habit memory', 'Wearable inputs', 'Voice coaching', 'Vision-based food logging'],
      },
    ],
    architectureSteps: [
      'User profile',
      'Nutrition rules',
      'Workout rules',
      'Recommendation engine',
      'Conversational assistant',
    ],
    stack: ['React', 'TypeScript', 'Python', 'Generative AI', 'RAG', 'Prompt Engineering'],
    highlights: ['BMI tracking', 'Meal planning', 'Workout suggestions', 'Voice assistant'],
    thumbnailVariant: 'coach',
    actions: [
      {
        label: 'GitHub',
        kind: 'link',
        href: `https://github.com/${githubUsername}`,
        target: '_blank',
        rel: 'noreferrer',
      },
      {
        label: 'Roadmap',
        kind: 'toggle',
        targetId: 'ai-fitness-coach-roadmap',
      },
      {
        label: 'AI Architecture',
        kind: 'toggle',
        targetId: 'ai-fitness-coach-ai-architecture',
      },
    ],
    shortcuts: [
      { label: 'Roadmap', href: '#ai-fitness-coach-roadmap' },
      { label: 'AI architecture', href: '#ai-fitness-coach-ai-architecture' },
      { label: 'Future', href: '#ai-fitness-coach-future' },
    ],
    links: {
      github: `https://github.com/${githubUsername}`,
    },
  },
  {
    slug: 'hospital-ipd-management-system',
    title: 'Hospital IPD Management System',
    category: 'Patient Operations',
    projectType: 'Enterprise System',
    lifecycle: 'in-development',
    summary:
      'A structured hospital IPD concept focused on admissions, billing, doctor coordination, reports, and secure admin workflows.',
    preview: {
      eyebrow: 'Engineering focus',
      headline: 'Operational clarity for ward workflows',
      subheadline:
        'Role-based access, explicit data boundaries, and an architecture preview that reads like a system diagram.',
      metrics: [
        { label: 'Frontend', value: 'React', tone: 'primary' },
        { label: 'Backend', value: 'Node.js', tone: 'secondary' },
        { label: 'Auth', value: 'Controlled', tone: 'success' },
        { label: 'DB', value: 'PostgreSQL', tone: 'warning' },
      ],
    },
    caseStudy: [
      {
        id: 'hospital-ipd-problem',
        title: 'Problem',
        body:
          'Hospital operations need clear navigation, permission boundaries, and efficient status tracking to reduce manual overhead.',
      },
      {
        id: 'hospital-ipd-solution',
        title: 'Solution',
        body:
          'Designed an interface model for patient records, doctor queues, billing, and reports with authenticated admin access.',
      },
      {
        id: 'hospital-ipd-features',
        title: 'Key Features',
        body: 'The concept is structured around operational speed and predictable workflows.',
        bullets: [
          'Distinct patient, billing, doctor, and report screens.',
          'Role-based admin structure with explicit boundaries.',
          'Layout that prioritizes scanning, not decoration.',
        ],
      },
      {
        id: 'hospital-ipd-challenges',
        title: 'Technical Challenges',
        body:
          'The hardest part is making the interface trustworthy and fast for teams that have limited time and a low tolerance for ambiguity.',
      },
      {
        id: 'hospital-ipd-architecture',
        title: 'Architecture',
        body:
          'Role-based frontend -> authentication gate -> patient records -> billing workflow -> reporting and audit-ready views.',
        visual: 'flow',
      },
      {
        id: 'hospital-ipd-screenshots',
        title: 'Screenshots',
        body:
          'Instead of embedding heavy assets, this section uses lightweight UI mock frames to show how the system would be presented in a recruiter review.',
        visual: 'gallery',
        bullets: ['Admission desk', 'Billing queue', 'Reports shell'],
      },
      {
        id: 'hospital-ipd-outcome',
        title: 'Outcome',
        body:
          'The story emphasizes systems thinking and reliability, which is more useful here than a polished but shallow demo surface.',
      },
      {
        id: 'hospital-ipd-future',
        title: 'Future Improvements',
        body:
          'Audit logs, richer permission scopes, and exportable reports would be the next practical improvements.',
        bullets: ['Audit logs', 'Permission scopes', 'Exportable reports', 'Search and filtering'],
      },
    ],
    architectureSteps: [
      'Frontend shell',
      'Authentication',
      'Patient records',
      'Billing workflow',
      'Database and reports',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'GitHub'],
    highlights: ['Patient management', 'Billing workflows', 'Doctor coordination', 'Audit-ready reporting'],
    thumbnailVariant: 'hospital',
    actions: [
      {
        label: 'GitHub',
        kind: 'link',
        href: `https://github.com/${githubUsername}`,
        target: '_blank',
        rel: 'noreferrer',
      },
      {
        label: 'Architecture',
        kind: 'toggle',
        targetId: 'hospital-ipd-architecture',
      },
      {
        label: 'Screenshots',
        kind: 'toggle',
        targetId: 'hospital-ipd-screenshots',
      },
    ],
    shortcuts: [
      { label: 'Architecture', href: '#hospital-ipd-architecture' },
      { label: 'Screenshots', href: '#hospital-ipd-screenshots' },
      { label: 'Future', href: '#hospital-ipd-future' },
    ],
    links: {
      github: `https://github.com/${githubUsername}`,
    },
  },
  {
    slug: 'kbc-quiz-platform',
    title: 'KBC Quiz Platform',
    category: 'Game Engine',
    projectType: 'Archived experiment',
    lifecycle: 'archived',
    summary:
      'A polished quiz platform with lifelines, leaderboard flow, replay support, and a responsive interface built like a product.',
    preview: {
      eyebrow: 'Archived work',
      headline: 'A quiz loop with product discipline',
      subheadline:
        'An early interactive build that still shows structured state, replay thinking, and polished answer feedback.',
      metrics: [
        { label: 'Replay', value: 'Ready', tone: 'success' },
        { label: 'Lifelines', value: '3 left', tone: 'primary' },
        { label: 'Score', value: 'Tracked', tone: 'secondary' },
      ],
    },
    caseStudy: [
      {
        id: 'kbc-quiz-problem',
        title: 'Problem',
        body:
          'Quiz experiences often feel playful but under-engineered, which hurts retention and replayability.',
      },
      {
        id: 'kbc-quiz-solution',
        title: 'Solution',
        body:
          'Designed a game loop with clean states, responsive answer flow, and visual feedback that supports focus and momentum.',
      },
      {
        id: 'kbc-quiz-features',
        title: 'Key Features',
        body: 'The experience is structured to keep the next action obvious at every step.',
        bullets: ['State-driven quiz flow', 'Support for lifelines and replay', 'Product-style hierarchy'],
      },
      {
        id: 'kbc-quiz-challenges',
        title: 'Technical Challenges',
        body:
          'The challenge was to keep the interface crisp while still making the gameplay feel dynamic and easy to understand quickly.',
      },
      {
        id: 'kbc-quiz-architecture',
        title: 'Architecture',
        body: 'Question engine -> score state -> lifelines -> leaderboard -> replay flow -> results summary.',
        visual: 'flow',
      },
      {
        id: 'kbc-quiz-outcome',
        title: 'Outcome',
        body:
          'Even as an archived experiment, the product framing still shows careful state modeling and a clear progression system.',
      },
      {
        id: 'kbc-quiz-future',
        title: 'Future Improvements',
        body: 'This build could be revisited with more lifelines, timed rounds, and multiplayer ranking.',
        bullets: ['Timed rounds', 'Multiplayer ranking', 'Question pools', 'Smarter replay analytics'],
      },
    ],
    architectureSteps: ['Question engine', 'Score state', 'Lifelines', 'Leaderboard', 'Replay flow'],
    stack: ['React', 'TypeScript', 'State Management', 'Leaderboard', 'Replay System', 'Responsive UI'],
    highlights: ['Lifelines', 'Leaderboard', 'Replay support', 'Structured game states'],
    thumbnailVariant: 'quiz',
    actions: [
      {
        label: 'GitHub',
        kind: 'link',
        href: `https://github.com/${githubUsername}`,
        target: '_blank',
        rel: 'noreferrer',
      },
      {
        label: 'Case Study',
        kind: 'toggle',
        targetId: 'kbc-quiz-problem',
      },
    ],
    shortcuts: [
      { label: 'Replay flow', href: '#kbc-quiz-architecture' },
      { label: 'Outcome', href: '#kbc-quiz-outcome' },
    ],
    links: {
      github: `https://github.com/${githubUsername}`,
    },
  },
];

export const experience: ExperienceItem[] = [
  {
    org: 'NTPC Limited, Dadri',
    role: 'Apprentice',
    period: 'Aug 2025 - Present',
    location: 'Dadri, India',
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
