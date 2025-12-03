import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Briefcase, TrendingUp } from 'lucide-react';
import Reveal from '@/components/Reveal';

const stats = [
  {
    icon: Users,
    value: '150+',
    label: 'Projetos Entregues',
    description: 'Soluções implementadas com sucesso'
  },
  {
    icon: Award,
    value: '98%',
    label: 'Satisfação do Cliente',
    description: 'Taxa de satisfação comprovada'
  },
  {
    icon: Briefcase,
    value: '10+',
    label: 'Anos de Experiência',
    description: 'Expertise consolidada no mercado'
  },
  {
    icon: TrendingUp,
    value: '40%',
    label: 'Crescimento Médio',
    description: 'Aumento de eficiência dos clientes'
  }
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-8 -left-10 h-28 w-28 rounded-full bg-blue-500/20 blur-3xl" />
            <h2 className="text-4xl font-bold text-white mb-6 sm:text-5xl">
              Sua Parceira em <span className="text-blue-400">Transformação Digital</span>
            </h2>
            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p className="text-lg">
                A Mattos Tech Solutions é uma empresa especializada em consultoria de TI e desenvolvimento 
                de soluções personalizadas. Transformamos desafios empresariais em inovação, com projetos 
                que combinam eficiência operacional e experiência do usuário.
              </p>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-md backdrop-blur">
                <h3 className="text-lg font-semibold text-white">Como entregamos valor</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  <li>• Roadmaps estratégicos e governança clara para acelerar decisões.</li>
                  <li>• Times multidisciplinares alinhados com squads internos do cliente.</li>
                  <li>• KPIs, rituais ágeis e comunicação transparente para medir impacto.</li>
                </ul>
              </div>
              <p className="text-slate-300">
                Estamos sediados em São Paulo (SP), na região do Tatuapé, com forte atuação em Sorocaba, Campinas e
                Grande São Paulo, além de projetos remotos em todo o Brasil. Essa proximidade nos permite combinar
                encontros presenciais estratégicos com a agilidade de uma equipe digital.
              </p>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="group h-full rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-xl"
                >
                  <CardContent className="p-0">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20 text-blue-300 transition-transform duration-300 group-hover:scale-110">
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="font-semibold text-slate-200">
                      {stat.label}
                    </div>
                    <div className="mt-1 text-sm text-slate-400">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
