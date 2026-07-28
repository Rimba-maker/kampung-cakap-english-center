import { useState } from "react";
import { motion } from "motion/react";
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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-primary-100 rounded-3xl border border-primary-100 bg-white">
      {faqs.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-sm font-bold text-primary-900 md:text-base">{item.q}</span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="shrink-0 text-primary-600"
              >
                <CaretDown size={18} weight="bold" />
              </motion.span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-sm leading-relaxed text-ink/65">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
