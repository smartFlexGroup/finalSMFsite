"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, ChevronDown, ChevronRight, Search, Sparkles, BookOpen, Ruler, Layers, Palette, FileCheck, ClipboardCheck, Component, FoldVertical, Users, FileBox, Video, Newspaper, LifeBuoy, MessageCircle, Mail, Factory, DraftingCompass, HandCoins, ShieldCheck, FileText, LogIn } from "lucide-react";
import ThemeToggle from "../ThemeToggle";
import {
  capabilitiesData,
  solutionsData,
  howWeDeliverData,
  resourcesData,
  joinNetworkData,
} from "./menu-data";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// Menu configuration
const menuItems = [
  { id: "capabilities", label: "Capabilities", data: capabilitiesData },
  { id: "solutions", label: "Solutions", data: solutionsData },
  { id: "how-we-deliver", label: "How We Deliver", data: howWeDeliverData },
  { id: "resources", label: "Resources", data: resourcesData },
  { id: "join-network", label: "Join Network", data: joinNetworkData },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-slate-900 z-50 overflow-y-auto lg:hidden"
          >
            {/* Header */}
            <div className="sticky top-0 bg-primary border-b border-slate-700 px-6 py-4 flex items-center justify-between">
              <Link href="/" onClick={onClose}>
                <img 
                  src="/SFGLOGO.png" 
                  alt="Smart Flex Group" 
                  className="h-8 w-auto cursor-pointer brightness-0 invert"
                />
              </Link>
              <button
                onClick={onClose}
                className="p-2 hover:bg-primary-dark/20 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Menu Content */}
            <div className="px-6 py-4">
              {/* Main Menu Items as Accordions */}
              {menuItems.map((item) => (
                <div key={item.id} className="border-b border-slate-700">
                  <button
                    onClick={() => toggleSection(item.id)}
                    className="w-full flex items-center justify-between py-5 text-left min-h-[48px]"
                  >
                    <span className="text-lg font-semibold text-white">
                      {item.label}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-white/60 transition-transform ${
                        expandedSection === item.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {expandedSection === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-4 space-y-1">
                          {/* Capabilities Layout */}
                          {item.id === "capabilities" && item.data.layout === "capabilities-layout" && (
                            <>
                              {/* Header with Hero Title and CTA */}
                              <div className="mb-4 px-3 py-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                                <h3 className="text-base font-bold text-white mb-2">
                                  {item.data.hero.title}
                                </h3>
                                <Link
                                  href="#"
                                  onClick={onClose}
                                  className="inline-block px-4 py-2 text-sm font-semibold text-white bg-primary hover:bg-primary-dark rounded-md transition-colors"
                                >
                                  {item.data.hero.primaryBtn}
                                </Link>
                              </div>

                              {/* Cards List */}
                              <div className="mb-4">
                                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-3">
                                  Manufacturing Capabilities
                                </div>
                                {item.data.cards.map((card: any, cardIdx: number) => {
                                  const Icon = card.icon;
                                  return (
                                    <Link
                                      key={cardIdx}
                                      href="#"
                                      onClick={onClose}
                                      className="flex items-start gap-3 px-3 py-3 min-h-[48px] hover:bg-slate-800 rounded-lg transition-colors"
                                    >
                                      {Icon && (
                                        <Icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                      )}
                                      <div className="flex-1 min-w-0">
                                        <div className="text-base font-medium text-white">
                                          {card.title}
                                        </div>
                                        {card.description && (
                                          <div className="text-sm text-slate-300 mt-0.5">
                                            {card.description}
                                          </div>
                                        )}
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>

                              {/* Trust Bar Footer */}
                              {item.data.trustBar && item.data.trustBar.length > 0 && (
                                <div className="mb-4 px-3 py-4 bg-slate-800 rounded-lg">
                                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                                    Quality & Support
                                  </div>
                                  <div className="space-y-2">
                                    {item.data.trustBar.map((trustItem: any, trustIdx: number) => {
                                      const TrustIcon = trustItem.icon;
                                      return (
                                        <div
                                          key={trustIdx}
                                          className="flex items-center gap-2"
                                        >
                                          {TrustIcon && (
                                            <TrustIcon className="w-4 h-4 text-slate-400 shrink-0" />
                                          )}
                                          <span className="text-sm text-slate-300">
                                            {trustItem.title}
                                          </span>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}
                            </>
                          )}

                          {/* Solutions Layout */}
                          {item.id === "solutions" && (
                            <>
                              {/* Featured Section */}
                              {item.data.featured && (
                                <div className="mb-4">
                                  <Link
                                    href="#"
                                    onClick={onClose}
                                    className="flex items-start gap-3 px-3 py-4 min-h-[48px] bg-gradient-to-br from-violet-900/30 to-purple-900/30 hover:from-violet-900/40 hover:to-purple-900/40 rounded-lg transition-colors"
                                  >
                                    {item.data.featured.icon && (
                                      <item.data.featured.icon className="w-6 h-6 text-violet-400 mt-0.5 shrink-0" />
                                    )}
                                    <div className="flex-1 min-w-0">
                                      <div className="text-base font-semibold text-white">
                                        {item.data.featured.title}
                                      </div>
                                      <div className="text-sm text-slate-300 mt-0.5">
                                        {item.data.featured.description}
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              )}
                              
                              {/* Columns */}
                              {item.data.columns && item.data.columns.map((column: any, idx: number) => (
                                <div key={idx} className="mb-4">
                                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-3">
                                    {column.title}
                                  </div>
                                  {column.items.map((subItem: any, subIdx: number) => {
                                    const Icon = subItem.icon;
                                    return (
                                      <Link
                                        key={subIdx}
                                        href="#"
                                        onClick={onClose}
                                        className="flex items-center gap-3 px-3 py-3 min-h-[48px] hover:bg-slate-800 rounded-lg transition-colors"
                                      >
                                        {Icon && (
                                          <Icon className="w-5 h-5 text-violet-400 shrink-0" />
                                        )}
                                        <div className="text-base font-medium text-white">
                                          {subItem.title}
                                        </div>
                                      </Link>
                                    );
                                  })}
                                </div>
                              ))}
                              
                              {/* Footer - Complementary Capabilities */}
                              {item.data.footer && item.data.footer.length > 0 && (
                                <div className="mb-4 px-3 py-4 bg-slate-800 rounded-lg">
                                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                                    COMPLEMENTARY CAPABILITIES
                                  </div>
                                  {item.data.footer.map((footerItem: string, footerIdx: number) => (
                                    <Link
                                      key={footerIdx}
                                      href="#"
                                      onClick={onClose}
                                      className="block py-2 text-sm font-medium text-slate-200 hover:text-violet-400 transition-colors"
                                    >
                                      {footerItem}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </>
                          )}

                          {/* How We Deliver Layout */}
                          {item.id === "how-we-deliver" && (
                            <>
                              {item.data.featured && (
                                <div className="mb-4">
                                  <Link
                                    href="#"
                                    onClick={onClose}
                                    className="flex items-start gap-3 px-3 py-4 min-h-[48px] bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                                  >
                                    {item.data.featured.icon && (
                                      <item.data.featured.icon className="w-6 h-6 text-blue-400 mt-0.5 shrink-0" />
                                    )}
                                    <div className="flex-1 min-w-0">
                                      <div className="text-base font-semibold text-white">
                                        {item.data.featured.title}
                                      </div>
                                      <div className="text-sm text-slate-300 mt-0.5">
                                        {item.data.featured.description}
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              )}
                              {item.data.columns && item.data.columns.map((col: any, idx: number) => (
                                <div key={idx} className="mb-4">
                                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-3">
                                    {col.title}
                                  </div>
                                  {col.items.map((subItem: string, subIdx: number) => (
                                    <Link
                                      key={subIdx}
                                      href="#"
                                      onClick={onClose}
                                      className="block px-3 py-3 min-h-[48px] text-base font-medium text-white hover:bg-slate-800 rounded-lg transition-colors"
                                    >
                                      {subItem}
                                    </Link>
                                  ))}
                                </div>
                              ))}
                            </>
                          )}

                          {/* Resources Layout - Knowledge Hub */}
                          {item.id === "resources" && (
                            <>
                              {/* Search Bar */}
                              {item.data.searchPlaceholder && (
                                <div className="mb-4 relative">
                                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                  <input
                                    type="text"
                                    placeholder={item.data.searchPlaceholder}
                                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50"
                                  />
                                </div>
                              )}

                              {/* AI Teaser Button */}
                              {item.data.aiPanel && (
                                <div className="mb-4">
                                  <Link
                                    href="#"
                                    onClick={onClose}
                                    className="flex items-start gap-3 px-3 py-4 min-h-[48px] bg-gradient-to-br from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 rounded-lg transition-colors"
                                  >
                                    <Sparkles className="w-6 h-6 text-blue-400 mt-0.5 shrink-0" />
                                    <div className="flex-1 min-w-0">
                                      <div className="text-base font-semibold text-white">
                                        {item.data.aiPanel.title}
                                      </div>
                                      <div className="text-sm text-slate-300 mt-0.5">
                                        {item.data.aiPanel.sub}
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              )}

                              {/* Icon mapping */}
                              {(() => {
                                const iconMap: Record<string, any> = {
                                  BookOpen, Ruler, Layers, Palette, FileCheck, ClipboardCheck,
                                  Component, FoldVertical, Users, FileBox, Video, Newspaper,
                                  LifeBuoy, MessageCircle, Mail
                                };

                                return (
                                  <>
                                    {/* Render Columns */}
                                    {item.data.columns && item.data.columns.map((column: any, colIdx: number) => (
                                      <div key={colIdx} className="mb-4">
                                        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-3">
                                          {column.title}
                                        </div>
                                        {column.items.map((subItem: any, subIdx: number) => {
                                          const Icon = iconMap[subItem.icon];
                                          return (
                                            <Link
                                              key={subIdx}
                                              href="#"
                                              onClick={onClose}
                                              className="flex items-center gap-3 px-3 py-3 min-h-[48px] hover:bg-slate-800 rounded-lg transition-colors"
                                            >
                                              {Icon && (
                                                <Icon className="w-5 h-5 text-primary shrink-0" />
                                              )}
                                              <div className="text-base font-medium text-white">
                                                {subItem.title}
                                              </div>
                                            </Link>
                                          );
                                        })}
                                      </div>
                                    ))}

                                    {/* Footer Items */}
                                    {item.data.footer && item.data.footer.length > 0 && (
                                      <div className="mb-4 px-3 py-4 bg-slate-800 rounded-lg">
                                        <div className="space-y-2">
                                          {item.data.footer.map((footerItem: any, footerIdx: number) => {
                                            const FooterIcon = iconMap[footerItem.icon];
                                            return (
                                              <Link
                                                key={footerIdx}
                                                href="#"
                                                onClick={onClose}
                                                className="flex items-center gap-2 py-2 hover:text-primary transition-colors"
                                              >
                                                {FooterIcon && (
                                                  <FooterIcon className="w-4 h-4 text-gray-400 shrink-0" />
                                                )}
                                                <span className="text-sm font-medium text-slate-200">
                                                  {footerItem.title}
                                                </span>
                                              </Link>
                                            );
                                          })}
                                        </div>
                                      </div>
                                    )}
                                  </>
                                );
                              })()}
                            </>
                          )}

                          {/* Join Network Layout */}
                          {item.id === "join-network" && (
                            <>
                              {/* Header with Hero Title and CTA */}
                              <div className="mb-4 px-3 py-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                                <h3 className="text-base font-bold text-white mb-2">
                                  {item.data.hero.title}
                                </h3>
                                <p className="text-sm text-slate-300 mb-3">
                                  {item.data.hero.subhead}
                                </p>
                                <Link
                                  href="#"
                                  onClick={onClose}
                                  className="inline-block px-4 py-2 text-sm font-semibold text-white bg-primary hover:bg-primary-dark rounded-md transition-colors"
                                >
                                  {item.data.hero.primaryBtn}
                                </Link>
                              </div>

                              {/* FOR MANUFACTURERS & FOR ENGINEERS Sections */}
                              {item.data.columns && item.data.columns.map((column: any, colIdx: number) => {
                                const Icon = column.icon;
                                return (
                                  <div key={colIdx} className="mb-4">
                                    <div className="flex items-center gap-2 mb-2 px-3">
                                      {Icon && <Icon className="w-5 h-5 text-primary shrink-0" />}
                                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                        {column.title}
                                      </div>
                                    </div>
                                    {column.items.map((subItem: string, subIdx: number) => (
                                      <Link
                                        key={subIdx}
                                        href="#"
                                        onClick={onClose}
                                        className="block px-3 py-3 min-h-[48px] text-base font-medium text-white hover:bg-slate-800 rounded-lg transition-colors"
                                      >
                                        {subItem}
                                      </Link>
                                    ))}
                                  </div>
                                );
                              })}

                              {/* Referral Program Highlight */}
                              {item.data.referralBanner && (
                                <div className="mb-4">
                                  <Link
                                    href="#"
                                    onClick={onClose}
                                    className="flex items-start gap-3 px-3 py-4 min-h-[48px] bg-gradient-to-r from-amber-900/30 to-orange-900/30 hover:from-amber-900/40 hover:to-orange-900/40 border border-amber-800 rounded-lg transition-colors"
                                  >
                                    {item.data.referralBanner.icon && (
                                      <item.data.referralBanner.icon className="w-6 h-6 text-amber-400 mt-0.5 shrink-0" />
                                    )}
                                    <div className="flex-1 min-w-0">
                                      <div className="text-base font-semibold text-white">
                                        {item.data.referralBanner.title}
                                      </div>
                                      <div className="text-sm text-slate-300 mt-0.5">
                                        {item.data.referralBanner.description}
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              )}

                              {/* Footer Items */}
                              {item.data.footer && item.data.footer.length > 0 && (
                                <div className="mb-4 px-3 py-4 bg-slate-800 rounded-lg">
                                  <div className="space-y-2">
                                    {item.data.footer.map((footerItem: any, footerIdx: number) => {
                                      const FooterIcon = footerItem.icon;
                                      return (
                                        <Link
                                          key={footerIdx}
                                          href="#"
                                          onClick={onClose}
                                          className="flex items-center gap-2 py-2 hover:text-primary transition-colors"
                                        >
                                          {FooterIcon && (
                                            <FooterIcon className="w-4 h-4 text-gray-400 shrink-0" />
                                          )}
                                          <span className="text-sm font-medium text-slate-200">
                                            {footerItem.title}
                                          </span>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Pricing Link */}
              <Link
                href="/pricing"
                onClick={onClose}
                className="flex items-center justify-between py-5 min-h-[48px] border-b border-slate-700"
              >
                <span className="text-lg font-semibold text-white">
                  Pricing
                </span>
                <ChevronRight className="w-5 h-5 text-white/60" />
              </Link>

              {/* Support Link */}
              <Link
                href="/support"
                onClick={onClose}
                className="flex items-center justify-between py-5 min-h-[48px] border-b border-slate-700"
              >
                <span className="text-lg font-semibold text-white">
                  Support
                </span>
                <ChevronRight className="w-5 h-5 text-white/60" />
              </Link>
            </div>

            {/* Footer with Action Buttons */}
            <div className="sticky bottom-0 bg-slate-900 border-t border-slate-700 px-6 py-4 space-y-3">
              {/* Theme Toggle Row */}
              <div className="flex items-center justify-between py-2">
                <span className="text-sm font-medium text-white">
                  Theme
                </span>
                <ThemeToggle />
              </div>
              
              <Link
                href="/signin"
                onClick={onClose}
                className="flex items-center justify-center w-full px-6 py-3 min-h-[48px] text-base font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
              >
                Sign in
                <ChevronRight className="w-5 h-5 ml-1" />
              </Link>
              <Link
                href="/contact-sales"
                onClick={onClose}
                className="flex items-center justify-center w-full px-6 py-3 min-h-[48px] text-base font-semibold text-white bg-primary hover:bg-primary-dark rounded-full transition-colors"
              >
                Contact sales
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

