'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function GlobalLocations() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'America/Los_Angeles',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const time = new Intl.DateTimeFormat('en-US', options).format(new Date());
      setCurrentTime(time);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Global Presence,<br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Local Expertise.
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Our network spans continents, but every project gets personal attention.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: HQ Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Global HQ Card */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-blue-100 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-blue-600 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">
                    Global Headquarters
                  </h3>
                  <p className="text-slate-600">Where innovation meets manufacturing</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Smart Flex Manufacturing</p>
                    <p className="text-slate-600">7677 Oakport Street, Suite 1100</p>
                    <p className="text-slate-600">Dublin, CA 94568</p>
                    <p className="text-slate-600">United States</p>
                  </div>
                </div>

                {/* Live Clock */}
                <div className="flex items-center gap-3 bg-white rounded-lg p-4 border border-blue-200">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <div className="flex-1">
                    <p className="text-sm text-slate-600 font-medium">Current Time (PST)</p>
                    <p className="text-2xl font-bold text-slate-900 font-mono tabular-nums">
                      {currentTime || 'Loading...'}
                    </p>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                </div>

                <div className="pt-4 space-y-3">
                  <a 
                    href="tel:+18005551234" 
                    className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors duration-200 group"
                  >
                    <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">+1 (800) 555-1234</span>
                  </a>

                  <a 
                    href="mailto:hello@smartflex.com" 
                    className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors duration-200 group"
                  >
                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">hello@smartflex.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Additional Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <Globe className="w-8 h-8 text-blue-600 mb-3" />
                <p className="text-3xl font-bold text-slate-900 mb-1">50+</p>
                <p className="text-sm text-slate-600">Manufacturing Partners</p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <MapPin className="w-8 h-8 text-purple-600 mb-3" />
                <p className="text-3xl font-bold text-slate-900 mb-1">15</p>
                <p className="text-sm text-slate-600">Countries Covered</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Video Window */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Video Player - High-tech Window */}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-200">
              {/* Dark overlay for subtlety */}
              <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />
              
              {/* Video */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/smartflexgroupcontact.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Decorative border glow */}
              <div className="absolute inset-0 rounded-2xl border-2 border-white/10 pointer-events-none" />
            </div>

            {/* Always Online Card - Dashboard Style */}
            <motion.div
              className="relative -mt-8 mx-6 bg-gradient-to-r from-primary to-slate-900 rounded-xl p-6 text-white shadow-2xl z-20 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              {/* Subtle shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-xl" />
              
              <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <p className="text-sm font-medium text-blue-200">24/7 Global Coverage</p>
                </div>
                <p className="text-2xl font-bold text-white">Always Online. Always Manufacturing.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

