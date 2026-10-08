import ServiceValue from '@/components/services/ServiceValue';
import ProjectScope from '@/components/services/ProjectScope';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MobileSection from '@/components/services/MobileSection';
import ServiceJsonLd from '@/components/ServiceJsonLd';
import BackToServices from '@/components/BackToServices';
import RelatedServices from '@/components/RelatedServices';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Desenvolvimento de Aplicativos para Empresas',
  description: 'Aplicativos para empresas: iOS e Android, integrações e uso em campo. Avalie escopo, distribuição e investimento. São Paulo e atendimento em todo o Brasil.',
  path: '/apps-mobile',
  keywords: ['desenvolvimento de aplicativos para empresas', 'aplicativo corporativo', 'apps iOS e Android', 'React Native', 'Flutter'],
});

export default function AppsMobilePage() {
  return (
    <main className="mts-service-page min-h-screen">
      <ServiceJsonLd
        name="Desenvolvimento de Apps Mobile"
        description="Aplicativos iOS/Android (nativo ou cross‑platform) com push, offline first, integrações e publicação nas lojas."
        url="/apps-mobile"
        serviceType="Desenvolvimento Mobile"
      />
      <Header />
      <Hero />
      <BackToServices current="Desenvolvimento de aplicativos" />
      <ServiceValue path="/apps-mobile" />
      <ProjectScope path="/apps-mobile" />
      <MobileSection />
      <About />
      <Blog />
      <RelatedServices currentPath="/apps-mobile" />
      <Contact />
      <Footer />
    </main>
  );
}
