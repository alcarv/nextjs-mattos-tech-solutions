import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Servicos from '@/components/Servicos';
import About from '@/components/About';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToServices from '@/components/BackToServices';

export const metadata: Metadata = {
  title: 'Soluções E-commerce Completas - Loja Virtual Profissional - Mattos Tech Solutions',
  description: 'Desenvolvemos lojas virtuais completas e personalizadas. E-commerce com integração de pagamentos, gestão de estoque e design responsivo.',
  keywords: 'e-commerce, loja virtual, desenvolvimento e-commerce, loja online, comércio eletrônico, plataforma vendas',
  alternates: { canonical: '/solucoes-ecommerce' },
  openGraph: {
    title: 'Soluções E-commerce Completas - Loja Virtual Profissional - Mattos Tech Solutions',
    description: 'Desenvolvemos lojas virtuais completas e personalizadas. E-commerce com integração de pagamentos, gestão de estoque e design responsivo.',
    url: 'https://mattostechsolutions.com.br/solucoes-ecommerce',
  },
};

export default function SolucoesEcommercePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <BackToServices />
      <Servicos />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
