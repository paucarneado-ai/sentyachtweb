# SentYacht — Deployment Guide (easypanel)

This document walks through deploying the SentYacht static site to easypanel, from repo to live HTTPS URL.

## Prerequisites

- [ ] GitHub repo with latest code pushed: `https://github.com/paucarneado-ai/sentyachtweb`
- [ ] easypanel account + server (VPS on Hostinger or elsewhere)
- [ ] DNS access for `sentyacht.com` (Hostinger control panel)
- [ ] `info@sentyacht.com` mailbox access (for FormSubmit activation)

---

## How the build works

This is a **static HTML site** that ships through a 2-stage Docker build:

- **Stage 1 (Node Alpine)**: Installs `tailwindcss`, scans the committed HTML in `es/` and `en/`, and compiles `dist/styles/tailwind.css`.
- **Stage 2 (nginx:alpine)**: Copies the committed HTML, assets, compiled CSS, and config into the nginx image.

**Important**: `build.mjs` is NOT run during Docker build. The HTML in `es/` and `en/` is the source of truth — it's hand-edited directly, not regenerated. Running `build.mjs` locally would overwrite those edits.

---

## Step 1 — Push to GitHub

From your dev machine:

```bash
cd "/path/to/Weblocuramoderada"
git status                    # review changes
git add .                     # stage everything (or stage selectively)
git commit -m "Your message"  # commit
git push origin main          # push to GitHub
```

---

## Step 2 — Create the easypanel app

1. Log into easypanel.
2. Click **+ Create Service** → **App**.
3. Name: `sentyacht`.
4. **Source**: GitHub.
5. Connect your GitHub account if not already.
6. Select repo: `paucarneado-ai/sentyachtweb`.
7. Branch: `main`.
8. **Build**: select **Dockerfile** (not Buildpacks, not Nixpacks).
9. Dockerfile path: `Dockerfile` (the default, at repo root).
10. Click **Create**.

easypanel will clone the repo and start building. First build takes ~2-3 minutes.

---

## Step 3 — Configure the domain + SSL

### 3a. Point DNS to your easypanel server

In Hostinger's DNS management for `sentyacht.com`:

1. Add an **A record**:
   - Name: `@`  (root domain)
   - Value: `[your easypanel server public IP]`
   - TTL: 3600
2. Add an **A record** for `www`:
   - Name: `www`
   - Value: `[your easypanel server public IP]`
   - TTL: 3600

Save and wait for DNS propagation (usually 5-30 minutes, up to 24 hours).

Verify with:
```bash
nslookup sentyacht.com
nslookup www.sentyacht.com
```

Both should return the easypanel server IP.

### 3b. Attach domain in easypanel

