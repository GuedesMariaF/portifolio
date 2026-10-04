import type { EducationItem } from "../types";

// Rows split by a vertical line: period and note on the left, title and
// institution on the right, both starting from the line.
export function EducationTimeline({ items }: { items: EducationItem[] }) {
  return (
    <ul className="mt-10 border-t border-white/15">
      {items.map(({ year, role, company, note, href }) => (
        <li
          key={`${company}-${role}`}
          data-reveal
          className="relative grid gap-4 border-b border-white/15 py-8 md:grid-cols-2 md:items-center"
        >
          <span className="absolute inset-y-6 left-1/2 hidden w-px bg-white/20 md:block" />

          <div className="md:pr-10 md:text-right">
            <span className="font-display block text-2xl tracking-wide text-[var(--sc-lime)]">
              {year}
            </span>
            <p className="mt-2 text-sm text-[var(--sc-text-h)]/80">{note}</p>
          </div>

          <div className="md:pl-10">
            <h3 className="font-display text-3xl font-normal text-white uppercase">{role}</h3>
            <p className="mt-1 text-sm font-semibold text-white">{company}</p>
            {href && (
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm text-[var(--sc-lime)] underline-offset-4 hover:underline"
              >
                Ver na {company} ↗
              </a>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
