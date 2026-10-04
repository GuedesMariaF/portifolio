import type { ContactLink } from "../types";

export const NAME = "Maria Fernanda Guedes";
// The word of the name highlighted in green in the hero.
export const NAME_ACCENT = "Fernanda";
export const ROLE = "Full Stack";
export const ROLE_SUBTITLE = "Developer";
export const FOOTER_WORDMARK = "Maria F Guedes";

// The CV lives in `public/`; to update it, replace that file (same name).
export const CV_FILENAME = "MariaFernandaGuedes_curriculo.pdf";
export const CV_URL = `/${CV_FILENAME}`;

const EMAIL = "mariafernandaguedes1@outlook.com";
const PHONE = "(35) 98820-2099";
const LOCATION = "Cruzeiro, São Paulo";
const LINKEDIN = "linkedin.com/in/mariafernandaguedes";
const GITHUB = "github.com/GuedesMariaF";

export const CONTACTS: ContactLink[] = [
  {
    label: "Endereço",
    value: LOCATION,
    href: `https://www.google.com/maps/search/${encodeURIComponent(LOCATION)}`,
  },
  { label: "Telefone", value: PHONE, href: `tel:+55${PHONE.replace(/\D/g, "")}` },
  { label: "E-mail", value: EMAIL, href: `mailto:${EMAIL}` },
  { label: "LinkedIn", value: LINKEDIN, href: `https://${LINKEDIN}` },
  { label: "GitHub", value: GITHUB, href: `https://${GITHUB}` },
];
