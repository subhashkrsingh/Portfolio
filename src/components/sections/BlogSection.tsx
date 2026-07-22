import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { blogPosts } from '@/data/content';
import { BlogCard } from '@/components/cards/BlogCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function BlogSection() {
  return (
    <section id="blog" className="section-shell section-padding scroll-mt-32">
      <div className="section-content">
        <Reveal>
          <SectionHeading
            eyebrow="Blog"
            title="Professional AI writing"
            description="Short technical articles that support the portfolio narrative and demonstrate written communication."
            action={
              <Button href="/blog" variant="outline">
                View all posts
                <ArrowRight className="h-4 w-4" />
              </Button>
            }
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.04}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-6 flex justify-end">
            <Link to="/blog" className="text-sm font-semibold text-white transition-colors hover:text-blue-200">
              Read the full article library
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
