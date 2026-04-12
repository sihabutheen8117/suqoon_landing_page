import './CTA.css';

const CTA = () => {
  return (
    <section className="cta section" id="cta">
      <div className="cta__aura cta__aura--1" />
      <div className="cta__aura cta__aura--2" />
      <div className="section-inner">
        <div className="cta__container">
          <h2 className="headline-lg cta__title">
            Ready to redefine your<br />
            <span className="cta__title-gradient">digital baseline?</span>
          </h2>
          <p className="body-lg cta__desc">
            Join 200+ elite organizations who have traded chaos for clarity.
            Your first 30 days of serenity are on us.
          </p>
          <div className="cta__actions">
            <a href="#" className="cta__btn cta__btn--primary" id="cta-start">
              <span>Begin Your Journey</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#" className="cta__btn cta__btn--secondary" id="cta-demo">
              Schedule a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
