# Prep Up Southcoast Website

Marketing and informational website for **Prep Up**, a non-profit providing free college counseling to high school students in the New Bedford, MA Southcoast region.

**Live domain:** `www.prepupsouthcoast.org` (hosted on Cloudflare Pages)

---

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:4321` in your browser. The site hot-reloads on file saves.

## Building for Production

```bash
npm run build
```

The compiled site is written to `dist/`. Preview it locally with:

```bash
npm run preview
```

---

## Deployment

The site auto-deploys to **Cloudflare Pages** on every push to `main`. No manual steps needed.

**Build settings (configured in Cloudflare):**
- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`

**Custom domain:** `www.prepupsouthcoast.org` is connected in the Cloudflare Pages dashboard under Custom Domains. SSL is handled automatically.

---

## Updating Content

All content lives in the `.astro` files under `src/pages/`. You can edit them directly in any text editor — no coding knowledge required for text changes.

| Page | File | What's there |
|------|------|-------------|
| Home | `src/pages/index.astro` | Hero headline, mission strip, pillar summaries, founder teasers |
| About | `src/pages/about.astro` | Full mission text, values, full founder bios |
| Program | `src/pages/program.astro` | Methodology descriptions, four-year roadmap details |
| Support Us | `src/pages/support.astro` | Funding pillars, "Why the Southcoast" text |
| Contact | `src/pages/contact.astro` | Email address, physical address |

**To update text:** open the file, find the text between `>` and `<`, change it, save. Done.

**To update the email address** (currently `info@prepupsouthcoast.org`): update it in two places:
1. `src/pages/contact.astro` — the `email` constant at the top
2. `src/components/Footer.astro` — the mailto link in the "Get in Touch" column

---

## Swapping in Real Assets

| Asset | Current state | Where to replace |
|-------|--------------|-----------------|
| Horizontal logo | SVG placeholder (text + torch drawing) | Replace `public/logo.svg` |
| Badge logo | SVG placeholder (circular with "PU") | Replace `public/logo-badge.svg` |
| Favicon | SVG placeholder (navy circle with torch) | Replace `public/favicon.svg` |
| Founder photos | Navy placeholder blocks with initials | Pass a real `img` into `FounderCard.astro`, or add a `photoSrc` prop |
| Student/hero photos | Not yet used | Add to `public/images/`, reference in `Hero.astro` |

---

## Brand Colors

| Token | Hex | Tailwind class |
|-------|-----|----------------|
| Navy (primary) | `#142D5C` | `bg-navy` / `text-navy` |
| Navy dark | `#0F1F3D` | `bg-navy-dark` / `text-navy-dark` |
| Gold (accent) | `#F2B736` | `bg-gold` / `text-gold` |
| Gold dark | `#D49B1F` | `bg-gold-dark` / `text-gold-dark` |
| Slate grey | `#9CA0AA` | `text-slate-accent` |

Defined in `tailwind.config.mjs`. Update hex values there if official brand codes differ.

---

## Tech Stack

- **[Astro](https://astro.build)** — static site generator, ships zero JS by default
- **[Tailwind CSS](https://tailwindcss.com)** — utility-first styling
- **[Cloudflare Pages](https://pages.cloudflare.com)** — hosting + CDN + SSL (free tier)

---

## Phase 2 Candidates

These are intentionally out of scope for v1 but are natural next steps:

- **Blog** — Astro Content Collections make this straightforward to add
- **Spanish translation** — relevant for New Bedford's large Portuguese/Spanish-speaking community
- **Newsletter signup** — simple Mailchimp or Buttondown embed
- **Donation link** — link out to Givebutter, Donorbox, or PayPal Giving Fund once set up
- **Analytics** — Cloudflare Web Analytics is free, privacy-respecting, and zero-config
- **Contact form** — add once a confirmed email address and form preference are decided
- **Student portal** — future phase if the program scales significantly

---

## Outstanding Items

Before launch, the founders need to provide:

- [ ] **Email address** — update `info@prepupsouthcoast.org` in `contact.astro` and `Footer.astro` (blocking)
- [ ] Logo SVG files (horizontal wordmark + circular badge) → replace files in `public/`
- [ ] Favicon → replace `public/favicon.svg`
- [ ] Founder photos → swap placeholder blocks in `About` page
- [ ] Student / campus photos → add to `public/images/` and reference in `Hero.astro`
- [ ] Confirm brand hex codes if a brand guide exists
- [ ] Final proofread of all copy
