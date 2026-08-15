import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogIndexClient from '@/components/BlogIndexClient';
import { getPublishedPosts } from '@/lib/blog';

export const revalidate = 3600;

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Header />
      <main id="conteudo">
        <BlogIndexClient posts={posts} />
      </main>
      <Footer />
    </div>
  );
}
