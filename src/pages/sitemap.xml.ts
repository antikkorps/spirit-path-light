import type { APIRoute } from 'astro';
import { getBlogPosts } from '../lib/sanity';

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    return new Response('Site URL not configured', { status: 500 });
  }

  // Get all blog posts
  const blogPosts = await getBlogPosts();

  // Define static pages
  const staticPages = [
    '',
    '/contact',
    '/faq',
    '/politique-confidentialite',
    '/blog',
    '/newsletter/confirmation',
  ];

  // Build sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map(
      (page) => `
  <url>
    <loc>${new URL(page, site).href}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`
    )
    .join('')}
  ${blogPosts
    .map(
      (post: any) => `
  <url>
    <loc>${new URL(`/blog/${post.slug.current}`, site).href}</loc>
    <lastmod>${new Date(post.publishedAt).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
};