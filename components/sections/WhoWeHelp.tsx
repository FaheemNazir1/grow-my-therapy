import React from "react";
import { siteContent, type AudienceCard } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScriptText } from "@/components/ui/ScriptText";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";

export function WhoWeHelp() {
  const { whoWeHelp } = siteContent;

  return (
    <Section id="specialties" bgColor="surface" padding="large">
      <Container size="wide" className="lg:px-[5.5vw]">
        <div className="mb-10 sm:mb-14">
          <SectionHeading level="h2">
            <ScriptText>{whoWeHelp.heading}</ScriptText>
          </SectionHeading>
        </div>

        {/* 3-column cards, inset from the heading like the reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-5 lg:ml-[12.5%]">
          {whoWeHelp.cards.map((card: AudienceCard) => (
            <article key={card.id} className="flex flex-col gap-8 group">
              <div className="overflow-hidden">
                <ResponsiveImage
                  slot={card.image}
                  imageClassName="object-cover group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1440px) 28vw, 364px"
                />
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-2xl sm:text-[26px] font-heading font-light text-ink tracking-tight">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-[15px] font-body text-ink font-light leading-[1.8]">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default WhoWeHelp;
