/* oxlint-disable react/only-export-components */
import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  translations,
  type Language,
  type UiTranslations,
} from '../data/translations';
import type { PortfolioData } from '../data/portfolio';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: UiTranslations;
  portfolioData: PortfolioData;
  isRTL: boolean;
}

const STORAGE_KEY = 'portfolio_language';
const SUPPORTED_LANGUAGES: Language[] = ['en', 'fr', 'ar'];

const getInitialLanguage = (): Language => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED_LANGUAGES.includes(saved as Language)) {
      return saved as Language;
    }
  } catch {
    // Gracefully handle storage errors (e.g. private browsing mode)
  }
  return 'en';
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (newLang: Language) => {
    if (!SUPPORTED_LANGUAGES.includes(newLang)) return;
    setLanguageState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {
      // Storage unavailable or quota exceeded
    }
  };

  useEffect(() => {
    const isRtl = language === 'ar';
    document.documentElement.lang = language;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';

    // Synchronize page title & meta description
    const currentPack = translations[language];
    document.title = currentPack.ui.meta.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', currentPack.ui.meta.description);
    }
  }, [language]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language].ui,
    portfolioData: translations[language].portfolioData,
    isRTL: language === 'ar',
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
