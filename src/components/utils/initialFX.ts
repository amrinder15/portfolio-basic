import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");

  // Hero entrance
  const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

  tl.fromTo(
    ".hero-label",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1 },
    0.1
  )
    .fromTo(
      ".hero-line",
      { opacity: 0, y: 80, filter: "blur(10px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, stagger: 0.15 },
      0.2
    )
    .fromTo(
      ".hero-bio",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 },
      0.6
    )
    .fromTo(
      ".hero-cta-row",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      0.8
    )
    .fromTo(
      ".hero-stat",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
      0.5
    )
    .fromTo(
      ".hero-scroll-hint",
      { opacity: 0 },
      { opacity: 1, duration: 1.2 },
      1.2
    )
    .fromTo(".nav", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1 }, 0.3);
}
