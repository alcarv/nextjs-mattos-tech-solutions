import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Briefcase, TrendingUp } from 'lucide-react';

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
    value: '8+',
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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Sua Parceira em <span className="text-blue-600">Transformação Digital</span>
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                A Mattos Tech Solutions é uma empresa especializada em consultoria de TI e desenvolvimento 
                de soluções tecnológicas personalizadas. Nossa missão é transformar desafios empresariais 
                em oportunidades através da tecnologia.
              </p>
              <p>
                Com uma equipe de especialistas altamente qualificados, oferecemos desde consultoria 
                estratégica até desenvolvimento de software sob medida, sempre focando em resultados 
                mensuráveis e sustentáveis para nossos clientes.
              </p>
              <p>
                Nosso diferencial está na abordagem personalizada: entendemos que cada empresa é única 
                e merece soluções que se adaptem perfeitamente às suas necessidades específicas.
              </p>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="mb-4">
                      <div className="mx-auto mb-3 p-3 bg-blue-100 rounded-full w-fit">
                        <stat.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-2">
                        {stat.value}
                      </div>
                      <div className="font-semibold text-gray-800 mb-1">
                        {stat.label}
                      </div>
                      <div className="text-sm text-gray-600">
                        {stat.description}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}