import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabasePublishableKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  'placeholder-key';

const hasSupabaseConfig =
  supabaseUrl !== 'https://placeholder.supabase.co' &&
  supabasePublishableKey !== 'placeholder-key';

// Evita criar um cliente quebrado durante builds locais sem arquivo .env.
export const supabase = hasSupabaseConfig
  ? createClient(supabaseUrl, supabasePublishableKey)
  : null;

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  content: string;
  image_url: string | null;
  author: string;
  tags: string[];
  reading_time: number;
  published: boolean;
  created_at: string;
  updated_at: string;
  published_at: string | null;
};
