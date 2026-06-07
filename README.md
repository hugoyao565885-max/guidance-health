# Guidance Health

Multilingual oncology lead-generation site for international patients considering lymphoma care and selected immunotherapy pathways in Guangzhou.

## Routes

- `/en/`
- `/zh-hant/`
- `/ru/`
- `/ar/`
- `/id/`
- `/ms/`
- `/{locale}/treatments/`
- `/{locale}/experts/`
- `/{locale}/hospitals/`
- `/{locale}/cases/`
- `/{locale}/journey/`
- `/{locale}/contact/`

## Local run

```bash
pnpm install
pnpm dev
```

## Vercel

- Framework preset: Next.js
- Build command: `npm run build`
- Output: Next.js default

When a production custom domain is ready, update `siteUrl` in `lib/site.ts` and configure the `vercel.app` deployment URL to redirect to the canonical domain.
