'use client';

import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import type { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Share2, ArrowLeft } from 'lucide-react';
import { supabase, type BlogPost } from '@/lib/supabase';
import Link from 'next/link';
import Image from 'next/image';
import 'highlight.js/styles/github.css';

interface BlogPostClientProps {
  slug: string;
}

export default function BlogPostClient({ slug }: BlogPostClientProps) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      fetchBlogPost();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const fetchBlogPost = async () => {
    try {
      if (!supabase) {
        setError('Supabase não está configurado. Configure suas credenciais no arquivo .env.local');
        return;
      }

      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .single();

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      if (!data) {
        setError('Post não encontrado');
        return;
      }

      setPost(data);
    } catch (err) {
      console.error('Error fetching blog post:', err);
      setError(`Erro ao carregar post: ${err instanceof Error ? err.message : 'Erro desconhecido'}`);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const sharePost = () => {
    if (navigator.share && post) {
      navigator.share({
        title: post.title,
        text: post.description || '',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copiado para a área de transferência!');
    }
  };

  if (loading) {
    return (
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-gray-600">Carregando post...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post não encontrado</h1>
          <p className="text-gray-600 mb-8">O post que você está procurando não existe ou foi removido.</p>
          <Link href="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // ---- ReactMarkdown components tipados ----
  const mdComponents: Components = {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mt-8 mb-6 text-gray-900 border-b border-gray-200 pb-2">{children}</h1>
    ),
    h2: ({ children }) => <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg font-semibold mt-4 mb-2 text-gray-900">{children}</h4>,
    p: ({ children }) => <p className="mb-4 leading-relaxed text-gray-700">{children}</p>,
    ul: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>,
    li: ({ children }) => <li className="text-gray-700 leading-relaxed">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 py-2 mb-4 bg-blue-50 italic text-gray-700">
        {children}
      </blockquote>
    ),
    code(props: React.HTMLAttributes<HTMLElement> & { inline?: boolean; className?: string; children?: React.ReactNode }) {
      const { inline, className, children, ...rest } = props;
      const match = /language-(\w+)/.exec(className || '');
      return !inline ? (
        <div className="mb-4">
          <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
            <code className={className} {...rest}>
              {children}
            </code>
          </pre>
        </div>
      ) : (
        <code className="bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-sm font-mono" {...rest}>
          {children}
        </code>
      );
    },
    a({ children, href, ...props }) {
      return (
        <a
          href={href || '#'}
          className="text-blue-600 hover:text-blue-800 underline"
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      );
    },
    img({ src, alt, ...props }) {
      if (!src) return null;
      return (
        <div className="mb-6">
          <Image
            src={src}
            alt={alt || ''}
            width={800}
            height={400}
            className="rounded-lg shadow-md w-full h-auto"
            {...(props as any)}
          />
        </div>
      );
    },
    table: ({ children }) => (
      <div className="mb-6 overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg">{children}</table>
      </div>
    ),
    thead: ({ children }) => <thead className="bg-gray-50">{children}</thead>,
    th: ({ children }) => (
      <th className="px-4 py-2 text-left font-semibold text-gray-900 border-b border-gray-300">{children}</th>
    ),
    td: ({ children }) => <td className="px-4 py-2 text-gray-700 border-b border-gray-200">{children}</td>,
    hr: () => <hr className="my-8 border-gray-300" />,
    strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
    em: ({ children }) => <em className="italic text-gray-700">{children}</em>,
  };

  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/blog">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Blog
            </Button>
          </Link>
        </div>

        {/* Featured Image */}
        {post.image_url && (
          <div className="aspect-video overflow-hidden rounded-lg mb-8">
            <Image
              src={post.image_url}
              alt={post.title}
              width={800}
              height={450}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Post Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">{post.title}</h1>

          <div className="flex items-center justify-between flex-wrap gap-4 text-gray-600">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>{formatDate(post.created_at)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>5 min de leitura</span>
              </div>
            </div>

            <Button variant="outline" size="sm" onClick={sharePost}>
              <Share2 className="mr-2 h-4 w-4" />
              Compartilhar
            </Button>
          </div>
        </header>

        {/* Post Content */}
        <div className="prose prose-lg max-w-none">
          {post.description && (
            <div className="text-xl text-gray-600 mb-8 font-medium leading-relaxed">{post.description}</div>
          )}

          <div className="text-gray-800 leading-relaxed">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight, rehypeRaw]}
              components={mdComponents}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 p-8 bg-blue-50 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Precisa de ajuda com seu projeto?</h3>
          <p className="text-gray-600 mb-6">
            A Mattos Tech Solutions pode ajudar sua empresa a implementar as soluções discutidas neste artigo. Entre em
            contato conosco para uma consultoria gratuita.
          </p>
          <Link href="/#contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Falar com Especialista
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
}
