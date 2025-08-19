import { Suspense } from 'react';
import BlogPostClient from '@/components/BlogPostClient';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

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
