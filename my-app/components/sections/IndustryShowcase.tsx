"use client";

import { Plane, Stethoscope, Car, Smartphone } from "lucide-react";
import DoorCard from "@/components/ui/DoorCard";

const industries = [
  {
    id: 1,
    title: "Aerospace & Defense",
    icon: Plane,
    videoSrc: "/videos/smartflexgrouphomevideo.mp4",
    description:
      "Precision manufacturing for mission-critical aerospace components. From flight-certified parts to defense systems, we meet the highest standards of quality and compliance.",
    link: "/industries/aerospace-defense",
  },
  {
    id: 2,
    title: "Medical Devices",
    icon: Stethoscope,
    videoSrc: "/videos/smartflexgrouphomevideo.mp4",
    description:
      "ISO 13485 certified manufacturing for life-saving medical devices. We deliver biocompatible parts with full traceability and regulatory documentation for FDA submissions.",
    link: "/industries/medical-devices",
  },
  {
    id: 3,
    title: "Automotive",
    icon: Car,
    videoSrc: "/videos/smartflexgrouphomevideo.mp4",
    description:
      "High-volume production for next-generation vehicles. From EV components to autonomous systems, we support the future of mobility with speed and precision.",
    link: "/industries/automotive",
  },
  {
    id: 4,
    title: "Consumer Tech",
    icon: Smartphone,
    videoSrc: "/videos/smartflexgrouphomevideo.mp4",
    description:
      "Beautiful, functional parts for consumer electronics. We combine aesthetic excellence with technical precision to bring your product vision to life.",
    link: "/industries/consumer-tech",
  },
];

export default function IndustryShowcase() {
  return (
    <section className="bg-slate-50 dark:bg-slate-950 py-24">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Industries We Power
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Specialized manufacturing for the world's most demanding sectors.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry) => (
            <DoorCard
              key={industry.id}
              title={industry.title}
              icon={industry.icon}
              videoSrc={industry.videoSrc}
              description={industry.description}
              link={industry.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

