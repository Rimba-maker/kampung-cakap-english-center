import { motion } from "motion/react";
import { ChatCircleText } from "@phosphor-icons/react/dist/csr/ChatCircleText";
import { SealCheck } from "@phosphor-icons/react/dist/csr/SealCheck";
import { GraduationCap } from "@phosphor-icons/react/dist/csr/GraduationCap";
import { Mountains } from "@phosphor-icons/react/dist/csr/Mountains";

const items = [
  { icon: ChatCircleText, label: "English Area 24 Jam" },
  { icon: SealCheck, label: "Terdaftar SK Diknas" },
  { icon: GraduationCap, label: "2.000+ Alumni" },
  { icon: Mountains, label: "Dekat Bromo & Batu Malang" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-primary-100 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4 md:px-8">
        {items.map(({ icon: Icon, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2.5"
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary-50 text-primary-600">
              <Icon size={18} weight="bold" />
            </span>
            <span className="text-sm font-semibold text-ink/80">{label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
