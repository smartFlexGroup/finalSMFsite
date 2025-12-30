'use client';

import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Lock, Cpu } from 'lucide-react';

export default function ValuesBento() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="bg-slate-50 dark:bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            The Smart Flex Standard.
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Our non-negotiable operating principles.
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Card 1 - Speed (2 columns wide) */}
          <motion.div
            variants={item}
            className="md:col-span-2 bg-primary rounded-2xl p-8 relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Icon - Large, absolute positioned in corner */}
            <div className="absolute -right-8 -top-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Zap className="w-64 h-64" strokeWidth={1} />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Quotes in Hours.<br />Parts in Days.
                </h3>
                <p className="text-xl text-blue-100 max-w-lg">
                AI-accelerated estimation backed by real engineering review. We combine technology with human expertise to ensure accuracy.
                </p>
              </div>

              <div className="flex items-center gap-2 text-blue-200">
                <Zap className="w-5 h-5" />
                <span className="text-sm font-medium">Lightning-Fast Turnaround</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Quality (1 column, 2 rows tall) */}
          <motion.div
            variants={item}
            className="md:row-span-2 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-2xl p-8 relative overflow-hidden group hover:shadow-2xl hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300"
          >
            <div className="h-full flex flex-col items-center justify-center text-center">
              {/* Centered Icon */}
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
                <ShieldCheck className="w-24 h-24 text-blue-600 dark:text-blue-400 relative z-10" strokeWidth={1.5} />
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Precision First.
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
                Quality isn't negotiable. Made to your exact specifications. We adhere strictly to your drawings and GD&T requirements.
              </p>

              {/* Standards List */}
              <div className="space-y-3 w-full">
                <div className="flex items-center justify-center gap-3 bg-slate-50 dark:bg-slate-800 rounded-lg py-3 px-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span className="font-semibold text-slate-900 dark:text-white">ISO 9001:2015</span>
                </div>
                <div className="flex items-center justify-center gap-3 bg-slate-50 dark:bg-slate-800 rounded-lg py-3 px-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span className="font-semibold text-slate-900 dark:text-white">AS9100D</span>
                </div>
                <div className="flex items-center justify-center gap-3 bg-slate-50 dark:bg-slate-800 rounded-lg py-3 px-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span className="font-semibold text-slate-900 dark:text-white">ITAR Compliant</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - Privacy (1 column) */}
          <motion.div
            variants={item}
            className="bg-gradient-to-br from-slate-800 to-black rounded-2xl p-8 relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Subtle grid pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }} />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <Lock className="w-12 h-12 text-blue-400" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Your IP is Sacred.
                </h3>
                <p className="text-slate-300 text-lg">
                  Bank-level encryption for every file. Your designs never touch public clouds.
                </p>
              </div>

              <div className="flex items-center gap-2 text-slate-400">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">End-to-End Encrypted</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4 - Innovation (1 column) */}
          <motion.div
            variants={item}
            className="bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-2xl p-8 relative overflow-hidden group hover:shadow-2xl hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300"
          >
            {/* Animated gradient orb */}
            <motion.div
              className="absolute -right-12 -bottom-12 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <Cpu className="w-12 h-12 text-purple-600 dark:text-purple-400" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                  AI-Driven Sourcing.
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg">
                  Machine learning matches your specs to the perfect manufacturer.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-semibold text-purple-700 dark:text-purple-400 bg-purple-100 dark:bg-purple-950 px-3 py-1 rounded-full">
                  Smart Routing
                </span>
                <span className="text-xs font-semibold text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-950 px-3 py-1 rounded-full">
                  Cost Optimization
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

