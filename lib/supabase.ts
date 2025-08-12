import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

// Only create Supabase client if environment variables are properly set
export const supabase = (supabaseUrl && supabaseUrl !== 'https://placeholder.supabase.co' && 
                        supabaseAnonKey && supabaseAnonKey !== 'placeholder-key')
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string | null;
  author: string;
  published: boolean;
  created_at: string;
  updated_at: string;
  tags: string[];
  reading_time: number;
};