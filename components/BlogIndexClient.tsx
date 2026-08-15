'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, Home, Search } from 'lucide-react';
import type { BlogPost } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Reveal from '@/components/Reveal';

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogIndexClient({ posts }: { posts: BlogPost[] }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLocaleLowerCase('pt-BR');
    if (!normalizedSearch) return posts;

    return posts.filter((post) =>
      [post.title, post.description, ...post.tags]
        .filter(Boolean)
        .some((value) => value?.toLocaleLowerCase('pt-BR').includes(normalizedSearch)),
    );
  }, [posts, searchTerm]);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Blog Mattos Tech Solutions</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Conteúdo prático sobre software, Inteligência Artificial, cloud, automação e decisões de tecnologia para empresas.
          </p>
          <div className="mt-6">
            <Button asChild variant="outline" size="lg" className="border-blue-500 text-blue-300 hover:bg-blue-500/20 hover:text-blue-100">
              <Link href="/">
                <Home className="mr-2 h-5 w-5" aria-hidden="true" />
                Voltar ao início
              </Link>
            </Button>
          </div>
        </Reveal>

        {posts.length > 0 && (
          <Reveal className="max-w-2xl mx-auto mb-12" delay={120}>
            <label htmlFor="blog-search" className="sr-only">Buscar artigos</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 h-5 w-5" aria-hidden="true" />
              <Input
                id="blog-search"
                type="search"
                placeholder="Buscar por assunto..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="pl-10 py-3 bg-slate-900/70 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </Reveal>
        )}

        {filteredPosts.length === 0 ? (
          <p className="text-center py-12 text-slate-400 text-lg" role="status">
            {searchTerm ? 'Nenhum artigo corresponde à busca.' : 'Novos artigos serão publicados em breve.'}
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 motion-safe:hover:-translate-y-2 border border-slate-800 bg-slate-900/70 shadow-lg hover:shadow-blue-500/10 overflow-hidden">
                  {post.image_url && (
                    <Link href={`/blog/${post.slug}`} className="block aspect-video overflow-hidden">
                      <Image
                        src={post.image_url}
                        alt={`Capa do artigo: ${post.title}`}
                        width={400}
                        height={225}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                  )}
                  <CardHeader className="pb-4">
                    <h2 className="text-xl font-bold text-white mb-2 line-clamp-2">
                      <Link href={`/blog/${post.slug}`} className="hover:text-blue-300">{post.title}</Link>
                    </h2>
                    {post.description && <p className="text-slate-300 leading-relaxed line-clamp-3">{post.description}</p>}
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between gap-4 text-sm text-slate-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" aria-hidden="true" />
                        {post.reading_time} min
                      </span>
                      <time className="flex items-center gap-1" dateTime={post.published_at || post.created_at}>
                        <Calendar className="h-4 w-4" aria-hidden="true" />
                        {formatDate(post.published_at || post.created_at)}
                      </time>
                    </div>
                    <Link href={`/blog/${post.slug}`} className="text-sm font-medium text-blue-300 hover:text-blue-200">
                      Ler artigo <ArrowRight className="ml-1 inline h-4 w-4" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
