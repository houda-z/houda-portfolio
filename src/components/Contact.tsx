import React from 'react';
import { portfolioData } from '../data/portfolio';

export const Contact: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section id="contact" className="portfolio-section contact-section" aria-label="Contact Section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center mx-auto" style={{ maxWidth: '680px' }}>
          <h2 className="section-title">Let's Connect &amp; Collaborate</h2>
          <p className="section-subtitle mx-auto">
            Whether you have an internship opportunity, a junior developer role, or a project in mind, my inbox is always open.
          </p>
        </div>

        {/* Single Centered Contact Information Card */}
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="contact-card-info">
              <h3 className="h4 fw-bold text-dark mb-4 text-center">Contact Information</h3>

              {/* Email */}
              <a href={`mailto:${personal.email}`} className="contact-method-item">
                <div className="contact-icon-bubble" aria-hidden="true">
                  <i className="bi bi-envelope-at"></i>
                </div>
                <div>
                  <div className="contact-method-label">Direct Email</div>
                  <div className="contact-method-value">{personal.email}</div>
                </div>
              </a>

              {/* Location */}
              <div className="contact-method-item">
                <div className="contact-icon-bubble" aria-hidden="true">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div>
                  <div className="contact-method-label">Location</div>
                  <div className="contact-method-value">{personal.location}</div>
                </div>
              </div>

              {/* Profiles & Links: GitHub & LinkedIn */}
              <div className="d-flex flex-wrap justify-content-center gap-3 pt-4 border-top mt-4">
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark rounded-pill px-4 py-2 d-inline-flex align-items-center gap-2 fw-semibold"
                >
                  <i className="bi bi-github"></i>
                  <span>GitHub</span>
                </a>
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
      </div>
    </section>
  );
};

export default Contact;
