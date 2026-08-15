import { cache } from 'react';
import { SITE_NAME } from '@/lib/seo';
import { supabase, type BlogPost } from '@/lib/supabase';

type BlogPostRow = Record<string, unknown>;

function stringValue(value: unknown, fallback = '') {
  return typeof value === 'string' ? value : fallback;
}

function nullableString(value: unknown) {
  return typeof value === 'string' && value.trim() ? value : null;
}

function calculateReadingTime(content: string) {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function normalizeBlogPost(row: BlogPostRow): BlogPost {
  const content = stringValue(row.content);
  const createdAt = stringValue(row.created_at, new Date(0).toISOString());

  return {
    id: stringValue(row.id),
    title: stringValue(row.title),
    slug: stringValue(row.slug),
    description: nullableString(row.description) || nullableString(row.excerpt),
    content,
    image_url: nullableString(row.image_url) || nullableString(row.featured_image),
    author: stringValue(row.author, SITE_NAME),
    tags: Array.isArray(row.tags)
      ? row.tags.filter((tag): tag is string => typeof tag === 'string')
      : [],
    reading_time:
      typeof row.reading_time === 'number'
        ? row.reading_time
        : calculateReadingTime(content),
    published: row.published === true,
    created_at: createdAt,
    updated_at: stringValue(row.updated_at, createdAt),
    published_at: nullableString(row.published_at) || createdAt,
  };
}

export const getPublishedPosts = cache(async (limit?: number): Promise<BlogPost[]> => {
  if (!supabase) return [];

  let query = supabase
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false });

  if (limit) query = query.limit(limit);

  const { data, error } = await query;

  if (error) {
    console.error('Não foi possível carregar os posts publicados:', error.message);
    return [];
  }

  return (data || []).map((row) => normalizeBlogPost(row as BlogPostRow));
});

export const getPublishedPost = cache(async (slug: string): Promise<BlogPost | null> => {
  if (!supabase) return null;

  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .maybeSingle();

  if (error) {
    console.error(`Não foi possível carregar o post "${slug}":`, error.message);
    return null;
  }

  return data ? normalizeBlogPost(data as BlogPostRow) : null;
});
