"use client";

import React from 'react';
import { useAccessibility } from '@/context/AccessibilityContext';
import { X, Plus, Minus, Undo2 } from 'lucide-react';

const AccessibilityPanel = () => {
  const {
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
  } = useAccessibility();

  const increaseTextSize = () => {
    const newSize = Math.min(textSize + 0.1, 1.6);
    setTextSize(Math.round(newSize * 10) / 10);
  };

  const decreaseTextSize = () => {
    const newSize = Math.max(textSize - 0.1, 0.8);
    setTextSize(Math.round(newSize * 10) / 10);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop/Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-[60] transition-opacity"
        onClick={togglePanel}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className="fixed right-0 top-0 h-full w-80 z-[70] bg-white dark:bg-gray-900 shadow-xl border-l border-gray-200 dark:border-gray-700 flex flex-col"
        role="dialog"
        aria-labelledby="accessibility-title"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2
            id="accessibility-title"
            className="text-xl font-bold text-gray-900 dark:text-white"
          >
            Accessibility Tools
          </h2>
          <button
            onClick={togglePanel}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors"
            aria-label="Close accessibility panel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {/* Section 1: Visual Adjustments */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Visual Adjustments
            </h3>
            
            <div className="space-y-3">
              <label className="text-sm text-gray-700 dark:text-gray-300 block">
                Text Size
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={decreaseTextSize}
                  disabled={textSize <= 0.8}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors text-gray-900 dark:text-white"
                  aria-label="Decrease text size"
                >
                  <Minus className="w-4 h-4" />
                  <span className="text-sm font-medium">Decrease</span>
                </button>
                <button
                  onClick={increaseTextSize}
                  disabled={textSize >= 1.6}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors text-gray-900 dark:text-white"
                  aria-label="Increase text size"
                >
                  <Plus className="w-4 h-4" />
                  <span className="text-sm font-medium">Increase</span>
                </button>
              </div>
              <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                Current: {Math.round(textSize * 100)}%
              </div>
            </div>
          </div>

          {/* Section 2: Color Settings */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Color Settings
            </h3>
            
            <div className="space-y-3">
              {/* High Contrast Toggle */}
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <label htmlFor="high-contrast" className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                  High Contrast Mode
                </label>
                <button
                  id="high-contrast"
                  role="switch"
                  aria-checked={highContrast}
                  onClick={() => setHighContrast(!highContrast)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
                    highContrast ? 'bg-accent' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      highContrast ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Grayscale Toggle */}
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <label htmlFor="grayscale" className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                  Grayscale Mode
                </label>
                <button
                  id="grayscale"
                  role="switch"
                  aria-checked={grayscale}
                  onClick={() => setGrayscale(!grayscale)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
                    grayscale ? 'bg-accent' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      grayscale ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Underline Links Toggle */}
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <label htmlFor="underline-links" className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                  Underline All Links
                </label>
                <button
                  id="underline-links"
                  role="switch"
                  aria-checked={underlineLinks}
                  onClick={() => setUnderlineLinks(!underlineLinks)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
                    underlineLinks ? 'bg-accent' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      underlineLinks ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Section 3: Animation */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Animation
            </h3>
            
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <label htmlFor="pause-animations" className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                Pause Animations
              </label>
              <button
                id="pause-animations"
                role="switch"
                aria-checked={pauseAnimations}
                onClick={() => setPauseAnimations(!pauseAnimations)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
                  pauseAnimations ? 'bg-accent' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    pauseAnimations ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={resetSettings}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors text-gray-900 dark:text-white"
          >
            <Undo2 className="w-4 h-4" />
            <span className="font-medium">Reset All Settings</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default AccessibilityPanel;

