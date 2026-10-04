import type { Ref } from "react";
import { PhotoSlot } from "../components/floating-photo";
import { SectionHeading } from "../components/section-heading";
import { SKILLS, STATS } from "../data/about";

interface AboutProps {
  sectionRef: Ref<HTMLElement>;
  photoSlotRef: Ref<HTMLDivElement>;
}

export function About({ sectionRef, photoSlotRef }: AboutProps) {
  return (
    <section ref={sectionRef} id="about" className="grid min-h-screen place-items-center px-4 lg:px-16 py-16">
      <div className="grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="max-w-lg">
          <SectionHeading tag="Conheça minha jornada" title="Sobre mim" />
          <p className="mt-4 text-sm leading-relaxed text-[var(--sc-text-h)]/90">
            <strong className="text-white">2 anos</strong> de experiência no desenvolvimento de
            softwares web e mobile, com vivência prática em{" "}
            <strong className="text-white">React, TypeScript, Laravel e Flutter</strong>. Atuo na construção de interfaces, integração e desenvolvimento de APIs REST, além de dar suporte à liderança técnica no levantamento de requisitos, prazos e entregas dos projetos.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <li key={skill} className="rounded-full border border-white/20 px-3 py-1 text-xs text-white">
                {skill}
              </li>
            ))}
          </ul>
          <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-4">
            {STATS.map(({ value, label }) => (
              <div key={label} className="flex flex-col">
                <dt className="text-sm font-semibold text-white">{label}</dt>
                <dd className="font-display order-first text-5xl text-[var(--sc-lime)]">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex justify-center md:justify-end">
          <PhotoSlot ref={photoSlotRef} className="md:mr-12" />
        </div>
      </div>
    </section>
  );
}
