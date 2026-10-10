/** Setiap link/asset internal WAJIB lewat sini. Astro isi import.meta.env.BASE_URL beda
 * di tiap konteks: "/" pas `astro dev`/build lokal, "/kampung-cakap-english-center/" pas
 * build di GitHub Actions (lihat astro.config.mjs) — jadi satu path yang sama otomatis benar
 * di localhost maupun di GitHub Pages, nggak perlu di-hardcode dua kali. */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  const trimmedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  return `${trimmedBase}${path}`;
}

// Demonstration contact. Official number has not been supplied; disclosed in the UI.
export const WHATSAPP_NUMBER = "6281234567890";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

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
