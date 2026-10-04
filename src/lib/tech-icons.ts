import { Rocket, Server, Webhook } from "lucide-react";
import type { ComponentType } from "react";
import {
  SiAppstore,
  SiCoolify,
  SiCss,
  SiDocker,
  SiFlutter,
  SiGithubactions,
  SiGoogleplay,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiLaravel,
  SiLinux,
  SiPhp,
  SiReact,
  SiReactquery,
  SiReactrouter,
  SiSass,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiZod,
} from "react-icons/si";

export type TechIcon = ComponentType<{ className?: string }>;

// Icon for each technology name used in the data files. Names without an entry
// (e.g. "WXT") are rendered without an icon.
export const TECH_ICONS: Record<string, TechIcon> = {
  React: SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  HTML: SiHtml5,
  CSS: SiCss,
  SASS: SiSass,
  Laravel: SiLaravel,
  PHP: SiPhp,
  JWT: SiJsonwebtokens,
  "APIs REST": Webhook,
  Flutter: SiFlutter,
  // There is no React Native logo in the icon set; it shares React's atom.
  "React Native": SiReact,
  "App Store": SiAppstore,
  "Play Store": SiGoogleplay,
  Linux: SiLinux,
  Docker: SiDocker,
  "GitHub Actions": SiGithubactions,
  Coolify: SiCoolify,
  Deploy: Rocket,
  Infraestrutura: Server,
  Tailwind: SiTailwindcss,
  "Tailwind CSS": SiTailwindcss,
  "shadcn/ui": SiShadcnui,
  "React Query": SiReactquery,
  "React Router": SiReactrouter,
  Zod: SiZod,
  Vite: SiVite,
};
