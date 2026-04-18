import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import hero1 from '../assets/01.Rotary Vane Pumps – Single Stage Oil Immersed Direct Drive/01.Rotary Vane Pumps – Single Stage Oil Immersed Direct Drive.jpg';
import hero2 from '../assets/07.Water Ring Pumps – Single Stage Direct Drive/01.Water Ring Pumps – Single Stage Direct Drive.jpg';
import hero3 from '../assets/05.Belt Drive Pumps – Oil Lubricated/04.Belt Drive Pumps – Oil Lubricated.jpg';
import badgeImg from '../assets/badge.png';
import vacumBg from '../assets/vacum.png';
import accessoryImg from '../assets/14.Milking Machine Accessories/02..Milking Machine Accessories.jpg';
import pharmImg from '../assets/pharmaceuticals.jpeg';
import chemImg from '../assets/chemical_processing.jpeg';
import jewelImg from '../assets/jewellery_making.jpeg';
import foodImg from '../assets/food_processing.jpeg';
import packImg from '../assets/packaging_solutions.jpeg';
import autoImg from '../assets/automotive.jpeg';
import engImg from '../assets/general_engineering.jpeg';
import dairyImg from '../assets/dairy_farming.jpeg';
import paintImg from '../assets/paint_manufacturing.jpeg';
import distImg from '../assets/distillation.jpeg';
import defImg from '../assets/defense_applications.jpeg';
import labImg from '../assets/lab_equipment.png';
import { products } from '../data/productsData';
import { COMPANY } from '../config/company';

