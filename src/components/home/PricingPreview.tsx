import { motion } from "motion/react";
import Carousel from "../shared/Carousel";

const packages = [
  {
    duration: "2 Minggu",
    tagline: "Coba Dulu",
    price: "Rp 850.000",
    popular: false,
  },
  {
    duration: "1 Bulan",
    tagline: "Reguler",
    price: "Rp 1.500.000",
    popular: true,
  },
  {
    duration: "6 Bulan",
    tagline: "Dari Nol Sampai Fluent",
    price: "Rp 6.500.000",
    popular: false,
  },
];

export default function PricingPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
      <h2 className="max-w-lg text-3xl font-extrabold tracking-tight text-primary-900 md:text-4xl">
        Paket Yang Paling Sering Dipilih.
      </h2>

      <div className="mt-12">
        <Carousel breakpoint="md" gridCols="md:grid-cols-3">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.duration}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative w-[78%] shrink-0 snap-start rounded-3xl border p-8 sm:w-[55%] md:w-auto md:shrink ${
                pkg.popular
                  ? "border-cta bg-primary-900 text-white shadow-xl md:-translate-y-3"
                  : "border-primary-100 bg-white"
              }`}
            >
              {pkg.popular && (
                <motion.span
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-3 left-8 rounded-full bg-cta px-3 py-1 text-xs font-bold text-white"
                >
                  Terpopuler
                </motion.span>
              )}
              <p className={`text-sm font-semibold ${pkg.popular ? "text-white/70" : "text-ink/60"}`}>
                {pkg.tagline}
              </p>
              <h3 className={`mt-1 text-2xl font-extrabold ${pkg.popular ? "text-white" : "text-primary-900"}`}>
                {pkg.duration}
              </h3>
              <p className={`mt-4 text-3xl font-extrabold ${pkg.popular ? "text-accent-yellow" : "text-primary-600"}`}>
                {pkg.price}
              </p>
              <a
                href="/harga/"
                className={`mt-8 block rounded-full py-3 text-center text-sm font-bold transition-transform active:scale-[0.98] ${
                  pkg.popular ? "bg-white text-primary-900" : "bg-primary-50 text-primary-900"
                }`}
              >
                Lihat Detail Paket
              </a>
            </motion.div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
