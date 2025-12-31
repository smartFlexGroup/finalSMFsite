"use client";

import PartViewer from '@/components/3d/PartViewer';
import Link from 'next/link';

interface CtaBandProps {
  modelPath?: string;
}

export default function CtaBand({ modelPath }: CtaBandProps) {
  return (
    <section className="bg-primary py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6">
        
        {/* Left Column - Marketing Copy & CTAs */}
        <div className="space-y-6">
          {/* Headline */}
          <h2 className="text-white">
            Ready to build? Upload your CAD.
          </h2>
          
          {/* Subhead */}
          <p className="text-slate-300 text-lg leading-relaxed">
            Join 5,000+ engineers who trust Smart Flex for rapid prototyping and production. 
            Secure upload, instant DFM, and fast lead times.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {/* Primary Button */}
            <Link
              href="/signup"
              className="group relative px-8 py-4 bg-white text-primary font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl text-center min-w-[200px]"
            >
              Create Free Account
              <span className="absolute inset-0 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            
            {/* Secondary Button */}
            <Link
              href="/upload"
              className="group relative px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-white/10 text-center min-w-[200px]"
            >
              Upload a Part
            </Link>
          </div>
        </div>
        
        {/* Right Column - 3D Viewer */}
        <div className="flex items-center justify-center">
          <PartViewer modelPath={modelPath} />
        </div>
        
      </div>
    </section>
  );
}

