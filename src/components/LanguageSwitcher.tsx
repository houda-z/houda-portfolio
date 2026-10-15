import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { Language } from '../data/translations';

interface LanguageOption {
  code: Language;
  label: string;
  fullName: string;
  ariaLabel: string;
}

const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: 'en', label: 'EN', fullName: 'English', ariaLabel: 'Switch language to English' },
  { code: 'fr', label: 'FR', fullName: 'Français', ariaLabel: 'Changer la langue pour le Français' },
  { code: 'ar', label: 'AR', fullName: 'العربية', ariaLabel: 'التبديل إلى اللغة العربية' },
];

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`lang-switcher-pill-group ${className}`}
      role="group"
      aria-label="Language selection"
    >
      {LANGUAGE_OPTIONS.map((opt) => {
        const isActive = language === opt.code;
        return (
          <button
            key={opt.code}
            type="button"
            onClick={() => setLanguage(opt.code)}
            className={`lang-switcher-btn ${isActive ? 'active' : ''}`}
            aria-pressed={isActive}
            aria-label={opt.ariaLabel}
            title={opt.fullName}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
