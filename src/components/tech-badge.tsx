import { TECH_ICONS } from "../lib/tech-icons";

interface TechBadgeProps {
  tech: string;
}

// Pill with the technology's icon (when there is one). Rendered as a list item.
export function TechBadge({ tech }: TechBadgeProps) {
  const Icon = TECH_ICONS[tech];
  return (
    <li className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white/80 ring-1 ring-white/20">
      {Icon && <Icon className="size-3.5 shrink-0" />}
      {tech}
    </li>
  );
}
