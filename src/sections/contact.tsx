import { SectionHeading } from "../components/section-heading";
import { CONTACTS } from "../data/profile";

export function Contact() {
  return (
    <section id="contact" className="grid place-items-center px-4 lg:px-16 pt-20 pb-12">
      <div className="w-full max-w-6xl">
        <SectionHeading tag="Contato" title="Vamos conversar" />
        <dl className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {CONTACTS.map(({ label, value, href }) => {
            const external = href.startsWith("http");
            return (
              <div key={label}>
                <dt className="text-sm font-semibold text-white">{label}</dt>
                <dd className="mt-1">
                  <a
                    href={href}
                    {...(external && { target: "_blank", rel: "noreferrer" })}
                    className="group inline-flex items-baseline gap-2 text-lg break-all text-[var(--sc-text-h)]/80 transition-colors hover:text-[var(--sc-lime)]"
                  >
                    <span className="underline-offset-4 group-hover:underline">{value}</span>
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      ↗
                    </span>
                  </a>
                </dd>
              </div>
            );
          })}
        </dl>

      </div>
    </section>
  );
}
