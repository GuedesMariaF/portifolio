import { useLayoutEffect, useRef } from "react";
import { gsap } from "../lib/gsap";
import type { ClientProject, Job } from "../types";
import { TechBadge } from "./tech-badge";

function ClientProjectCard({ project, index }: { project: ClientProject; index: number }) {
  return (
    <li
      style={{ transitionDelay: `${150 + index * 90}ms` }}
      className="reveal-card rounded-xl border border-white/15 px-4 py-3"
    >
      <p className="font-display text-xs tracking-wide text-[var(--sc-lime)] uppercase">
        {project.client}
      </p>
      <p className="text-sm font-semibold text-white">{project.name}</p>
      <p className="mt-0.5 text-xs text-[var(--sc-text-h)]/70">{project.text}</p>
      {project.links && (
        <div className="mt-3 flex flex-wrap gap-2">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--sc-lime)]/50 px-3 py-1 text-xs font-medium text-[var(--sc-lime)] transition-colors hover:bg-[var(--sc-lime)] hover:text-[#1a1a1a]"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      )}
    </li>
  );
}

// One job. The description and client projects open on hover or focus
// (see the `.reveal-*` rules in index.css); touch screens show them always.
function ExperienceItem({ job }: { job: Job }) {
  const { year, role, company, text, stack, projects } = job;
  const current = year.includes("Atual");

  return (
    <li
      data-reveal
      tabIndex={0}
      className="reveal-row relative grid gap-4 border-b border-white/15 px-5 py-8 outline-none sm:px-6 md:grid-cols-[11rem_1fr_1fr] md:gap-8"
    >
      <span
        className={`timeline-dot absolute top-[2.35rem] -left-8 size-3.5 rounded-full border-2 border-[var(--sc-lime)] ${
          current ? "bg-[var(--sc-lime)]" : "bg-[#1c1c1c]"
        }`}
      >
        {current && (
          <span className="absolute -inset-0.5 animate-ping rounded-full bg-[var(--sc-lime)]/60" />
        )}
      </span>
      <span className="reveal-bar absolute inset-y-0 left-0 w-0.5 bg-[var(--sc-lime)]" />

      <div>
        <span className="reveal-year font-display block text-2xl tracking-wide text-[var(--sc-lime)]">
          {year}
        </span>
      </div>

      <div>
        <h3 className="reveal-title font-display text-3xl font-normal text-white uppercase">
          {role}
        </h3>
        <p className="mt-1 text-sm font-semibold text-white">{company}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Stack">
          {stack.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </ul>
      </div>

      <div className="reveal-panel">
        <div className="min-h-0 overflow-hidden">
          <p className="text-sm leading-relaxed text-[var(--sc-text-h)]/80">{text}</p>
          {projects.length > 0 && (
            <div className="mt-5">
              <p className="font-display text-sm tracking-wide text-white uppercase">
                Projetos e clientes
              </p>
              <ul className="mt-2 grid gap-2">
                {projects.map((project, i) => (
                  <ClientProjectCard key={`${project.client}-${project.name}`} project={project} index={i} />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export function ExperienceTimeline({ items }: { items: Job[] }) {
  const list = useRef<HTMLUListElement>(null);
  const progress = useRef<HTMLSpanElement>(null);

  // The lime line fills in as the list scrolls past.
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        progress.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: list.current, start: "top 60%", end: "bottom 60%", scrub: true },
        },
      );
    }, list);
    return () => ctx.revert();
  }, []);

  return (
    <ul ref={list} className="relative mt-10 border-t border-white/15 pl-8">
      <span className="absolute top-0 bottom-0 left-[7px] w-px bg-white/15" />
      <span
        ref={progress}
        className="absolute top-0 bottom-0 left-[7px] w-px origin-top bg-[var(--sc-lime)]"
      />
      {items.map((job) => (
        <ExperienceItem key={`${job.company}-${job.role}`} job={job} />
      ))}
    </ul>
  );
}
