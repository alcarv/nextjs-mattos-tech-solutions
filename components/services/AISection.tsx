import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, Workflow, BookOpenCheck, Database, PlugZap, GraduationCap, CheckCircle } from 'lucide-react';
import Link from 'next/link';

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
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Soluções de Inteligência Artificial</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Integramos IA generativa ao seu negócio para aumentar eficiência, melhorar atendimento e potencializar
            decisões com dados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {capabilities.map((c, i) => (
            <Card key={i} className="h-full">
              <CardHeader>
                <div className="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center mb-2">
                  <c.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">{c.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">{c.desc}</CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg p-6 mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Como trabalhamos</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {steps.map((s, i) => (
              <div key={i} className="bg-white rounded-md p-4 shadow-sm border border-blue-100">
                <div className="flex items-center mb-2 text-blue-600 font-semibold">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Etapa {i + 1}
                </div>
                <div className="font-medium text-gray-900">{s.title}</div>
                <div className="text-gray-600 text-sm mt-1">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href="/#contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Falar com Especialista em IA
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

