import React from "react";
import { siteContent } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScriptText } from "@/components/ui/ScriptText";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";

const iconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  className: "shrink-0 text-primary mt-0.5",
};

const icons = {
  location: (
    <svg {...iconProps}>
      <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  availability: (
    <svg {...iconProps}>
      <rect x="3" y="5" width="18" height="12" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  privacy: (
    <svg {...iconProps}>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  ),
};

export function OurOffice() {
  const { office } = siteContent;
  const { infoRow } = office;

  const infoItems = [
    { key: "location", label: infoRow.locationLabel, value: infoRow.location },
    { key: "availability", label: infoRow.availabilityLabel, value: infoRow.availability },
    { key: "privacy", label: infoRow.privacyLabel, value: infoRow.privacyNote },
  ] as const;

  return (
    <Section id="our-office" bgColor="bg" padding="large">
      {/* Same left-heading / right-content rhythm as "Areas of focus" and the FAQ */}
      <div className="grid grid-cols-1 lg:grid-cols-[28%_1fr] gap-10 lg:gap-0 px-5 sm:px-8 lg:pl-[8.9%] lg:pr-[8.5%]">
        <div className="flex flex-col gap-5 lg:pr-10">
          <Eyebrow>{office.eyebrow}</Eyebrow>
          <SectionHeading level="h3" className="max-w-[320px]">
            <ScriptText>{office.heading}</ScriptText>
          </SectionHeading>
          <p className="max-w-[420px] text-sm sm:text-[15px] font-body font-light leading-[1.8] text-ink">
            {office.description}
          </p>
        </div>

        <div className="flex flex-col gap-10 lg:gap-14">
          {/* Two photos, the second stepped down on larger screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {office.images.map((image, i) => (
              <div key={image.id} className={i === 1 ? "sm:mt-14" : ""}>
                <ResponsiveImage
                  slot={image}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 460px"
                />
              </div>
            ))}
          </div>

          <dl className="grid grid-cols-1 md:grid-cols-3 border-y border-border md:divide-x divide-y md:divide-y-0 divide-border">
            {infoItems.map((item) => (
              <div key={item.key} className="flex items-start gap-4 py-5 md:px-5 first:md:pl-0 last:md:pr-0">
                {icons[item.key]}
                <div className="flex flex-col gap-1">
                  <dt className="text-[11px] sm:text-xs font-body font-normal uppercase tracking-[0.15em] text-ink">
                    {item.label}
                  </dt>
                  <dd className="text-sm font-light leading-relaxed text-ink">{item.value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}

export default OurOffice;
