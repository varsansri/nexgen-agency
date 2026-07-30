"use client";
import config from "@config/config.json";
import Link from "next/link";

const Logo = () => {
  const { base_url, title } = config.site;

  return (
    <Link
      href={base_url}
      aria-label={title}
      className="group inline-flex items-center gap-2.5 select-none py-0.5 focus:outline-none whitespace-nowrap"
    >
      {/* Brand Icon Badge */}
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-primary via-purple-600 to-indigo-600 p-[1px] shadow-lg shadow-primary/25 transition-transform duration-300 group-hover:scale-105 shrink-0">
        <div className="w-full h-full bg-body/90 backdrop-blur-md rounded-[11px] flex items-center justify-center">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
      </div>

      {/* Brand Name Typography */}
      <div className="flex items-center font-primary font-bold text-lg sm:text-xl tracking-tight leading-none whitespace-nowrap">
        <span className="text-white group-hover:text-primary transition-colors">NexGen</span>
        <span className="bg-gradient-to-r from-primary via-purple-400 to-indigo-300 bg-clip-text text-transparent ml-1">Digital</span>
      </div>
    </Link>
  );
};

export default Logo;
