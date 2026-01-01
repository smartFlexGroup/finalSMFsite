import LegalHero from "@/components/sections/legal/LegalHero";
import LegalDashboard from "@/components/sections/legal/LegalDashboard";

export const metadata = {
  title: "Legal & Compliance | SmartFlex Group",
  description: "Access our comprehensive legal documents, compliance policies, and quality certifications. Transparency is our standard.",
};

export default function LegalPage() {
  return (
    <>
      <LegalHero />
      <LegalDashboard />
    </>
  );
}
