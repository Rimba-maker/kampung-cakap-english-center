import { motion } from "motion/react";
import { Buildings } from "@phosphor-icons/react/dist/csr/Buildings";
import { UsersThree } from "@phosphor-icons/react/dist/csr/UsersThree";
import { ChatsCircle } from "@phosphor-icons/react/dist/csr/ChatsCircle";
import { MoonStars } from "@phosphor-icons/react/dist/csr/MoonStars";
import { Prohibit } from "@phosphor-icons/react/dist/csr/Prohibit";
import { Broom } from "@phosphor-icons/react/dist/csr/Broom";
import { UserCircle } from "@phosphor-icons/react/dist/csr/UserCircle";
import { GenderNeuter } from "@phosphor-icons/react/dist/csr/GenderNeuter";
import { BookOpen } from "@phosphor-icons/react/dist/csr/BookOpen";
import { ForkKnife } from "@phosphor-icons/react/dist/csr/ForkKnife";
import { WifiHigh } from "@phosphor-icons/react/dist/csr/WifiHigh";
import { WashingMachine } from "@phosphor-icons/react/dist/csr/WashingMachine";
import { Popcorn } from "@phosphor-icons/react/dist/csr/Popcorn";
import { pexelsPhoto } from "../../lib/site";

/** ponytail: icon dipilih lewat key string (bukan referensi komponen), karena prop ke React island di-serialize Astro jadi JSON. */
export const ICONS = {
  Buildings,
  UsersThree,
  ChatsCircle,
  MoonStars,
  Prohibit,
  Broom,
  UserCircle,
  GenderNeuter,
  BookOpen,
  ForkKnife,
  WifiHigh,
  WashingMachine,
  Popcorn,
} as const;

export type IconKey = keyof typeof ICONS;

export interface RevealGridItem {
  icon: IconKey;
  title: string;
  body?: string;
  /** ID foto Pexels opsional; kalau diisi, kartu tampil dengan foto di atas, bukan cuma ikon */
  photo?: number;
}

interface Props {
  items: RevealGridItem[];
  columns?: string;
  blob?: "blob-1" | "blob-2" | "blob-3";
}

export default function RevealGrid({ items, columns = "grid-cols-2 lg:grid-cols-3", blob = "blob-2" }: Props) {
  return (
    <div className={`grid gap-3 sm:gap-6 ${columns}`}>
      {items.map(({ icon, title, body, photo }, i) => {
        const IconEl = ICONS[icon];
        return (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden rounded-2xl border border-primary-100 bg-white"
          >
            {photo && <img src={pexelsPhoto(photo, 600)} alt="" className="h-24 w-full object-cover sm:h-36" />}
            <div className="p-3 sm:p-6">
              <span className={`${blob} grid h-12 w-12 place-items-center bg-primary-400/15 text-primary-600`}>
                <IconEl size={22} weight="bold" />
              </span>
              <h3 className="mt-4 text-base font-bold text-primary-900">{title}</h3>
              {body && <p className="mt-1.5 text-sm leading-relaxed text-ink/65">{body}</p>}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
