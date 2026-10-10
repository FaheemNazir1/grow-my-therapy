import React from "react";
import { siteContent, type SpecialtyBlock } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScriptText } from "@/components/ui/ScriptText";
import { Button } from "@/components/ui/Button";

export function SpecialtiesGrid() {
  const { specialties } = siteContent;

  return (
    <Section id="approach" bgColor="surface" padding="large" className="border-t border-border/30">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 h-fit">
            <SectionHeading level="h3" className="max-w-xs">
              <ScriptText>{specialties.heading}</ScriptText>
            </SectionHeading>
          </div>

          {/* Right Column: 2x2 Grid of 4 Specialty Blocks */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-x-12 lg:gap-y-14">
            {specialties.blocks.map((block: SpecialtyBlock) => (
              <div key={block.id} className="flex flex-col items-start gap-4">
                <h4 className="text-2xl sm:text-[26px] font-heading font-light text-ink tracking-tight">
                  {block.title}
                </h4>

                <p className="text-sm sm:text-[15px] font-body text-ink font-light leading-relaxed">
                  {block.description}
                </p>

                <div className="pt-2">
                  <Button variant="text-underline" href={block.cta.href}>
                    {block.cta.label}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default SpecialtiesGrid;
