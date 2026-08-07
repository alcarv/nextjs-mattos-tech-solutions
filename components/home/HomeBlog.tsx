'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, CalendarDays, Newspaper } from 'lucide-react';
import { supabase, type BlogPost } from '@/lib/supabase';

type BlogState = {
  posts: BlogPost[];
  loading: boolean;
  unavailable: boolean;
};

const initialState: BlogState = { posts: [], loading: true, unavailable: false };

function formatDate(date: string) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(date));
}

export default function HomeBlog() {
  const [state, setState] = useState<BlogState>(initialState);

  useEffect(() => {
    let active = true;

    async function loadPosts() {
      if (!supabase) {
        if (active) setState({ posts: [], loading: false, unavailable: true });
        return;
      }

      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('published', true)
          .order('created_at', { ascending: false })
          .limit(3);

        if (!active) return;
        setState({ posts: data ?? [], loading: false, unavailable: Boolean(error) });
      } catch {
        if (active) setState({ posts: [], loading: false, unavailable: true });
      }
    }

    void loadPosts();
    return () => {
      active = false;
    };
  }, []);

  return (
    <section id="blog" className="mts-blog" aria-labelledby="home-blog-title" aria-busy={state.loading}>
      <div className="mts-blog__grid" aria-hidden="true" />
      <div className="mts-container">
        <div className="mts-blog__header reveal-on-scroll">
          <div>
            <span className="mts-section-number">06 / IDEIAS EM MOVIMENTO</span>
            <h2 id="home-blog-title">Tecnologia explicada<br />com <em>contexto.</em></h2>
          </div>
          <div className="mts-blog__intro">
            <p>Leituras sobre produto, engenharia, Inteligência Artificial e decisões que transformam tecnologia em operação.</p>
            <Link href="/blog">Explorar todos os artigos <ArrowUpRight aria-hidden="true" /></Link>
          </div>
        </div>

        {state.loading ? (
          <div className="mts-blog__cards" aria-label="Carregando artigos">
            {[0, 1, 2].map((item) => <div key={item} className="mts-blog-card mts-blog-card--skeleton" aria-hidden="true" />)}
          </div>
        ) : state.posts.length > 0 ? (
          <div className="mts-blog__cards">
            {state.posts.map((post, index) => (
              <article key={post.id} className="mts-blog-card">
                <Link href={`/blog/${post.slug}`} className="mts-blog-card__media" tabIndex={-1} aria-hidden="true">
                  {post.image_url ? (
                    <Image src={post.image_url} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" />
                  ) : (
                    <span><Newspaper /></span>
                  )}
                  <i>0{index + 1}</i>
                </Link>
                <div className="mts-blog-card__body">
                  <span className="mts-blog-card__date"><CalendarDays /> {formatDate(post.published_at || post.created_at)}</span>
                  <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
                  {post.description && <p>{post.description}</p>}
                  <Link className="mts-blog-card__link" href={`/blog/${post.slug}`}>Ler artigo <ArrowRight /></Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mts-blog__empty" role={state.unavailable ? 'alert' : 'status'}>
            <Newspaper aria-hidden="true" />
            <div>
              <h3>{state.unavailable ? 'Não foi possível carregar os artigos agora.' : 'Novos artigos estão a caminho.'}</h3>
              <p>{state.unavailable ? 'A página completa do blog continua disponível e a conexão pode ser tentada novamente por lá.' : 'Enquanto isso, explore nossas soluções e veja como aplicamos tecnologia em cenários reais.'}</p>
            </div>
            <Link href="/blog">Ir para o blog <ArrowRight /></Link>
          </div>
        )}
      </div>
    </section>
  );
}
