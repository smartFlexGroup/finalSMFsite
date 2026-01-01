"use client";

import { Search } from "lucide-react";
import { useState } from "react";

export default function LegalHero() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/smartflegrouplegal.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="absolute inset-0 bg-slate-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Legal & Compliance.
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-200 mb-12">
          Transparency is our standard. Search our repository below.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none">
              <Search className="h-6 w-6 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search legal documents, policies, standards..."
              className="w-full pl-16 pr-6 py-5 text-lg rounded-2xl border-2 border-slate-300 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 bg-white shadow-xl transition-all duration-200"
            />
          </div>
          <p className="mt-4 text-sm text-slate-300">
            Try searching for "privacy", "terms", "ISO", or "supplier"
          </p>
        </div>
      </div>
    </section>
  );
}

