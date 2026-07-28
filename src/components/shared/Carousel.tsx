import type { ReactNode } from "react";

/** ponytail: pt-4 (mobile) is baked in on purpose, overflow-x-auto silently forces overflow-y
 * to clip too, which cut off the "Terpopuler" badge twice (PricingPreview, PricingGrid) before
 * this module existed. Every caller gets the fix for free now, whether their cards need it or not. */
const TRACK = {
  sm: "no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pt-4 pb-2 sm:grid sm:snap-none sm:gap-6 sm:overflow-visible sm:pt-0 sm:pb-0",
  md: "no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pt-4 pb-2 md:grid md:snap-none md:gap-6 md:overflow-visible md:pt-0 md:pb-0",
} as const;

interface CarouselProps {
  /** breakpoint at which it switches from swipe carousel (mobile) to a static grid */
  breakpoint: keyof typeof TRACK;
  /** grid-cols classes applied from `breakpoint` upward, e.g. "sm:grid-cols-2 lg:grid-cols-3" */
  gridCols: string;
  children: ReactNode;
}

/**
 * Track-level seam for swipeable mobile carousels that become a static grid on larger screens.
 * Owns scroll-snap mechanics only, each card still supplies its own width/shrink classes
 * (e.g. `w-[78%] shrink-0 snap-start sm:w-auto sm:shrink`), since that's genuinely per-content.
 */
export default function Carousel({ breakpoint, gridCols, children }: CarouselProps) {
  return <div className={`${TRACK[breakpoint]} ${gridCols}`}>{children}</div>;
}
