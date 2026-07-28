import { useState, type FormEvent } from "react";
import { waLink } from "../../lib/site";

const PROGRAM_OPTIONS = ["Confidence", "Active", "Fluent & TOEFL Prep", "Micro Teaching", "Belum tahu, mau konsultasi"];
const DURASI_OPTIONS = ["2 Minggu", "1 Bulan", "2 Bulan", "3 Bulan", "6 Bulan"];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [program, setProgram] = useState(PROGRAM_OPTIONS[0]);
  const [durasi, setDurasi] = useState(DURASI_OPTIONS[0]);
  const [startDate, setStartDate] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const message = [
      `Halo, saya mau daftar konsultasi Kampung Cakap.`,
      `Nama: ${name}`,
      `WhatsApp: ${phone}`,
      `Program yang diminati: ${program}`,
      `Durasi: ${durasi}`,
      startDate ? `Preferensi tanggal mulai: ${startDate}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 rounded-3xl border border-primary-100 bg-white p-6 md:p-8">
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-bold text-primary-900">
          Nama
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nama lengkap kamu"
          className="rounded-xl border border-primary-200 px-4 py-3 text-sm text-ink focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="phone" className="text-sm font-bold text-primary-900">
          Nomor WhatsApp
        </label>
        <input
          id="phone"
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="08xx-xxxx-xxxx"
          className="rounded-xl border border-primary-200 px-4 py-3 text-sm text-ink focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
        />
      </div>

      <div className="grid gap-2 sm:grid-cols-2 sm:gap-5">
        <div className="grid gap-2">
          <label htmlFor="program" className="text-sm font-bold text-primary-900">
            Program yang Diminati
          </label>
          <select
            id="program"
            value={program}
            onChange={(e) => setProgram(e.target.value)}
            className="rounded-xl border border-primary-200 bg-white px-4 py-3 text-sm text-ink focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
          >
            {PROGRAM_OPTIONS.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div className="grid gap-2">
          <label htmlFor="durasi" className="text-sm font-bold text-primary-900">
            Durasi
          </label>
          <select
            id="durasi"
            value={durasi}
            onChange={(e) => setDurasi(e.target.value)}
            className="rounded-xl border border-primary-200 bg-white px-4 py-3 text-sm text-ink focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
          >
            {DURASI_OPTIONS.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-2">
        <label htmlFor="startDate" className="text-sm font-bold text-primary-900">
          Preferensi Tanggal Mulai
        </label>
        <input
          id="startDate"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="rounded-xl border border-primary-200 px-4 py-3 text-sm text-ink focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
        />
      </div>

      <button
        type="submit"
        className="mt-2 rounded-full bg-cta py-3.5 text-sm font-bold text-white transition-transform active:scale-[0.98]"
      >
        Kirim & Konsultasi via WhatsApp
      </button>
    </form>
  );
}
