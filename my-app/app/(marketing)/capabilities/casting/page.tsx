import CapabilitiesTemplate from "@/components/capabilities/CapabilitiesTemplate";
import { castingData } from "@/components/capabilities/capabilities-data";

export const metadata = {
  title: "Casting Services | SmartFlex Group",
  description: "Die casting and urethane casting for complex metal and plastic geometries. Lead time 2-4 weeks.",
};

export default function CastingPage() {
  return <CapabilitiesTemplate data={castingData} />;
}
