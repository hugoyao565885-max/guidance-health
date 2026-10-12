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

The confirmed canonical domain is `https://hccareadvisory.com`, with `www.hccareadvisory.com` redirecting to it. Metadata, sitemap, multilingual alternates and production auth callbacks share `siteUrl` in `lib/site.ts`. Keep `guidance-health.vercel.app` as a temporary debugging address during domain setup. Publish the canonical-domain change only after DNS and HTTPS checks pass, and coordinate the Supabase Site URL / redirect allowlist at the same time. Preview deployments retain their existing protection.

On 12 October 2026 the owner authorised connecting both custom hostnames to the existing `guidance-health` Vercel project. The apex parking A record and www parking CNAME were replaced with DNS-only CNAMEs to the freshly verified recommendation `9d9ee8b40df38fe0.vercel-dns-017.com`. Vercel reported both domains correctly configured. A free Vercel-managed HTTPS certificate was issued for both names and the public `https://hccareadvisory.com/zh-hant` endpoint returned HTTP 200 with certificate validation enabled. Cloudflare nameservers, existing root-domain MX, SPF and DKIM records were preserved. Re-check DNS, HTTPS and the deployed version after a release; domain attachment alone does not prove that the latest source is live.

Publication review on 12 October 2026 confirmed the Vercel team's active plan is Hobby. The owner explicitly chose to retain Hobby after being informed that Vercel's [fair-use rules](https://vercel.com/docs/limits/fair-use-guidelines) restrict it to non-commercial personal use and that this company site may be suspended. This choice does not make the site's commercial use compliant with those rules. Do not upgrade, start a trial, add payment details, or incur charges. DNS and security-sensitive configuration changes still require confirmation. The owner also requested activation of member registration and private medical uploads; activation remains pending verified domain routing, custom SMTP delivery, auth callbacks and live isolation tests. Do not describe the member system as open until its backend settings and deployed portal flag are both enabled and checked.

## Content and verification

- `lib/content.ts`: page dictionaries and specialist profiles.
- `lib/patient-content.ts`: patient-facing homepage, enquiry, FAQ, and service copy.
- `lib/about-content.ts`: company identity, patient challenges, coordination scope, team backgrounds, and service boundaries in six languages.
- `lib/service-pricing.ts`: CNY prices, calculated admission totals, and six-language package scope shared by the service page, enquiry choices, FAQ, and terms.
- `npm run check:content`: checks all six dictionaries, contact channels, records lists, image paths, stage prices, admission totals, and private-cost exclusions.
- `npm run build`: production build and TypeScript validation.

Service stages can be purchased separately or combined according to patient needs, per patient and hospital admission rather than per year. Pre-arrival costs CNY 2,880, in-China CNY 3,580 (5-seat pickup) or CNY 3,730 (business vehicle), and after-discharge CNY 1,180. The three-stage totals of CNY 7,640 / 7,790 and in-China plus after-discharge totals of CNY 4,760 / 4,910 are combination examples, not required bundles. For subsequent admissions, patients select and purchase only the stages they need for the new cycle with newly agreed dates and allowances. Do not present pre-arrival support as first-time-only. Published interpretation scope is Indonesian; other languages and services beyond the stated allowances require confirmation before payment. Do not publish internal cost worksheets or the source PDF, which includes private costing.

The homepage only previews the company, oncology focus and experts, with contact actions. Pricing, full processes, treatment information and FAQ remain on their detail pages.

The contact enquiry form still opens an editable email or WhatsApp draft and does not transmit data to the website. The separate member portal uses Supabase Auth, Postgres RLS, and private Storage. Never add patient photographs or records to public assets or GitHub.

## Member portal setup

The portal is disabled by default until backend provisioning and live tests are complete. No successful registration or upload is simulated.

The replacement `hccare-members-sg` project (`quihnzumpfrslhxxowgj`) is Healthy in Singapore (`ap-southeast-1`). On 12 October 2026 the owner created it in the same Free organization and authorised the initial migration. The migration completed successfully; a live zero-row REST check confirmed all three member tables deny anonymous access. A read-only metadata query confirmed RLS on all three tables, a private `patient-records` bucket with a 10 MB PDF/JPEG/PNG limit, no authorised admins and no anonymous access to the private schema. New Auth signups are disabled and email confirmation remains enabled. Minimum password length is 12; TOTP authenticator support is enabled, but no administrator has been authorised or enrolled. This is not a completed live member, Storage upload or email test; keep `NEXT_PUBLIC_MEMBER_PORTAL_ENABLED=false` until those tests pass.

Local public connection parameters and all six region notices now target Singapore. Vercel Production, Preview and Development connection parameters were updated through the authenticated CLI; a read-only check of those specific public values confirmed exact matches with local configuration and a disabled portal flag in all three environments. The production build and all six compiled privacy notices passed verification. Custom-domain DNS and HTTPS checks now pass, but Supabase redirects and custom SMTP are not ready. The owner authorised using the exact company-domain callback and opening registration/private uploads after successful live tests; this permission has not yet been exercised. The previous Tokyo `member` project (`gxvnqlrwzyqcxlflswbe`, `ap-northeast-1`) is retained; no patient records or account credentials were imported from it. Do not enable paid upgrades, delete the old project, or copy real patient records without separate approval. Published sites retain their existing settings until rebuilt, so do not claim that an old deployment has already switched. This regional setting identifies primary database and record storage hosting, not a guarantee that provider logs, support processing or every data transfer stay inside Singapore.

1. Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` in local and Vercel environment settings. These are public parameters. Do not use a secret or service-role key in this app.
2. Run `supabase/migrations/202610100001_member_portal.sql` once in the project's SQL Editor. This creates tables, restricted RPC functions, RLS policies, and a private `patient-records` bucket. The SQL runs in a transaction and must not be partially applied.
3. Keep email confirmation enabled and set the provider's minimum password length to 12. After the custom domain is reachable, set Auth Site URL to `https://hccareadvisory.com`; add the exact `https://hccareadvisory.com/auth/callback` production callback and separately approved test callbacks to the redirect allowlist. Configure custom SMTP directly in Supabase. Default SMTP is restricted to project team addresses and is not a public registration delivery service.
4. For cross-device confirmation, use an email template link to `{{ .SiteURL }}/auth/callback?token_hash={{ .TokenHash }}&type=email&next=/en/member/`. For recovery use `type=recovery&next=/en/reset-password/`. The standard PKCE `ConfirmationURL` flow is also supported when opened in the original browser. Email templates must not include medical data.
5. Enable TOTP MFA in Supabase. Register `support@hccareadvisory.com`, verify its email, then run `supabase/authorize-admin.sql` as project owner. The admin allowlist is private, not user-editable metadata. Admin database and file reads require an `aal2` session. The support user sets up its own authenticator at `/{locale}/mfa/`.
6. Complete synthetic-account tests below before setting `NEXT_PUBLIC_MEMBER_PORTAL_ENABLED=true` in Vercel and rebuilding. Use a separate test deployment for this validation; never weaken production protections or disable email verification.

Portal routes: `/{locale}/register/`, `/login/`, `/forgot-password/`, `/reset-password/`, `/member/`, `/mfa/`, `/admin/`. These are dynamic, noindex and no-store, excluded from the sitemap. A member can save one case, submit it, upload or remove PDF/JPG/PNG files and download them through an authenticated endpoint. Downloads expire after 60 seconds and are served as attachments. Staff can list members, read cases and update coordination status. Passwords are handled by Supabase Auth and are never exposed to the staff backend.

### Where staff view patient submissions

The company-facing record viewer is `https://hccareadvisory.com/zh-hant/admin`, not Vercel's team Members page and not a public document directory. Once activated and authorised, the designated `support@hccareadvisory.com` account signs in at `/zh-hant/login` and completes TOTP verification. It can then view member contact details, case summaries, treatment history, medications, symptoms, uploaded attachments and coordination status. Ordinary members cannot access this viewer or see other members' records. Passwords are never shown. Adding more Vercel seats does not grant patient-portal access.

No administrator has been authorised yet. Verify the support account first, obtain confirmation before granting its persistent cross-member access, then apply `supabase/authorize-admin.sql`. The user chooses the account password and enrols the authenticator themselves; never collect either in chat or source control. Handle downloaded records as confidential medical information. Authentication emails contain verification or recovery links, not patient records; do not claim that uploads generate staff email notifications, which are not implemented.

Uploads are limited to 10 MB per file, 20 reservations per member and 60 reservations across this initial project (at most 600 MB). Global reservation limits use a database advisory lock. Failed uploads can be removed by the owner. RLS checks verified users and active rows in `auth.sessions`, so signed-out sessions cannot continue reading records with an otherwise unexpired JWT. Signed download links already issued can remain usable for their 60-second lifetime. Large DICOM studies require a separately agreed secure channel. The Free plan has limited storage, may pause for inactivity and is not a blanket healthcare compliance certification. Review region, provider terms, retention, incident response and cross-border permissions before collecting real patient records.

### Email delivery

The company currently receives email through Cloudflare Email Routing forwarded to Outlook. This is not an Exchange Online company mailbox SMTP configuration. Preserve the existing root-domain MX records and forwarding rules. Do not disable Microsoft security defaults or MFA, put an Outlook password into the app, or disable Supabase email confirmation to make signup appear to work.

A dedicated transactional SMTP service is required for public verification and recovery emails. The owner approved Resend Free and logged into it on 12 October 2026. A sending-domain entry for `auth.hccareadvisory.com` was created in its Tokyo sending region. All three authorised records are now saved: DNS-only `rsend.auth` CNAME to `rsend-apne1.forge.rmta.net`, `send.auth` CNAME to `send.forge.rmta.net`, and the provider's public DKIM TXT at `resend._domainkey.auth`. Resend's domain screen showed Verified on 12 October 2026. Existing company-email records were preserved. No tracking subdomain was created. This does not change Singapore medical-record hosting or guarantee that all email processing remains in Tokyo.

The owner reported saving custom SMTP on 12 October 2026. A newly opened Supabase settings page independently loaded SMTP enabled, sender `no-reply@auth.hccareadvisory.com`, sender name `H&C Care`, host `smtp.resend.com`, port `465`, and username `resend`. No password was read. Delivery, signup and recovery are still untested. The owner was instructed to use Sending access restricted to `auth.hccareadvisory.com`; the actual key's scope has not yet been independently checked. Never use Full access or All domains for this purpose. Do not put the key in chat, GitHub, browser screenshots or `NEXT_PUBLIC_` variables. Close any dialog showing the key before returning browser control. Keep link/open tracking off for authentication emails. Do not enable paid overages or automatic upgrades. Verification emails contain account verification links, never diagnoses, patient names or uploaded medical records. Saved SMTP settings and a verified sending domain alone are not completed live email tests.

Release testing uses a protected deployment staged with `--prod --skip-domain` and portal enablement scoped to that deployment only. Project-level portal flags remain false until acceptance tests pass. The callback keeps cookies on the exact platform-provided `VERCEL_URL` hostname when accessed through that deployment; other production hosts fall back to the canonical company origin. Tests cover canonical routing, that exact deployment origin, unrelated and spoofed hosts, and HTTP rejection. An exact staged callback needs separate approval in Supabase; never add a wildcard allowing arbitrary Vercel hostnames. Do not promote the staged deployment, expose real patient data, or describe registration as generally open before verification.

References: [Supabase SMTP](https://supabase.com/docs/guides/auth/auth-smtp), [Resend Supabase integration](https://resend.com/docs/send-with-supabase-smtp), [Resend pricing](https://resend.com/pricing), [Cloudflare Email Service pricing](https://developers.cloudflare.com/email-service/platform/pricing/).

## Portal verification

`npm run check:portal` covers dictionary parity, file signatures and sizes, route isolation and security configuration invariants. This does not replace live backend tests.

`npm run test:portal-sql` applies the actual migration to disposable PGlite PostgreSQL with fixture Auth/Storage schemas. It exercises RLS, RPC ownership, consent, per-member/global quotas, MFA, revocation and audit. It does not exercise the live Supabase HTTP services or email delivery.

The following are live-release acceptance requirements, not claims that these tests have already passed:

- Verify email signup, login, logout and password recovery with real email delivery.
- Two synthetic members: each can save/upload/read/remove its own data but cannot list/read/write/download the other's case or files, including direct REST/Storage requests.
- Anonymous clients cannot read tables, call restricted RPCs or upload/read private objects.
- A normal member cannot enter the admin backend, self-promote or call `admin_update_case`.
- Support without MFA cannot read another member's records. After MFA it can view submitted cases and download records; audit entries are created.
- Test invalid file types, oversized files, failed uploads, ownership spoofing and concurrent quota reservations.
- Account data and auth cookies are never cached across requests; portal pages are not indexed. No medical payloads, passwords, tokens or signed URLs are written to logs.
- Add operational retention/deletion handling, backups and quota monitoring before real-patient launch. Admin search filters the current 50-member page; use pagination for further members.
