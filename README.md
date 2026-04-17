# State 48 Credit

Arizona's premier credit repair website. Built with Next.js 15 App Router, React 19, TypeScript strict mode, and Tailwind v4.

Live at: **state48credit.com**

---

## Stack

- **Framework** — Next.js 15 (App Router, React Server Components)
- **Runtime** — React 19
- **Styling** — Tailwind CSS v4 + CSS custom properties (Arizona Dark Theme)
- **Language** — TypeScript, strict mode
- **Hosting** — Vercel (zero-config)
- **Forms** — Server Actions with `useActionState` + `useFormStatus`
- **SEO** — JSON-LD schema (Organization, LocalBusiness, Person, Service, FAQPage, HowTo, Review, BreadcrumbList, WebSite), llms.txt, dynamic OG image, sitemap.xml, robots.txt
- **A11y** — WCAG AA targeted, skip link, keyboard-first, `prefers-reduced-motion` honored

---

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

### Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — serve the production build locally
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript no-emit check

---

## Deploying to Vercel

### Option A · One-click (GitHub-linked)

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Vercel auto-detects Next.js — click **Deploy**.
4. Once the first deploy finishes, add your custom domain under **Project → Settings → Domains**.

### Option B · CLI

```bash
npm i -g vercel
vercel
vercel --prod
```

No environment variables are required for the current build. See *Wiring up lead delivery* below when you're ready to route form submissions.

### Setting the production URL

After deploy, update `site.url` in [`lib/site.ts`](lib/site.ts) with your live domain so schema, sitemap, robots, and canonical tags all point to production.

---

## Project structure

```
app/
├── layout.tsx              # root layout + schema injection
├── page.tsx                # homepage
├── globals.css             # Arizona Dark Theme tokens + primitives
├── services/               # /services
├── how-it-works/           # /how-it-works
├── results/                # /results
├── pricing/                # /pricing
├── about/                  # /about
├── comparison/             # /comparison
├── get-started/            # /get-started + Server Action
├── sitemap.ts
├── robots.ts
├── manifest.ts
├── opengraph-image.tsx     # dynamic 1200×630 OG
├── icon.svg                # browser tab icon
└── not-found.tsx
components/
├── layout/                 # AnnouncementBar, Navbar, Footer, FloatingCTA, Logo
├── sections/               # Hero, TrustBar, HowItWorksSection, ResultsProof, PricingSection, FAQSection, FinalCTA, FounderStory, ServicesOverview, PageHeader
├── forms/GetStartedForm.tsx
├── Icon.tsx                # inline SVG icon set (no external deps)
└── JsonLd.tsx
lib/
├── site.ts                 # single source of truth: brand, stats, pricing, FAQ, testimonials, nav
├── schema.ts               # schema.org JSON-LD builders
└── utils.ts
public/
├── llms.txt                # AI-crawler / AEO content block
└── images/                 # (add client result photos here — 4:5 / 1080×1350)
```

---

## Editing content

All content lives in one file: [`lib/site.ts`](lib/site.ts). Update pricing, stats, FAQ, testimonials, service list, nav, and contact info there — changes propagate across every page and every schema block automatically.

### Adding client result photos

1. Drop 4:5 aspect ratio photos (1080×1350) into `public/images/results/`.
2. Open [`components/sections/ResultsProof.tsx`](components/sections/ResultsProof.tsx) and [`app/results/page.tsx`](app/results/page.tsx).
3. Replace the placeholder grid `Array.from({ length: N })` with a real `results` array and `next/image` `<Image>` components.

---

## Arizona Dark Theme tokens

Defined as CSS custom properties in [`app/globals.css`](app/globals.css#L1) under `@theme`.

**Color role rule** (never mix):
- **Copper** (`--color-copper`) = money, action, conversion — primary CTAs, pricing, featured cards
- **Turquoise** (`--color-turquoise`) = trust, interaction, navigation — links, secondary CTAs, focus rings

To change a color globally, update the token — every component updates.

---

## Wiring up lead delivery

The Get Started form currently logs submissions to the Vercel runtime console. To route them to email, CRM, or Slack, open [`app/get-started/actions.ts`](app/get-started/actions.ts) and add your integration inside `submitAudit` before the final `return`. Examples:

- **Resend / SendGrid** — POST the lead payload to their API
- **HubSpot / GoHighLevel** — use their REST contact endpoint
- **Slack** — post to an incoming webhook
- **Airtable / Google Sheets** — append a row via their API

Keep the honeypot + validation logic intact.

---

## Performance baseline

- JSON-LD is server-rendered (no client JS required for SEO)
- Icons are inline SVG (no icon-font or external package)
- Fonts loaded via `next/font/google` with `display: swap`
- Images use `next/image` defaults (AVIF/WebP auto, device-size responsive)
- Only Navbar, FloatingCTA, and the Get Started form are Client Components — everything else is RSC

Target: Lighthouse 95+ across the board. Run `npm run build` locally, then `next start` + Chrome DevTools Lighthouse.

---

## Compliance

- FCRA + CROA disclosures in the footer
- No guaranteed score-increase copy anywhere
- Money-back language is explicit (90 days, no fine print)
- All testimonials are cleared for publication per the site's brief

---

## License

Proprietary — State 48 Credit LLC.
