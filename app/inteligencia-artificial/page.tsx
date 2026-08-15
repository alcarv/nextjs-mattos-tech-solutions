import { Metadata } from 'next';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ServiceJsonLd from '@/components/ServiceJsonLd';
import BackToServices from '@/components/BackToServices';
import AIHero from '@/components/services/AIHero';
import AIExperience from '@/components/services/AIExperience';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Inteligência Artificial para Empresas',
  description: 'Aplicamos IA generativa a processos, documentos e atendimento com assistentes, RAG, automações, integrações e governança para operar com segurança.',
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
      />
      <Header />
      <AIHero />
      <BackToServices />
      <AIExperience />
      <Contact />
      <Footer />
    </main>
  );
}
