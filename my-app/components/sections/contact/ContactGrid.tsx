'use client';

import { motion } from 'framer-motion';
import { Rocket, HeadphonesIcon, Handshake, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ContactGrid() {
  const cards = [
    {
      icon: Rocket,
      title: 'Start a Build',
      description: 'Ready to manufacture?',
      cta: 'Get Instant Quote',
      ctaType: 'primary' as const,
      href: '/quote',
      gradient: 'from-blue-500/20 to-purple-500/20',
      iconColor: 'text-blue-400'
    },
    {
      icon: HeadphonesIcon,
      title: 'Support',
      description: 'Have an active order?',
      cta: 'Visit Support Center',
      ctaType: 'secondary' as const,
      href: '/support',
      gradient: 'from-green-500/20 to-teal-500/20',
      iconColor: 'text-green-400'
    },
    {
      icon: Handshake,
      title: 'Partners',
      description: 'Want to join the network?',
      cta: 'Apply as Supplier',
      ctaType: 'link' as const,
      href: '/partners',
      gradient: 'from-orange-500/20 to-pink-500/20',
      iconColor: 'text-orange-400'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative -mt-48 z-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {cards.map((card, index) => {
            const Icon = card.icon;
            
            return (
              <motion.div
                key={card.title}
                variants={item}
                className="group relative"
              >
                {/* Outer glow effect on hover */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${card.gradient} rounded-2xl blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-700`}
                />

                {/* 3D Glass Card */}
                <div className="relative bg-white/5 backdrop-blur-xl border-t border-l border-white/20 border-b border-r border-white/5 rounded-2xl p-8 h-full flex flex-col transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-white/10 shadow-2xl shadow-black/50 overflow-hidden">
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <motion.div
                      className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: '-100%', skewX: -20 }}
                      whileHover={{ x: '200%' }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      style={{ transform: 'translateX(-100%) skewX(-20deg)' }}
                    />
                  </div>

                  {/* Icon with glow effect */}
                  <div className="mb-6 relative z-10">
                    <div className={`relative inline-flex p-4 rounded-xl bg-gradient-to-br ${card.gradient} backdrop-blur-sm`}>
                      <div className="absolute inset-0 bg-white/10 rounded-xl" />
                      <Icon 
                        className={`w-8 h-8 ${card.iconColor} relative z-10 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.7)] transition-all duration-300`} 
                        strokeWidth={1.5} 
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-50 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-slate-300 text-lg group-hover:text-slate-200 transition-colors duration-300">
                      {card.description}
                    </p>
                  </div>

                  {/* CTA - All buttons now have consistent solid white styling */}
                  <div className="mt-8 relative z-10">
                    <Link href={card.href}>
                      <motion.button
                        className="w-full bg-white hover:bg-gray-100 text-slate-900 font-semibold px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {card.cta}
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </Link>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className={`absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br ${card.gradient} blur-2xl`} />
                  </div>

                  {/* Top edge highlight for 3D effect */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-50" />
                  <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-white/40 via-white/20 to-transparent opacity-50" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
