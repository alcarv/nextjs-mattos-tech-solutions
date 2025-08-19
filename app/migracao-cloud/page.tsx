import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Servicos from '@/components/Servicos';
import About from '@/components/About';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Migração para Nuvem - AWS, Azure, Google Cloud - Mattos Tech Solutions',
  description: 'Migração segura e eficiente para a nuvem. Reduzimos custos, aumentamos a escalabilidade e modernizamos sua infraestrutura.',
  keywords: 'migração nuvem, AWS, Azure, Google Cloud, cloud computing, infraestrutura nuvem, migração cloud',
  openGraph: {
    title: 'Migração para Nuvem - AWS, Azure, Google Cloud - Mattos Tech Solutions',
    description: 'Migração segura e eficiente para a nuvem. Reduzimos custos, aumentamos a escalabilidade e modernizamos sua infraestrutura.',
    url: 'https://mattostechsolutions.com/migracao-cloud',
  },
};

export default function MigracaoCloudPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Servicos />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}