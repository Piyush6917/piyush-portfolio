import React, { useState } from "react";
import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "../data/portfolioData";
import { Cpu, Cloud, Code, Database, Sparkles, Check } from "lucide-react";

export const Skills: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const categories = ["All", ...SKILL_CATEGORIES.map((cat) => cat.name)];

  const filteredCategories =
    selectedFilter === "All"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.name === selectedFilter);

  const getCategoryIcon = (name: string) => {
    switch (name) {
      case "AI & Machine Learning":
        return Cpu;
      case "Cloud & Infrastructure":
        return Cloud;
      case "Languages & Frameworks":
        return Code;
      case "Data Science & Analytics":
      default:
        return Database;
    }
  };

  return (
    <section id="skills" className="section-wrapper skills-section">
      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <div className="section-pill">
            <span className="pill-dot" /> TECHNICAL TOOLKIT
          </div>
          <h2 className="section-title">
            Skills honed across <span>models, code & cloud.</span>
          </h2>
          <p className="section-lead">
            An overview of the languages, frameworks, and cloud services I use to build scalable,
            data-intensive systems.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="skills-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-btn ${selectedFilter === cat ? "active" : ""}`}
              onClick={() => setSelectedFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Category Cards */}
        <div className="skills-grid">
          {filteredCategories.map((cat, idx) => {
            const Icon = getCategoryIcon(cat.name);
            return (
              <motion.div
                key={cat.name}
                className="skill-category-card"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <div className="category-header">
                  <div className="category-icon-title">
                    <div className="category-icon-box">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="category-title">{cat.name}</h3>
                      <span className="category-badge">{cat.badge}</span>
                    </div>
                  </div>
                </div>

                <div className="skill-items-list">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-item-card">
                      <div className="skill-name-row">
                        <span className="skill-name">{skill.name}</span>
                        <Check size={13} className="skill-check" />
                      </div>
                      <p className="skill-detail">{skill.detail}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Workflow Pipeline Callout */}
        <div className="workflow-callout-card">
          <div className="callout-left">
            <Sparkles size={20} className="callout-icon" />
            <div>
              <h4 className="callout-heading">End-to-End Production Flow</h4>
              <p className="callout-sub">How my technical skills integrate across the product lifecycle</p>
            </div>
          </div>
          <div className="pipeline-steps">
            <span className="step-pill">Data Ingestion (Pandas/Scapy)</span>
            <span className="step-arrow">→</span>
            <span className="step-pill">Model Training (PyTorch/Scikit)</span>
            <span className="step-arrow">→</span>
            <span className="step-pill">Containerization (Docker)</span>
            <span className="step-arrow">→</span>
            <span className="step-pill">Cloud Orchestration (AWS ECS/EC2)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

