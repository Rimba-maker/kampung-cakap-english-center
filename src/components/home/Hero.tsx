import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react/dist/csr/ArrowUpRight";
import { ArrowRight } from "@phosphor-icons/react/dist/csr/ArrowRight";
import { waLink, withBase } from "../../lib/site";
import { photo } from "../../lib/photos";

export default function Hero() {
  const reducedMotion = useReducedMotion();
  return (
    <section className="home-hero container">
      <div className="hero-intro">
        <h1>Datang Bisu,<br /><span>Pulang Cakap.</span></h1>
        <div className="hero-copy">
          <p>Belajar Inggris, tinggal bareng, praktik 24 jam. Temukan keberanianmu di lingkungan yang bikin kamu terus bercakap.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={waLink("Halo, saya mau daftar Kampung Cakap English Center")} target="_blank" rel="noopener noreferrer">Daftar Sekarang<ArrowUpRight size={18} weight="bold" /></a>
            <a className="btn btn-secondary" href={withBase("/program/")}>Lihat Program<ArrowRight size={17} /></a>
          </div>
        </div>
      </div>
      <motion.div className="hero-triptych" initial={false} animate={reducedMotion ? undefined : { clipPath: ["inset(0 0 4% 0 round 16px)", "inset(0 0 0% 0 round 16px)"] }} transition={{ duration: .9, ease: [.16, 1, .3, 1] }}>
        <img className="photo hero-main-photo" src={photo("hero")} alt="Ilustrasi anak muda berdiskusi dan belajar bersama di luar ruang" width={1800} height={1200} fetchPriority="high" />
        <img className="photo" src={photo("conversation")} alt="Ilustrasi praktik percakapan bersama teman belajar" width={1200} height={800} />
        <img className="photo" src={photo("friends")} alt="Ilustrasi kebersamaan anak muda di lingkungan belajar" width={1200} height={800} />
      </motion.div>
      <div className="hero-caption"><p>Satu lingkungan. Banyak kesempatan untuk berani bicara.</p><span>Foto ilustrasi dari Pexels</span></div>
    </section>
  );
}
