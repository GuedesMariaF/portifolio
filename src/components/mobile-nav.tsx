import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState, type MouseEvent } from "react";
import type { NavItem } from "../data/navigation";
import { useActiveSection } from "../hooks/use-active-section";
import { RULER_LABEL_TOP, RulerTicks } from "./ruler-ticks";

// Menu for screens below the lg breakpoint, where the side ruler is hidden: a
// round button that opens a full-screen ruler-style list of the sections.
export function MobileNav({ items }: { items: readonly NavItem[] }) {
  const [open, setOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const ids = useMemo(() => items.map((item) => item.id), [items]);
  const active = useActiveSection(ids);

  // The page behind the menu must not scroll while it is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Close if the screen grows past the breakpoint (e.g. rotating a tablet).
  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (query.matches) setOpen(false);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  // While open: focus the first link, close on Escape and keep Tab inside the
  // menu (the toggle button plus the section links). Listening on `window`
  // works wherever the focus currently is.
  useEffect(() => {
    if (!open) return;

    // Wait a beat: at the first instant of the fade-in the menu is still
    // `visibility: hidden`, and hidden elements cannot take focus.
    const timer = window.setTimeout(() => {
      container.current?.querySelector<HTMLAnchorElement>("#mobile-menu a")?.focus();
    }, 60);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !container.current) return;

      const focusable = [...container.current.querySelectorAll<HTMLElement>("button, a")];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const current = document.activeElement;
      if (!container.current.contains(current)) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && current === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && current === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // Close first so the page can scroll again, then go to the section.
  const go = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    setOpen(false);
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", `#${id}`);
    }, 50);
  };

  return (
    <div ref={container} className="lg:hidden">
      <button
        ref={toggle}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((value) => !value)}
        className="fixed top-4 right-4 z-[60] grid size-12 place-items-center rounded-full bg-[var(--sc-lime)] text-[#1a1a1a] shadow-lg shadow-black/40 transition-transform duration-300 active:scale-95"
      >
        {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
      </button>

      <nav
        id="mobile-menu"
        aria-label="Seções da página"
        inert={!open}
        className={`hero-noise fixed inset-0 z-[55] flex flex-col justify-center px-8 transition-[opacity,visibility] duration-300 motion-reduce:transition-none ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ol>
          {items.map(({ id, label }, i) => {
            const current = id === active;
            return (
              <li
                key={id}
                style={{ transitionDelay: open ? `${80 + i * 45}ms` : "0ms" }}
                className={`relative h-[3.75rem] transition-[opacity,transform] duration-500 motion-reduce:transition-none ${
                  open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                }`}
              >
                <a
                  href={`#${id}`}
                  aria-current={current ? "location" : undefined}
                  onClick={(event) => go(event, id)}
                  className="group/item absolute inset-0 block outline-none"
                >
                  <RulerTicks current={current} />
                  <span
                    style={{ top: RULER_LABEL_TOP }}
                    className={`absolute left-10 -translate-y-1/2 text-xl whitespace-nowrap group-focus-visible/item:underline ${
                      current ? "text-[var(--sc-lime)]" : "text-white/80"
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
    </div>
  );
}
