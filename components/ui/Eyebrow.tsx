import React from "react";

export interface EyebrowProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span" | "div";
}

export function Eyebrow({
  children,
  className = "",
  as: Component = "p",
  ...props
}: EyebrowProps) {
  return (
    <Component
      className={`text-[11px] sm:text-xs font-body uppercase tracking-[0.15em] text-ink font-normal leading-normal ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Eyebrow;
