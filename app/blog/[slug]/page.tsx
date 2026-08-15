import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPostClient from '@/components/BlogPostClient';
import { getPublishedPost, getPublishedPosts } from '@/lib/blog';
import {
  SITE_NAME,
  SITE_URL,
  SOCIAL_IMAGE,
  absoluteUrl,
  breadcrumbJsonLd,
  safeJsonLd,
} from '@/lib/seo';

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = await getPublishedPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedPost(slug);

  if (!post) {
    return {
      title: 'Artigo não encontrado',
      robots: { index: false, follow: false },
    };
  }

  const description = post.description || `Leia ${post.title} no blog da ${SITE_NAME}.`;
  const url = absoluteUrl(`/blog/${post.slug}`);
  const image = post.image_url || SOCIAL_IMAGE;

  return {
    title: post.title,
    description,
    authors: [{ name: post.author }],
    keywords: post.tags,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description,
      url,
      type: 'article',
      siteName: SITE_NAME,
      locale: 'pt_BR',
      publishedTime: post.published_at || post.created_at,
      modifiedTime: post.updated_at,
      authors: [post.author],
      tags: post.tags,
      images: [{ url: image, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      images: [image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPublishedPost(slug);

  if (!post) notFound();

  const url = absoluteUrl(`/blog/${post.slug}`);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${url}#article`,
        headline: post.title,
        description: post.description || undefined,
        image: [post.image_url || SOCIAL_IMAGE],
        datePublished: post.published_at || post.created_at,
        dateModified: post.updated_at,
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        author: {
          '@type': post.author === SITE_NAME ? 'Organization' : 'Person',
          name: post.author,
        },
        publisher: {
          '@type': 'Organization',
          '@id': `${SITE_URL}/#organization`,
          name: SITE_NAME,
        },
        keywords: post.tags.join(', '),
        inLanguage: 'pt-BR',
      },
      breadcrumbJsonLd([
        { name: 'Início', path: '/' },
        { name: 'Blog', path: '/blog' },
        { name: post.title, path: `/blog/${post.slug}` },
      ]),
    ],
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <Header />
      <main id="conteudo">
        <BlogPostClient post={post} />
      </main>
      <Footer />
    </div>
  );
}
