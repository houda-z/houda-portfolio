import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const { portfolioData, t } = useLanguage();
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <footer className="site-footer" aria-label="Site Footer">
      <div className="container">
        <div className="row g-5">
          {/* Column 1: Brand & Bio */}
          <div className="col-lg-5">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="footer-brand">
              <span className="footer-brand-badge">{personal.initials}</span>
              <span>{personal.name}</span>
            </a>
            <p className="footer-tagline">
              {personal.role} {t.footer.footerBio}
            </p>
            <div className="text-light small opacity-75">
              <i className="bi bi-geo-alt me-1"></i>
              {personal.location} • {personal.availability}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="col-lg-3 col-sm-6">
            <h4 className="footer-nav-title">{t.footer.quickLinks}</h4>
            <ul className="footer-nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer-nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect & Socials */}
          <div className="col-lg-4 col-sm-6">
            <h4 className="footer-nav-title">{t.footer.connectSocial}</h4>
            <p className="small text-light opacity-75 mb-3">
              {t.footer.socialTagline}
            </p>
            <div className="footer-social-row mb-4">
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="GitHub Profile"
              >
                <i className="bi bi-github"></i>
              </a>

              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="LinkedIn Profile"
              >
                <i className="bi bi-linkedin"></i>
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="footer-social-icon"
                aria-label="Send Email"
              >
                <i className="bi bi-envelope"></i>
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="btn-back-to-top"
              aria-label="Scroll back to top of the page"
            >
              <i className="bi bi-arrow-up"></i>
              <span>{t.footer.backToTop}</span>
            </button>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="footer-bottom-bar">
          <div>
            &copy; {CURRENT_YEAR} {personal.name}. {t.footer.copyright}
          </div>
          <div>
            <span>{t.footer.standardsTagline}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
