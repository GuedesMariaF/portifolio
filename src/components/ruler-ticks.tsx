// The ticks of one table-of-contents row, like a ruler: three short ones and a
// long one that lines up with the label (at 78% of the row's height).
// Positions are percentages, so it works with any row height. The parent must
// be `relative` and, to get the hover growth, a `group/item`.
const MINOR_TICKS = ["10%", "32%", "55%"];

export const RULER_LABEL_TOP = "78%";

export function RulerTicks({ current }: { current: boolean }) {
  return (
    <>
      {MINOR_TICKS.map((top) => (
        <span key={top} style={{ top }} className="absolute left-0 h-px w-2 bg-white/20" />
      ))}
      <span
        style={{ top: RULER_LABEL_TOP }}
        className={`absolute left-0 h-px transition-all duration-300 ${
          current
            ? "w-6 bg-[var(--sc-lime)]"
            : "w-4 bg-white/50 group-hover/item:w-6 group-hover/item:bg-white"
        }`}
      />
    </>
  );
}
