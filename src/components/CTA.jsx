import './CTA.css';

const CTA = () => {
  return (
    <section className="cta section" id="cta">
      <div className="cta__aura cta__aura--1" />
      <div className="cta__aura cta__aura--2" />
      <div className="section-inner">
        <div className="cta__container">
          <h2 className="headline-lg cta__title">
            Stop managing tool chaos.<br />
            <span className="cta__title-gradient">Start doing deep work.</span>
          </h2>
          <p className="body-lg cta__desc">
            Join 200+ high-performance teams that have reclaimed their focus with Suqoon.
            Start your 14-day free trial today and experience the tranquility of a focused workspace.
          </p>
          <div className="cta__actions">
            <a href="#" className="cta__btn cta__btn--primary" id="cta-start">
              <span>Begin Your Journey to Calm</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#" className="cta__btn cta__btn--secondary" id="cta-demo">
              View the Deep Work Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
