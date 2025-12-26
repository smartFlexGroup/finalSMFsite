"use client";

import { X, Sparkles, MessageSquare, Calendar, Mail } from 'lucide-react';

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatModal({ isOpen, onClose }: ChatModalProps) {
  if (!isOpen) return null;

  const supportOptions = [
    {
      icon: Sparkles,
      title: "Ask AI Engineer",
      description: "Get instant answers from our AI assistant",
      href: "/ai-assistant",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      iconColor: "text-purple-600 dark:text-purple-400",
      hoverColor: "hover:bg-purple-100 dark:hover:bg-purple-900/30"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our support team",
      href: "#",
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        alert("Live chat integration coming soon (Intercom/Drift)");
      },
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      iconColor: "text-blue-600 dark:text-blue-400",
      hoverColor: "hover:bg-blue-100 dark:hover:bg-blue-900/30"
    },
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "Book a time with our experts",
      href: "#",
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        alert("Calendly integration coming soon");
      },
      bgColor: "bg-green-50 dark:bg-green-900/20",
      iconColor: "text-green-600 dark:text-green-400",
      hoverColor: "hover:bg-green-100 dark:hover:bg-green-900/30"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      href: "mailto:support@smartflexgroup.com",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      iconColor: "text-orange-600 dark:text-orange-400",
      hoverColor: "hover:bg-orange-100 dark:hover:bg-orange-900/30"
    }
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl mx-4 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:bg-white/20 p-2 rounded-full transition-colors duration-200"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
          <h2 className="text-3xl font-bold text-white">How can we help?</h2>
          <p className="text-blue-100 mt-2">Choose your preferred support channel</p>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {supportOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <a
                  key={index}
                  href={option.href}
                  onClick={option.onClick}
                  className={`group relative p-6 rounded-xl border border-gray-200 dark:border-slate-700 ${option.bgColor} ${option.hoverColor} transition-all duration-200 hover:shadow-lg hover:scale-105 cursor-pointer`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${option.bgColor} ${option.iconColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {option.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {option.description}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
            <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
              <strong>Support Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM PST
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}

