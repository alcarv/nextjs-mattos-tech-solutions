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
  title: 'Desenvolvimento de Aplicativos em São Paulo',
  description: 'Desenvolvemos aplicativos para iOS e Android, nativos ou multiplataforma, com integrações, boa experiência de uso e evolução contínua.',
  path: '/apps-mobile',
  keywords: ['desenvolvimento de aplicativos', 'apps iOS e Android', 'React Native', 'Flutter'],
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
      <MobileSection />
      <About />
      <Blog />
      <RelatedServices currentPath="/apps-mobile" />
      <Contact />
      <Footer />
    </main>
  );
}
