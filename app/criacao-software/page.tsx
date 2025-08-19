import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Servicos from '@/components/Servicos';
import About from '@/components/About';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Desenvolvimento de Software Personalizado - Mattos Tech Solutions',
  description: 'Criamos software sob medida para sua empresa. Sistemas personalizados, APIs, automação de processos e soluções escaláveis.',
  keywords: 'desenvolvimento software, sistemas personalizados, APIs, automação, software sob medida, desenvolvimento personalizado',
  openGraph: {
    title: 'Desenvolvimento de Software Personalizado - Mattos Tech Solutions',
    description: 'Criamos software sob medida para sua empresa. Sistemas personalizados, APIs, automação de processos e soluções escaláveis.',
    url: 'https://mattostechsolutions.com/criacao-software',
  },
};

export default function CriacaoSoftwarePage() {
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