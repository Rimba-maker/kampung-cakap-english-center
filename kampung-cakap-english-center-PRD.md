# PRD: Kampung Cakap English Center — Kursus Bahasa Inggris Immersive (Multi-Page)

## 0. Ringkasan Riset

PRD ini disusun berdasarkan riset mendalam terhadap model bisnis "Kampung Inggris" asli di Pare, Kediri, Jawa Timur — bukan kursus bahasa biasa, tapi **immersive English village** dengan sistem asrama wajib berbahasa Inggris 24 jam. Temuan kunci dari riset:

- Legalitas lembaga kursus semacam ini umumnya berbasis **SK Diknas** (Dinas Pendidikan), bukan Kemnaker
- Struktur program biasanya berjenjang: dari nol → sudah ada dasar → persiapan TOEFL/fluent → (opsional) micro teaching
- **English Area/Camp System** adalah diferensiator paling ikonik: asrama dengan aturan wajib berbahasa Inggris 24 jam, ada tutor pendamping tinggal serumah, sistem hukuman/denda untuk pelanggaran
- Sistem pendaftaran umumnya batch (intake tanggal 10 & 25 tiap bulan), meski beberapa lembaga modern sudah menerapkan sistem rolling
- Budaya wisata akhir pekan (Bromo, Batu Malang, Kawah Ijen) jadi bagian dari daya tarik karena banyak peserta datang dari luar kota

*Catatan: seluruh harga dan nomor legalitas di PRD ini bersifat estimasi untuk keperluan draf — wajib disesuaikan dengan data nyata sebelum go-live.*

---

## 1. Brand Identity

**Nama Brand:** Kampung Cakap English Center
**Alasan Naming:** "Cakap" dalam bahasa Indonesia punya makna ganda — "berbicara/bercakap" (sangat relevan untuk program speaking-focused) dan "cakap" sebagai kata sifat yang berarti "mahir/kompeten". "Kampung" mempertahankan positioning sebagai kawasan immersive village, bukan sekadar ruang kelas. Nama ini dipilih khusus untuk menghindari kata-kata yang sudah sangat umum dipakai lembaga sejenis (Versity, Benefit, Global, dll).

**Tagline:** *"Datang Bisu, Pulang Cakap."*

**Target Audience:**
- Mahasiswa yang libur semester dan ingin belajar intensif sambil "staycation"
- Fresh graduate yang mempersiapkan TOEFL untuk kerja/beasiswa
- Pelajar SMA yang mempersiapkan diri untuk kuliah/pertukaran pelajar
- Profesional yang butuh upgrade speaking untuk karier
- Siapapun yang ingin lepas dari rasa malu berbicara bahasa Inggris dalam waktu singkat

**Brand Voice:**
- Tone: Semangat, seru, tapi tetap disiplin — perpaduan antara "liburan belajar" dan "camp yang serius"
- Style copywriting: Relatable buat anak muda, sedikit humor, straightforward soal aturan camp (tidak menyembunyikan bahwa ini butuh komitmen)
- Avoid: Bahasa terlalu formal ala sekolah, atau sebaliknya terlalu santai sampai terkesan tidak serius belajar

---

## 2. Tech Stack

- **Framework:** Astro 5 (SSG, multi-page routing)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript (strict)
- **Animation:** Framer Motion via React islands
- **Deploy:** GitHub Pages atau Surge.sh (static hosting)
- **Images:** Unsplash + Pexels (kelas bahasa Inggris, asrama/dorm, anak muda belajar, wisata Jawa Timur)

---

## 3. Pages Overview

| Halaman | Route | Prioritas |
|---------|-------|-----------|
| Beranda | `/` | 🔴 Critical |
| Program | `/program/` | 🔴 Critical |
| Sistem Asrama & English Area | `/asrama-english-area/` | 🔴 Critical |
| Fasilitas | `/fasilitas/` | 🟠 High |
| Harga & Paket | `/harga/` | 🔴 Critical |
| Jadwal & Cara Daftar | `/pendaftaran/` | 🟠 High |
| Lokasi & Wisata Sekitar | `/lokasi-wisata/` | 🟡 Medium |
| Alumni & Testimoni | `/alumni/` | 🔴 Critical |
| Tentang Kami | `/tentang-kami/` | 🟠 High |
| FAQ | `/faq/` | 🟠 High |
| Kontak | `/kontak/` | 🔴 Critical |

