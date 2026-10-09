# Yashraj Wadalkar — portfolio (Next.js + Payload CMS 3)

Local revamp of [work.yashraj.cc](https://work.yashraj.cc): case studies edited in **`/admin`**, writings as external link-outs (Substack / Medium). No Sanity, no MDX, no blog engine.

## Stack

- **Next.js 16** + **Payload CMS 3** (one app: public site + admin)
- **SQLite** locally (`payload.db` in the project root)
- **Neon Postgres** on Vercel (serverless)
- Local dev on **http://127.0.0.1:4327** (not 3000)

## Routes

| Path | Purpose |
|------|---------|
| `/` | Landing + featured case studies |
| `/work` | Case study index |
| `/work/[slug]` | Case study detail |
| `/writing` | External writing links |
| `/admin` | Payload editor |

## Collections & globals

- **Users** — admin auth
- **Media** — uploads
- **Case studies** — title, slug, role, dates, summary, **body** (Lexical rich text), cover, featured, company/tags
- **Writing links** — title, URL, source, optional date/blurb
- **Settings** (global) — site name, tagline, contact email, about

## Quick start (Mac)

```bash
cd ~/Projects/yashrajwFolio091026
cp .env.example .env   # if needed — keep DATABASE_URL=file:./payload.db for local
npm install
npm run dev
```

Open:

- Site: **http://127.0.0.1:4327**
- Admin: **http://127.0.0.1:4327/admin**

On first boot, `onInit` seeds settings, 2 case studies (LAMP, MAT), writing links, and an admin user if none exists:

- **Email:** `hello@yashraj.cc`
- **Password:** `ChangeMeLocal1!`

Change that password after first login. Set `SEED_ON_INIT=false` to skip seeding.

> If `.env.local` was pulled from Vercel, it may override local SQLite with Neon. For day-to-day local work, prefer `.env` with `file:./payload.db` and remove/rename `.env.local`, or keep using Neon against the free DB.

## Environment

| Variable | Purpose |
|----------|---------|
| `DATABASE_URL` | Local: `file:./payload.db`. Production: Neon `postgresql://…` (also set as `POSTGRES_URL` by Vercel Neon) |
| `PAYLOAD_SECRET` | Random secret for auth/encryption (required on Vercel) |
| `SEED_ON_INIT` | `false` to skip auto-seed |

SQLite file path: **`./payload.db`** (gitignored).

Useful scripts:

```bash
npm run generate:types
npm run generate:importmap
npm run payload migrate   # apply SQL migrations (used on Vercel build)
npm run seed
```

## Deploy (Vercel + Neon)

- **GitHub:** https://github.com/yashrajcc/yashrajwFolio091026
- **Vercel project:** `yashrajw-folio-091026` (linked to `main` — deploys on push)
- **DB:** Neon free tier via Vercel Marketplace (`yashrajw-folio-db`)
- **Build:** `payload migrate && next build` (see `package.json`)
- **No custom domain** attached in this setup (use the `*.vercel.app` URL)

Production admin: open `/admin` on the Vercel URL. If the DB was seeded, use the seed credentials above and change the password immediately. If not seeded, create the first user in the browser.

Media uploads on Vercel eventually need blob storage; seeded case studies work without covers.

## Git

```bash
git push -u origin main
```
