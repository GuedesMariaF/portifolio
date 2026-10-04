interface SectionHeadingProps {
  tag: string;
  title: string;
}

// The outlined label plus the big section title.
export function SectionHeading({ tag, title }: SectionHeadingProps) {
  return (
    <>
      <span className="font-display inline-block rounded-full border border-[var(--sc-lime)] px-4 py-1 text-lg tracking-wide text-[var(--sc-lime)] uppercase">
        {tag}
      </span>
      <h2 className="font-display mt-5 text-5xl font-normal text-white uppercase">{title}</h2>
    </>
  );
}
