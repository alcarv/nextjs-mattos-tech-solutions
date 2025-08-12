import { supabase } from '@/lib/supabase';

export async function generateStaticParams() {
  // For static export, we need to provide all possible slug values
  // Fetch all published blog post slugs from Supabase
  try {
    if (!supabase) {
      console.warn('Supabase client not available, returning empty params');
      return [];
    }

    const { data: posts, error } = await supabase
      .from('blog_posts')
      .select('slug')
      .eq('published', true);

    if (error) {
      console.error('Error fetching blog posts for static generation:', error);
      return [];
    }

    return posts?.map((post) => ({
      slug: post.slug,
    })) || [];
  } catch (error) {
    console.error('Error in generateStaticParams:', error);
    return [];
  }
}