import { Helmet } from 'react-helmet-async';
import { site } from '@/data/content';
import { buildCanonical, buildOgImage } from '@/utils/seo';
import type { ReactNode } from 'react';

type SeoProps = {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
  structuredData?: object | object[];
  children?: ReactNode;
};

export function Seo({
  title,
  description = site.summary,
  pathname = '/',
  image,
  type = 'website',
  noindex = false,
  structuredData,
}: SeoProps) {
  const fullTitle = title ? `${title} | ${site.name}` : `${site.name} | ${site.role}`;
  const canonical = buildCanonical(pathname);
  const ogImage = image ?? buildOgImage(pathname);
  const data = structuredData ?? undefined;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {data ? <script type="application/ld+json">{JSON.stringify(data)}</script> : null}
    </Helmet>
  );
}
