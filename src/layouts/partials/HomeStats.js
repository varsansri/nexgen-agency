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
  <section className="section bg-light">
    <div className="container">
      <div className="row text-center">
        {stats.map((stat, i) => (
          <div key={i} className="col-6 lg:col-3 mb-6 lg:mb-0">
            <div className="text-4xl font-bold text-primary">
              <AnimatedCounter target={parseInt(stat.number)} suffix={stat.number.replace(/[0-9]/g, "")} />
            </div>
            <div className="text-text text-sm mt-2">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HomeStats;
