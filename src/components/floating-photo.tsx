import { Hand } from "lucide-react";
import type { Ref } from "react";

const PHOTO_SIZE = "aspect-[5/6] w-60 sm:w-72";

interface FloatingPhotoProps {
  ref: Ref<HTMLDivElement>;
  bubbleRef: Ref<HTMLSpanElement>;
}

// The portrait that scrolls from the hero to the about section, with the
// waving-hand bubble that fades out along the way.
export function FloatingPhoto({ ref, bubbleRef }: FloatingPhotoProps) {
  return (
    <div
      ref={ref}
      className={`${PHOTO_SIZE} pointer-events-none absolute top-0 left-0 z-10 rounded-3xl bg-[#2b2b2b]`}
    >
      <img
        src="/photo.jpg"
        alt="Retrato de Maria Fernanda Guedes"
        width={400}
        height={400}
        className="size-full rounded-3xl object-cover object-[52%_center]"
      />
      <span
        ref={bubbleRef}
        className="absolute -bottom-6 -left-8 flex size-28 items-center justify-center rounded-full bg-[var(--sc-lime)] text-[#1a1a1a]"
      >
        <Hand className="wave-hand size-12" strokeWidth={1.5} aria-hidden="true" />
      </span>
    </div>
  );
}

interface PhotoSlotProps {
  ref: Ref<HTMLDivElement>;
  className?: string;
}

// Empty box the same size as the photo, marking where it starts or ends.
export function PhotoSlot({ ref, className = "" }: PhotoSlotProps) {
  return <div ref={ref} className={`${PHOTO_SIZE} ${className}`} />;
}
