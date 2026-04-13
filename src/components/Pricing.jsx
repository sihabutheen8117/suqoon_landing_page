import { useEffect, useRef } from 'react';
import './Pricing.css';

const plans = [
  {
    name: 'Individual',
    price: '$0',
    period: 'Free Forever',
    description: 'For solo creators who need peace.',
    features: [
      'Unlimited personal boards',
      'Basic Guardian AI assistance',
      'Standard notification batching',
      '1 GB secure storage',
    ],
    cta: 'Get Started Free',
    highlighted: false,
  },
  {
    name: 'Teams',
    price: '$12',
    period: 'per user/mo',
    description: 'For high-performance teams shielding focus.',
    features: [
      'Unlimited team members',
      'Advanced focus-hour controls',
      'Full Guardian AI suite',
      'Asynchronous video integration',
      'Priority team support',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Organization',
    price: 'Custom',
    period: '',
    description: 'For companies building a deep work culture.',
    features: [
      'SSO and advanced security',
      'Data residency controls',
      'Custom SLA and onboarding',
      'Organization-wide focus metrics',
      'Dedicated success manager',
    ],
    cta: 'Talk to Sales',
    highlighted: false,
  },
];

const Pricing = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pricing__card--visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const cards = sectionRef.current?.querySelectorAll('.pricing__card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="pricing section" id="pricing" ref={sectionRef}>
      <div className="section-inner">
        <div className="pricing__header">
          <span className="label-md pricing__label">Pricing</span>
          <h2 className="headline-lg">Simple Pricing That Scales With You</h2>
          <p className="body-lg pricing__desc">
            No per-feature upsells. No surprise AI add-on charges. Every plan includes full AI capabilities.
          </p>
        </div>

        <div className="pricing__grid">
          {plans.map((plan, i) => (
            <div
              className={`pricing__card ${plan.highlighted ? 'pricing__card--highlighted' : ''}`}
              key={plan.name}
              id={`pricing-${plan.name.toLowerCase()}`}
              style={{ '--delay': `${i * 0.15}s` }}
            >
              {plan.highlighted && <div className="pricing__card-badge">Most Popular</div>}
              <div className="pricing__card-header">
                <h3 className="pricing__card-name">{plan.name}</h3>
                <p className="pricing__card-desc body-md">{plan.description}</p>
              </div>
              <div className="pricing__card-price">
                <span className="pricing__card-amount">{plan.price}</span>
                {plan.period && <span className="pricing__card-period">{plan.period}</span>}
              </div>
              <ul className="pricing__card-features">
                {plan.features.map((f) => (
                  <li key={f} className="pricing__card-feature">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8L6.5 11.5L13 5" stroke="var(--accent-tertiary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`pricing__card-cta ${plan.highlighted ? 'pricing__card-cta--primary' : ''}`}
                id={`pricing-cta-${plan.name.toLowerCase()}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
