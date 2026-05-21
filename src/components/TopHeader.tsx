import { COMPANY } from '../config/company';

export function TopHeader() {
  return (
    <div className="top-header">
      <div className="container flex-end">
        <div className="contact-info">
          <div className="contact-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>{COMPANY.phoneDisplay}</span>
          </div>
          
          <div className="contact-item email-dropdown-wrapper">
            <div className="email-trigger">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <span className="email-trigger-text">Emails</span>
              <svg className="dropdown-arrow" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
            
            <div className="email-dropdown-menu">
              <a href={`mailto:${COMPANY.emailSales}`} className="email-dropdown-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#089AD3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span className="email-address">{COMPANY.emailSales}</span>
              </a>
              <a href={`mailto:${COMPANY.emailViswa}`} className="email-dropdown-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#089AD3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span className="email-address">{COMPANY.emailViswa}</span>
              </a>
              <a href={`https://${COMPANY.website}`} target="_blank" rel="noopener noreferrer" className="email-dropdown-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#089AD3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                <span className="email-address">{COMPANY.website}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