---

## 4. Global Components

### Navbar (`.astro` static — semua halaman)
- Logo
- Menu: Beranda • Program • Asrama & English Area • Fasilitas • Harga • Pendaftaran • Lokasi & Wisata • Alumni • Tentang Kami • FAQ
- CTA: **Daftar Sekarang** (WhatsApp)

### Floating WhatsApp Button
- Fixed bottom-right, semua halaman

### Footer (`.astro` static — semua halaman)
- Logo, tagline
- Quick links semua halaman
- Legalitas: SK Diknas No. [isi sesuai dokumen], NPSN [isi sesuai dokumen]
- Kontak: WhatsApp, telepon, email, alamat
- Sosmed: Instagram, TikTok, YouTube

---

## 5. Beranda (`/`)

### Section Breakdown

| # | Section | Type | Tujuan |
|---|---------|------|--------|
| 1 | Hero (full-bleed) | React island `client:load` | Statement energik + CTA |
| 2 | Trust Bar | React island `client:load` | Badge kepercayaan |
| 3 | Kenapa Kampung Cakap | React island `client:visible` | USP inti |
| 4 | Program Overview | React island `client:visible` | Preview 4 jenjang program |
| 5 | English Area Preview | React island `client:visible` | Cuplikan sistem asrama unik |
| 6 | Paket Populer | React island `client:visible` | 3 paket harga terlaris |
| 7 | Alumni Preview | React island `client:visible` | Testimoni + link ke halaman lengkap |
| 8 | Lokasi & Wisata Teaser | `.astro` static | Cuplikan daya tarik wisata sekitar |
| 9 | CTA Final | `.astro` static | Daftar sekarang |

### Copywriting

#### Hero
- **Visual:** Foto full-bleed sekelompok anak muda belajar/diskusi outdoor dengan suasana ceria, atau suasana kelas English speaking yang hidup
- **Headline:** Datang Bisu, Pulang Cakap.
- **Subheadline:** Kursus bahasa Inggris immersive dengan sistem asrama wajib berbahasa Inggris 24 jam. Belajar cepat, praktik terus-menerus, dan tetap sempat healing ke Bromo & Batu di akhir pekan.
- **CTA Primary:** Daftar Sekarang
- **CTA Secondary:** Lihat Program & Harga

#### Trust Bar
"🗣️ English Area 24 Jam" • "📜 Terdaftar SK Diknas" • "🎓 2.000+ Alumni" • "🏔️ Dekat Bromo & Batu Malang"

#### Kenapa Kampung Cakap
- **Heading:** Kenapa Belajar di Sini Beda?
4 poin:
- 🗣️ **Immersion, Bukan Cuma Kelas** — Praktik 24 jam di asrama, bukan cuma 2 jam di ruang kelas lalu lupa lagi
- 👥 **Tutor Tinggal Bareng Kamu** — Ada partner speaking setiap saat, bukan cuma pas jam pelajaran
- 📈 **Jenjang Jelas Dari Nol** — Confidence → Active → Fluent/TOEFL, kamu tahu persis progresmu
- 🎒 **Belajar Sambil Liburan** — Weekend bisa healing ke Bromo, Kawah Ijen, atau Batu Malang

#### Program Overview
- **Heading:** Program Kami.
Grid 4 kartu (link ke halaman Program dengan anchor per jenjang):
- 🌱 Confidence (Dari Nol)
- 🌿 Active (Sudah Ada Dasar)
- 🎯 Fluent & TOEFL Prep
- 👨‍🏫 Micro Teaching (Lanjutan)

