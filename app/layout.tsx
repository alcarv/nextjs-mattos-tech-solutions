import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';

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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        
        {/* Updated Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Mattos Tech Solutions",
              "description": "Desenvolvimento profissional de websites e sistemas personalizados",
              "url": "https://mattostechsolutions.com",
              "logo": "https://mattostechsolutions.com/favicon.svg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+5511990183194",
                "contactType": "customer service",
                "availableLanguage": "Portuguese"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BR"
              },
              "sameAs": [
                "https://wa.me/+5511990183194"
              ],
              "servicos": [
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
        
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NHK45VTT');
          `}
        </Script>
      </head>
      <body className="font-sans">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-NHK45VTT"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        
        {children}
        
        <Script
          src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/e1e8582b-eb55-4673-9c77-04989c8c9b1c-loader.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}