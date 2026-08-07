'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { AlertTriangle, ArrowUpRight, CheckCircle2, LoaderCircle, Mail, MessageCircle } from 'lucide-react';
import MagneticLink from './MagneticLink';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

type FormState = {
  name: string;
  company: string;
  contact: string;
  challenge: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = { name: '', company: '', contact: '', challenge: '' };
const whatsappUrl = 'https://wa.me/5511990183194?text=Olá!%20Gostaria%20de%20conversar%20sobre%20um%20projeto%20com%20a%20Mattos%20Tech%20Solutions.';

function validate(values: FormState) {
  const errors: FieldErrors = {};
  const contactDigits = values.contact.replace(/\D/g, '');
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.contact);

  if (values.name.trim().length < 2) errors.name = 'Informe seu nome.';
  if (values.company.trim().length < 2) errors.company = 'Informe o nome da empresa.';
  if (!isEmail && contactDigits.length < 10) errors.contact = 'Informe um e-mail ou WhatsApp válido.';
  if (values.challenge.trim().length < 10) errors.challenge = 'Conte um pouco mais sobre o principal desafio.';
  return errors;
}

export default function HomeContact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
    if (status !== 'idle') setStatus('idle');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = event.currentTarget.querySelector<HTMLElement>('[aria-invalid="true"]');
      firstInvalid?.focus();
      return;
    }

    setStatus('loading');
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error');
      return;
    }

    const isEmail = form.contact.includes('@');
    const eventId = typeof window.crypto?.randomUUID === 'function' ? window.crypto.randomUUID() : `lead-${Date.now()}`;

    try {
      await emailjs.send(serviceId, templateId, {
        name: form.name,
        company: form.company,
        email: isEmail ? form.contact : '',
        phone: isEmail ? '' : form.contact,
        contact: form.contact,
        message: form.challenge,
        to_name: 'Mattos Tech Solutions',
      }, publicKey);

      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Lead', { content_name: 'Formulario institucional' }, { eventID: eventId });
      }

      void fetch('/api/meta/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          eventId,
          email: isEmail ? form.contact : '',
          phone: isEmail ? '' : form.contact,
          name: form.name,
        }),
      }).catch(() => undefined);

      setForm(initialForm);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contato" className="mts-contact">
      <div className="mts-container">
        <div className="mts-contact__intro reveal-on-scroll">
          <div>
            <span className="mts-kicker"><i /> PRÓXIMO PASSO</span>
            <h2>Sua empresa não precisa se adaptar a soluções genéricas.</h2>
          </div>
          <div>
            <p>Vamos entender seu cenário e construir a tecnologia adequada para o próximo passo do seu negócio.</p>
            <div className="mts-contact__actions">
              <MagneticLink className="mts-button mts-button--light" href="#formulario">
                Agendar uma conversa <ArrowUpRight />
              </MagneticLink>
              <MagneticLink className="mts-button mts-button--ghost" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Falar pelo WhatsApp <MessageCircle />
              </MagneticLink>
            </div>
          </div>
        </div>

        <div className="mts-contact__panel reveal-on-scroll" id="formulario">
          <aside className="mts-contact__aside">
            <span className="mts-kicker mts-kicker--muted">CONTATO / BRASIL</span>
            <h3>Conte o que está travando sua operação.</h3>
            <p>Uma conversa objetiva para entender contexto, prioridade e aderência — antes de falar em tecnologia.</p>
            <div className="mts-contact__direct">
              <a href="mailto:mattostechsolutions@gmail.com"><Mail /> mattostechsolutions@gmail.com</a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle /> +55 (11) 99018-3194</a>
            </div>
            <div className="mts-contact__availability"><i /> Atendimento remoto em todo o Brasil</div>
          </aside>

          <form className="mts-form" onSubmit={handleSubmit} noValidate aria-label="Formulário de contato">
            <div className="mts-form__row">
              <div className="mts-field">
                <label htmlFor="lead-name">Nome</label>
                <input
                  id="lead-name"
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={(event) => updateField('name', event.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'lead-name-error' : undefined}
                  placeholder="Como podemos chamar você?"
                />
                {errors.name && <span id="lead-name-error" className="mts-field__error">{errors.name}</span>}
              </div>
              <div className="mts-field">
                <label htmlFor="lead-company">Empresa</label>
                <input
                  id="lead-company"
                  name="company"
                  autoComplete="organization"
                  value={form.company}
                  onChange={(event) => updateField('company', event.target.value)}
                  aria-invalid={Boolean(errors.company)}
                  aria-describedby={errors.company ? 'lead-company-error' : undefined}
                  placeholder="Nome da empresa"
                />
                {errors.company && <span id="lead-company-error" className="mts-field__error">{errors.company}</span>}
              </div>
            </div>

            <div className="mts-field">
              <label htmlFor="lead-contact">E-mail ou WhatsApp</label>
              <input
                id="lead-contact"
                name="contact"
                autoComplete="email"
                value={form.contact}
                onChange={(event) => updateField('contact', event.target.value)}
                aria-invalid={Boolean(errors.contact)}
                aria-describedby={errors.contact ? 'lead-contact-error' : undefined}
                placeholder="voce@empresa.com.br ou (11) 99999-9999"
              />
              {errors.contact && <span id="lead-contact-error" className="mts-field__error">{errors.contact}</span>}
            </div>

            <div className="mts-field">
              <label htmlFor="lead-challenge">Principal desafio</label>
              <textarea
                id="lead-challenge"
                name="challenge"
                rows={5}
                value={form.challenge}
                onChange={(event) => updateField('challenge', event.target.value)}
                aria-invalid={Boolean(errors.challenge)}
                aria-describedby={errors.challenge ? 'lead-challenge-error' : undefined}
                placeholder="Ex.: precisamos integrar sistemas e reduzir o trabalho manual do time..."
              />
              {errors.challenge && <span id="lead-challenge-error" className="mts-field__error">{errors.challenge}</span>}
            </div>

            <button className="mts-form__submit" type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? <><LoaderCircle className="is-spinning" /> Enviando...</> : <>Quero conversar sobre meu projeto <ArrowUpRight /></>}
            </button>

            <div className="mts-form__status" aria-live="polite" role="status">
              {status === 'success' && <span className="is-success"><CheckCircle2 /> Recebemos sua mensagem. Em breve entraremos em contato.</span>}
              {status === 'error' && (
                <span className="is-error">
                  <AlertTriangle /> Não foi possível enviar agora. Você pode falar conosco pelo <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>.
                </span>
              )}
            </div>
            <p className="mts-form__privacy">Ao enviar, você concorda com o uso dos dados apenas para retorno sobre sua solicitação.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
