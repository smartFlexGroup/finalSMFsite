"use client";

import { DraftingCompass, Users, ShieldCheck, Globe } from "lucide-react";
import DoorCard from "@/components/ui/DoorCard";

const teamRoles = [
  {
    id: 1,
    title: "DFM Engineer",
    icon: DraftingCompass,
    videoSrc: "/videos/smartflexgroupdesignfirm.mp4",
    description:
      "I review your CAD before it hits the floor. I catch un-machinable features and suggest cost-saving tweaks.",
  },
  {
    id: 2,
    title: "Program Manager",
    icon: Users,
    videoSrc: "/videos/smartflexgroupOEMMedtech.mp4",
    description:
      "Your single point of contact. I manage the timeline and coordinate multiple vendors to ensure on-time delivery.",
  },
  {
    id: 3,
    title: "Quality Specialist",
    icon: ShieldCheck,
    videoSrc: "/videos/smartflexgroupCNCservices.mp4",
    description:
      "I verify every part against your print. From material certs to final inspection, nothing leaves without a green light.",
  },
  {
    id: 4,
    title: "Sourcing Strategist",
    icon: Globe,
    videoSrc: "/videos/smartflegroupcontractmanufactuer.mp4",
    description:
      "I match your project with the perfect shop based on capability, capacity, and certification requirements.",
  },
];

export default function TeamShowcase() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-4">
            Built by Engineers, for Engineers.
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Meet your extended team. We handle the complexity so you can focus on innovation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamRoles.map((role) => (
            <DoorCard
              key={role.id}
              title={role.title}
              icon={role.icon}
              videoSrc={role.videoSrc}
              description={role.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

