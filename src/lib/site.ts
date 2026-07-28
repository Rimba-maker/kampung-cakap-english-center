export const WHATSAPP_NUMBER = "6281234567890"; // TODO: ganti nomor asli

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Foto asli dari Pexels (bebas pakai, no attribution required). ID dicek manual sesuai tema tiap section. */
export function pexelsPhoto(id: number, width = 1200) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
}

export const PHOTOS = {
  heroStudyOutdoor: 6147210,
  examPrepBanner: 6147267,
  dormitory: 5137980,
  tutorMentoring: 6503101,
  bromoHome: 28910380,
  bromoPage: 31893249,
  ijenHome: 6420914,
  ijenPage: 33502669,
  batuMalangHome: 3148865,
  batuMalangPage: 37151021,
  wisataKediri: 13860042,
  ruangKelas: 5212331,
  kantin: 8617514,
  kegiatanEkstra: 9807275,
  teamTutor: 5212363,
  asramaHangout: 9287491,
  programConfidence: 5428003,
  programActive: 5940831,
  programFluentToefl: 5427998,
  programMicroTeaching: 8348624,
} as const;

export const ALUMNI_PHOTOS = {
  ranggaPratama: 17503453,
  salsabilaPutri: 24205642,
  farelArdiansyah: 36291553,
  dianAyuLestari: 1564123,
  bagasWirawan: 4558592,
  nadiaKusuma: 7216901,
  yusufMaulana: 6102858,
  intanPermata: 7514875,
} as const;

/** navLabel dipakai di navbar (harus muat satu baris), label penuh dipakai di footer/tempat lain */
export const NAV_LINKS = [
  { href: "/", label: "Beranda", navLabel: "Beranda" },
  { href: "/program/", label: "Program", navLabel: "Program" },
  { href: "/asrama-english-area/", label: "Asrama & English Area", navLabel: "Asrama" },
  { href: "/fasilitas/", label: "Fasilitas", navLabel: "Fasilitas" },
  { href: "/harga/", label: "Harga", navLabel: "Harga" },
  { href: "/pendaftaran/", label: "Pendaftaran", navLabel: "Pendaftaran" },
  { href: "/lokasi-wisata/", label: "Lokasi & Wisata", navLabel: "Wisata" },
  { href: "/alumni/", label: "Alumni", navLabel: "Alumni" },
  { href: "/tentang-kami/", label: "Tentang Kami", navLabel: "Tentang" },
  { href: "/faq/", label: "FAQ", navLabel: "FAQ" },
] as const;

/** Struktur navbar: halaman yang berkaitan dikelompokkan jadi dropdown biar nggak 10 item sejajar */
export const NAV_MENU = [
  { type: "link", href: "/", label: "Beranda" },
  {
    type: "group",
    label: "Program",
    items: [
      { href: "/program/", label: "Program" },
      { href: "/asrama-english-area/", label: "Asrama & English Area" },
      { href: "/fasilitas/", label: "Fasilitas" },
    ],
  },
  {
    type: "group",
    label: "Harga & Pendaftaran",
    items: [
      { href: "/harga/", label: "Harga" },
      { href: "/pendaftaran/", label: "Pendaftaran" },
    ],
  },
  { type: "link", href: "/alumni/", label: "Alumni" },
  {
    type: "group",
    label: "Tentang",
    items: [
      { href: "/tentang-kami/", label: "Tentang Kami" },
      { href: "/lokasi-wisata/", label: "Lokasi & Wisata" },
      { href: "/faq/", label: "FAQ" },
    ],
  },
] as const;
