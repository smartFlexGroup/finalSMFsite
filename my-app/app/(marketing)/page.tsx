import Hero from "@/components/sections/Hero";
import TrustSignals from "@/components/sections/TrustSignals";
import CapabilitiesGrid from "@/components/sections/CapabilitiesGrid";
import CtaBand from "@/components/sections/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSignals />
      <CapabilitiesGrid />
      <CtaBand />
      
      {/* Additional sections can be added below */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Your other page content goes here */}
      </div>
    </>
  );
}

