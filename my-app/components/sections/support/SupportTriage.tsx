"use client";

import { supportData } from '@/components/support/support-data';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function SupportTriage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Choose Your Path
          </h2>
          <p className="text-xl text-slate-600">
            Get instant help from the right team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportData.triageCards.map((card, index) => {
            const Icon = card.icon;
            const isHovered = hoveredIndex === index;
            const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

            return (
              <motion.div
                key={index}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                animate={{
                  opacity: isOtherHovered ? 0.5 : 1,
                  scale: isOtherHovered ? 0.95 : isHovered ? 1.05 : 1,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <Link
                  href={card.href}
                  className="block h-full"
                >
                  <div className={`
                    relative h-full p-8 rounded-2xl border-2 border-slate-200
                    bg-gradient-to-br ${card.bgGradient}
                    hover:border-slate-300 hover:shadow-2xl
                    transition-all duration-300
                    group cursor-pointer
                    overflow-hidden
                  `}>
                    {/* Animated Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className={`
                        w-16 h-16 rounded-xl bg-white shadow-lg
                        flex items-center justify-center mb-6
                        group-hover:scale-110 transition-transform duration-300
                      `}>
                        <Icon className={`w-8 h-8 ${card.iconColor}`} />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        {card.title}
                      </h3>

                      {/* Subtitle */}
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {card.subtitle}
                      </p>

                      {/* Action Button */}
                      <div className="flex items-center gap-2 text-slate-900 font-semibold group-hover:gap-3 transition-all">
                        <span>{card.action}</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* Corner Decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

