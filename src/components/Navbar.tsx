import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolio';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'services', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`site-navbar ${isScrolled ? 'scrolled' : ''}`} aria-label="Main Navigation">
      <div className="container h-100 d-flex align-items-center justify-content-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="navbar-brand-logo"
          aria-label={`${portfolioData.personal.name} - Back to top`}
        >
          <span className="brand-badge">{portfolioData.personal.initials}</span>
          <span>{portfolioData.personal.name.split(' ')[0]}<span className="brand-dot">.</span></span>
        </a>

        {/* Desktop Nav Items */}
        <div className="d-none d-lg-flex align-items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`nav-link-custom ${activeSection === link.href.substring(1) ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="d-none d-lg-block">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="nav-cta-btn"
          >
            <span>Let's Talk</span>
            <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          className="mobile-nav-toggle d-lg-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <i className={`bi ${mobileMenuOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
        </button>
      </div>

      {/* Mobile Menu Collapse */}
      {mobileMenuOpen && (
        <div className="d-lg-none bg-white border-top py-3 px-4 shadow-lg animate__animated animate__fadeIn">
          <div className="d-flex flex-column gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`nav-link-custom ${activeSection === link.href.substring(1) ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-top mt-2">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="nav-cta-btn w-100 justify-content-center"
              >
                <span>Let's Talk</span>
                <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
