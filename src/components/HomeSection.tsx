"use client";

import OfficialBanner from './OfficialBanner';
import { translations } from '../translations';
import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';
export default function HomeSection() {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.en;
  return (
    <section style={{ padding: '2rem 1rem', maxWidth: 1100, margin: '0 auto' }}>
      <OfficialBanner />
      <div style={{ textAlign: 'center', padding: '4rem 0' }}>
        <h1 style={{ fontSize: 36, fontWeight: 800 }}>{t.title}</h1>
        <p style={{ marginTop: 12, color: '#475569' }}>{t.subtitle}</p>
        <Link href="/dashboard">Go to Dashboard</Link>
      </div>
    </section>
  );
}