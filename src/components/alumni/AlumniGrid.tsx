import { motion, AnimatePresence } from "motion/react";
import { ALUMNI, type ProgramFilter } from "./alumniData";
import { pexelsPhoto } from "../../lib/site";
import Carousel from "../shared/Carousel";

export default function AlumniGrid({ filter }: { filter: ProgramFilter }) {
  const list = filter === "Semua" ? ALUMNI : ALUMNI.filter((a) => a.program === filter);

  return (
    <div className="mt-8">
      <Carousel breakpoint="sm" gridCols="sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((alumni) => (
            <motion.figure
              key={alumni.name}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-[82%] shrink-0 snap-start rounded-3xl border border-primary-100 bg-white p-6 sm:w-auto sm:shrink"
            >
              <blockquote className="text-sm leading-relaxed text-ink/75">"{alumni.quote}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <img src={pexelsPhoto(alumni.photo, 160)} alt="" className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-bold text-primary-900">{alumni.name}</p>
                  <p className="text-xs text-ink/50">Alumni Program {alumni.program}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </AnimatePresence>
      </Carousel>
    </div>
  );
}
