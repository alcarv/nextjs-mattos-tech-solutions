'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { IMaskInput } from 'react-imask';
import Reveal from '@/components/Reveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // EmailJS configuration - replace with your actual values
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id';
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id';
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key';

    const templateParams = {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
      message: formData.message,
      to_name: 'Mattos Tech Solutions',
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully:', response);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhoneChange = (val: string) => {
    setFormData(prev => ({ ...prev, phone: val }));
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20 scroll-mt-24 sm:scroll-mt-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute bottom-20 right-10 -z-10 h-64 w-64 rounded-full bg-blue-600/30 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-blue-600/20 px-4 py-1 text-sm font-semibold text-blue-300">
            Vamos conversar
          </span>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Entre em Contato
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Pronto para transformar sua empresa? Entre em contato conosco e descubra como
            podemos impulsionar seu negócio com tecnologia.
          </p>
        </Reveal>

        <Reveal className="lg:grid lg:grid-cols-3 lg:gap-8" delay={150}>
          {/* Contact Info */}
          <div className="mb-12 lg:mb-0">
            <div className="grid gap-6">
              <Card className="group rounded-2xl border border-slate-800 bg-slate-900/70 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-lg">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="rounded-xl bg-blue-600/20 p-3 text-blue-300 transition-transform duration-300 group-hover:scale-110">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Telefone</h3>
                    <a
                      href="https://wa.me/5511990183194?text=Olá! Gostaria de saber mais sobre os serviços da Mattos Tech Solutions."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex text-emerald-400 hover:text-emerald-300"
                    >
                      +55 (11) 99018-3194
                    </a>
                    <p className="mt-2 text-sm text-slate-400">Disponível em WhatsApp e ligações.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="group rounded-2xl border border-slate-800 bg-slate-900/70 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-lg">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="rounded-xl bg-blue-600/20 p-3 text-blue-300 transition-transform duration-300 group-hover:scale-110">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">E-mail</h3>
                    <p className="mt-1 text-slate-300">mattostechsolutions@gmail.com</p>
                    <p className="mt-2 text-sm text-slate-400">Retorno em até 24h úteis.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="group rounded-2xl border border-slate-800 bg-slate-900/70 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-lg">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="rounded-xl bg-blue-600/20 p-3 text-blue-300 transition-transform duration-300 group-hover:scale-110">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Endereço</h3>
                    <p className="mt-1 text-slate-300">
                      São Paulo - SP (Região do Tatuapé)<br />
                      Atendimento híbrido (remoto e presencial)
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="group rounded-2xl border border-slate-800 bg-slate-900/70 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-lg">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="rounded-xl bg-blue-600/20 p-3 text-blue-300 transition-transform duration-300 group-hover:scale-110">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Horário</h3>
                    <p className="mt-1 text-slate-300">
                      Segunda a Sexta: 9h às 18h<br />
                      Sábado: 9h às 14h
                    </p>
                    <p className="mt-2 text-sm text-slate-400">Plantões para demandas críticas mediante agendamento.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="rounded-3xl border border-slate-800 bg-slate-900/70 shadow-xl backdrop-blur">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-semibold text-white">
                  Solicite uma Consultoria Gratuita
                </CardTitle>
                <p className="text-sm text-slate-400">
                  Compartilhe o contexto do seu projeto e nossa equipe retorna com próximos passos em até um dia útil.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                        Nome Completo
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-slate-950/60 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                        E-mail
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-slate-950/60 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                      Número de Celular *
                    </label>
                    <IMaskInput
                      id="phone"
                      name="phone"
                      mask="(00) 00000-0000"
                      value={formData.phone}
                      onAccept={(val) => handlePhoneChange(String(val))}
                      type="tel"
                      required
                      className="w-full rounded-md border border-slate-700 bg-slate-950/60 px-3 py-2 text-slate-100 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                      Empresa
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950/60 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Nome da sua empresa"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950/60 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Descreva seu projeto ou necessidade..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 text-base font-semibold shadow-lg shadow-blue-900/40 transition-transform duration-300 hover:-translate-y-0.5 hover:from-blue-500 hover:to-indigo-400"
                    size="lg"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </Button>

                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <div className="flex items-center space-x-2 text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 p-3 rounded-lg">
                      <CheckCircle className="h-5 w-5" />
                      <span>Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                      <AlertCircle className="h-5 w-5" />
                      <span>Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente.</span>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
