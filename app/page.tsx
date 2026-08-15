import type { Metadata } from 'next';
import HomeLanding from '@/components/home/HomeLanding';
import { getPublishedPosts } from '@/lib/blog';
import { createPageMetadata } from '@/lib/seo';

const homeDescription =
  'Software sob medida, sites, automação, IA, cloud e DevOps para conectar processos, reduzir trabalho manual e fazer sua empresa crescer com segurança.';

export const metadata: Metadata = {
  ...createPageMetadata({
    title: 'Software sob medida, IA e automação para empresas',
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
  title: 'Software sob medida, IA e automação | Mattos Tech Solutions',
};

export const revalidate = 3600;

export default async function Home() {
  const blogPosts = await getPublishedPosts(3);
  return <HomeLanding blogPosts={blogPosts} />;
}
