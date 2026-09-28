# LeadBricks — Marketing Agency Website

Static React + Vite site. No backend, database or login.

## Run

```bash
npm install
npm run dev      # local development
npm run build    # production build → dist/
npm run preview  # preview the production build
```

Deploy `dist/` to Netlify or Vercel (`netlify.toml` and `vercel.json` are included).

## Where to edit content

| What | File |
| --- | --- |
| WhatsApp number, phone, email, social links, domain, form provider | `src/config/siteConfig.js` |
| Pricing packages (all 11 catalogs) and the disclaimer | `src/data/pricing.js` |
| Services grid | `src/data/services.js` |
| FAQ | `src/data/faqs.js` |
| Formula, philosophy, process and why-us copy | `src/data/content.js` |
| Section photos (hero, about, process, CTA, contact) | `public/images/*.webp` — free Unsplash photos; swap in your own team photos with the same file names |

## Before going live

1. Set the real WhatsApp number, phone and email in `siteConfig.js`.
2. Replace `https://leadbricks.in` if the domain is different. It appears in `index.html` (canonical, OG, schema), `public/robots.txt` and `public/sitemap.xml`.
3. Add real social links.
4. Review `public/privacy.html` and `public/terms.html`.

## Contact form

The form defaults to `provider: 'whatsapp'`: it opens WhatsApp with the enquiry pre-filled and needs no setup. To switch provider, change `siteConfig.form.provider`:

- `web3forms`: add your `web3formsKey`
- `formsubmit`: set `formsubmitEmail` and confirm the first email FormSubmit sends
- `googleForms`: set the form `action` URL and the `entry.X` ID for each field
