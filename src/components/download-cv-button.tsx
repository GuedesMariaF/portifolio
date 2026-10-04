import { Download } from "lucide-react";
import { CV_FILENAME, CV_URL } from "../data/profile";

// Pill button that downloads the CV PDF.
export function DownloadCvButton() {
  return (
    <a
      href={CV_URL}
      download={CV_FILENAME}
      className="inline-flex items-center gap-2 rounded-full bg-[var(--sc-lime)] px-5 py-2.5 text-sm font-medium text-[#1a1a1a] transition-transform duration-300 hover:-translate-y-0.5"
    >
      <Download className="size-4" aria-hidden="true" />
      Baixar currículo
    </a>
  );
}