#### English Area Preview
- **Heading:** Wajib Bahasa Inggris 24 Jam. Serius.
- **Body:** Begitu masuk asrama, kamu wajib ngobrol bahasa Inggris — sama teman sekamar, sama tutor, bahkan pas ngantre kamar mandi. Ketahuan pakai Bahasa Indonesia? Siap-siap kena "hukuman" seru: hafalan vocab tambahan atau speech dadakan di depan teman-teman.
- CTA: "Pelajari Sistem Asrama Lengkap →"

#### Paket Populer
- **Heading:** Paket Yang Paling Sering Dipilih.
3 kartu (contoh):
- 2 Minggu (Coba Dulu) — Rp 850.000
- 1 Bulan (Reguler) — Rp 1.500.000 ⭐ Terpopuler
- 6 Bulan (Dari Nol Sampai Fluent) — Rp 6.500.000

#### Alumni Preview
- 3 testimoni singkat + CTA "Lihat Semua Cerita Alumni →"

#### Lokasi & Wisata Teaser
- **Heading:** Belajar di Sini, Sekalian Healing.
- **Body:** Lokasi kami dekat dengan destinasi wisata Jawa Timur — Gunung Bromo, Kawah Ijen, dan Batu Malang bisa jadi agenda weekend kamu di sela belajar.
- CTA: "Lihat Info Lokasi & Wisata →"

---

## 6. Program (`/program/`)

### Copywriting
- **Headline:** Jenjang Belajar Yang Jelas, Dari Nol Sampai Mahir.
- **Subheadline:** Setiap jenjang dirancang membangun kemampuan secara bertahap — kamu tidak akan dilempar ke kelas yang terlalu sulit atau terlalu mudah.

**🌱 Confidence (Dari Nol)**
Untuk yang belum punya dasar sama sekali atau masih grogi ngomong bahasa Inggris.
- Materi: Grammar dasar, Vocabulary dasar, Basic Conversation, Pronunciation dasar
- Durasi: 2-4 minggu
- Target: Berani ngomong kalimat sederhana tanpa takut salah

**🌿 Active (Sudah Ada Dasar)**
Untuk yang sudah bisa dasar tapi ingin lebih lancar dan percaya diri.
- Materi: Grammar for Speaking, Active Conversation, Listening, Vocabulary in Context
- Durasi: 4-8 minggu
- Target: Bisa ngobrol natural dalam berbagai topik sehari-hari

**🎯 Fluent & TOEFL Prep**
Untuk yang ingin lancar total atau butuh skor TOEFL untuk kuliah/kerja.
- Materi: Advanced Speaking, TOEFL ITP (Structure, Listening, Reading), Academic Writing, Syntax
- Durasi: 4-8 minggu
- Target: Skor TOEFL kompetitif + speaking lancar untuk konteks formal

**👨‍🏫 Micro Teaching (Lanjutan)**
Untuk yang sudah fluent dan tertarik jadi tutor/pengajar.
- Materi: Teknik mengajar, Public speaking, Lesson planning
- Durasi: 2-4 minggu
- Target: Siap mengajar bahasa Inggris tingkat dasar-menengah

**Kelas Tematik Tambahan (Bisa diambil terpisah/sebagai pelengkap):**
Speaking Intensive • Grammar • Thematic Vocabulary • Listening • Reading • Writing • Pronunciation Clinic

**CTA:** Konsultasi Pilih Program yang Tepat

---

## 7. Sistem Asrama & English Area (`/asrama-english-area/`)

### Copywriting
- **Headline:** English Area — Zona Wajib Bahasa Inggris 24 Jam.
- **Subheadline:** Ini yang membedakan kami dari kursus biasa. Bukan cuma belajar di kelas, tapi hidup dalam bahasa Inggris setiap hari.

**Cara Kerja English Area:**
- Seluruh area asrama adalah zona wajib berbahasa Inggris — dengan teman sekamar, tutor, bahkan obrolan santai di ruang makan
- Tutor pendamping tinggal di asrama yang sama, mengoreksi speaking dan jadi partner ngobrol kapan saja
- Beberapa area tertentu (jika ada) ditetapkan sebagai "area bebas bahasa" untuk momen istirahat total

