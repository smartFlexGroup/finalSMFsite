"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  performance: boolean;
  targeting: boolean;
}

interface CookieContextType {
  isBannerOpen: boolean;
  isModalOpen: boolean;
  preferences: CookiePreferences;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (prefs: Partial<CookiePreferences>) => void;
  openModal: () => void;
  closeModal: () => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

const defaultPreferences: CookiePreferences = {
  necessary: true,
  functional: false,
  performance: false,
  targeting: false,
};

export const CookieProvider = ({ children }: { children: ReactNode }) => {
  const [isBannerOpen, setIsBannerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    // Check if user has already made a choice
    const savedConsent = localStorage.getItem('cookieConsent');
    
    if (savedConsent) {
      try {
        const parsed = JSON.parse(savedConsent);
        setPreferences(parsed);
        setIsBannerOpen(false);
      } catch (error) {
        console.error('Error parsing cookie consent:', error);
        setIsBannerOpen(true);
      }
    } else {
      // No consent found, show banner
      setIsBannerOpen(true);
    }
  }, []);

  const saveToLocalStorage = (prefs: CookiePreferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify(prefs));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
  };

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      functional: true,
      performance: true,
      targeting: true,
    };
    setPreferences(allAccepted);
    saveToLocalStorage(allAccepted);
    setIsBannerOpen(false);
    setIsModalOpen(false);
  };

  const rejectAll = () => {
    const allRejected: CookiePreferences = {
      necessary: true, // Necessary cookies cannot be rejected
      functional: false,
      performance: false,
      targeting: false,
    };
    setPreferences(allRejected);
    saveToLocalStorage(allRejected);
    setIsBannerOpen(false);
    setIsModalOpen(false);
  };

  const savePreferences = (prefs: Partial<CookiePreferences>) => {
    const newPreferences: CookiePreferences = {
      ...preferences,
      ...prefs,
      necessary: true, // Always keep necessary cookies enabled
    };
    setPreferences(newPreferences);
    saveToLocalStorage(newPreferences);
    setIsBannerOpen(false);
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsBannerOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const value: CookieContextType = {
    isBannerOpen,
    isModalOpen,
    preferences,
    acceptAll,
    rejectAll,
    savePreferences,
    openModal,
    closeModal,
  };

  return <CookieContext.Provider value={value}>{children}</CookieContext.Provider>;
};

export const useCookieConsent = () => {
  const context = useContext(CookieContext);
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieProvider');
  }
  return context;
};

