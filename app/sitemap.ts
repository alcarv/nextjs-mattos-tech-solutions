import { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabase';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrls: MetadataRoute.Sitemap = [
    {
      url: 'https://mattostechsolutions.com.br',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://mattostechsolutions.com.br/criacao-sites',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://mattostechsolutions.com.br/criacao-software',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://mattostechsolutions.com.br/consultoria-ti',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://mattostechsolutions.com.br/consultoria-protheus',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://mattostechsolutions.com.br/migracao-cloud',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://mattostechsolutions.com.br/apps-mobile',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://mattostechsolutions.com.br/solucoes-ecommerce',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://mattostechsolutions.com.br/inteligencia-artificial',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://mattostechsolutions.com.br/governanca-compliance',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://mattostechsolutions.com.br/banco-dados-analytics',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://mattostechsolutions.com.br/avaliacoes-ti',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://mattostechsolutions.com.br/ux-ui-design',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://mattostechsolutions.com.br/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://mattostechsolutions.com.br/faq',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://mattostechsolutions.com.br/politica-de-privacidade',
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
          url: `https://mattostechsolutions.com.br/blog/${post.slug}`,
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
