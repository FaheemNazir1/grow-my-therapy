import React from "react";
import { siteContent } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { ScriptText } from "@/components/ui/ScriptText";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";

export function StatementBanner() {
  const { statement } = siteContent;

  return (
    <Section id="statement" bgColor="surface" padding="none" className="py-8 lg:py-0 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[53.5%_1fr] gap-10 lg:gap-0 items-center">
        {/* Landscape image flush left */}
        <div>
          <ResponsiveImage
            slot={statement.image}
            sizes="(max-width: 1024px) 100vw, 769px"
          />
        </div>

        <div className="px-5 sm:px-8 lg:pl-[8%] lg:pr-[6%]">
          <h2 className="max-w-[460px] text-3xl sm:text-4xl lg:text-[40px] font-heading font-light leading-[1.25] text-ink tracking-tight">
            <ScriptText>{statement.heading}</ScriptText>
          </h2>
        </div>
      </div>
    </Section>
  );
}

export default StatementBanner;
