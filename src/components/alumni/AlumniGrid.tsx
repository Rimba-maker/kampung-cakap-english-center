import { ALUMNI, type ProgramFilter } from "./alumniData";
import { photo } from "../../lib/photos";

export default function AlumniGrid({ filter }: { filter: ProgramFilter }) {
  const list = filter === "Semua" ? ALUMNI : ALUMNI.filter((alumni) => alumni.program === filter);

  return (
    <div>
      <p className="alumni-count" role="status" aria-live="polite">{list.length} cerita contoh · {filter === "Semua" ? "Semua program" : filter}</p>
      <div className="alumni-grid" id="alumni-stories" aria-label="Cerita contoh berdasarkan program">
        {list.map((alumni) => (
          <figure key={alumni.name} className="alumni-story">
            <img className="photo" src={photo(alumni.photo)} alt={alumni.scene} width={1200} height={800} loading="lazy" />
            <figcaption>
              <span className="tag">{alumni.program}</span>
              <blockquote>“{alumni.quote}”</blockquote>
              <p className="story-name">{alumni.name}</p>
              <p className="story-disclosure">Identitas & cerita contoh · Foto ilustrasi Pexels</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
