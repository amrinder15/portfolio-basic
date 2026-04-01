import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function setAllTimeline() {
  // Hero parallax fade
  gsap.to(".hero", {
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
    opacity: 0,
    y: "-15%",
  });

  // About section reveal
  gsap.fromTo(
    ".about-inner",
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    }
  );
}
