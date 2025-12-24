"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCookieConsent } from '@/context/CookieContext';
import { X, ChevronRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

type CategoryKey = 'privacy' | 'functional' | 'performance' | 'targeting' | 'necessary';

interface CategoryContent {
  title: string;
  heading: string;
  description: string;
  links?: { label: string; href: string }[];
  toggleDisabled?: boolean;
}

const categoryContent: Record<CategoryKey, CategoryContent> = {
  privacy: {
    title: 'Your Privacy',
    heading: 'Your Privacy',
    description: 'When you visit our website, we may store small data files known as cookies on your browser. These cookies help us remember you, understand your preferences, and ensure that the site works the way you expect it to. Some cookies are essential - they allow core site functions like logging in, saving your settings, or displaying the cookie banner itself. Other cookies are optional and help us deliver a more personalized experience.',
    links: [
      { label: 'Request Your Data', href: '/data-request' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Cookie Policy', href: '/cookie-policy' },
    ],
  },
  necessary: {
    title: 'Strictly Necessary Cookies',
    heading: 'Strictly Necessary Cookies',
    description: 'These cookies are essential for the website to function and cannot be turned off in our systems. They are typically set in response to actions you take - like logging in, setting privacy preferences, or filling out forms. You can configure your browser to block or alert you about these cookies, but some parts of the site may not work properly as a result.',
    toggleDisabled: true,
  },
  functional: {
    title: 'Functional Cookies',
    heading: 'Functional Cookies',
    description: 'These cookies enable enhanced features and personalized experiences across the site. They may be set directly by us or by third-party providers whose tools or services we have integrated into our pages. If you choose to disable these cookies, certain features - such as interactive content or personalized settings - may not function as intended.',
  },
  performance: {
    title: 'Performance Cookies',
    heading: 'Performance Cookies',
    description: 'These cookies help us understand how visitors interact with our website. They allow us to count visits, track traffic sources, and identify which pages are performing well - and which ones aren\'t. The insights we gain help us improve site performance and user experience. All data collected is aggregated and anonymous.',
  },
  targeting: {
    title: 'Targeting Cookies',
    heading: 'Targeting Cookies',
    description: 'These cookies may be placed by third-party advertising partners through our website. They help build a profile of your interests so you can be shown relevant ads on other sites. While they do not store personal information directly, they work by uniquely identifying your browser and device.',
  },
};

const CookieModal = () => {
  const { isModalOpen, preferences, closeModal, acceptAll, rejectAll, savePreferences } = useCookieConsent();
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('privacy');
  const [localPreferences, setLocalPreferences] = useState(preferences);

  // Update local preferences when global preferences change
  React.useEffect(() => {
    setLocalPreferences(preferences);
  }, [preferences]);

  const handleToggle = (category: 'functional' | 'performance' | 'targeting') => {
    setLocalPreferences(prev => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleSavePreferences = () => {
    savePreferences(localPreferences);
  };

  const categories: CategoryKey[] = ['privacy', 'necessary', 'functional', 'performance', 'targeting'];

  return (
    <AnimatePresence>
      {isModalOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            onClick={closeModal}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-[61] bg-white dark:bg-slate-900 rounded-xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Do Not Sell My Personal Information
              </h2>
              <button
                onClick={closeModal}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 flex overflow-hidden">
              {/* Sidebar */}
              <div className="w-64 border-r border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 overflow-y-auto">
                <nav className="p-3 space-y-1">
                  {categories.map((category) => {
                    const content = categoryContent[category];
                    const isActive = activeCategory === category;
                    
                    return (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-all ${
                          isActive
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
                        }`}
                      >
                        <span className="font-medium text-sm">{content.title}</span>
                        <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-white' : 'text-gray-400'}`} />
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Main Content */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="max-w-3xl">
                  {/* Category Heading */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {categoryContent[activeCategory].heading}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    {categoryContent[activeCategory].description}
                  </p>

                  {/* Links (if applicable) */}
                  {categoryContent[activeCategory].links && (
                    <div className="mb-6 space-y-2">
                      {categoryContent[activeCategory].links!.map((link, index) => (
                        <Link
                          key={index}
                          href={link.href}
                          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>{link.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Toggle Switch (if applicable) */}
                  {activeCategory !== 'privacy' && (
                    <div className="mt-8 p-4 bg-gray-100 dark:bg-slate-800 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                            {activeCategory === 'necessary' ? 'Always Active' : 'Enable Cookies'}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {activeCategory === 'necessary'
                              ? 'These cookies cannot be disabled.'
                              : `Toggle to ${localPreferences[activeCategory as 'functional' | 'performance' | 'targeting'] ? 'disable' : 'enable'} ${categoryContent[activeCategory].title.toLowerCase()}.`}
                          </p>
                        </div>
                        
                        {/* Toggle Switch */}
                        <button
                          onClick={() => {
                            if (activeCategory !== 'necessary') {
                              handleToggle(activeCategory as 'functional' | 'performance' | 'targeting');
                            }
                          }}
                          disabled={activeCategory === 'necessary'}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            activeCategory === 'necessary'
                              ? 'bg-blue-600 cursor-not-allowed opacity-50'
                              : localPreferences[activeCategory as keyof typeof localPreferences]
                              ? 'bg-blue-600'
                              : 'bg-gray-300 dark:bg-gray-600'
                          }`}
                          aria-label={`Toggle ${categoryContent[activeCategory].title}`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              localPreferences[activeCategory as keyof typeof localPreferences]
                                ? 'translate-x-6'
                                : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 px-6 py-4 border-t border-gray-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
              <button
                onClick={rejectAll}
                className="px-6 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors"
              >
                Disable All
              </button>
              <button
                onClick={acceptAll}
                className="px-6 py-2.5 text-sm font-medium text-white bg-gray-600 dark:bg-slate-600 rounded-lg hover:bg-gray-700 dark:hover:bg-slate-500 transition-colors"
              >
                Allow All
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-6 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Confirm My Choices
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CookieModal;

