import React from 'react';
import { portfolioData } from '../data/portfolio';
import DotGrid from './common/DotGrid';

export const Skills: React.FC = () => {
  const { skillsOverview, skillCategories } = portfolioData;

  const visualThumbnails = [
    { label: 'React UI', icon: 'bi-filetype-jsx' },
    { label: 'TypeScript', icon: 'bi-filetype-tsx' },
    { label: 'Node.js', icon: 'bi-hdd-network' },
    { label: 'PHP & APIs', icon: 'bi-diagram-3' },
    { label: 'SQL DBs', icon: 'bi-database' },
    { label: 'Git Workflow', icon: 'bi-git' },
  ];

  return (
    <section id="skills" className="portfolio-section skills-section" aria-label="Technical Skills">
      {/* Decorative Top-Right Dot Matrix from Reference Image 3 */}
      <div className="skills-dot-top-right d-none d-lg-block" aria-hidden="true">
        <DotGrid rows={4} cols={4} dotSize={8} gap={14} color="#1B263B" />
      </div>

      <div className="container position-relative">
        {/* Section Heading */}
        <div className="section-header">
          <h2 className="skills-main-title">Skills</h2>
          <p className="section-subtitle">
            Core competencies across frontend development, backend logic, relational database systems, and modern collaborative tooling.
          </p>
        </div>

        {/* Numbered Pill Ribbon Banners from Reference Image 3 */}
        <div className="skills-pill-ribbon-wrapper mb-5" aria-label="Core Skill Highlights">
          {/* Row 1: 1, 2, 3 */}
          <div className="skills-pill-row">
            {skillsOverview.slice(0, 3).map((item) => (
              <div key={item.number} className={`skill-numbered-pill ${item.bgClass}`}>
                <span className="pill-huge-number">{item.number}</span>
                <span className="pill-title-text">{item.title}</span>
              </div>
            ))}
          </div>

          {/* Row 2: 4, 5, 6 */}
          <div className="skills-pill-row">
            {skillsOverview.slice(3, 6).map((item) => (
              <div key={item.number} className={`skill-numbered-pill ${item.bgClass}`}>
                <span className="pill-huge-number">{item.number}</span>
                <span className="pill-title-text">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Categorized Detailed Skill Breakdown */}
        <div className="row g-4">
          {skillCategories.map((category) => (
            <div key={category.id} className="col-lg-4 col-md-6">
              <div className="skill-category-card">
                <div className="skill-cat-header">
                  <div>
                    <h3 className="skill-cat-title">{category.title}</h3>
                    <small className="text-muted">{category.subtitle}</small>
                  </div>
                  <span className="skill-cat-badge">{category.numberBadge}</span>
                </div>

                <div className="skill-badges-grid">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="skill-badge-row">
                      <div className="skill-icon-wrap" aria-hidden="true">
                        <i className={`bi ${skill.iconClass}`}></i>
                      </div>
                      <div>
                        <div className="skill-detail-name">{skill.name}</div>
                        <p className="skill-detail-desc">{skill.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Row of Rounded Visual Cards Below Skills (Matching Reference Image 3 bottom row) */}
        <div className="skills-visual-row mt-5" aria-hidden="true">
          {visualThumbnails.map((thumb, index) => (
            <div key={index} className="skills-visual-thumb">
              <i className={`bi ${thumb.icon} thumb-icon`}></i>
              <p className="thumb-label">{thumb.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
