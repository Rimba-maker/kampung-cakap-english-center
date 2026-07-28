import { motion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react/dist/csr/ArrowRight";
import { pexelsPhoto, PHOTOS, withBase } from "../../lib/site";

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary-50 pt-10 pb-8 md:pt-16 md:pb-12">
      {/* ponytail: solid accent blobs, not AI mesh-gradient, keeps the flat/playful brand feel */}
      <div className="blob-1 pointer-events-none absolute -left-24 top-10 hidden h-72 w-72 bg-accent-yellow/40 blur-2xl md:block" />
      <div className="blob-3 pointer-events-none absolute -right-16 bottom-0 hidden h-80 w-80 bg-primary-300/40 blur-2xl md:block" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-8">
        <div>
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0}
            variants={reveal}
            className="text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl"
          >
            <span className="text-cta">Cakap 24 Jam,</span>{" "}
            <span className="text-primary-900">Bukan Kelas 2 Jam.</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={1}
            variants={reveal}
            className="mt-5 max-w-md text-base leading-relaxed text-ink/70 md:text-lg"
          >
            Tinggal, bukan cuma belajar, sampai berani ngomong Inggris tanpa mikir dua kali, plus healing ke Bromo & Batu tiap akhir pekan.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={2}
            variants={reveal}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href={withBase("/pendaftaran/")}
              className="group inline-flex items-center gap-3 rounded-full bg-cta py-3 pl-6 pr-2 text-sm font-bold text-white transition-transform active:scale-[0.98]"
            >
              Daftar Sekarang
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/20 transition-transform group-hover:translate-x-0.5">
                <ArrowRight size={16} weight="bold" />
              </span>
            </a>
            <a
              href={withBase("/harga/")}
              className="rounded-full px-6 py-3 text-sm font-bold text-primary-900 underline decoration-2 underline-offset-4 transition-colors hover:text-primary-600"
            >
              Lihat Program & Harga
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative mx-auto aspect-[4/5] w-full max-w-sm"
        >
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-primary-400/30" />
          <img
            src={pexelsPhoto(PHOTOS.heroStudyOutdoor, 900)}
            alt="Anak muda belajar bahasa Inggris outdoor bareng tutor"
            className="h-full w-full rounded-3xl object-cover shadow-xl"
            loading="eager"
          />
          <div className="absolute -bottom-5 -right-5 grid h-20 w-20 place-items-center rounded-2xl bg-accent-yellow text-center text-xs font-extrabold leading-tight text-primary-900 shadow-lg">
            2.000+
            <br />
            Alumni
          </div>
        </motion.div>
      </div>
    </section>
  );
}
