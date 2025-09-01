# Own‑It Website Starter

A tiny, portable website you fully own. No frameworks, no build tools, no accounts required.
Everything is plain **HTML/CSS/JS** so you can host it anywhere (or offline).

> Created on 2025-09-01. MIT licensed for you to use freely.

---

## 1) Edit locally

- Open `index.html` and replace:
  - `YourBrand` with your name/brand.
  - The text in **About**, **Projects**, and **Contact**.
- In `script.js`, change `yourEmail` to your real email address.
- Update `link rel="canonical"` in `index.html` to your final site URL (after you deploy).
- Optional: Replace the SVGs in `assets/` with your own logo/hero.

Double‑click `index.html` to preview in your browser.

---

## 2) Deploy free with GitHub Pages (you keep the code)

1. Create a free GitHub account (if you don’t have one).
2. Make a new repository (public or private).
3. Upload these files (or use Git commands below).
4. Go to **Settings → Pages**:
   - **Source**: Deploy from branch
   - **Branch**: `main` (root)
5. Wait ~30–90 seconds. Your site will be live at:
   - `https://<your-username>.github.io/<your-repo>/`

**Git commands** (optional):

```bash
git init
git add .
git commit -m "Initial commit: own-it website starter"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

---

## 3) Add a custom domain (optional, not free)

- Buy a domain from any registrar (Namecheap, Cloudflare, etc.).
- In repo, add a `CNAME` file containing your domain, e.g. `example.com`.
- Point DNS (CNAME) to `<your-username>.github.io`.

> Domains cost money, so skip this step if you need absolutely free.

---

## 4) Contact form you control (options)

### Mailto (included, zero backend)
- Uses the visitor’s email client. Nothing is stored on any server.

### Serverless endpoint **you own**
If you want a real form backend but still keep ownership, create a free Cloudflare Worker
and route form POSTs to your email or a KV store you control.
You can move this code anywhere later (it’s just JS).

Example Worker (save as `worker.js` in a separate project):

```js
export default {
  async fetch(req) {
    if (req.method === "POST") {
      const data = await req.formData();
      const payload = Object.fromEntries(data);
      // TODO: send email via an SMTP relay you control, or log/store payload
      return new Response("OK", { status: 200 });
    }
    return new Response("Not found", { status: 404 });
  }
}
```

Then change the form in `index.html` to `method="post"` and set `action` to your Worker URL.

---

## 5) SEO basics

- Keep `<title>` and `<meta name="description">` concise and accurate.
- Update `og:` meta tags for social sharing.
- Update `sitemap.xml` with your final URL, and ensure `robots.txt` points to it.

---

## 6) License

MIT — see `LICENSE`. You own your copy outright.
