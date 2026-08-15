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
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Assessment e Avaliação de TI',
  description: 'Diagnóstico de infraestrutura, segurança e aplicações para identificar riscos, priorizar melhorias e construir um roadmap de TI executável.',
  path: '/avaliacoes-ti',
  keywords: ['assessment de TI', 'avaliação de TI', 'diagnóstico de TI', 'roadmap de TI'],
});

export default function AvaliacoesTIPage() {
  return (
    <main className="mts-service-page min-h-screen">
      <ServiceJsonLd
        name="Avaliações de TI"
        description="Diagnóstico de segurança, infraestrutura e aplicações com relatório de achados e roadmap de melhorias."
        url="/avaliacoes-ti"
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
