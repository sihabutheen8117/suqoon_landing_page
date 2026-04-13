import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Methodology', href: '#methodology' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <div className="navbar__inner">
        <a href="#" className="navbar__logo" id="navbar-logo">
          <div className="navbar__logo-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="8" fill="url(#logo-gradient)" />
              <path d="M8 14C8 10.686 10.686 8 14 8C17.314 8 20 10.686 20 14C20 17.314 17.314 20 14 20" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <circle cx="14" cy="14" r="2" fill="white" />
              <defs>
                <linearGradient id="logo-gradient" x1="0" y1="0" x2="28" y2="28">
                  <stop stopColor="#8B5CF6" />
                  <stop offset="1" stopColor="#a078ff" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="navbar__logo-text">Suqoon.net</span>
        </a>

        <div className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="navbar__link"
              id={`nav-${link.label.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#cta" className="navbar__cta" id="nav-cta" onClick={() => setMobileOpen(false)}>
            Get Started
          </a>
        </div>

        <button
          className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--active' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
          id="navbar-hamburger"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