**Sistem "Hukuman" Jika Melanggar:**
- Ketahuan ngomong Bahasa Indonesia? Konsekuensinya bervariasi: hafalan vocabulary tambahan, atau speech singkat di depan penghuni asrama lain
- Tujuannya bukan menghukum, tapi memacu supaya kamu terus terpapar bahasa Inggris

**Aturan Asrama:**
- Asrama putra dan putri terpisah total
- Kamar diisi 4-5 orang (asrama) atau 2-3 orang (kos, lebih privat)
- Jam malam sekitar pukul 21.00-22.00 WIB
- Dilarang merokok di area asrama
- Jadwal piket kebersihan bergiliran
- Tamu dari luar hanya boleh berkunjung sampai batas waktu tertentu

**Fasilitas Kamar:** Kasur, lemari, kipas angin/AC (tergantung tipe kamar), akses dapur umum, opsional laundry

*Catatan: tinggal di asrama sangat direkomendasikan untuk hasil maksimal, namun bagi yang memilih kos di luar, tetap wajib mengikuti jadwal program secara penuh.*

**CTA:** Tanya Detail Asrama via WhatsApp

---

## 8. Fasilitas (`/fasilitas/`)

### Copywriting
- **Headline:** Fasilitas Pendukung Belajar.
6 fasilitas:
- 🏠 Asrama & Kos English Area
- 📚 Ruang Kelas Nyaman
- 🍽️ Kantin & Dapur Umum
- 📶 WiFi di Area Belajar
- 🧺 Laundry (opsional add-on)
- 🎉 Kegiatan Ekstra (movie night bahasa Inggris, English club, dll)

---

## 9. Harga & Paket (`/harga/`)

### Copywriting
- **Headline:** Pilih Paket Sesuai Waktu dan Tujuanmu.
- **Subheadline:** Semakin lama durasi, semakin banyak progres yang bisa dicapai.

| Durasi | Estimasi Harga | Cocok Untuk |
|--------|-----------------|--------------|
| 2 Minggu (Trial) | Rp 850.000 | Coba dulu, liburan singkat |
| 1 Bulan | Rp 1.500.000 | Program reguler paling populer |
| 2 Bulan | Rp 2.700.000 | Confidence + Active sekaligus |
| 3 Bulan | Rp 3.800.000 | Sampai level Fluent |
| 6 Bulan | Rp 6.500.000 | Dari nol sampai Fluent/TOEFL lengkap |

**Termasuk dalam paket:** Modul belajar, kaos, sertifikat kelulusan, kartu member

**Biaya Asrama/Kos (Terpisah, per bulan):**
| Tipe | Estimasi Harga |
|------|-----------------|
| Asrama (4-5 orang/kamar) | Rp 400.000 – 600.000 |
| Kos (2-3 orang/kamar) | Rp 600.000 – 900.000 |

**Metode Pembayaran:** DP minimal 50%, pelunasan sebelum/saat program dimulai. Transfer bank atau QRIS.

*Catatan: seluruh angka bersifat estimasi untuk keperluan draf, wajib disesuaikan dengan struktur biaya nyata sebelum digunakan.*

**CTA:** Cek Ketersediaan & Konsultasi Paket

---

## 10. Jadwal & Cara Daftar (`/pendaftaran/`)

### Copywriting
- **Headline:** Kapan Bisa Mulai?
- **Subheadline:** Kami membuka pendaftaran batch setiap tanggal 10 dan 25 tiap bulan. Daftar sebelum tanggal tersebut untuk ikut batch berikutnya.

**Cara Daftar:**
1. Hubungi kami via WhatsApp, pilih program dan durasi
2. Isi formulir pendaftaran (online/langsung di lokasi)
3. Bayar DP minimal 50% untuk lock slot
4. Datang di tanggal intake (10 atau 25), langsung mulai orientasi & kelas

**Yang Perlu Dibawa Saat Datang:** Fotokopi KTP/Kartu Pelajar, pas foto, perlengkapan pribadi untuk tinggal (jika ambil asrama/kos)

**CTA:** Daftar Batch Berikutnya via WhatsApp

---

## 11. Lokasi & Wisata Sekitar (`/lokasi-wisata/`)

