import React from "react";
import { siteContent } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScriptText } from "@/components/ui/ScriptText";
import { Button } from "@/components/ui/Button";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";

export function ScheduleCTA() {
  const { scheduleCTA } = siteContent;

  return (
    <Section id="schedule" bgColor="bg" padding="none" className="py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[11.8%_1fr_34.5%] gap-10 lg:gap-0 items-center">
        {/* Left vertical strip, flush left (desktop only) */}
        <div className="hidden lg:block self-start">
          <ResponsiveImage slot={scheduleCTA.images.leftAccent} sizes="170px" />
        </div>

        {/* Left-aligned appointment copy */}
        <div className="flex flex-col items-start gap-8 px-5 sm:px-8 lg:pl-[8.5%] lg:pr-[6%] max-w-[760px]">
          <Eyebrow>{scheduleCTA.eyebrow}</Eyebrow>

          <SectionHeading level="h2" className="max-w-md">
            <ScriptText>{scheduleCTA.heading}</ScriptText>
          </SectionHeading>

          <div className="flex flex-col gap-4 text-ink font-light leading-[1.8] text-sm sm:text-[15px] max-w-[500px]">
            {scheduleCTA.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <Button variant="outline-oval" href={scheduleCTA.ctaButton.href}>
            {scheduleCTA.ctaButton.label}
          </Button>
        </div>

        {/* Right portrait flush right */}
        <div className="px-5 sm:px-8 lg:px-0 self-end">
          <ResponsiveImage
            slot={scheduleCTA.images.rightPortrait}
            sizes="(max-width: 1024px) 100vw, 497px"
          />
        </div>
      </div>
    </Section>
  );
}

export default ScheduleCTA;
