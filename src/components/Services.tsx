import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { ServiceItem } from '../data/portfolio';

export const Services: React.FC = () => {
  const { portfolioData, t } = useLanguage();
  const { services } = portfolioData;

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="portfolio-section services-section" aria-label="Services Offered">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center mx-auto" style={{ maxWidth: '720px' }}>
          <h2 className="section-title">{t.services.sectionTitle}</h2>
          <p className="section-subtitle mx-auto">
            {t.services.sectionSubtitle}
          </p>
        </div>

        {/* Services Grid: 4 Cards */}
        <div className="row g-4">
          {services.map((service: ServiceItem) => (
            <div key={service.id} className="col-lg-6">
              <div className="service-card">
                <div className="service-icon-box" aria-hidden="true">
                  <i className={`bi ${service.iconClass}`}></i>
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>

                <div className="pt-3 border-top mt-auto">
                  <h4 className="h6 fw-bold text-dark mb-2">{t.services.deliverablesHeading}</h4>
                  <ul className="service-deliverables">
                    {service.deliverables.map((item, index) => (
                      <li key={index} className="service-deliverable-item">
                        <i className="bi bi-check2-circle service-check"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="text-center mt-5">
          <a
            href="#contact"
            onClick={scrollToContact}
            className="btn-navy"
          >
            <span>{t.services.ctaBanner}</span>
            <i className="bi bi-chat-text btn-icon" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
