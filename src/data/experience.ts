import type { Job } from "../types";

export const JOBS: Job[] = [
  {
    year: "09/2026 — Atual",
    role: "Dev Full Stack Júnior III",
    company: "Next Tecnologia, Cruzeiro, SP",
    text: "Desenvolvimento full stack com React, TypeScript e Laravel, atuando na construção de aplicações, gerenciamento de deploys e infraestrutura. Liderança técnica do time, responsável pela análise de requisitos, estimativa de prazos e gestão de entregas de ponta a ponta.",
    stack: ["React", "TypeScript", "Laravel", "Deploy", "Infraestrutura"],
    // TODO: liste aqui os projetos e clientes deste cargo.
    projects: [],
  },
  {
    year: "09/2025 — 09/2026",
    role: "Dev Front-end Júnior I",
    company: "Next Tecnologia, Cruzeiro, SP",
    text: "Desenvolvimento de interfaces modernas e responsivas com React, JavaScript e TypeScript para projetos da EMGEPRON. Implementação de componentes reutilizáveis, consumo de APIs REST e colaboração na evolução contínua das aplicações estratégicas do cliente.",
    stack: ["React", "JavaScript", "TypeScript", "APIs REST"],
    projects: [
      {
        client: "EMGEPRON",
        name: "Aplicações estratégicas",
        text: "Interfaces responsivas e componentes reutilizáveis.",
      },
    ],
  },
  {
    year: "07/2025 — 09/2025",
    role: "Assistente de Desenvolvimento de Software",
    company: "Prod, Passa Quatro, MG",
    text: "Desenvolvimento e manutenção de sites e blog posts utilizando HTML, SASS e JavaScript para clientes como GSK e Congresso Ajax Brasil.",
    stack: ["HTML", "SASS", "JavaScript"],
    projects: [
      { client: "GSK", name: "Sites e blog posts", text: "Desenvolvimento e manutenção." },
      {
        client: "Congresso Ajax Brasil",
        name: "Site do congresso",
        text: "Desenvolvimento e manutenção.",
      },
    ],
  },
  {
    year: "04/2024 — 06/2025",
    role: "Dev de Aplicativos Móveis (Estágio)",
    company: "Next Tecnologia, Cruzeiro, SP",
    text: "Desenvolvimento de aplicações mobile com Flutter e gestão completa da publicação de apps na App Store e Play Store, além de condução de reuniões técnicas de alinhamento com clientes.",
    stack: ["Flutter", "App Store", "Play Store"],
    projects: [
      {
        client: "G20",
        name: "G20 — Sua Gestora",
        text: "Aplicativo mobile em Flutter, publicado na Play Store e na App Store.",
        links: [
          {
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=com.g.vinte.g_20&hl=pt_BR&pli=1",
          },
          {
            label: "App Store",
            href: "https://apps.apple.com/es/app/g20-sua-gestora/id6503010936?l=ca&platform=watch",
          },
        ],
      },
    ],
  },
];
