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
        {/* Same pill as the store links in the experience cards. */}
        <span className="mt-auto self-start pt-6">
          <span className="inline-block rounded-full border border-[var(--sc-lime)]/50 px-3 py-1 text-xs font-medium text-[var(--sc-lime)] transition-colors group-hover:bg-[var(--sc-lime)] group-hover:text-[#1a1a1a]">
            GitHub ↗
          </span>
        </span>
      </a>
    </li>
  );
}
