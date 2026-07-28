import { motion } from "motion/react";
import { Plant } from "@phosphor-icons/react/dist/csr/Plant";
import { Leaf } from "@phosphor-icons/react/dist/csr/Leaf";
import { Target } from "@phosphor-icons/react/dist/csr/Target";
import { ChalkboardTeacher } from "@phosphor-icons/react/dist/csr/ChalkboardTeacher";
import { ArrowUpRight } from "@phosphor-icons/react/dist/csr/ArrowUpRight";
import { withBase } from "../../lib/site";

const programs = [
  { icon: Plant, title: "Confidence", subtitle: "Dari Nol", anchor: "#confidence" },
  { icon: Leaf, title: "Active", subtitle: "Sudah Ada Dasar", anchor: "#active" },
  { icon: Target, title: "Fluent & TOEFL Prep", subtitle: "Lancar Total", anchor: "#fluent-toefl" },
  { icon: ChalkboardTeacher, title: "Micro Teaching", subtitle: "Lanjutan", anchor: "#micro-teaching" },
];

export default function ProgramOverview() {
  return (
    <section className="bg-primary-50/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="max-w-lg text-3xl font-extrabold tracking-tight text-primary-900 md:text-4xl">
          Program Kami.
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {programs.map(({ icon: Icon, title, subtitle, anchor }, i) => (
            <motion.a
              key={title}
              href={withBase(`/program/${anchor}`)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="group flex flex-col justify-between rounded-3xl border border-primary-100 bg-white p-4 shadow-sm transition-colors hover:border-primary-300 sm:p-6"
            >
              <div>
                <span className="blob-3 grid h-12 w-12 place-items-center bg-primary-400/15 text-primary-600">
                  <Icon size={22} weight="bold" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-primary-900">{title}</h3>
                <p className="mt-1 text-sm text-ink/60">{subtitle}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-cta">
                Lihat detail
                <ArrowUpRight size={16} weight="bold" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
