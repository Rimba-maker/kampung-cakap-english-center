import { motion } from "motion/react";
import { Check } from "@phosphor-icons/react/dist/csr/Check";
import type { Icon } from "@phosphor-icons/react";
import { pexelsPhoto } from "../../lib/site";

interface Props {
  id: string;
  /** Component reference works here only because ProgramGrid -> ProgramTierCard never crosses
   * an .astro -> client-hydrated-island prop boundary. If this card ever gets rendered from an
   * .astro page instead, switch to the string-key + registry pattern in RevealGrid.tsx: Astro
   * can't serialize a component reference as island props, it silently arrives as `{}`. */
  icon: Icon;
  photo: number;
  title: string;
  subtitle: string;
  description: string;
  materi: string[];
  durasi: string;
  target: string;
  index: number;
}

export default function ProgramTierCard({ id, icon: IconEl, photo, title, subtitle, description, materi, durasi, target, index }: Props) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="scroll-mt-24 overflow-hidden rounded-3xl border border-primary-100 bg-white"
    >
      <img src={pexelsPhoto(photo, 700)} alt="" className="h-40 w-full object-cover" />
      <div className="p-7 md:p-8">
        <span className="blob-2 grid h-14 w-14 place-items-center bg-primary-400/15 text-primary-600">
          <IconEl size={26} weight="bold" />
        </span>
        <h3 className="mt-5 text-xl font-extrabold text-primary-900">{title}</h3>
        <p className="text-sm font-semibold text-cta">{subtitle}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink/70">{description}</p>

        <ul className="mt-5 grid gap-2">
          {materi.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-ink/70">
              <Check size={16} weight="bold" className="mt-0.5 shrink-0 text-primary-500" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-6 grid grid-cols-2 gap-4 border-t border-primary-100 pt-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-ink/40">Durasi</p>
            <p className="mt-1 text-sm font-semibold text-primary-900">{durasi}</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-ink/40">Target</p>
            <p className="mt-1 text-sm font-semibold text-primary-900">{target}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
