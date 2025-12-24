
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navigation() {
  // --- State Management ---
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  
  // Desktop Mega Menu State
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("capabilities"); // Default tab for "What We Do"

  // Mobile Accordion State
  const [mobileAccordionOpen, setMobileAccordionOpen] = useState<string | null>(null);

  // --- Effects ---
  
  // Handle Scroll for transparent header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  // --- Handlers ---
  const toggleMobileAccordion = (id: string) => {
    setMobileAccordionOpen(mobileAccordionOpen === id ? null : id);
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen || searchOpen
            ? "bg-[#0a233f] shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-[1920px] mx-auto px-4 lg:px-8 xl:px-12">
          <div className="flex justify-between items-center h-20 xl:h-24 2xl:h-28">
            
            {/* Logo - Mobile Only */}
            <div className="shrink-0 z-50 lg:hidden">
              <Link href="/">
                <img
                  src="/SFGLOGO.png"
                  alt="Smart Flex Group Logo"
                  className="h-10 w-auto brightness-0 invert" // Makes logo white
                />
              </Link>
            </div>

            {/* ================= DESKTOP NAV ================= */}
            <nav className="hidden lg:flex w-full items-center justify-between gap-4 xl:gap-8 2xl:gap-12">
              
              {/* LEFT SIDE MENU ITEMS */}
              <ul className="flex items-center gap-4 xl:gap-8 2xl:gap-12">
                
                {/* MEGA MENU: WHAT WE DO */}
                <li 
                  className="group"
                  onMouseEnter={() => setActiveMegaMenu("what-we-do")}
                  onMouseLeave={() => setActiveMegaMenu(null)}
                >
                  <button className="text-white text-xs xl:text-sm font-bold uppercase tracking-wide hover:text-gray-300 flex items-center gap-1 py-6">
                    What We Do
                  </button>

                  {/* Mega Menu Dropdown */}
                  <div className={`absolute left-0 w-full bg-[#0a233f] shadow-xl transition-all duration-300 border-t border-white/10 ${
                    activeMegaMenu === "what-we-do" ? "opacity-100 visible top-20 xl:top-24 2xl:top-28" : "opacity-0 invisible top-24 xl:top-28 2xl:top-32"
                  }`}>
                    <div className="w-full max-w-[1920px] mx-auto px-4 lg:px-8 xl:px-12 flex">
                      {/* Sidebar Tabs */}
                      <div className="w-80 border-r border-white/20 py-8 pr-8">
                        <ul className="space-y-2">
                          {[
                            { id: "capabilities", label: "Capabilities" },
                            { id: "solutions", label: "Solutions" },
                            { id: "markets", label: "Markets we support" },
                            { id: "complementary", label: "Complementary capabilities" },
                          ].map((tab) => (
                            <li key={tab.id}>
                              <button
                                onClick={() => setActiveTab(tab.id)}
                                onMouseEnter={() => setActiveTab(tab.id)}
                                className={`w-full flex justify-between items-center px-4 py-2 text-sm font-bold rounded-md transition-colors ${
                                  activeTab === tab.id
                                    ? "bg-white/10 text-white"
                                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                                }`}
                              >
                                {tab.label}
                                {activeTab === tab.id && <ChevronRight size={14} />}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Content Area */}
                      <div className="flex-1 py-8 pl-12 min-h-[300px]">
                        {activeTab === "capabilities" && (
                          <ul className="grid grid-cols-3 gap-6">
                            {["CNC machining", "Sheet metal", "Plastic part production", "Additive manufacturing", "Vacuum casting", "Fabrication", "Contract assembly", "Welding & metal joining"].map(item => (
                              <li key={item}><Link href="#" className="text-gray-300 hover:text-white hover:underline text-sm block py-1">{item}</Link></li>
                            ))}
                          </ul>
                        )}
                        {activeTab === "solutions" && (
                          <ul className="grid grid-cols-2 gap-6">
                            {["Biotech instrument development", "Commercial product development", "Custom automation development", "Design-to-manufacture", "Medical device development"].map(item => (
                              <li key={item}><Link href="#" className="text-gray-300 hover:text-white hover:underline text-sm block py-1">{item}</Link></li>
                            ))}
                          </ul>
                        )}
                        {/* Add other tabs content here similarly */}
                      </div>
                    </div>
                  </div>
                </li>

                {/* MEGA MENU: WHO WE ARE */}
                <li 
                  className="group"
                  onMouseEnter={() => setActiveMegaMenu("who-we-are")}
                  onMouseLeave={() => setActiveMegaMenu(null)}
                >
                  <button className="text-white text-xs xl:text-sm font-bold uppercase tracking-wide hover:text-gray-300 py-6">
                    Who We Are
                  </button>
                   {/* Simple Mega Menu (No Tabs) */}
                   <div className={`absolute left-0 w-full bg-[#0a233f] shadow-xl transition-all duration-300 border-t border-white/10 ${
                    activeMegaMenu === "who-we-are" ? "opacity-100 visible top-20 xl:top-24 2xl:top-28" : "opacity-0 invisible top-24 xl:top-28 2xl:top-32"
                  }`}>
                    <div className="w-full max-w-[1920px] mx-auto px-4 lg:px-8 xl:px-12 flex py-8">
                      <div className="w-80 border-r border-white/20 pr-8">
                         <h3 className="text-white font-bold mb-4 px-4">About Us</h3>
                         <ul className="space-y-2">
                            <li><Link href="#" className="block px-4 py-1 text-sm text-gray-300 hover:text-white">How SFG Works</Link></li>
                            <li><Link href="#" className="block px-4 py-1 text-sm text-gray-300 hover:text-white">Why Us</Link></li>
                            <li><Link href="#" className="block px-4 py-1 text-sm text-gray-300 hover:text-white">Careers</Link></li>
                         </ul>
                      </div>
                      <div className="flex-1 pl-12">
                        <h3 className="text-white font-bold mb-4">Leadership & Process</h3>
                        <ul className="grid grid-cols-3 gap-6">
                           <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Profiles we partner with</Link></li>
                           <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Quality assurance</Link></li>
                           <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Request proposal</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <Link href="#" className="text-white text-xs xl:text-sm font-bold uppercase tracking-wide hover:text-gray-300 py-6 block whitespace-nowrap">
                    How We Deliver
                  </Link>
                </li>
              </ul>

              {/* CENTER LOGO - Desktop Only */}
              <div className="shrink-0">
                <Link href="/">
                  <img
                    src="/SFGLOGO.png"
                    alt="Smart Flex Group Logo"
                    className="h-10 xl:h-12 2xl:h-14 w-auto brightness-0 invert"
                  />
                </Link>
              </div>

              {/* RIGHT SIDE MENU ITEMS */}
              <ul className="flex items-center gap-4 xl:gap-8 2xl:gap-12">
                {/* Support Dropdown */}
                <li 
                  className="group"
                  onMouseEnter={() => setActiveMegaMenu("support")}
                  onMouseLeave={() => setActiveMegaMenu(null)}
                >
                  <button className="text-white text-xs xl:text-sm font-bold uppercase tracking-wide hover:text-gray-300 flex items-center gap-1 py-6">
                    Support
                  </button>
                  <div className={`absolute left-0 w-full bg-[#0a233f] shadow-xl transition-all duration-300 border-t border-white/10 ${
                    activeMegaMenu === "support" ? "opacity-100 visible top-20 xl:top-24 2xl:top-28" : "opacity-0 invisible top-24 xl:top-28 2xl:top-32"
                  }`}>
                    <div className="w-full max-w-[1920px] mx-auto px-4 lg:px-8 xl:px-12 py-8">
                      <ul className="grid grid-cols-3 gap-6">
                        {["Support", "How SFG works", "Join our supplier network", "Request a quote", "FAQ", "Resources"].map(item => (
                          <li key={item}>
                            <Link href="#" className="text-gray-300 hover:text-white hover:underline text-sm block py-1">
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>

                <li><Link href="#" className="text-white text-xs xl:text-sm font-bold uppercase tracking-wide hover:text-gray-300 py-6 block whitespace-nowrap">Join Network</Link></li>
                <li><Link href="/login" className="text-white text-xs xl:text-sm font-bold uppercase tracking-wide hover:text-gray-300 py-6 block whitespace-nowrap">Login / Register</Link></li>
                
                {/* Theme Toggle */}
                <li>
                  <ThemeToggle />
                </li>
                
                {/* Search Trigger */}
                <li>
                  <button 
                    onClick={() => setSearchOpen(true)}
                    className="text-white hover:text-gray-300 focus:outline-none"
                  >
                    <Search size={20} />
                  </button>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-4">
               <button onClick={() => setSearchOpen(true)} className="text-white">
                  <Search size={24} />
               </button>
               <button 
                onClick={() => setMobileMenuOpen(true)}
                className="text-white focus:outline-none"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ================= SEARCH OVERLAY ================= */}
      <div className={`fixed inset-0 bg-[#0a233f] z-60 flex items-center justify-center transition-all duration-300 ${
        searchOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`}>
        <button 
          onClick={() => setSearchOpen(false)}
          className="absolute top-6 right-6 text-white hover:text-gray-300"
        >
          <X size={32} />
        </button>
        <div className="w-full max-w-3xl px-6">
          <input 
            type="text" 
            placeholder="TYPE TO SEARCH" 
            className="w-full bg-transparent border-b-2 border-gray-500 text-3xl text-white placeholder-gray-500 focus:outline-none focus:border-white pb-4"
            autoFocus={searchOpen}
          />
        </div>
      </div>

      {/* ================= MOBILE DRAWER ================= */}
      <div className={`fixed inset-0 z-60 lg:hidden transition-opacity duration-300 ${
        mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
        
        {/* Drawer */}
        <div className={`absolute top-0 right-0 w-[85%] max-w-[400px] h-full bg-[#0a233f] shadow-2xl transform transition-transform duration-300 flex flex-col ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
          
          {/* Drawer Header */}
          <div className="flex justify-between items-center p-6 border-b border-white/10">
            <img src="/img/Center_SmartFlexGroup_Logo_header.png" alt="Logo" className="h-8 brightness-0 invert" />
            <button onClick={() => setMobileMenuOpen(false)} className="text-white">
              <X size={28} />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <ul className="space-y-4">
              
              {/* Mobile Accordion: What We Do */}
              <li>
                <button 
                  onClick={() => toggleMobileAccordion("what-we-do")}
                  className="w-full flex justify-between items-center text-white text-lg font-bold py-2"
                >
                  WHAT WE DO
                  <ChevronDown size={20} className={`transition-transform ${mobileAccordionOpen === "what-we-do" ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${mobileAccordionOpen === "what-we-do" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <ul className="pl-4 space-y-3 py-2 border-l border-white/10 ml-2">
                    <li><Link href="#" className="text-gray-300 block">Capabilities</Link></li>
                    <li><Link href="#" className="text-gray-300 block">Solutions</Link></li>
                    <li><Link href="#" className="text-gray-300 block">Markets</Link></li>
                  </ul>
                </div>
              </li>

              {/* Mobile Accordion: Who We Are */}
              <li>
                <button 
                  onClick={() => toggleMobileAccordion("who-we-are")}
                  className="w-full flex justify-between items-center text-white text-lg font-bold py-2"
                >
                  WHO WE ARE
                  <ChevronDown size={20} className={`transition-transform ${mobileAccordionOpen === "who-we-are" ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${mobileAccordionOpen === "who-we-are" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <ul className="pl-4 space-y-3 py-2 border-l border-white/10 ml-2">
                    <li><Link href="#" className="text-gray-300 block">About Us</Link></li>
                    <li><Link href="#" className="text-gray-300 block">Careers</Link></li>
                    <li><Link href="#" className="text-gray-300 block">Contact</Link></li>
                  </ul>
                </div>
              </li>

              <li><Link href="#" className="block text-white text-lg font-bold py-2">HOW WE DELIVER</Link></li>
              <li><Link href="#" className="block text-white text-lg font-bold py-2">SUPPORT</Link></li>
              <li><Link href="#" className="block text-white text-lg font-bold py-2">JOIN OUR NETWORK</Link></li>
              
              <li className="pt-6 border-t border-white/10">
                <Link href="/login" className="block text-center w-full bg-red-600 text-white font-bold py-3 rounded uppercase tracking-wide">
                  Login / Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}