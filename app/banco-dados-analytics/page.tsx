import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Servicos from '@/components/Servicos';
import About from '@/components/About';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import DadosAnalyticsSection from '@/components/services/DadosAnalyticsSection';
import ServiceJsonLd from '@/components/ServiceJsonLd';
import BackToServices from '@/components/BackToServices';

export const metadata: Metadata = {
  title: 'Banco de Dados e Analytics - Mattos Tech Solutions',
  description:
    'Modelagem de dados, ETL/ELT, otimização de consultas, BI e dashboards. Transforme dados em decisões com arquitetura eficiente.',
  keywords:
    'banco de dados, analytics, BI, ETL, ELT, modelagem de dados, otimização de queries, dashboards',
  alternates: { canonical: '/banco-dados-analytics' },
  openGraph: {
    title: 'Banco de Dados e Analytics',
    description:
      'Arquitetura de dados, pipelines e BI para decisões baseadas em dados.',
    url: 'https://mattostechsolutions.com.br/banco-dados-analytics',
    type: 'website',
  },
};

export default function BancoDadosAnalyticsPage() {
  return (
    <main className="min-h-screen">
      <ServiceJsonLd
        name="Banco de Dados e Analytics"
        description="Modelagem de dados, pipelines ETL/ELT, tuning de performance e BI com dashboards e KPIs."
        url="https://mattostechsolutions.com.br/banco-dados-analytics"
        serviceType="Dados e Analytics"
      />
      <Header />
      <Hero />
      <BackToServices />
      <DadosAnalyticsSection />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
