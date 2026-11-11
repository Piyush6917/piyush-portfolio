import { ArrowUp, Terminal, Mail } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./Icons";

const CURRENT_YEAR = new Date().getFullYear();

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-top-row">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <div className="logo-badge-small">
                <Terminal size={14} />
              </div>
              <span className="logo-name">
                Piyush Pandey
              </span>
            </a>
            <p className="footer-tagline">
              Engineering AI/ML models, packet inspection pipelines, and cloud architectures.
            </p>
          </div>

          <div className="footer-links-group">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#research">Research</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-socials">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="footer-icon-link"
              aria-label="GitHub Profile"
            >
              <GithubIcon width={16} height={16} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="footer-icon-link"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon width={16} height={16} />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="footer-icon-link"
              aria-label="Send Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © {CURRENT_YEAR} {PERSONAL_INFO.name}. All rights reserved.
          </p>

          <div className="footer-center-note">
            <span className="live-status-dot" />
            <span>Noida, India • Built for performance & craft</span>
          </div>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
