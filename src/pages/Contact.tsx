import { COMPANY } from '../config/company';

export function ContactPage() {
  return (
    <div className="contact-premium-page" style={{ backgroundColor: '#f8f9fa', minHeight: 'auto', paddingTop: '40px', paddingBottom: '30px' }}>
      <div className="container" style={{ maxWidth: '1100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 650px) 1fr', gap: '40px', position: 'relative' }}>
          
          {/* Left Side: Contact Form */}
          <div className="contact-form-container">
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
              <div style={{ width: '24px', height: '24px', backgroundColor: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
              </div>
              <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#333', margin: 0, fontFamily: "'Montserrat', sans-serif" }}>Contact Form</h2>
            </div>

            <form 
              className="enlark-premium-form" 
              style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('Name');
                const email = formData.get('Email');
                const phone = formData.get('Phone');
                const company = formData.get('Company');
                const message = formData.get('Message');
                
                const mailtoUrl = `mailto:${COMPANY.email}?subject=New Inquiry from ${name}&body=Name: ${name}%0D%0APhone: ${phone}%0D%0AEmail: ${email}%0D%0ACompany: ${company}%0D%0AMessage: ${message}`;
                window.location.href = mailtoUrl;
              }}
            >
              
              <div className="form-group" style={{ margin: '18px 0' }}>
                <label style={{ display: 'block', fontWeight: '700', marginBottom: '5px' }}>Name <span style={{ color: '#ff5722' }}>*</span></label>
                <input name="Name" type="text" style={{ width: '100%', border: 'none', borderBottom: '2px solid #ddd', padding: '8px 0', outline: 'none', backgroundColor: 'transparent' }} required />
              </div>

              <div className="form-group" style={{ margin: '18px 0' }}>
                <label style={{ display: 'block', fontWeight: '700', marginBottom: '5px' }}>Phone Number <span style={{ color: '#ff5722' }}>*</span></label>
                <input name="Phone" type="tel" style={{ width: '100%', border: 'none', borderBottom: '2px solid #ddd', padding: '8px 0', outline: 'none', backgroundColor: 'transparent' }} required />
              </div>

              <div className="form-group" style={{ margin: '18px 0' }}>
                <label style={{ display: 'block', fontWeight: '700', marginBottom: '5px' }}>Email <span style={{ color: '#ff5722' }}>*</span></label>
                <input name="Email" type="email" style={{ width: '100%', border: 'none', borderBottom: '2px solid #ddd', padding: '8px 0', outline: 'none', backgroundColor: 'transparent' }} required />
              </div>

              <div className="form-group" style={{ margin: '18px 0' }}>
                <label style={{ display: 'block', fontWeight: '700', marginBottom: '5px' }}>Company <span style={{ color: '#ff5722' }}>*</span></label>
                <input name="Company" type="text" style={{ width: '100%', border: 'none', borderBottom: '2px solid #ddd', padding: '8px 0', outline: 'none', backgroundColor: 'transparent' }} required />
              </div>

              <div className="form-group" style={{ margin: '18px 0' }}>
                <label style={{ display: 'block', fontWeight: '700', marginBottom: '5px' }}>Message <span style={{ color: '#ff5722' }}>*</span></label>
                <textarea name="Message" rows={4} style={{ width: '100%', border: 'none', borderBottom: '2px solid #ddd', padding: '8px 0', outline: 'none', backgroundColor: 'transparent', transition: 'border-color 0.3s' }} required />
              </div>

              <button type="submit" style={{ 
                alignSelf: 'flex-start', 
                backgroundColor: '#00838F', 
                color: 'white', 
                border: 'none', 
                padding: '12px 35px', 
                fontWeight: '700', 
                cursor: 'pointer',
                marginTop: '10px',
                transition: 'background-color 0.3s'
              }}>
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side: Teal Panel + Info Cards */}
          <div className="contact-info-panel" style={{ position: 'relative' }}>
            {/* The Thick Teal Sidebar Background */}
            <div style={{ 
              position: 'absolute', 
              top: '40px', 
              right: '-60px', 
              width: '320px', 
              bottom: '40px', /* Uses bottom instead of height to respect container padding */
              backgroundColor: '#00838F', 
              zIndex: 0 
            }} />

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '15px', paddingLeft: '30px' }}>
              
              {/* Phone Card */}
              <a href={`tel:${COMPANY.phoneDisplay.replace(/\s/g, '')}`} style={{ textDecoration: 'none' }}>
                <div className="info-card-premium" style={{ backgroundColor: 'white', padding: '25px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', display: 'grid', gridTemplateColumns: '40px 1fr', gap: '15px', alignItems: 'center' }}>
                  <div style={{ color: '#333' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <h3 style={{ fontWeight: '700', color: '#333', marginBottom: '5px' }}>Phone call</h3>
                    <p style={{ fontWeight: '800', color: '#ff5722', margin: 0 }}>{COMPANY.phoneDisplay}</p>
                  </div>
                </div>
              </a>

              {/* Email Card */}
              <a href={`mailto:${COMPANY.email}`} style={{ textDecoration: 'none' }}>
                <div className="info-card-premium" style={{ backgroundColor: 'white', padding: '25px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', display: 'grid', gridTemplateColumns: '40px 1fr', gap: '15px', alignItems: 'center' }}>
                  <div style={{ color: '#333' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <h3 style={{ fontWeight: '700', color: '#333', marginBottom: '5px' }}>E-mail</h3>
                    <p style={{ fontWeight: '800', color: '#ff5722', margin: 0 }}>{COMPANY.email}</p>
                  </div>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a href={`https://wa.me/${COMPANY.phoneDisplay.replace(/[\s+]/g, '')}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <div className="info-card-premium" style={{ backgroundColor: 'white', padding: '25px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', display: 'grid', gridTemplateColumns: '40px 1fr', gap: '15px', alignItems: 'center' }}>
                  <div style={{ color: '#333' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  </div>
                  <div>
                    <h3 style={{ fontWeight: '700', color: '#333', marginBottom: '5px' }}>WhatsApp</h3>
                    <p style={{ fontWeight: '600', color: '#ff5722', margin: 0 }}>Chat with us →</p>
                  </div>
                </div>
              </a>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
