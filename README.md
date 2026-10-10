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
- `lib/service-pricing.ts`: CNY prices, calculated admission totals, and six-language package scope shared by the service page, enquiry choices, FAQ, and terms.
- `npm run check:content`: checks all six dictionaries, contact channels, records lists, image paths, stage prices, admission totals, and private-cost exclusions.
- `npm run build`: production build and TypeScript validation.

Service stages can be purchased separately or combined according to patient needs, per patient and hospital admission rather than per year. Pre-arrival costs CNY 2,880, in-China CNY 3,580 (5-seat pickup) or CNY 3,730 (business vehicle), and after-discharge CNY 1,180. The three-stage totals of CNY 7,640 / 7,790 and in-China plus after-discharge totals of CNY 4,760 / 4,910 are combination examples, not required bundles. For subsequent admissions, patients select and purchase only the stages they need for the new cycle with newly agreed dates and allowances. Do not present pre-arrival support as first-time-only. Published interpretation scope is Indonesian; other languages and services beyond the stated allowances require confirmation before payment. Do not publish internal cost worksheets or the source PDF, which includes private costing.

The homepage only previews the company, oncology focus and experts, with contact actions. Pricing, full processes, treatment information and FAQ remain on their detail pages.

The enquiry form opens an editable email or WhatsApp draft. It does not create an account, upload records, or store patient data. Authentication, private medical-record storage, access controls, and an approved consent workflow are prerequisites for a future patient portal. Do not add patient photographs or records to public assets without verified publication authorization and de-identification.
