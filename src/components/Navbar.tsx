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
          <div className="logo-section" style={{ marginLeft: '-45px' }}>
            <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <img src={logo} alt="Enlark Logo" className="logo" />
              <div className="company-branding">
                <span className="brand-name">Enlark Enterprises Private Limited</span>
                <span className="brand-iso">(an ISO 9001: 2015 COMPANY)</span>
              </div>
            </NavLink>
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

