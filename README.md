# Riski Al Julian — Personal Brand (Next.js + TypeScript + Tailwind)

## Menjalankan
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```
Butuh Node.js 18.17 atau lebih baru.

## Mengubah isi
- `lib/config.ts` — WhatsApp, Instagram, TikTok, link KOPIAH TRADER & komunitas.
- `public/images/` — foto hero, poster, dan logo (ditampilkan utuh, tanpa crop).

## Deploy
- **Vercel (disarankan):** push ke GitHub, lalu Import di vercel.com. Tanpa konfigurasi tambahan.
- **VPS / Node:** `npm run build && npm start` di belakang Nginx atau PM2.
