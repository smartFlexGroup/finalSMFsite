"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MorphingContainerProps {
  width: number;
  height: number;
  x: number;
  arrowX?: number;
  children: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function MorphingContainer({
  width,
  height,
  x,
  arrowX,
  children,
  onMouseEnter,
  onMouseLeave,
}: MorphingContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{
        opacity: 1,
        scale: 1,
        width,
        height,
        x,
      }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 20,
        mass: 0.5,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute top-full mt-4 bg-white dark:bg-slate-900 shadow-xl dark:shadow-slate-950/50 rounded-xl overflow-hidden border border-border"
      style={{
        left: 0,
      }}
    >
      {/* Arrow pointing to trigger */}
      <div
        className="absolute -top-2 w-4 h-4 bg-white dark:bg-slate-900 border-t border-l border-border rotate-45"
        style={{
          left: arrowX !== undefined ? `${arrowX}px` : '50%',
          transform: arrowX !== undefined ? 'translateX(-50%) rotate(45deg)' : 'translateX(-50%) rotate(45deg)',
        }}
      />
      
      {/* Content with fade in/out */}
      <div className="relative z-10 p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={String(children)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
              duration: 0.2,
            }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
