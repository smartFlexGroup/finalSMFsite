"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Tab {
  id: string;
  label: string;
  headline: string;
  subhead: string;
  cta: string;
  videoSrc: string;
}

const tabs: Tab[] = [
  {
    id: "design-partners",
    label: "Design Partners",
    headline: "Design It. We Build It.",
    subhead:
      "Extend your firm's capabilities. Hand off complex CAD to us, and we deliver physical parts to your client—fast. ",
    cta: "Become a Design Partner",
    videoSrc: "/videos/smartflexgroupdesignfirm.mp4",
  },
  {
    id: "manufacturers",
    label: "Manufacturers",
    headline: "Your Spindles. Turning 24/7.",
    subhead:
      "Stop chasing RFQs. We bring vetted, production-ready files directly to your dashboard. You focus on the chips; we handle the sales.",
    cta: "Fill Your Capacity",
    videoSrc: "/videos/smartflexgroupCNCservices.mp4",
  },
  {
    id: "contract-mfg",
    label: "Contract Mfg",
    headline: "Volume Production. Simplified.",
    subhead:
      "We act as your extended sales force. Smart Flex aggregates demand to bring you the high-volume, multi-year programs that fit your facility's sweet spot.",
    cta: "Scale With Us",
    videoSrc: "/videos/smartflegroupcontractmanufactuer.mp4",
  },
  {
    id: "enterprise-oem",
    label: "Enterprise & OEM",
    headline: "Supply Chain Resilience.",
    subhead:
      "For Medical Device and Aerospace leaders: Access a global, redundant network of vetted manufacturers through a single secure portal.",
    cta: "Secure Your Supply Chain",
    videoSrc: "/videos/smartflexgroupOEMMedtech.mp4",
  },
];

export default function PartnerShowcase() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const currentTab = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col justify-start">
      {/* Video Background Layer */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className="absolute inset-0"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            src={currentTab.videoSrc}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>

      {/* Top Group: Title + Tabs */}
      <div className="relative pt-24">
        {/* Header Content */}
        <div className="relative z-20 text-center mb-12 px-6">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            The Smart Flex Ecosystem
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            How we drive value for every partner.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="relative z-30 flex justify-center">
          <div className="flex flex-wrap gap-3 px-6 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full border-2 font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-yellow-400 text-black border-yellow-400"
                    : "bg-transparent text-white border-white hover:bg-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Content - Left Aligned */}
      <div className="relative z-20 mt-24">
        <div className="w-full max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col items-start text-left max-w-2xl"
            >
              {/* Headline */}
              <h2 className="text-yellow-400 text-5xl md:text-6xl font-bold mb-6">
                {currentTab.headline}
              </h2>

              {/* Subhead */}
              <p className="text-white text-lg md:text-xl leading-relaxed mb-8">
                {currentTab.subhead}
              </p>

              {/* CTA Button */}
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-black">
                {currentTab.cta}
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

