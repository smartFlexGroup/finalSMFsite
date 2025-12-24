"use client";

import React, { useState } from "react";
import { LucideIcon, Sparkles, Search, BookOpen, Ruler, Layers, Palette, FileCheck, ClipboardCheck, Component, FoldVertical, Users, FileBox, Video, Newspaper, LifeBuoy, MessageCircle, Mail, Factory, DraftingCompass, HandCoins, ShieldCheck, FileText, LogIn, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface MenuContentProps {
  data: any;
}

export default function MenuContent({ data }: MenuContentProps) {
  if (!data) return null;

  // Capabilities Layout
  if (data.layout === "capabilities-layout") {
    const [activeChip, setActiveChip] = useState<string | null>(null);

    // Filter and sort cards based on active chip
    const sortedCards = React.useMemo(() => {
      if (!activeChip) return data.cards;
      
      const matching = data.cards.filter((card: any) => 
        card.tags.includes(activeChip)
      );
      const nonMatching = data.cards.filter((card: any) => 
        !card.tags.includes(activeChip)
      );
      
      return [...matching, ...nonMatching];
    }, [activeChip, data.cards]);

    // Get current microcopy
    const currentMicrocopy = React.useMemo(() => {
      if (!activeChip) return data.defaultMicrocopy;
      const chip = data.chips.find((c: any) => c.id === activeChip);
      return chip?.microcopy || data.defaultMicrocopy;
    }, [activeChip, data.chips, data.defaultMicrocopy]);

    return (
      <div className="grid grid-cols-[40%_60%] h-full gap-6">
        {/* Left Column - Video Hero */}
        <div className="relative overflow-hidden rounded-lg">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={data.hero.video} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 h-full flex flex-col justify-end p-8">
            <h2 className="text-2xl font-bold text-white mb-3">
              {data.hero.title}
            </h2>
            <p className="text-sm text-gray-200 mb-6 leading-relaxed">
              {data.hero.subhead}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="px-5 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-primary-dark rounded-md transition-colors"
              >
                {data.hero.primaryBtn}
              </a>
              <a
                href="#"
                className="px-5 py-2.5 text-sm font-semibold text-white border border-white/30 hover:bg-white/10 rounded-md transition-colors"
              >
                {data.hero.secondaryBtn}
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Interactive Content */}
        <div className="flex flex-col h-full">
          {/* Chips Row */}
          <div className="flex flex-wrap gap-2 mb-3">
            {data.chips.map((chip: any) => (
              <button
                key={chip.id}
                onClick={() => setActiveChip(activeChip === chip.id ? null : chip.id)}
                className={`px-4 py-2 text-xs font-medium rounded-full transition-colors ${
                  activeChip === chip.id
                    ? "bg-primary text-white"
                    : "bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700"
                }`}
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* Microcopy */}
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 min-h-[40px]">
            {currentMicrocopy}
          </p>

          {/* Card Grid with Animation */}
          <div className="flex-1 overflow-y-auto">
            <motion.div layout className="grid grid-cols-2 gap-3">
              {sortedCards.map((card: any) => {
                const Icon: LucideIcon = card.icon;
                const isMatching = !activeChip || card.tags.includes(activeChip);
                
                return (
                  <motion.div
                    key={card.title}
                    layout
                    transition={{ duration: 0.3 }}
                    className={`bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary transition-all cursor-pointer ${
                      isMatching ? "opacity-100" : "opacity-50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <Icon
                        size={24}
                        className="text-primary shrink-0 mt-0.5"
                      />
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                          {card.title}
                        </h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Trust Bar */}
          <div className="flex items-center gap-6 mt-4 pt-4 border-t border-gray-200 dark:border-slate-700">
            {data.trustBar.map((item: any, idx: number) => {
              const Icon: LucideIcon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 group cursor-pointer"
                >
                  <Icon
                    size={18}
                    className="text-gray-600 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-primary transition-colors"
                  />
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Solutions Layout
  if (data.layout === "solutions-layout") {
    const FeaturedIcon: LucideIcon = data.featured.icon;
    return (
      <div className="space-y-8">
        {/* Featured block */}
        <div className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-3 shadow-sm">
              <FeaturedIcon
                size={24}
                className="text-violet-600 dark:text-violet-400"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {data.featured.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {data.featured.description}
              </p>
              
              {/* Buttons */}
              {(data.featured.primaryBtn || data.featured.secondaryBtn) && (
                <div className="flex items-center gap-4">
                  {data.featured.primaryBtn && (
                    <a
                      href="#"
                      className="px-4 py-2 text-sm font-medium text-white bg-violet-600 hover:bg-violet-700 rounded-md transition-colors"
                    >
                      {data.featured.primaryBtn}
                    </a>
                  )}
                  {data.featured.secondaryBtn && (
                    <a
                      href="#"
                      className="flex items-center gap-1 text-sm font-medium text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
                    >
                      {data.featured.secondaryBtn}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Three columns grid */}
        <div className="grid grid-cols-3 gap-8">
          {data.columns.map((column: any, idx: number) => (
            <div key={idx}>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
                {column.title}
              </h3>
              <div className="space-y-3">
                {column.items.map((item: any, itemIdx: number) => {
                  const Icon: LucideIcon = item.icon;
                  return (
                    <div
                      key={itemIdx}
                      className="flex items-center gap-3 group cursor-pointer"
                    >
                      <Icon
                        size={20}
                        className="text-violet-600 dark:text-violet-400 shrink-0"
                      />
                      <div className="text-sm text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                        {item.title}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer - Complementary Capabilities */}
        {data.footer && data.footer.length > 0 && (
          <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
              COMPLEMENTARY CAPABILITIES
            </h3>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {data.footer.map((item: string, idx: number) => (
                <React.Fragment key={idx}>
                  <a
                    href="#"
                    className="text-sm text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 cursor-pointer transition-colors"
                  >
                    {item}
                  </a>
                  {idx < data.footer.length - 1 && (
                    <span className="text-gray-400 dark:text-gray-600">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Developers Layout
  if (data.layout === "developers-layout") {
    const FeaturedIcon: LucideIcon = data.featured.icon;
    return (
      <div className="space-y-8">
        {/* Featured block */}
        <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-3 shadow-sm">
              <FeaturedIcon
                size={24}
                className="text-blue-600 dark:text-blue-400"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {data.featured.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {data.featured.description}
              </p>
              
              {/* Buttons */}
              {(data.featured.primaryBtn || data.featured.secondaryBtn) && (
                <div className="flex items-center gap-4">
                  {data.featured.primaryBtn && (
                    <a
                      href="#"
                      className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                    >
                      {data.featured.primaryBtn}
                    </a>
                  )}
                  {data.featured.secondaryBtn && (
                    <a
                      href="#"
                      className="flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      {data.featured.secondaryBtn}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-3 gap-12">
          {data.columns.map((column: any, idx: number) => (
            <div key={idx}>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
                {column.title}
              </h3>
              <div className="space-y-2">
                {column.items.map((item: string, itemIdx: number) => (
                  <a
                    key={itemIdx}
                    href="#"
                    className="block text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer - only render if it exists */}
        {data.footer && data.footer.length > 0 && (
          <div className="flex gap-6 pt-4 border-t border-border">
            {data.footer.map((item: any, idx: number) => {
              const Icon: LucideIcon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 group cursor-pointer"
                >
                  <Icon
                    size={16}
                    className="text-green-600 dark:text-green-400"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  // Resources Layout - Knowledge Hub with AI Launchpad
  if (data.layout === "resources-layout") {
    // Icon mapping for string-based icon names
    const iconMap: Record<string, LucideIcon> = {
      BookOpen, Ruler, Layers, Palette, FileCheck, ClipboardCheck, 
      Component, FoldVertical, Users, FileBox, Video, Newspaper, 
      LifeBuoy, MessageCircle, Mail
    };

    return (
      <div className="space-y-4 h-full flex flex-col">
        {/* Top Row - Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
          <input
            type="text"
            placeholder={data.searchPlaceholder}
            className="w-full pl-10 pr-4 py-2.5 bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg text-sm text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>

        {/* Main Area - AI Panel + 3 Column Grid */}
        <div className="flex-1 grid grid-cols-[30%_70%] gap-6">
          {/* Left Col - AI Panel */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg p-6 flex flex-col">
            <div className="flex items-start gap-2 mb-2">
              <Sparkles className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {data.aiPanel.title}
                </h3>
                <p className="text-sm text-gray-300">
                  {data.aiPanel.sub}
                </p>
              </div>
            </div>

            {/* Fake Input Box */}
            <div className="mt-4 mb-4">
              <div className="bg-slate-700/50 border border-slate-600 rounded-lg px-3 py-2.5 text-sm text-gray-400">
                {data.aiPanel.placeholder}
              </div>
            </div>

            {/* Chips */}
            <div className="flex flex-wrap gap-2 mb-4">
              {data.aiPanel.chips.map((chip: string, idx: number) => (
                <button
                  key={idx}
                  className="px-3 py-1.5 text-xs font-medium bg-slate-700/70 hover:bg-slate-700 text-gray-200 rounded-full transition-colors"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Try AI Assistant Button */}
            <button className="mt-auto flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors">
              <Sparkles className="w-4 h-4" />
              {data.aiPanel.action}
            </button>
          </div>

          {/* Right Col - 3 Column Links Grid */}
          <div className="flex flex-col">
            <div className="flex-1 grid grid-cols-3 gap-6">
              {data.columns.map((column: any, colIdx: number) => (
                <div key={colIdx}>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
                    {column.title}
                  </h3>
                  <div className="space-y-3">
                    {column.items.map((item: any, itemIdx: number) => {
                      const Icon: LucideIcon = iconMap[item.icon];
                      return (
                        <a
                          key={itemIdx}
                          href="#"
                          className="flex items-start gap-2 group cursor-pointer"
                        >
                          {Icon && (
                            <Icon
                              size={18}
                              className="text-primary shrink-0 mt-0.5"
                            />
                          )}
                          <span className="text-sm text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">
                            {item.title}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Right - Footer Items */}
            <div className="flex items-center gap-6 mt-6 pt-4 border-t border-gray-200 dark:border-slate-700">
              {data.footer.map((item: any, idx: number) => {
                const Icon: LucideIcon = iconMap[item.icon];
                return (
                  <a
                    key={idx}
                    href="#"
                    className="flex items-center gap-2 group cursor-pointer"
                  >
                    {Icon && (
                      <Icon
                        size={16}
                        className="text-gray-600 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-primary transition-colors"
                      />
                    )}
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {item.title}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Join Network Layout
  if (data.layout === "join-network-layout") {
    return (
      <div className="grid grid-cols-[40%_60%] h-full gap-6">
        {/* Left Column - Video Hero */}
        <div className="relative overflow-hidden rounded-lg">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={data.hero.video} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 h-full flex flex-col justify-end p-8">
            <h2 className="text-2xl font-bold text-white mb-3">
              {data.hero.title}
            </h2>
            <p className="text-sm text-gray-200 mb-6 leading-relaxed">
              {data.hero.subhead}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="px-5 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-primary-dark rounded-md transition-colors"
              >
                {data.hero.primaryBtn}
              </a>
              <a
                href="#"
                className="px-5 py-2.5 text-sm font-semibold text-white border border-white/30 hover:bg-white/10 rounded-md transition-colors"
              >
                {data.hero.secondaryBtn}
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="flex flex-col h-full">
          {/* Row 1 - The Grid (FOR MANUFACTURERS / FOR ENGINEERS) */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {data.columns.map((column: any, idx: number) => {
              const Icon: LucideIcon = column.icon;
              return (
                <div key={idx} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon size={20} className="text-primary shrink-0" />
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      {column.title}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {column.items.map((item: string, itemIdx: number) => (
                      <a
                        key={itemIdx}
                        href="#"
                        className="block text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Row 2 - The Spotlight (Referral Banner) */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6 mb-4">
            <div className="flex items-start gap-4">
              <div className="bg-white dark:bg-slate-800 rounded-lg p-3 shadow-sm">
                {React.createElement(data.referralBanner.icon, {
                  size: 24,
                  className: "text-amber-600 dark:text-amber-400"
                })}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {data.referralBanner.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {data.referralBanner.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-medium text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
                >
                  {data.referralBanner.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Row 3 - Footer Items */}
          <div className="flex items-center gap-6 mt-auto pt-4 border-t border-gray-200 dark:border-slate-700">
            {data.footer.map((item: any, idx: number) => {
              const Icon: LucideIcon = item.icon;
              return (
                <a
                  key={idx}
                  href="#"
                  className="flex items-center gap-2 group cursor-pointer"
                >
                  <Icon
                    size={18}
                    className="text-gray-600 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-primary transition-colors"
                  />
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    {item.title}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return null;
}
