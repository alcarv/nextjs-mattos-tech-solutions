import Link from 'next/link';
import { CheckCircle, CreditCard, Link2, PackageCheck, ShoppingCart } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const capabilities = [
  {
    icon: ShoppingCart,
    title: 'Catálogo e jornada de compra',
    description: 'Categorias, busca, carrinho e checkout desenhados para facilitar a decisão e reduzir abandono.',
  },
  {
    icon: CreditCard,
    title: 'Pagamentos e antifraude',
    description: 'Integração com gateways, Pix, cartões, conciliação e regras de segurança adequadas à operação.',
  },
  {
    icon: PackageCheck,
    title: 'Estoque e pedidos',
    description: 'Fluxos de pedido, disponibilidade, frete, rastreio, trocas e comunicação com o cliente.',
  },
  {
    icon: Link2,
    title: 'ERP, CRM e marketplaces',
    description: 'APIs e integrações para manter produtos, clientes, preços e pedidos sincronizados.',
  },
];

const stages = [
  { title: 'Diagnóstico', description: 'Modelo de venda, catálogo, público, operação e metas.' },
  { title: 'Experiência', description: 'Arquitetura, conteúdo, protótipo e jornada de conversão.' },
  { title: 'Implementação', description: 'Plataforma, integrações, pagamentos, testes e analytics.' },
  { title: 'Evolução', description: 'Monitoramento, SEO, performance e melhoria da conversão.' },
];

export default function EcommerceSection() {
  return (
    <section id="detalhes-servico" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-x-0 top-1/3 -z-10 h-52 bg-blue-600/20 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl backdrop-blur sm:p-10">
          <div className="text-center mb-12">
            <span className="inline-flex items-center rounded-full bg-blue-600/20 px-4 py-1 text-sm font-semibold text-blue-300">
              Venda online conectada à operação
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Desenvolvimento de loja virtual completa</h2>
            <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
              Criamos e-commerces rápidos, responsivos e integrados aos processos que sustentam catálogo, pagamento, estoque, pedido e atendimento.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
            {capabilities.map((capability) => (
              <Card key={capability.title} className="group h-full rounded-2xl border border-slate-800 bg-slate-900/70 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-blue-300 transition-transform duration-300 group-hover:scale-110">
                    <capability.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-lg text-white">{capability.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300">{capability.description}</CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-12 rounded-2xl border border-slate-800 bg-blue-500/10 p-6 shadow-inner sm:p-8">
            <h3 className="text-xl font-semibold text-white mb-4">Do planejamento à evolução da loja</h3>
            <ol className="grid grid-cols-1 gap-4 md:grid-cols-4">
              {stages.map((stage, index) => (
                <li key={stage.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-sm">
                  <div className="flex items-center text-blue-300 font-semibold">
                    <CheckCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                    Etapa {index + 1}
                  </div>
                  <h4 className="mt-2 font-medium text-white">{stage.title}</h4>
                  <p className="mt-1 text-sm text-slate-300">{stage.description}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="text-center">
            <Button asChild className="rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 px-8 text-base font-semibold shadow-lg shadow-blue-900/40 hover:from-blue-500 hover:to-indigo-400">
              <Link href="#contact">Planejar minha loja virtual</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
