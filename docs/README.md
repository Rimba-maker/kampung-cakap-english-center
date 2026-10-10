# Kampung Cakap English Center

Situs kursus bahasa Inggris immersive dengan informasi program, English Area, asrama, biaya, intake, dan konsultasi WhatsApp. Implementasi statis memakai Astro 7.1.4, TypeScript, Tailwind CSS 4, dan React islands untuk interaksi. Identitas visual **Campus Life** memakai foto lokal, permukaan putih/biru langit, teks biru tua, dan aksi oranye.

Dokumen umum proyek dikumpulkan di `docs/`. `AGENTS.md` dan entry point `CLAUDE.md` tetap di root; `PRODUCT.md` dan `DESIGN.md` juga tetap di root agar ditemukan oleh konteks Impeccable. Peta dokumen dan kondisi kapan AI harus membacanya tersedia di `AGENTS.md`.

## Menjalankan proyek

Prasyarat: Node.js **>=22.12.0** dan npm. Jalankan dari root proyek:

```sh
npm install
npx astro dev --background
npx astro dev status
npx astro dev logs
npx astro dev logs --follow
npx astro dev stop
```

Gunakan `status` untuk mengetahui alamat/proses yang aktif; port pengembangan default 4321. Gunakan `logs` untuk diagnosis, `--follow` untuk mengikuti log, dan `stop` setelah selesai. Jangan membuat server kedua bila server proyek sudah berjalan. Konvensi background ini mengikuti [referensi CLI Astro](https://docs.astro.build/en/reference/cli-reference/).

Script yang benar-benar tersedia di `package.json`:

| Perintah | Fungsi |
| --- | --- |
| `npm run dev` | Menjalankan `astro dev`; alur kerja proyek memakai perintah background di atas. |
| `npm run build` | Menjalankan `astro build`, menghasilkan situs statis di `dist/`. |
| `npm run preview` | Menjalankan `astro preview` untuk hasil build. |
| `npm run astro -- --help` | Menjalankan CLI `astro` dengan bantuan perintah. |

Tidak ada script test atau lint di `package.json`. Untuk build lokal, base path `/`. `astro.config.mjs` memakai `/kampung-cakap-english-center` ketika `GITHUB_ACTIONS=true`, dengan site `https://rimba-maker.github.io`. Tautan dan aset internal memakai `withBase()` dari `src/lib/site.ts`; foto memakai `photo()` dari `src/lib/photos.ts`. Jangan hardcode base deployment pada halaman.

## Sebelas rute

| Rute | Isi |
| --- | --- |
| `/` | Beranda, pengalaman immersion dan ringkasan program. |
| `/program/` | Confidence, Active, Fluent & TOEFL Prep, Micro Teaching. |
| `/asrama-english-area/` | Asrama, tutor pendamping dan aturan English Area. |
| `/fasilitas/` | Informasi fasilitas dengan foto ilustrasi. |
| `/harga/` | Estimasi kursus dan biaya tempat tinggal terpisah. |
| `/pendaftaran/` | Intake tanggal 10/25, langkah daftar dan persiapan. |
| `/lokasi-wisata/` | Konteks lokasi dan wisata weekend opsional. |
| `/alumni/` | Contoh cerita dan filter program, bukan testimoni terverifikasi. |
| `/tentang-kami/` | Pendekatan belajar dan batas informasi lembaga. |
| `/faq/` | Pertanyaan umum dengan disclosure native. |
| `/kontak/` | Form pembuat pesan konsultasi WhatsApp. |

## Desain, sumber dan media

- [PRD](kampung-cakap-english-center-PRD.md): PRD; angka harga/legalitas di dalamnya masih draf.
- [PRODUCT.md](../PRODUCT.md): kebenaran produk dan batas klaim.
- [DESIGN.md](../DESIGN.md): token normatif YAML dan panduan visual hasil implementasi, termasuk judul FAQ/kontak yang sengaja lebih ringan.
- [.impeccable/design.json](../.impeccable/design.json): sidecar schemaVersion 2, metadata, motion, breakpoint dan sembilan preview komponen HTML/CSS mandiri. Tonal ramp adalah metadata visualisasi yang disintesis, bukan tambahan token warna yang dipakai UI.
- [Brief beranda](home-surface.md): arah dan kriteria sukses khusus beranda.
- `src/styles/global.css`: font lokal, warna, tata letak responsif dan komponen bersama.
- `src/components/shared/`: navbar, footer, hero halaman dan tombol WhatsApp; `src/components/home/Hero.tsx`: triptych beranda.
- `src/pages/*.astro`: halaman dan gaya spesifik; komponen alumni/FAQ/kontak mempertahankan interaksi nyata.
- `public/images/`: **35 foto WebP lokal dari Pexels**, sekitar 3,87 MB gabungan menurut catatan implementasi. Foto tidak bergantung pada hotlink saat halaman dibuka.
- `public/images/sources.json`: ID foto, fotografer, halaman sumber, URL unduhan, dimensi, ukuran, SHA256 dan disclosure setiap foto; [lisensi Pexels](https://www.pexels.com/license/).
- `public/images/<nama>.webp.json`: sidecar asal/provenance untuk semua 35 foto. Penambahan provenance tidak mengubah piksel hasil decode atau SHA256 foto yang tercatat.

Semua foto merupakan **ilustrasi stock**, bukan bukti ruang, staf, siswa, atau alumni asli Kampung Cakap. Identitas model tidak boleh dianggap sebagai identitas peserta. Nama lokasi wisata hanya boleh diperlakukan sebagai lokasi foto bila metadata sumber memverifikasinya. Pertahankan disclosure dekat foto/galeri, alt deskriptif sesuai gambar, dimensi gambar, dan lazy loading di bawah viewport awal.

Desktop memakai container maksimum 1280px dan navigasi dropdown; mobile memakai gutter 20px, menu tombol dengan Escape, grid yang menyesuaikan dan triptych yang tetap terlihat. Tabel harga lebar bergulir dalam wilayah lokal berlabel, bukan membuat dokumen melebar. Animasi foto tunggal dimulai dari konten SSR yang terlihat dan menghormati reduced motion.

## Batas kontak dan kesiapan peluncuran

`WHATSAPP_NUMBER` di `src/lib/site.ts` saat ini **6281234567890**, nomor demonstrasi yang belum diverifikasi. Form tidak menyimpan pendaftaran atau mengirim pesan otomatis: form memvalidasi nama/telepon, menyiapkan pesan ber-URL-encoding, membuka WhatsApp di tab baru, dan menyediakan tautan fallback identik. Pengunjung tetap perlu memeriksa dan menekan kirim di WhatsApp. Jangan kirim data sensitif atau pembayaran ke tujuan demo.

Sebelum peluncuran nyata, pemilik wajib menyediakan nomor WhatsApp resmi, alamat kampus/pin peta yang tepat, kanal kontak/sosial yang disetujui, data legalitas (termasuk SK Diknas/NPSN jika akan ditampilkan), harga serta ketentuan pembayaran yang disahkan, dan persetujuan cerita/testimoni serta dokumentasi asli. Jangan mengganti ketiadaan data dengan angka/identitas rekaan. Pertahankan penjelasan DP minimal 50%, biaya asrama terpisah, asrama putra/putri terpisah, intake reguler 10/25, dan wisata opsional sesuai konteks produk.

## Verifikasi yang tercatat

Dokumentasi ini merangkum **observasi dari paket penyelesaian dan bukti integrasi**, bukan mengklaim menjalankan pemeriksaan baru pada saat penulisan:

- `npm run build` berhasil pada Astro 7.1.4: 11 halaman statis; build awal tercatat 1,69 detik dan build integrasi terakhir setelah koreksi alt tercatat 1,59 detik.
- Preview produksi `http://localhost:4322` dan pengembangan `http://localhost:4321` telah digunakan. Matriks 22 rute/viewport diperiksa pada desktop nominal 1440px dan mobile 390px: satu h1 per halaman, semua gambar terdecode, islands terhidrasi, tanpa foto rusak, error browser atau overflow dokumen.
- Menu mobile buka/Escape tutup, dropdown desktop, anchor empat program, FAQ buka/tutup, dan filter alumni diuji. Hitungan filter: 8 total, 3 Confidence, 2 Active, 2 Fluent/TOEFL, 1 Micro Teaching.
- Tabel harga minimum 720px bergulir di wilayah mobile 350px; ArrowRight menggeser 39px tanpa membuat root lebih lebar dari 390px.
- Form kosong memunculkan error nama/telepon dan fokus pertama; telepon alfabet ditolak. Nama dengan ampersand, nomor +62 berspasi, Active/1 Bulan dan tanggal ISO 2026-10-25 menghasilkan URL WhatsApp benar dan fallback identik. `window.open` diintersep: tidak ada pesan nyata dikirim.
- Pada tanggal browser 10 Oktober 2026, intake menampilkan 10 dan 25 Oktober 2026 dengan pesan WA yang cocok. Ini observasi pada tanggal tersebut, bukan jadwal beku.
- Pemindaian Impeccable yang dicatat mengembalikan `[]`. Pemeriksaan provenance melaporkan 35 foto dan nol sidecar hilang.
- Iframe Google Maps eksternal **belum terverifikasi penuh**: capture awal kosong; pemuatan eager saat recapture menghasilkan event load pada lokasi mobile, tetapi lokasi desktop serta kontak desktop/mobile melewati batas tunggu 5 detik. Tautan fallback Google Maps tetap tersedia; keberadaan tautan bukan bukti bahwa iframe atau tujuan eksternal berhasil dimuat.

Bukti berada di `.impeccable/review/verification.json`, serta PNG `<slug>-desktop.png` dan `<slug>-mobile.png` untuk `home`, `program`, `asrama-english-area`, `fasilitas`, `harga`, `pendaftaran`, `lokasi-wisata`, `alumni`, `tentang-kami`, `faq`, `kontak`. Contact sheet `overview-*.jpg` adalah indeks, bukan pengganti PNG penuh; capture `.webp` lama bukan bukti final. Setelah pemeriksaan awal, integrator membetulkan tiga alt ilustrasi agar cocok dengan rak buku perpustakaan dan dua perempuan berbincang di kamar ranjang susun; token/layout/perilaku tidak berubah. Integrator melaporkan build ulang berhasil dan seluruh 22 PNG telah diambil ulang, dengan subjek alt diperiksa pada browser. Review akhir independen menggunakan reviewer generik ekuivalen karena agen khusus `impeccable-finish-reviewer` tidak tersedia; dokumentasi ini juga memakai handoff spesialis ekuivalen, bukan mengklaim menjalankan agen bawaan tersebut.

Artefak pemeriksaan di `.impeccable/review/` dan data sesi di `.impeccable/questions/` bersifat lokal dan diabaikan Git; keduanya tidak tersedia pada clone baru. Foto beserta provenance dan sidecar desain tetap masuk repository.
