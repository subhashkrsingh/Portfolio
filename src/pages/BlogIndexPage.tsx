import { BlogCard } from '@/components/cards/BlogCard';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Seo } from '@/components/seo/Seo';
import { blogPosts, site } from '@/data/content';
import { buildStructuredData } from '@/utils/seo';

export function BlogIndexPage() {
  return (
    <>
      <Seo
        title={`Blog | ${site.name}`}
        description="Technical articles on RAG, prompt engineering, and AI product design."
        pathname="/blog"
        structuredData={buildStructuredData()}
      />
      <section className="section-shell section-padding scroll-mt-32">
        <div className="section-content">
          <Reveal>
            <SectionHeading
              eyebrow="Blog"
              title="AI engineering notes"
              description="A small article library that demonstrates technical communication and product thinking."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {blogPosts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.04}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
