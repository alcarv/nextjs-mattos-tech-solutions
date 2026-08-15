import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Servicos from '@/components/Servicos';
import About from '@/components/About';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CloudMigrationSection from '@/components/services/CloudMigrationSection';
import ServiceJsonLd from '@/components/ServiceJsonLd';
import BackToServices from '@/components/BackToServices';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Migração para Nuvem e Cloud',
  description: 'Planejamos e executamos migrações para AWS, Azure ou Google Cloud com foco em continuidade, segurança, performance, observabilidade e custos.',
  path: '/migracao-cloud',
  keywords: ['migração para nuvem', 'consultoria cloud', 'AWS', 'Azure', 'Google Cloud', 'FinOps'],
});

export default function MigracaoCloudPage() {
  return (
    <main className="mts-service-page min-h-screen">
      <ServiceJsonLd
        name="Migração para Nuvem"
        description="Assessment, planejamento e execução de migração para AWS, Azure ou GCP com foco em performance, segurança e FinOps."
        url="/migracao-cloud"
        serviceType="Migração para Nuvem"
      />
      <Header />
      <Hero />
      <BackToServices />
      <CloudMigrationSection />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
