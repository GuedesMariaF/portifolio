# Portfolio

Portfólio de Maria Fernanda Guedes, desenvolvedora full stack.

React 19 · TypeScript · Vite · Tailwind CSS v4 · GSAP (ScrollTrigger)

## Scripts

| Comando | O que faz |
|---|---|
| `pnpm dev` | servidor de desenvolvimento |
| `pnpm build` | checagem de tipos + build de produção |
| `pnpm preview` | serve o build localmente |
| `pnpm lint` | oxlint |

## Estrutura

```
src/
├── App.tsx               compõe as seções e liga os hooks de animação
├── main.tsx
├── index.css             tema (cores/fontes) e estilos que o Tailwind não cobre
├── sections/             uma seção da página por arquivo
│   ├── hero · about · experience · projects
│   └── technologies · education · contact · footer
├── components/           peças reutilizáveis das seções
│   ├── cursor/           cursor com rastro
│   ├── floating-photo    foto que viaja do hero até o "Sobre mim"
│   ├── experience-timeline · education-timeline
│   └── project-card · tech-badge · section-heading
├── data/                 todo o conteúdo do site (textos, cargos, links)
├── hooks/                use-photo-transition · use-scroll-reveal
├── lib/                  gsap (plugins registrados) e mapa de ícones das tecnologias
└── types/                tipos dos dados
```

## Editando o conteúdo

Os textos ficam em `src/data/`, sem JSX:

- `profile.ts`: nome e contatos
- `about.ts`: habilidades e números do "Sobre mim"
- `experience.ts`: cargos, stack e projetos/clientes de cada um
- `projects.ts`: projetos do GitHub
- `technologies.ts`: grupos de tecnologias
- `education.ts`: formação e cursos

Para uma tecnologia nova aparecer com ícone, adicione-a em `src/lib/tech-icons.ts`.

## Pendências

- Foto: salvar em `public/photo.jpg` e trocar o espaço reservado em `src/components/floating-photo.tsx`.
- Preencher os projetos de "Dev Full Stack Júnior III" (`experience.ts`) e a stack do "RVidros API" (`projects.ts`).
