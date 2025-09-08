import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog – Insights e Tendências',
  description:
    'Artigos sobre tecnologia, desenvolvimento e transformação digital pela Mattos Tech Solutions.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog – Insights e Tendências',
    description:
      'Artigos sobre tecnologia, desenvolvimento e transformação digital pela Mattos Tech Solutions.',
    url: 'https://mattostechsolutions.com/blog',
    type: 'website',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

