import React from 'react';
import './App.css';
import logo from './assets/logo.png';
import carousel1 from './assets/carousel1.png';
import carousel3 from './assets/carousel3.png';
import carousel4 from './assets/carousel4.jpeg';
import carousel2 from './assets/carousel2.jpeg';
import heroImg from './assets/hero.png';
import badgeImg from './assets/badge.png';
import waterring from './assets/waterring.jpg';
import { HashRouter, NavLink, Route, Routes, useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="logo-section">
          <img src={logo} alt="Enlark Logo" className="logo" />
          <div className="logo-text">
            <h2>ENLARK PUMPS PVT. LTD.</h2>
            <p>(AN ISO 9001:2015 COMPANY)</p>
          </div>
        </div>

        <button
          type="button"
          className="nav-hamburger"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          <span className="nav-hamburger-bar" />
          <span className="nav-hamburger-bar" />
          <span className="nav-hamburger-bar" />
        </button>

        <div
          className={`nav-mobile-backdrop ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden={!isMenuOpen}
        />

        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              onClick={() => setIsMenuOpen(false)}
            >
              Our Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/industries"
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              onClick={() => setIsMenuOpen(false)}
            >
              Industries We Serve
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const TopHeader = () => {
  return (
    <div className="top-header">
      <div className="container flex-end">
        <div className="contact-info">
          <span>+91 99047 07781</span>
          <span>sales@enlarkvacuumpumps.com</span>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slides = [carousel1, carousel4, carousel3];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
        
        <div className="container hero-overlay">
          {/* Text is baked into the carousel images for a professional look */}
        </div>

        <div className="carousel-dots">
          {slides.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};


const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container flex-between">
        <div className="about-left">
          <div className="badge-container">
            <img src={badgeImg} alt="2 Years Badge" className="badge-img" />
            <p className="badge-years">2024-2026</p>
            <p className="badge-text decoration">A 2-year history of<br />quality and reliability</p>
          </div>
        </div>
        <div className="about-right">
          <h2 className="section-title">Welcome to Enlark Pumps Pvt. Ltd.</h2>
          <div className="about-content">
            <p>Enlark- With the team of Engineer-Directors, Technical, Marketing and Management personnels, is on the wheels of targetted success and achievements. In the voyage of Manufacturing and Marketing, Enlark-offers The premium Range of ALL Types of Vacuum Pumps, Vacuum System and Vacuum related products, backed by the best technology in the field and the team of Engineers Enlark is catering the clientles, the quality product to the high level satisafaction.</p>
            <p>In just a spell of very small time ( 2024-2026 ), we have sussccessfuly earned credit in providing Quality products and Services for existing products as well the newly developed products too.</p>
            <p>Enlark is committed for consistents quality, best solution on customers' need, on-going Improvements for developing new products and quality thereof and management systems for total customer stisafaction.</p>
          </div>
          <NavLink className="read-more-btn" to="/about-us">Read More</NavLink>
        </div>
      </div>
    </section>
  );
};

type AboutSectionKey =
  | 'vision-mission'
  | 'company-profile'
  | 'qa-qc'
  | 'infrastructure'
  | 'history'
  | 'why-ivc'
  | 'technical-support'
  | 'new-development';

const AboutUsSections = () => {
  const sections: Array<{
    key: AboutSectionKey;
    title: string;
    image: string;
    paragraphs: string[];
    bullets?: string[];
  }> = [
    {
      key: 'vision-mission',
      title: 'Vision & Mission',
      image: heroImg,
      paragraphs: [
        'Our vision is to be a trusted global partner for vacuum pump solutions, known for reliability, performance, and responsive service.',
        'Our mission is to engineer, manufacture, and support vacuum pumps and systems that help customers achieve stable vacuum levels, lower downtime, and better process consistency.',
      ],
      bullets: [
        'Deliver dependable vacuum performance across applications',
        'Improve continuously through testing, feedback, and innovation',
        'Support customers with fast, practical technical help',
      ],
    },
    {
      key: 'company-profile',
      title: 'Company Profile',
      image: carousel1,
      paragraphs: [
        'ENLARK PUMPS PVT. LTD. designs and manufactures a broad range of industrial vacuum pumps, vacuum systems, and accessories for process industries.',
        'With an engineering-led approach, we focus on robust construction, serviceability, and application-fit configurations—standard and customized.',
      ],
      bullets: [
        'Product range: water ring, liquid ring, booster systems, oil sealed pumps, and vacuum packages',
        'Services: selection support, commissioning guidance, and after-sales spares',
        'Quality system: ISO-aligned processes (dummy data)',
      ],
    },
    {
      key: 'qa-qc',
      title: 'Quality Assurance And Quality Control',
      image: carousel2,
      paragraphs: [
        'Quality is built into every step—from incoming inspection to assembly, testing, and final dispatch. Our QA/QC practices emphasize consistency, traceability, and repeatable results.',
        'Each unit is checked against defined parameters to ensure safe operation and reliable vacuum performance for the intended duty point.',
      ],
      bullets: [
        'Incoming material inspection and vendor verification (dummy process)',
        'Assembly checks for alignment, clearances, and torque',
        'Performance testing for vacuum level, vibration, noise, and leakage',
      ],
    },
    {
      key: 'infrastructure',
      title: 'Infrastructure',
      image: carousel4,
      paragraphs: [
        'Our infrastructure supports precision assembly, controlled testing, and efficient dispatch. Dedicated areas for assembly, testing, and spares help keep lead times predictable.',
        'We maintain measuring and test instruments to verify critical dimensions and performance metrics.',
      ],
      bullets: [
        'Assembly bays with calibrated tools (dummy data)',
        'Test setup for performance verification',
        'Organized spares and service-ready inventory',
      ],
    },
    {
      key: 'history',
      title: 'History',
      image: carousel3,
      paragraphs: [
        'ENLARK began with a clear focus: build dependable vacuum pump solutions and back them with responsive support.',
        'From 2024–2026, we expanded our product portfolio and strengthened testing practices to meet higher process demands across industries (dummy timeline).',
      ],
      bullets: [
        '2024: Company foundation and initial product range (dummy)',
        '2025: Added new configurations and improved testing routines (dummy)',
        '2026: Expanded service support and spares readiness (dummy)',
      ],
    },
    {
      key: 'why-ivc',
      title: 'Why Ivc',
      image: waterring,
      paragraphs: [
        'Customers choose us for application-fit solutions and support that stays involved after delivery. We focus on practical engineering and consistent quality.',
        'Our goal is to help you achieve stable vacuum, lower energy cost, and fewer stoppages with the right pump selection and configuration.',
      ],
      bullets: [
        'Application guidance for correct selection and sizing',
        'Robust build for industrial duty cycles',
        'Quick spares and service support',
      ],
    },
    {
      key: 'technical-support',
      title: 'Technical Support',
      image: carousel1,
      paragraphs: [
        'Our technical team helps with selection, troubleshooting, and optimization—whether it’s improving vacuum stability, reducing carryover, or fine-tuning system performance.',
        'Support can include parameter checks, recommended operating practices, and spares guidance for planned maintenance.',
      ],
      bullets: [
        'Selection support: duty point, sealing fluid, materials (dummy)',
        'Troubleshooting: low vacuum, noise/vibration, high temperature (dummy)',
        'Maintenance guidance and spares planning',
      ],
    },
    {
      key: 'new-development',
      title: 'New Development',
      image: carousel4,
      paragraphs: [
        'We continuously develop improved variants and system packages to meet evolving process requirements—better efficiency, easier service, and stable performance.',
        'New development efforts prioritize reliability in real-world conditions and compatibility with customer operating environments.',
      ],
      bullets: [
        'Product variants and customized skids (dummy)',
        'Performance-focused testing and validation',
        'Feedback-driven improvements from field experience',
      ],
    },
  ];

  return (
    <div className="about-full" id="about-us">
      {sections.map((s, idx) => (
        <section key={s.key} className={`about-split ${idx % 2 === 0 ? 'even' : 'odd'}`}>
          <div className="about-split-inner">
            <div className="about-split-text">
              <p className="about-split-kicker">{`Section ${idx + 1} of 8`}</p>
              <h2 className="about-split-title">{s.title}</h2>
              {s.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="about-split-paragraph">{p}</p>
              ))}
              {s.bullets && (
                <ul className="about-split-bullets">
                  {s.bullets.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className="about-split-media">
              <img src={s.image} alt={`${s.title} - vacuum pumps`} className="about-split-img" />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

const AboutUsHero = () => {
  return (
    <section className="about-hero">
      <div className="container about-hero-inner">
        <div className="about-hero-text">
          <h1 className="about-hero-title">About ENLARK Pumps</h1>
          <p className="about-hero-subtitle">
            Vacuum pump manufacturing focused on dependable performance, consistent quality, and long-term service support.
          </p>
        </div>
        <div className="about-hero-image">
          <img src={carousel4} alt="Vacuum pumps" className="about-hero-img" />
        </div>
      </div>
    </section>
  );
};

const InfoSection = () => {
  return (
    <section className="info-section">
      <div className="container">
        <h2 className="info-title">High-Quality, Durable and the Most Reliable Vacuum Pump Manufacturers in Ahmedabad, India</h2>
        <div className="info-block">
          <p><strong>Enlark Pumps Pvt. Ltd.</strong> is the industry leader among <strong>vacuum pump manufacturers in Ahmedabad</strong>. Our product portfolio is very large, and each of our products is specially designed and manufactured for our clients to achieve their operational goals at the highest level. We manufacture and supply vacuum pumps and provide after-sales support to each of our valuable clients pan India. We are the most reliable vacuum pump manufacturers that value the varied requirements of our clients from diverse industries and provide custom-designed and developed vacuum pumps on demand. As the top <strong>vacuum pump manufacturers in India</strong>, we are committed to providing high-quality, durable products that match global standards.</p>
        </div>
        
        <h2 className="info-subtitle">Highly Popular Vacuum Pump Suppliers</h2>
        <div className="info-block">
          <p>Founded a few decades back, <strong>Enlark Pumps Pvt. Ltd.</strong> has grown and has made a name for itself among the <strong>vacuum pump suppliers</strong> in the industry. Our popularity is known to the whole of India and beyond. We supply vacuum pumps required for all types of industries to the highest level of customer satisfaction. We are known as solution-oriented <strong>vacuum pump manufacturers</strong> and experts. Our products add value to the industrial and commercial operations of our clients. We continuously upgrade our products to meet the changing needs of our clients. Our highly innovative products are easy to install and operate.</p>
        </div>

        <div className="advantages-wrapper flex-between">
          <div className="advantages-content">
            <h2 className="info-advantages-title">Your Advantages with Enlark Pumps Pvt. Ltd.</h2>
            <ul className="advantages-list">
              <li>Largest inventory of vacuum pumps</li>
              <li>Specialist <strong>mechanical booster vacuum pump</strong> suppliers</li>
              <li>Supply of custom-made vacuum pumps and solutions</li>
              <li className="blue-link">World-class <strong>liquid ring vacuum pump manufactures</strong></li>
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
};

const ProductSection = () => {
  const products = [
    "Water Ring Vacuum Pump",
    "Liquid Ring Vacuum Pump",
    "Single Stage Water-Ring Vacuum Pump",
    "Two Stage Water Ring Vacuum Pump",
    "Mono-Block Water Ring Vacuum Pump",
    "Water Re Covery Water Ring Vacuum Pump System",
    "Mechanical Vacuum Booster",
    "Twin Lobe Roots Blower",
    "Penumatic Conveying System",
    "Oil Sealed Rotary Vacuum Pump",
    "Oil Lubricated Vacuum Pump",
    "Oil Seal, Mono Block Vacuum Pump",
    "Liquid Ring Compressor"
  ];

  return (
    <section className="product-section">
      <div className="container">
        <div className="section-header-centered">
          <h2 className="product-main-title">Industrial Vacuum Pumps</h2>
          <p className="product-sub-title">Enlark Pumps Pvt Ltd offers The premium Range of ALL Types of Vacuum Pumps, Vacuum System and Vacuum related products</p>
        </div>
        
        <div className="product-display flex-between">
          <div className="product-list-container">
            <ul className="product-list">
              {products.map((name, index) => (
                <li key={index} className={index === 0 ? "active" : ""}>
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
};

const IndustriesSection = () => {
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
      blueText: "FOOD & BEVERAGES",
      darkText: " INDUSTRY"
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
      blueText: "PHARMACEUTICAL",
      darkText: " INDUSTRY"
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
      blueText: "DAIRY",
      darkText: " INDUSTRIES"
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
      blueText: "SOLVENT / EDIBLE",
      darkText: " INDUSTRIES"
    }
  ];

  return (
    <section className="industries-section">
      <div className="container">
        <h2 className="industries-title">Industries We Serve</h2>
        <div className="industries-grid">
          {industries.map((ind, index) => (
            <div className="industry-card" key={index}>
              <div className="icon-circle">
                {ind.icon}
              </div>
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
};


const FloatingContact = () => {
  return (
    <div className="floating-contact">
      <div className="floating-icon email-circle">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
          <path d="m22 6-10 7L2 6" />
        </svg>
      </div>
      <div className="floating-icon whatsapp-circle">
        <svg width="24" height="24" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
          <path d="M19.11 17.56c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.25-.24-.58-.48-.5-.68-.51h-.58c-.2 0-.52.07-.8.37-.28.3-1.05 1.02-1.05 2.48 0 1.46 1.08 2.87 1.23 3.07.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.41.25-.7.25-1.3.17-1.41-.07-.11-.27-.17-.57-.32zM16 3.2c-7.05 0-12.8 5.58-12.8 12.44 0 2.2.6 4.36 1.75 6.25L3.2 28.8l7.2-1.6c1.83 1 3.9 1.52 5.6 1.52 7.05 0 12.8-5.58 12.8-12.44S23.05 3.2 16 3.2zm0 22.4c-1.55 0-3.53-.56-5.08-1.6l-.36-.24-4.22.94.9-4.02-.24-.39c-1-1.6-1.53-3.43-1.53-5.29C5.47 9.56 10.28 5.6 16 5.6s10.53 3.96 10.53 10.4S21.72 25.6 16 25.6z"/>
        </svg>
      </div>
      <div className="floating-icon phone-circle">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col about-col">
          <div className="footer-logo">
            <img src={logo} alt="Enlark Logo" className="logo-white" />
            <div className="logo-text-white">
              <h2>ENLARK PUMPS PVT. LTD.</h2>
              <p>(AN ISO 9001:2015 COMPANY)</p>
            </div>
          </div>
          <div className="footer-company-name">Enlark Pumps Pvt Ltd</div>
          <p className="footer-desc">
            Enlark - With the team of Engineer-Directors, Technical, Marketing and Management personnels, is on the wheels of targetted success and achievements.
          </p>
          <div className="social-icons">
            <a href="#" className="social-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="social-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="social-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h3 className="footer-header">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Technical Support</a></li>
            <li><a href="#">Industries We Serve</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-header">Address</h3>
          <ul className="footer-address">
            <li>
              <div className="icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <span>Plot - 255, Phase-I, Gate-5, Nilkanth Mahadev Road, GIDC-Naroda, Ahmedabad - 382 330, Gujarat, India</span>
            </li>
            <li>
              <div className="icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <span>+91(79)22807782</span>
            </li>
            <li>
              <div className="icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
              </div>
              <span>+91 99047 07781, +91 99047 07785</span>
            </li>
            <li>
              <div className="icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10Z"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <span>sales@enlarkvacuumpumps.com</span>
            </li>
            <li>
              <div className="icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <span>www.enlarkvacuumpumps.com</span>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-header">MAP</h3>
          <div className="footer-map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.30132890654!2d72.64808261496884!3d23.08605558491874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e86d080000001%3A0xe5a36323a633a69a!2sIVC%20VACUUM%20PUMPS%20PVT.LTD!5e0!3m2!1sen!2sin!4v1652701833456!5m2!1sen!2sin" 
              width="100%" 
              height="240" 
              style={{ border: 0, borderRadius: '4px' }} 
              allowFullScreen={true} 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>Enlark Pumps Pvt. Ltd. © 2026 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

type ProductCategoryKey =
  | 'vacuum-pumps'
  | 'compressors'
  | 'blowers'
  | 'systems'
  | 'measurement'
  | 'software';

const ProductsPage = () => {
  const topTabs: Array<{ key: ProductCategoryKey; label: string }> = [
    { key: 'vacuum-pumps', label: 'VACUUM PUMPS' },
    { key: 'compressors', label: 'COMPRESSORS' },
    { key: 'blowers', label: 'BLOWERS' },
    { key: 'systems', label: 'SYSTEMS' },
    { key: 'measurement', label: 'MEASUREMENT EQUIPMENT' },
    { key: 'software', label: 'SOFTWARE' },
  ];

  const [activeTab, setActiveTab] = React.useState<ProductCategoryKey>('vacuum-pumps');

  const tiles = {
    'vacuum-pumps': [
      { name: 'Water Ring Vacuum Pump', image: waterring },
      { name: 'Liquid Ring Vacuum Pump', image: carousel3 },
      { name: 'Oil Sealed Rotary Vacuum Pump', image: carousel2 },
      { name: 'Oil Lubricated Vacuum Pump', image: carousel1 },
    ],
    compressors: [
      { name: 'Liquid Ring Compressor', image: carousel4 },
      { name: 'Vacuum System Package (Dummy)', image: heroImg },
      { name: 'Customized Skid (Dummy)', image: carousel3 },
      { name: 'Process Package (Dummy)', image: carousel1 },
    ],
    blowers: [
      { name: 'Twin Lobe Roots Blower', image: carousel2 },
      { name: 'Mechanical Vacuum Booster', image: carousel4 },
      { name: 'Roots Booster System (Dummy)', image: heroImg },
      { name: 'High Flow Blower (Dummy)', image: carousel1 },
    ],
    systems: [
      { name: 'Water Recovery Vacuum Pump System', image: carousel3 },
      { name: 'Pneumatic Conveying System', image: carousel4 },
      { name: 'Vacuum System (Dummy)', image: heroImg },
      { name: 'Central Vacuum System (Dummy)', image: carousel2 },
    ],
    measurement: [
      { name: 'Vacuum Gauge (Dummy)', image: carousel1 },
      { name: 'Leak Test Setup (Dummy)', image: carousel3 },
      { name: 'Vibration Test (Dummy)', image: carousel2 },
      { name: 'Noise Test (Dummy)', image: carousel4 },
    ],
    software: [
      { name: 'Selection Tool (Dummy)', image: heroImg },
      { name: 'Maintenance Planner (Dummy)', image: carousel1 },
      { name: 'Service Tracking (Dummy)', image: carousel2 },
      { name: 'Performance Logs (Dummy)', image: carousel3 },
    ],
  } as const;

  const sections = [
    {
      leftTitle: 'Rotary vane →',
      leftItems: tiles['vacuum-pumps'].slice(2, 4),
      rightTitle: 'Claw →',
      rightItems: tiles['vacuum-pumps'].slice(0, 2),
    },
    {
      leftTitle: 'Screw →',
      leftItems: tiles['systems'].slice(0, 2),
      rightTitle: 'Liquid Ring →',
      rightItems: tiles['vacuum-pumps'].slice(0, 2),
    },
    {
      leftTitle: 'Rotary Lobe →',
      leftItems: tiles['blowers'].slice(0, 2),
      rightTitle: 'Booster →',
      rightItems: tiles['blowers'].slice(2, 4),
    },
  ];

  return (
    <div className="products-page">
      <div className="products-top">
        <div className="container">
          <h1 className="products-title">Our Products</h1>
          <div className="products-tabs" role="tablist" aria-label="Product categories">
            {topTabs.map((t) => (
              <button
                key={t.key}
                type="button"
                className={`products-tab ${activeTab === t.key ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(t.key);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                role="tab"
                aria-selected={activeTab === t.key}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="products-body">
        <div className="container">
          {activeTab !== 'vacuum-pumps' ? (
            <div className="products-grid">
              {tiles[activeTab].map((p) => (
                <div className="product-tile" key={p.name}>
                  <div className="product-tile-imgWrap">
                    <img src={p.image} alt={p.name} className="product-tile-img" />
                  </div>
                  <div className="product-tile-name">{p.name}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="products-portfolio">
              {sections.map((row, idx) => (
                <div className="products-row" key={idx}>
                  <div className="products-col">
                    <div className="products-col-title">{row.leftTitle}</div>
                    <div className="products-col-grid">
                      {row.leftItems.map((p) => (
                        <div className="product-tile" key={p.name}>
                          <div className="product-tile-imgWrap">
                            <img src={p.image} alt={p.name} className="product-tile-img" />
                          </div>
                          <div className="product-tile-name">{p.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="products-col">
                    <div className="products-col-title">{row.rightTitle}</div>
                    <div className="products-col-grid">
                      {row.rightItems.map((p) => (
                        <div className="product-tile" key={p.name}>
                          <div className="product-tile-imgWrap">
                            <img src={p.image} alt={p.name} className="product-tile-img" />
                          </div>
                          <div className="product-tile-name">{p.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const IndustriesPage = () => {
  const items = [
    { title: 'Sugar & Distillery Industries', image: carousel4 },
    { title: 'Chemical & Process Industries', image: heroImg },
    { title: 'Pharmaceutical Industries', image: carousel1 },
    { title: 'Food & Beverages Industries', image: carousel3 },
    { title: 'Textile & Printing Industries', image: carousel2 },
    { title: 'Paper & Packaging Industries', image: carousel4 },
    { title: 'Power & Utilities', image: heroImg },
    { title: 'Mining & Minerals', image: carousel3 },
  ];

  return (
    <div className="industries-page">
      <section className="industries-hero">
        <div className="industries-hero-bg" />
        <div className="container industries-hero-inner">
          <div className="industries-hero-left">
            <h1 className="industries-hero-title">Industries We Serve</h1>
            <p className="industries-hero-subtitle">
              Vacuum pump solutions for diverse industrial applications with a focus on reliability, efficiency, and service support.
            </p>
          </div>
          <div className="industries-hero-right">
            <div className="industries-breadcrumb">Home » Industries We Serve</div>
          </div>
        </div>
      </section>

      <section className="industries-grid-section">
        <div className="container">
          <div className="industries-photo-grid">
            {items.map((it) => (
              <article className="industry-photo-card" key={it.title}>
                <img src={it.image} alt={it.title} className="industry-photo-img" />
                <div className="industry-photo-overlay">
                  <div className="industry-photo-label">{it.title}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-bg" />
        <div className="container contact-hero-inner">
          <div className="contact-hero-left">
            <p className="contact-hero-kicker">LET'S WORK TOGETHER</p>
          </div>
          <div className="contact-hero-right">
            <div className="contact-breadcrumb">Home » Contact Us</div>
          </div>
        </div>
      </section>

      <section className="contact-body">
        <div className="container">
          <h1 className="contact-title">CONTACT US</h1>

          <div className="contact-grid">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <input className="contact-input" placeholder="Name" />
              <input className="contact-input" placeholder="Company Name" />
              <input className="contact-input" placeholder="E - Mail Address" />
              <input className="contact-input" placeholder="City" />
              <input className="contact-input" placeholder="Phone" />
              <textarea className="contact-textarea" placeholder="Requirement" rows={4} />
              <div className="contact-captcha">
                <input className="contact-input" placeholder="Captcha Code" />
                <div className="contact-captcha-box">3124</div>
              </div>
              <button className="contact-submit" type="submit">Submit Now!</button>
            </form>

            <aside className="contact-details">
              <div className="contact-details-card">
                <div className="contact-details-title">DETAILS</div>
                <ul className="contact-details-list">
                  <li>Plot - 255, Phase-I, Gate-5, Nilkanth Mahadev Road, GIDC-Naroda, Ahmedabad - 382 330, Gujarat, India</li>
                  <li>sales@enlarkvacuumpumps.com</li>
                  <li>+91 (79) 22807782</li>
                  <li>+91 99047 07781</li>
                  <li>+91 99047 07785</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <InfoSection />
      <ProductSection />
      <IndustriesSection />
    </>
  );
};

const AboutUsPage = () => {
  return (
    <>
      <AboutUsHero />
      <AboutUsSections />
    </>
  );
};

function App() {
  return (
    <HashRouter>
      <div className="app">
        <ScrollToTop />
        <TopHeader />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <FloatingContact />
      </div>
    </HashRouter>
  );
}

export default App;
