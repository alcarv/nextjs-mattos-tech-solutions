import { BUSINESS_PHONE } from './seo';
import { serviceCatalog } from './services';

export function getContactService(pathname: string) {
  return serviceCatalog.find(service => service.path === pathname);
}

export function whatsappLink(message = 'Olá! Quero entender como a Mattos Tech Solutions pode ajudar minha empresa.') {
  return `https://wa.me/${BUSINESS_PHONE.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
}

export type ContactValues = { name: string; company: string; contact: string; challenge: string };
export type ContactErrors = Partial<Record<keyof ContactValues, string>>;

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  const contact = values.contact.trim();
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
  const digits = contact.replace(/\D/g, '');
  const isPhone = /^[+\d\s().-]+$/.test(contact) && digits.length >= 10 && digits.length <= 15;
  if (values.name.trim().length < 2) errors.name = 'Informe seu nome.';
  if (!isEmail && !isPhone) errors.contact = 'Informe um e-mail ou WhatsApp válido.';
  return errors;
}

export function contactMessage(values: ContactValues, service?: string) {
  return [
    `Olá! Sou ${values.name.trim()}.`,
    service ? `Quero conversar sobre ${service}.` : 'Quero conversar sobre uma melhoria para minha empresa.',
    values.company.trim() && `Empresa: ${values.company.trim()}`,
    `Contato: ${values.contact.trim()}`,
    values.challenge.trim() && `Meu desafio: ${values.challenge.trim()}`,
  ].filter(Boolean).join('\n');
}
