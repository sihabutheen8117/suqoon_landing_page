import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#" className="footer__logo">
              <div className="footer__logo-icon">
                <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                  <rect width="28" height="28" rx="8" fill="url(#footer-logo-gradient)" />
                  <path d="M8 14C8 10.686 10.686 8 14 8C17.314 8 20 10.686 20 14C20 17.314 17.314 20 14 20" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="14" cy="14" r="2" fill="white" />
                  <defs>
                    <linearGradient id="footer-logo-gradient" x1="0" y1="0" x2="28" y2="28">
                      <stop stopColor="#8B5CF6" />
                      <stop offset="1" stopColor="#a078ff" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="footer__logo-text">Suqoon.net</span>
            </a>
            <p className="footer__tagline body-md">Crafted for digital serenity.</p>
          </div>

          <div className="footer__links-group">
            <div className="footer__links-col">
              <h4 className="footer__links-title">Product</h4>
              <a href="#features" className="footer__link">Features</a>
              <a href="#methodology" className="footer__link">Methodology</a>
              <a href="#pricing" className="footer__link">Pricing</a>
            </div>
            <div className="footer__links-col">
              <h4 className="footer__links-title">Company</h4>
              <a href="#" className="footer__link">About</a>
              <a href="#" className="footer__link">Careers</a>
              <a href="#" className="footer__link">Blog</a>
            </div>
            <div className="footer__links-col">
              <h4 className="footer__links-title">Legal</h4>
              <a href="#" className="footer__link">Privacy Policy</a>
              <a href="#" className="footer__link">Terms of Service</a>
              <a href="#" className="footer__link">Contact Us</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">© 2026 Suqoon.net. Crafted for digital serenity.</p>
          <div className="footer__socials">
            <a href="#" className="footer__social" aria-label="Twitter" id="social-twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="footer__social" aria-label="LinkedIn" id="social-linkedin">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
              </svg>
            </a>
            <a href="#" className="footer__social" aria-label="GitHub" id="social-github">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
