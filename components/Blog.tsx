import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { getPublishedPosts } from '@/lib/blog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Reveal from '@/components/Reveal';

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function Blog() {
  const blogPosts = await getPublishedPosts(6);

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Blog e Insights</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Conteúdo prático sobre tecnologia, desenvolvimento, Inteligência Artificial e transformação digital.
          </p>
        </Reveal>

        {blogPosts.length === 0 ? (
          <Reveal className="text-center py-12">
            <p className="text-slate-400 text-lg">Novos artigos serão publicados em breve.</p>
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
                    <Link href={`/blog/${post.slug}`} className="block aspect-video overflow-hidden">
                      <Image
                        src={post.image_url}
                        alt=""
                        width={400}
                        height={225}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                  )}
                  <CardHeader className="pb-4">
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                      <Link href={`/blog/${post.slug}`} className="hover:text-blue-300">
                        {post.title}
                      </Link>
                    </h3>
                    {post.description && (
                      <p className="text-slate-300 leading-relaxed line-clamp-3">{post.description}</p>
                    )}
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" aria-hidden="true" />
                        {post.reading_time} min
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" aria-hidden="true" />
                        {formatDate(post.published_at || post.created_at)}
                      </span>
                    </div>
                    <Link href={`/blog/${post.slug}`} className="text-sm font-medium text-blue-300 hover:text-blue-200">
                      Ler artigo <ArrowRight className="ml-1 inline h-4 w-4" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </Reveal>

            <Reveal className="text-center" delay={150}>
              <Button asChild size="lg" variant="outline" className="border-blue-500 text-blue-300 hover:bg-blue-500/20 hover:text-blue-100">
                <Link href="/blog">
                  Ver todos os artigos <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </Reveal>
          </>
        )}
      </div>
    </section>
  );
}