function Hero() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slides = [hero1, hero2, hero3];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="hero">
      <div className="hero-carousel">
        <div className="carousel-images">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Vacuum Pump ${index + 1}`}
              className={`carousel-img ${index === currentSlide ? 'active' : ''}`}
            />
          ))}
        </div>

        <div className="container hero-overlay">{/* Text is baked into the carousel images for a professional look */}</div>

        <div className="carousel-dots">
          {slides.map((_, index) => (
            <span key={index} className={`dot ${index === currentSlide ? 'active' : ''}`} onClick={() => setCurrentSlide(index)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="about-section">
      <div className="container flex-between">
        <div className="about-left">
          <div className="badge-container">
            <img src={badgeImg} alt="2 Years Badge" className="badge-img" />
            <p className="badge-years">2024-2026</p>
            <p className="badge-text decoration">
              A 2-year history of
              <br />
              quality and reliability
            </p>
          </div>
        </div>
        <div className="about-right">
          <div className="premium-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            Our Legacy
          </div>
          <h2 className="section-title">Welcome to Enlark</h2>
          <div className="about-content">
            <p>
              Enlark, an ISO 9001: 2015 certified enterprise, is a name you can trust being pioneers in high precision Vacuum Technology with four decades of inherited legacy and technology of famous Bharath Vacuum Pumps brand. We deliver a diverse range of Vacuum Pumps, Vacuum Based Machinery and Vacuum Systems that cater to varied industries worldwide ranging from Pharmaceuticals, Chemical Processing, Jewellery Making, Food Processing, Packaging Solutions, Automotive, General Engineering, Dairy Farming, Paint Manufacturing, Distillation, Defense Applications, Lab Equipment and many others.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


function DetailedAboutSection() {
  return (
    <div className="about-detail-section responsive-about-detail" style={{ backgroundColor: '#fff', overflow: 'hidden', position: 'relative' }}>
      {/* LARGE Light Background Block - Extending from Right Margin */}
      <div className="about-detail-bg-block" style={{ 
        position: 'absolute', 
        top: '60px', 
        bottom: '60px', 
        right: '0', 
        width: '35%', 
        backgroundColor: '#F0F4F7', 
        zIndex: 0,
        borderRadius: '30px 0 0 30px'
      }} />

      <div className="container" style={{ padding: '80px 15px', position: 'relative', zIndex: 1 }}>
        <div className="flex-stack-mobile" style={{ display: 'flex', gap: '80px', alignItems: 'center', flexWrap: 'wrap' }}>
          
          {/* Left Side: Professional Text Content */}
          <div style={{ flex: '1', minWidth: '350px' }}>
            <div className="premium-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Global Presence
            </div>
            <div className="about-text-content" style={{ fontSize: '17px', lineHeight: '1.9', color: '#444' }}>
              <div style={{ marginBottom: '28px', fontWeight: '500', color: '#089AD3' }}>
                The company is conveniently located at Coimbatore, Tamilnadu and cater to clients worldwide.
              </div>
              <p style={{ marginBottom: '28px' }}>
                With a strong engineering team, Enlark is your right choice for high quality vacuum pumps, accessories and Vacuum Based Systems.
              </p>
              <p style={{ marginBottom: '28px' }}>
                Enlark offers all types of Vacuum Pumps ranging from 50LPM (3m³ /Min) to 20000 LPM (1200m³ /Min). Enlark is specialized in Rotary Vane, Water Ring, Diaphragm and Piston Pumps. The pumps come in multiple models like Oil Immersed, Oil Free as well as Oil Lubricated Vacuum Pumps.
              </p>
              <p style={{ marginBottom: '28px' }}>
                Enlark provides you the option to choose from Direct Drive and Belt Drive pumps. Enlark also delivers Single Stage as well as Double Stage models in their Rotary Vane, Water Ring, and Diaphragm pumps.
              </p>
            </div>
          </div>

          {/* Right Side: Image Layered Above Blue Block */}
          <div style={{ flex: '1.5', minWidth: '350px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '850px' }}>
              <div style={{ 
                position: 'relative', 
                zIndex: 2, 
                borderRadius: '15px', 
                overflow: 'hidden', 
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)',
                height: '100%',
                minHeight: '450px'
              }} className="responsive-image-wrap">
                <img 
                  src={accessoryImg} 
                  alt="Enlark Vacuum Pump Accessories" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    display: 'block',
                    objectFit: 'cover'
                  }} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function CommitmentBanner() {
  return (
    <section
      className="commitment-banner responsive-commitment"
      style={{
        width: '100%',
        padding: '80px 0',
        backgroundImage: `url(${vacumBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    >
      {/* Content */}
      <div
        className="container commitment-container"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '60px',
        }}
      >
        {/* Left — text */}
        <div style={{ flex: 1 }}>
          <div className="premium-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>
            Consistent Quality
          </div>
          <div style={{
            width: '55px',
            height: '4px',
            background: '#089AD3',
            borderRadius: '2px',
            marginBottom: '28px',
          }} />
          <h3
            style={{
              lineHeight: '1.7',
              fontWeight: 'var(--heading-weight)' as React.CSSProperties['fontWeight'],
              margin: '0px 0px 15px',
            }}
          >
            We, at Enlark, are committed to consistent quality in our products and
            services and we deliver custom solutions best suited
            to each of our clients.
          </h3>
        </div>

        {/* Right — Brand Logo */}
        <div style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img 
            src={logo} 
            alt="Enlark Logo" 
            style={{ 
              width: '180px', 
              height: 'auto',
              borderRadius: '8px',
              padding: '10px'
            }} 
          />
        </div>
      </div>
    </section>
  );
}


