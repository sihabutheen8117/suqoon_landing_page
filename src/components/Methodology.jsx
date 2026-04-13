import { useEffect, useRef } from 'react';
import './Methodology.css';

const steps = [
  {
    step: '01',
    title: 'Audit the Noise',
    description: 'Connect your current toolstack — Slack, Jira, Notion, or Asana. Our "Quiet Migration" tool maps your active projects without triggering a single notification to your team.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Design Your Silence',
    description: 'Configure focus hours and notification batches. Suqoon learns your team’s peak performance times and automatically shields those blocks from non-urgent interruptions.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 3 21 3 21 8" />
        <line x1="4" y1="20" x2="21" y2="3" />
        <polyline points="21 16 21 21 16 21" />
        <line x1="15" y1="15" x2="21" y2="21" />
        <line x1="4" y1="4" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Restore Deep Work',
    description: 'Ship high-impact work with Guardian AI handling the administrative overhead. Experience the tranquility of a workspace that values your attention as much as you do.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

const Methodology = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('methodology__step--visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = sectionRef.current?.querySelectorAll('.methodology__step');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="methodology section" id="methodology" ref={sectionRef}>
      <div className="methodology__aura" />
      <div className="section-inner">
        <div className="methodology__header">
          <span className="label-md methodology__label">How It Works</span>
          <h2 className="headline-lg">Live in 3 Steps, Not 3 Months.</h2>
        </div>

        <div className="methodology__timeline">
          <div className="methodology__line" />
          {steps.map((step, i) => (
            <div
              className="methodology__step"
              key={step.step}
              id={`methodology-step-${i}`}
              style={{ '--delay': `${i * 0.2}s` }}
            >
              <div className="methodology__step-number">
                <span>{step.step}</span>
              </div>
              <div className="methodology__step-content">
                <div className="methodology__step-icon">{step.icon}</div>
                <h3 className="methodology__step-title">{step.title}</h3>
                <p className="methodology__step-desc body-md">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
