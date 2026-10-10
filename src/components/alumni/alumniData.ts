export const PROGRAMS = ["Semua", "Confidence", "Active", "Fluent/TOEFL", "Micro Teaching"] as const;
export type ProgramFilter = (typeof PROGRAMS)[number];

// Draf cerita dan identitas contoh; bukan testimoni atau hasil alumni terverifikasi.
export const ALUMNI = [
  {
    name: "Rangga Pratama",
    program: "Confidence" as const,
    quote: "Awalnya grogi banget, sekamar sama orang dari daerah lain jadi kepaksa ngomong Inggris. 3 minggu udah lumayan pede ngobrol.",
    photo: "portrait-1",
    scene: "Ilustrasi potret seseorang untuk cerita contoh Confidence",
  },
  {
    name: "Salsabila Putri",
    program: "Fluent/TOEFL" as const,
    quote: "Skor TOEFL naik banyak setelah program Fluent 2 bulan. Materinya fokus banget ke yang dibutuhin buat kuliah S2.",
    photo: "portrait-2",
    scene: "Ilustrasi potret seseorang untuk cerita contoh Fluent dan TOEFL",
  },
  {
    name: "Farel Ardiansyah",
    program: "Active" as const,
    quote: "Serunya di sini bukan cuma belajar, tapi weekend bisa healing ke Bromo bareng teman-teman asrama.",
    photo: "portrait-3",
    scene: "Ilustrasi potret seseorang untuk cerita contoh Active",
  },
  {
    name: "Dian Ayu Lestari",
    program: "Confidence" as const,
    quote: "Dulu ngomong Inggris aja takut salah. Sekarang berani ngobrol duluan sama turis di Bromo.",
    photo: "portrait-4",
    scene: "Ilustrasi potret seseorang untuk cerita contoh keberanian berbicara",
  },
  {
    name: "Bagas Wirawan",
    program: "Micro Teaching" as const,
    quote: "Setelah fluent, aku lanjut Micro Teaching. Sekarang malah jadi tutor part-time di sini.",
    photo: "workshop",
    scene: "Ilustrasi sesi belajar, bukan dokumentasi tokoh dalam cerita contoh",
  },
  {
    name: "Nadia Kusuma",
    program: "Active" as const,
    quote: "Kelas Active bikin aku terbiasa mikir langsung pakai Inggris, bukan translate dulu dari Indonesia.",
    photo: "speaking",
    scene: "Ilustrasi praktik berbicara untuk cerita contoh Active",
  },
  {
    name: "Yusuf Maulana",
    program: "Fluent/TOEFL" as const,
    quote: "Butuh skor TOEFL buat daftar beasiswa, dan target itu kecapai tepat waktu di sini.",
    photo: "reading",
    scene: "Ilustrasi kegiatan membaca untuk cerita contoh persiapan TOEFL",
  },
  {
    name: "Intan Permata",
    program: "Confidence" as const,
    quote: "Sistem asrama yang wajib bahasa Inggris itu awalnya berat, tapi hasilnya kerasa banget cuma dalam sebulan.",
    photo: "discussion",
    scene: "Ilustrasi diskusi untuk cerita contoh kehidupan English Area",
  },
] as const;
