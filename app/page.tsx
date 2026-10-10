import React from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { IntroPhilosophy } from "@/components/sections/IntroPhilosophy";
import { WhoWeHelp } from "@/components/sections/WhoWeHelp";
import { QuoteBanner } from "@/components/sections/QuoteBanner";
import { AreasOfExpertise } from "@/components/sections/AreasOfExpertise";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { StatementBanner } from "@/components/sections/StatementBanner";
import { SpecialtiesGrid } from "@/components/sections/SpecialtiesGrid";
import { OurOffice } from "@/components/sections/OurOffice";
import { Faq } from "@/components/sections/Faq";
import { ScheduleCTA } from "@/components/sections/ScheduleCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex flex-col">
        <Hero />
        <IntroPhilosophy />
        <WhoWeHelp />
        <QuoteBanner />
        <AreasOfExpertise />
        <HowWeWork />
        <StatementBanner />
        <SpecialtiesGrid />
        <OurOffice />
        <Faq />
        <ScheduleCTA />
      </main>
      <Footer />
    </>
  );
}
