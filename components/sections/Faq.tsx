import React from "react";
import { siteContent } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScriptText } from "@/components/ui/ScriptText";

export function Faq() {
  const { faq } = siteContent;

  // FAQPage structured data helps local/organic search surface the answers
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <Section id="faqs" bgColor="surface" padding="large" className="border-t border-border/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="grid grid-cols-1 lg:grid-cols-[28%_1fr] gap-10 lg:gap-0 px-5 sm:px-8 lg:pl-[8.9%] lg:pr-[8.5%]">
        <div className="flex flex-col gap-5">
          <Eyebrow>{faq.eyebrow}</Eyebrow>
          <SectionHeading level="h3" className="max-w-[260px]">
            <ScriptText>{faq.heading}</ScriptText>
          </SectionHeading>
        </div>

        <div className="max-w-[820px]">
          {faq.items.map((item) => (
            <details key={item.question} className="group border-b border-border">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 sm:py-6 focus-visible:ring-2 focus-visible:ring-primary rounded [&::-webkit-details-marker]:hidden">
                <span className="text-xl sm:text-2xl font-heading font-light leading-snug text-ink">
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-2xl leading-none text-primary transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none"
                >
                  +
                </span>
              </summary>
              <p className="pb-6 pr-10 text-sm sm:text-[15px] font-body font-light leading-[1.8] text-ink">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Faq;