### Copywriting
- **Headline:** Belajar Serius, Weekend Healing.
- **Subheadline:** Salah satu alasan banyak yang datang dari luar kota — lokasi kami dekat dengan beberapa destinasi wisata terbaik Jawa Timur.

Destinasi populer (untuk weekend, di luar jadwal wajib program):
- 🌋 Gunung Bromo — sunrise trip akhir pekan
- 🏔️ Kawah Ijen — blue fire & sunrise trek
- 🎢 Batu Malang & Jatim Park — wisata keluarga/hiburan
- 🏞️ Wisata alam sekitar Kediri

Embed Google Maps lokasi lembaga

*Catatan: kegiatan wisata bersifat opsional di luar jadwal wajib program dan English Area — bukan bagian dari kurikulum resmi.*

---

## 12. Alumni & Testimoni (`/alumni/`)

### Copywriting
- **Headline:** Cerita Mereka yang Sudah "Cakap".
- Grid/filter berdasarkan program (Confidence, Active, Fluent/TOEFL, Micro Teaching)

> "Awalnya grogi banget, sekamar sama orang dari daerah lain jadi kepaksa ngomong Inggris. 3 minggu udah lumayan pede ngobrol." — **Alumni Program Confidence**

> "Skor TOEFL naik banyak setelah program Fluent 2 bulan. Materinya fokus banget ke yang dibutuhin buat kuliah S2." — **Alumni Program Fluent/TOEFL**

> "Serunya di sini bukan cuma belajar, tapi weekend bisa healing ke Bromo bareng teman-teman asrama." — **Alumni Program Active**

---

## 13. Tentang Kami (`/tentang-kami/`)

### Copywriting
- **Headline:** Tentang Kampung Cakap.
- **Body:** Kampung Cakap English Center berdiri sejak [isi tahun] dengan keyakinan bahwa cara tercepat belajar bahasa adalah dengan hidup di dalamnya — bukan sekadar menghafal grammar di kelas. Sistem immersive kami dirancang untuk memaksa otak berpikir dalam bahasa Inggris, sambil tetap memberi ruang untuk pengalaman yang menyenangkan.

**Stats:** Berdiri Sejak [Tahun] • 2.000+ Alumni • Terdaftar SK Diknas • [X] Tutor Berpengalaman

**Legalitas:** SK Diknas No. [isi sesuai dokumen] • NPSN [isi sesuai dokumen]

---

## 14. FAQ (`/faq/`)

1. Apakah wajib tinggal di asrama? → Sangat direkomendasikan untuk hasil maksimal, tapi bagi yang pilih kos di luar tetap wajib ikuti jadwal program penuh.
2. Bagaimana kalau saya benar-benar belum bisa bahasa Inggris sama sekali? → Program Confidence dirancang khusus dari nol, tidak perlu dasar apapun.
3. Apa saja hukuman kalau ketahuan bicara Bahasa Indonesia di asrama? → Bervariasi, mulai dari hafalan vocabulary tambahan sampai speech singkat di depan teman asrama — tujuannya memacu semangat, bukan menghukum berat.
4. Bisa daftar kapan saja atau harus nunggu tanggal tertentu? → Pendaftaran batch reguler tanggal 10 dan 25 tiap bulan. Tanyakan ke kami jika butuh opsi masuk fleksibel.
5. Apakah ada kegiatan wisata yang termasuk dalam paket? → Tidak termasuk otomatis — wisata weekend bersifat opsional dan diatur sendiri oleh peserta di luar jadwal wajib program.
6. Apakah dapat sertifikat setelah selesai? → Ya, sertifikat kelulusan diberikan di akhir program sesuai jenjang yang diambil.
7. Bagaimana jika saya tidak lulus level tertentu? → Ada evaluasi berkala; jika perlu, bisa mengulang materi tertentu sebelum lanjut ke jenjang berikutnya (kebijakan detail didiskusikan saat konsultasi).

---

## 15. Kontak (`/kontak/`)

- **Headline:** Yuk, Mulai Perjalanan Cakap Bahasa Inggrismu.
- Form: Nama, WhatsApp, Program yang Diminati, Durasi, Preferensi Tanggal Mulai
- Info kontak lengkap, alamat, embed Google Maps
- **CTA:** Kirim & Konsultasi via WhatsApp

