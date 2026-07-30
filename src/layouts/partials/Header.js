"use client";

import Logo from "@components/Logo";
import menu from "@config/menu.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import config from "../../config/config.json";

const Header = () => {
  const pathname = usePathname();
  const { main } = menu;
  const [navOpen, setNavOpen] = useState(false);
  const { enable, label, link } = config.nav_button;

  return (
    <header className="sticky top-0 z-50 py-3 px-3 sm:px-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-2xl md:rounded-full bg-body/85 backdrop-blur-xl border border-border/80 shadow-2xl shadow-black/50 relative">
        {/* Left: Brand Logo */}
        <div className="flex items-center shrink-0">
          <Logo />
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {main.map((menuItem, i) => {
            const isActive =
              pathname === menuItem.url ||
              (menuItem.url !== "/" && pathname?.startsWith(menuItem.url));

            return (
              <React.Fragment key={`menu-${i}`}>
                {menuItem.hasChildren ? (
                  <div className="relative group">
                    <span className="cursor-pointer px-4 py-2 text-sm font-semibold text-text-dark/90 hover:text-white hover:bg-primary/10 rounded-full inline-flex items-center transition-all duration-200">
                      {menuItem.name}
                      <svg className="h-4 w-4 ml-1.5 fill-current opacity-70 group-hover:rotate-180 transition-transform duration-200" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                    <div className="absolute top-full left-0 mt-2 w-48 py-2 rounded-2xl bg-body/95 backdrop-blur-xl border border-border shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {menuItem.children.map((child, j) => (
                        <Link
                          key={`children-${j}`}
                          href={child.url}
                          className="block px-4 py-2 text-sm text-text hover:text-primary hover:bg-primary/10 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={menuItem.url}
                    className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                      isActive
                        ? "bg-primary/15 text-primary border border-primary/30 font-bold shadow-sm"
                        : "text-text-dark/90 hover:text-white hover:bg-primary/10"
                    }`}
                  >
                    {menuItem.name}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </nav>

        {/* Right: CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          {enable && (
            <Link
              href={link}
              className="inline-flex items-center justify-center text-xs font-bold uppercase tracking-wider text-white px-5 py-2.5 rounded-full bg-gradient-to-r from-primary via-purple-600 to-indigo-600 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
            >
              <span>{label}</span>
              <span className="ml-1.5 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          id="show-button"
          aria-label="Toggle navigation menu"
          className="flex md:hidden p-2 rounded-xl text-text-dark hover:text-primary hover:bg-primary/10 transition-colors shrink-0"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? (
            <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20">
              <polygon
                points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                transform="rotate(45 10 10)"
              />
            </svg>
          ) : (
            <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20">
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          )}
        </button>

        {/* Mobile Menu Dropdown */}
        {navOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 p-4 rounded-2xl bg-body/95 backdrop-blur-2xl border border-border shadow-2xl md:hidden flex flex-col gap-1.5">
            {main.map((menuItem, i) => {
              const isActive =
                pathname === menuItem.url ||
                (menuItem.url !== "/" && pathname?.startsWith(menuItem.url));
              return (
                <Link
                  key={`mobile-${i}`}
                  href={menuItem.url}
                  onClick={() => setNavOpen(false)}
                  className={`px-4 py-3 text-base font-semibold rounded-xl transition-colors ${
                    isActive
                      ? "bg-primary/15 text-primary font-bold"
                      : "text-text-dark hover:bg-primary/10"
                  }`}
                >
                  {menuItem.name}
                </Link>
              );
            })}
            {enable && (
              <Link
                href={link}
                onClick={() => setNavOpen(false)}
                className="btn btn-primary mt-2 w-full text-center py-3"
              >
                {label} →
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
