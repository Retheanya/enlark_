import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

export function Navbar() {
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
      <div className="container">
        <div className="navbar-inner">
          <div className="logo-section">
            <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <img src={logo} alt="Enlark Logo" className="logo" />
              <div className="company-branding">
                <span className="brand-name">ENLARK ENTERPRISES PVT. LTD.</span>
                <span className="brand-iso">(AN ISO 9001: 2015 COMPANY)</span>
              </div>
            </NavLink>
          </div>

          <button
            type="button"
            className={`nav-hamburger ${isMenuOpen ? 'open' : ''}`}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            {isMenuOpen ? (
              <svg viewBox="0 0 24 24" width="28" height="28" stroke="#000000" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="28" height="28" stroke="#000000" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>

          <div className="nav-links-container">
            <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
              <li>
                <NavLink to="/" end onClick={() => setIsMenuOpen(false)}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/about-us" onClick={() => setIsMenuOpen(false)}>About Us</NavLink>
              </li>
              <li>
                <NavLink to="/products" onClick={() => setIsMenuOpen(false)}>Our Products</NavLink>
              </li>
              <li>
                <NavLink to="/industries" onClick={() => setIsMenuOpen(false)}>Industries We Serve</NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className={`nav-mobile-backdrop ${isMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden={!isMenuOpen}
      />
    </nav>
  );
}

