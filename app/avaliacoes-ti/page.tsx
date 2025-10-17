import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Servicos from '@/components/Servicos';
import About from '@/components/About';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AvaliacoesSection from '@/components/services/AvaliacoesSection';
import ServiceJsonLd from '@/components/ServiceJsonLd';
import BackToServices from '@/components/BackToServices';

export const metadata: Metadata = {
  title: 'Avaliações de TI - Diagnóstico e Roadmap - Mattos Tech Solutions',
  description:
    'Avaliamos infraestrutura, segurança e aplicações para identificar riscos e oportunidades, entregando um roadmap claro de melhorias.',
  keywords:
    'avaliação de TI, diagnóstico de TI, auditoria de TI, segurança, infraestrutura, roadmap de TI',
  alternates: { canonical: '/avaliacoes-ti' },
  openGraph: {
    title: 'Avaliações de TI – Diagnóstico e Roadmap',
    description:
      'Diagnósticos completos para priorizar melhorias em infraestrutura, segurança e aplicações.',
    url: 'https://mattostechsolutions.com.br/avaliacoes-ti',
    type: 'website',
  },
};

export default function AvaliacoesTIPage() {
  return (
    <main className="min-h-screen">
      <ServiceJsonLd
        name="Avaliações de TI"
        description="Diagnóstico de segurança, infraestrutura e aplicações com relatório de achados e roadmap de melhorias."
        url="https://mattostechsolutions.com.br/avaliacoes-ti"
        serviceType="Avaliações de TI"
      />
      <Header />
      <Hero />
      <BackToServices />
      <AvaliacoesSection />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
