import CapabilitiesTemplate from "@/components/capabilities/CapabilitiesTemplate";
import { injectionMoldingData } from "@/components/capabilities/capabilities-data";

export const metadata = {
  title: "Injection Molding Services | SmartFlex Group",
  description: "Rapid tooling and production molding for scalable plastic parts. Molds in 10-15 days.",
};

export default function InjectionMoldingPage() {
  return <CapabilitiesTemplate data={injectionMoldingData} />;
}
