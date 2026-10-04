import { useRef } from "react";
import { Cursor } from "./components/cursor";
import { FloatingPhoto } from "./components/floating-photo";
import { SectionNav } from "./components/section-nav";
import { NAV_ITEMS } from "./data/navigation";
import { usePhotoTransition } from "./hooks/use-photo-transition";
import { useScrollReveal } from "./hooks/use-scroll-reveal";
import {
  About,
  Contact,
  Education,
  Experience,
  Footer,
  Hero,
  Projects,
  Technologies,
} from "./sections";

export default function App() {
  const root = useRef<HTMLDivElement>(null);
  const photo = useRef<HTMLDivElement>(null);
  const bubble = useRef<HTMLSpanElement>(null);
  const heroSlot = useRef<HTMLDivElement>(null);
  const aboutSlot = useRef<HTMLDivElement>(null);
  const about = useRef<HTMLElement>(null);

  usePhotoTransition({ root, photo, bubble, heroSlot, aboutSlot, about });
  useScrollReveal(root);

  return (
    <div ref={root} className="hero-noise relative isolate overflow-x-clip">
      <Cursor />
      <SectionNav items={NAV_ITEMS} />
      <FloatingPhoto ref={photo} bubbleRef={bubble} />

      <Hero photoSlotRef={heroSlot} />
      <About sectionRef={about} photoSlotRef={aboutSlot} />
      <Experience />
      <Projects />
      <Technologies />
      <Education />

      <div className="mt-16 overflow-hidden">
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
