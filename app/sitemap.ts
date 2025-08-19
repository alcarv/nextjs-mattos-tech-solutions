import { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabase';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrls: MetadataRoute.Sitemap = [
    {
      url: 'https://mattostechsolutions.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://mattostechsolutions.com/criacao-sites',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://mattostechsolutions.com/criacao-software',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://mattostechsolutions.com/consultoria-ti',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://mattostechsolutions.com/migracao-cloud',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://mattostechsolutions.com/apps-mobile',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://mattostechsolutions.com/solucoes-ecommerce',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://mattostechsolutions.com/#services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://mattostechsolutions.com/#about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://mattostechsolutions.com/#blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://mattostechsolutions.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://mattostechsolutions.com/#contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  let blogUrls: MetadataRoute.Sitemap = [];
  
  if (supabase) {
    try {
      const { data: blogPosts, error } = await supabase
        .from('blog_posts')
        .select('slug, updated_at, created_at')
        .eq('published', true);

      if (!error && blogPosts) {
        blogUrls = blogPosts.map((post) => ({
          url: `https://mattostechsolutions.com/blog/${post.slug}`,
          lastModified: new Date(post.updated_at || post.created_at),
          changeFrequency: 'monthly' as const,
          priority: 0.6,
        }));
      }
    } catch (error) {
      console.error('Error fetching blog posts for sitemap:', error);
    }
  }

  return [...baseUrls, ...blogUrls];
}