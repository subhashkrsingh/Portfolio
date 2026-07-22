import { Seo } from '@/components/seo/Seo';
import { site } from '@/data/content';
import { buildStructuredData } from '@/utils/seo';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { RoadmapSection } from '@/components/sections/RoadmapSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { CertificationsSection } from '@/components/sections/CertificationsSection';
import { GitHubSection } from '@/components/sections/GitHubSection';
import { BlogSection } from '@/components/sections/BlogSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

export function HomePage() {
  return (
    <>
      <Seo
        title={`${site.name} | ${site.role}`}
        description={site.summary}
        pathname="/"
        structuredData={buildStructuredData()}
      />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <RoadmapSection />
      <ExperienceSection />
      <EducationSection />
      <CertificationsSection />
      <GitHubSection />
      <BlogSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
