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
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [messageLink, setMessageLink] = useState("");

  function validatePhone(value: string) {
    const digits = value.replace(/\D/g, "");
    return /^\+?[\d\s().-]+$/.test(value.trim()) && digits.length >= 8 && digits.length <= 15
      ? ""
      : "Masukkan nomor WhatsApp yang valid (8–15 digit), misalnya 081234567890 atau +6281234567890.";
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const invalidName = name.trim() ? "" : "Isi nama kamu agar pesan konsultasi mudah dikenali.";
    const invalidPhone = validatePhone(phone);
    setNameError(invalidName);
    setPhoneError(invalidPhone);
    setMessageLink("");
    if (invalidName || invalidPhone) {
      const field = event.currentTarget.elements.namedItem(invalidName ? "name" : "phone") as HTMLInputElement | null;
      field?.focus();
      return;
    }

    const message = [
      "Halo, saya mau daftar konsultasi Kampung Cakap.",
      `Nama: ${name.trim()}`,
      `WhatsApp: ${phone.trim()}`,
      `Program yang diminati: ${program}`,
      `Durasi: ${durasi}`,
      startDate ? `Preferensi tanggal mulai: ${startDate}` : null,
    ].filter(Boolean).join("\n");
    const link = waLink(message);
    setMessageLink(link);
    window.open(link, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="consultation-form" aria-labelledby="form-heading">
      <div className="form-intro"><h2 id="form-heading">Ceritakan rencana belajarmu.</h2><p>Nama dan nomor WhatsApp wajib diisi. Tanggal mulai boleh menyusul.</p></div>
      <div className="form-field">
        <label htmlFor="name">Nama <span>(wajib)</span></label>
        <input id="name" name="name" type="text" autoComplete="name" required value={name} onChange={(event) => { setName(event.target.value); setNameError(""); setMessageLink(""); }} placeholder="Nama lengkap kamu" aria-invalid={nameError ? true : undefined} aria-describedby={nameError ? "name-error" : undefined} />
        {nameError ? <p className="field-error" id="name-error" role="alert">{nameError}</p> : null}
      </div>
      <div className="form-field">
        <label htmlFor="phone">Nomor WhatsApp <span>(wajib)</span></label>
        <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required value={phone} onChange={(event) => { setPhone(event.target.value); setPhoneError(""); setMessageLink(""); }} onBlur={() => { if (phone) setPhoneError(validatePhone(phone)); }} placeholder="081234567890" aria-invalid={phoneError ? true : undefined} aria-describedby={phoneError ? "phone-hint phone-error" : "phone-hint"} />
        <p className="field-hint" id="phone-hint">Gunakan nomor aktif. Format 08… atau +62… dapat digunakan.</p>
        {phoneError ? <p className="field-error" id="phone-error" role="alert">{phoneError}</p> : null}
      </div>
      <div className="form-row">
        <div className="form-field"><label htmlFor="program">Program yang Diminati</label><select id="program" name="program" value={program} onChange={(event) => { setProgram(event.target.value); setMessageLink(""); }}>{PROGRAM_OPTIONS.map((option) => <option key={option}>{option}</option>)}</select></div>
        <div className="form-field"><label htmlFor="durasi">Durasi</label><select id="durasi" name="durasi" value={durasi} onChange={(event) => { setDurasi(event.target.value); setMessageLink(""); }}>{DURASI_OPTIONS.map((option) => <option key={option}>{option}</option>)}</select></div>
      </div>
      <div className="form-field"><label htmlFor="startDate">Preferensi Tanggal Mulai <span>(opsional)</span></label><input id="startDate" name="startDate" type="date" value={startDate} onChange={(event) => { setStartDate(event.target.value); setMessageLink(""); }} aria-describedby="date-hint" /><p className="field-hint" id="date-hint">Intake reguler tanggal 10 dan 25. Preferensi ini bukan konfirmasi tempat.</p></div>
      <p className="form-disclosure">Form ini menyiapkan pesan, tidak menyimpan pendaftaran di situs. Nomor tujuan WhatsApp masih demonstrasi; jangan kirim data sensitif atau pembayaran.</p>
      <button type="submit" className="btn btn-primary">Kirim & Konsultasi via WhatsApp</button>
      <p className="field-hint">WhatsApp akan terbuka di tab baru. Kamu tetap perlu menekan kirim di WhatsApp.</p>
      {messageLink ? <div className="notice form-feedback" role="status"><p>Pesan konsultasimu siap. Periksa isinya di WhatsApp sebelum mengirim.</p><a className="text-link" href={messageLink} target="_blank" rel="noopener noreferrer">Buka pesan jika tab tidak terbuka</a></div> : null}
    </form>
  );
}
