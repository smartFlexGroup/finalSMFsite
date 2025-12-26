"use client";

import { useState } from 'react';
import { Headset, MessageCircle, ExternalLink } from 'lucide-react';
import ChatModal from '@/components/modals/ChatModal';

export default function SupportBanner() {
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);

  const openChatModal = () => setIsChatModalOpen(true);
  const closeChatModal = () => setIsChatModalOpen(false);

  return (
    <>
      <section className="bg-slate-50 dark:bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-6">
          {/* Left Side - Content */}
          <div className="flex items-center gap-6">
            {/* Icon */}
            <div className="flex-shrink-0 w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Headset className="w-10 h-10" />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-gray-900 dark:text-white mb-2">
                With you. Every step of the way.
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-xl">
                From first idea to final part, we&apos;re here to support your vision.
              </p>
            </div>
          </div>

          {/* Right Side - Actions */}
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            {/* Primary Button */}
            <button
              onClick={openChatModal}
              className="group relative px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 min-w-[200px]"
            >
              <MessageCircle className="w-5 h-5" />
              Chat with an Expert
            </button>

            {/* Secondary Button */}
            <a
              href="/support"
              className="group relative px-6 py-3 bg-transparent border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-900/20 flex items-center justify-center gap-2 min-w-[200px]"
            >
              Visit Support Center
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Chat Modal */}
      <ChatModal isOpen={isChatModalOpen} onClose={closeChatModal} />
    </>
  );
}