1. Open the `sentyacht` app in easypanel.
2. Go to **Domains** tab.
3. Click **+ Add Domain**.
4. Enter: `sentyacht.com`
5. Add another: `www.sentyacht.com`
6. For both, enable **HTTPS** (easypanel uses Let's Encrypt).
7. Set port: `80` (that's what the Dockerfile exposes).
8. Save.

easypanel will request a Let's Encrypt certificate automatically. You should see a green padlock on `https://sentyacht.com` within a few minutes.

---

## Step 4 — FormSubmit activation

FormSubmit (the form handler for all site forms) requires a one-time activation.

1. Open your site: `https://sentyacht.com/es/contacto/`
2. Fill in the contact form with real data and submit.
3. Within 1-2 minutes, you'll get an email at `info@sentyacht.com` from FormSubmit titled **"Please Confirm your Email"** (or similar).
4. Click the confirmation link in that email.
5. FormSubmit will show you a **hash URL** like `https://formsubmit.co/abc123def456`.
6. **Copy that hash URL** and give it to your developer (or swap it yourself).

To swap the hash into all 29 forms, run this find-and-replace across the repo, replacing `info@sentyacht.com` with the hash:

```bash
# Example — replace YOURHASH with the real hash FormSubmit gave you
grep -rl "https://formsubmit.co/info@sentyacht.com" es/ en/ | \
  xargs sed -i '' 's|https://formsubmit.co/info@sentyacht.com|https://formsubmit.co/YOURHASH|g'

grep -rl "https://formsubmit.co/ajax/info@sentyacht.com" es/ en/ | \
  xargs sed -i '' 's|https://formsubmit.co/ajax/info@sentyacht.com|https://formsubmit.co/ajax/YOURHASH|g'
```

Commit, push, and easypanel will auto-redeploy.

---

## Step 5 — Post-deploy checks

Run through this checklist:

- [ ] `https://sentyacht.com/` loads (root redirect to `/es/`)
- [ ] `https://sentyacht.com/es/` — Spanish home
- [ ] `https://sentyacht.com/en/` — English home
- [ ] `https://sentyacht.com/es/yates-en-venta/` — listings
- [ ] `https://sentyacht.com/es/barcos/astondoa-82-glx-2008/` — a boat detail (check images load from `/assets/Imagenes%20WEB/...`)
- [ ] `https://sentyacht.com/es/contacto/` — fill and submit the contact form, check you get the email
- [ ] `https://sentyacht.com/es/valoracion-confidencial/` — fill and submit the valuation form
- [ ] `https://sentyacht.com/es/landing/` — Meta Ads landing
- [ ] `https://sentyacht.com/sitemap.xml` — sitemap is served
- [ ] `https://sentyacht.com/robots.txt` — robots.txt is served
- [ ] `https://sentyacht.com/nonexistent-url` — shows the Spanish 404 page
- [ ] `https://sentyacht.com/en/nonexistent-url` — shows the English 404 page
- [ ] SSL padlock visible (HTTPS)
- [ ] Mobile: test on a real phone — hamburger menu opens/closes, forms work, no horizontal scroll
- [ ] Language switcher ES↔EN works on every page

---

## Optional post-launch setup

These can be done after the site is live:

- **Meta Pixel**: Replace `PIXEL_ID` in `es/landing/index.html` with your real Facebook Pixel ID, uncomment the `fbq('init', ...)` and `fbq('track', 'PageView')` lines. Commit + push.
- **Google Analytics 4**: Add the GA4 snippet to a shared head area (would require touching every HTML file — ~50 files). Can script it.
- **Google Search Console**: Verify ownership via DNS TXT record, HTML meta tag, or HTML file. Submit the sitemap: `https://sentyacht.com/sitemap.xml`.

---

## Troubleshooting

### Build fails in easypanel

- Check build logs for the exact error.
- If `npx tailwindcss` fails: `package.json` or `tailwind.config.js` issue. Ensure they're both in the repo root.
- If `COPY src/styles/main.css` fails: `src/styles/main.css` must exist in the repo.
- If nginx fails to start: check `nginx.conf` syntax (use `nginx -t` locally in a container).

### Site loads but images are broken

- All boat images are at `/assets/Imagenes%20WEB/{slug}/...` (capitalized, space-encoded).
- If 404: check that the `assets/Imagenes WEB/` directory was copied into the image. Run `docker run --rm sentyacht ls /usr/share/nginx/html/assets/ | grep -i imagen` to verify.

### Forms return error

- Most likely FormSubmit isn't activated yet (Step 4 above).
- Submit one form, check `info@sentyacht.com`, click the activation link.

### Wrong nav link goes to 404

- Check that both `es/` and `en/` directories have `index.html` at every referenced path.
- Run `curl -I https://sentyacht.com/es/yates-en-venta/` to see the actual status.

### Let's Encrypt cert not issued

- Make sure DNS has propagated (can take up to 24 hours).
- Easypanel needs ports 80 and 443 open on the server firewall.
- Check easypanel SSL logs for the specific error.

---

## Rolling back

If a deploy breaks the site:

```bash
git revert HEAD              # revert the last commit
git push origin main         # trigger auto-redeploy
```

Or in easypanel, click **Deployments** → select a previous successful build → **Redeploy**.

---

## Important reminders

1. **Never run `node build.mjs`** unless you explicitly want to regenerate all HTML from templates (which will destroy hand-tuned edits). The committed HTML in `es/` and `en/` is the source of truth.
2. **Never force-push to `main`** — you'll lose history and might break easypanel's auto-deploy.
3. **Always test on the local dev server before pushing**: `node serve.mjs` → visit `http://localhost:3000/es/`.
4. **Keep `info@sentyacht.com` mailbox alive** — all form leads go there. If the mailbox is full or bounces, leads are lost.
