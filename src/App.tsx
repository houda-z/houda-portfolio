import React from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const PortfolioContent: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="app-container">
      {/* Accessibility Skip Link */}
      <a href="#main-content" className="skip-link">
        {t.skipLink}
      </a>

      {/* Main Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
};

export default App;
