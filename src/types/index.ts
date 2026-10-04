export interface ContactLink {
  label: string;
  value: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

/** A project or client worked on within a job. */
export interface ClientProject {
  client: string;
  name: string;
  text: string;
  links?: ProjectLink[];
}

export interface Job {
  year: string;
  role: string;
  company: string;
  text: string;
  stack: string[];
  projects: ClientProject[];
}

export interface EducationItem {
  year: string;
  role: string;
  company: string;
  note: string;
  href?: string;
}

/** A personal project published on GitHub. */
export interface RepoProject {
  name: string;
  kind: string;
  text: string;
  stack: string[];
  href: string;
}

export interface StackGroup {
  title: string;
  items: string[];
}
