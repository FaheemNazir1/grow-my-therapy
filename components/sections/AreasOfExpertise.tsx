import React from "react";
import { siteContent } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { ScriptText } from "@/components/ui/ScriptText";

export function AreasOfExpertise() {
  const { expertise } = siteContent;
  const rows = Math.ceil(expertise.areas.length / 2);

  return (
    <Section
      id="areas-of-expertise"
      bgColor="surface"
      padding="none"
      className="py-14 sm:py-16 lg:py-[6.8vw]"
    >
      {/* Heading column + two list columns, positioned in proportion to the reference */}
      <div className="grid grid-cols-1 lg:grid-cols-[26.2vw_1fr] gap-8 lg:gap-0 px-5 sm:px-8 lg:pl-[8.4vw] lg:pr-[9.9vw]">
        <h3 className="max-w-[4.6em] text-[34px] sm:text-4xl lg:text-[clamp(34px,2.5vw,50px)] font-heading font-light leading-[1.2] text-ink tracking-tight">
          <ScriptText>{expertise.heading}</ScriptText>
        </h3>

        {/* Two columns filled top-to-bottom; hairline dividers, none under the last row of a column */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 sm:grid-flow-col gap-x-10 lg:gap-x-[4.5vw] content-start"
          style={{ gridTemplateRows: `repeat(${rows}, minmax(0, auto))` }}
        >
          {expertise.areas.map((area: string, i: number) => (
            <li
              key={area}
              className={`py-[18px] lg:py-[clamp(18px,2.1vw,40px)] text-[11px] sm:text-xs lg:text-[clamp(12px,1vw,19px)] font-body uppercase tracking-[0.15em] text-ink font-normal leading-snug border-border ${
                i % rows === rows - 1 ? "sm:border-b-0 border-b" : "border-b"
              }`}
            >
              {area}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default AreasOfExpertise;
