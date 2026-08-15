# Wynderz website

Premium industrial Next.js frontend for Wynderz, using real catalogue content and photography from [wynderz.in](https://www.wynderz.in/).

Visual direction is aligned with the Google Stitch project **Wynderz Industrial Web Redesign** (Industrial Precision design system).

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS 4
- Real Wynderz product images in `public/images`

## Routes

- `/` — homepage (hero, carousel, about, products, applications, gallery, contact)
- `/about` — company profile
- `/products` — full catalogue
- `/products/[slug]` — product detail pages

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content rules

All products, company facts, GST/IEC, address, and images come from the existing Wynderz website. Nothing invented.
