import { motion } from "motion/react";
import { ChatsCircle } from "@phosphor-icons/react/dist/csr/ChatsCircle";
import { UsersThree } from "@phosphor-icons/react/dist/csr/UsersThree";
import { ChartLineUp } from "@phosphor-icons/react/dist/csr/ChartLineUp";
import { Backpack } from "@phosphor-icons/react/dist/csr/Backpack";

const points = [
  {
    icon: ChatsCircle,
    title: "Immersion, Bukan Cuma Kelas",
    body: "Praktik 24 jam di asrama, bukan cuma 2 jam di ruang kelas lalu lupa lagi.",
  },
  {
    icon: UsersThree,
    title: "Tutor Tinggal Bareng Kamu",
    body: "Ada partner speaking setiap saat, bukan cuma pas jam pelajaran.",
  },
  {
    icon: ChartLineUp,
    title: "Jenjang Jelas Dari Nol",
    body: "Confidence, Active, Fluent/TOEFL, kamu tahu persis progresmu.",
  },
  {
    icon: Backpack,
    title: "Belajar Sambil Liburan",
    body: "Weekend bisa healing ke Bromo, Kawah Ijen, atau Batu Malang.",
  },
];

export default function WhyUs() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
      <h2 className="max-w-lg text-3xl font-extrabold tracking-tight text-primary-900 md:text-4xl">
        Kenapa Belajar di Sini Beda?
      </h2>

      <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-8 md:gap-8 lg:grid-cols-4">
        {points.map(({ icon: Icon, title, body }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="blob-2 grid h-14 w-14 place-items-center bg-primary-50 text-primary-600">
              <Icon size={26} weight="bold" />
            </span>
            <h3 className="mt-5 text-lg font-bold text-primary-900">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/65">{body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
