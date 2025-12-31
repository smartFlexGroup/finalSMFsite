import CapabilitiesTemplate from "@/components/capabilities/CapabilitiesTemplate";
import { finishingData } from "@/components/capabilities/capabilities-data";

export const metadata = {
  title: "Finishing Services | SmartFlex Group",
  description: "Surface treatments including Anodizing, Powder Coat, Passivation, and Plating. MIL-SPEC available.",
};

export default function FinishingPage() {
  return <CapabilitiesTemplate data={finishingData} />;
}
