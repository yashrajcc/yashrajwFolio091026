# Yashraj Wadalkar — portfolio (Next.js + Sanity)

Local home for the portfolio revamp: case studies in Sanity, writings as link-outs (no custom blog, no MDX).

## Stack

- **Frontend:** Next.js (`frontend/`) — dev on **http://127.0.0.1:4327**
- **CMS:** Sanity Studio (`studio/`) — dev on **http://localhost:3333**
- **Mock fallback:** If Sanity env vars are missing, the site serves seeded mock content from `frontend/lib/mock.ts`.

## Routes

| Path | Purpose |
|------|---------|
| `/` | Landing + featured case studies |
| `/work` | Case study index |
| `/work/[slug]` | Case study detail |
| `/writing` | External writing links (Medium, Substack, etc.) |

## Schemas (Studio)

- `settings` (singleton)
- `caseStudy`
- `writingLink`

## Quick start (Mac)

```bash
cd ~/Projects/yashrajwFolio091026
npm install
npm run dev
```

Open **http://127.0.0.1:4327**.

Studio (after Sanity project exists):

```bash
cp studio/.env.example studio/.env
# fill SANITY_STUDIO_PROJECT_ID
npm run dev:studio
```

## Connect Sanity

1. Create a project at [sanity.io/manage](https://www.sanity.io/manage).
2. Copy env files:

   ```bash
   cp frontend/.env.example frontend/.env.local
   cp studio/.env.example studio/.env
   ```

3. Set `NEXT_PUBLIC_SANITY_PROJECT_ID` / `SANITY_STUDIO_PROJECT_ID` (same id).
4. Create a read token (Viewer) → `SANITY_API_READ_TOKEN` in `frontend/.env.local`.
5. Create an Editor token → `SANITY_API_WRITE_TOKEN` in `studio/.env`, then:

   ```bash
   npm run seed
   ```

## Deploy (later)

- **Frontend:** Vercel, root directory `frontend`, attach `work.yashraj.cc`.
- **Studio:** `npm run deploy --workspace=studio` or Sanity hosted Studio.

## Git / GitHub

This folder is a git repo. No GitHub remote is configured by default.

```bash
gh repo create yashrajwFolio091026 --private --source=. --remote=origin
git push -u origin main
```

(Use a public repo if you prefer; match your existing portfolio visibility.)

## Origin temp branch note

The cloud scaffold lived on Origin temp repo branch `cursor/portfolio-revamp-82bb`. That remote requires Cursor auth from this Mac, so this checkout was rebuilt from the same plan (Sanity clean template + portfolio IA).
