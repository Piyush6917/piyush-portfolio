import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, Sparkles, Terminal, Palette } from "lucide-react";

const THEMES = [
  { id: "emerald", label: "Emerald Mint", color: "#10b981" },
  { id: "amber", label: "Warm Amber", color: "#f59e0b" },
  { id: "slate", label: "Titanium Slate", color: "#e2e8f0" },
  { id: "violet", label: "Amethyst Violet", color: "#a855f7" }
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPaletteMenu, setShowPaletteMenu] = useState(false);
  const [activeTheme, setActiveTheme] = useState<string>(() => {
    return localStorage.getItem("piyush-theme") || "emerald";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", activeTheme);
    localStorage.setItem("piyush-theme", activeTheme);
  }, [activeTheme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Research", href: "#research" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="#" className="brand-logo" aria-label="Piyush Pandey Home">
          <div className="logo-badge">
            <Terminal size={16} />
          </div>
          <span className="brand-name">
            Piyush Pandey
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav" aria-label="Primary Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-item">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-cta-group">
          {/* Theme Switcher */}
          <div className="theme-switcher-wrapper">
            <button
              type="button"
              className="theme-switcher-btn"
              onClick={() => setShowPaletteMenu(!showPaletteMenu)}
              title="Change Color Theme"
              aria-label="Change Color Theme"
            >
              <Palette size={15} />
              <span
                className="theme-current-dot"
                style={{
                  backgroundColor: THEMES.find((t) => t.id === activeTheme)?.color || "#10b981"
                }}
              />
            </button>

            {showPaletteMenu && (
              <div className="theme-dropdown-menu">
                <span className="dropdown-title">Select Color Theme</span>
                {THEMES.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    className={`theme-option-btn ${activeTheme === t.id ? "active" : ""}`}
                    onClick={() => {
                      setActiveTheme(t.id);
                      setShowPaletteMenu(false);
                    }}
                  >
                    <span className="color-swatch" style={{ backgroundColor: t.color }} />
                    <span>{t.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="#contact" className="contact-btn">
            <span>Get in Touch</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-status-pill">
              <span className="live-dot" /> Open to Opportunities
            </div>

            {/* Mobile Theme Switcher */}
            <div className="mobile-theme-row">
              <span className="mobile-theme-label">Theme:</span>
              <div className="mobile-theme-options">
                {THEMES.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    className={`mobile-theme-circle ${activeTheme === t.id ? "active" : ""}`}
                    style={{ backgroundColor: t.color }}
                    onClick={() => setActiveTheme(t.id)}
                    title={t.label}
                  />
                ))}
              </div>
            </div>

            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="mobile-nav-item"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mobile-contact-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Let's Discuss Opportunities</span>
              <Sparkles size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
