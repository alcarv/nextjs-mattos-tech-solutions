import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, Workflow, BookOpenCheck, Database, PlugZap, GraduationCap, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Reveal from '@/components/Reveal';

export default function AISection() {
  const capabilities = [
    {
      icon: Bot,
      title: 'Chatbots e Assistentes',
      desc: 'Atendimento, suporte interno e copilots para equipes e clientes.',
    },
    {
      icon: Workflow,
      title: 'Automação com IA',
      desc: 'Fluxos inteligentes que reduzem tarefas manuais e erros operacionais.',
    },
    {
      icon: Database,
      title: 'RAG e Pesquisa Semântica',
      desc: 'Conecte seus dados (docs, DB, APIs) a LLMs com relevância e contexto.',
    },
    {
      icon: PlugZap,
      title: 'Integrações',
      desc: 'WhatsApp, Slack, e‑mail, CRM/ERP, webhooks e pipelines de dados.',
    },
    {
      icon: BookOpenCheck,
      title: 'Fine‑tuning e Embeddings',
      desc: 'Modelos adaptados ao seu domínio com vetorização e ajuste fino quando viável.',
    },
    {
      icon: GraduationCap,
      title: 'Treinamentos em IA',
      desc: 'Capacitação prática: prompts, segurança, governança e melhores práticas.',
    },
  ];

  const steps = [
    { title: 'Descoberta', desc: 'Mapeamos processos, dados e objetivos de negócio.' },
    { title: 'Prova de Conceito', desc: 'Validamos hipóteses rapidamente com MVPs funcionais.' },
    { title: 'Implementação', desc: 'Integramos aos sistemas, dados e canais existentes.' },
    { title: 'Operação e Treinamento', desc: 'Monitoramos, melhoramos e capacitamos sua equipe.' },
  ];

  return (
    <section id="detalhes-servico" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-x-0 top-1/3 -z-10 h-52 bg-blue-600/20 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="rounded-3xl border border-slate-800 bg-slate-900/70 p-10 shadow-xl backdrop-blur">
          <div className="text-center mb-12">
            <span className="inline-flex items-center rounded-full bg-blue-600/20 px-4 py-1 text-sm font-semibold text-blue-300">
              Inteligência Artificial aplicada
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Soluções de Inteligência Artificial</h2>
            <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
              Integramos IA generativa ao seu negócio para aumentar eficiência, melhorar atendimento e potencializar
              decisões com dados.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {capabilities.map((c, i) => (
              <Card
                key={i}
                className="group h-full rounded-2xl border border-slate-800 bg-slate-900/70 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-blue-300 transition-transform duration-300 group-hover:scale-110">
                    <c.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg text-white">{c.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300">{c.desc}</CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-12 rounded-2xl border border-slate-800 bg-blue-500/10 p-8 shadow-inner">
            <h3 className="text-xl font-semibold text-white mb-4">Como trabalhamos</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-center text-blue-300 font-semibold">
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Etapa {i + 1}
                  </div>
                  <div className="mt-2 font-medium text-white">{s.title}</div>
                  <div className="mt-1 text-sm text-slate-300">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link href="/#contact">
              <Button className="rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 px-8 text-base font-semibold shadow-lg shadow-blue-900/40 hover:from-blue-500 hover:to-indigo-400">
                Falar com Especialista em IA
              </Button>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
