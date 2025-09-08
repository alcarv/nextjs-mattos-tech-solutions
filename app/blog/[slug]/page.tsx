import { Suspense } from 'react';
import BlogPostClient from '@/components/BlogPostClient';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { supabase } from '@/lib/supabase';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: BlogPostPageProps
): Promise<Metadata> {
  const { slug } = await params;

  try {
    if (supabase) {
      const { data } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .single();

      if (data) {
        const title = data.title;
        const description = data.description || undefined;
        const url = `${SITE_URL}/blog/${slug}`;
        const image = data.image_url || undefined;

        return {
          title,
          description,
          alternates: { canonical: `/blog/${slug}` },
          openGraph: {
            title,
            description,
            url,
            type: 'article',
            siteName: SITE_NAME,
            images: image ? [{ url: image }] : undefined,
          },
          twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: image ? [image] : undefined,
          },
        } satisfies Metadata;
      }
    }
  } catch (e) {
    // No-op: fallback metadata below
  }

  return {
    title: 'Artigo do Blog',
    alternates: { canonical: `/blog/${slug}` },
  } satisfies Metadata;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  return (
    <div className="min-h-screen">
      <Header />
      <Suspense fallback={
        <div className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xl text-gray-600">Carregando post...</p>
          </div>
        </div>
      }>
        <BlogPostClient slug={slug} />
      </Suspense>
      <Footer />
    </div>
  );
}
