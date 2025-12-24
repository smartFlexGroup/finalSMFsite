"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AccessibilitySettings {
  isOpen: boolean;
  textSize: number;
  highContrast: boolean;
  grayscale: boolean;
  underlineLinks: boolean;
  pauseAnimations: boolean;
}

interface AccessibilityContextType extends AccessibilitySettings {
  togglePanel: () => void;
  setTextSize: (size: number) => void;
  setHighContrast: (value: boolean) => void;
  setGrayscale: (value: boolean) => void;
  setUnderlineLinks: (value: boolean) => void;
  setPauseAnimations: (value: boolean) => void;
  resetSettings: () => void;
}

const defaultSettings: AccessibilitySettings = {
  isOpen: false,
  textSize: 1.0,
  highContrast: false,
  grayscale: false,
  underlineLinks: false,
  pauseAnimations: false,
};

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [textSize, setTextSize] = useState(1.0);
  const [highContrast, setHighContrast] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [underlineLinks, setUnderlineLinks] = useState(false);
  const [pauseAnimations, setPauseAnimations] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load settings from localStorage on mount
  useEffect(() => {
    const loadSettings = () => {
      try {
        const saved = localStorage.getItem('accessibilitySettings');
        if (saved) {
          const settings = JSON.parse(saved);
          setTextSize(settings.textSize ?? 1.0);
          setHighContrast(settings.highContrast ?? false);
          setGrayscale(settings.grayscale ?? false);
          setUnderlineLinks(settings.underlineLinks ?? false);
          setPauseAnimations(settings.pauseAnimations ?? false);
        }
      } catch (error) {
        console.error('Failed to load accessibility settings:', error);
      } finally {
        setIsLoaded(true);
      }
    };

    loadSettings();
  }, []);

  // Apply settings to DOM and save to localStorage
  useEffect(() => {
    if (!isLoaded) return;

    const html = document.documentElement;
    const body = document.body;

    // Apply font size to html element
    html.style.fontSize = `${textSize * 100}%`;

    // Toggle high-contrast class on body
    if (highContrast) {
      body.classList.add('high-contrast');
    } else {
      body.classList.remove('high-contrast');
    }

    // Toggle grayscale class on html
    if (grayscale) {
      html.classList.add('grayscale');
    } else {
      html.classList.remove('grayscale');
    }

    // Toggle underline-links class on body
    if (underlineLinks) {
      body.classList.add('underline-links');
    } else {
      body.classList.remove('underline-links');
    }

    // Toggle pause-animations class on body
    if (pauseAnimations) {
      body.classList.add('pause-animations');
    } else {
      body.classList.remove('pause-animations');
    }

    // Save to localStorage
    const settings = {
      textSize,
      highContrast,
      grayscale,
      underlineLinks,
      pauseAnimations,
    };
    localStorage.setItem('accessibilitySettings', JSON.stringify(settings));
  }, [isLoaded, textSize, highContrast, grayscale, underlineLinks, pauseAnimations]);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  const resetSettings = () => {
    setTextSize(1.0);
    setHighContrast(false);
    setGrayscale(false);
    setUnderlineLinks(false);
    setPauseAnimations(false);
  };

  const value: AccessibilityContextType = {
    isOpen,
    textSize,
    highContrast,
    grayscale,
    underlineLinks,
    pauseAnimations,
    togglePanel,
    setTextSize,
    setHighContrast,
    setGrayscale,
    setUnderlineLinks,
    setPauseAnimations,
    resetSettings,
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};

