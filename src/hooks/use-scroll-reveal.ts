import { useLayoutEffect, type RefObject } from "react";
import { gsap } from "../lib/gsap";

// Fades in and lifts every `[data-reveal]` element inside `scope` the first
// time it scrolls into view.
export function useScrollReveal(scope: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          y: 40,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: item, start: "top 85%", once: true },
        });
      });
    }, scope);
    return () => ctx.revert();
  }, [scope]);
}
