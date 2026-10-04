import { useLayoutEffect, type RefObject } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";

interface PhotoTransitionRefs {
  /** Positioned ancestor of the photo and both slots. */
  root: RefObject<HTMLElement | null>;
  photo: RefObject<HTMLElement | null>;
  bubble: RefObject<HTMLElement | null>;
  /** Empty placeholders marking where the photo starts and ends. */
  heroSlot: RefObject<HTMLElement | null>;
  aboutSlot: RefObject<HTMLElement | null>;
  /** The about section: the photo has arrived once it reaches the top. */
  about: RefObject<HTMLElement | null>;
}

// The photo lives above both sections and travels from the hero slot to the
// about slot, tilting as it goes, while the page scrolls between them.
export function usePhotoTransition({
  root,
  photo,
  bubble,
  heroSlot,
  aboutSlot,
  about,
}: PhotoTransitionRefs) {
  useLayoutEffect(() => {
    const offset = (el: HTMLElement) => {
      const a = el.getBoundingClientRect();
      const b = root.current!.getBoundingClientRect();
      return { x: a.left - b.left, y: a.top - b.top };
    };

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: root.current,
          start: 0,
          end: () => about.current!.offsetTop,
          scrub: 0.6,
          invalidateOnRefresh: true,
          // Re-measure the slots on every scroll tick so a layout shift that
          // did not trigger a refresh heals itself.
          onUpdate: () => {
            tl.invalidate();
          },
        },
      });
      tl.fromTo(
        photo.current,
        { x: () => offset(heroSlot.current!).x, y: () => offset(heroSlot.current!).y, rotation: 0 },
        { x: () => offset(aboutSlot.current!).x, y: () => offset(aboutSlot.current!).y, rotation: 8, duration: 1 },
        0,
      );
      tl.to(bubble.current, { opacity: 0, scale: 0.4, duration: 0.3 }, 0);
    }, root);

    // Slot positions depend on font metrics and on the surrounding layout, so
    // measure again when fonts finish loading (`fonts.ready` can resolve before
    // a lazily requested font has even started) and whenever a slot, or
    // anything laid out next to it, changes size.
    const refresh = () => ScrollTrigger.refresh();
    document.fonts.ready.then(refresh);
    document.fonts.addEventListener("loadingdone", refresh);
    window.addEventListener("load", refresh);

    let frame = 0;
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(refresh);
    });
    const watched = new Set<Element>();
    for (const slot of [heroSlot.current, aboutSlot.current]) {
      if (!slot) continue;
      watched.add(slot);
      if (slot.parentElement) {
        watched.add(slot.parentElement);
        for (const sibling of slot.parentElement.children) watched.add(sibling);
      }
    }
    if (root.current) watched.add(root.current);
    for (const el of watched) observer.observe(el);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      document.fonts.removeEventListener("loadingdone", refresh);
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, [root, photo, bubble, heroSlot, aboutSlot, about]);
}
