import CapabilitiesTemplate from "@/components/capabilities/CapabilitiesTemplate";
import { weldingData } from "@/components/capabilities/capabilities-data";

export const metadata = {
  title: "Welding & Joining Services | SmartFlex Group",
  description: "Certified TIG/MIG welding for structural frames and complex assemblies. AWS D1.1, D1.2 certified.",
};

export default function WeldingJoiningPage() {
  return <CapabilitiesTemplate data={weldingData} />;
}
