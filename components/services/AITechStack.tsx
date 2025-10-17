import { Cpu, Database, CloudCog, Workflow, ShieldHalf, GitBranch, type LucideIcon } from 'lucide-react';
import Reveal from '@/components/Reveal';

const tools: { icon: LucideIcon; title: string; items: string }[] = [
  {
    icon: Cpu,
    title: 'Modelos e provedores',
    items: 'OpenAI, Azure OpenAI, AWS Bedrock, Google Vertex, Anthropic.',
  },
  {
    icon: Database,
    title: 'Dados e vetorização',
    items: 'Postgres, Supabase, Pinecone, Weaviate, Redis, Qdrant.',
  },
  {
    icon: Workflow,
    title: 'Orquestração',
    items: 'LangChain, LlamaIndex, Dify, Temporal, automações nativas.',
  },
  {
    icon: CloudCog,
    title: 'Infraestrutura',
    items: 'AWS, Azure, GCP, Vercel, Netlify, pipelines CI/CD.',
  },
  {
    icon: ShieldHalf,
    title: 'Governança e monitoramento',
    items: 'Guardrails, prompt management, observability, métricas de qualidade.',
  },
  {
    icon: GitBranch,
    title: 'Integrações',
    items: 'CRM/ERP, Zapier, Make, webhooks, APIs internas e externas.',
  },
];

export default function AITechStack() {
  return (
    <section className="bg-slate-950/95 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="inline-flex items-center rounded-full bg-blue-600/20 px-4 py-1 text-sm font-semibold text-blue-300">
            Stack e integrações
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Tecnologias que usamos no dia a dia</h2>
          <p className="mt-3 text-lg text-slate-300">
            Selecionamos provedores e ferramentas conforme requisitos de negócio, segurança, custo e escalabilidade.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {tools.map((tool, index) => (
            <Reveal
              key={tool.title}
              delay={index * 70}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-blue-300">
                  <tool.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{tool.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{tool.items}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
