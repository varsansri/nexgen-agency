"use client";
import { useEffect, useRef, useState } from "react";

function AnimatedCounter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const step = Math.ceil(target / 40);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) { start = target; clearInterval(timer); }
            setCount(start);
          }, 40);
          observer.disconnect();
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
  <section className="py-16 border-y border-border bg-body relative">
    <div className="container">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="relative">
            <div className="text-3xl md:text-4xl font-bold text-primary">
              <AnimatedCounter target={parseInt(stat.number)} suffix={stat.number.replace(/[0-9]/g, "")} />
            </div>
            <div className="text-text text-sm mt-2">{stat.label}</div>
            {i < stats.length - 1 && <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-border" />}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HomeStats;
