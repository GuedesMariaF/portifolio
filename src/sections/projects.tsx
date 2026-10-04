import { ProjectCard } from "../components/project-card";
import { SectionHeading } from "../components/section-heading";
import { PROJECTS } from "../data/projects";

export function Projects() {
  return (
    <section id="projects" className="grid place-items-center px-4 py-16">
      <div className="w-full max-w-6xl">
        <SectionHeading tag="No GitHub" title="Projetos" />
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </ul>
      </div>
    </section>
  );
}
