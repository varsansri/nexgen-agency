"use client";
import { useState, useEffect, useCallback } from "react";

export default function HomeTestimonials({ testimonials }) {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="section bg-light">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Testimonials</span>
          <h2 className="text-text-dark mt-3">What Our Clients Say</h2>
        </div>
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center gap-1 text-primary mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <p className="text-lg leading-relaxed italic mb-6">
            &ldquo;{testimonials[current].quote}&rdquo;
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-semibold text-primary text-sm">
              {testimonials[current].initials}
            </div>
            <div className="text-left">
              <div className="font-semibold text-text-dark">{testimonials[current].name}</div>
              <div className="text-text text-sm">{testimonials[current].role}</div>
            </div>
          </div>
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-border"}`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
