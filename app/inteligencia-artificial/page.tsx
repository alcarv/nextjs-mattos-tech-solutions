import { Metadata } from 'next';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ServiceJsonLd from '@/components/ServiceJsonLd';
import BackToServices from '@/components/BackToServices';
import RelatedServices from '@/components/RelatedServices';
import AIHero from '@/components/services/AIHero';
import AIExperience from '@/components/services/AIExperience';
import { createPageMetadata } from '@/lib/seo';
import { aiExperienceFaqItems } from '@/lib/service-faqs';

export const metadata: Metadata = createPageMetadata({
  title: 'Consultoria de IA para Empresas',
  description: 'Consultoria de IA para empresas com assistentes, RAG e automações conectados a processos e dados, com integração, avaliação, segurança e governança.',
  path: '/inteligencia-artificial',
  keywords: ['inteligência artificial para empresas', 'IA generativa', 'RAG', 'assistentes com IA', 'automação com IA'],
});

export default function InteligenciaArtificialPage() {
  return (
    <main className="mts-service-page min-h-screen">
      <ServiceJsonLd
        name="Inteligência Artificial – Integrações e Treinamentos"
        description="Integramos IA generativa, criamos chatbots e automações, implementamos RAG/LLMs e capacitamos sua equipe."
        url="/inteligencia-artificial"
        serviceType="Inteligência Artificial"
        faqs={aiExperienceFaqItems}
      />
      <Header />
      <AIHero />
      <BackToServices current="Inteligência Artificial para empresas" />
      <AIExperience />
      <RelatedServices currentPath="/inteligencia-artificial" />
      <Contact />
      <Footer />
    </main>
  );
}
