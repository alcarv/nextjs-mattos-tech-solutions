/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    const legacyBlogSlugs = {
      '09d418ed-e1db-42ed-b6c7-26e38330ed98':
        'sistemas-empresariais-coracao-eficiencia-crescimento',
      '1c30648f-ee4d-4824-9717-2882bd7c8cc8': 'importancia-design-responsivo',
      '26c54df8-1053-4db7-9e82-5fcb77c92e04': 'integracao-de-sistemas-via-api',
      '2ef6de6f-6b8a-428b-8bb9-7e25fff02cd3':
        'criacao-sites-profissionais-primeiro-passo-sucesso-digital',
      '3ab715b6-46b3-4f58-8d20-a68829364623': 'sistemas-impulsionam-operacao',
      '40b99c6a-9566-4faa-af68-8d6d64fd2e4b': 'boas-praticas-seo-2025',
      '48f4a4dc-1c92-40b7-b765-4f6868d1ae24':
        'transforme-negocio-consultoria-tecnologica-estrategica',
      '4e6fcd98-c1d7-476c-b7fd-df24f5272eac':
        'aumento-produtividade-tecnologia-alavancar-resultados',
      '5298c797-7fd0-4f57-92e5-2d72f157acc1':
        'beneficios-escolher-bom-profissional-tecnologia-empresa',
      '52dab521-ecd7-4fb9-966a-befbb1bafe69': 'construindo-aplicacoes-web-modernas',
      '54eea3bb-3e5f-410b-9777-bd31171e1e83':
        'inteligencia-artificial-dia-dia-ela-ja-transforma-nossa',
      '648243de-3a16-4842-857f-27cd9aa3d405': 'otimizacao-performance-sites',
      '7c9845c3-dc6c-459a-98a6-3e796a54d8b1': 'futuro-desenvolvimento-web',
      '86704b7d-5350-4396-a796-22ae43ad2ae3': 'migracao-para-nuvem',
      '9e225d8f-3e97-4389-b1ce-26a0d769a88e':
        'importancia-empresa-consultoria-sucesso-negocio',
      'd6acfdee-9cbf-46aa-96ba-190f9c3b39c3':
        'inteligencia-artificial-no-dia-a-dia-como-chatbots-e-outras-solucoes-podem-ajudar-sua-empresa',
      'd8db9cc3-5a19-4677-a58d-267bec6fd337':
        'usar-ecossistema-tecnologico-favor-aumentar-resultados',
      'eeb4bf87-f416-4ee7-9fb9-e23e8042f91d':
        'importancia-ter-website-bem-desenvolvido-negocio',
      'f09ce7a5-5d5a-4e9a-8ada-b5563b178b06': 'observabilidade-de-sistemas',
      'fc0e367b-42e0-420c-8be6-57ee78c564ca': 'dominando-css-grid-layout',
    };

    return Object.entries(legacyBlogSlugs).map(([id, slug]) => ({
      source: `/blog/${id}`,
      destination: `/blog/${slug}`,
      permanent: true,
    }));
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
};

module.exports = nextConfig;
