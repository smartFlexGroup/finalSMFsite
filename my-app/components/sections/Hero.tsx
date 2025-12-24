'use client';

import { useState } from 'react';
import { Play, X } from 'lucide-react';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/smartflexgrouphomevideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content Layer */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            {/* Headline */}
            <h1 className="text-white mb-6 animate-fade-in">
              Manufacturing at the Speed of Innovation.
            </h1>

            {/* Subheading */}
            <p className="text-white text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
              From prototype to mass production in days, not months. Access a global network of elite manufacturers with one click.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Primary Button */}
              <button className="group relative px-8 py-4 bg-primary hover:bg-primary-dark text-primary-foreground font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl min-w-[200px]">
                Start Your Project
                <span className="absolute inset-0 rounded-lg bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              {/* Secondary Button - Watch Story */}
              <button 
                onClick={openModal}
                className="group relative px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-white/10 min-w-[200px] flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5 transition-transform group-hover:scale-110" />
                Watch Our Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in"
          onClick={closeModal}
        >
          <div className="relative w-full max-w-5xl mx-4 sm:mx-6 lg:mx-8">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-accent transition-colors duration-200 p-2 rounded-full hover:bg-white/10"
              aria-label="Close modal"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Video Container */}
            <div 
              className="relative w-full aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                controls
                autoPlay
                className="w-full h-full"
              >
                <source src="/videos/Aboutsmartflexgroup.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* Fade-in Animation */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </>
  );
}

