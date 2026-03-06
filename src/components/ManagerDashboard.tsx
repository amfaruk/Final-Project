"use client";

import { translations } from '../translations';
import { useLanguage } from '../context/LanguageContext';
import { useEffect, useState } from 'react';

export default function ManagerDashboard() {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.en;

  const [subs, setSubs] = useState<Array<any>>([]);

  const load = async () => {
    const res = await fetch("/api/submissions");
    const data = await res.json();
    setSubs(data);
  };

  useEffect(() => {
    load();
  }, []);

  const approve = async (id: number) => {
    await fetch(`/api/submissions/${id}/approve`, { method: "POST" });
    load();
  };

  return (
    <section style={{ padding: '2rem 1rem', maxWidth: 1100, margin: '0 auto' }}>
      <h1 style={{ fontSize: 28, fontWeight: 800 }}>{t.managerDashboard}</h1>
      <p style={{ marginTop: 8, color: '#475569' }}>{t.managerGreeting}</p>
      <div style={{ marginTop: 20 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Sector</th>
              <th>Collision</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {subs.map((s: any) => (
              <tr key={s.id} style={{ borderTop: '1px solid #ccc' }}>
                <td>{s.id}</td>
                <td>{s.sector}</td>
                <td>{s.hasCollision ? 'Yes' : 'No'}</td>
                <td>{s.status}</td>
                <td>
                  {s.status === 'pending' && (
                    <button onClick={() => approve(s.id)}>Approve</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}