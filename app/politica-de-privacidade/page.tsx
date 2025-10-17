import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Política de Privacidade - Mattos Tech Solutions',
  description:
    'Saiba como a Mattos Tech Solutions coleta, utiliza e protege seus dados pessoais. Transparência, segurança e conformidade com a LGPD.',
  alternates: { canonical: '/politica-de-privacidade' },
  openGraph: {
    title: 'Política de Privacidade - Mattos Tech Solutions',
    description:
      'Entenda nossa política de privacidade e como protegemos seus dados pessoais em conformidade com a LGPD.',
    url: 'https://mattostechsolutions.com.br/politica-de-privacidade',
  },
};

export default function PoliticaPrivacidadePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Política de Privacidade</h1>
          <p className="text-gray-500 mb-8">Última atualização: setembro de 2025</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <p>
              Na Mattos Tech Solutions, valorizamos a sua privacidade e estamos comprometidos em
              proteger seus dados pessoais. Esta Política de Privacidade explica quais informações
              coletamos, como utilizamos e armazenamos esses dados, e quais são seus direitos sob a LGPD
              (Lei Geral de Proteção de Dados Pessoais – Lei nº 13.709/2018).
            </p>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">1. Dados que coletamos</h2>
              <p>
                Podemos coletar dados pessoais fornecidos diretamente por você, como nome, e‑mail, telefone
                e empresa, quando você preenche formulários de contato, solicita orçamentos ou interage com
                nossos canais digitais. Também podemos coletar dados automaticamente, como endereço IP,
                informações de dispositivo/navegador e páginas visitadas, para fins de análise e melhoria do
                site (cookies e tecnologias semelhantes).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">2. Como utilizamos seus dados</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Responder a contatos, dúvidas e solicitações de orçamento;</li>
                <li>Prestar e melhorar nossos serviços e suporte técnico;</li>
                <li>Enviar comunicações sobre atualizações, conteúdos e ofertas, quando autorizado;</li>
                <li>Analisar o uso do site para aprimorar a experiência do usuário e segurança.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">3. Base legal para o tratamento</h2>
              <p>
                Tratamos dados pessoais com base em fundamentos legais previstos na LGPD, incluindo
                execução de contrato, cumprimento de obrigação legal/regulatória, legítimo interesse e
                consentimento, quando aplicável.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">4. Compartilhamento de dados</h2>
              <p>
                Podemos compartilhar dados com prestadores de serviços que nos auxiliam na operação do site,
                hospedagem, analytics e atendimento, sempre sob acordo de confidencialidade e somente na
                medida necessária para a execução das atividades. Não vendemos seus dados pessoais.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">5. Cookies e tecnologias semelhantes</h2>
              <p>
                Utilizamos cookies para lembrar preferências e entender como o site é usado. Você pode
                gerenciar cookies nas configurações do seu navegador. Alguns recursos podem não funcionar
                corretamente sem certos cookies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">6. Segurança da informação</h2>
              <p>
                Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso,
                alteração, divulgação ou destruição não autorizados. Apesar de nossos esforços, nenhum sistema
                é completamente seguro e recomendamos boas práticas de segurança por parte dos usuários.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">7. Retenção de dados</h2>
              <p>
                Mantemos os dados pessoais somente pelo tempo necessário ao cumprimento das finalidades
                descritas nesta política e conforme exigências legais, fiscais ou regulatórias aplicáveis.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">8. Seus direitos</h2>
              <p>
                De acordo com a LGPD, você possui direitos como confirmação de tratamento, acesso, correção,
                anonimização, portabilidade, eliminação e revogação de consentimento. Para exercer seus
                direitos, entre em contato pelos canais abaixo.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">9. Contato do Encarregado (DPO)</h2>
              <p>
                E‑mail: <a href="mailto:contato@mattostech.com" className="text-blue-600 hover:underline">contato@mattostech.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">10. Atualizações desta política</h2>
              <p>
                Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças
                legislativas ou operacionais. A versão mais recente ficará sempre disponível nesta página.
              </p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

