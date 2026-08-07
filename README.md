# Mattos Tech Solutions

Landing page institucional construída com Next.js, React, TypeScript, Tailwind CSS e GSAP. A experiência principal usa uma timeline de scroll para conectar processos fragmentados ao “MTS Core”, seguida por capítulos de soluções, método, autoridade e contato.

## Executar localmente

```bash
npm install
cp .env.example .env.local
npm run dev
```

A aplicação estará disponível em `http://localhost:3000` (ou na próxima porta livre).

## Variáveis de ambiente

Preencha as chaves do EmailJS para habilitar o envio do formulário. Supabase alimenta o blog; Meta Pixel e Conversions API são opcionais conforme a estratégia de mídia. Nunca versione segredos reais.

## Validação

```bash
npm run lint
npx tsc --noEmit
npm run build
npm start
```

A timeline respeita `prefers-reduced-motion`: quando ativado, os capítulos deixam de ser fixados e passam a aparecer como uma sequência estática e legível.
