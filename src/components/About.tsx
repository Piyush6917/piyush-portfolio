import { motion } from "framer-motion";
import { Brain, Cloud, ShieldCheck, Award, CheckCircle2 } from "lucide-react";

export const About = () => {
  const pillars = [
    {
      icon: Brain,
      title: "Data-Centric Machine Learning",
      description:
        "Developing disciplined ML pipelines with Scikit-Learn, PyTorch, and Hugging Face. Focused on rigorous feature extraction, anomaly mitigation, and minimal inference latency."
    },
    {
      icon: Cloud,
      title: "Cloud & Microservice Infrastructure",
      description:
        "Architecting scalable AWS environments (EC2, ECS, S3, IAM, Lambda) with Docker containerization to deliver high-availability, low-downtime service deployments."
    },
    {
      icon: ShieldCheck,
      title: "Network Security & Packet Forensics",
      description:
        "Author of an accepted research paper on hybrid AI-driven intrusion detection frameworks. Deep experience in packet sniffing, protocol inspection, and attack prevention."
    },
    {
      icon: Award,
      title: "Peer-Reviewed Scholarly Research",
      description:
        "Published research contributions in the Journal of Network Security and Journal of Multimedia Technology, exploring empirical cyberdefense and decentralized trust architectures."
    }
  ];

  const highlights = [
    "Specialized B.Tech in CSE (Artificial Intelligence)",
    "Hands-on industry internship experience at PHPL",
    "Active participant in open-source & technical writing",
    "Certified by Oracle & IBM in cloud and data science"
  ];

  return (
    <section id="about" className="section-wrapper about-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <span className="pill-dot" /> ABOUT ME
          </div>
          <h2 className="section-title">
            Bridging algorithmic intelligence with <span>systems engineering.</span>
          </h2>
          <p className="section-lead">
            I don't just train models in isolation; I build end-to-end architectures that ingest live data,
            detect anomalies, and deploy reliably on modern cloud infrastructure.
          </p>
        </div>

        <div className="about-grid">
          {/* Narrative Column */}
          <motion.div
            className="about-narrative-card"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="narrative-heading">How I Approach Engineering</h3>
            <p className="narrative-body">
              My journey in Computer Science is driven by an obsession with how machine learning can solve
              high-stakes infrastructure challenges—specifically in network intrusion detection, automated document
              intelligence, and cloud resource management.
            </p>
            <p className="narrative-body">
              During my internship at <strong>Proto Hellenic Private Limited (PHPL)</strong>, I engineered automated Python
              pipelines and provisioned AWS services (EC2, S3, IAM) for enterprise workloads. This taught me that the
              real work in AI begins where the Jupyter Notebook ends: in deployment, security boundaries, and telemetry.
            </p>

            <div className="about-highlights-list">
              {highlights.map((item, index) => (
                <div key={index} className="highlight-row">
                  <CheckCircle2 size={16} className="highlight-check" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pillars Column */}
          <div className="about-pillars-grid">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={i}
                  className="pillar-card"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="pillar-icon-box">
                    <Icon size={20} />
                  </div>
                  <h4 className="pillar-title">{pillar.title}</h4>
                  <p className="pillar-description">{pillar.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
