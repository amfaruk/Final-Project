"use client";

import { translations } from '../translations';
import { useLanguage } from '../context/LanguageContext';

export default function ManagerDashboard() {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.en;
  return (
    <section style={{ padding: '2rem 1rem', maxWidth: 1100, margin: '0 auto' }}>
      <h1 style={{ fontSize: 28, fontWeight: 800 }}>{t.managerDashboard}</h1>
      <p style={{ marginTop: 8, color: '#475569' }}>{t.managerGreeting}</p>
      <div style={{ marginTop: 20 }}>
        <div style={{ padding: 16, borderRadius: 12, background: '#fff', border: '1px solid #e6e6e6' }}>{t.receivedInfo}</div>
      </div>
    </section>
  );
}