import { Badge } from '@/components/ui/Badge';
import { cn } from '@/utils/cn';
import { formatDate } from '@/utils/format';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '@/types/content';

type BlogCardProps = {
  post: BlogPost;
  className?: string;
};

export function BlogCard({ post, className }: BlogCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      className={cn('glass-card group overflow-hidden p-6', className)}
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.18 }}
    >
      <div className="flex items-center justify-between gap-3">
        <Badge variant="outline">{post.category}</Badge>
        <span className="text-xs text-text-secondary">{post.readTime}</span>
      </div>
      <h3 className="mt-5 font-display text-2xl font-semibold text-white">{post.title}</h3>
      <p className="mt-3 text-sm leading-7 text-text-secondary">{post.excerpt}</p>
      <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-5">
        <span className="text-xs font-medium uppercase tracking-[0.22em] text-text-secondary">
          {formatDate(post.date)}
        </span>
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors group-hover:text-blue-200"
        >
          Read article
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </motion.article>
  );
}
