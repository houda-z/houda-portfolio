import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { ExperienceItem } from '../data/portfolio';

export const Experience: React.FC = () => {
  const { portfolioData, t } = useLanguage();
  const { experience, experienceSubtitle } = portfolioData;

  const getBadgeClass = (type: ExperienceItem['type']) => {
    switch (type) {
      case 'education':
        return 'badge-education';
      case 'internship':
        return 'badge-internship';
      case 'project':
        return 'badge-project';
      default:
        return 'badge-education';
    }
  };

  const getIcon = (type: ExperienceItem['type']) => {
    switch (type) {
      case 'education':
        return 'bi-mortarboard';
      case 'internship':
        return 'bi-briefcase';
      case 'project':
        return 'bi-kanban';
      default:
        return 'bi-circle';
    }
  };

  return (
    <section id="experience" className="portfolio-section experience-section" aria-label="Experience and Education Timeline">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">{t.experience.sectionTitle}</h2>
          <p className="section-subtitle">
            {experienceSubtitle || t.experience.sectionSubtitle}
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="timeline-container">
              {experience.map((item: ExperienceItem) => (
                <div key={item.id} className="timeline-item">
                  <div className="timeline-node" aria-hidden="true"></div>

                  <div className="timeline-card">
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                      <span className={`timeline-badge ${getBadgeClass(item.type)}`}>
                        <i className={`bi ${getIcon(item.type)} me-1`}></i>
                        {item.typeLabel}
                      </span>
                      <span className="badge bg-light text-dark border py-2 px-3 fw-semibold">
                        <i className="bi bi-calendar3 me-1 text-primary"></i>
                        {item.period}
                      </span>
                    </div>

                    <h3 className="timeline-role">{item.role}</h3>

                    <div className="timeline-meta">
                      <span>
                        <i className="bi bi-building me-1"></i>
                        {item.organization}
                      </span>
                      <span>•</span>
                      <span>
                        <i className="bi bi-geo-alt me-1"></i>
                        {item.location}
                      </span>
                    </div>

                    <p className="timeline-desc">{item.description}</p>

                    {item.highlights && item.highlights.length > 0 && (
                      <ul className="timeline-highlights-list">
                        {item.highlights.map((h, i) => {
                          const colonIndex = h.indexOf(':');
                          if (colonIndex > 0 && colonIndex < 35) {
                            const title = h.substring(0, colonIndex);
                            const desc = h.substring(colonIndex + 1);
                            return (
                              <li key={i}>
                                <strong className="text-dark">{title}:</strong>
                                {desc}
                              </li>
                            );
                          }
                          return <li key={i}>{h}</li>;
                        })}
                      </ul>
                    )}

                    <div className="d-flex flex-wrap gap-2 pt-2 border-top">
                      {item.technologies.map((tech, index) => (
                        <span key={index} className="badge bg-white text-dark border px-2 py-1 small">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
