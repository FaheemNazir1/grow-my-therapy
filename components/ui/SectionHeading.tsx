import React from "react";

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: "h2" | "h3";
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
}

const levelClasses = {
  h2: "text-3xl sm:text-4xl lg:text-[44px] font-heading font-light leading-[1.2] text-ink",
  h3: "text-2xl sm:text-3xl lg:text-4xl font-heading font-light leading-[1.25] text-ink",
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export function SectionHeading({
  level = "h2",
  children,
  className = "",
  align = "left",
  ...props
}: SectionHeadingProps) {
  const Component = level;
  return (
    <Component
      className={`${levelClasses[level]} ${alignClasses[align]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export default SectionHeading;
