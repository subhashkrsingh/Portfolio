import type { BlogPost } from '@/types/content';

const siteUrl = (import.meta.env.VITE_SITE_URL || 'http://localhost:5173').replace(/\/$/, '');

export function buildCanonical(pathname: string): string {
  return `${siteUrl}${pathname.startsWith('/') ? pathname : `/${pathname}`}`;
}

export function buildOgImage(pathname = '/'): string {
  if (pathname === '/' || pathname === '') {
    return `${siteUrl}/og-image.svg`;
  }
  return `${siteUrl}/og-image.svg`;
}

export function buildStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Subhash Kumar Singh',
    jobTitle: 'AI Engineer and Full Stack Developer',
    url: siteUrl,
  };
}

export function buildBlogStructuredData(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'Subhash Kumar Singh',
    },
  };
}
