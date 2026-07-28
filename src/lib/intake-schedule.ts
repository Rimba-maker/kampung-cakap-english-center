const INTAKE_DAYS = [10, 25];

/** Batch intake selalu tanggal 10 & 25; dihitung dari tanggal sekarang, bukan hardcode. */
export function getUpcomingIntakes(count = 2, from: Date = new Date()): Date[] {
  const dates: Date[] = [];
  let year = from.getFullYear();
  let month = from.getMonth();
  let cursor = from.getDate();

  while (dates.length < count) {
    const next = INTAKE_DAYS.find((d) => d >= cursor);
    if (next) {
      dates.push(new Date(year, month, next));
      cursor = next + 1;
    } else {
      month += 1;
      if (month > 11) {
        month = 0;
        year += 1;
      }
      cursor = 1;
    }
  }
  return dates;
}

export function formatIndoDate(date: Date) {
  return new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "long", year: "numeric" }).format(date);
}
