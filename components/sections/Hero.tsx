import React from "react";
import { siteContent } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { ScriptText } from "@/components/ui/ScriptText";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";

export function Hero() {
  const { hero } = siteContent;

  return (
    <Section
      id="hero"
      bgColor="bg"
      padding="none"
      className="pt-24 sm:pt-28 lg:pt-[clamp(150px,10.1vw,194px)] pb-16 sm:pb-20 lg:pb-32 overflow-hidden"
    >
      {/* Full-bleed collage: primary photo flush left, narrow accent flush right */}
      <div className="grid grid-cols-[1fr_22%] lg:grid-cols-[34.5%_1fr_8%] gap-x-4 lg:gap-x-0 gap-y-10 [grid-template-areas:'content_content'_'img_strip'] lg:[grid-template-areas:'img_content_strip']">
        <div className="[grid-area:img] border-y border-r border-border/40">
          <ResponsiveImage
            slot={hero.images.primary}
            priority
            sizes="(max-width: 1024px) 78vw, 497px"
          />
        </div>

        <div className="[grid-area:content] flex flex-col justify-between gap-10 px-5 sm:px-8 lg:px-0 lg:pl-[5.5%] lg:pr-[4%]">
          <Eyebrow className="max-w-sm">{hero.eyebrow}</Eyebrow>

          <div className="flex flex-col items-start gap-6">
            {/* Exactly one h1 for page hierarchy */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-heading font-light leading-[1.15] text-ink tracking-tight max-w-[640px]">
              <ScriptText>{hero.title}</ScriptText>
            </h1>

            <p className="text-base sm:text-[17px] font-body text-ink font-light leading-relaxed max-w-xl">
              {hero.description}
            </p>

            <Button variant="text-underline" href={hero.ctaButton.href}>
              {hero.ctaButton.label}
            </Button>
          </div>
        </div>

        <div className="[grid-area:strip] self-end border-y border-l border-border/40">
          <ResponsiveImage
            slot={hero.images.secondary}
            priority
            sizes="(max-width: 1024px) 22vw, 115px"
          />
        </div>
      </div>
    </Section>
  );
}

export default Hero;
