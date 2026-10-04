import { Rocket, Server, Webhook } from "lucide-react";
import type { ComponentType } from "react";
import {
  SiAppstore,
  SiCoolify,
  SiDocker,
  SiFlutter,
  SiGithubactions,
  SiGoogleplay,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiLaravel,
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
  SASS: SiSass,
  Laravel: SiLaravel,
  PHP: SiPhp,
  JWT: SiJsonwebtokens,
  "APIs REST": Webhook,
  Flutter: SiFlutter,
  "App Store": SiAppstore,
  "Play Store": SiGoogleplay,
  Docker: SiDocker,
  "GitHub Actions": SiGithubactions,
  Coolify: SiCoolify,
  Deploy: Rocket,
  Infraestrutura: Server,
  "Tailwind CSS": SiTailwindcss,
  "shadcn/ui": SiShadcnui,
  "React Query": SiReactquery,
  "React Router": SiReactrouter,
  Zod: SiZod,
  Vite: SiVite,
};
