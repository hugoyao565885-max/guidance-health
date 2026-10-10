# H&C Care

Multilingual oncology coordination site for international patients considering care in Guangzhou. Built with Next.js and deployed to Vercel.

## Routes

- `/en/`
- `/zh-hant/`
- `/ru/`
- `/ar/`
- `/id/`
- `/ms/`
- `/{locale}/about/`
- `/{locale}/oncology/`
- `/{locale}/car-t/`
- `/{locale}/membership/`
- `/{locale}/mdt/`
- `/{locale}/experts/`
- `/{locale}/hospitals/`
- `/{locale}/journey/`
- `/{locale}/register/`
- `/{locale}/contact/`
- `/{locale}/privacy/`
- `/{locale}/terms/`

## Local run

```bash
npm ci
npm run dev
```

## Vercel

- Framework preset: Next.js
- Install command: `npm ci`
- Build command: `npm run build`
- Output: Next.js default

When a production custom domain is ready, update `siteUrl` in `lib/site.ts` and configure the `vercel.app` deployment URL to redirect to the canonical domain.

## Content and verification

- `lib/content.ts`: page dictionaries and specialist profiles.
- `lib/patient-content.ts`: patient-facing homepage, enquiry, FAQ, and service copy.
- `lib/about-content.ts`: company identity, patient challenges, coordination scope, team backgrounds, and service boundaries in six languages.
- `npm run check:content`: checks all six dictionaries, contact channels, records lists, image paths, and unpublished-price rules.
- `npm run build`: production build and TypeScript validation.

Service prices are intentionally unpublished pending review. Keep the service descriptions in both dictionaries aligned when updating them.

The enquiry form opens an editable email or WhatsApp draft. It does not create an account, upload records, or store patient data. Authentication, private medical-record storage, access controls, and an approved consent workflow are prerequisites for a future patient portal. Do not add patient photographs or records to public assets without verified publication authorization and de-identification.
