import { withBase } from "./site";

export const PHOTO_KEYS = [
  "hero",
  "study-outdoor",
  "conversation",
  "mentoring",
  "classroom",
  "speaking",
  "toefl",
  "books",
  "library",
  "notebook",
  "friends",
  "campus",
  "dorm-room",
  "dorm-common",
  "dorm-study",
  "dining",
  "kitchen",
  "laundry",
  "movie-night",
  "teacher-team",
  "tutor",
  "portrait-1",
  "portrait-2",
  "portrait-3",
  "portrait-4",
  "bromo",
  "ijen",
  "batu",
  "kediri",
  "arrival",
  "graduation",
  "materials",
  "discussion",
  "reading",
  "workshop",
] as const;

export type PhotoKey = (typeof PHOTO_KEYS)[number];

/** Illustrative Pexels scenes; provenance is recorded in public/images/sources.json. */
export function photo(key: PhotoKey): string {
  return withBase(`/images/${key}.webp`);
}
