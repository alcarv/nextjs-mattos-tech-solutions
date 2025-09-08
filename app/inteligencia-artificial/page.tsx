import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Servicos from '@/components/Servicos';
import About from '@/components/About';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AISection from '@/components/services/AISection';
import ServiceJsonLd from '@/components/ServiceJsonLd';
import BackToServices from '@/components/BackToServices';

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
    url: 'https://mattostechsolutions.com/inteligencia-artificial',
    type: 'website',
  },
};

export default function InteligenciaArtificialPage() {
  return (
    <main className="min-h-screen">
      <ServiceJsonLd
        name="Inteligência Artificial – Integrações e Treinamentos"
        description="Integramos IA generativa, criamos chatbots e automações, implementamos RAG/LLMs e capacitamos sua equipe."
        url="https://mattostechsolutions.com/inteligencia-artificial"
        serviceType="Inteligência Artificial"
      />
      <Header />
      <Hero />
      <BackToServices />
      <AISection />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
