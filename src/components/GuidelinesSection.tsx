"use client";

import { translations } from '../translations';
import { useLanguage } from '../context/LanguageContext';

export default function GuidelinesSection({ onBack }: { onBack?: () => void }) {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.en;

  return (
    <section
      style={{
        padding: '4rem 2rem',
        maxWidth: 980,
        margin: '0 auto',
        lineHeight: 1.8,
        background: '#f9fafb',
        borderRadius: 16,
        boxShadow: '0 8px 20px rgba(0,0,0,0.05)',
      }}
    >
      {/* Back Button */}
      {onBack && (
        <button
          onClick={onBack}
          style={{
            marginBottom: 20,
            padding: '8px 16px',
            borderRadius: 8,
            background: '#2563eb',
            color: '#fff',
            fontWeight: 600,
            border: 'none',
            cursor: 'pointer',
            transition: 'background 0.3s',
          }}
          onMouseOver={(e) => ((e.currentTarget.style.background = '#1d4ed8'))}
          onMouseOut={(e) => ((e.currentTarget.style.background = '#2563eb'))}
        >
          {t.back}
        </button>
      )}

      {/* Section Title */}
      <h1
        style={{
          fontSize: 36,
          fontWeight: 900,
          marginBottom: 25,
          textAlign: 'center',
          color: '#1f2937',
        }}
      >
        {t.guidelineTitle}
      </h1>

      {/* How To Use */}
      <div style={{ marginBottom: 30 }}>
        <h2
          style={{
            fontSize: 26,
            fontWeight: 700,
            marginBottom: 10,
            color: '#10b981', // green accent
          }}
        >
          {t.howToUseTitle}
        </h2>
        <p
          style={{
            marginBottom: 20,
            fontSize: 17,
            color: '#d51a45',
          }}
        >
          {t.howToUseDesc}
        </p>

        <ol style={{ paddingLeft: 25, fontSize: 17, color: '#374151', marginBottom: 30 }}>
          <li style={{ marginBottom: 10 }}>✅ {t.step1}</li>
          <li style={{ marginBottom: 10 }}>✅ {t.step2}</li>
          <li style={{ marginBottom: 10 }}>✅ {t.step3}</li>
          <li style={{ marginBottom: 10 }}>✅ {t.step4}</li>
          <li style={{ marginBottom: 10 }}>✅ {t.step5}</li>
        </ol>
      </div>

      {/* History */}
      <div style={{ marginBottom: 25 }}>
        <h3
          style={{
            fontSize: 22,
            fontWeight: 700,
            marginBottom: 10,
            color: '#2563eb', // blue accent
          }}
        >
          {t.historyTitle}
        </h3>
        <p style={{ fontSize: 17, color: '#374151' }}>{t.historyDesc}</p>
      </div>

      {/* Problem */}
      <div style={{ marginBottom: 25 }}>
        <h3
          style={{
            fontSize: 22,
            fontWeight: 700,
            marginBottom: 10,
            color: '#f59e0b', // orange accent
          }}
        >
          {t.problemTitle}
        </h3>
        <p style={{ fontSize: 17, color: '#374151' }}>{t.problemDesc}</p>
      </div>

      {/* Solution */}
      <div>
        <h3
          style={{
            fontSize: 22,
            fontWeight: 700,
            marginBottom: 10,
            color: '#8b5cf6', // purple accent
          }}
        >
          {t.solutionTitle}
        </h3>
        <p style={{ fontSize: 17, color: '#374151' }}>{t.solutionDesc}</p>
      </div>
    </section>
  );
}