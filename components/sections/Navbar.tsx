"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { siteContent, type NavDropdownItem } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const { navigation } = siteContent;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  // Mobile drawer: two side-by-side panels (main list, folder submenu) on a sliding track
  const [mobilePanel, setMobilePanel] = useState<"main" | "sub">("main");
  const [activeFolder, setActiveFolder] = useState<string | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const openMobileMenu = () => {
    setMobilePanel("main");
    setActiveFolder(null);
    setMobileMenuOpen(true);
  };
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobilePanel("main");
  };
  const openFolder = (label: string) => {
    setActiveFolder(label);
    setMobilePanel("sub");
  };
  const folder = navigation.links.find((l) => l.label === activeFolder);

  // Close mobile menu on Escape key press
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
          setMobilePanel("main");
          menuButtonRef.current?.focus();
        }
        setOpenDropdown(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Trap focus inside mobile menu (ignores the off-screen, inert panel)
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const menu = mobileMenuRef.current;

    const getFocusable = () =>
      Array.from(
        menu?.querySelectorAll<HTMLElement>('button, [href], [tabindex]:not([tabindex="-1"])') ?? []
      ).filter((el) => !el.closest("[inert]"));

    function handleTab(e: KeyboardEvent) {
      if (e.key !== "Tab") return;
      const items = getFocusable();
      const first = items[0];
      const last = items[items.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    }

    window.addEventListener("keydown", handleTab);
    getFocusable()[0]?.focus();

    return () => window.removeEventListener("keydown", handleTab);
  }, [mobileMenuOpen]);

  return (
    <header id="top" className="absolute top-0 left-0 w-full z-50 bg-transparent transition-colors duration-200">
      <div className="w-full px-5 sm:px-8 lg:pl-[6.1vw] lg:pr-[5.6vw] h-24 sm:h-28 lg:h-[clamp(112px,7.3vw,140px)] flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="#top"
          className="relative block flex-shrink-0 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
          aria-label={`${siteContent.meta.siteName} home`}
        >
          <Logo />
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-[2.1vw] ml-auto mr-[2.1vw]"
        >
          {navigation.links.map((item: NavDropdownItem) => {
            const hasChildren = item.children && item.children.length > 0;

            if (!hasChildren) {
              return (
                <Link
                  key={item.label}
                  href={item.href || "/"}
                  className="text-[13px] lg:text-[clamp(13px,0.86vw,17px)] font-body uppercase tracking-[0.1em] font-normal text-ink hover:text-muted transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-1 py-1"
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1.5 text-[13px] lg:text-[clamp(13px,0.86vw,17px)] font-body uppercase tracking-[0.1em] font-normal text-ink hover:text-muted transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-1 py-1 cursor-pointer"
                  aria-expanded={openDropdown === item.label}
                  aria-haspopup="true"
                  onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  onFocus={() => setOpenDropdown(item.label)}
                >
                  <span>{item.label}</span>
                </button>

                {/* Dropdown Menu Box */}
                <div
                  className={`absolute top-full right-0 pt-3 z-50 transition-all duration-200 ${
                    openDropdown === item.label
                      ? "opacity-100 visible translate-y-0 pointer-events-auto"
                      : "opacity-0 invisible -translate-y-1 pointer-events-none"
                  }`}
                  role="menu"
                  aria-orientation="vertical"
                >
                  <div className="bg-bg flex flex-col items-end whitespace-nowrap">
                    {item.children?.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        role="menuitem"
                        className="py-[0.8vw] lg:py-3 text-[13px] lg:text-[clamp(13px,0.86vw,17px)] font-body uppercase tracking-[0.1em] text-ink hover:text-muted transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        {/* Desktop Contact CTA Button */}
        <div className="hidden lg:flex items-center">
          <Button
            variant="outline-oval"
            href={navigation.ctaButton.href}
          >
            {navigation.ctaButton.label}
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center">
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => (mobileMenuOpen ? closeMobileMenu() : openMobileMenu())}
            className="p-2 text-ink hover:text-muted focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded cursor-pointer"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
          >
            <div className="w-6 h-4 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-ink transition-transform duration-200 ${
                  mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-ink transition-opacity duration-200 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-ink transition-transform duration-200 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer: full-screen, two sliding panels */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          ref={mobileMenuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-50 lg:hidden bg-bg flex flex-col overflow-hidden"
        >
          {/* Top bar stays put on both panels */}
          <div className="h-24 sm:h-28 shrink-0 px-5 sm:px-8 flex items-center justify-between">
            <Link
              href="#top"
              onClick={closeMobileMenu}
              className="block focus-visible:ring-2 focus-visible:ring-primary rounded"
              aria-label={`${siteContent.meta.siteName} home`}
            >
              <Logo />
            </Link>
            <button
              type="button"
              onClick={closeMobileMenu}
              className="p-2 text-ink hover:text-muted focus-visible:ring-2 focus-visible:ring-primary rounded cursor-pointer"
              aria-label="Close navigation menu"
            >
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 5l14 14M19 5L5 19" />
              </svg>
            </button>
          </div>

          {/* Sliding viewport: track is 200% wide, each panel is exactly one viewport */}
          <div className="relative flex-1 min-h-0 overflow-hidden">
            <div
              className="flex h-full w-[200%] transition-transform duration-500 ease-in-out motion-reduce:transition-none"
              style={{ transform: mobilePanel === "sub" ? "translateX(-50%)" : "translateX(0)" }}
            >
              {/* Panel 1: primary links */}
              <nav
                aria-label="Mobile Menu Links"
                aria-hidden={mobilePanel !== "main"}
                inert={mobilePanel !== "main"}
                className="w-1/2 min-w-0 h-full overflow-y-auto px-5 sm:px-8 pt-6 pb-10 flex flex-col"
              >
                <ul className="flex flex-col gap-7 sm:gap-9">
                  {navigation.links.map((item: NavDropdownItem) => {
                    const hasChildren = item.children && item.children.length > 0;
                    const itemClass =
                      "flex items-center gap-4 text-left font-body font-normal uppercase tracking-[0.1em] text-ink text-[clamp(26px,7.4vw,44px)] leading-tight hover:text-muted transition-colors focus-visible:ring-2 focus-visible:ring-primary rounded";

                    return (
                      <li key={item.label}>
                        {hasChildren ? (
                          <button
                            type="button"
                            onClick={() => openFolder(item.label)}
                            className={`${itemClass} cursor-pointer`}
                            aria-haspopup="true"
                          >
                            <span>{item.label}</span>
                            <svg className="w-[0.5em] h-[0.9em] shrink-0" fill="none" viewBox="0 0 10 18" stroke="currentColor" aria-hidden="true">
                              <path strokeWidth="1" d="M1 1l8 8-8 8" />
                            </svg>
                          </button>
                        ) : (
                          <Link href={item.href || "/"} onClick={closeMobileMenu} className={itemClass}>
                            {item.label}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-auto pt-12">
                  <Button variant="outline-oval" href={navigation.ctaButton.href} onClick={closeMobileMenu}>
                    {navigation.ctaButton.label}
                  </Button>
                </div>
              </nav>

              {/* Panel 2: folder submenu (team, specialties, methods) */}
              <div
                aria-hidden={mobilePanel !== "sub"}
                inert={mobilePanel !== "sub"}
                className="w-1/2 min-w-0 h-full overflow-y-auto px-5 sm:px-8 pt-6 pb-16"
              >
                <button
                  type="button"
                  onClick={() => setMobilePanel("main")}
                  className="flex items-center gap-3 font-body font-normal uppercase tracking-[0.1em] text-muted text-[clamp(26px,7.4vw,44px)] leading-tight mb-10 hover:text-ink transition-colors focus-visible:ring-2 focus-visible:ring-primary rounded cursor-pointer"
                >
                  <svg className="w-[0.5em] h-[0.9em] shrink-0" fill="none" viewBox="0 0 10 18" stroke="currentColor" aria-hidden="true">
                    <path strokeWidth="1" d="M9 1L1 9l8 8" />
                  </svg>
                  <span>Back</span>
                </button>

                <ul className="flex flex-col gap-7 sm:gap-9">
                  {folder?.children?.map((sub) => (
                    <li key={sub.label}>
                      <Link
                        href={sub.href}
                        onClick={closeMobileMenu}
                        className="block font-body font-normal uppercase tracking-[0.1em] text-ink text-[clamp(24px,7vw,40px)] leading-[1.15] break-words hover:text-muted transition-colors focus-visible:ring-2 focus-visible:ring-primary rounded"
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
