import CapabilitiesTemplate from "@/components/capabilities/CapabilitiesTemplate";
import { sheetMetalData } from "@/components/capabilities/capabilities-data";

export const metadata = {
  title: "Sheet Metal Fabrication Services | SmartFlex Group",
  description: "Laser cutting, bending, and punching for enclosures and brackets. Get parts in 3-5 days.",
};

export default function SheetMetalPage() {
  return <CapabilitiesTemplate data={sheetMetalData} />;
}
