import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { COMPANY } from '../config/company';

function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: '#d8d8d8', borderTop: '1px solid #e1e4e8' }}>
      <div className="container footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1.4fr 1.2fr', gap: '30px', paddingBottom: '40px' }}>
        <div className="footer-col about-col">
          <div className="footer-logo">
            <img src={logo} alt="Enlark Enterprises Private Limited Logo" className="logo-white" />
          </div>
          <p className="footer-desc">
            ENLARK ENTERPRISES - With the team of Engineer-Directors, Technical, Marketing and Management personnels, is on the wheels of targetted success and achievements.
          </p>
        </div>

        <div className="footer-col">
          <h3 className="footer-header">Quick Links</h3>
          <ul className="footer-links">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about-us">About Us</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/industries">Industries We Serve</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-header">Reach Us</h3>
          <ul className="footer-address">
            <li>
              <div className="icon-wrap" style={{ color: '#089ADE' }}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                </svg>
              </div>
              <span>{COMPANY.address}</span>
            </li>
            <li>
              <div className="icon-wrap" style={{ color: '#089ADE' }}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <span>{COMPANY.phoneDisplay}</span>
            </li>
            <li>
              <div className="icon-wrap" style={{ color: '#089ADE' }}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10Z" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <span>{COMPANY.email}</span>
            </li>
            <li>
              <div className="icon-wrap" style={{ color: '#089ADE' }}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <span>{COMPANY.website}</span>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <div className="footer-map-container">
            <iframe
              src={COMPANY.mapEmbedSrc}
              width="100%"
              height="240"
              style={{ border: 'none', borderRadius: '0' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p className="copyright-text">{`${COMPANY.nameShort} © 2026 All Rights Reserved`}</p>
          <p className="credits-text">
            Made With <span className="heart-icon">❤</span> By <a href="https://www.technovuz.com" target="_blank" rel="noopener noreferrer" className="technovuz-name">Technovuz</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