---

## 16. Image References

| Halaman/Section | Source | URL / Search Term | Alt Text | Dimensi |
|------------------|--------|-------------------|----------|---------|
| Beranda Hero | Unsplash | https://unsplash.com/s/photos/young-people-studying-english-outdoor | "Anak muda belajar bahasa Inggris outdoor" | 1920x1080 |
| Program - Confidence | Pexels | https://www.pexels.com/search/beginner-english-class-students/ | "Kelas bahasa Inggris pemula" | 800x600 |
| Program - Active | Unsplash | https://unsplash.com/s/photos/students-group-discussion-english | "Diskusi kelompok bahasa Inggris" | 800x600 |
| Program - TOEFL | Pexels | https://www.pexels.com/search/toefl-test-preparation-study/ | "Persiapan TOEFL" | 800x600 |
| Asrama English Area | Unsplash | https://unsplash.com/s/photos/dormitory-students-room-shared | "Kamar asrama bersama" | 800x600 |
| Asrama - Tutor mendampingi | Pexels | https://www.pexels.com/search/tutor-mentoring-students-casual/ | "Tutor mendampingi siswa" | 800x600 |
| Fasilitas - Ruang Kelas | Unsplash | https://unsplash.com/s/photos/casual-classroom-language-learning | "Ruang kelas bahasa" | 800x600 |
| Fasilitas - Kantin | Pexels | https://www.pexels.com/search/student-cafeteria-casual/ | "Kantin mahasiswa" | 800x600 |
| Lokasi - Bromo | Unsplash | https://unsplash.com/s/photos/mount-bromo-sunrise | "Sunrise Gunung Bromo" | 800x600 |
| Lokasi - Kawah Ijen | Pexels | https://www.pexels.com/search/kawah-ijen-blue-fire/ | "Kawah Ijen" | 800x600 |
| Lokasi - Batu Malang | Unsplash | https://unsplash.com/s/photos/batu-malang-theme-park | "Wisata Batu Malang" | 800x600 |
| Alumni Testimoni | Pexels | https://www.pexels.com/search/young-indonesian-student-happy/ | "Alumni bahagia" | 400x400 |
| Tentang Kami | Unsplash | https://unsplash.com/s/photos/language-school-team-teachers | "Tim pengajar bahasa" | 1200x800 |

---

## 17. Animation Spec (Framer Motion)

**Vibe:** Energik, ceria, muda — mendukung kesan "seru tapi tetap niat belajar".

### Color Palette (Tailwind v4) — Biru Langit Cerah
```css
:root {
  --color-primary: #38BDF8;       /* biru langit cerah — utama */
  --color-primary-dark: #0284C7;  /* biru lebih gelap untuk kontras/hover */
  --color-accent-yellow: #FDE047; /* kuning cerah — aksen ceria */
  --color-cta: #F97316;           /* orange — CTA button, kontras dari biru */
  --color-bg: #F0F9FF;            /* biru sangat muda, hampir putih */
  --color-text: #0F172A;
}
```

### Hero (React island, `client:load`)
```tsx
const cakapReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 } }
}
```

### Program Overview Grid (React island, `client:visible`)
- Cards reveal stagger `0.08s`, hover lift + border biru

### English Area Preview (React island, `client:visible`)
- Reveal dengan sedikit playful bounce (mencerminkan sisi "seru" dari sistem hukuman)

### Paket Populer (React island, `client:visible`)
- 3 cards reveal stagger, "Terpopuler" badge pulse

### Lokasi & Wisata Gallery (React island, `client:visible`)
- Grid foto destinasi reveal stagger, hover image scale

### Alumni Testimoni (React island, `client:visible`)
- Carousel/grid reveal stagger, foto fade-in

### FAQ Accordion (React island, `client:visible`)
- Height animation via `layout`, chevron rotate, aksen biru saat expand

### Scroll Reveal (reusable)
```tsx
const cakapFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}
```

