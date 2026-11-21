# Homepage

Personal homepage of [Szymon Marciniak](https://github.com/VashaTS) (VashaTS).

Static HTML and CSS, no build step. Live at [vashats.pages.dev](https://vashats.pages.dev).

## Local preview

Serve the repository root with any static file server, for example:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Editing projects

- Home cards, including the EDMPGM “links coming soon” placeholder: `index.html`
- Minecraft mods, Modrinth placeholders, and the Brody-Nojewo server: `minecraft/index.html`
- Android games (Gravity Lines): `android/index.html`
- Shared colours and layout: `assets/style.css`

When a Modrinth listing goes live, replace the disabled “Modrinth soon” control with a real link. The intended slugs are already noted in HTML comments.

## Deploy

This project is meant to be published as a Cloudflare Pages site from the repository root (no build command, output directory `.` or empty).
