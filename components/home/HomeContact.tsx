'use client';

import { useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { contactMessage, createLeadEventId, getContactService, validateContact, whatsappLink, type ContactValues, type ContactErrors } from '@/lib/contact';
import { trackConversion } from '@/lib/conversion-events';
import { AlertTriangle, ArrowUpRight, CheckCircle2, LoaderCircle, Mail, MessageCircle } from 'lucide-react';
import MagneticLink from './MagneticLink';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const initialForm: ContactValues = { name: '', company: '', contact: '', challenge: '' };
const emailConfigured = Boolean(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID && process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID && process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

export default function HomeContact() {
  const pathname = usePathname();
  const service = getContactService(pathname);
  const whatsappUrl = whatsappLink(service ? `Olá! Quero conversar sobre ${service.name}.` : undefined);
  const started = useRef(false);
  const submitting = useRef(false);
  const [form, setForm] = useState<ContactValues>(initialForm);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const updateField = (field: keyof ContactValues, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
    if (status !== 'idle') setStatus('idle');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting.current) return;
    const nextErrors = validateContact(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      trackConversion('contact_form_error', 'form', service?.path, 'form');
      const firstField = Object.keys(nextErrors)[0];
      const firstInvalid = event.currentTarget.querySelector<HTMLElement>(`[name="${firstField}"]`);
      firstInvalid?.focus();
      return;
    }

    if (!emailConfigured) {
      window.open(whatsappLink(contactMessage(form, service?.name)), '_blank', 'noopener,noreferrer');
      trackConversion('contact_click', 'whatsapp', service?.path, 'form');
      return;
    }

    submitting.current = true;
    setStatus('loading');
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      submitting.current = false;
      setStatus('error');
      return;
    }

    const isEmail = form.contact.includes('@');
    const eventId = createLeadEventId();

    try {
      const { default: emailjs } = await import('@emailjs/browser');
      await emailjs.send(serviceId, templateId, {
        name: form.name,
        company: form.company.trim() || 'Não informada',
        email: isEmail ? form.contact : '',
        phone: isEmail ? '' : form.contact,
        contact: form.contact,
        message: [service && `Interesse: ${service.name}`, form.challenge.trim() || 'Quero entender qual solução faz sentido para minha empresa.'].filter(Boolean).join('\n'),
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

      trackConversion('generate_lead', 'form', service?.path, 'form');
      setForm(initialForm);
      started.current = false;
      setStatus('success');
    } catch {
      trackConversion('contact_form_error', 'form', service?.path, 'form');
      setStatus('error');
    } finally {
      submitting.current = false;
    }
  };

  return (
    <section id="contato" className="mts-contact">
      <div className="mts-container">
        <div className="mts-contact__intro reveal-on-scroll">
          <div>
            <span className="mts-kicker"><i /> PRÓXIMO PASSO</span>
            <h2>{service ? `Vamos entender seu cenário de ${service.name.toLowerCase()}.` : 'Vamos descobrir o que vale resolver primeiro.'}</h2>
          </div>
          <div>
            <p>Conte o que está difícil hoje e o que você gostaria de melhorar. Você não precisa chegar com um projeto pronto nem escolher uma tecnologia.</p>
            <div className="mts-contact__actions">
              <MagneticLink className="mts-button mts-button--light" href="#formulario" data-contact-location="form">
                Contar meu desafio <ArrowUpRight />
              </MagneticLink>
              <MagneticLink className="mts-button mts-button--ghost" href={whatsappUrl} target="_blank" rel="noopener noreferrer" data-contact-location="form">
                Falar pelo WhatsApp <MessageCircle />
              </MagneticLink>
            </div>
          </div>
        </div>

        <div className="mts-contact__panel reveal-on-scroll" id="formulario">
          <aside className="mts-contact__aside">
            <span className="mts-kicker mts-kicker--muted">CONTATO / BRASIL</span>
            <h3>Conte o que está travando sua operação.</h3>
            <p>Depois do seu contato, seguimos estes passos:</p>
            <ol className="mts-contact__steps"><li>Retornamos pelo contato informado para entender sua prioridade.</li><li>Alinhamos o cenário, as restrições e os caminhos possíveis.</li><li>Se houver aderência, estruturamos uma proposta para sua avaliação.</li></ol>
            <p>Enviar este formulário não contrata um serviço.</p>
            <div className="mts-contact__direct">
              <a href="mailto:contato@mattostechsolutions.com" data-contact-location="form"><Mail /> contato@mattostechsolutions.com</a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" data-contact-location="form"><MessageCircle /> +55 (11) 99018-3194</a>
            </div>
            <div className="mts-contact__availability"><i /> Atendimento remoto em todo o Brasil</div>
          </aside>

          <form className="mts-form" onSubmit={handleSubmit} noValidate aria-label="Formulário de contato" onFocus={() => {
            if (!started.current) { trackConversion('contact_form_start', 'form', service?.path, 'form'); started.current = true; }
          }}>
            <p className="mts-form__help">Só nome e contato são obrigatórios. {emailConfigured ? 'Conte o restante se quiser adiantar a conversa.' : 'Ao continuar, o WhatsApp abrirá com sua mensagem para você revisar e enviar.'}</p>
            <fieldset disabled={status === 'loading'} className="mts-form__fields">
            <div className="mts-form__row">
              <div className="mts-field">
                <label htmlFor="lead-name">Nome</label>
                <input
                  id="lead-name"
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(event) => updateField('name', event.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'lead-name-error' : undefined}
                  placeholder="Como podemos chamar você?"
                />
                {errors.name && <span id="lead-name-error" className="mts-field__error">{errors.name}</span>}
              </div>
              <div className="mts-field">
                <label htmlFor="lead-company">Empresa <span>(opcional)</span></label>
                <input
                  id="lead-company"
                  name="company"
                  autoComplete="organization"
                  maxLength={150}
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
                required
                maxLength={254}
                value={form.contact}
                onChange={(event) => updateField('contact', event.target.value)}
                aria-invalid={Boolean(errors.contact)}
                aria-describedby={errors.contact ? 'lead-contact-error' : undefined}
                placeholder="voce@empresa.com.br ou (11) 99999-9999"
              />
              {errors.contact && <span id="lead-contact-error" className="mts-field__error">{errors.contact}</span>}
            </div>

            <div className="mts-field">
              <label htmlFor="lead-challenge">O que você quer melhorar? <span>(opcional)</span></label>
              <textarea
                id="lead-challenge"
                name="challenge"
                rows={3}
                maxLength={2000}
                value={form.challenge}
                onChange={(event) => updateField('challenge', event.target.value)}
                aria-invalid={Boolean(errors.challenge)}
                aria-describedby={errors.challenge ? 'lead-challenge-error' : undefined}
                placeholder={service ? `Conte o que motivou seu interesse em ${service.name.toLowerCase()}...` : "Ex.: quero receber mais contatos pelo site ou reduzir tarefas manuais..."}
              />
              {errors.challenge && <span id="lead-challenge-error" className="mts-field__error">{errors.challenge}</span>}
            </div>

            <button className="mts-form__submit" type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? <><LoaderCircle className="is-spinning" /> Enviando...</> : <>{emailConfigured ? 'Quero entender o melhor caminho' : 'Continuar no WhatsApp'} <ArrowUpRight /></>}
            </button>

            </fieldset>
            <div className="mts-form__status" aria-live="polite" role="status">
              {status === 'success' && <span className="is-success"><CheckCircle2 /> Recebemos sua mensagem. Em breve entraremos em contato.</span>}
              {status === 'error' && (
                <span className="is-error">
                  <AlertTriangle /> Não foi possível enviar agora. Você pode falar conosco pelo <a href={whatsappLink(contactMessage(form, service?.name))} target="_blank" rel="noopener noreferrer">WhatsApp com sua mensagem preenchida</a>.
                </span>
              )}
            </div>
            <p className="mts-form__privacy">Usaremos seu contato para responder à solicitação. O site também utiliza ferramentas de medição de campanhas. Leia a <a href="/politica-de-privacidade">Política de Privacidade</a>.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
