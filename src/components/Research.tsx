import { useState } from "react";
import { motion } from "framer-motion";
import { RESEARCH_PAPERS } from "../data/portfolioData";
import type { ResearchPaper } from "../data/portfolioData";
import { BookOpen, Award, Check, Copy, FileText } from "lucide-react";

interface ResearchProps {
  onCopyNotice: (msg: string) => void;
}

export const Research = ({ onCopyNotice }: ResearchProps) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const getBibtex = (paper: ResearchPaper) => {
    return `@article{pandey2026${paper.id},
  title={${paper.title}},
  author={Pandey, Piyush and Collaborators},
  journal={${paper.journal}},
  year={${paper.year}},
  note={${paper.status}}
}`;
  };

  const handleCopyBibtex = (paper: ResearchPaper) => {
    const bib = getBibtex(paper);
    navigator.clipboard.writeText(bib);
    setCopiedId(paper.id);
    onCopyNotice(`Copied BibTeX citation for "${paper.journal}" to clipboard!`);
    setTimeout(() => setCopiedId(null), 2200);
  };

  return (
    <section id="research" className="section-wrapper research-section">
      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <div className="section-pill">
            <span className="pill-dot" /> RESEARCH & PUBLICATIONS
          </div>
          <h2 className="section-title">
            Scholarly inquiries in <span>AI & cybersecurity.</span>
          </h2>
          <p className="section-lead">
            Peer-reviewed research exploring hybrid deep learning intrusion defense mechanisms
            and decentralized AI paradigms.
          </p>
        </div>

        {/* Papers Grid */}
        <div className="research-grid">
          {RESEARCH_PAPERS.map((paper, idx) => (
            <motion.article
              key={paper.id}
              className="research-paper-card"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
            >
              <div className="paper-top-meta">
                <div className="journal-tag">
                  <BookOpen size={14} />
                  <span>{paper.journal}</span>
                </div>
                <span className="accepted-badge">
                  <Award size={12} /> {paper.status}
                </span>
              </div>

              <h3 className="paper-title">{paper.title}</h3>

              <div className="paper-authors-row">
                <span className="author-pill">Piyush Pandey</span>
                <span className="paper-role-pill">{paper.role}</span>
                <span className="paper-year-pill">Publication Year: {paper.year}</span>
              </div>

              <div className="paper-abstract-box">
                <div className="abstract-label">
                  <FileText size={13} />
                  <span>Abstract & Core Contributions</span>
                </div>
                <p className="abstract-text">{paper.abstract}</p>
              </div>

              {/* Research topics */}
              <div className="paper-topics-list">
                {paper.topics.map((topic, tIdx) => (
                  <span key={tIdx} className="topic-pill">
                    #{topic}
                  </span>
                ))}
              </div>

              {/* Footer actions */}
              <div className="paper-card-footer">
                <button
                  type="button"
                  className="citation-btn"
                  onClick={() => handleCopyBibtex(paper)}
                  title="Copy BibTeX Citation"
                  aria-label="Copy BibTeX Citation"
                >
                  {copiedId === paper.id ? (
                    <>
                      <Check size={14} className="text-emerald" />
                      <span>Citation Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy BibTeX Citation</span>
                    </>
                  )}
                </button>

                <div className="peer-reviewed-indicator">
                  <span className="verified-dot" />
                  <span>Peer Reviewed Journal</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
