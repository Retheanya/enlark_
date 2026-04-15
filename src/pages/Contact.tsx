import { COMPANY } from '../config/company';

export function ContactPage() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-bg" />
        <div className="container contact-hero-inner">
          <div className="contact-hero-left">
            <p className="contact-hero-kicker">LET&apos;S WORK TOGETHER</p>
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
              <button className="contact-submit" type="submit">
                Submit Now!
              </button>
            </form>

            <aside className="contact-details">
              <div className="contact-details-card">
                <div className="contact-details-title">DETAILS</div>
                <ul className="contact-details-list">
                  <li>{COMPANY.address}</li>
                  <li>{COMPANY.email}</li>
                  <li>{COMPANY.phoneDisplay}</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

