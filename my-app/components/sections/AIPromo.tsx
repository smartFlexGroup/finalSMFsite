import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function AIPromo() {
  const chips = [
    "ISO 13485",
    "FDA Compliance",
    "DFM Analysis",
    "Material Selection"
  ];

  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/smartflexgroupaiassistant.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        {/* Headline */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          Your Engineering Co-Pilot
        </h2>

        {/* Subhead */}
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-8">
          Instant answers on materials, standards, and manufacturing—powered by decades of production knowledge.
        </p>

        {/* Chips Row */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {chips.map((chip, index) => (
            <div
              key={index}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full"
            >
              <span className="text-white/80 text-sm font-medium">{chip}</span>
            </div>
          ))}
        </div>

        {/* Launch Button */}
        <Link
          href="/ai-assistant"
          className="inline-flex items-center gap-2 bg-primary text-white hover:bg-blue-700 rounded-full px-8 py-3 font-semibold transition-colors duration-200"
        >
          <Sparkles className="w-5 h-5" />
          Launch AI Assistant
        </Link>
      </div>
    </section>
  );
}

