# AAA Academy — Website

**English** · [Українська](README.uk.md)

Landing page for AAA Academy (Montréal / Côte-Saint-Luc).
Static site, hosted on GitHub Pages, custom domain **aaaacademy.ca**.

## Project structure

```
draft02/
├── index.html              # main page
├── thanks.html             # post-form-submit page
├── 404.html                # not-found page
├── CNAME                   # GitHub Pages → aaaacademy.ca
├── .nojekyll               # disables Jekyll processing
├── robots.txt
├── sitemap.xml
└── assets/
    ├── css/styles.css
    ├── js/
    │   ├── i18n.js         # FR / EN translations
    │   └── main.js         # language toggle, scroll, animations
    ├── img/                # all images (optimized)
    └── icons/logo.svg
```

## Local preview

Just open `index.html` in a browser. Or run a local server:

```bash
cd draft02
python3 -m http.server 8000
# open http://localhost:8000
```

## Deployment

Push to the `main` branch → GitHub Pages auto-publishes to **aaaacademy.ca**.

## Contact form

The form is sent via [FormSubmit](https://formsubmit.co/) to `aaacademy2025@hotmail.com`.
After submit → redirect to `https://aaaacademy.ca/thanks.html`.

**First time only:** FormSubmit will email a confirmation link — click it once,
otherwise the form stays inactive.

## What to edit

- **Copy / text** — `assets/js/i18n.js` (the `window.translations` object with `fr` and `en` keys).
- **Images** — `assets/img/`. Keep file names, or update both the file and the references in HTML/CSS.
- **Styles** — `assets/css/styles.css`.
- **Social links, address, email** — `index.html` (contact section + JSON-LD in `<head>`).

## Tech

- Plain HTML / CSS / JS — no build step.
- Bootstrap 5.3 + Bootstrap Icons via CDN.
- FormSubmit for the contact form (no backend needed).