function ProductSection() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProduct = products[activeIndex] || products[0];

  return (
    <section className="product-section">
      <div className="container">
        <div className="section-header-left">
          <div className="premium-badge" style={{ margin: '0 0 20px' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
            Our Products
          </div>
          <h2 className="product-main-title">Industrial Vacuum Pumps</h2>
          <p className="product-sub-title">
            {`${COMPANY.nameShort} offers The premium Range of ALL Types of Vacuum Pumps, Vacuum System and Vacuum related products`}
          </p>
        </div>

        <div className="product-display">
          <div className="product-list-container scrollable-list">
            <ul className="product-list">
              {products.map((product, index) => (
                <li 
                  key={product.id} 
                  className={index === activeIndex ? 'active' : ''}
                  onClick={() => setActiveIndex(index)}
                >
                  {product.name}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="product-image-container-wrapper">
            <div className="product-image-container featured-display" onClick={() => navigate(`/product/${activeProduct.id}`)}>
              <div className="display-info-top">
                <span className="category-tag">{activeProduct.category}</span>
                <h3 className="display-name">{activeProduct.name}</h3>
              </div>
              
              <div className="image-main-wrap">
                <img 
                  key={activeProduct.id}
                  src={activeProduct.image} 
                  alt={activeProduct.name} 
                  className="featured-product-img fade-in" 
                />
              </div>

              <div className="display-footer">
                <button className="read-more-btn" style={{ fontWeight: 700 }} onClick={(e) => { e.stopPropagation(); navigate(`/product/${activeProduct.id}`); }}>
                  Explore Details &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .product-display {
          display: flex;
          gap: 30px;
          align-items: flex-start;
          margin-top: 40px;
        }
        .scrollable-list {
          flex: 0 0 350px;
          max-height: 600px;
          overflow-y: auto;
          background: white;
          border: 1px solid #eee;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }
        .scrollable-list::-webkit-scrollbar {
          width: 5px;
        }
        .scrollable-list::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .scrollable-list::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 10px;
        }
        .product-image-container-wrapper {
          flex: 1;
        }
        .featured-display {
          background: #fff;
          border: 1px solid #eee;
          padding: 0 !important;
          flex-direction: column;
          align-items: stretch !important;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .display-info-top {
          padding: 25px 30px;
          background: #fcfcfc;
          border-bottom: 1px solid #f0f0f0;
        }
        .category-tag {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #26a4df;
          font-weight: 700;
          display: block;
          margin-bottom: 8px;
        }
        .display-name {
          font-size: 22px;
          color: #1b5b7a;
          margin: 0;
          font-weight: 600;
          line-height: 1.3;
        }
        .image-main-wrap {
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          background: white;
        }
        .featured-product-img {
          max-height: 100%;
          max-width: 100%;
          object-fit: contain;
        }
        .display-footer {
          padding: 20px 30px;
          background: #fcfcfc;
          border-top: 1px solid #f0f0f0;
          display: flex;
          justify-content: flex-end;
        }
        .fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 992px) {
          .product-display {
            flex-direction: column;
          }
          .scrollable-list {
            flex: none;
            width: 100%;
            max-height: 300px;
          }
          .image-main-wrap {
            height: 300px;
          }
        }
      `}} />
    </section>
  );
}

function IndustriesSection() {
  const [activeInd, setActiveInd] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const industries = [
    { title: 'Pharmaceuticals', img: pharmImg, desc: 'Precision vacuum solutions for laboratory and production-scale pharmaceutical manufacturing.' },
    { title: 'Chemical Processing', img: chemImg, desc: 'Durable pumps designed to handle corrosive and aggressive chemical environments.' },
    { title: 'Jewellery Making', img: jewelImg, desc: 'Specialized vacuum casting solutions for intricate jewelry designs and precision finishing.' },
    { title: 'Food Processing', img: foodImg, desc: 'Hygienic vacuum systems for packaging, de-aeration, and processing applications.' },
    { title: 'Packaging Solutions', img: packImg, desc: 'High-speed vacuum systems for chamber packaging and modified atmosphere solutions.' },
    { title: 'Automotive', img: autoImg, desc: 'Reliable vacuum support for automotive component manufacturing and testing.' },
    { title: 'General Engineering', img: engImg, desc: 'Versatile vacuum technology for a wide range of industrial manufacturing processes.' },
    { title: 'Dairy Farming', img: dairyImg, desc: 'Efficient milking machine vacuum pumps for modern dairy management and hygiene.' },
    { title: 'Paint Manufacturing', img: paintImg, desc: 'Vacuum systems for pigment processing and high-quality paint production lines.' },
    { title: 'Distillation', img: distImg, desc: 'Critical vacuum control for industrial and laboratory-scale distillation processes.' },
    { title: 'Defense Applications', img: defImg, desc: 'High-performance vacuum solutions meeting rigorous defense and aerospace standards.' },
    { title: 'Lab Equipment', img: labImg, desc: 'Precision bench-top and integrated laboratory vacuum pumps for scientific research.' },
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveInd((prev) => (prev + 1) % industries.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isPaused, industries.length]);

  return (
    <section 
      className="industries-interactive-section responsive-industries-section" 
      style={{ padding: '100px 0', backgroundColor: '#fff', overflow: 'hidden' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        <div style={{ textAlign: 'left', marginBottom: '50px' }}>
          <div className="premium-badge" style={{ margin: '0 0 20px' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            Sectors Supported
          </div>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#011A2F' }}>Industries We Serve</h2>
          <p style={{ color: '#666', marginTop: '10px' }}>Excellence in Vacuum Technology across diverse sectors.</p>
        </div>

        <div className="industries-accordion-wrapper" style={{ 
          display: 'flex', 
          height: '500px', 
          width: '100%', 
          backgroundColor: '#f5f5f5',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 30px 60px -12px rgba(0,0,0,0.15)'
        }}>
          {industries.map((ind, index) => {
            const isActive = activeInd === index;
            return (
              <div 
                key={index}
                onClick={() => setActiveInd(index)}
                style={{ 
                  flex: isActive ? '10' : '1',
                  minWidth: isActive ? 'auto' : '45px',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                  backgroundColor: isActive ? '#FF5722' : index % 2 === 0 ? '#ebebeb' : '#e0e0e0',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRight: index === industries.length - 1 ? 'none' : '1px solid rgba(0,0,0,0.05)',
                  backgroundImage: `url(${ind.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Overlay for non-active items in desktop accordion */}
                {!isActive && (
                  <div className="accordion-overlay" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(235, 235, 235, 0.85)',
                    zIndex: 2,
                    transition: 'opacity 0.5s'
                  }} />
                )}

                {/* Number Label At Top (Strips) */}
                <div style={{ 
                  padding: '20px 0', 
                  textAlign: 'center', 
                  fontSize: '22px', 
                  fontWeight: '800', 
                  color: isActive ? '#fff' : '#333',
                  opacity: 0.9,
                  zIndex: 10,
                  position: 'relative'
                }}>
                  {index + 1}
                </div>

                {/* Content Area */}
                <div className={`accordion-content-area ${isActive ? 'active' : ''}`} style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  width: '100%', 
                  height: '100%',
                  display: isActive ? 'block' : 'none',
                  zIndex: 5
                }}>
                  {/* Orange Sidebar Indicator (Clean) */}
                  <div style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    width: '10px', 
                    height: '100%', 
                    backgroundColor: '#FF5722', 
                    zIndex: 2
                  }} />

                  {/* Overlay Text Card (from image) */}
                  <div style={{ 
                    position: 'absolute', 
                    bottom: '40px', 
                    left: '80px', 
                    backgroundColor: 'rgba(245, 245, 245, 0.95)', 
                    padding: '40px', 
                    maxWidth: '450px', 
                    zIndex: 3,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                    animation: 'slideUp 0.6s ease-in-out 0.1s both',
                    backdropFilter: 'blur(5px)'
                  }}>
                    <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#011A2F', marginBottom: '15px' }}>{ind.title}</h3>
                    <p style={{ fontSize: '15px', color: '#444', lineHeight: '1.6', marginBottom: '0' }}>{ind.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInSlide {
          from { opacity: 0; transform: translateX(15px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .industries-accordion-wrapper:hover > div:not(:hover) {
          filter: grayscale(0.2) contrast(0.9);
        }
      `}} />
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <DetailedAboutSection />
      <CommitmentBanner />
      <ProductSection />
      <IndustriesSection />
    </>
  );
}

