"use client";
import config from "@config/config.json";
import Link from "next/link";
import LiquidLogoCanvas from "./LiquidLogoCanvas";

const Logo = ({ src }) => {
  const { base_url, logo, logo_width, logo_height, title } = config.site;
  const logoSrc = src || logo;

  return (
    <Link
      href={base_url}
      className="navbar-brand block py-1"
      aria-label={title}
    >
      <LiquidLogoCanvas
        src={logoSrc}
        alt={title}
        width={parseInt(logo_width) || 200}
        height={parseInt(logo_height) || 48}
      />
    </Link>
  );
};

export default Logo;
