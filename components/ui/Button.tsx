import React from "react";
import Link from "next/link";

export type ButtonVariant = "text-underline" | "solid" | "outline-pill" | "outline-oval";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  // Underline is a background gradient so it can retract right-to-left on hover
  // (and regrow on leave) while the text itself stays still.
  "text-underline":
    "inline-block pb-2 text-ink text-[12.75px] lg:text-[clamp(12.75px,0.9vw,17px)] font-body uppercase tracking-[0.12em] font-normal bg-[linear-gradient(var(--color-primary),var(--color-primary))] bg-no-repeat bg-[position:0_100%] bg-[size:100%_1px] hover:bg-[size:0%_1px] focus-visible:bg-[size:100%_1px] transition-[background-size] duration-500 ease-out",
  solid:
    "inline-flex items-center justify-center px-6 py-3.5 bg-primary text-on-dark text-xs font-body uppercase tracking-[0.12em] font-medium hover:bg-ink/80 transition-colors duration-200",
  "outline-pill":
    "inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-primary text-primary text-xs font-body uppercase tracking-[0.12em] font-medium hover:bg-primary hover:text-on-dark transition-all duration-200",
  // Elliptical outline used by the header CONTACT button
  "outline-oval":
    "inline-flex items-center justify-center h-[clamp(44px,3vw,58px)] px-[clamp(20px,1.35vw,28px)] rounded-[50%] border border-primary text-primary text-[13px] lg:text-[clamp(13px,0.86vw,17px)] font-body uppercase tracking-[0.1em] font-normal hover:bg-primary hover:text-on-dark transition-colors duration-200",
};

export function Button({
  variant = "text-underline",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses = `cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
}

export default Button;
