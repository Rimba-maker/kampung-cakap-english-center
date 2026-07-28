import { ALUMNI_PHOTOS } from "../../lib/site";

export const PROGRAMS = ["Semua", "Confidence", "Active", "Fluent/TOEFL", "Micro Teaching"] as const;
export type ProgramFilter = (typeof PROGRAMS)[number];

export const ALUMNI = [
  {
    name: "Rangga Pratama",
    program: "Confidence" as const,
    quote: "Awalnya grogi banget, sekamar sama orang dari daerah lain jadi kepaksa ngomong Inggris. 3 minggu udah lumayan pede ngobrol.",
    photo: ALUMNI_PHOTOS.ranggaPratama,
  },
  {
    name: "Salsabila Putri",
    program: "Fluent/TOEFL" as const,
    quote: "Skor TOEFL naik banyak setelah program Fluent 2 bulan. Materinya fokus banget ke yang dibutuhin buat kuliah S2.",
    photo: ALUMNI_PHOTOS.salsabilaPutri,
  },
  {
    name: "Farel Ardiansyah",
    program: "Active" as const,
    quote: "Serunya di sini bukan cuma belajar, tapi weekend bisa healing ke Bromo bareng teman-teman asrama.",
    photo: ALUMNI_PHOTOS.farelArdiansyah,
  },
  {
    name: "Dian Ayu Lestari",
    program: "Confidence" as const,
    quote: "Dulu ngomong Inggris aja takut salah. Sekarang berani ngobrol duluan sama turis di Bromo.",
    photo: ALUMNI_PHOTOS.dianAyuLestari,
  },
  {
    name: "Bagas Wirawan",
    program: "Micro Teaching" as const,
    quote: "Setelah fluent, aku lanjut Micro Teaching. Sekarang malah jadi tutor part-time di sini.",
    photo: ALUMNI_PHOTOS.bagasWirawan,
  },
  {
    name: "Nadia Kusuma",
    program: "Active" as const,
    quote: "Kelas Active bikin aku terbiasa mikir langsung pakai Inggris, bukan translate dulu dari Indonesia.",
    photo: ALUMNI_PHOTOS.nadiaKusuma,
  },
  {
    name: "Yusuf Maulana",
    program: "Fluent/TOEFL" as const,
    quote: "Butuh skor TOEFL buat daftar beasiswa, dan target itu kecapai tepat waktu di sini.",
    photo: ALUMNI_PHOTOS.yusufMaulana,
  },
  {
    name: "Intan Permata",
    program: "Confidence" as const,
    quote: "Sistem asrama yang wajib bahasa Inggris itu awalnya berat, tapi hasilnya kerasa banget cuma dalam sebulan.",
    photo: ALUMNI_PHOTOS.intanPermata,
  },
];
