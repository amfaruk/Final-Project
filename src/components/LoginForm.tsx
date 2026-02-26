"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { translations } from '../translations';
import { useLanguage } from '../context/LanguageContext';

type SectorAccount = { email: string; password: string };

export default function LoginForm() {
  const router = useRouter();
  const { lang } = useLanguage();
  const t = translations[lang] || translations.en;

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [savePass, setSavePass] = useState(false);
  const [activeTab, setActiveTab] = useState<'manager' | 'sector'>('manager');
  const [sectorMode, setSectorMode] = useState<'signin' | 'signup'>('signin');
  const [error, setError] = useState('');

  useEffect(() => {
    // Load saved password/email
    if (activeTab === 'manager') {
      const saved = localStorage.getItem('manager_pass');
      if (saved) setPassword(saved);
    } else {
      const savedEmail = localStorage.getItem('sector_email');
      const savedPass = localStorage.getItem('sector_pass');
      if (savedEmail) setEmail(savedEmail);
      if (savedPass) setPassword(savedPass);
    }
    setError('');
  }, [activeTab, sectorMode]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!password || (activeTab === 'sector' && sectorMode === 'signup' && !email)) {
      setError('Please fill all required fields');
      return;
    }

    if (activeTab === 'manager') {
      if (savePass) localStorage.setItem('manager_pass', password);
      router.push('/manager');
      return;
    }

    const accounts: SectorAccount[] = JSON.parse(localStorage.getItem('sector_accounts') || '[]');

    if (sectorMode === 'signup') {
      const exists = accounts.find(acc => acc.email === email);
      if (exists) {
        setError('Account with this email already exists');
        return;
      }
      const newAcc = { email, password };
      accounts.push(newAcc);
      localStorage.setItem('sector_accounts', JSON.stringify(accounts));

      if (savePass) {
        localStorage.setItem('sector_email', email);
        localStorage.setItem('sector_pass', password);
      }

      router.push('/sector');
    } else {
      const account = accounts.find(acc => acc.email === email && acc.password === password);
      if (!account) {
        setError('Invalid email or password');
        return;
      }

      if (savePass) {
        localStorage.setItem('sector_email', email);
        localStorage.setItem('sector_pass', password);
      }

      router.push('/sector');
    }
  };

  return (
    <div style={{ padding: '2rem 1rem', maxWidth: 520, margin: '2rem auto' }}>
      {/* Tabs */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <button
          onClick={() => setActiveTab('manager')}
          style={{
            flex: 1, padding: 12, fontWeight: 700,
            background: activeTab === 'manager' ? '#fff' : '#f3f4f6'
          }}
        >
          {t.managerLogin}
        </button>
        <button
          onClick={() => setActiveTab('sector')}
          style={{
            flex: 1, padding: 12, fontWeight: 700,
            background: activeTab === 'sector' ? '#fff' : '#f3f4f6'
          }}
        >
          {t.sectorLogin}
        </button>
      </div>

      {/* Sector Mode Toggle */}
      {activeTab === 'sector' && (
        <div style={{ marginBottom: 16, fontSize: 14 }}>
          {sectorMode === 'signin' ? (
            <p>
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => setSectorMode('signup')}
                style={{ color: '#059669', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer' }}
              >
                Sign Up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => setSectorMode('signin')}
                style={{ color: '#059669', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer' }}
              >
                Sign In
              </button>
            </p>
          )}
        </div>
      )}

      {/* Form */}
      <form
        onSubmit={handleLogin}
        style={{ marginTop: 16, background: '#fff', padding: 20, borderRadius: 12, border: '1px solid #e6e6e6' }}
      >
        {error && <p style={{ color: 'red', marginBottom: 12 }}>{error}</p>}

        {/* Email field */}
        {(activeTab === 'sector' || sectorMode === 'signup') && (
          <div style={{ marginBottom: 12 }}>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 700 }}>Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={{ width: '100%', padding: 12, borderRadius: 8, border: '1px solid #e6e6e6' }}
            />
          </div>
        )}

        {/* Password */}
        <div style={{ marginBottom: 12 }}>
          <label style={{ display: 'block', fontSize: 12, fontWeight: 700 }}>{t.password}</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t.enterPassword}
            style={{ width: '100%', padding: 12, borderRadius: 8, border: '1px solid #e6e6e6' }}
          />
        </div>

        {/* Save password */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 14 }}>
          <input
            id="savePass"
            type="checkbox"
            checked={savePass}
            onChange={(e) => setSavePass(e.target.checked)}
          />
          <label htmlFor="savePass">{t.savePassword}</label>
        </div>

        <button
          type="submit"
          style={{ width: '100%', padding: 12, background: '#059669', color: '#fff', borderRadius: 10, fontWeight: 700 }}
        >
          {activeTab === 'sector' && sectorMode === 'signup' ? 'Sign Up' : t.signIn}
        </button>
      </form>
    </div>
  );
}