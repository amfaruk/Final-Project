"use client";

import Link from 'next/link';
import { translations } from '../translations';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang] || translations.en;

  return (
    <nav style={{ padding: '0.75rem 1rem', borderBottom: '1px solid rgba(0,0,0,0.06)', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', cursor: 'pointer' }}>
          <Link href="/"> <img src="/logo.png" alt="logo" style={{ width: 40, height: 24 }} /> </Link>
          <div>
            <div style={{ fontWeight: 700 }}>{t.brand}</div>
            <div style={{ fontSize: 11, opacity: 0.8 }}>{t.subtitle}</div>
          </div>
        </div>

        <ul style={{ display: 'flex', gap: 18, listStyle: 'none', alignItems: 'center', margin: 0, padding: 0 }}>
          <li><Link href="/">{t.home}</Link></li>
          <li><Link href="/about">{t.about}</Link></li>
          <li><Link href="/learnMore">{t.learnMore}</Link></li>
          <li><Link href="/login">{t.login}</Link></li>
        </ul>

        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: 6, background: '#f3f4f6', padding: 4, borderRadius: 999 }}>
            <button onClick={() => setLang('en')} style={{ padding: '6px 8px', borderRadius: 8, background: lang === 'en' ? '#fff' : 'transparent' }}>EN</button>
            <button onClick={() => setLang('am')} style={{ padding: '6px 8px', borderRadius: 8, background: lang === 'am' ? '#fff' : 'transparent' }}>AM</button>
            <button onClick={() => setLang('om')} style={{ padding: '6px 8px', borderRadius: 8, background: lang === 'om' ? '#fff' : 'transparent' }}>OM</button>
          </div>
        </div>
      </div>
    </nav>
  );
}