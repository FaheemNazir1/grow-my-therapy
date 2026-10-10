import React from "react";
import Image from "next/image";
import { siteContent } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { ItalicText } from "@/components/ui/ItalicText";

export function QuoteBanner() {
  const { quote } = siteContent;
  const bg = quote.backgroundImage;

  return (
    <Section
      id="quote"
      bgColor="dark"
      padding="none"
      className="overflow-hidden flex items-end min-h-[480px] sm:min-h-[540px] lg:min-h-[39.7vw] pb-14 sm:pb-16 lg:pb-[7.2vw] pt-24"
    >
      {/* Photographic background with a dark overlay so the cream text stays readable */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bg.src}
          alt={bg.alt}
          fill
          sizes="100vw"
          className="object-cover"
          style={bg.objectPosition ? { objectPosition: bg.objectPosition } : undefined}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-dark/75 via-dark/55 to-dark/35"
        />
      </div>

      <div className="relative z-10 w-full px-5 sm:px-8 lg:pl-[9.2vw] lg:pr-[6vw]">
        <blockquote>
          <p className="max-w-[640px] lg:max-w-[62vw] text-[26px] sm:text-4xl lg:text-[clamp(36px,2.95vw,60px)] font-heading font-light leading-[1.3] lg:leading-[1.4] text-on-dark">
            <ItalicText>{quote.quote}</ItalicText>
          </p>
        </blockquote>
      </div>
    </Section>
  );
}

export default QuoteBanner;
