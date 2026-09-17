# Astrofoto by Christian – DriftWall

Første prototype av astrofoto-nettsiden med React Bits `DriftWall` (JS-CSS).

## Start lokalt

```bash
npm install
npm run dev
```

## Legg til dine egne bilder

Legg JPG, JPEG, PNG, WEBP, AVIF eller SVG i:

`src/assets/gallery/`

Bildene blir automatisk hentet inn av Vite. Filnavnet brukes som tittel, f.eks.:

`01-m31-andromeda.jpg` → `M31 Andromeda`

Du kan slette de medfølgende SVG-eksempelbildene når du har lagt inn dine egne.

## Bygg produksjonsversjon

```bash
npm run build
```

Produksjonsfilene havner i `dist/`.

## GitHub Pages
This project is configured to deploy automatically to GitHub Pages from the `main` branch using GitHub Actions.
