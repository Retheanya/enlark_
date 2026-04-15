import { COMPANY } from '../config/company';

export function TechnicalSupportPage() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-bg" />
        <div className="container contact-hero-inner">
          <div className="contact-hero-left">
            <p className="contact-hero-kicker">TECHNICAL SUPPORT</p>
          </div>
          <div className="contact-hero-right">
            <div className="contact-breadcrumb">Home » Technical Support</div>
          </div>
        </div>
      </section>

      <section className="contact-body">
        <div className="container">
          <h1 className="contact-title">TECHNICAL SUPPORT</h1>
          <div className="contact-grid">
            <div className="contact-details-card">
              <div className="contact-details-title">CONTACT</div>
              <ul className="contact-details-list">
                <li>{COMPANY.address}</li>
                <li>{COMPANY.email}</li>
                <li>{COMPANY.phoneDisplay}</li>
              </ul>
            </div>
            <aside className="contact-details">
              <div className="contact-details-card">
                <div className="contact-details-title">HOW WE HELP</div>
                <ul className="contact-details-list">
                  <li>Selection support and sizing guidance</li>
                  <li>Troubleshooting for vacuum performance issues</li>
                  <li>Spare parts and maintenance planning</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

