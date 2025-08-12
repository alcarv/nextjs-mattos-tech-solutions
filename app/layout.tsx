import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mattos Tech Solutions - Consultoria e Desenvolvimento em TI',
  description: 'Maximize o potencial da sua empresa com nossa consultoria especializada em TI e soluções de desenvolvimento personalizadas. Serviços de consultoria, desenvolvimento web, mobile e muito mais.',
  keywords: 'consultoria TI, desenvolvimento software, desenvolvimento web, governança compliance, banco dados analytics, desenvolvimento mobile, migração nuvem, avaliações TI, UX UI design',
  authors: [{ name: 'Mattos Tech Solutions' }],
  openGraph: {
    title: 'Mattos Tech Solutions - Consultoria e Desenvolvimento em TI',
    description: 'Maximize o potencial da sua empresa com nossa consultoria especializada em TI e soluções de desenvolvimento personalizadas.',
    url: 'https://mattostechsolutions.com',
    siteName: 'Mattos Tech Solutions',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mattos Tech Solutions - Consultoria e Desenvolvimento em TI',
    description: 'Maximize o potencial da sua empresa com nossa consultoria especializada em TI e soluções de desenvolvimento personalizadas.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="canonical" href="https://mattostechsolutions.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Mattos Tech Solutions",
              "description": "Consultoria especializada em TI e soluções de desenvolvimento personalizadas",
              "url": "https://mattostechsolutions.com",
              "logo": "https://mattostechsolutions.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+55-11-99999-9999",
                "contactType": "customer service",
                "areaServed": "BR",
                "availableLanguage": "Portuguese"
              },
              "sameAs": [
                "https://linkedin.com/company/mattos-tech-solutions"
              ],
              "services": [
                "Consultoria e Planejamento em TI",
                "Desenvolvimento de Software",
                "Desenvolvimento Web",
                "Governança e Compliance",
                "Banco de Dados e Analytics",
                "Desenvolvimento Mobile",
                "Migração para Nuvem",
                "Avaliações de TI",
                "UX/UI Design"
              ]
            })
          }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}