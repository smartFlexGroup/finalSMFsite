'use client';

import { motion } from 'framer-motion';
import { Search, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function ContactHero() {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <section className="relative min-h-[80vh] bg-primary flex items-center justify-center overflow-hidden pb-64">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} 
        />
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.3, 0.2],
          x: [0, -50, 0],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-blue-300" />
            <span className="text-sm font-medium text-blue-100">AI-Powered Support (Coming Soon)</span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Connect with<br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Smart Flex.
            </span>
          </h1>

          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Get instant answers, track orders, or start your next build. Our intelligent platform is here to help.
          </p>

          {/* Smart Input Field */}
          <motion.div
            className={`relative max-w-2xl mx-auto transition-all duration-300 ${
              isFocused ? 'scale-105' : 'scale-100'
            }`}
            whileHover={{ scale: 1.02 }}
          >
            {/* Glow effect when focused */}
            {isFocused && (
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 0.3 }}
              />
            )}

            {/* Input container */}
            <div className="relative bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border-2 border-white/50">
              <div className="flex items-center gap-4 p-6">
                {/* Icon */}
                <Search className={`w-6 h-6 transition-colors duration-300 ${
                  isFocused ? 'text-blue-600' : 'text-slate-400'
                }`} />

                {/* Input */}
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="How can we help? (e.g., 'I need a quote', 'Order status')..."
                  className="flex-1 text-lg bg-transparent border-none outline-none text-slate-900 placeholder:text-slate-400"
                />

                {/* Badge indicator */}
                {inputValue && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>AI Ready</span>
                  </motion.div>
                )}
              </div>

              {/* Hint text */}
              <div className="px-6 pb-4 flex items-center justify-between text-xs text-slate-500">
                <span>Press Enter to search (V1: Visual Only)</span>
                <span className="flex items-center gap-2">
                  <kbd className="px-2 py-1 bg-slate-100 rounded border border-slate-300 font-mono">⌘</kbd>
                  <kbd className="px-2 py-1 bg-slate-100 rounded border border-slate-300 font-mono">K</kbd>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Quick suggestions */}
          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-sm text-blue-200">Popular:</span>
            {['Request Quote', 'Track Order', 'Technical Support', 'Capabilities'].map((tag, index) => (
              <motion.button
                key={tag}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 rounded-full text-sm font-medium text-white transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {tag}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

