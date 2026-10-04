import { useEffect, useState } from "react";

// Id of the section crossing the middle of the viewport. At the very bottom of
// the page the last section wins, since it may never reach the middle.
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    const onScroll = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) setActive(ids[ids.length - 1]);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [ids]);

  return active;
}
