"use client";

import { useState } from 'react';
import { translations } from '../translations';
import { useLanguage } from '../context/LanguageContext';

export default function SectorDashboard() {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.en;
  const [showForm, setShowForm] = useState(false);

  return (
    <section style={{ padding: '2rem 1rem', maxWidth: 980, margin: '0 auto' }}>

      {!showForm ? (
        <div style={{ textAlign: 'center', padding: 40, background: '#fff', borderRadius: 20 }}>
          <h2 style={{ fontSize: 26, fontWeight: 800 }}>{t.sectorPortal}</h2>
          <p style={{ marginTop: 8, color: '#475569' }}>{t.sectorGreeting}</p>
          <button
            onClick={() => setShowForm(true)}
            style={{ marginTop: 16, padding: '10px 18px', background: '#059669', color: '#fff', borderRadius: 10 }}
          >
            {t.enterInfo}
          </button>
        </div>
      ) : (
        <div style={{ background: '#fff', padding: 24, borderRadius: 16 }}>
          <h3 style={{ fontSize: 22, fontWeight: 700 }}>{t.enterInfo}</h3>

          <label style={{ display: 'block', marginTop: 12 }}>
            {t.sectorName}
            <input type="text" style={{ display: 'block', width: '100%', marginTop: 4, padding: 6 }} />
          </label>

          <label style={{ display: 'block', marginTop: 12 }}>
            {t.govDoc}
            <input type="file" style={{ display: 'block', marginTop: 4 }} />
          </label>

          <label style={{ display: 'block', marginTop: 12 }}>
            {t.longitudeFile}
            <input type="file" style={{ display: 'block', marginTop: 4 }} />
          </label>

          <label style={{ display: 'block', marginTop: 12 }}>
            {t.latitudeFile}
            <input type="file" style={{ display: 'block', marginTop: 4 }} />
          </label>

          <button
            style={{ marginTop: 16, padding: '10px 18px', background: '#059669', color: '#fff', borderRadius: 10 }}
          >
            {t.submitInfo}
          </button>

          <button onClick={() => setShowForm(false)} style={{ marginTop: 12 }}>
            {t.back}
          </button>
        </div>
      )}

    </section>
  );
}