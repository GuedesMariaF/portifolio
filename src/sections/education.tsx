import { EducationTimeline } from "../components/education-timeline";
import { SectionHeading } from "../components/section-heading";
import { COURSES, EDUCATION } from "../data/education";

export function Education() {
  return (
    <section id="education" className="grid min-h-[60vh] place-items-center px-4 lg:px-16 py-16">
      <div className="w-full max-w-6xl">
        <SectionHeading tag="Onde aprendi" title="Formação acadêmica" />
        <EducationTimeline items={EDUCATION} />

        <h3 className="font-display mt-16 text-3xl font-normal text-white uppercase">
          Cursos em andamento
        </h3>
        <EducationTimeline items={COURSES} />
      </div>
    </section>
  );
}
