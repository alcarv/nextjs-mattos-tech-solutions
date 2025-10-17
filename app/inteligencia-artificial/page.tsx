import { Metadata } from 'next';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ServiceJsonLd from '@/components/ServiceJsonLd';
import BackToServices from '@/components/BackToServices';
import AIHero from '@/components/services/AIHero';
import AISection from '@/components/services/AISection';
import AIUseCases from '@/components/services/AIUseCases';
import AITechStack from '@/components/services/AITechStack';
import AIEnablement from '@/components/services/AIEnablement';
import AIFAQ from '@/components/services/AIFAQ';

export const metadata: Metadata = {
  title: 'Inteligência Artificial – Integrações, Automação e Treinamentos - Mattos Tech Solutions',
  description:
    'Integramos IA generativa aos seus processos, criamos chatbots e automações, implementamos RAG/LLMs e capacitamos sua equipe com treinamentos práticos.',
  keywords:
    'inteligência artificial, IA, automação, chatbots, integrações IA, modelos, LLM, RAG, agentes, treinamento IA',
  alternates: { canonical: '/inteligencia-artificial' },
  openGraph: {
    title: 'Inteligência Artificial – Integrações, Automação e Treinamentos',
    description:
      'Integramos IA generativa aos seus processos, criamos chatbots e automações, implementamos RAG/LLMs e capacitamos sua equipe com treinamentos práticos.',
    url: 'https://mattostechsolutions.com.br/inteligencia-artificial',
    type: 'website',
  },
};

export default function InteligenciaArtificialPage() {
  return (
    <main className="min-h-screen">
      <ServiceJsonLd
        name="Inteligência Artificial – Integrações e Treinamentos"
        description="Integramos IA generativa, criamos chatbots e automações, implementamos RAG/LLMs e capacitamos sua equipe."
        url="https://mattostechsolutions.com.br/inteligencia-artificial"
        serviceType="Inteligência Artificial"
      />
      <Header />
      <AIHero />
      <BackToServices />
      <AISection />
      <AIUseCases />
      <AITechStack />
      <AIEnablement />
      <AIFAQ />
      <Contact />
      <Footer />
    </main>
  );
}
