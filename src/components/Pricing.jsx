import { useEffect, useRef } from 'react';
import './Pricing.css';

const plans = [
  {
    name: 'Clarity',
    price: '$49',
    period: '/mo',
    description: 'For small teams finding their flow.',
    features: [
      'Up to 5 Sanctuary Seats',
      'Core Clarity Modules',
      '24h Support Turnaround',
    ],
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    name: 'Serenity',
    price: '$129',
    period: '/mo',
    description: 'For organizations scaling with purpose.',
    features: [
      'Unlimited Sanctuary Seats',
      'Full Module Library',
      'Dedicated Success Manager',
      'API Access & Integrations',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Sovereignty',
    price: 'Custom',
    period: '',
    description: 'For enterprises demanding absolute control.',
    features: [
      'Bespoke Module Dev',
      'On-Premise Hosting',
      'White-Glove Migration',
      'All Serenity Features',
    ],
    cta: 'Contact Sales',
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
          <h2 className="headline-lg">Invest in Stability</h2>
          <p className="body-lg pricing__desc">
            Transparent pricing for organizations of every scale.
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
