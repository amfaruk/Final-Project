"use client";

import { translations } from '../translations';
import { useLanguage } from '../context/LanguageContext';

export default function AboutSection() {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.en;

  return (
    <section
      style={{
        padding: '4rem 2rem',
        maxWidth: 900,
        margin: '0 auto',
        lineHeight: 1.8,
        background: '#f9fafb',
        borderRadius: 16,
        boxShadow: '0 8px 20px rgba(0,0,0,0.05)',
      }}
    >
      {/* Section Title */}
      <h1
        style={{
          fontSize: 36,
          fontWeight: 900,
          marginBottom: 20,
          color: '#1f2937',
          textAlign: 'center',
        }}
      >
        {t.about}
      </h1>

      {/* Intro Paragraph */}
      <p
        style={{
          marginBottom: 40,
          color: '#4b5563',
          fontSize: 18,
          textAlign: 'center',
        }}
      >
        {t.visionDesc}
      </p>

      {/* Vision */}
      <div style={{ marginBottom: 30 }}>
        <h2
          style={{
            fontSize: 26,
            fontWeight: 700,
            marginBottom: 10,
            color: '#2563eb', // blue accent
          }}
        >
          {t.visionTitle}
        </h2>
        <p style={{ marginBottom: 0, fontSize: 17, color: '#374151' }}>
          {t.visionDesc}
        </p>
      </div>

      {/* Mission */}
      <div style={{ marginBottom: 30 }}>
        <h2
          style={{
            fontSize: 26,
            fontWeight: 700,
            marginBottom: 10,
            color: '#10b981', // green accent
          }}
        >
          {t.missionTitle}
        </h2>
        <p style={{ marginBottom: 0, fontSize: 17, color: '#374151' }}>
          {t.missionDesc}
        </p>
      </div>

      {/* Objectives */}
      <div style={{ marginBottom: 30 }}>
        <h2
          style={{
            fontSize: 26,
            fontWeight: 700,
            marginBottom: 15,
            color: '#f59e0b', // orange accent
          }}
        >
          {t.objectivesTitle}
        </h2>
        <ul style={{ paddingLeft: 25, fontSize: 17, color: '#4b5563' }}>
          <li style={{ marginBottom: 10 }}>✅ {t.objective1}</li>
          <li style={{ marginBottom: 10 }}>✅ {t.objective2}</li>
          <li style={{ marginBottom: 10 }}>✅ {t.objective3}</li>
          <li style={{ marginBottom: 10 }}>✅ {t.objective4}</li>
        </ul>
      </div>

      {/* System Overview */}
      <div style={{ marginBottom: 0 }}>
        <h2
          style={{
            fontSize: 26,
            fontWeight: 700,
            marginBottom: 15,
            color: '#8b5cf6', // purple accent
          }}
        >
          {t.systemOverviewTitle}
        </h2>
        <p style={{ fontSize: 17, color: '#374151' }}>{t.systemOverviewDesc}</p>
      </div>
    </section>
  );
}