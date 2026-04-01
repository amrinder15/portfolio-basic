import "./styles/Landing.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { smoother } from "./Navbar";

const Landing = () => {
  const handleContactClick = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();

    if (smoother) {
      smoother.scrollTo("#contact", true, "top top");
      return;
    }

    document.querySelector("#contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="hero" id="landingDiv">
      <div className="hero-grid">
        {/* Left column */}
        <div className="hero-left">
          <div className="hero-label">Staff DevOps Engineer</div>
          <h1 className="hero-name">
            <span className="hero-line">Amrinder</span>
            <span className="hero-line hero-line-accent">Rattanpal</span>
          </h1>
          <p className="hero-bio">
            I architect cloud-native platforms, lead infrastructure at scale,
            and build the foundations engineering teams ship on.
          </p>
          <div className="hero-cta-row">
            <a
              href="#contact"
              className="hero-btn"
              data-cursor="disable"
              onClick={handleContactClick}
            >
              Get in touch <MdArrowOutward />
            </a>
            <div className="hero-socials">
              <a
                href="https://github.com/amrinder15"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/amrinder-rattanpal-01531677/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Right column — stats */}
        <div className="hero-right">
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number">10+</span>
              <span className="hero-stat-label">Years Experience</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">6</span>
              <span className="hero-stat-label">Certifications</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">250+</span>
              <span className="hero-stat-label">Deployments</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">1000+</span>
              <span className="hero-stat-label">VMs Managed</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>

      {/* Ambient background */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
    </section>
  );
};

export default Landing;
