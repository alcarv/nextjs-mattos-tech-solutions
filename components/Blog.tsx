'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { supabase, type BlogPost } from '@/lib/supabase';
import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    // Check if Supabase is configured
    if (!supabase) {
      setError('Supabase não está configurado. Configure suas credenciais no arquivo .env.local');
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase!
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false })
        .limit(6);

      if (error) throw error;
      setBlogPosts(data || []);
    } catch (err) {
      setError(`Erro ao carregar posts do blog: ${err instanceof Error ? err.message : 'Erro desconhecido'}`);
      console.error('Error fetching blog posts:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <section id="blog" className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Blog e Insights
            </h2>
            <p className="text-xl text-slate-400">
              Carregando artigos...
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="blog" className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Blog e Insights
            </h2>
            <p className="text-xl text-rose-400">
              {error}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Blog e Insights
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Fique por dentro das últimas tendências em tecnologia, dicas de desenvolvimento 
            e insights sobre transformação digital.
          </p>
        </Reveal>

        {blogPosts.length === 0 ? (
          <Reveal className="text-center py-12">
            <p className="text-slate-400 text-lg">
              Nenhum post encontrado. Em breve teremos conteúdo incrível para você!
            </p>
          </Reveal>
        ) : (
          <>
            <Reveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {blogPosts.map((post) => (
                <Card
                  key={post.id}
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-800 bg-slate-900/70 shadow-lg overflow-hidden"
                >
                  {post.image_url && (
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={post.image_url}
                        alt={post.title}
                        width={400}
                        height={225}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <CardHeader className="pb-4">
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>5 min</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-sm text-slate-400">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(post.created_at)}</span>
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <Button variant="ghost" size="sm" className="text-blue-300 hover:text-blue-200">
                          Ler mais
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </Reveal>

            <Reveal className="text-center" delay={150}>
              <Link href="/blog">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-500 text-blue-300 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-blue-500/20 hover:text-blue-100"
                >
                  Ver Todos os Posts
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </Reveal>
          </>
        )}
      </div>
    </section>
  );
}
