import { BlogCard } from '@/components/cards/BlogCard';
import { Button } from '@/components/ui/Button';
import { Seo } from '@/components/seo/Seo';
import { blogPosts, site } from '@/data/content';
import { buildBlogStructuredData } from '@/utils/seo';
import { formatDate } from '@/utils/format';
import { ArrowLeft, CalendarDays, Clock3, Tag } from 'lucide-react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { NotFoundPage } from '@/pages/NotFoundPage';

export function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return <NotFoundPage />;
  }

  return (
    <>
      <Seo
        title={`${post.title} | ${site.name}`}
        description={post.excerpt}
        pathname={`/blog/${post.slug}`}
        type="article"
        structuredData={buildBlogStructuredData(post)}
      />
      <section className="section-shell section-padding scroll-mt-32">
        <div className="section-content">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <Button href="/blog" variant="outline">
              <ArrowLeft className="h-4 w-4" />
              Back to blog
            </Button>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.24em] text-text-secondary">
              <span className="inline-flex items-center gap-2">
                <Tag className="h-3.5 w-3.5" />
                {post.category}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-3.5 w-3.5" />
                {formatDate(post.date)}
              </span>
            </div>
          </div>

          <article className="glass-card p-6 md:p-10">
            <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-text-secondary">{post.excerpt}</p>
            <div className="mt-8 border-t border-white/10 pt-8">
              <ReactMarkdown remarkPlugins={[remarkGfm]} className="prose-dark max-w-none">
                {post.content}
              </ReactMarkdown>
            </div>
          </article>

          <div className="mt-8">
            <BlogCard post={post} />
          </div>
        </div>
      </section>
    </>
  );
}
