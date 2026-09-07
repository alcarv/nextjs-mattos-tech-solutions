import type { Metadata } from 'next';
import HomeLanding from '@/components/home/HomeLanding';
import { getPublishedPosts } from '@/lib/blog';
import { createPageMetadata } from '@/lib/seo';

const homeDescription =
  'Criação de sites, software sob medida e automação para gerar oportunidades e reduzir trabalho manual. Entenda entregas e investimento com a Mattos Tech Solutions.';

export const metadata: Metadata = {
  ...createPageMetadata({
    title: 'Sites, Software e Automação em São Paulo',
    description: homeDescription,
    path: '/',
    keywords: [
      'desenvolvimento de software sob medida',
      'criação de sites profissionais',
      'automação empresarial',
      'inteligência artificial para empresas',
      'consultoria cloud e DevOps',
    ],
  }),
  title: 'Sites, Software e Automação em São Paulo | Mattos Tech Solutions',
};

export const revalidate = 3600;

export default async function Home() {
  const blogPosts = await getPublishedPosts(3);
  return <HomeLanding blogPosts={blogPosts} />;
}
