import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import DadosAnalyticsSection from '@/components/services/DadosAnalyticsSection';
import ServiceJsonLd from '@/components/ServiceJsonLd';
import BackToServices from '@/components/BackToServices';
import RelatedServices from '@/components/RelatedServices';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Consultoria em Dados, BI e Analytics',
  description: 'Modelagem de dados, pipelines ETL/ELT, otimização de consultas, BI e dashboards para transformar dados confiáveis em decisões.',
  path: '/banco-dados-analytics',
  keywords: ['consultoria em banco de dados', 'BI e analytics', 'ETL e ELT', 'dashboards empresariais'],
});

export default function BancoDadosAnalyticsPage() {
  return (
    <main className="mts-service-page min-h-screen">
      <ServiceJsonLd
        name="Banco de Dados e Analytics"
        description="Modelagem de dados, pipelines ETL/ELT, tuning de performance e BI com dashboards e KPIs."
        url="/banco-dados-analytics"
        serviceType="Dados e Analytics"
      />
      <Header />
      <Hero />
      <BackToServices current="Dados, BI e analytics" />
      <DadosAnalyticsSection />
      <About />
      <Blog />
      <RelatedServices currentPath="/banco-dados-analytics" />
      <Contact />
      <Footer />
    </main>
  );
}
