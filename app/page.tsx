import type { Metadata } from 'next';
import HomeLanding from '@/components/home/HomeLanding';
import { getPublishedPosts } from '@/lib/blog';
import { createPageMetadata } from '@/lib/seo';

const homeDescription =
  'Empresa de tecnologia em São Paulo especializada em software sob medida, sites, automação, IA, cloud e DevOps para negócios em todo o Brasil.';

export const metadata: Metadata = {
  ...createPageMetadata({
    title: 'Empresa de Tecnologia em São Paulo',
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
  title: 'Empresa de Tecnologia em São Paulo | Mattos Tech Solutions',
};

export const revalidate = 3600;

export default async function Home() {
  const blogPosts = await getPublishedPosts(3);
  return <HomeLanding blogPosts={blogPosts} />;
}
