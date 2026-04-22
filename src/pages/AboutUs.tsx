import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import aboutImg from '../assets/about.jpg';
import companyImg from '../assets/company.png';
import vacumBg from '../assets/vacum.png';
import logo from '../assets/logo.png';

const AboutUsPage: React.FC = () => {
  const [showCaps, setShowCaps] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="about-us-container" style={{ backgroundColor: '#fff' }}>
      {/* Hero Section */}
      <section className="products-top" style={{ marginBottom: '15px' }}>
        <div className="container">
          <div className="premium-badge" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: '#fff', margin: '0 0 15px' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            Who we are
          </div>
          <h1 className="products-title">About Enlark Enterprises Private Limited</h1>
          <p className="products-subtitle">Durable and efficient vacuum pumps of high quality and prompt service support.</p>
        </div>
      </section>

      {/* Our Vision Section - Small Rectangular Card */}
      <section className="vision-section" style={{ padding: '40px 0', backgroundColor: '#fff' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="vision-card-premium responsive-vision-card" style={{ 
            width: '100%',
            maxWidth: '900px',
            backgroundColor: '#F7FBFF',
            borderRadius: '24px',
            padding: '60px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textAlign: 'left',
            border: '1px solid rgba(8, 154, 211, 0.1)'
          }}>
            {/* Geometric Shapes Background - Grey & Charcoal */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none', opacity: 1 }}>
              <svg width="100%" height="100%" viewBox="0 0 900 300" preserveAspectRatio="none">
                <circle cx="50" cy="50" r="40" fill="#36454F" fillOpacity="0.1" />
                <rect x="800" y="200" width="80" height="80" fill="#808080" fillOpacity="0.1" transform="rotate(25 840 240)" />
                <path d="M400,20 L440,80 L360,80 Z" fill="#36454F" fillOpacity="0.08" />
                <circle cx="150" cy="250" r="20" fill="#808080" fillOpacity="0.1" />
                <rect x="0" y="40" width="900" height="1" fill="#36454F" fillOpacity="0.05" />
                <circle cx="850" cy="50" r="60" fill="#36454F" fillOpacity="0.06" />
                <rect x="100" y="150" width="30" height="30" fill="#808080" fillOpacity="0.1" transform="rotate(45 115 165)" />
                <path d="M700 100 L750 150 L650 150 Z" fill="#36454F" fillOpacity="0.08" transform="rotate(-15 700 120)" />
              </svg>
            </div>
            
            <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px' }}>
              <div className="premium-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                Core purpose
              </div>
              <h2 style={{ 
                fontSize: '32px', 
                color: '#011A2F', 
                marginBottom: '20px', 
                fontWeight: '700',
                letterSpacing: '-0.02em'
              }}>Our vision</h2>
              <p style={{ 
                fontSize: '18px', 
                lineHeight: '1.8', 
                color: '#444',
                fontWeight: '400'
              }}>
                Our vision is to be a trusted product manufacturer of global repute with one stop solution for all vacuum requirements, known for quality and reliability of all that we deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section - Offset Background Block Layout (Reference: Image 1) */}
      <section className="mission-section-premium" style={{ 
        padding: '60px 0', 
        backgroundColor: '#fff', 
        position: 'relative', 
        overflow: 'hidden' 
      }}>
        {/* Offset Background Block */}
        <div style={{ 
          position: 'absolute', 
          top: '10%', 
          bottom: '10%', 
          right: '0', 
          width: '42%', 
          backgroundColor: '#F5F7FA', 
          zIndex: 0,
          borderRadius: '20px 0 0 20px'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="flex-stack-mobile" style={{ display: 'flex', alignItems: 'center', gap: '80px', flexWrap: 'wrap' }}>
            
            {/* Left Content Column */}
            <div className="mission-content-col" style={{ flex: '1.2' }}>
              <div className="premium-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                Commitment to excellence
              </div>
              
              <h2 className="responsive-mission-title" style={{ 
                fontSize: '46px', 
                lineHeight: '1.2', 
                color: '#011A2F', 
                fontWeight: '800',
                marginBottom: '30px'
              }}>Our mission is to create world class vacuum solutions.</h2>
              
              <div style={{ marginBottom: '40px' }}>
                <ul style={{ listStyle: 'none', padding: 0 }} className="responsive-mission-list">
                  {[
                    { text: 'Define success based on the ', bold: '"VALUE and IMPACT"', rest: ' each of our product delivers at customer place.' },
                    { text: 'Deliver and nurture the ', bold: 'BEST QUALITY', rest: ' in products, services, processes, workforce as well as resources.' },
                    { text: 'Nurture Innovative and Free Thought Flow at work for continuous improvement.', bold: '', rest: '' }
                  ].map((item, index) => (
                    <li key={index} className="mission-list-item" style={{ 
                      display: 'flex', 
                      gap: '15px', 
                      margin: '18px 0',
                      lineHeight: '1.6'
                    }}>
                      <div className="mission-icon" style={{ 
                        flexShrink: 0, 
                        width: '24px', 
                        height: '24px', 
                        backgroundColor: '#E0F2FE', 
                        borderRadius: '50%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        marginTop: '3px'
                      }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#089AD3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      <span className="mission-item-text">
                        {item.text}
                        {item.bold && <strong>{item.bold}</strong>}
                        {item.rest}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button onClick={() => navigate('/products')} style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '10px', 
                color: '#fff', 
                fontWeight: '700', 
                fontSize: '16px',
                border: 'none',
                padding: '12px 25px',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }} className="mission-cta">
                Learn more
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            </div>

            {/* Right Image Column with Offset Overlap */}
            <div style={{ flex: '1', minWidth: '240px', display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: '550px' }}>
                <div style={{ 
                  borderRadius: '12px', 
                  overflow: 'hidden', 
                  boxShadow: '0 30px 60px rgba(0,0,0,0.12)',
                  position: 'relative',
                  zIndex: 2,
                }} className="mission-image-wrap">
                  <img src={aboutImg} alt="Enlark Enterprises Private Limited Mission" style={{ width: '100%', display: 'block' }} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* Company Profile Section - Shape the World (Reference: Image 2) */}
      <section className="shape-future-section">
        <div className="shape-future-teal-bg" />
        <div className="container shape-future-container">
          <div className="shape-future-wrapper">
            
            {/* Left Image Column */}
            <div className="shape-future-image-box">
              <img src={companyImg} alt="Shape the Vacuum World" />
            </div>

            {/* Right Content Column */}
            <div className="shape-future-content-box">
              <h2 style={{ color: '#089AD3' }}>Shape the vacuum world of the future</h2>
              
              <div className="shape-future-text">
                <p>
                  Enlark Enterprises Private Limited designs and manufactures a broad range of vacuum pumps, and vacuum systems that cater to varied industries worldwide ranging from pharmaceuticals, chemical processing, jewellery making, food processing, packaging solutions, automotive, general engineering, dairy farming, paint manufacturing, distillation, defense applications, lab equipment and many others. 
                </p>
                <p>
                  With a strong foundation committed to scientific design, precise measurements and global standards, we focus on product quality and precisely meeting the customer needs. 
                </p>
              </div>

              <button 
                onClick={() => setShowCaps(true)}
                className="see-story-btn"
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 30px', 
                  fontWeight: '700', 
                  fontSize: '14px',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  border: 'none',
                  marginTop: '15px'
                }}
              >
                Product Range
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            </div>

          </div>
        </div>
      </section>
        {/* Glassmorphism Overlay Toggle */}
        {showCaps && (
          <div className="product-range-overlay" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            animation: 'fadeIn 0.3s ease-out'
          }}>
            <div className="product-range-modal" style={{
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              padding: '50px',
              borderRadius: '24px',
              maxWidth: '800px',
              width: '100%',
              boxShadow: '0 25px 50px rgba(0,0,0,0.1)',
              border: '1px solid rgba(255,255,255,0.3)',
              position: 'relative'
            }}>
              <button 
                className="no-theme-btn"
                onClick={() => setShowCaps(false)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '25px',
                  background: 'none',
                  border: 'none',
                  fontSize: '32px',
                  cursor: 'pointer',
                  color: '#444'
                }}
              >
                &times;
              </button>
              <h3 style={{ fontSize: '24px', color: '#011A2F', marginBottom: '30px', fontWeight: '800', textAlign: 'left' }}>Technological capabilities</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Rotary Vane, Water Ring, Diaphragm, and Piston Pumps.',
                  '50LPM (3m3 /Min) to 20000 LPM (1200m3 /Min).',
                  'Direct Drive and Belt Drive Pumps.',
                  'Single Stage and Double Stage Pumps',
                  'Oil Immersed, Oil Lubricated and Oil Free Pumps.',
                  'Multi Brand Pump Service and Maintenance.',
                  'Vacuum Based Systems for custom vacuum solutions including Roots Blower, Chamber and other accessories.'
                ].map((item, i) => (
                  <li key={i} style={{ 
                    fontSize: '16px', 
                    color: '#333', 
                    marginBottom: '15px', 
                    display: 'flex', 
                    gap: '15px',
                    lineHeight: '1.5',
                    fontFamily: "'Montserrat', sans-serif"
                  }}>
                    <span style={{ color: '#089AD3' }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

      {/* Final Quote/Service Section - Refined Layout (Reference: Image 2) */}
      <section style={{ 
        padding: '60px 0'
      }}>
        <div className="container" style={{ 
          display: 'flex', 
          alignItems: 'stretch', 
          overflow: 'hidden', 
          minHeight: '320px',
          padding: '0',
          maxWidth: '1200px',
          backgroundImage: `url(${vacumBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '16px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        }}>
          {/* Text Overlay - Background removed as requested */}
          <div className="quote-teal-col" style={{ 
            flex: '2.5', 
            padding: '60px 80px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center',
            alignItems: 'flex-start',
            color: '#fff'
          }}>
            <h3 style={{ 
              fontSize: '25px', 
              fontFamily: "'Poppins', sans-serif",
              marginBottom: '50px', 
              maxWidth: '1000px',
              textAlign: 'left',
              lineHeight: '1.4',
              fontWeight: '700',
              color: '#011A2F' /* Darker color for readability on image */
            }}>
              We focus on product quality and precisely meeting the customer needs through scientific design and global standards.
            </h3>

            <button 
              onClick={() => navigate('/contact')}
              className="final-quote-text" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center',
                gap: '10px',
                backgroundColor: '#089AD3',
                border: 'none', 
                padding: '14px 40px', 
                fontWeight: '700', 
                textDecoration: 'none',
                fontSize: '15px',
                transition: 'all 0.3s ease',
                color: '#fff',
                borderRadius: '6px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                cursor: 'pointer'
              }}
            >
              Contact Us
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>

          <div className="quote-image-col" style={{ 
            flex: '1', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '40px'
          }}>
            <img src={logo} alt="Enlark Logo" style={{ maxWidth: '220px', height: 'auto', opacity: 0.9 }} />
          </div>
        </div>
      </section>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        @media (max-width: 768px) {
          .product-range-overlay {
            padding: 10px !important;
          }
          .product-range-modal {
            padding: 35px 20px !important;
            max-height: 85vh;
            overflow-y: auto;
            border-radius: 16px !important;
          }
          .product-range-modal h3 {
            font-size: 20px !important;
            margin-bottom: 20px !important;
          }
          .product-range-modal li {
            font-size: 14px !important;
            gap: 10px !important;
            margin-bottom: 12px !important;
          }
          .product-range-modal .no-theme-btn {
            top: 15px !important;
            right: 15px !important;
            font-size: 28px !important;
          }
        }
      `}} />
    </div>
  );
};

export default AboutUsPage;

