import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, CalendarDays, Newspaper } from 'lucide-react';
import type { BlogPost } from '@/lib/supabase';

function formatDate(date: string) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(date));
}

export default function HomeBlog({ posts }: { posts: BlogPost[] }) {
  return (
    <section id="blog" className="mts-blog" aria-labelledby="home-blog-title">
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

        {posts.length > 0 ? (
          <div className="mts-blog__cards">
            {posts.map((post, index) => (
              <article key={post.id} className="mts-blog-card">
                <Link href={`/blog/${post.slug}`} className="mts-blog-card__media">
                  {post.image_url ? (
                    <Image src={post.image_url} alt={`Capa do artigo: ${post.title}`} fill sizes="(max-width: 900px) 100vw, 33vw" />
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
          <div className="mts-blog__empty" role="status">
            <Newspaper aria-hidden="true" />
            <div>
              <h3>Novos artigos estão a caminho.</h3>
              <p>Enquanto isso, explore nossas soluções e veja como aplicamos tecnologia em cenários reais.</p>
            </div>
            <Link href="/blog">Ir para o blog <ArrowRight /></Link>
          </div>
        )}
      </div>
    </section>
  );
}
