import { motion } from "motion/react";
import { ALUMNI } from "../alumni/alumniData";
import { pexelsPhoto } from "../../lib/site";
import Carousel from "../shared/Carousel";

const testimonials = ALUMNI.slice(0, 3);

export default function AlumniPreview() {
  return (
    <section className="bg-primary-50/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-lg text-3xl font-extrabold tracking-tight text-primary-900 md:text-4xl">
            Cerita Mereka yang Sudah "Cakap".
          </h2>
          <a href="/alumni/" className="text-sm font-bold text-cta hover:underline">
            Lihat Semua Cerita Alumni
          </a>
        </div>

        <div className="mt-12">
          <Carousel breakpoint="md" gridCols="md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="w-[82%] shrink-0 snap-start rounded-3xl border border-primary-100 bg-white p-6 sm:w-[60%] md:w-auto md:shrink"
              >
                <blockquote className="text-sm leading-relaxed text-ink/75">"{t.quote}"</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <img src={pexelsPhoto(t.photo, 160)} alt="" className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-bold text-primary-900">{t.name}</p>
                    <p className="text-xs text-ink/50">Alumni Program {t.program}</p>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
