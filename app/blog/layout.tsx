import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Blog de Tecnologia para Empresas',
  description:
    'Artigos práticos sobre software, Inteligência Artificial, cloud, automação e decisões de tecnologia para empresas.',
  path: '/blog',
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
