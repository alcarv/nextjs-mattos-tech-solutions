import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToServices from '@/components/BackToServices';
import RelatedServices from '@/components/RelatedServices';
import ServiceJsonLd from '@/components/ServiceJsonLd';
import EcommerceSection from '@/components/services/EcommerceSection';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Desenvolvimento de E-commerce e Loja Virtual',
  description: 'Desenvolvemos lojas virtuais integradas a pagamentos, catálogo, estoque e operação, com experiência responsiva, performance e base para crescer.',
  path: '/solucoes-ecommerce',
  keywords: ['desenvolvimento de loja virtual', 'criação de e-commerce', 'integração de pagamentos', 'plataforma de vendas online'],
});

export default function SolucoesEcommercePage() {
  return (
    <main className="mts-service-page min-h-screen">
      <ServiceJsonLd
        name="Desenvolvimento de Loja Virtual"
        description="Lojas virtuais integradas a pagamentos, catálogo, estoque e processos de venda, com performance e design responsivo."
        url="/solucoes-ecommerce"
        serviceType="Desenvolvimento de E-commerce"
      />
      <Header />
      <Hero />
      <BackToServices current="Desenvolvimento de e-commerce" />
      <EcommerceSection />
      <About />
      <Blog />
      <RelatedServices currentPath="/solucoes-ecommerce" />
      <Contact />
      <Footer />
    </main>
  );
}
