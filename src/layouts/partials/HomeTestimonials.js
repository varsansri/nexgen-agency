"use client";
import { useState, useEffect, useCallback, useRef } from "react";

const HomeTestimonials = ({ testimonials }) => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const containerRef = useRef(null);
  const total = testimonials.length;

  const goTo = useCallback((index) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(index);
    setTimeout(() => setAnimating(false), 400);
  }, [animating]);

  const next = useCallback(() => goTo((current + 1) % total), [current, total, goTo]);
  const prev = useCallback(() => goTo((current - 1 + total) % total), [current, total, goTo]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!animating) next();
    }, 6000);
    return () => clearInterval(timer);
  }, [animating, next]);

  return (
    <section className="section bg-light relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="container relative">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Testimonials</span>
          <h2 className="mt-3">What Our Clients Say</h2>
        </div>
        <div className="max-w-3xl mx-auto" ref={containerRef}>
          <div className="text-center px-4"
            style={{
              opacity: animating ? 0 : 1,
              transform: animating ? "translateY(8px)" : "translateY(0)",
              transition: "opacity 250ms var(--ease-out), transform 300ms var(--ease-out)",
            }}
          >
            <div className="flex justify-center gap-1 text-primary mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-lg leading-relaxed italic mb-8">&ldquo;{testimonials[current].quote}&rdquo;</p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary transition-colors duration-300">
                {testimonials[current].initials}
              </div>
              <div className="text-left">
                <div className="font-semibold">{testimonials[current].name}</div>
                <div className="text-text text-sm">{testimonials[current].role}</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8 gap-4">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary"
              style={{ transition: "border-color 150ms var(--ease-fast), color 150ms var(--ease-fast), transform 100ms var(--ease-fast)" }}
              onMouseDown={e => e.currentTarget.style.transform = "scale(0.95)"}
              onMouseUp={e => e.currentTarget.style.transform = "scale(1)"}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => goTo(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? "24px" : "10px",
                    height: "10px",
                    backgroundColor: i === current ? "rgb(124, 58, 237)" : "rgb(30, 30, 58)",
                  }}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary"
              style={{ transition: "border-color 150ms var(--ease-fast), color 150ms var(--ease-fast), transform 100ms var(--ease-fast)" }}
              onMouseDown={e => e.currentTarget.style.transform = "scale(0.95)"}
              onMouseUp={e => e.currentTarget.style.transform = "scale(1)"}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
