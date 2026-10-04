import { ExperienceTimeline } from "../components/experience-timeline";
import { SectionHeading } from "../components/section-heading";
import { JOBS } from "../data/experience";

export function Experience() {
  return (
    <section id="experience" className="grid min-h-screen place-items-center px-4 lg:px-16 py-16">
      <div className="w-full max-w-6xl">
        <SectionHeading tag="Minha trajetória" title="Experiência profissional" />
        <ExperienceTimeline items={JOBS} />
      </div>
    </section>
  );
}
