<h1 align="center">AT Group</h1>

<p align="center"><em>Счетоводни, правни и дигитални решения — на едно място.</em></p>

<p align="center">
  Marketing website for <strong>AT Group</strong> — a strategic alliance between
  <strong>ИНТЕЛЛЕКТ&nbsp;ЕООД</strong> (accounting &amp; legal) and
  <strong>НАЙМЕРИКС&nbsp;ЕООД</strong> (AI &amp; digital), delivering a closed-loop
  of business services for the modern company in Bulgaria and beyond.<br/>
  Built as a framework-free <strong>Vanilla&nbsp;JS</strong> SPA with <strong>Vite</strong> &amp; <strong>Bootstrap&nbsp;5</strong>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/%F0%9F%8C%90%20Live%20%E2%86%92-at--group.bg%20(soon)-c9a96a?style=for-the-badge&labelColor=2f6b4f" height="34" alt="Live — at-group.bg (coming soon)" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=000" alt="JavaScript ES6+" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white" alt="Vite 5" />
  <img src="https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap&logoColor=white" alt="Bootstrap 5.3" />
  <img src="https://img.shields.io/badge/i18n-BG%20%7C%20EN-2f6b4f" alt="Bilingual BG | EN" />
  <img src="https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white" alt="Deployed on Vercel" />
</p>

<p align="center">
  <img src="src/assets/images/AtGroupLogoHero.png" alt="AT Group emblem" width="300" />
</p>

---

Most businesses have to coordinate their accountants, lawyers, and IT specialists separately.
**AT Group works in sync** — when НАЙМЕРИКС deploys an AI solution for your online store,
ИНТЕЛЛЕКТ has already validated the legal framework and taxation. The site presents that
end-to-end offering across a fast, responsive, fully bilingual single-page experience.

## ✨ Highlights

- **Framework-free SPA** — a custom client-side router (`history` API + hash scrolling) drives 20 routes with zero front-end framework; only Bootstrap 5 for the grid & utilities.
- **Bilingual 🇧🇬 / 🇬🇧** — every string flows through a central `i18n/translations.js` dictionary, toggled from the navbar.
- **Security-first rendering** — a template guard (`assertSafeTemplate`) blocks `<script>`, inline event handlers, and `javascript:` URIs; the contact modal validates & sanitizes every field; enforced in CI by `eslint-plugin-no-unsanitized`.
- **Automated image pipeline** — `sharp` optimizes assets on every `dev`/`build` (via `predev`/`prebuild` hooks) — no manual export step.
- **Performance-tuned** — Lighthouse-audited, lazy media, and a modular ES6 codebase (one file per page/component).
- **Elegant, on-brand design** — sage-green + gold palette, Montserrat type, subtle motion, and a custom tree emblem uniting law, finance, and technology.

## 🧩 Services

The offering is organized into three pillars, each with dedicated detail pages:

| 🏛️ Foundations — *Основи* | 🚀 Growth — *Растеж* | 🤖 Future — *Бъдеще* |
|---|---|---|
| Company registration | Brand identity | Microsoft 365 setup |
| VAT registration | Logo design | Email security |
| Payroll & HR (ТРЗ) | Web development | AI integration |
| Accounting | Digital marketing | Process automation |
| EU-projects consulting | | |
| Licenses | | |

## 🧭 Routes

```
/                    → Home            /company-registration   /brand-identity
/basics  (Основни)   → Foundations     /vat-registration        /logo-design
/growth  (Растеж)    → Growth          /payroll-hr              /web-development
/future  (Бъдеще)    → Future          /accounting              /digital-marketing
/contacts            → Contact         /eu-projects             /microsoft-365
                                        /licenses                /email-security
                                                                 /ai-integration
                                                                 /process-automation
```

Unknown paths gracefully resolve to `/home`.

## 🛠 Built with

`Vanilla JavaScript (ES6 modules)` · `Vite 5` · `Bootstrap 5.3` · `HTML5` · `CSS3` (custom properties) · `Montserrat` · `sharp` (image optimization) · `ESLint 10` · `Stylelint 17` · deployed on `Vercel`

## 🚀 Getting started

**Prerequisites:** [Node.js](https://nodejs.org) **18+** and npm.

```bash
# 1 · Clone
git clone https://github.com/Niko5886/ATGroup.git
cd ATGroup

# 2 · Install
npm install

# 3 · Run the dev server (images are auto-optimized first)
npm run dev
```

Vite prints a local URL (default **http://localhost:5173**) — open it in your browser.

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Optimize images, then start the Vite dev server |
| `npm run build` | Optimize images, then build for production into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run optimize:images` | Run the `sharp` image-optimization pass on its own |

## 📁 Project structure

```
src/
├─ main.js                 # App entry — boots the router
├─ app/
│  └─ router.js            # Client-side routing + safe-template guard
├─ pages/                  # One module per page (home, basics, growth, future,
│                          #   contacts + 14 service detail pages)
├─ components/             # navbar · footer · contact-modal · page-layout · icons
├─ i18n/
│  └─ translations.js      # BG / EN dictionary
├─ styles/
│  └─ main.css             # Design tokens, layout & animations
└─ assets/                 # images & icons (optimized by sharp)
public/                    # favicon & static files
scripts/
└─ optimize-images.mjs     # sharp optimization pipeline
vercel.json                # SPA rewrite — all paths → index.html
vite.config.js             # Vite configuration
```

## 🔒 Security & quality

- **Safe templating** — `assertSafeTemplate()` rejects any markup containing `<script>`, inline `on*=` handlers, or `javascript:` URIs before it reaches the DOM.
- **Input hardening** — the contact modal validates and sanitizes name, phone, email, and message fields.
- **Static analysis** — `eslint-plugin-no-unsanitized` fails the lint step on unsafe DOM sinks; Stylelint enforces CSS consistency.
- **Auditing** — a committed Lighthouse report tracks performance, accessibility, and best-practice scores.

## 🎨 Design

| Token | Value | Role |
|---|---|---|
| **Primary** | `#2f6b4f` | Sage green — brand, headings, primary actions |
| **Accent** | `#c9a96a` | Warm gold — highlights & emphasis |
| **Surface** | `#f6fbf7` → `#ffffff` | Soft, airy backgrounds |
| **Type** | Montserrat 500–800 | Confident, modern headings |

## ☁️ Deployment

Deployed on **Vercel** as a static SPA. [`vercel.json`](vercel.json) rewrites every request
to `index.html` so the client-side router can resolve deep links:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

Production domain **at-group.bg** is being provisioned — link goes live once DNS is pointed.

## 👤 Author & partnership

Developed by **Nikolay Stoyanov** — AI-native Full-Stack Developer
[GitHub](https://github.com/Niko5886) · [LinkedIn](https://www.linkedin.com/in/nikolay-stoyanov-dev)

A strategic alliance between **ИНТЕЛЛЕКТ ЕООД** & **НАЙМЕРИКС ЕООД** · Ruse, Bulgaria.

## 📄 License

© 2026 Intellect & Nymerix. All rights reserved. This repository is provided for portfolio and
reference purposes; the AT Group brand, copy, and visual assets are not licensed for reuse.
