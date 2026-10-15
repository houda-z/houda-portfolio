import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import DotGrid from './common/DotGrid';

export const About: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const { portfolioData, t } = useLanguage();
  const { personal } = portfolioData;

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="portfolio-section about-section" aria-label={`About ${personal.name}`}>
      {/* Decorative Dot Matrix Grids from Reference Image 2 */}
      <div className="about-dot-top-right d-none d-lg-block" aria-hidden="true">
        <DotGrid rows={4} cols={4} dotSize={8} gap={14} color="#1B263B" />
      </div>
      <div className="about-dot-bottom-left d-none d-lg-block" aria-hidden="true">
        <DotGrid rows={4} cols={12} dotSize={7} gap={14} color="#1B263B" />
      </div>

      <div className="container position-relative">
        <div className="row align-items-center g-5">
          {/* Left Column: Biography Content */}
          <div className="col-lg-7 about-text-content">
            <h2 className="about-main-title">{t.about.sectionTitle}</h2>

            <p className="about-lead-p">
              {personal.aboutParagraphs[0]}
            </p>

            <p className="about-secondary-p">
              {personal.aboutParagraphs[1]}
            </p>

            {/* Professional Foundation Highlights */}
            <div className="row g-3 mb-4">
              <div className="col-sm-4">
                <div className="about-card-stat">
                  <div className="about-stat-number">
                    <i className="bi bi-mortarboard text-primary me-1"></i>
                    {t.about.statDiplomaNum}
                  </div>
                  <div className="about-stat-label">{t.about.statDiplomaLabel}</div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="about-card-stat">
                  <div className="about-stat-number">
                    <i className="bi bi-layers text-primary me-1"></i>
                    {t.about.statFullStackNum}
                  </div>
                  <div className="about-stat-label">{t.about.statFullStackLabel}</div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="about-card-stat">
                  <div className="about-stat-number">
                    <i className="bi bi-code-slash text-primary me-1"></i>
                    {t.about.statCleanCodeNum}
                  </div>
                  <div className="about-stat-label">{t.about.statCleanCodeLabel}</div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="d-flex flex-wrap gap-3 pt-2">
              <a
                href="#contact"
                onClick={scrollToContact}
                className="btn-navy"
              >
                <span>{t.about.getInTouch}</span>
                <i className="bi bi-arrow-right btn-icon" aria-hidden="true"></i>
              </a>

              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-navy-outline"
              >
                <i className="bi bi-github me-1" aria-hidden="true"></i>
                <span>{t.about.exploreGithub}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Portrait Showcase */}
          <div className="col-lg-5 about-portrait-wrapper">
            <div className="about-portrait-card">
              {!imageError ? (
                <img
                  src={personal.profileImage}
                  alt={t.hero.portraitAlt}
                  className="about-portrait-img"
                  onError={() => setImageError(true)}
                  loading="lazy"
                />
              ) : (
                <div
                  className="d-flex flex-column align-items-center justify-content-center p-5 text-center"
                  style={{ minHeight: '380px', backgroundColor: '#EFE9DE' }}
                >
                  <i className="bi bi-person-bounding-box display-1 text-primary mb-3"></i>
                  <span className="fw-bold fs-4 text-dark">{personal.name}</span>
                  <span className="text-muted">{personal.role}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
