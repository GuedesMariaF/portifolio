import type { RepoProject } from "../types";

export const PROJECTS: RepoProject[] = [
  {
    name: "Cronos Web",
    kind: "Extensão para Chrome · em desenvolvimento",
    text: "Rastreia o tempo gasto em cada domínio navegado, no estilo WakaTime. Os dados ficam salvos localmente e aparecem em um popup com tema Terminal.",
    stack: ["WXT", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    href: "https://github.com/GuedesMariaF/cronos-ex-web",
  },
  {
    name: "Cronos API",
    kind: "Back-end",
    text: "API em Laravel com autenticação JWT, back-end do projeto Cronos.",
    stack: ["PHP", "Laravel", "JWT", "APIs REST"],
    href: "https://github.com/GuedesMariaF/cronos-api",
  },
  {
    name: "Pizza Shop Web",
    kind: "Front-end",
    text: "Interface web do projeto Pizza Shop, construída com React e TypeScript.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Query", "React Router", "Zod"],
    href: "https://github.com/GuedesMariaF/Pizza-Shop-Web",
  },
  {
    name: "RVidros API",
    kind: "Back-end",
    text: "API do projeto RVidros.",
    // TODO: o repositório não está acessível publicamente; preencha a stack e a descrição.
    stack: [],
    href: "https://github.com/GuedesMariaF/rvidros-api",
  },
];
