import React, { useState } from 'react';
import aboutImg from '../assets/about.jpg';
import companyImg from '../assets/company.png';
import lastImg from '../assets/aboutus_last.png';

const AboutUsPage: React.FC = () => {
  const [showCaps, setShowCaps] = useState(false);

  return (
    <div className="about-us-container" style={{ backgroundColor: '#fff' }}>
      {/* Hero Section */}
      <section className="about-hero" style={{ 
        position: 'relative', 
        height: '35vh', 
        minHeight: '350px',
        display: 'flex',
        alignItems: 'center',
        background: `linear-gradient(rgba(1, 26, 47, 0.7), rgba(1, 26, 47, 0.7)), url(${aboutImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        textAlign: 'center'
      }}>
        <div className="container">
          <div className="premium-badge" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: '#fff', margin: '0 auto 20px' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            Our Story
          </div>
          <h1 style={{ 
            fontSize: '48px', 
            fontWeight: '800', 
            marginBottom: '20px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            color: '#fff'
          }}>About Enlark</h1>
          <p className="hero-text-white" style={{ 
            fontSize: '22px', 
            maxWidth: '800px', 
            margin: '0 auto',
            lineHeight: '1.6',
            fontWeight: '400'
          }}>
            Durable and Efficient Vacuum Pumps of high quality and prompt service support.
          </p>
        </div>
      </section>

      {/* Our Vision Section - Small Rectangular Card */}
      <section className="vision-section" style={{ padding: '80px 0', backgroundColor: '#fff' }}>
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
            alignItems: 'center',
            textAlign: 'center',
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
                Core Purpose
              </div>
              <h2 style={{ 
                fontSize: '32px', 
                color: '#011A2F', 
                marginBottom: '20px', 
                fontWeight: '700',
                letterSpacing: '-0.02em'
              }}>Our Vision</h2>
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
        padding: '120px 0', 
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
                Commitment to Excellence
              </div>
              
              <h2 className="responsive-mission-title" style={{ 
                fontSize: '46px', 
                lineHeight: '1.2', 
                color: '#011A2F', 
                fontWeight: '800',
                marginBottom: '30px'
              }}>Our mission is to create world class Vacuum solutions.</h2>
              
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

              <a href="/products" style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '10px', 
                color: '#089AD3', 
                fontWeight: '700', 
                fontSize: '16px',
                border: '2px solid #089AD3',
                padding: '12px 25px',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }} className="mission-cta">
                Learn more
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
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
                  <img src={aboutImg} alt="Enlark Mission" style={{ width: '100%', display: 'block' }} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* Company Profile Section - Centered & Compact (Refined Image 3) */}
      <section className="company-profile-premium" style={{ 
        padding: '100px 0', 
        backgroundColor: '#fff',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Teal Background Panel - Large as in Image 3 */}
        <div className="responsive-teal-panel" style={{ 
          position: 'absolute', 
          top: '0', 
          bottom: '10%', 
          right: '0', 
          width: '50%', 
          backgroundColor: '#00A7B5', 
          zIndex: 0 
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1000px' }}>
          <div className="flex-stack-mobile profile-flex-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '400px', gap: '40px' }}>
            
            {/* Left Image - Compact */}
            <div style={{ 
              flex: '1', 
              position: 'relative', 
              zIndex: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{ 
                width: '100%', 
                maxWidth: '420px',
                boxShadow: '0 30px 60px rgba(0,0,0,0.12)',
                borderRadius: '12px',
                overflow: 'hidden'
              }}>
                <img src={companyImg} alt="Enlark Company" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
            </div>

            {/* Right Card - Compact */}
            <div className="profile-text-col" style={{ 
              flex: '1', 
              position: 'relative', 
              zIndex: 3,
            }}>
              <div style={{ 
                backgroundColor: '#fff', 
                padding: '40px', 
                boxShadow: '0 25px 50px rgba(0,0,0,0.06)',
                borderRadius: '8px',
                maxWidth: '480px',
                border: '1px solid rgba(0,0,0,0.03)'
              }}>
                <h2 style={{ 
                  fontSize: '26px', 
                  color: '#011A2F', 
                  fontWeight: '800', 
                  lineHeight: '1.2',
                  marginBottom: '15px',
                  textTransform: 'uppercase'
                }}>Shape the Vacuum World of the Future</h2>
                
                <div style={{ fontSize: '15px', color: '#4B5563', lineHeight: '1.7', marginBottom: '25px' }}>
                  <p style={{ marginBottom: '15px' }}>
                    <strong>ENLARK</strong> designs and manufactures a broad range of Vacuum Pumps, and Vacuum Systems that cater to varied industries worldwide ranging from Pharmaceuticals, Chemical Processing, Jewellery Making, Food Processing, Packaging Solutions, Automotive, General Engineering, Dairy Farming, Paint Manufacturing, Distillation, Defense Applications, Lab Equipment and many others.
                  </p>
                  <p>
                    With a strong foundation committed to scientific design, precise measurements and global standards, we focus on product quality and precisely meeting the customer needs.
                  </p>
                </div>

                <button 
                  onClick={() => setShowCaps(true)}
                  style={{ 
                    display: 'inline-block', 
                    border: '1.5px solid #FF5722', 
                    color: '#FF5722', 
                    padding: '10px 25px', 
                    fontWeight: '600', 
                    fontSize: '13px',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    transition: 'all 0.3s ease',
                    backgroundColor: 'transparent',
                    cursor: 'pointer'
                  }}
                >
                  See our story &rarr;
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Glassmorphism Overlay Toggle */}
        {showCaps && (
          <div style={{
            position: 'absolute',
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
            <div style={{
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
              <h3 style={{ fontSize: '24px', color: '#011A2F', marginBottom: '30px', fontWeight: '800', textAlign: 'center' }}>Technological Capabilities</h3>
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
      </section>


      {/* Final Quote/Service Section - Refined Layout (Reference: Image 2) */}
      <section style={{ 
        padding: '80px 0', 
        backgroundColor: '#fff'
      }}>
        <div className="container" style={{ 
          display: 'flex', 
          alignItems: 'stretch', 
          overflow: 'hidden', 
          minHeight: '240px',
          padding: '0',
          maxWidth: '1200px'
        }}>
          {/* Left Teal Block - Lengthier Card */}
          <div className="quote-teal-col" style={{ 
            flex: '2', 
            backgroundColor: '#00A7B5', 
            padding: '40px 60px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center',
            alignItems: 'flex-start',
            color: '#fff'
          }}>
            <p className="final-quote-text" style={{ 
              marginBottom: '35px', 
              maxWidth: '800px',
              textAlign: 'left'
            }}>
              We focus on product quality and precisely meeting the customer needs through scientific design and global standards.
            </p>
            <a href="/contact" className="final-quote-text" style={{ 
              display: 'inline-block', 
              border: '1.5px solid #fff', 
              padding: '12px 35px', 
              fontWeight: '700', 
              textDecoration: 'none',
              fontSize: '13px',
              transition: 'all 0.3s ease'
            }}>
              Contact Us &rarr;
            </a>
          </div>

          <div className="quote-image-col" style={{ 
            flex: '1', 
            backgroundColor: '#fff',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center'
          }}>
            <img src={lastImg} alt="Enlark Excellence" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
        </div>
      </section>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
      `}} />
    </div>
  );
};

export default AboutUsPage;

