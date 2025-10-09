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
import 'highlight.js/styles/github-dark.css';

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
      <div className="py-20 bg-slate-950 text-slate-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-slate-400">Carregando post...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="py-20 bg-slate-950 text-slate-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Post não encontrado</h1>
          <p className="text-slate-400 mb-8">O post que você está procurando não existe ou foi removido.</p>
          <Link href="/blog">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-500 hover:to-indigo-400">
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
      <h1 className="text-3xl font-bold mt-8 mb-6 text-white border-b border-slate-700 pb-2">{children}</h1>
    ),
    h2: ({ children }) => <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-100">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-100">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg font-semibold mt-4 mb-2 text-slate-100">{children}</h4>,
    p: ({ children }) => <p className="mb-4 leading-relaxed text-slate-300">{children}</p>,
    ul: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>,
    li: ({ children }) => <li className="text-slate-300 leading-relaxed">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500/70 pl-4 py-2 mb-4 bg-blue-500/10 italic text-blue-100">
        {children}
      </blockquote>
    ),
    code(props: React.HTMLAttributes<HTMLElement> & { inline?: boolean; className?: string; children?: React.ReactNode }) {
      const { inline, className, children, ...rest } = props;
      const match = /language-(\w+)/.exec(className || '');
      return !inline ? (
        <div className="mb-4">
          <pre className="bg-slate-950 text-blue-100 rounded-lg p-4 overflow-x-auto border border-slate-800">
            <code className={className} {...rest}>
              {children}
            </code>
          </pre>
        </div>
      ) : (
        <code className="bg-slate-800 text-blue-100 px-1 py-0.5 rounded text-sm font-mono" {...rest}>
          {children}
        </code>
      );
    },
    a({ children, href, ...props }) {
      return (
        <a
          href={href || '#'}
          className="text-blue-300 hover:text-blue-200 underline"
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
        <table className="min-w-full border border-slate-700 rounded-lg">{children}</table>
      </div>
    ),
    thead: ({ children }) => <thead className="bg-slate-900/60">{children}</thead>,
    th: ({ children }) => (
      <th className="px-4 py-2 text-left font-semibold text-slate-200 border-b border-slate-700">{children}</th>
    ),
    td: ({ children }) => <td className="px-4 py-2 text-slate-300 border-b border-slate-800">{children}</td>,
    hr: () => <hr className="my-8 border-slate-800" />, 
    strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
    em: ({ children }) => <em className="italic text-slate-300">{children}</em>,
  };

  return (
    <article className="py-12 bg-slate-950 text-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/blog">
            <Button
              variant="ghost"
              size="sm"
              className="text-blue-300 hover:text-blue-200 hover:bg-blue-500/10 transition-transform duration-200 hover:-translate-y-0.5"
            >
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
          <h1 className="text-4xl font-bold text-white mb-6 leading-tight">{post.title}</h1>

          <div className="flex items-center justify-between flex-wrap gap-4 text-slate-400">
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

            <Button
              variant="outline"
              size="sm"
              className="border-slate-600 text-slate-200 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-slate-800/70 hover:text-blue-300"
              onClick={sharePost}
            >
              <Share2 className="mr-2 h-4 w-4" />
              Compartilhar
            </Button>
          </div>
        </header>

        {/* Post Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          {post.description && (
            <div className="text-xl text-slate-300 mb-8 font-medium leading-relaxed">{post.description}</div>
          )}

          <div className="text-slate-300 leading-relaxed">
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
        <div className="mt-12 p-8 rounded-lg border border-blue-500/30 bg-blue-500/10">
          <h3 className="text-2xl font-bold text-white mb-4">Precisa de ajuda com seu projeto?</h3>
          <p className="text-slate-300 mb-6">
            A Mattos Tech Solutions pode ajudar sua empresa a implementar as soluções discutidas neste artigo. Entre em
            contato conosco para uma consultoria gratuita.
          </p>
          <Link href="/#contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-500 hover:to-indigo-400"
            >
              Falar com Especialista
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
}
