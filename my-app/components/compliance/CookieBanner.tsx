"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCookieConsent } from '@/context/CookieContext';
import { Cookie } from 'lucide-react';

const CookieBanner = () => {
  const { isBannerOpen, acceptAll, rejectAll, openModal } = useCookieConsent();

  return (
    <AnimatePresence>
      {isBannerOpen && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 w-full z-50 bg-slate-900 text-white shadow-2xl border-t border-slate-700"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              {/* Content */}
              <div className="flex items-start gap-3 flex-1">
                <Cookie className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">
                    This website uses cookies
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    We use cookies to enhance your browsing experience, serve personalized content, 
                    and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. 
                    You can manage your preferences or learn more by clicking "Cookie Settings".
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full md:w-auto">
                <button
                  onClick={openModal}
                  className="px-4 py-2 text-sm font-medium text-white bg-transparent border border-white/30 rounded-md hover:bg-white/10 transition-colors whitespace-nowrap"
                >
                  Cookie Settings
                </button>
                <button
                  onClick={rejectAll}
                  className="px-4 py-2 text-sm font-medium text-white bg-slate-700 rounded-md hover:bg-slate-600 transition-colors whitespace-nowrap"
                >
                  Disable All
                </button>
                <button
                  onClick={acceptAll}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors whitespace-nowrap"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;

