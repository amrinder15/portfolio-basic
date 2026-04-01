import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-inner">
        {/* Big CTA */}
        <div className="footer-cta">
          <span className="footer-label">Get in Touch</span>
          <h2 className="footer-heading">
            Let's build something
            <br />
            <em>extraordinary</em> together.
          </h2>
          <a
            href="mailto:a.rattanpal@hotmail.com"
            className="footer-email"
            data-cursor="disable"
          >
            a.rattanpal@hotmail.com <MdArrowOutward />
          </a>
        </div>

        {/* Info grid */}
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Education</h4>
            <p>
              M.Eng Electrical &amp; Computers, Concordia University,
              Montreal — 2014
            </p>
            <p>
              B.Tech Electronics &amp; Communication, Punjab Technical
              University — 2011
            </p>
          </div>
          <div className="footer-col">
            <h4>Certifications</h4>
            <p>
              Azure Administrator · Azure Solutions Architect Expert ·
              Certified Kubernetes Administrator (CKA) · SAFe · CEH · CCNA
            </p>
          </div>
          <div className="footer-col">
            <h4>Social</h4>
            <div className="footer-socials">
              <a
                href="https://www.linkedin.com/in/amrinder-rattanpal-01531677/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                <FaLinkedinIn /> LinkedIn
              </a>
              <a
                href="https://github.com/amrinder15"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>
            Built with passion by{" "}
            <strong>Amrinder Rattanpal</strong>
          </span>
          <span>
            <MdCopyright /> 2026
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
