import React from 'react';
import { NavLink } from 'react-router-dom';
import carousel1 from '../assets/carousel1.png';
import carousel3 from '../assets/carousel3.png';
import carousel4 from '../assets/carousel4.jpeg';
import badgeImg from '../assets/badge.png';
import waterring from '../assets/waterring.jpg';
import { COMPANY } from '../config/company';

function Hero() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slides = [carousel1, carousel4, carousel3];

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
          <h2 className="section-title">{`Welcome to ${COMPANY.nameShort}`}</h2>
          <div className="about-content">
            <p>
              Enlark- With the team of Engineer-Directors, Technical, Marketing and Management personnels, is on the wheels
              of targetted success and achievements. In the voyage of Manufacturing and Marketing, Enlark-offers The
              premium Range of ALL Types of Vacuum Pumps, Vacuum System and Vacuum related products, backed by the best
              technology in the field and the team of Engineers Enlark is catering the clientles, the quality product to
              the high level satisafaction.
            </p>
            <p>
              In just a spell of very small time ( 2024-2026 ), we have sussccessfuly earned credit in providing Quality
              products and Services for existing products as well the newly developed products too.
            </p>
            <p>
              Enlark is committed for consistents quality, best solution on customers&apos; need, on-going Improvements for
              developing new products and quality thereof and management systems for total customer stisafaction.
            </p>
          </div>
          <NavLink className="read-more-btn" to="/about-us">
            Read More
          </NavLink>
        </div>
      </div>
    </section>
  );
}

