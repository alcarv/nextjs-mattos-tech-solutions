import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Página não encontrada',
  description: 'A página solicitada não foi encontrada.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Header />
      <main id="conteudo" className="mx-auto flex min-h-[70vh] max-w-4xl items-center px-4 pb-20 pt-32 sm:px-6">
        <div className="w-full rounded-3xl border border-slate-800 bg-slate-900/70 p-8 text-center shadow-2xl sm:p-14">
          <Search className="mx-auto h-12 w-12 text-blue-300" aria-hidden="true" />
          <p className="mt-6 text-sm font-semibold tracking-[0.2em] text-blue-300">ERRO 404</p>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Esta página não foi encontrada</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            O endereço pode ter sido digitado incorretamente. Acesse o portfólio para encontrar a solução de tecnologia adequada ao seu cenário.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/servicos" className="mts-button mts-button--primary">Ver todos os serviços</Link>
            <Link href="/" className="mts-button mts-button--outline">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Voltar ao início
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
