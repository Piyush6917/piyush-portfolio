import { useState } from "react";
import { motion } from "framer-motion";
import {
  EXPERIENCES,
  EDUCATION_ITEMS,
  CERTIFICATIONS
} from "../data/portfolioData";
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles
} from "lucide-react";

export const Experience = () => {
  const [activeTab, setActiveTab] = useState<"experience" | "education" | "certifications">("experience");

  return (
    <section id="experience" className="section-wrapper experience-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <span className="pill-dot" /> CAREER & ACADEMICS
          </div>
          <h2 className="section-title">
            Experience, education & <span>credentials.</span>
          </h2>
          <p className="section-lead">
            Hands-on software development internships, academic training in Computer Science & AI,
            and industry-recognized technical certifications.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="exp-tabs-row">
          <button
            type="button"
            className={`exp-tab-btn ${activeTab === "experience" ? "active" : ""}`}
            onClick={() => setActiveTab("experience")}
          >
            <Briefcase size={16} />
            <span>Work Experience</span>
            <span className="count-badge">{EXPERIENCES.length}</span>
          </button>

          <button
            type="button"
            className={`exp-tab-btn ${activeTab === "education" ? "active" : ""}`}
            onClick={() => setActiveTab("education")}
          >
            <GraduationCap size={16} />
            <span>Education</span>
            <span className="count-badge">{EDUCATION_ITEMS.length}</span>
          </button>

          <button
            type="button"
            className={`exp-tab-btn ${activeTab === "certifications" ? "active" : ""}`}
            onClick={() => setActiveTab("certifications")}
          >
            <Award size={16} />
            <span>Certifications</span>
            <span className="count-badge">{CERTIFICATIONS.length}</span>
          </button>
        </div>

        {/* Tab 1: Experience */}
        {activeTab === "experience" && (
          <div className="timeline-container">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="timeline-item-card"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.1 }}
              >
                <div className="timeline-marker">
                  <div className="marker-dot">
                    <Briefcase size={14} />
                  </div>
                  {index < EXPERIENCES.length - 1 && <div className="marker-line" />}
                </div>

                <div className="timeline-content">
                  <div className="exp-meta-bar">
                    <span className="exp-type-tag">{exp.type}</span>
                    <div className="exp-dates">
                      <Calendar size={13} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <h3 className="exp-role">{exp.role}</h3>
                  <div className="exp-company-location">
                    <span className="company-name">{exp.company}</span>
                    <span className="location-dot">•</span>
                    <span className="location-text">
                      <MapPin size={12} /> {exp.location}
                    </span>
                  </div>

                  <ul className="exp-achievements-list">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx} className="achievement-item">
                        <CheckCircle2 size={15} className="achievement-check" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="exp-tech-chips">
                    {exp.tech.map((t, tIdx) => (
                      <span key={tIdx} className="exp-tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Tab 2: Education */}
        {activeTab === "education" && (
          <div className="education-grid">
            {EDUCATION_ITEMS.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="education-card-modern"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.1 }}
              >
                <div className="edu-top-meta">
                  <div className="edu-icon-box">
                    <GraduationCap size={20} />
                  </div>
                  <span className="edu-period">{edu.period}</span>
                </div>

                <h3 className="edu-degree">{edu.degree}</h3>
                <h4 className="edu-institution">{edu.institution}</h4>
                <p className="edu-detail">{edu.detail}</p>

                {edu.highlight && (
                  <div className="edu-highlight-pill">
                    <Sparkles size={12} />
                    <span>{edu.highlight}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* Tab 3: Certifications */}
        {activeTab === "certifications" && (
          <div className="certifications-grid">
            {CERTIFICATIONS.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="cert-card-modern"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.1 }}
              >
                <div className="cert-top-row">
                  <div className="cert-issuer-badge">
                    <Award size={15} />
                    <span>{cert.issuer}</span>
                  </div>
                  <span className="cert-status-badge">
                    <span className="status-dot-green" /> {cert.year}
                  </span>
                </div>

                <h3 className="cert-title">{cert.title}</h3>
                <span className="cert-badge-tag">{cert.credentialBadge}</span>
                <p className="cert-description">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
