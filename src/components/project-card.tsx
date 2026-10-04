import type { RepoProject } from "../types";
import { TechBadge } from "./tech-badge";

// A personal project; the whole card links to its GitHub repository.
export function ProjectCard({ name, kind, text, stack, href }: RepoProject) {
  return (
    <li data-reveal>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="group flex h-full flex-col rounded-2xl border border-white/15 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--sc-lime)] hover:bg-white/[0.03]"
      >
        <p className="font-display text-xs tracking-wide text-[var(--sc-lime)] uppercase">{kind}</p>
        <h3 className="font-display mt-1 text-4xl font-normal text-white uppercase">{name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--sc-text-h)]/80">{text}</p>
        <ul className="mt-5 flex flex-wrap gap-2 empty:hidden">
          {stack.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </ul>
        <span className="font-display mt-auto pt-6 text-sm tracking-wide text-white uppercase transition-colors group-hover:text-[var(--sc-lime)]">
          Ver no GitHub ↗
        </span>
      </a>
    </li>
  );
}
