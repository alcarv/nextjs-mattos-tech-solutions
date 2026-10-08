import type { MetadataRoute } from 'next';
import { getPublishedPosts } from '@/lib/blog';
import { absoluteUrl } from '@/lib/seo';
import { decisionGuides } from '@/lib/decision-guides';
import { serviceCatalog } from '@/lib/services';

export const revalidate = 3600;

const staticPaths = [
  '/',
  '/servicos',
  '/guias',
  ...serviceCatalog.map(service => service.path),
  '/blog',
  '/faq',
  '/politica-de-privacidade',
] as const;

// Dates of substantive editorial changes, not the request/build date.
const contentUpdates: Record<string, string> = {
  '/criacao-sites': '2026-10-08',
  '/criacao-software': '2026-10-08',
  '/apps-mobile': '2026-10-08',
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPublishedPosts();

  const staticUrls: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: absoluteUrl(path),
    lastModified: contentUpdates[path],
  }));

  const blogUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.updated_at || post.published_at || post.created_at),
  }));

  return [...staticUrls, ...decisionGuides.map(guide => ({ url: absoluteUrl(`/guias/${guide.slug}`) })), ...blogUrls];
}
