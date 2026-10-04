import type { Ref } from "react";
import { DownloadCvButton } from "../components/download-cv-button";
import { PhotoSlot } from "../components/floating-photo";
import { NAME, NAME_ACCENT, ROLE, ROLE_SUBTITLE } from "../data/profile";

export function Hero({ photoSlotRef }: { photoSlotRef: Ref<HTMLDivElement> }) {
  return (
    <section id="home" className="grid min-h-screen place-items-center px-4 lg:px-16 py-16">
      <div className="grid w-full max-w-6xl items-center gap-x-6 gap-y-8 md:grid-cols-[1fr_auto_1fr]">
        <div className="order-2 text-center md:order-1 md:justify-self-end md:text-left">
          <h1 className="hero-title hero-title--name leading-[0.95]">
            {NAME.split(" ").map((word) => (
              <span
                key={word}
                className={word === NAME_ACCENT ? "block text-[var(--sc-lime)]" : "block"}
              >
                {word}
              </span>
            ))}
          </h1>
        </div>

        <PhotoSlot ref={photoSlotRef} className="order-1 mx-auto md:order-2" />

        <div className="order-3 text-center md:text-left">
          <p className="hero-title">{ROLE}</p>
          <p className="font-display mt-1 text-2xl tracking-[0.3em] text-[var(--sc-lime)] uppercase sm:text-3xl">
            {ROLE_SUBTITLE}
          </p>
          <div className="mt-6">
            <DownloadCvButton />
          </div>
        </div>
      </div>
    </section>
  );
}
