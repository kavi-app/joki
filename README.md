# CodeCraft — Landing Page

Landing page elegan dark blue & gold untuk jasa tugas koding/aplikasi.

## Fitur
- 🔍 **Track Order** — Searchbar real-time untuk pantau progress pengerjaan
- 🎯 **CTA Section** — Kartu layanan + banner ajakan pesan
- 🗂️ **Portfolio** — Grid proyek dengan filter kategori
- 📬 **Kontak** — Form order langsung ke WhatsApp + info kontak

## Tech Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (opsional, bisa ditambah)
- **Lucide React** (icons)

## Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build production
npm run build
npm start
```

Buka http://localhost:3000

## Kustomisasi

### Ganti nomor WhatsApp
Di `components/Contact.tsx`, cari dan ganti:
```
https://wa.me/6281234567890
```

### Update data order (Track Order)
Di `components/TrackOrder.tsx`, edit array `ORDERS` atau hubungkan ke API backend.

### Update portfolio
Di `components/Portfolio.tsx`, edit array `PROJECTS`.

### Warna & Font
Di `app/globals.css` dan `tailwind.config.js`.
# joki
