import { useState } from "react";
import AlumniFilter from "./AlumniFilter";
import AlumniGrid from "./AlumniGrid";
import type { ProgramFilter } from "./alumniData";

export default function AlumniSection() {
  const [filter, setFilter] = useState<ProgramFilter>("Semua");

  return (
    <div>
      <AlumniFilter active={filter} onChange={setFilter} />
      <AlumniGrid filter={filter} />
    </div>
  );
}
