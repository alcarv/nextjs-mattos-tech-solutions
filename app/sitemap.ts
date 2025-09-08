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
      url: 'https://mattostechsolutions.com/inteligencia-artificial',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://mattostechsolutions.com/governanca-compliance',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://mattostechsolutions.com/banco-dados-analytics',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://mattostechsolutions.com/avaliacoes-ti',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://mattostechsolutions.com/ux-ui-design',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://mattostechsolutions.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://mattostechsolutions.com/faq',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://mattostechsolutions.com/politica-de-privacidade',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
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
