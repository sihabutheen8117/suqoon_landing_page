import { useEffect, useRef, useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    quote: "Suqoon.net didn't just replace our project manager; it changed our entire internal culture. Work feels like work again, not noise.",
    name: 'Elias Thorne',
    role: 'CEO, Zenith Design',
    avatar: 'ET',
  },
  {
    quote: "The UI is so responsive and clean that our developers actually enjoy documenting their processes. It's truly software that breathes.",
    name: 'Maya Vance',
    role: 'CTO, HyperStream',
    avatar: 'MV',
  },
  {
    quote: 'Finally, a platform that respects the user\'s attention. Minimalist, powerful, and impeccably designed.',
    name: 'Julian Rossi',
    role: 'Lead Strategist, Aura Creative',
    avatar: 'JR',
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
          <h2 className="headline-lg">The Voice of Serenity</h2>
          <p className="body-lg testimonials__desc">
            What our high-performance partners are saying.
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
