import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "../data/portfolioData";
import { ArrowUpRight, Sparkles, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { GithubIcon } from "./Icons";

export const Projects = () => {
  const [filter, setFilter] = useState<string>("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = ["All", "AI & ML", "Cloud & DevOps", "Systems & Vision"];

  const filteredProjects =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="section-wrapper projects-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <span className="pill-dot" /> FEATURED PROJECTS
          </div>
          <h2 className="section-title">
            Architectures & applications <span>I've engineered.</span>
          </h2>
          <p className="section-lead">
            Production-oriented machine learning pipelines, containerized cloud infrastructure,
            and computer vision systems built with modern engineering standards.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="projects-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isExpanded = expandedId === project.id;
              return (
                <motion.article
                  key={project.id}
                  layout
                  className="project-card-modern"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                >
                  {/* Card Header Meta */}
                  <div className="project-card-top">
                    <div className="project-category-tag">
                      <span className="cat-dot" />
                      <span>{project.category}</span>
                    </div>
                    {project.featured && (
                      <span className="featured-badge">
                        <Sparkles size={11} /> Featured
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-tagline">{project.tagline}</p>
                  <p className="project-desc">{project.description}</p>

                  {/* Metrics Badges */}
                  <div className="project-metrics-row">
                    {project.metrics.map((metric, mIdx) => (
                      <span key={mIdx} className="metric-badge">
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Architecture Details Toggle */}
                  <div className="project-expand-section">
                    <button
                      type="button"
                      className="expand-toggle-btn"
                      onClick={() => toggleExpand(project.id)}
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? "Hide Architecture Highlights" : "View Architecture Highlights"}</span>
                      {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                    </button>

                    {isExpanded && (
                      <motion.div
                        className="architecture-drawer"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <h4 className="drawer-title">Key Technical Implementations:</h4>
                        <ul className="drawer-list">
                          {project.architectureHighlights.map((hl, hIdx) => (
                            <li key={hIdx} className="drawer-item">
                              <CheckCircle2 size={14} className="drawer-check" />
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="project-tech-chips">
                    {project.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-chip">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Card Footer Link */}
                  <div className="project-card-footer">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link-btn"
                    >
                      <GithubIcon width={16} height={16} />
                      <span>Inspect Repository</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