function InfoSection() {
  return (
    <section className="info-section">
      <div className="container">
        <h2 className="info-title">High-Quality, Durable and the Most Reliable Vacuum Pump Manufacturers in Coimbatore, India</h2>
        <div className="info-block">
          <p>
            <strong>{COMPANY.nameShort}</strong> is the industry leader among <strong>vacuum pump manufacturers in Coimbatore</strong>. Our
            product portfolio is very large, and each of our products is specially designed and manufactured for our
            clients to achieve their operational goals at the highest level. We manufacture and supply vacuum pumps and
            provide after-sales support to each of our valuable clients pan India. We are the most reliable vacuum pump
            manufacturers that value the varied requirements of our clients from diverse industries and provide
            custom-designed and developed vacuum pumps on demand. As the top <strong>vacuum pump manufacturers in India</strong>, we are
            committed to providing high-quality, durable products that match global standards.
          </p>
        </div>

        <h2 className="info-subtitle">Highly Popular Vacuum Pump Suppliers</h2>
        <div className="info-block">
          <p>
            Founded a few decades back, <strong>{COMPANY.nameShort}</strong> has grown and has made a name for itself among the{' '}
            <strong>vacuum pump suppliers</strong> in the industry. Our popularity is known to the whole of India and beyond. We
            supply vacuum pumps required for all types of industries to the highest level of customer satisfaction. We are
            known as solution-oriented <strong>vacuum pump manufacturers</strong> and experts. Our products add value to the
            industrial and commercial operations of our clients. We continuously upgrade our products to meet the changing
            needs of our clients. Our highly innovative products are easy to install and operate.
          </p>
        </div>

        <div className="advantages-wrapper flex-between">
          <div className="advantages-content">
            <h2 className="info-advantages-title">{`Your Advantages with ${COMPANY.nameShort}`}</h2>
            <ul className="advantages-list">
              <li>Largest inventory of vacuum pumps</li>
              <li>
                Specialist <strong>mechanical booster vacuum pump</strong> suppliers
              </li>
              <li>Supply of custom-made vacuum pumps and solutions</li>
              <li className="blue-link">
                World-class <strong>liquid ring vacuum pump manufactures</strong>
              </li>
              <li>Top Priority for the satisfaction of all our customers</li>
              <li>Trained and highly skilled engineers and technical staff</li>
              <li>Swift delivery to the whole of India and all parts of the world</li>
            </ul>
          </div>
          <div className="advantages-image">
            <img src={carousel3} alt="Vacuum Pump Excellence" className="info-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductSection() {
  const products = [
    'Water Ring Vacuum Pump',
    'Liquid Ring Vacuum Pump',
    'Single Stage Water-Ring Vacuum Pump',
    'Two Stage Water Ring Vacuum Pump',
    'Mono-Block Water Ring Vacuum Pump',
    'Water Re Covery Water Ring Vacuum Pump System',
    'Mechanical Vacuum Booster',
    'Twin Lobe Roots Blower',
    'Penumatic Conveying System',
    'Oil Sealed Rotary Vacuum Pump',
    'Oil Lubricated Vacuum Pump',
    'Oil Seal, Mono Block Vacuum Pump',
    'Liquid Ring Compressor',
  ];

  return (
    <section className="product-section">
      <div className="container">
        <div className="section-header-centered">
          <h2 className="product-main-title">Industrial Vacuum Pumps</h2>
          <p className="product-sub-title">
            {`${COMPANY.nameShort} offers The premium Range of ALL Types of Vacuum Pumps, Vacuum System and Vacuum related products`}
          </p>
        </div>

        <div className="product-display flex-between">
          <div className="product-list-container">
            <ul className="product-list">
              {products.map((name, index) => (
                <li key={index} className={index === 0 ? 'active' : ''}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
          <div className="product-image-container">
            <img src={waterring} alt="Water Ring Vacuum Pump" className="featured-product-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  const industries = [
    {
      icon: (
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#26A4DF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 18h18" />
          <path d="M5 18a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3z" />
          <path d="M12 18a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3z" />
          <path d="M19 18a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3z" />
          <rect x="5.5" y="11" width="3" height="7" rx="0.5" />
          <rect x="10.5" y="10" width="3" height="8" rx="0.5" />
          <rect x="15.5" y="12" width="3" height="6" rx="0.5" />
          <path d="M7 8v3M8 8H6" />
          <path d="M12 7v3M13 7h-2" />
          <path d="M17 9v3M18 9h-2" />
          <path d="M12 4v3" />
          <path d="M10 4h6" />
          <path d="M15 4v1a1 1 0 0 0 1 1h1" />
        </svg>
      ),
      blueText: 'FOOD & BEVERAGES',
      darkText: ' INDUSTRY',
    },
    {
      icon: (
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#26A4DF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 20h18" />
          <path d="M5 20V11a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9" />
          <path d="M9 15h6M12 12v6" />
          <path d="M15 10V6M13 8h4" />
          <path d="M7 20v-3h10v3" />
          <path d="M17 5s1-1 2 0 1 1 2 0" />
          <path d="M18 3s1-1 2 0 1 1 2 0" />
        </svg>
      ),
      blueText: 'PHARMACEUTICAL',
      darkText: ' INDUSTRY',
    },
    {
      icon: (
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#26A4DF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 6h4" />
          <path d="M8 6v2l-2 3v9h6V11l-2-3V6" />
          <path d="M6 14h6" />
          <path d="M6 17h6" />
          <path d="M13 20h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6v9z" />
          <path d="M16 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
          <path d="M18 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
          <path d="M15 19v-2" />
        </svg>
      ),
      blueText: 'DAIRY',
      darkText: ' INDUSTRIES',
    },
    {
      icon: (
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#26A4DF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 20h18" />
          <path d="M5 20v-8h3v8" />
          <path d="M9 20V10h4v10" />
          <path d="M14 20V13h4v7" />
          <path d="M19 20v-5h2v5" />
          <path d="M6.5 12V8" />
          <path d="M11 10V6" />
          <path d="M16 13V8" />
          <path d="M11 4s1-1 2 0 1 1 2 0" />
          <path d="M12 2s1-1 2 0 1 1 2 0" />
          <path d="M6 15h1" />
          <path d="M10 13h2" />
          <path d="M15 15h2" />
          <path d="M10 17h2" />
        </svg>
      ),
      blueText: 'SOLVENT / EDIBLE',
      darkText: ' INDUSTRIES',
    },
  ];

  return (
    <section className="industries-section">
      <div className="container">
        <h2 className="industries-title">Industries We Serve</h2>
        <div className="industries-grid">
          {industries.map((ind, index) => (
            <div className="industry-card" key={index}>
              <div className="icon-circle">{ind.icon}</div>
              <p className="industry-name">
                <span className="text-blue">{ind.blueText}</span>
                <span className="text-dark">{ind.darkText}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <InfoSection />
      <ProductSection />
      <IndustriesSection />
    </>
  );
}

