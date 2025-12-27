"use client";

import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Menu } from "lucide-react";
import MenuTrigger from "./MenuTrigger";
import MorphingContainer from "./MorphingContainer";
import MenuContent from "./MenuContent";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "../ThemeToggle";
import {
  capabilitiesData,
  solutionsData,
  howWeDeliverData,
  resourcesData,
  joinNetworkData,
} from "./menu-data";

// Menu configuration
const menuItems = [
  { id: "capabilities", label: "Capabilities", data: capabilitiesData },
  { id: "solutions", label: "Solutions", data: solutionsData },
  { id: "how-we-deliver", label: "How We Deliver", data: howWeDeliverData },
  { id: "resources", label: "Resources", data: resourcesData },
  { id: "join-network", label: "Join Network", data: joinNetworkData },
];

// Hardcoded dimensions per tab for smooth morphing
const menuDimensions: Record<
  string,
  { width: number; height: number }
> = {
  capabilities: { width: 950, height: 750 },
  solutions: { width: 800, height: 600 },
  "how-we-deliver": { width: 800, height: 520 },
  resources: { width: 950, height: 650 },
  "join-network": { width: 950, height: 600 },
};

export default function NavBar() {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [containerBounds, setContainerBounds] = useState({
    width: 0,
    height: 0,
    x: 0,
    arrowX: undefined as number | undefined,
  });

  // Get current pathname to determine if we're on home page
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Store refs to menu trigger buttons
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const navRef = useRef<HTMLDivElement>(null);
  const leaveTimeout = useRef<NodeJS.Timeout | null>(null);

  // Scroll detection logic
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Check initial scroll position
    handleScroll();

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate container position based on active trigger
  const updateContainerPosition = (tabId: string) => {
    const triggerElement = triggerRefs.current[tabId];
    const navElement = navRef.current;

    if (triggerElement && navElement) {
      const triggerRect = triggerElement.getBoundingClientRect();
      const navRect = navElement.getBoundingClientRect();

      // Get dimensions for this tab
      const dimensions = menuDimensions[tabId] || {
        width: 700,
        height: 400,
      };

      // Calculate center of trigger
      const triggerCenter = triggerRect.left + triggerRect.width / 2 - navRect.left;

      // Calculate ideal X position (centered on trigger)
      const idealX = triggerCenter - dimensions.width / 2;

      // Calculate boundaries with margin
      const margin = 20;
      const maxLeft = margin;
      const maxRight = window.innerWidth - dimensions.width - margin;

      // Clamp the X position to stay within bounds
      const clampedX = Math.max(maxLeft, Math.min(idealX, maxRight));

      // Calculate arrow position (trigger center relative to clamped container)
      const arrowX = triggerCenter - clampedX;

      setContainerBounds({
        width: dimensions.width,
        height: dimensions.height,
        x: clampedX,
        arrowX,
      });
    }
  };

  // Handle mouse enter on trigger
  const handleMouseEnter = (tabId: string) => {
    // Cancel any pending close action
    if (leaveTimeout.current) {
      clearTimeout(leaveTimeout.current);
      leaveTimeout.current = null;
    }
    setActiveTab(tabId);
    updateContainerPosition(tabId);
  };

  // Handle mouse leave from entire nav area
  const handleMouseLeave = () => {
    // Cancel any existing timeout first
    if (leaveTimeout.current) {
      clearTimeout(leaveTimeout.current);
    }
    // Set a grace period before closing
    leaveTimeout.current = setTimeout(() => {
      setActiveTab(null);
      leaveTimeout.current = null;
    }, 200);
  };

  // Handle mouse enter on dropdown (cancels closing)
  const handleDropdownMouseEnter = () => {
    if (leaveTimeout.current) {
      clearTimeout(leaveTimeout.current);
      leaveTimeout.current = null;
    }
  };

  // Get active menu data
  const activeMenuData = menuItems.find((item) => item.id === activeTab)?.data;

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
        <nav
          ref={navRef}
          onMouseLeave={handleMouseLeave}
          className={`relative transition-all duration-300 ${
            isHome
              ? isScrolled
                ? "bg-primary/95 backdrop-blur-sm shadow-sm"
                : "bg-transparent"
              : "bg-primary/95 backdrop-blur-sm shadow-sm"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              {/* Logo - Always Visible */}
              <div className="shrink-0">
                <Link href="/">
                  <img 
                    src="/SFGLOGO.png" 
                    alt="Smart Flex Group" 
                    className="h-10 w-auto cursor-pointer transition-all duration-300 brightness-0 invert"
                  />
                </Link>
              </div>

            {/* Desktop Navigation - Hidden on Mobile/Tablet */}
            <div className="hidden lg:flex items-center gap-1">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  ref={(el) => {
                    if (el) {
                      triggerRefs.current[item.id] = el.querySelector("button");
                    }
                  }}
                >
                  <MenuTrigger
                    label={item.label}
                    isOpen={activeTab === item.id}
                    isScrolled={isScrolled}
                    onClick={() => handleMouseEnter(item.id)}
                    onMouseEnter={() => handleMouseEnter(item.id)}
                  />
                </div>
              ))}
            </div>

            {/* Desktop Right side actions - Hidden on Mobile/Tablet */}
            <div className="hidden lg:flex items-center gap-6 shrink-0">
              {/* Theme Toggle */}
              <ThemeToggle />
              
              {/* Divider */}
              <div className="h-6 w-px bg-white/20 transition-colors" />
              
              {/* About Link */}
              <Link
                href="/about"
                className="flex items-center gap-1 text-sm font-medium text-white hover:text-white/80 transition-colors"
              >
                About
                <ChevronRight className="w-4 h-4" />
              </Link>
              
              {/* Support Link */}
              <Link
                href="/support"
                className="flex items-center gap-1 text-sm font-medium text-white hover:text-white/80 transition-colors"
              >
                Support
                <ChevronRight className="w-4 h-4" />
              </Link>

              {/* Sign in Link */}
              <Link
                href="/login"
                className="flex items-center gap-1 text-sm font-medium text-white hover:text-white/80 transition-colors"
              >
                Sign in / Register
                <ChevronRight className="w-4 h-4" />
              </Link>

              {/* Contact sales Button */}
              <Link
                href="/contact"
                className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-dark rounded-full transition-colors border border-primary"
              >
                Contact sales
              </Link>
            </div>

            {/* Mobile Hamburger Button - Visible on Mobile/Tablet Only */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-md transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-white transition-colors" />
            </button>
          </div>
        </div>

        {/* Desktop Morphing Dropdown Container - Hidden on Mobile/Tablet */}
        <div className="hidden lg:block relative">
          <AnimatePresence>
            {activeTab && (
              <MorphingContainer
                width={containerBounds.width}
                height={containerBounds.height}
                x={containerBounds.x}
                arrowX={containerBounds.arrowX}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <MenuContent data={activeMenuData} />
              </MorphingContainer>
            )}
          </AnimatePresence>
        </div>
      </nav>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
