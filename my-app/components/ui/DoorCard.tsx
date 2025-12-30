"use client";

import { motion } from "framer-motion";
import { LucideIcon, RotateCcw } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

interface DoorCardProps {
  title: string;
  icon: LucideIcon;
  videoSrc: string;
  description: string;
  link?: string;
}

export default function DoorCard({
  title,
  icon: Icon,
  videoSrc,
  description,
  link,
}: DoorCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        // Video play failed, but that's okay
        console.log("Video play prevented:", err);
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="relative h-[600px] w-full"
      style={{ perspective: "1000px" }}
    >
      {/* Card Container - Handles 3D Flip */}
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* FRONT FACE */}
        <div
          className={`absolute w-full h-full ${
            isFlipped ? "pointer-events-none" : "pointer-events-auto"
          }`}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {/* Background Behind Door - The "Room" */}
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
              {/* Animated gradient that shows when door opens */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.4),transparent)]" />
              {/* Subtle animated glow effect */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(234,179,8,0.15),transparent)]" />
            </div>
          </div>

          {/* The Door */}
          <motion.div
            className={`absolute inset-0 rounded-xl border-2 overflow-hidden cursor-pointer transition-colors ${
              isHovered
                ? "border-yellow-500 dark:border-blue-500"
                : "border-slate-800"
            }`}
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: "left center",
            }}
            animate={{
              rotateY: isHovered ? -15 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => setIsFlipped(true)}
          >
            {/* Video Background - Always Visible */}
            <div className="absolute inset-0 z-0">
              <video
                ref={videoRef}
                src={videoSrc}
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              {/* Dark Overlay for Text Readability */}
              <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-8">
              <motion.div
                className="mb-6"
                animate={{
                  scale: isHovered ? 1.1 : 1,
                  rotateZ: isHovered ? 5 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <Icon
                  className="w-20 h-20 text-white drop-shadow-lg"
                  strokeWidth={1.5}
                />
              </motion.div>

              <h3 className="text-3xl font-bold text-white text-center drop-shadow-lg">
                {title}
              </h3>

              {/* Door Handle Visual Detail */}
              <div className="absolute right-10 top-1/2 -translate-y-1/2 w-3 h-16 bg-white/30 rounded-full shadow-md" />
            </div>

            {/* Door Shadow - Appears on Hover */}
            <div
              className={`absolute inset-y-0 -right-2 w-8 bg-gradient-to-r from-black/30 to-transparent transition-opacity duration-300 pointer-events-none ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            />
          </motion.div>
        </div>

        {/* BACK FACE */}
        <div
          className={`absolute w-full h-full ${
            isFlipped ? "pointer-events-auto" : "pointer-events-none"
          }`}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 p-10 flex flex-col justify-between overflow-hidden">
            {/* Flip Back Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(false);
              }}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 active:bg-white/40 active:scale-95 flex items-center justify-center transition-all duration-150 hover:scale-110 z-50"
              aria-label="Flip back"
              title="Flip back"
            >
              <RotateCcw className="w-6 h-6 text-white" />
            </button>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-center">
              <Icon className="w-16 h-16 text-white/90 mb-6" strokeWidth={1.5} />
              <h3 className="text-3xl font-bold text-white mb-6">{title}</h3>
              <p className="text-white/90 text-base leading-relaxed">
                {description}
              </p>
            </div>

            {/* Learn More Button */}
            {link && (
              <Link
                href={link}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-colors"
              >
                Learn More
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            )}

            {/* Decorative Pattern */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
