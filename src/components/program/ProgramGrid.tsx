import { Plant } from "@phosphor-icons/react/dist/csr/Plant";
import { Leaf } from "@phosphor-icons/react/dist/csr/Leaf";
import { Target } from "@phosphor-icons/react/dist/csr/Target";
import { ChalkboardTeacher } from "@phosphor-icons/react/dist/csr/ChalkboardTeacher";
import ProgramTierCard from "./ProgramTierCard";
import { PHOTOS } from "../../lib/site";

const tiers = [
  {
    id: "confidence",
    icon: Plant,
    photo: PHOTOS.programConfidence,
    title: "Confidence",
    subtitle: "Dari Nol",
    description: "Untuk yang belum punya dasar sama sekali atau masih grogi ngomong bahasa Inggris.",
    materi: ["Grammar dasar", "Vocabulary dasar", "Basic Conversation", "Pronunciation dasar"],
    durasi: "2-4 minggu",
    target: "Berani ngomong kalimat sederhana tanpa takut salah",
  },
  {
    id: "active",
    icon: Leaf,
    photo: PHOTOS.programActive,
    title: "Active",
    subtitle: "Sudah Ada Dasar",
    description: "Untuk yang sudah bisa dasar tapi ingin lebih lancar dan percaya diri.",
    materi: ["Grammar for Speaking", "Active Conversation", "Listening", "Vocabulary in Context"],
    durasi: "4-8 minggu",
    target: "Bisa ngobrol natural dalam berbagai topik sehari-hari",
  },
  {
    id: "fluent-toefl",
    icon: Target,
    photo: PHOTOS.programFluentToefl,
    title: "Fluent & TOEFL Prep",
    subtitle: "Lancar Total",
    description: "Untuk yang ingin lancar total atau butuh skor TOEFL untuk kuliah/kerja.",
    materi: ["Advanced Speaking", "TOEFL ITP (Structure, Listening, Reading)", "Academic Writing", "Syntax"],
    durasi: "4-8 minggu",
    target: "Skor TOEFL kompetitif dan speaking lancar untuk konteks formal",
  },
  {
    id: "micro-teaching",
    icon: ChalkboardTeacher,
    photo: PHOTOS.programMicroTeaching,
    title: "Micro Teaching",
    subtitle: "Lanjutan",
    description: "Untuk yang sudah fluent dan tertarik jadi tutor/pengajar.",
    materi: ["Teknik mengajar", "Public speaking", "Lesson planning"],
    durasi: "2-4 minggu",
    target: "Siap mengajar bahasa Inggris tingkat dasar-menengah",
  },
];

export default function ProgramGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {tiers.map((tier, i) => (
        <ProgramTierCard key={tier.id} index={i} {...tier} />
      ))}
    </div>
  );
}
