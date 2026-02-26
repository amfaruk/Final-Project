"use client";

import { translations } from '../translations';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.en;
  return (
    <footer style={{ padding: '1rem', backgroundColor: '#0b1220', color: 'white', textAlign: 'center' }}>
      <div style={{ maxWidth: 980, margin: '0 auto' }}>
        <div style={{ fontSize: 14, fontWeight: 600 }}>{t.copyright}</div>
      </div>
    </footer>
  );
}