"use client";
import { useEffect, useRef, useState } from "react";

function AnimatedCounter({ target, suffix = "" }) {
  const num = parseInt(target);
  const [count, setCount] = useState(num);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = Math.ceil(num / 30);
          setCount(0);
          const timer = setInterval(() => {
            start += step;
            if (start >= num) { start = num; clearInterval(timer); }
            setCount(start);
          }, 40);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const HomeStats = ({ stats }) => (
  <section className="py-12 bg-light/60 border-y border-border/60 relative">
    <div className="container">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="p-6 rounded-2xl bg-body/60 border border-border/70 backdrop-blur-sm hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
            <div className="text-4xl md:text-5xl font-extrabold font-primary bg-gradient-to-r from-white via-primary to-purple-300 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
              <AnimatedCounter target={parseInt(stat.number)} suffix={stat.number.replace(/[0-9]/g, "")} />
            </div>
            <div className="text-text/90 text-sm font-semibold mt-3 tracking-wide">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HomeStats;
