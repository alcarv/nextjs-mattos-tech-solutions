import type { Metadata } from 'next';
import ScrollProgress from '@/components/ScrollProgress';

export const metadata: Metadata = {
  title: 'Blog – Insights e Tendências',
  description:
    'Artigos sobre tecnologia, desenvolvimento e transformação digital pela Mattos Tech Solutions.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog – Insights e Tendências',
    description:
      'Artigos sobre tecnologia, desenvolvimento e transformação digital pela Mattos Tech Solutions.',
    url: 'https://mattostechsolutions.com.br/blog',
    type: 'website',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ScrollProgress />
      {children}
    </>
  );
}
