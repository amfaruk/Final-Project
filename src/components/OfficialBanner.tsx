"use client";

import { translations } from '../translations';
import { useLanguage } from '../context/LanguageContext';

export default function OfficialBanner() {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.en;
  return (
    <div style={{ padding: '0.5rem 0', textAlign: 'center', fontSize: 12, fontWeight: 600 }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg" alt="" style={{ width: 18, height: 12 }} />
        {t.officialWebsite}
      </span>
    </div>
  );
}