import { FOOTER_WORDMARK, NAME } from "../data/profile";

export function Footer() {
  return (
    <footer>
      <p
        aria-hidden="true"
        className="font-display bg-clip-text px-4 text-center text-[clamp(3rem,15vw,15rem)] leading-[0.9] whitespace-nowrap text-transparent uppercase select-none"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.4) 25%, rgba(255, 255, 255, 0.04) 100%)",
        }}
      >
        {FOOTER_WORDMARK}
      </p>
      <p className="mt-6 bg-[var(--sc-lime)] px-4 py-4 text-center text-sm font-medium text-[#1a1a1a]">
        © {new Date().getFullYear()} {NAME}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
