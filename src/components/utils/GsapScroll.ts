import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

export function setCharTimeline(
  character: THREE.Object3D,
  camera: THREE.PerspectiveCamera
) {
  ScrollTrigger.getById("character-timeline")?.kill();

  gsap.timeline({
    scrollTrigger: {
      id: "character-timeline",
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
    defaults: { ease: "none" },
  })
    .to(
      character.position,
      {
        y: character.position.y - 0.8,
        x: character.position.x + 0.35,
      },
      0
    )
    .to(
      character.rotation,
      {
        y: character.rotation.y - 0.2,
        x: character.rotation.x + 0.05,
      },
      0
    )
    .to(
      camera.position,
      {
        z: camera.position.z - 1.6,
        y: camera.position.y - 0.6,
      },
      0
    );
}

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
