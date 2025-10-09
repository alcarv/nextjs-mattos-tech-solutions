'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, Clock, Search, ArrowRight, Home } from 'lucide-react';
import { supabase, type BlogPost } from '@/lib/supabase';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Reveal from '@/components/Reveal';

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [allTags, setAllTags] = useState<string[]>([]);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  useEffect(() => {
    filterPosts();
  }, [blogPosts, searchTerm, selectedTag]);

  const fetchBlogPosts = async () => {
    try {
      if (!supabase) {
        console.error('Supabase client not initialized');
        return;
      }
      
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      setBlogPosts(data || []);
      
    } catch (err) {
      console.error('Error fetching blog posts:', err);
    } finally {
      setLoading(false);
    }
  };

  const filterPosts = () => {
    let filtered = blogPosts;

    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (post.description && post.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }


    setFilteredPosts(filtered);
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
      <div className="min-h-screen bg-slate-950 text-slate-200">
        <Header />
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xl text-slate-400">Carregando posts...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Header />
      
      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">
              Blog Mattos Tech Solutions
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Insights, tendências e conhecimento sobre tecnologia, desenvolvimento e transformação digital.
            </p>
            <div className="mt-6">
              <Link href="/">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-500 text-blue-300 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-blue-500/20 hover:text-blue-100"
                >
                  <Home className="mr-2 h-5 w-5" />
                  Voltar ao Início
                </Button>
              </Link>
            </div>
          </Reveal>

          {/* Search and Filter */}
          <Reveal className="mb-12" delay={120}>
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Buscar posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 py-3 bg-slate-900/70 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

          </Reveal>

          {/* Blog Posts Grid */}
          {filteredPosts.length === 0 ? (
            <Reveal className="text-center py-12" delay={200}>
              <p className="text-slate-400 text-lg">
                {searchTerm || selectedTag 
                  ? 'Nenhum post encontrado com os filtros aplicados.' 
                  : 'Nenhum post encontrado.'}
              </p>
            </Reveal>
          ) : (
            <Reveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="hover:shadow-xl transition-all duration-300 motion-safe:hover:-translate-y-2 motion-safe:hover:scale-[1.01] border border-slate-800 bg-slate-900/70 shadow-lg hover:shadow-blue-500/10 overflow-hidden"
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
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-blue-300 transition-transform duration-200 hover:-translate-y-0.5 hover:text-blue-200 hover:bg-blue-500/10"
                        >
                          Ler mais
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </Reveal>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
