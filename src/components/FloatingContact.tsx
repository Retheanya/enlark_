export function FloatingContact() {
  return (
    <div className="floating-contact">
      <a href="mailto:marketing@enlark.in" className="floating-icon email-circle" title="Email Us">
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
          <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
          <path d="m22 6-10 7L2 6" />
        </svg>
      </a>
      <a href="https://wa.me/917338284639" target="_blank" rel="noopener noreferrer" className="floating-icon whatsapp-circle" title="WhatsApp Chat">
        <svg width="24" height="24" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
          <path d="M19.11 17.56c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.25-.24-.58-.48-.5-.68-.51h-.58c-.2 0-.52.07-.8.37-.28.3-1.05 1.02-1.05 2.48 0 1.46 1.08 2.87 1.23 3.07.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.41.25-.7.25-1.3.17-1.41-.07-.11-.27-.17-.57-.32zM16 3.2c-7.05 0-12.8 5.58-12.8 12.44 0 2.2.6 4.36 1.75 6.25L3.2 28.8l7.2-1.6c1.83 1 3.9 1.52 5.6 1.52 7.05 0 12.8-5.58 12.8-12.44S23.05 3.2 16 3.2zm0 22.4c-1.55 0-3.53-.56-5.08-1.6l-.36-.24-4.22.94.9-4.02-.24-.39c-1-1.6-1.53-3.43-1.53-5.29C5.47 9.56 10.28 5.6 16 5.6s10.53 3.96 10.53 10.4S21.72 25.6 16 25.6z" />
        </svg>
      </a>
      <a href="tel:+917338284639" className="floating-icon phone-circle" title="Call Us">
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
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>
    </div>
  );
}
