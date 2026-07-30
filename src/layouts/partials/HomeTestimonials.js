"use client";
import { useState, useEffect, useCallback } from "react";

export default function HomeTestimonials({ testimonials }) {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const total = testimonials.length;

  const goTo = useCallback((index) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(index);
      setFade(true);
    }, 200);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % total);
  }, [current, total, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + total) % total);
  }, [current, total, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="section bg-light py-20 relative overflow-hidden">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Testimonials</span>
          <h2 className="text-text-dark font-bold mt-2">Trusted by Visionary Leaders</h2>
        </div>

        <div className="max-w-3xl mx-auto bg-body border border-border/80 rounded-2xl p-8 md:p-12 shadow-sm relative">
          <div className="absolute top-6 left-8 text-6xl text-primary/10 select-none font-serif leading-none">&ldquo;</div>

          <div className={`transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}>
            <div className="flex justify-center gap-1 text-amber-400 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>

            <p className="text-xl leading-relaxed italic text-text-dark text-center mb-8 font-medium">
              &ldquo;{testimonials[current].quote}&rdquo;
            </p>

            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center font-bold text-primary text-base shadow-inner">
                {testimonials[current].initials}
              </div>
              <div className="text-left">
                <div className="font-bold text-text-dark">{testimonials[current].name}</div>
                <div className="text-text text-sm font-medium">{testimonials[current].role}</div>
              </div>
            </div>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/60">
            <button 
              onClick={prev}
              aria-label="Previous testimonial"
              className="p-2 rounded-full border border-border text-text hover:text-primary hover:border-primary transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-primary" : "w-2.5 bg-border hover:bg-primary/50"}`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={next}
              aria-label="Next testimonial"
              className="p-2 rounded-full border border-border text-text hover:text-primary hover:border-primary transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