### Hydration Strategy
- `client:load` → Hero, Trust Bar
- `client:visible` → Semua grid/section konten di semua halaman
- `client:idle` → Form kontak/pendaftaran
- Sisanya: static

---

## 18. Astro Routing & Structure

```
src/
├── pages/
│   ├── index.astro
│   ├── program.astro
│   ├── asrama-english-area.astro
│   ├── fasilitas.astro
│   ├── harga.astro
│   ├── pendaftaran.astro
│   ├── lokasi-wisata.astro
│   ├── alumni.astro
│   ├── tentang-kami.astro
│   ├── faq.astro
│   └── kontak.astro
├── components/
│   ├── shared/
│   │   ├── Navbar.astro
│   │   └── Footer.astro
│   ├── program/
│   │   └── ProgramTierCard.tsx
│   └── alumni/
│       ├── AlumniGrid.tsx
│       └── AlumniFilter.tsx
```

---

## 19. Catatan Implementasi Khusus

### 1. Nama Brand — Sudah Dicek Sekilas, Tetap Perlu Verifikasi Ulang
Nama "Kampung Cakap" dipilih untuk menghindari kata-kata umum yang banyak dipakai lembaga sejenis (Versity, Benefit, Global, dll dari hasil riset). Tetap disarankan cek merek/domain sebelum dipakai resmi.

### 2. Sistem "Hukuman" Harus Ditulis dengan Nada Positif
Riset menunjukkan sistem hukuman (denda/hafalan/speech) adalah bagian genuinely disukai peserta karena dianggap seru, bukan represif. Pastikan copywriting menjaga nada ini — jangan terkesan menakut-nakutkan calon peserta.

### 3. Legalitas Berbeda dari LPK Kerja
Karena ini lembaga kursus pendidikan non-formal (bukan penyalur kerja), legalitas yang relevan adalah **SK Diknas & NPSN** — bukan izin Kemnaker/P3MI seperti LPK Jepang.

### 4. Sistem Intake Batch Perlu Ditampilkan Jelas
Karena pendaftaran umumnya bersifat batch (tanggal 10 & 25), pastikan halaman Pendaftaran menampilkan tanggal intake berikutnya secara jelas — idealnya sebagai data yang mudah diupdate (Content Collection), bukan hardcode.

---

## 20. SEO Meta Per Halaman

| Halaman | Title | Description |
|---------|-------|--------------|
| Beranda | Kampung Cakap English Center — Kursus Bahasa Inggris Immersive | Kursus bahasa Inggris dengan sistem asrama wajib berbahasa Inggris 24 jam. Program dari nol sampai TOEFL, dekat wisata Bromo & Batu Malang. |
| Program | Program Kursus Bahasa Inggris — Kampung Cakap | Program Confidence, Active, Fluent & TOEFL Prep, hingga Micro Teaching. Jenjang belajar bahasa Inggris yang jelas dan terstruktur. |
| Asrama & English Area | Sistem Asrama English Area 24 Jam — Kampung Cakap | Asrama dengan aturan wajib berbahasa Inggris 24 jam, didampingi tutor tinggal bersama. Cara efektif belajar cepat. |
| Harga | Harga & Paket Kursus — Kampung Cakap English Center | Paket kursus bahasa Inggris mulai 2 minggu hingga 6 bulan. Harga transparan, termasuk modul dan sertifikat. |
| Alumni | Alumni & Testimoni — Kampung Cakap | Cerita nyata alumni yang sudah lancar berbahasa Inggris bersama Kampung Cakap English Center. |
| Lokasi & Wisata | Lokasi & Wisata Sekitar — Kampung Cakap | Belajar bahasa Inggris sambil healing ke Bromo, Kawah Ijen, dan Batu Malang di akhir pekan. |
| FAQ | Pertanyaan Umum — Kampung Cakap English Center | Jawaban lengkap seputar program, asrama, dan sistem English Area. |
| Kontak | Hubungi Kampung Cakap English Center | Konsultasi gratis untuk memulai program bahasa Inggris immersive kamu. |

**Schema:** `EducationalOrganization` + `LocalBusiness` + `Course` (per jenjang program) schema
