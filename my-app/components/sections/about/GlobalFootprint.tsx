'use client';

import { motion } from 'framer-motion';

export default function GlobalFootprint() {
  // Key locations for pulsing dots (percentage positions on map)
  const locations = [
    { name: 'North America', top: '35%', left: '20%' },
    { name: 'Europe', top: '30%', left: '50%' },
    { name: 'Southeast Asia', top: '50%', left: '75%' }
  ];

  const stats = [
    { label: '50+ Vetted Partners', value: '50+' },
    { label: '3 Continents', value: '3' },
    { label: '24/7 Production Cycle', value: '24/7' }
  ];

  return (
    <section className="bg-slate-900 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          A Network Without Borders.
        </h2>

        {/* Map Container */}
        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-slate-800">
          {/* World Map Background */}
          <div 
            className="absolute inset-0 bg-slate-950"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Cpath d='M150,150 L180,140 L200,160 L180,180 Z M250,120 L280,110 L310,130 L290,150 Z M350,180 L380,170 L400,190 L380,210 Z M500,100 L550,90 L580,120 L550,140 Z M650,140 L680,130 L710,150 L690,170 Z M800,160 L830,150 L860,180 L840,200 Z M200,300 L230,290 L250,310 L230,330 Z M400,280 L450,270 L480,300 L450,320 Z M600,320 L650,310 L680,340 L650,360 Z M850,300 L900,290 L930,320 L900,340 Z' fill='%23334155' opacity='0.3'/%3E%3Cpath d='M100,200 Q150,180 200,200 T300,200 M400,150 Q450,130 500,150 T600,150 M700,180 Q750,160 800,180 T900,180 M150,350 Q200,330 250,350 T350,350 M500,320 Q550,300 600,320 T700,320' stroke='%23475569' stroke-width='2' fill='none' opacity='0.4'/%3E%3C/svg%3E")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/50" />
          </div>

          {/* Pulsing Dots */}
          {locations.map((location, index) => (
            <div
              key={index}
              className="absolute"
              style={{ top: location.top, left: location.left }}
            >
              {/* Outer Pulse Ring */}
              <div className="absolute -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 bg-blue-500/30 rounded-full animate-ping" />
              </div>
              
              {/* Inner Dot */}
              <div className="absolute -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  className="w-4 h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.8, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />
              </div>

              {/* Location Label */}
              <div className="absolute -translate-x-1/2 translate-y-6 whitespace-nowrap">
                <span className="text-xs font-medium text-blue-400 bg-slate-950/80 backdrop-blur-sm px-2 py-1 rounded">
                  {location.name}
                </span>
              </div>
            </div>
          ))}

          {/* Stats Overlay - High-Tech HUD Card */}
          <div className="absolute bottom-3 right-8 z-20 bg-slate-900/30 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-2xl overflow-hidden">
            {/* Shimmer Animation */}
            <motion.div
              className="absolute inset-0 -translate-x-full"
              animate={{
                translateX: ['100%', '200%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: 'easeInOut'
              }}
            >
              <div className="h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 space-y-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="text-3xl font-bold text-blue-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-300 font-medium text-left">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Context */}
        <p className="text-center text-slate-400 mt-8 max-w-2xl mx-auto">
          Our global network ensures continuous production cycles, connecting you with verified manufacturing partners across multiple continents.
        </p>
      </div>
    </section>
  );
}

