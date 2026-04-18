import React from 'react';

const industries = [
  {
    name: 'Pharmaceuticals',
    icon: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#26A4DF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.5 20.5a7 7 0 1 1 9.9-9.9l-7.77 7.77a3.5 3.5 0 1 1-4.95-4.95l6.36-6.36" />
      </svg>
    ),
  },
  {
    name: 'Chemical Processing',
    icon: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#26A4DF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3v3a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" />
        <path d="M11 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        <path d="M15 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        <path d="M9 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        <path d="M21 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        <path d="M3 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </svg>
    ),
  },
  {
    name: 'Jewellery Making',
    icon: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#26A4DF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12l4 6-10 12L2 9z" />
        <path d="M11 3 8 9l3 12" />
        <path d="M13 3l3 6-3 12" />
        <path d="M2 9h20" />
      </svg>
    ),
  },
  {
    name: 'Food Processing',
    icon: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#26A4DF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
        <path d="M12 14v6" />
        <path d="M12 4v6" />
        <path d="M14 12h6" />
        <path d="M4 12h6" />
      </svg>
    ),
  },
  {
    name: 'Packaging Solutions',
    icon: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#26A4DF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </svg>
    ),
  },
  {
    name: 'Automotive',
    icon: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#26A4DF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" />
        <path d="M9 17h6" />
        <circle cx="17" cy="17" r="2" />
      </svg>
    ),
  },
  {
    name: 'General Engineering',
    icon: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#26A4DF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
        <path d="M12 14v6" />
        <path d="M12 4v6" />
        <path d="M14 12h6" />
        <path d="M4 12h6" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    name: 'Dairy Farming',
    icon: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#26A4DF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 18h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z" />
        <path d="M9 5v13" />
        <path d="M15 5v13" />
        <path d="M4 10h16" />
      </svg>
    ),
  },
  {
    name: 'Paint Manufacturing',
    icon: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#26A4DF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m21 11-8-8" />
        <path d="M21 15V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v11" />
        <path d="M21 15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      </svg>
    ),
  },
  {
    name: 'Distillation',
    icon: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#26A4DF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20" />
        <path d="M17 7a5 5 0 0 0-10 0v10a5 5 0 0 0 10 0V7Z" />
        <path d="M12 12h5" />
      </svg>
    ),
  },
  {
    name: 'Defense Applications',
    icon: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#26A4DF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      </svg>
    ),
  },
  {
    name: 'Lab Equipment',
    icon: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#26A4DF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
        <path d="M9 7h6" />
        <path d="M9 11h6" />
        <path d="M9 15h6" />
      </svg>
    ),
  },
];

export function IndustriesPage() {
  return (
    <div className="industries-page">
      <section className="industries-hero" style={{ padding: '80px 0', borderBottom: '1px solid #f0f0f0' }}>
        <div className="industries-hero-bg" />
        <div className="container industries-hero-inner">
          <div className="industries-hero-left">
            <h1 className="industries-hero-title" style={{ color: '#0CA9E2', fontWeight: 800 }}>Industries We Serve</h1>
            <p className="industries-hero-subtitle" style={{ color: '#ffffff', fontSize: '15px' }}>
              Vacuum pump solutions for diverse industrial applications with a focus on reliability, efficiency, and service support.
            </p>
          </div>
          <div className="industries-hero-right">
            {/* Breadcrumb removed as requested */}
          </div>
        </div>
      </section>

      <section className="industries-grid-section" style={{ padding: '80px 0', backgroundColor: '#fafafa' }}>
        <div className="container">
          <div className="industries-grid">
            {industries.map((ind, index) => (
              <div className="industry-card" key={index} style={{ backgroundColor: '#fff', borderRadius: '15px' }}>
                <div className="icon-circle">{ind.icon}</div>
                <p className="industry-name">
                  <span className="text-blue" style={{ textTransform: 'uppercase', fontWeight: '700', letterSpacing: '1px' }}>{ind.name}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

