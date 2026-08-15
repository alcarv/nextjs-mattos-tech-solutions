import ReactMarkdown from 'react-markdown';
import type { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import type { BlogPost } from '@/lib/supabase';
import ShareButton from '@/components/ShareButton';
import { Button } from '@/components/ui/button';

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPostClient({ post }: { post: BlogPost }) {
  const markdownComponents: Components = {
    h1: ({ children }) => <h2 className="text-3xl font-bold mt-8 mb-6 text-white">{children}</h2>,
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
    pre: ({ children }) => (
      <pre className="mb-4 bg-slate-950 text-blue-100 rounded-lg p-4 overflow-x-auto border border-slate-800">
        {children}
      </pre>
    ),
    code: ({ children, className, ...props }) => (
      <code className={className || 'bg-slate-800 text-blue-100 px-1 py-0.5 rounded text-sm font-mono'} {...props}>
        {children}
      </code>
    ),
    a: ({ children, href, ...props }) => {
      const external = Boolean(href && /^https?:\/\//i.test(href));
      return (
        <a
          href={href || '#'}
          className="text-blue-300 hover:text-blue-200 underline"
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          {...props}
        >
          {children}
        </a>
      );
    },
    img: ({ src, alt }) => {
      if (typeof src !== 'string') return null;
      return (
        <span className="block mb-6">
          <Image
            src={src}
            alt={alt || `Imagem do artigo ${post.title}`}
            width={800}
            height={400}
            className="rounded-lg shadow-md w-full h-auto"
          />
        </span>
      );
    },
    table: ({ children }) => (
      <span className="block mb-6 overflow-x-auto">
        <table className="min-w-full border border-slate-700 rounded-lg">{children}</table>
      </span>
    ),
    thead: ({ children }) => <thead className="bg-slate-900/60">{children}</thead>,
    th: ({ children }) => <th className="px-4 py-2 text-left font-semibold text-slate-200 border-b border-slate-700">{children}</th>,
    td: ({ children }) => <td className="px-4 py-2 text-slate-300 border-b border-slate-800">{children}</td>,
    hr: () => <hr className="my-8 border-slate-800" />,
    strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
    em: ({ children }) => <em className="italic text-slate-300">{children}</em>,
  };

  return (
    <article className="py-12 bg-slate-950 text-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Button asChild variant="ghost" size="sm" className="text-blue-300 hover:text-blue-200 hover:bg-blue-500/10">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Voltar ao blog
            </Link>
          </Button>
        </div>

        {post.image_url && (
          <div className="aspect-video overflow-hidden rounded-lg mb-8">
            <Image
              src={post.image_url}
              alt={`Capa do artigo: ${post.title}`}
              width={800}
              height={450}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        )}

        <header className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-6 leading-tight">{post.title}</h1>
          <div className="flex items-center justify-between flex-wrap gap-4 text-slate-400">
            <div className="flex items-center flex-wrap gap-6">
              <time className="flex items-center gap-2" dateTime={post.published_at || post.created_at}>
                <Calendar className="h-5 w-5" aria-hidden="true" />
                {formatDate(post.published_at || post.created_at)}
              </time>
              <span className="flex items-center gap-2">
                <Clock className="h-5 w-5" aria-hidden="true" />
                {post.reading_time} min de leitura
              </span>
            </div>
            <ShareButton title={post.title} text={post.description || ''} />
          </div>
        </header>

        <div className="prose prose-lg prose-invert max-w-none">
          {post.description && (
            <p className="text-xl text-slate-300 mb-8 font-medium leading-relaxed">{post.description}</p>
          )}
          <div className="text-slate-300 leading-relaxed">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              components={markdownComponents}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>

        <aside className="mt-12 p-8 rounded-lg border border-blue-500/30 bg-blue-500/10" aria-label="Próximo passo">
          <h2 className="text-2xl font-bold text-white mb-4">Precisa de ajuda com seu projeto?</h2>
          <p className="text-slate-300 mb-6">
            Converse com a Mattos Tech Solutions sobre como aplicar essas ideias à realidade da sua empresa.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-500 hover:to-indigo-400">
            <Link href="/#contato">Falar com um especialista</Link>
          </Button>
        </aside>
      </div>
    </article>
  );
}
