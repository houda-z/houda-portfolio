import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Pinwheel from './common/Pinwheel';

export const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const { portfolioData, t } = useLanguage();
  const { personal, heroPills } = portfolioData;

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-wrapper" aria-label="Hero Introduction">
      {/* Top Corner Geometric Pinwheels from Design Reference */}
      <div className="hero-deco-top-left" aria-hidden="true">
        <Pinwheel size={68} color="#1B263B" />
      </div>
      <div className="hero-deco-top-right" aria-hidden="true">
        <Pinwheel size={68} color="#1B263B" />
      </div>

      <div className="container position-relative">


        {/* Giant PORTFOLIO Title Container with Script Overlay */}
        <div className="hero-typography-container">
          <span className="hero-script-overlay">
            {t.hero.scriptOverlay}
          </span>

          <h1 className="hero-giant-title">
            <span className="hero-word-solid">PORT</span>
            <span className="hero-word-outline">FOLIO</span>
          </h1>

          {/* Central Portrait Showcase */}
          <div className="hero-portrait-stage">
            <div className="hero-portrait-frame">
              {!imageError ? (
                <img
                  src={personal.profileImage}
                  alt={t.hero.portraitAlt}
                  className="hero-portrait-img"
                  onError={() => setImageError(true)}
                  loading="eager"
                />
              ) : (
                <div
                  className="d-flex flex-column align-items-center justify-content-center p-5 text-center"
                  style={{ minHeight: '360px', backgroundColor: '#EFE9DE' }}
                >
                  <i className="bi bi-person-circle display-1 text-primary mb-2"></i>
                  <span className="fw-bold fs-5 text-dark">{personal.name}</span>
                  <span className="text-muted small">{personal.role}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Short Professional Narrative */}
        <div className="row justify-content-center mt-3">
          <div className="col-lg-8 text-center">
            <p className="lead text-secondary mb-4 mx-auto" style={{ maxWidth: '640px' }}>
              {personal.heroBio}
            </p>

            {/* Main Action CTAs */}
            <div className="hero-action-row">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="btn-navy"
              >
                <span>{t.hero.viewProjects}</span>
                <i className="bi bi-arrow-down-right btn-icon" aria-hidden="true"></i>
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="btn-navy-outline"
              >
                <i className="bi bi-chat-dots me-1" aria-hidden="true"></i>
                <span>{t.hero.contactMe}</span>
              </a>
            </div>

            {/* Core Tech Stack Badges */}
            <div className="hero-pills-container" aria-label="Core Technologies">
              {heroPills.map((tech, index) => (
                <span key={index} className="hero-tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Metadata Info Strips matching Reference Image 1 */}
        <div className="hero-info-strip">
          <div>
            <div className="hero-person-name">{personal.name}</div>
            <div className="hero-person-role">{personal.role}</div>
          </div>

          <div className="hero-contact-info">
            <div>
              <a href={`mailto:${personal.email}`} className="hero-contact-link">
                <i className="bi bi-envelope me-1"></i>
                {personal.email}
              </a>
            </div>
            <div>
              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary rounded-pill px-4 py-2 d-inline-flex align-items-center gap-2 fw-semibold"
              >
                <i className="bi bi-linkedin"></i>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
