import { Seo } from '@/components/seo/Seo';
import { site } from '@/data/content';
import { buildStructuredData } from '@/utils/seo';
import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { AboutSkillsSection } from '@/components/sections/AboutSkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
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
      <StatsSection />
      <AboutSkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
