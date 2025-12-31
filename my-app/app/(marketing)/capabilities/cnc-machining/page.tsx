import CapabilitiesTemplate from "@/components/capabilities/CapabilitiesTemplate";
import { cncMachiningData } from "@/components/capabilities/capabilities-data";

export const metadata = {
  title: "CNC Machining Services | SmartFlex Group",
  description: "Precision 3, 4, and 5-axis CNC machining for complex geometries in metal and plastic. Get parts in as fast as 3 days.",
};

export default function CNCMachiningPage() {
  return <CapabilitiesTemplate data={cncMachiningData} />;
}
