import CapabilitiesTemplate from "@/components/capabilities/CapabilitiesTemplate";
import { assemblyData } from "@/components/capabilities/capabilities-data";

export const metadata = {
  title: "Assembly & Integration Services | SmartFlex Group",
  description: "Full electromechanical assembly, kitting, and hardware installation. ESD-safe facility with functional testing.",
};

export default function AssemblyPage() {
  return <CapabilitiesTemplate data={assemblyData} />;
}
