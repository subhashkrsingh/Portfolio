import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const siteUrl = (process.env.VITE_SITE_URL || process.env.SITE_URL || 'http://localhost:5173').replace(/\/$/, '');
const now = new Date().toISOString();

await fs.mkdir(publicDir, { recursive: true });

const robots = [
  'User-agent: *',
  'Allow: /',
  `Sitemap: ${siteUrl}/sitemap.xml`,
  '',
].join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${now}</lastmod>
  </url>
  <url>
    <loc>${siteUrl}/blog</loc>
    <lastmod>${now}</lastmod>
  </url>
</urlset>
`;

await Promise.all([
  fs.writeFile(path.join(publicDir, 'robots.txt'), robots, 'utf8'),
  fs.writeFile(path.join(publicDir, 'sitemap.xml'), sitemap, 'utf8'),
]);
