import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Copy,
  Check,
  ArrowUpRight,
  Sparkles,
  MessageSquare
} from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./Icons";

interface ContactProps {
  onCopyNotice: (msg: string) => void;
}

export const Contact = ({ onCopyNotice }: ContactProps) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<string>("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // IST is UTC+5:30
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      };
      setCurrentTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    onCopyNotice(`Copied ${type} (${text}) to clipboard!`);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    // Launch mailto prefilled
    const mailtoSubject = encodeURIComponent(
      `[Portfolio Contact] ${formState.subject || "Collaboration Inquiry"} from ${formState.name}`
    );
    const mailtoBody = encodeURIComponent(
      `Hi Piyush Pandey,\n\nName: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}\n`
    );

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-wrapper contact-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <span className="pill-dot" /> GET IN TOUCH
          </div>
          <h2 className="section-title">
            Let's discuss <span>opportunities & engineering.</span>
          </h2>
          <p className="section-lead">
            Whether you’re looking for an AI/ML intern, cloud infrastructure collaborator,
            or discussing research in network security, my inbox is open.
          </p>
        </div>

        <div className="contact-layout-grid">
          {/* Left Card: Direct Contact Channels */}
          <motion.div
            className="contact-info-card"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="card-status-strip">
              <span className="live-dot" />
              <span>Available for Summer / Fall Internships & Roles</span>
            </div>

            <h3 className="contact-info-heading">Direct Channels</h3>
            <p className="contact-info-sub">
              Prefer direct outreach? Copy my details or connect directly via phone or email:
            </p>

            {/* Email Channel */}
            <div className="channel-box">
              <div className="channel-icon">
                <Mail size={18} />
              </div>
              <div className="channel-details">
                <span className="channel-label">Email Address</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="channel-value">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <button
                type="button"
                className="channel-action-btn"
                onClick={() => handleCopy(PERSONAL_INFO.email, "Email")}
                title="Copy Email"
                aria-label="Copy Email"
              >
                {copiedType === "Email" ? <Check size={15} className="text-emerald" /> : <Copy size={15} />}
              </button>
            </div>

            {/* Phone Channel */}
            <div className="channel-box">
              <div className="channel-icon">
                <Phone size={18} />
              </div>
              <div className="channel-details">
                <span className="channel-label">Phone / WhatsApp</span>
                <a href={`tel:${PERSONAL_INFO.phone}`} className="channel-value">
                  {PERSONAL_INFO.phone}
                </a>
              </div>
              <button
                type="button"
                className="channel-action-btn"
                onClick={() => handleCopy(PERSONAL_INFO.phone, "Phone")}
                title="Copy Phone"
                aria-label="Copy Phone"
              >
                {copiedType === "Phone" ? <Check size={15} className="text-emerald" /> : <Copy size={15} />}
              </button>
            </div>

            {/* Location & Time info */}
            <div className="location-time-box">
              <div className="meta-row">
                <MapPin size={15} />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="meta-row">
                <Clock size={15} />
                <span>
                  Local Time: <strong>{currentTime || "Loading..."}</strong> (IST, UTC+5:30)
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-links-row">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="social-btn"
              >
                <GithubIcon width={16} height={16} />
                <span>GitHub Profile</span>
                <ArrowUpRight size={13} />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-btn"
              >
                <LinkedinIcon width={16} height={16} />
                <span>LinkedIn</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </motion.div>

          {/* Right Card: Quick Message Composer */}
          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <div className="form-header">
              <MessageSquare size={18} className="form-icon" />
              <div>
                <h3 className="form-title">Send a Quick Message</h3>
                <p className="form-subtitle">Directly opens your preferred mail client</p>
              </div>
            </div>

            <form onSubmit={handleFormSubmit} className="message-form">
              <div className="form-row-dual">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Alex Smith"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="e.g. alex@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject / Purpose</label>
                <input
                  id="subject"
                  type="text"
                  placeholder="e.g. AI/ML Internship Opportunity / Collaboration"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Hi Piyush Pandey, I noticed your work in network security and cloud deployment..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                />
              </div>

              <button type="submit" className="form-submit-btn">
                <span>Dispatch Email</span>
                <Send size={15} />
              </button>

              {submitted && (
                <div className="form-success-alert">
                  <Sparkles size={16} />
                  <span>Your email client was opened with the pre-filled inquiry. Thank you!</span>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
