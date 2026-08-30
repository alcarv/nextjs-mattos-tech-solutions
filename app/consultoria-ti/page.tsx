import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ConsultoriaTISection from '@/components/services/ConsultoriaTISection';
import ServiceJsonLd from '@/components/ServiceJsonLd';
import BackToServices from '@/components/BackToServices';
import RelatedServices from '@/components/RelatedServices';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Consultoria de TI em São Paulo',
  description: 'Consultoria de TI em São Paulo para diagnosticar tecnologia, reduzir riscos e custos e construir um roadmap alinhado aos objetivos do negócio.',
  path: '/consultoria-ti',
  keywords: ['consultoria em TI', 'planejamento estratégico de TI', 'roadmap de tecnologia', 'infraestrutura de TI'],
});

export default function ConsultoriaTIPage() {
  return (
    <main className="mts-service-page min-h-screen">
      <ServiceJsonLd
        name="Consultoria em TI e Planejamento Estratégico"
        description="Alinhamento estratégico, roadmap e governança para executar projetos de TI com foco em resultados e redução de custos."
        url="/consultoria-ti"
        serviceType="Consultoria em TI"
      />
      <Header />
      <Hero />
      <BackToServices current="Consultoria de TI" />
      <ConsultoriaTISection />
      <About />
      <Blog />
      <RelatedServices currentPath="/consultoria-ti" />
      <Contact />
      <Footer />
    </main>
  );
}
