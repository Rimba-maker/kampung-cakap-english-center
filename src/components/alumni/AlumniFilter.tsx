import { PROGRAMS, type ProgramFilter } from "./alumniData";

interface Props {
  active: ProgramFilter;
  onChange: (value: ProgramFilter) => void;
}

export default function AlumniFilter({ active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {PROGRAMS.map((program) => (
        <button
          key={program}
          type="button"
          onClick={() => onChange(program)}
          className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
            active === program
              ? "border-primary-600 bg-primary-600 text-white"
              : "border-primary-200 bg-white text-primary-900 hover:border-primary-400"
          }`}
        >
          {program}
        </button>
      ))}
    </div>
  );
}
