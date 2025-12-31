import CapabilitiesTemplate from "@/components/capabilities/CapabilitiesTemplate";
import { additiveData } from "@/components/capabilities/capabilities-data";

export const metadata = {
  title: "Additive Manufacturing & 3D Printing | SmartFlex Group",
  description: "Industrial 3D printing (SLA, SLS, FDM, DMLS) for rapid prototyping. Parts in 24 hours.",
};

export default function AdditiveManufacturingPage() {
  return <CapabilitiesTemplate data={additiveData} />;
}
