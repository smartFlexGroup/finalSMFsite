'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function MissionReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress through this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to opacity (0.2 to 1.0)
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 1]);
  
  // Add subtle scale effect
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1]);

  return (
    <div ref={containerRef} className="h-[200vh] bg-slate-950 relative">
      <div className="sticky top-0 h-screen flex items-center justify-center px-6">
        <motion.p
          style={{ opacity, scale }}
          className="text-4xl md:text-6xl font-bold text-center max-w-4xl leading-tight text-white"
        >
          We align global design talent and proven manufacturers on one transparent platform — giving enterprise teams the tools to streamline sourcing, reduce risk, and speed up development at scale.
        </motion.p>
      </div>
    </div>
  );
}

