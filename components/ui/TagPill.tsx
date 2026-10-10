import React from "react";

export interface TagPillProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function TagPill({ children, className = "", ...props }: TagPillProps) {
  return (
    <div
      className={`flex items-center justify-center text-center px-4 py-3 sm:py-3.5 border border-border/70 bg-surface text-ink text-xs sm:text-[13px] font-body uppercase tracking-[0.15em] font-normal transition-colors duration-200 hover:border-primary/40 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default TagPill;
