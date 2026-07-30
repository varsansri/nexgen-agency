"use client";
import config from "@config/config.json";
import Link from "next/link";

const Logo = () => {
  const { base_url, title } = config.site;

  return (
    <Link
      href={base_url}
      aria-label={title}
      className="group inline-flex items-center gap-3 select-none py-1 focus:outline-none"
    >
      {/* Brand Icon Badge */}
      <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-purple-600 to-indigo-600 p-[1px] shadow-lg shadow-primary/25 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-primary/40">
        <div className="w-full h-full bg-body/90 backdrop-blur-md rounded-[11px] flex items-center justify-center">
          <svg className="w-5 h-5 text-primary group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
      </div>

      {/* Brand Name Typography */}
      <div className="flex items-center font-primary font-bold text-xl tracking-tight leading-none">
        <span className="text-white group-hover:text-primary transition-colors">NexGen</span>
        <span className="bg-gradient-to-r from-primary via-purple-400 to-indigo-300 bg-clip-text text-transparent ml-1">Digital</span>
      </div>
    </Link>
  );
};

export default Logo;
