import { useEffect, useRef, useState } from 'react';
import './Hero.css';

const AnimatedCounter = ({ target, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const numTarget = parseInt(target);

          const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4); // ease-out quart
            setCount(Math.floor(numTarget * eased));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Hero = () => {
  const heroRef = useRef(null);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Breathes.';

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < fullText.length) {
          setTypedText(fullText.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }, 800);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty('--mouse-x', `${x}%`);
      el.style.setProperty('--mouse-y', `${y}%`);
    };

    el.addEventListener('mousemove', handleMouseMove);
    return () => el.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      {/* Morphing gradient blobs */}
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />
      <div className="hero__blob hero__blob--3" />

      {/* Animated rings */}
      <div className="hero__rings">
        <div className="hero__ring hero__ring--1" />
        <div className="hero__ring hero__ring--2" />
        <div className="hero__ring hero__ring--3" />
      </div>

      {/* Grid background */}
      <div className="hero__grid" />

      {/* Floating particles */}
      <div className="hero__floating">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`hero__float-dot hero__float-dot--${i + 1}`} />
        ))}
      </div>

      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          <span className="hero__badge-text">Redefining Digital Environments</span>
        </div>

        <h1 className="hero__title display-lg">
          <span className="hero__title-line hero__title-line--1">Software That</span>
          <br />
          <span className="hero__title-gradient hero__title-line hero__title-line--2">
            {typedText}
            <span className="hero__cursor">|</span>
          </span>
        </h1>

        <p className="hero__subtitle body-lg">
          Reject the frantic clutter of legacy platforms. Suqoon.net delivers
          high-performance software environments designed for clarity,
          pace, and absolute control.
        </p>

        <div className="hero__actions">
          <a href="#cta" className="hero__btn hero__btn--primary magnetic-btn" id="hero-cta-primary">
            <span className="hero__btn-text">Start Free Trial</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="hero__btn-shine" />
          </a>
          <a href="#methodology" className="hero__btn hero__btn--secondary" id="hero-cta-secondary">
            <span>Learn How It Works</span>
          </a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-value">
              <AnimatedCounter target="200" suffix="+" />
            </span>
            <span className="hero__stat-label">Elite Organizations</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-value">
              <AnimatedCounter target="40" suffix="%" />
            </span>
            <span className="hero__stat-label">Less Cognitive Load</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-value">
              <AnimatedCounter target="60" suffix="fps" />
            </span>
            <span className="hero__stat-label">Fluid Performance</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-indicator">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span className="hero__scroll-text">Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
