import Hero from "@/components/sections/Hero";
import TrustSignals from "@/components/sections/TrustSignals";
import CapabilitiesGrid from "@/components/sections/CapabilitiesGrid";
import PartnerShowcase from "@/components/sections/PartnerShowcase";
import Workflow from "@/components/sections/Workflow";
import AIPromo from "@/components/sections/AIPromo";
import CtaBand from "@/components/sections/CtaBand";
import IndustryShowcase from "@/components/sections/IndustryShowcase";
import SmartStart from "@/components/sections/SmartStart";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSignals />
      <CapabilitiesGrid />
      <PartnerShowcase />
      <Workflow />
      <AIPromo />
      <CtaBand />
      <IndustryShowcase />
      <SmartStart />
      
      {/* Additional sections can be added below */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Your other page content goes here */}
      </div>
    </>
  );
}

