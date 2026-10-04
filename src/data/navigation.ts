export interface NavItem {
  /** id of the section element to scroll to. */
  id: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Início" },
  { id: "about", label: "Sobre mim" },
  { id: "experience", label: "Experiência" },
  { id: "projects", label: "Projetos" },
  { id: "technologies", label: "Tecnologias" },
  { id: "education", label: "Formação" },
  { id: "contact", label: "Contato" },
];
