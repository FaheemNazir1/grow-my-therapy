import React from "react";
import { siteContent } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";

export function HowWeWork() {
  const { howWeWork } = siteContent;

  return (
    <Section id="how-we-work" bgColor="secondary" padding="large">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_326px] gap-12 px-5 sm:px-8 lg:pl-[8.9%] lg:pr-[7.5%] items-start">
        <div className="flex flex-col gap-10 lg:gap-16">
          <Eyebrow>{howWeWork.eyebrow}</Eyebrow>

          <SectionHeading level="h2">{howWeWork.heading}</SectionHeading>

          {/* Two narrative columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-ink font-light leading-[1.8] text-sm sm:text-[15px] max-w-[860px]">
            <div className="flex flex-col gap-4">
              <p className="text-xs sm:text-[13px] font-body uppercase tracking-[0.14em] text-ink font-medium leading-[1.7]">
                {howWeWork.subheading}
              </p>
              <p>{howWeWork.paragraphs[0]}</p>
            </div>
            <p>{howWeWork.paragraphs[1]}</p>
          </div>

          <div>
            <Button variant="text-underline" href={howWeWork.ctaButton.href}>
              {howWeWork.ctaButton.label}
            </Button>
          </div>
        </div>

        <div className="w-full max-w-sm lg:max-w-none">
          <ResponsiveImage
            slot={howWeWork.image}
            sizes="(max-width: 1024px) 80vw, 326px"
          />
        </div>
      </div>
    </Section>
  );
}

export default HowWeWork;
