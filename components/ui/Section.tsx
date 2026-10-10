import React from "react";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  children: React.ReactNode;
  className?: string;
  bgColor?: "bg" | "surface" | "secondary" | "dark" | "accent" | "transparent";
  padding?: "large" | "medium" | "small" | "none";
  as?: "section" | "header" | "footer" | "div";
}

const bgColorClasses = {
  bg: "bg-bg text-ink",
  surface: "bg-surface text-ink",
  secondary: "bg-secondary text-ink",
  dark: "bg-dark text-on-dark",
  accent: "bg-accent text-on-dark",
  transparent: "bg-transparent text-ink",
};

const paddingClasses = {
  large: "py-16 sm:py-20 lg:py-28",
  medium: "py-12 sm:py-16 lg:py-20",
  small: "py-6 sm:py-8 lg:py-10",
  none: "py-0",
};

export function Section({
  id,
  children,
  className = "",
  bgColor = "transparent",
  padding = "large",
  as: Component = "section",
  ...props
}: SectionProps) {
  return (
    <Component
      id={id}
      className={`relative w-full ${bgColorClasses[bgColor]} ${paddingClasses[padding]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Section;
