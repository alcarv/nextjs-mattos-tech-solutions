import type { MetadataRoute } from 'next';
import { getPublishedPosts } from '@/lib/blog';
import { absoluteUrl } from '@/lib/seo';

export const revalidate = 3600;

const staticPaths = [
  '/',
  '/servicos',
  '/criacao-sites',
  '/criacao-software',
  '/consultoria-ti',
  '/consultoria-protheus',
  '/migracao-cloud',
  '/apps-mobile',
  '/solucoes-ecommerce',
  '/inteligencia-artificial',
  '/governanca-compliance',
  '/banco-dados-analytics',
  '/avaliacoes-ti',
  '/ux-ui-design',
  '/blog',
  '/faq',
  '/politica-de-privacidade',
] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPublishedPosts();

  const staticUrls: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: absoluteUrl(path),
  }));

  const blogUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.updated_at || post.published_at || post.created_at),
  }));

  return [...staticUrls, ...blogUrls];
}
