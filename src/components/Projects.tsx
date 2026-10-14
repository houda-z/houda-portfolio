import React, { useState } from 'react';
import { portfolioData, type ProjectItem } from '../data/portfolio';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'fullstack' | 'frontend' | 'ecommerce'>('all');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const { projects } = portfolioData;

  const handleImageError = (projectId: string) => {
    setImageErrors((prev) => ({ ...prev, [projectId]: true }));
  };

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="portfolio-section projects-section" aria-label="Featured Projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="d-flex flex-wrap align-items-end justify-content-between gap-3">
            <div>
              <h2 className="section-title">Featured Projects</h2>
              <p className="section-subtitle">
                A selection of full stack, frontend, and e-commerce applications built with React, TypeScript, and modern web architectures.
              </p>
            </div>

            {/* Category Filter Buttons */}
            <div className="project-filter-bar" role="tablist" aria-label="Filter projects by category">
              <button
                type="button"
                className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveFilter('all')}
              >
                All Projects ({projects.length})
              </button>
              <button
                type="button"
                className={`filter-btn ${activeFilter === 'fullstack' ? 'active' : ''}`}
                onClick={() => setActiveFilter('fullstack')}
              >
                Full Stack
              </button>
              <button
                type="button"
                className={`filter-btn ${activeFilter === 'ecommerce' ? 'active' : ''}`}
                onClick={() => setActiveFilter('ecommerce')}
              >
                E-Commerce
              </button>
            </div>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="row g-4">
          {filteredProjects.map((project: ProjectItem) => (
            <div key={project.id} className="col-lg-6">
              <article className="project-card">
                {/* Visual Media Header */}
                <div className="project-media-wrap">
                  <span className="project-category-badge">
                    {project.category}
                  </span>

                  {!imageErrors[project.id] ? (
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="project-img"
                      onError={() => handleImageError(project.id)}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-center p-4 text-center text-white" style={{ backgroundColor: '#182337' }}>
                      <i className="bi bi-window-sidebar display-4 mb-2 text-primary"></i>
                      <h4 className="text-white mb-1">{project.title}</h4>
                      <p className="text-muted small">{project.subtitle}</p>
                    </div>
                  )}
                </div>

                {/* Card Content Body */}
                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-subtitle">{project.subtitle}</div>
                  <p className="project-description">{project.description}</p>

                  {/* Highlights Bullet Points */}
                  <ul className="list-unstyled mb-3 small text-secondary">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="d-flex align-items-baseline gap-2 mb-1">
                        <i className="bi bi-check2 text-primary fw-bold"></i>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technology Badges */}
                  <div className="project-tech-tags" aria-label="Technologies used">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="project-tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="project-actions">

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-project-secondary"
                      title="Inspect project source code on GitHub (configurable placeholder)"
                    >
                      <i className="bi bi-github"></i>
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Projects;
