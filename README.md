# VotaDigital

Landing page premium para a VotaDigital, vertical da HyperAG voltada a sites,
landing pages, criativos, Meta Ads, WhatsApp estratégico e captação de apoiadores
para campanhas políticas em 2026.

## Stack

- Next.js App Router
- TypeScript
- TailwindCSS
- GSAP
- Framer Motion
- `next/font` com Sora e Inter

## Comandos

```bash
npm install
npm run dev
npm run lint
npm run build
npm run start
```

Servidor local padrão:

```text
http://127.0.0.1:3000
```

## Hostinger Node.js Hosting

O projeto não usa recursos dependentes da Vercel, Edge Runtime obrigatório,
serverless específico da Vercel ou Vercel Analytics. Para publicar na Hostinger,
configure o app Node.js para executar:

```bash
npm install
npm run build
npm run start
```

Se a Hostinger definir `PORT`, o `next start` usa a porta do ambiente. Caso o
painel peça uma porta fixa, use a porta indicada pela própria hospedagem.

## WhatsApp

O número e a mensagem ficam em `src/lib/whatsapp.ts`.
