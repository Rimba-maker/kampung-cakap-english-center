import { PROGRAMS, type ProgramFilter } from "./alumniData";

interface Props {
  active: ProgramFilter;
  onChange: (value: ProgramFilter) => void;
}

export default function AlumniFilter({ active, onChange }: Props) {
  return (
    <div className="alumni-filters" role="group" aria-label="Filter cerita contoh berdasarkan program">
      {PROGRAMS.map((program) => (
        <button key={program} type="button" onClick={() => onChange(program)} aria-pressed={active === program} aria-controls="alumni-stories" className="alumni-filter">
          {program}
        </button>
      ))}
    </div>
  );
}
