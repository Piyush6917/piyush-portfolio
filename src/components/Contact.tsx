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
  MessageSquare,
  Loader2,
  ExternalLink
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
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "fallback">("idle");

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

  const getMailData = () => {
    const subj = encodeURIComponent(
      `[Portfolio Inquiry] ${formState.subject || "Collaboration"} from ${formState.name || "Visitor"}`
    );
    const body = encodeURIComponent(
      `Hi Piyush,\n\nName: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}\n`
    );
    const raw = `To: ${PERSONAL_INFO.email}\nSubject: [Portfolio Inquiry] ${formState.subject || "Collaboration"} from ${formState.name}\nFrom: ${formState.name} (${formState.email})\n\n${formState.message}`;
    return { subj, body, raw };
  };

  const handleOpenGmail = () => {
    if (!formState.name || !formState.email || !formState.message) {
      onCopyNotice("Please fill in your name, email, and message first!");
      return;
    }
    const { subj, body } = getMailData();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      PERSONAL_INFO.email
    )}&su=${subj}&body=${body}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
    onCopyNotice("Opened Gmail compose tab with your message!");
  };

  const handleOpenMailApp = () => {
    if (!formState.name || !formState.email || !formState.message) {
      onCopyNotice("Please fill in your name, email, and message first!");
      return;
    }
    const { subj, body } = getMailData();
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subj}&body=${body}`;
    onCopyNotice("Launching default mail client...");
  };

  const handleCopyDraft = () => {
    if (!formState.name || !formState.email || !formState.message) {
      onCopyNotice("Please fill in your name, email, and message first!");
      return;
    }
    const { raw } = getMailData();
    navigator.clipboard.writeText(raw);
    onCopyNotice("Copied full draft to clipboard! You can paste it into any email client.");
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus("sending");

    try {
      // Direct submission via formsubmit.co API
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          _subject: `[Portfolio Contact] ${formState.subject || "Inquiry"} from ${formState.name}`,
          message: formState.message,
          _template: "table"
        })
      });

      if (response.ok) {
        setStatus("success");
        onCopyNotice("Message sent directly to Piyush!");
        setFormState({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 8000);
      } else {
        throw new Error("Submission service error");
      }
    } catch {
      // In case client is offline or endpoint blocked, trigger smooth fallback
      setStatus("fallback");
    }
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
                <p className="form-subtitle">Direct delivery straight to my personal inbox</p>
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
                  placeholder="Hi Piyush, I noticed your work in network security and cloud deployment..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="form-submit-btn"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={16} className="button-spinner" />
                    <span>Sending Message Directly...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message Directly</span>
                    <Send size={15} />
                  </>
                )}
              </button>

              {/* Alternative Send Options */}
              <div className="form-alternative-actions">
                <span className="alt-label">Or send via your email client:</span>
                <div className="alt-buttons-group">
                  <button
                    type="button"
                    className="alt-action-pill"
                    onClick={handleOpenGmail}
                    title="Open in Gmail web in a new tab"
                  >
                    <span>Open in Gmail (Web)</span>
                    <ExternalLink size={12} />
                  </button>

                  <button
                    type="button"
                    className="alt-action-pill"
                    onClick={handleOpenMailApp}
                    title="Open in default desktop mail application"
                  >
                    <span>Desktop Mail App</span>
                    <Mail size={12} />
                  </button>

                  <button
                    type="button"
                    className="alt-action-pill"
                    onClick={handleCopyDraft}
                    title="Copy full pre-filled message text"
                  >
                    <span>Copy Draft</span>
                    <Copy size={12} />
                  </button>
                </div>
              </div>

              {status === "success" && (
                <div className="form-success-alert">
                  <Sparkles size={16} />
                  <span>
                    Message delivered successfully to <strong>{PERSONAL_INFO.email}</strong>!
                    Piyush has received it and will reply to you shortly.
                  </span>
                </div>
              )}

              {status === "fallback" && (
                <div className="form-fallback-alert">
                  <p className="fallback-text">
                    Direct web delivery encountered a network filter. Click below to send directly via Gmail or your mail app:
                  </p>
                  <div className="fallback-buttons">
                    <button
                      type="button"
                      className="fallback-btn primary"
                      onClick={handleOpenGmail}
                    >
                      <span>Send with Gmail Web</span>
                      <ExternalLink size={13} />
                    </button>
                    <button
                      type="button"
                      className="fallback-btn secondary"
                      onClick={handleCopyDraft}
                    >
                      <Copy size={13} />
                      <span>Copy Full Message</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
