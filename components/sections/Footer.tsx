import React from "react";
import Link from "next/link";
import { siteContent } from "@/content/site";
import { Logo } from "@/components/ui/Logo";

const headingClass =
  "text-[12px] lg:text-[clamp(12px,0.9vw,18px)] font-body uppercase tracking-[0.18em] text-ink font-normal";
const bodyClass =
  "text-sm lg:text-[clamp(14px,1.02vw,20px)] font-body text-ink font-light leading-[1.8]";
const linkClass = `${bodyClass} hover:text-muted transition-colors focus-visible:ring-2 focus-visible:ring-primary`;

export function Footer() {
  const { footer, meta } = siteContent;

  return (
    <footer id="contact" className="w-full flex flex-col bg-surface">
      {/* Main footer: brand + three link columns, positioned in proportion to the reference */}
      <div className="px-5 sm:px-8 lg:px-[6.2vw] pt-14 sm:pt-16 lg:pt-[5.2vw] pb-14 sm:pb-16 lg:pb-[9.5vw]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[35.7vw_15vw_18.7vw_1fr] gap-12 lg:gap-0">
          {/* Brand + welcome message */}
          <div className="flex flex-col items-start gap-8 lg:gap-[2.2vw] sm:col-span-2 lg:col-span-1 lg:pr-[4vw]">
            <Link href="#top" className="block" aria-label={meta.siteName}>
              <Logo size="footer" />
            </Link>
            <p className={`${bodyClass} max-w-[32rem] lg:max-w-[26vw] lg:leading-[1.95]`}>
              {footer.brandMessage}
            </p>
          </div>

          {/* NAVIGATE */}
          <div className="flex flex-col gap-4 lg:gap-[1.7vw]">
            <h4 className={headingClass}>{footer.navHeading}</h4>
            <ul className="flex flex-col">
              {footer.navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SPECIALTIES */}
          <div className="flex flex-col gap-4 lg:gap-[1.7vw]">
            <h4 className={headingClass}>{footer.specialtiesHeading}</h4>
            <ul className="flex flex-col">
              {footer.specialtyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col gap-4 lg:gap-[1.7vw]">
            <h4 className={headingClass}>{footer.contactHeading}</h4>
            <address className={`not-italic flex flex-col gap-4 lg:gap-[1.2vw] ${bodyClass}`}>
              <div>
                {footer.contact.addressLines.map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
                {footer.contact.email && (
                  <div>
                    <a href={`mailto:${footer.contact.email}`} className="hover:text-muted transition-colors break-words">
                      {footer.contact.email}
                    </a>
                  </div>
                )}
                {footer.contact.phone && (
                  <div>
                    <a
                      href={`tel:${footer.contact.phone.replace(/[^0-9+]/g, "")}`}
                      className="hover:text-muted transition-colors"
                    >
                      {footer.contact.phone}
                    </a>
                  </div>
                )}
              </div>
              <p className="italic">{footer.contact.servingAreas}</p>
            </address>
          </div>
        </div>
      </div>

      {/* Sub-footer legal bar */}
      <div className="w-full bg-accent text-on-dark px-5 sm:px-8 lg:px-[6.2vw] py-3 lg:py-[0.75vw] text-xs lg:text-[clamp(12px,0.98vw,19px)] font-body text-left">
        {footer.legalLinks.map((link) => (
          <React.Fragment key={link.label}>
            <Link href={link.href} className="hover:underline focus-visible:ring-2 focus-visible:ring-on-dark">
              {link.label}
            </Link>
            <span className="px-[0.4em]">|</span>
          </React.Fragment>
        ))}
        <span>{footer.copyright}</span>
      </div>
    </footer>
  );
}

export default Footer;
