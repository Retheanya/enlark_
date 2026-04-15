import { COMPANY } from '../config/company';

export function TopHeader() {
  return (
    <div className="top-header">
      <div className="container flex-end">
        <div className="contact-info">
          <span>{COMPANY.phoneDisplay}</span>
          <span>{COMPANY.email}</span>
        </div>
      </div>
    </div>
  );
}

