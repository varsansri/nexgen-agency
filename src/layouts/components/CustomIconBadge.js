"use client";
import React from "react";
import {
  FiSearch,
  FiTarget,
  FiLayout,
  FiCode,
  FiSend,
  FiTrendingUp,
  FiShoppingBag,
  FiActivity,
  FiBookOpen,
  FiFeather,
  FiPieChart,
  FiSmartphone,
  FiCpu,
  FiLayers,
  FiShield,
  FiZap,
  FiGlobe,
  FiAward
} from "react-icons/fi";

const ICON_MAP = {
  search: FiSearch,
  target: FiTarget,
  layout: FiLayout,
  code: FiCode,
  send: FiSend,
  trending: FiTrendingUp,
  shopping: FiShoppingBag,
  activity: FiActivity,
  book: FiBookOpen,
  feather: FiFeather,
  piechart: FiPieChart,
  smartphone: FiSmartphone,
  cpu: FiCpu,
  layers: FiLayers,
  shield: FiShield,
  zap: FiZap,
  globe: FiGlobe,
  award: FiAward
};

export default function CustomIconBadge({ icon = "code", size = "md" }) {
  const IconComponent = ICON_MAP[icon.toLowerCase()] || FiZap;

  const sizeClasses = {
    sm: "w-10 h-10 text-base rounded-xl",
    md: "w-14 h-14 text-xl rounded-2xl",
    lg: "w-16 h-16 text-2xl rounded-2xl"
  };

  return (
    <div className={`relative group inline-flex items-center justify-center ${sizeClasses[size] || sizeClasses.md} shrink-0`}>
      {/* Ambient Glow Aura */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-600 to-indigo-600 blur-lg opacity-40 group-hover:opacity-75 group-hover:scale-110 transition-all duration-300 rounded-2xl -z-10" />

      {/* Dual-Tone Glass Container */}
      <div className="w-full h-full bg-body/85 backdrop-blur-md border border-white/15 group-hover:border-primary/50 flex items-center justify-center text-primary group-hover:text-white transition-all duration-300 shadow-xl group-hover:scale-105 rounded-inherit">
        <IconComponent className="transition-transform duration-300 group-hover:scale-110" />
      </div>
    </div>
  );
}
