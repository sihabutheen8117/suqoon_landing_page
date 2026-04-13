import { useEffect, useRef, useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    quote: "Our engineers were drowning in Slack notifications. Since moving to Suqoon, the constant 'ping' anxiety has vanished. We've seen a 30% increase in PR throughput simply because our team can finally stay in deep work for hours at a time.",
    name: 'Sarah Chen',
    role: 'Director of Engineering, Velo Systems',
    avatar: 'SC',
  },
  {
    quote: "We consolidated four tools into one, but the real ROI was the mental space it cleared for our product managers. Suqoon's Guardian AI handles the status reporting that used to take up my entire Monday morning.",
    name: 'Marcus Thorne',
    role: 'Chief Product Officer, Aura Health',
    avatar: 'MT',
  },
  {
    quote: "Transitioning a 60-person agency to a new tool is usually a nightmare. Suqoon was the first tool where the team actually thanked us for the switch. It's not just another app; it's a better way to work.",
    name: 'Elena Rodriguez',
    role: 'Head of Operations, Studio Flux',
    avatar: 'ER',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials section" id="testimonials" ref={sectionRef}>
      <div className="section-inner">
        <div className="testimonials__header">
          <span className="label-md testimonials__label">Testimonials</span>
          <h2 className="headline-lg">What Teams Are Saying</h2>
          <p className="body-lg testimonials__desc">
            From startups to scale-ups, here's how Suqoon changed daily work.
          </p>
        </div>

        <div className="testimonials__carousel">
          {testimonials.map((t, i) => (
            <div
              className={`testimonials__card ${i === activeIndex ? 'testimonials__card--active' : ''}`}
              key={t.name}
              id={`testimonial-${i}`}
            >
              <div className="testimonials__card-quote">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.15">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
                <p className="body-lg">{t.quote}</p>
              </div>
              <div className="testimonials__card-author">
                <div className="testimonials__card-avatar">{t.avatar}</div>
                <div>
                  <p className="testimonials__card-name">{t.name}</p>
                  <p className="testimonials__card-role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials__dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`testimonials__dot ${i === activeIndex ? 'testimonials__dot--active' : ''}`}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              id={`testimonial-dot-${i}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
