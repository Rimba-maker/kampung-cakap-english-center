import { motion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react/dist/csr/ArrowRight";
import { pexelsPhoto, PHOTOS, withBase } from "../../lib/site";

export default function EnglishAreaPreview() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative order-2 mx-auto aspect-square w-full max-w-sm md:order-1"
        >
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-accent-yellow/30" />
          <img
            src={pexelsPhoto(PHOTOS.dormitory, 900)}
            alt="Kamar asrama English Area, tempat wajib berbahasa Inggris 24 jam"
            className="h-full w-full rounded-3xl object-cover shadow-xl"
          />
        </motion.div>

        <div className="order-1 md:order-2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl font-extrabold tracking-tight text-primary-900 md:text-4xl"
          >
            Wajib Bahasa Inggris 24 Jam. Serius.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 text-base leading-relaxed text-ink/70 md:text-lg"
          >
            Begitu masuk asrama, kamu wajib ngobrol bahasa Inggris, sama teman sekamar, sama tutor, bahkan pas ngantre kamar mandi. Ketahuan pakai Bahasa Indonesia? Siap-siap kena "hukuman" seru: hafalan vocab tambahan atau speech dadakan di depan teman-teman.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            href={withBase("/asrama-english-area/")}
            className="group mt-7 inline-flex items-center gap-3 rounded-full bg-primary-900 py-3 pl-6 pr-2 text-sm font-bold text-white transition-transform active:scale-[0.98]"
          >
            Pelajari Sistem Asrama Lengkap
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
              <ArrowRight size={16} weight="bold" />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
