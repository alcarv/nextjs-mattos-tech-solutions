import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Servicos from '@/components/Servicos';
import About from '@/components/About';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Consultoria em TI e Planejamento Estratégico - Mattos Tech Solutions',
  description: 'Consultoria especializada em TI para otimizar sua infraestrutura, reduzir custos e impulsionar o crescimento do seu negócio.',
  keywords: 'consultoria TI, planejamento estratégico, infraestrutura TI, otimização processos, consultoria tecnológica',
  openGraph: {
    title: 'Consultoria em TI e Planejamento Estratégico - Mattos Tech Solutions',
    description: 'Consultoria especializada em TI para otimizar sua infraestrutura, reduzir custos e impulsionar o crescimento do seu negócio.',
    url: 'https://mattostechsolutions.com/consultoria-ti',
  },
};

export default function ConsultoriaTIPage() {
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