"use client";

import { Search } from 'lucide-react';
import { supportData } from '@/components/support/support-data';
import { useState } from 'react';

export default function SupportHero() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/smartflegrouplegal.jpg)' }}
      />
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-slate-900/80" />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
          {supportData.hero.title}
        </h1>
        
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={supportData.hero.placeholder}
              className="w-full bg-white rounded-full py-5 pl-16 pr-6 text-lg text-slate-900 placeholder:text-slate-400 shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all"
            />
          </div>
          
          {/* Quick Suggestions */}
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            {['Anodizing Specs', 'Lead Times', 'Invoice', 'Material Certs'].map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => setSearchQuery(suggestion)}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm rounded-full hover:bg-white/20 transition-colors border border-white/20"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
}

