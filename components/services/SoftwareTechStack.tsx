import { ServerCog, Database, GitBranch, Boxes, ShieldHalf, CloudCog, type LucideIcon } from 'lucide-react';
import Reveal from '@/components/Reveal';

type StackItem = {
  icon: LucideIcon;
  title: string;
  tools: string;
};

const stack: StackItem[] = [
  {
    icon: ServerCog,
    title: 'Back-end e APIs',
    tools: 'Node.js, NestJS, Python, Java, .NET, GraphQL, REST, gRPC.',
  },
  {
    icon: Boxes,
    title: 'Front-end e UX',
    tools: 'React, Next.js, TypeScript, Tailwind, Storybook, Design Systems.',
  },
  {
    icon: Database,
    title: 'Dados e integrações',
    tools: 'Postgres, MySQL, SQL Server, MongoDB, Redis, Kafka, integrações SOAP/REST.',
  },
  {
    icon: CloudCog,
    title: 'Infraestrutura e DevOps',
    tools: 'AWS, Azure, GCP, Docker, Kubernetes, Terraform, pipelines CI/CD.',
  },
  {
    icon: ShieldHalf,
    title: 'Qualidade e segurança',
    tools: 'OWASP, SAST/DAST, testes automatizados, observabilidade, auditoria.',
  },
  {
    icon: GitBranch,
    title: 'Processos e colaboração',
    tools: 'Scrum/Kanban, Notion, Jira, Linear, documentação viva e rituais semanais.',
  },
];

export default function SoftwareTechStack() {
  return (
    <section className="bg-slate-950/95 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="inline-flex items-center rounded-full bg-blue-600/20 px-4 py-1 text-sm font-semibold text-blue-300">
            Stack e processos
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Tecnologia e práticas que sustentam o produto</h2>
          <p className="mt-3 text-lg text-slate-300">
            Combinamos as ferramentas certas para atender requisitos de desempenho, segurança e manutenção contínua.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {stack.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 70}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-blue-300">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{item.tools}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
