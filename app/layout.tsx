import type { Metadata } from "next";
import { Cormorant_Garamond, Mulish, Mrs_Saint_Delafield } from "next/font/google";
import { siteContent } from "@/content/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const mulish = Mulish({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const script = Mrs_Saint_Delafield({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteContent.meta.title,
  description: siteContent.meta.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${mulish.variable} ${script.variable}`}>
      <body className="min-h-screen bg-bg text-ink font-body antialiased selection:bg-secondary selection:text-ink">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-surface focus:text-ink focus:border focus:border-border focus:shadow-md"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
