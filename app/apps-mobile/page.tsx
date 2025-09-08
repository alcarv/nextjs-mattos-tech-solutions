import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Servicos from '@/components/Servicos';
import About from '@/components/About';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MobileSection from '@/components/services/MobileSection';
import ServiceJsonLd from '@/components/ServiceJsonLd';
import BackToServices from '@/components/BackToServices';

export const metadata: Metadata = {
  title: 'Desenvolvimento de Apps Mobile - iOS e Android - Mattos Tech Solutions',
  description: 'Criamos aplicativos móveis nativos e híbridos para iOS e Android. Apps com design moderno e performance excepcional.',
  keywords: 'desenvolvimento mobile, apps iOS, apps Android, aplicativos móveis, React Native, Flutter, desenvolvimento app',
  alternates: { canonical: '/apps-mobile' },
  openGraph: {
    title: 'Desenvolvimento de Apps Mobile - iOS e Android - Mattos Tech Solutions',
    description: 'Criamos aplicativos móveis nativos e híbridos para iOS e Android. Apps com design moderno e performance excepcional.',
    url: 'https://mattostechsolutions.com/apps-mobile',
  },
};

export default function AppsMobilePage() {
  return (
    <main className="min-h-screen">
      <ServiceJsonLd
        name="Desenvolvimento de Apps Mobile"
        description="Aplicativos iOS/Android (nativo ou cross‑platform) com push, offline first, integrações e publicação nas lojas."
        url="https://mattostechsolutions.com/apps-mobile"
        serviceType="Desenvolvimento Mobile"
      />
      <Header />
      <Hero />
      <BackToServices />
      <MobileSection />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
