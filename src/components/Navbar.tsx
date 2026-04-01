import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      speed: 1,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".nav a[data-href]");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        e.preventDefault();
        let section = (e.currentTarget as HTMLAnchorElement).getAttribute(
          "data-href"
        );
        smoother.scrollTo(section, true, "top top");
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);

  return (
    <nav className="nav">
      <a href="/#" className="nav-logo" data-cursor="disable">
        AR<span className="nav-logo-dot">.</span>
      </a>
      <div className="nav-links">
        <a data-href="#about" href="#about" data-cursor="disable">
          About
        </a>
        <a data-href="#work" href="#work" data-cursor="disable">
          Work
        </a>
        <a data-href="#contact" href="#contact" data-cursor="disable">
          Contact
        </a>
      </div>
      <a
        href="/Amrinder_Rattanpal.pdf"
        target="_blank"
        rel="noreferrer"
        className="nav-resume"
        data-cursor="disable"
      >
        Resume
      </a>
    </nav>
  );
};

export default Navbar;
