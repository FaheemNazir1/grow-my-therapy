import React from "react";
import { siteContent } from "@/content/site";

export interface LogoProps {
  size?: "header" | "footer";
  className?: string;
}

const sizeClasses = {
  header: {
    name: "text-[34px] sm:text-[38px] lg:text-[clamp(38px,3.2vw,54px)]",
    tagline: "text-[9px] sm:text-[10px] lg:text-[clamp(10px,0.9vw,16px)]",
  },
  footer: {
    name: "text-[40px] sm:text-[44px] lg:text-[clamp(40px,4.8vw,92px)]",
    tagline: "text-[10px] sm:text-[11px] lg:text-[clamp(11px,1.3vw,25px)]",
  },
};

/** Text-based wordmark: light serif name over a letter-spaced accent tagline. */
export function Logo({ size = "header", className = "" }: LogoProps) {
  const { wordmark } = siteContent.navigation;
  const s = sizeClasses[size];

  return (
    <span className={`inline-flex flex-col items-start leading-none ${className}`}>
      <span
        className={`font-heading font-light tracking-[-0.01em] text-ink whitespace-nowrap ${s.name}`}
      >
        {wordmark.name}
      </span>
      <span
        className={`font-body font-medium uppercase tracking-[0.42em] text-accent whitespace-nowrap mt-[0.35em] pl-[0.5em] ${s.tagline}`}
      >
        {wordmark.tagline}
      </span>
    </span>
  );
}

export default Logo;
