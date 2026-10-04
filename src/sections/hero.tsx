import type { Ref } from "react";
import { PhotoSlot } from "../components/floating-photo";
import { NAME } from "../data/profile";

export function Hero({ photoSlotRef }: { photoSlotRef: Ref<HTMLDivElement> }) {
  return (
    <section id="home" className="grid min-h-screen place-items-center px-4 py-16">
      <div className="grid w-full max-w-6xl items-center gap-x-6 gap-y-8 md:grid-cols-[1fr_auto_1fr]">
        <div className="order-2 text-center md:order-1 md:text-left">
          <p className="font-display text-2xl tracking-wide text-[var(--sc-text-h)] uppercase sm:text-3xl">
            {NAME}
          </p>
          <h1 className="hero-title">FULL STACK</h1>
        </div>

        <PhotoSlot ref={photoSlotRef} className="order-1 mx-auto md:order-2" />

        <div className="order-3 text-center md:text-left">
          <h1 className="hero-title" aria-hidden="true">
            DEV
          </h1>
        </div>
      </div>
    </section>
  );
}
