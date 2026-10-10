
import { CaretDown } from "@phosphor-icons/react/dist/csr/CaretDown";
const faqs = [
  {
    q: "Apakah wajib tinggal di asrama?",
    a: "Sangat direkomendasikan untuk hasil maksimal, tapi bagi yang pilih kos di luar tetap wajib ikuti jadwal program penuh.",
  },
  {
    q: "Bagaimana kalau saya benar-benar belum bisa bahasa Inggris sama sekali?",
    a: "Program Confidence dirancang khusus dari nol, tidak perlu dasar apapun.",
  },
  {
    q: "Apa saja hukuman kalau ketahuan bicara Bahasa Indonesia di asrama?",
    a: "Bervariasi, mulai dari hafalan vocabulary tambahan sampai speech singkat di depan teman asrama, tujuannya memacu semangat, bukan menghukum berat.",
  },
  {
    q: "Bisa daftar kapan saja atau harus nunggu tanggal tertentu?",
    a: "Pendaftaran batch reguler tanggal 10 dan 25 tiap bulan. Tanyakan ke kami jika butuh opsi masuk fleksibel.",
  },
  {
    q: "Apakah ada kegiatan wisata yang termasuk dalam paket?",
    a: "Tidak termasuk otomatis, wisata weekend bersifat opsional dan diatur sendiri oleh peserta di luar jadwal wajib program.",
  },
  {
    q: "Apakah dapat sertifikat setelah selesai?",
    a: "Ya, sertifikat kelulusan diberikan di akhir program sesuai jenjang yang diambil.",
  },
  {
    q: "Bagaimana jika saya tidak lulus level tertentu?",
    a: "Ada evaluasi berkala, jika perlu bisa mengulang materi tertentu sebelum lanjut ke jenjang berikutnya (kebijakan detail didiskusikan saat konsultasi).",
  },
];

export default function FaqAccordion() {
  return (
    <div className="faq-accordion">
      {faqs.map((item, index) => (
        <details key={item.q} className="faq-item" open={index === 0}>
          <summary>
            <span>{item.q}</span>
            <CaretDown size={20} aria-hidden="true" />
          </summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}
