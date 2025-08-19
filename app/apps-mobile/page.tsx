import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Servicos from '@/components/Servicos';
import About from '@/components/About';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Desenvolvimento de Apps Mobile - iOS e Android - Mattos Tech Solutions',
  description: 'Criamos aplicativos móveis nativos e híbridos para iOS e Android. Apps com design moderno e performance excepcional.',
  keywords: 'desenvolvimento mobile, apps iOS, apps Android, aplicativos móveis, React Native, Flutter, desenvolvimento app',
  openGraph: {
    title: 'Desenvolvimento de Apps Mobile - iOS e Android - Mattos Tech Solutions',
    description: 'Criamos aplicativos móveis nativos e híbridos para iOS e Android. Apps com design moderno e performance excepcional.',
    url: 'https://mattostechsolutions.com/apps-mobile',
  },
};

export default function AppsMobilePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Servicos />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}