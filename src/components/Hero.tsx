import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Mail, Sparkles, BookOpen, Check, Copy } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { HeroConsole } from "./HeroConsole";

interface HeroProps {
  onCopyNotice: (msg: string) => void;
}

export const Hero = ({ onCopyNotice }: HeroProps) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    onCopyNotice(`Copied ${PERSONAL_INFO.email} to clipboard!`);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section className="hero-section">
      <div className="hero-background-effects">
        <div className="ambient-radial glow-top-left" />
        <div className="ambient-radial glow-center-right" />
        <div className="grid-overlay" />
      </div>

      <div className="hero-container">
        {/* Left Column: Intro */}
        <motion.div
          className="hero-text-column"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Status badge */}
          <div className="status-badge-wrapper">
            <span className="live-dot" />
            <span className="status-text">{PERSONAL_INFO.status}</span>
          </div>

          <div className="hero-titles">
            <p className="hero-eyebrow">
              <Sparkles size={14} className="eyebrow-sparkle" />
              <span>AI/ML ENGINEER & CLOUD ARCHITECT</span>
            </p>
            <h1 className="hero-main-title">
              Piyush Pandey
            </h1>
            <h2 className="hero-subtitle">
              Engineering intelligent models & scalable cloud infrastructure.
            </h2>
          </div>

          <p className="hero-summary">
            Computer Science & AI undergraduate focused on practical machine learning,
            real-time packet security frameworks, and resilient AWS deployments.
            Author of <strong>2 accepted peer-reviewed research papers</strong> in network security
            and decentralized intelligence.
          </p>

          {/* Action buttons */}
          <div className="hero-cta-row">
            <a href="#projects" className="cta-btn primary-cta">
              <span>View Projects</span>
              <ArrowUpRight size={17} />
            </a>

            <a href="#research" className="cta-btn secondary-cta">
              <BookOpen size={16} />
              <span>Research Papers</span>
            </a>

            <button
              type="button"
              className="cta-btn text-cta"
              onClick={handleCopyEmail}
              title="Copy email address"
              aria-label="Copy email address"
            >
              {copiedEmail ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
              <span>{copiedEmail ? "Copied Email!" : "Copy Email"}</span>
            </button>
          </div>

          {/* Metadata pill */}
          <div className="hero-metadata">
            <div className="meta-item">
              <MapPin size={14} />
              <span>{PERSONAL_INFO.location}</span>
            </div>
            <span className="meta-divider">•</span>
            <div className="meta-item">
              <Mail size={14} />
              <a href={`mailto:${PERSONAL_INFO.email}`}>{PERSONAL_INFO.email}</a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Code Console */}
        <motion.div
          className="hero-visual-column"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <HeroConsole onCopyNotice={onCopyNotice} />
        </motion.div>
      </div>

      {/* Hero Stats Ribbon */}
      <div className="hero-stats-ribbon">
        <div className="stats-container">
          {PERSONAL_INFO.stats.map((stat, i) => (
            <div key={i} className="stat-card">
              <div className="stat-value-group">
                <span className="stat-number">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
              <p className="stat-sub">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
