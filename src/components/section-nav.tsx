import { useMemo } from "react";
import type { NavItem } from "../data/navigation";
import { useActiveSection } from "../hooks/use-active-section";
import { RULER_LABEL_TOP, RulerTicks } from "./ruler-ticks";

// Fixed ruler-style table of contents. Only the current section's label shows;
// hovering or focusing the ruler reveals every label. Hidden below the lg breakpoint (the sections keep a left gutter from lg up so the ruler never overlaps the content).
export function SectionNav({ items }: { items: readonly NavItem[] }) {
  const ids = useMemo(() => items.map((item) => item.id), [items]);
  const active = useActiveSection(ids);

  return (
    <nav
      aria-label="Seções da página"
      className="group/nav fixed top-1/2 left-4 z-50 hidden -translate-y-1/2 lg:block"
    >
      <ol>
        {items.map(({ id, label }) => {
          const current = id === active;
          return (
            <li key={id} className="relative h-10">
              <a
                href={`#${id}`}
                aria-current={current ? "location" : undefined}
                className="group/item absolute inset-0 block w-8 outline-none group-hover/nav:w-44 group-focus-within/nav:w-44"
              >
                <RulerTicks current={current} />
                <span
                  style={{ top: RULER_LABEL_TOP }}
                  className={`absolute left-9 -translate-y-1/2 rounded px-1.5 py-0.5 text-sm whitespace-nowrap backdrop-blur transition-all duration-300 ${
                    current
                      ? "text-[var(--sc-lime)] opacity-100 max-xl:opacity-0 max-xl:group-hover/nav:opacity-100 max-xl:group-focus-within/nav:opacity-100"
                      : "-translate-x-2 text-white/70 opacity-0 group-hover/nav:translate-x-0 group-hover/nav:opacity-100 group-focus-within/nav:translate-x-0 group-focus-within/nav:opacity-100 group-hover/item:text-white"
                  }`}
                >
                  {label}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
