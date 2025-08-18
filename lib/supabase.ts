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
  website_id: string;
  title: string;
  slug: string;
  description: string | null;
  content: string;
  image_url: string | null;
  user_id: string;
  published: boolean;
  created_at: string;
  updated_at: string;
  published_at: string | null;
};