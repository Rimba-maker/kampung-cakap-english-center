import { motion } from "motion/react";
import Carousel from "../shared/Carousel";

const packages = [
  { durasi: "2 Minggu", tagline: "Trial", harga: "Rp 850.000", cocok: "Coba dulu, liburan singkat" },
  { durasi: "1 Bulan", tagline: "Reguler", harga: "Rp 1.500.000", cocok: "Program reguler paling populer", popular: true },
  { durasi: "2 Bulan", tagline: "Lanjutan", harga: "Rp 2.700.000", cocok: "Confidence + Active sekaligus" },
  { durasi: "3 Bulan", tagline: "Intensif", harga: "Rp 3.800.000", cocok: "Sampai level Fluent" },
  { durasi: "6 Bulan", tagline: "Lengkap", harga: "Rp 6.500.000", cocok: "Dari nol sampai Fluent/TOEFL lengkap" },
];

export default function PricingGrid() {
  return (
    <Carousel breakpoint="sm" gridCols="sm:grid-cols-2 lg:grid-cols-3">
      {packages.map((pkg, i) => (
        <motion.div
          key={pkg.durasi}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className={`relative w-[78%] shrink-0 snap-start rounded-3xl border p-7 sm:w-auto sm:shrink ${
            pkg.popular ? "border-cta bg-primary-900 text-white shadow-xl" : "border-primary-100 bg-white"
          }`}
        >
          {pkg.popular && (
            <span className="absolute -top-3 left-7 rounded-full bg-cta px-3 py-1 text-xs font-bold text-white">
              Terpopuler
            </span>
          )}
          <p className={`text-xs font-bold uppercase tracking-wide ${pkg.popular ? "text-white/60" : "text-ink/50"}`}>
            {pkg.tagline}
          </p>
          <h3 className={`mt-1 text-xl font-extrabold ${pkg.popular ? "text-white" : "text-primary-900"}`}>
            {pkg.durasi}
          </h3>
          <p className={`mt-3 text-2xl font-extrabold ${pkg.popular ? "text-accent-yellow" : "text-primary-600"}`}>
            {pkg.harga}
          </p>
          <p className={`mt-2 text-sm ${pkg.popular ? "text-white/70" : "text-ink/60"}`}>{pkg.cocok}</p>
        </motion.div>
      ))}
    </Carousel>
  );
}
