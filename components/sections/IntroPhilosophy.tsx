import React from "react";
import { siteContent } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";

export function IntroPhilosophy() {
  const { philosophy } = siteContent;

  return (
    <Section id="about" bgColor="bg" padding="none" className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_30.3%] gap-12 lg:gap-0 pb-16 sm:pb-20 lg:pb-0">
        {/* Text block: heading, then two narrative columns */}
        <div className="px-5 sm:px-8 lg:pl-[8.9%] lg:pr-[4%] pt-4 lg:pt-[160px] lg:pb-32 flex flex-col gap-10 lg:gap-14">
          <SectionHeading level="h2" className="max-w-[560px]">
            {philosophy.heading}
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[860px] text-ink font-light leading-[1.8] text-sm sm:text-[15px]">
            <div className="flex flex-col gap-4">
              <Eyebrow className="font-medium leading-relaxed">{philosophy.eyebrow}</Eyebrow>
              <p>{philosophy.paragraphs[0]}</p>
            </div>
            <p>{philosophy.paragraphs[1]}</p>
          </div>
        </div>

        {/* Portrait image flush to the right edge */}
        <div className="px-5 sm:px-8 lg:px-0 lg:row-start-1 lg:col-start-2">
          <ResponsiveImage
            slot={philosophy.image}
            sizes="(max-width: 1024px) 100vw, 436px"
          />
        </div>
      </div>
    </Section>
  );
}

export default IntroPhilosophy;
