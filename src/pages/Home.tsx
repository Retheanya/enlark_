import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import hero1 from '../assets/01.Rotary Vane Pumps – Single Stage Oil Immersed Direct Drive/01.Rotary Vane Pumps – Single Stage Oil Immersed Direct Drive.jpg';
import hero2 from '../assets/07.Water Ring Pumps – Single Stage Direct Drive/01.Water Ring Pumps – Single Stage Direct Drive.jpg';
import hero3 from '../assets/05.Belt Drive Pumps – Oil Lubricated/04.Belt Drive Pumps – Oil Lubricated.jpg';
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
            <div style={{ marginBottom: '15px' }}>
              <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 15 L54 6 L64 9 L60 18 A32 32 0 0 1 76 28 L85 24 L90 33 L81 38 A32 32 0 0 1 85 50 L94 54 L91 64 L82 60 A32 32 0 0 1 72 76 L76 85 L67 90 L62 81 A32 32 0 0 1 50 85 L46 94 L36 91 L40 82 A32 32 0 0 1 24 72 L15 76 L10 67 L19 62 A32 32 0 0 1 15 50 L6 46 L9 36 L18 40 A32 32 0 0 1 28 24 L24 15 L33 10 L38 19 A32 32 0 0 1 50 15 Z" fill="transparent" stroke="#013D8B" strokeWidth="4.5" strokeLinejoin="round"/>
                <circle cx="50" cy="50" r="23" fill="transparent" stroke="#013D8B" strokeWidth="3" />
                <circle cx="50" cy="50" r="16" fill="transparent" stroke="#013D8B" strokeWidth="1" strokeDasharray="3 3" />
                <text x="50" y="66" fontSize="46" fontWeight="900" textAnchor="middle" fill="#013D8B" style={{ fontFamily: 'Arial, sans-serif' }}>7</text>
              </svg>
            </div>
            <p className="badge-years" style={{ letterSpacing: '1px', fontWeight: '800' }}>2019-2026</p>
            <p className="badge-text decoration" style={{ fontWeight: '600' }}>
              A 7-year history of
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
          <h2 className="section-title">Welcome to Enlark Enterprises Private Limited</h2>
          <div className="about-content">
            <p>
              Enlark Enterprises Private Limited, <b>an ISO 9001: 2015 certified enterprise,</b> is a name you can trust being pioneers in high precision Vacuum Technology with four decades of inherited legacy and technology of famous <b>Bharath Vacuum Pumps brand.</b> We deliver a diverse range of Vacuum Pumps, Vacuum Based Machinery and Vacuum Systems that cater to varied industries worldwide ranging from <b>Pharmaceuticals, Chemical Processing, Jewellery Making, Food Processing, Packaging Solutions, Automotive, General Engineering, Dairy Farming, Paint Manufacturing, Distillation, Defense Applications, Lab Equipment</b> and many others.
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

      <div className="container" style={{ padding: '40px 15px', position: 'relative', zIndex: 1 }}>
        <div className="flex-stack-mobile" style={{ display: 'flex', gap: '80px', alignItems: 'center', flexWrap: 'wrap' }}>
          
          {/* Left Side: Professional Text Content */}
          <div style={{ flex: '1', minWidth: '350px' }}>
            <div className="premium-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              OUR COMPANY
            </div>
            <div className="about-text-content" style={{ fontSize: '17px', lineHeight: '1.9', color: '#444' }}>
              <div style={{ marginBottom: '28px', fontWeight: '500', color: '#089AD3' }}>
                <b>The company is conveniently located at Coimbatore, Tamilnadu and cater to clients worldwide.</b>
              </div>
              <p style={{ marginBottom: '28px' }}>
                With a strong engineering team, Enlark Enterprises Private Limited is your right choice for high quality vacuum pumps, accessories and Vacuum Based Systems.
              </p>
              <p style={{ marginBottom: '28px' }}>
                Enlark Enterprises Private Limited offers all types of Vacuum Pumps ranging from <b>50LPM (3m³ /Min) to 20000 LPM (1200m³ /Min).</b> Enlark Enterprises Private Limited is specialized in Rotary Vane, Water Ring, Diaphragm and Piston Pumps. The pumps come in multiple models like Oil Immersed, Oil Free as well as Oil Lubricated Vacuum Pumps.
              </p>
              <p style={{ marginBottom: '28px' }}>
                Enlark Enterprises Private Limited provides you the option to choose from Direct Drive and Belt Drive pumps. Enlark Enterprises Private Limited also delivers Single Stage as well as Double Stage models in their Rotary Vane, Water Ring, and Diaphragm pumps.
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
                  alt="Enlark Enterprises Private Limited Vacuum Pump Accessories" 
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
        padding: '40px 0',
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
              fontSize: '25px !important',
              color: '#089AD3',
              lineHeight: '1.7',
              fontWeight: 'var(--heading-weight)' as React.CSSProperties['fontWeight'],
              margin: '0px 0px 15px',
              fontFamily: "'Poppins', sans-serif"
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
                <button 
                  className="read-more-btn" 
                  style={{ 
                    fontWeight: 700,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px'
                  }} 
                  onClick={(e) => { e.stopPropagation(); navigate(`/product/${activeProduct.id}`); }}
                >
                  Explore Details
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
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
  const industries = [
    { title: 'Pharmaceuticals', img: pharmImg, desc: 'Vacuum solutions for pharma production.' },
    { title: 'Chemical Processing', img: chemImg, desc: 'Corrosive-duty pumps.' },
    { title: 'Jewellery Making', img: jewelImg, desc: 'Precision vacuum for casting.' },
    { title: 'Food Processing', img: foodImg, desc: 'Hygienic vacuum systems.' },
    { title: 'Packaging Solutions', img: packImg, desc: 'High-speed vacuum.' },
    { title: 'Automotive', img: autoImg, desc: 'Testing & assembly vacuum.' },
    { title: 'General Engineering', img: engImg, desc: 'Versatile industrial vacuum.' },
    { title: 'Dairy Farming', img: dairyImg, desc: 'Milking vacuum systems.' },
    { title: 'Paint Manufacturing', img: paintImg, desc: 'Vacuum for paint processing.' },
    { title: 'Distillation', img: distImg, desc: 'Controlled vacuum distillation.' },
    { title: 'Defense Applications', img: defImg, desc: 'High-performance vacuum.' },
    { title: 'Lab Equipment', img: labImg, desc: 'Lab-grade vacuum solutions.' },
  ];

  return (
    <section 
      className="industries-grid-home-section" 
      style={{ padding: '60px 0', backgroundColor: '#fff' }}
    >
      <div className="container">
        <div style={{ textAlign: 'left', marginBottom: '40px' }}>
          <div className="premium-badge" style={{ margin: '0 0 15px' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            Sectors Supported
          </div>
          <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#011A2F' }}>Industries We Serve</h2>
          <p style={{ color: '#666', marginTop: '5px' }}>Excellence in Vacuum Technology across diverse sectors.</p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '20px', 
          width: '100%' 
        }}>
          {industries.map((ind, index) => (
            <div 
              key={index}
              className="industry-grid-card"
              style={{ 
                aspectRatio: '1/1', 
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                transition: 'all 0.4s ease',
                cursor: 'pointer'
              }}
            >
              {/* Image Layer */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${ind.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'transform 0.6s ease'
              }} className="card-bg" />
              
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0,0,0,0.15)',
                zIndex: 1
              }} />

              {/* Floating Content Card (Overlay) - Smaller than image card */}
              <div 
                className="floating-content-card"
                style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '10px',
                  right: '10px',
                  width: 'auto',
                  height: '110px',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  padding: '10px 12px',
                  borderRadius: '12px',
                  zIndex: 2,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(15px)',
                  WebkitBackdropFilter: 'blur(15px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '4px'
                }}
              >
                  <h3 style={{ color: '#ffffff', margin: '0', fontSize: '15px' }}>{ind.title}</h3>
                  <p style={{ 
                    fontSize: '11.5px', 
                    color: '#ffffff', 
                    fontFamily: "'Montserrat', sans-serif",
                    lineHeight: '1.3', 
                    margin: 0,
                    opacity: 0.95,
                    display: '-webkit-box',
                    WebkitLineClamp: '2',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {ind.desc}
                  </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .industry-grid-card:hover .card-bg {
          transform: scale(1.1);
        }
        .industry-grid-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.18);
        }
        .industry-grid-card:hover .floating-content-card {
          background-color: #ffffff;
          transform: translateY(-5px);
        }
        @media (max-width: 1200px) {
          .industries-grid-home-section > .container > div:last-child {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 900px) {
          .industries-grid-home-section > .container > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .industries-grid-home-section > .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
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

