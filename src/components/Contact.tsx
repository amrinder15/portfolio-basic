import { useEffect, useRef, useState } from "react";
import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import "./styles/Contact.css";

const Contact = () => {
  const emailAddress = "a.rattanpal@hotmail.com";
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">(
    "idle"
  );
  const resetTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimeoutRef.current) {
        window.clearTimeout(resetTimeoutRef.current);
      }
    };
  }, []);

  const setTemporaryStatus = (status: "copied" | "error") => {
    setCopyStatus(status);

    if (resetTimeoutRef.current) {
      window.clearTimeout(resetTimeoutRef.current);
    }

    resetTimeoutRef.current = window.setTimeout(() => {
      setCopyStatus("idle");
    }, 2200);
  };

  const fallbackCopy = (value: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = value;
    textArea.setAttribute("readonly", "true");
    textArea.style.position = "absolute";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.select();

    const copied = document.execCommand("copy");
    document.body.removeChild(textArea);

    if (!copied) {
      throw new Error("Copy command was rejected");
    }
  };

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(emailAddress);
      } else {
        fallbackCopy(emailAddress);
      }

      setTemporaryStatus("copied");
    } catch {
      setTemporaryStatus("error");
    }
  };

  const statusMessage =
    copyStatus === "copied"
      ? "Email copied"
      : copyStatus === "error"
        ? "Copy failed. Please copy it manually."
        : "Click the email to copy it";

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
          <button
            type="button"
            className="footer-email"
            data-cursor="disable"
            onClick={handleCopyEmail}
            aria-describedby="contact-copy-status"
          >
            {emailAddress} <MdArrowOutward />
          </button>
          <p
            id="contact-copy-status"
            className={`footer-copy-status footer-copy-status-${copyStatus}`}
            aria-live="polite"
          >
            {statusMessage}
          </p>
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
