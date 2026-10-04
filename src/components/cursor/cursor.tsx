import { gsap } from "../../lib/gsap";
import { useEffect, useRef } from "react";

const TRAIL = 14;

// A small lime dot that replaces the native cursor, with a tapering trail of
// dots that each follow a little later than the one before. Only for
// mouse-like pointers, and not when the user prefers reduced motion; touch
// devices keep the native behaviour.
export function Cursor() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const enabled = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    ).matches;
    if (!enabled) return;

    const html = document.documentElement;
    html.classList.add("custom-cursor");

    const ctx = gsap.context(() => {
      const dots = gsap.utils.toArray<HTMLElement>("[data-dot]", root.current);
      gsap.set(root.current, { opacity: 0 });

      // dots[0] is the head; every next one lags more, is smaller and fainter.
      const followers = dots.map((dot, i) => {
        const t = i / dots.length;
        gsap.set(dot, { xPercent: -50, yPercent: -50, scale: 1 - t * 0.7, opacity: 1 - t * 0.85 });
        const duration = 0.05 + i * 0.045;
        return {
          x: gsap.quickTo(dot, "x", { duration, ease: "power3" }),
          y: gsap.quickTo(dot, "y", { duration, ease: "power3" }),
        };
      });

      const onMove = (e: PointerEvent) => {
        for (const f of followers) {
          f.x(e.clientX);
          f.y(e.clientY);
        }
        gsap.to(root.current, { opacity: 1, duration: 0.2, overwrite: "auto" });
      };
      const onLeave = () => gsap.to(root.current, { opacity: 0, duration: 0.2 });

      window.addEventListener("pointermove", onMove);
      html.addEventListener("pointerleave", onLeave);
      return () => {
        window.removeEventListener("pointermove", onMove);
        html.removeEventListener("pointerleave", onLeave);
      };
    }, root);

    return () => {
      ctx.revert();
      html.classList.remove("custom-cursor");
    };
  }, []);

  return (
    <div ref={root} aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100] mix-blend-difference">
      {Array.from({ length: TRAIL }, (_, i) => (
        <div
          key={i}
          data-dot
          className="absolute top-0 left-0 size-2.5 rounded-full bg-[var(--sc-lime)]"
          // Draw the head last so it sits on top of its trail.
          style={{ zIndex: TRAIL - i }}
        />
      ))}
    </div>
  );
}
