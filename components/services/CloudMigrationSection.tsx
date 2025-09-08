import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cloud, ArrowUpRight, Shield, DollarSign, Boxes, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function CloudMigrationSection() {
  const benefits = [
    { icon: ArrowUpRight, title: 'Escalabilidade e Performance', desc: 'Arquiteturas resilientes e elásticas para crescer com segurança.' },
    { icon: DollarSign, title: 'Otimização de Custos', desc: 'Rightsizing, reservas e automação para reduzir despesas.' },
    { icon: Shield, title: 'Segurança e Compliance', desc: 'Identidade, redes, backups e políticas alinhadas a melhores práticas.' },
    { icon: Boxes, title: 'Infra as Code e DevOps', desc: 'Terraform/CDK, CI/CD e observabilidade para governança.' },
  ];

  const steps = [
    { title: 'Assessment', desc: 'Mapeamento de aplicações, dependências, custos e riscos.' },
    { title: 'Planejamento', desc: 'Estratégias (rehost/refactor), cronograma e arquitetura alvo.' },
    { title: 'Migração', desc: 'Execução controlada, testes e validação de performance.' },
    { title: 'Otimização', desc: 'FinOps, segurança contínua e evolução da arquitetura.' },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Migração para Nuvem</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Plano e execução de migração com foco em performance, segurança e redução de custos — AWS, Azure ou Google Cloud.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((b, i) => (
            <Card key={i} className="h-full">
              <CardHeader>
                <div className="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center mb-2">
                  <b.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">{b.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">{b.desc}</CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg p-6 mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Metodologia</h3>
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
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Migrar para Nuvem</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

