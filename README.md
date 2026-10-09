# Yashraj Wadalkar — portfolio (Next.js + Payload CMS 3)

Local revamp of [work.yashraj.cc](https://work.yashraj.cc): case studies edited in **`/admin`**, writings as external link-outs (Substack / Medium). No Sanity, no MDX, no blog engine.

## Stack

- **Next.js 16** + **Payload CMS 3** (one app: public site + admin)
- **SQLite** locally (`payload.db` in the project root)
- Dev server on **http://127.0.0.1:4327** (not 3000)

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
- **Case studies** — title, slug, role, dates, summary, cover, body (rich text), featured, company/tags
- **Writing links** — title, URL, source, optional date/blurb
- **Settings** (global) — site name, tagline, contact email, about

## Quick start (Mac)

```bash
cd ~/Projects/yashrajwFolio091026
npm install
npm run dev
```

Open:

- Site: **http://127.0.0.1:4327**
- Admin: **http://127.0.0.1:4327/admin**

On first boot, `onInit` seeds:

- Settings + 2 case studies (LAMP, Mainframe Assessment Tool) + writing links
- Admin user if none exists:

  - **Email:** `hello@yashraj.cc`
  - **Password:** `ChangeMeLocal1!`

Change that password after first login.

If you prefer to create the first admin yourself in the browser, set `SEED_ON_INIT=false` in `.env` before the first run (then create the user at `/admin`).

## Environment

Copy from the example if needed:

```bash
cp .env.example .env
```

| Variable | Purpose |
|----------|---------|
| `DATABASE_URL` | SQLite file URI, default `file:./payload.db` |
| `PAYLOAD_SECRET` | Random secret for auth/encryption |
| `SEED_ON_INIT` | `false` to skip auto-seed |

SQLite file path: **`./payload.db`** (project root). It is gitignored.

Useful scripts:

```bash
npm run generate:types      # refresh src/payload-types.ts
npm run generate:importmap  # after custom admin components
npm run payload migrate     # when you add SQL migrations later
```

## Production notes (later)

- **Host:** Vercel → `work.yashraj.cc`
- **DB:** switch from `@payloadcms/db-sqlite` to `@payloadcms/db-postgres` (e.g. Neon). Point `DATABASE_URL` at the Neon connection string, run migrations, redeploy.
- Keep `/admin` behind Payload auth; do not expose write tokens publicly.

## Git

This folder is a git repo. No GitHub remote is required for local work.
