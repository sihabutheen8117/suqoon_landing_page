import { useEffect, useRef } from 'react';
import './Features.css';

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    title: 'Cognitive Load Reduction',
    description: 'Stop the context-switching tax. Suqoon unifies tasks, docs, and communication into a single flow, reducing mental fatigue and keeping your team in the zone.',
    color: 'var(--accent-primary)',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Focus-First Notifications',
    description: 'Traditional tools are built to distract. Suqoon uses intelligent batching to deliver notifications only when you are between focus sessions, not during them.',
    color: 'var(--accent-secondary)',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'Privacy by Default',
    description: 'Your thoughts and work belong to you. We employ end-to-end encryption for every document and message, ensuring your intellectual property remains private.',
    color: 'var(--accent-tertiary)',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: 'Asynchronous Collaboration',
    description: 'Kill the "quick sync" meeting. Our asynchronous-first tools allow teams to provide high-fidelity feedback without requiring real-time presence.',
    color: 'var(--primary)',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a8 8 0 0 0-8 8c0 6 8 12 8 12s8-6 8-12a8 8 0 0 0-8-8z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: 'Guardian AI',
    description: 'An AI that works for you, not against you. It summarizes long threads, surfaces critical blockers, and drafts reports so you can spend your energy on creative work.',
    color: 'var(--accent-primary)',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5z" />
        <path d="M14 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5z" />
        <path d="M4 15a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4z" />
        <path d="M14 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6z" />
      </svg>
    ),
    title: 'Deep Work Environment',
    description: 'A UI that recedes into the background. Minimalist by design, Suqoon puts your work front and center, removing visual clutter and distractions.',
    color: 'var(--accent-secondary)',
  },
];

const Features = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('features__card--visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const cards = sectionRef.current?.querySelectorAll('.features__card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="features section" id="features" ref={sectionRef}>
      <div className="section-inner">
        <div className="features__header">
          <span className="label-md features__label">Features</span>
          <h2 className="headline-lg">Built Around How Teams Actually Work</h2>
          <p className="body-lg features__desc">
            Every feature exists to solve a real problem — not to pad a comparison chart.
          </p>
        </div>

        <div className="features__grid">
          {features.map((feature, i) => (
            <div
              className="features__card"
              key={feature.title}
              id={`feature-${i}`}
              style={{ '--card-color': feature.color, '--delay': `${i * 0.1}s` }}
            >
              <div className="features__card-icon">
                {feature.icon}
              </div>
              <h3 className="features__card-title">{feature.title}</h3>
              <p className="features__card-desc body-md">{feature.description}</p>
              <div className="features__card-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
