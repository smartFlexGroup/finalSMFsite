'use client';

import { useState } from 'react';
import { Play, X } from 'lucide-react';

export default function AboutHero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="bg-slate-950 py-32">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          {/* Content Layer */}
          <h1 className="text-white mb-8">
            Building the Industrial Supercloud.
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-12">
            Smart Flex Group is the digital thread connecting the world's best engineers with the world's most capable manufacturers.
          </p>

          {/* Video Player - The Centerpiece */}
          <div
            className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-800 relative group cursor-pointer"
            onClick={() => setIsVideoOpen(true)}
          >
            {/* Background Video */}
            <video
              className="w-full h-full object-cover"
              muted
              loop
              autoPlay
              playsInline
            >
              <source src="/videos/Aboutsmartflexgroup.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl animate-pulse group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-slate-950 ml-1" fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Screen Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={() => setIsVideoOpen(false)}
            className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center transition-all duration-300 z-10"
            aria-label="Close video"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Video Player */}
          <div className="w-full max-w-6xl aspect-video">
            <video
              className="w-full h-full rounded-lg shadow-2xl"
              controls
              autoPlay
              playsInline
            >
              <source src="/videos/Aboutsmartflexgroup.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </>
  );
}

