"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

type Lang = 'en' | 'am' | 'om';

const STORAGE_KEY = 'eims_lang';

const LanguageContext = createContext<{ lang: Lang; setLang: (l: Lang) => void } | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    try {
      const saved = (globalThis as any).localStorage?.getItem(STORAGE_KEY) as Lang | null;
      if (saved === 'en' || saved === 'am' || saved === 'om') setLang(saved);
    } catch {}
  }, []);

  useEffect(() => {
    try { (globalThis as any).localStorage?.setItem(STORAGE_KEY, lang); } catch {}
  }, [lang]);

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
