import type { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Servicos from '@/components/Servicos';
import LocalPresence from '@/components/LocalPresence';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

const homeDescription =
  'Consultoria de TI, desenvolvimento de software, IA e sites profissionais a partir de São Paulo (SP), na região do Tatuapé, para empresas em Sorocaba, Campinas, capital paulista e em todo o Brasil.';

export const metadata: Metadata = {
  title: 'Consultoria de TI e Desenvolvimento em São Paulo (Tatuapé) e todo o Brasil',
  description: homeDescription,
  keywords: [
    'consultoria ti São Paulo Tatuapé',
    'desenvolvimento de software Sorocaba',
    'empresa de tecnologia na Zona Leste de São Paulo',
    'serviços de TI São Paulo',
    'criação de sites profissionais em São Paulo',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Consultoria de TI e Desenvolvimento em São Paulo (Tatuapé) - Mattos Tech Solutions',
    description: homeDescription,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <LocalPresence />
      <Servicos />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
