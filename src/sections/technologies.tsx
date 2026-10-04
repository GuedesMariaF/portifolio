import { SectionHeading } from "../components/section-heading";
import { STACKS } from "../data/technologies";
import { TECH_ICONS } from "../lib/tech-icons";

// Every listed technology that has an icon, once, for the scrolling strip.
const MARQUEE = [...new Set(STACKS.flatMap(({ items }) => items))].filter((tech) => TECH_ICONS[tech]);

export function Technologies() {
  return (
    <section id="technologies" className="grid place-items-center overflow-hidden px-4 py-16">
      <div className="w-full max-w-6xl">
        <SectionHeading tag="Com o que eu trabalho" title="Tecnologias" />
      </div>

      <div className="marquee mt-12 w-full" aria-hidden="true">
        <div className="marquee-track">
          {[...MARQUEE, ...MARQUEE].map((tech, i) => {
            const Icon = TECH_ICONS[tech];
            return <Icon key={`${tech}-${i}`} className="size-14 shrink-0 text-white/25 sm:size-20" />;
          })}
        </div>
      </div>

      <ul className="mt-12 w-full max-w-6xl">
        {STACKS.map(({ title, items }, i) => (
          <li
            key={title}
            data-reveal
            className="grid gap-6 border-t border-white/15 py-8 last:border-b md:grid-cols-[18rem_1fr] md:gap-8"
          >
            <div>
              <span className="font-display text-sm tracking-wide text-[var(--sc-lime)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-4xl font-normal text-white uppercase">{title}</h3>
            </div>
            <ul className="flex flex-wrap content-center gap-x-10 gap-y-5">
              {items.map((tech) => {
                const Icon = TECH_ICONS[tech];
                return (
                  <li key={tech} className="group flex items-center gap-3">
                    {Icon && (
                      <Icon className="size-7 text-white/60 transition-all duration-300 group-hover:scale-125 group-hover:text-[var(--sc-lime)]" />
                    )}
                    <span className="text-lg text-white/80 transition-colors duration-300 group-hover:text-white">
                      {tech}
                    </span>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
