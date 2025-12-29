"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { UploadCloud, FileSearch, Factory, PackageCheck } from "lucide-react";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Secure Upload",
    description: "Drag & drop your CAD. AI instantly analyzes geometry.",
    icon: UploadCloud,
  },
  {
    id: 2,
    title: "Engineer Review",
    description: "A human engineer validates DFM and specs.",
    icon: FileSearch,
  },
  {
    id: 3,
    title: "Production",
    description: "Parts are routed to the perfect vetted partner.",
    icon: Factory,
  },
  {
    id: 4,
    title: "Quality & Ship",
    description: "Inspected, certified, and delivered.",
    icon: PackageCheck,
  },
];

export default function Workflow() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Transform scroll progress to horizontal card movement
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-90%"]);

  // Transform scroll progress to progress bar width (0% to 100%)
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Calculate active step based on scroll progress
  const activeStepProgress = useTransform(scrollYProgress, (value) =>
    Math.floor(value * 4)
  );

  return (
    <section
      ref={containerRef}
      className="relative h-[300vh] bg-slate-50"
      aria-label="How It Works Workflow"
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        {/* Header */}
        <div className="relative z-10 pt-16 pb-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            From upload to delivery in four seamless steps
          </motion.p>
        </div>

        {/* Cards Container */}
        <div className="flex-1 relative overflow-hidden">
          <motion.div
            style={{ x }}
            className="absolute inset-0 flex items-center gap-8 px-[10vw]"
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  className="relative flex-shrink-0 w-[80vw] md:w-[600px] h-[400px] md:h-[450px]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {/* Glassmorphism Card */}
                  <div className="relative h-full bg-white/80 backdrop-blur-xl border border-gray-200/50 shadow-2xl rounded-2xl p-8 md:p-12 flex flex-col justify-between">
                    {/* Step Number Badge */}
                    <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                      <span className="text-white text-2xl font-bold">
                        {step.id}
                      </span>
                    </div>

                    {/* Icon */}
                    <motion.div
                      className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mb-6"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-10 h-10 text-blue-600" />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Connecting Line Element (visual only, positioned behind) */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-1/2 -right-8 w-8 h-0.5 bg-gray-300" />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Progress Bar with Knob */}
        <div className="relative z-10 pb-12 px-8 md:px-16">
          <div className="max-w-4xl mx-auto">
            {/* Timeline Bar Container */}
            <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
              {/* Animated Fill */}
              <motion.div
                style={{ width: progressWidth }}
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
              />
            </div>

            {/* Progress Knob */}
            <motion.div
              style={{
                left: progressWidth,
              }}
              className="absolute -top-3 w-8 h-8 -ml-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-lg border-4 border-white"
            >
              {/* Pulse Effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-blue-400"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Step Labels */}
            <div className="flex justify-between mt-6">
              {steps.map((step) => (
                <motion.div
                  key={step.id}
                  className="flex flex-col items-center"
                  style={{
                    opacity: useTransform(
                      scrollYProgress,
                      [
                        (step.id - 1) / 4 - 0.1,
                        (step.id - 1) / 4,
                        step.id / 4,
                      ],
                      [0.4, 1, 0.4]
                    ),
                  }}
                >
                  <span className="text-xs md:text-sm font-semibold text-slate-700">
                    Step {step.id}
                  </span>
                  <span className="text-xs text-slate-500 mt-1 hidden md:block">
                    {step.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

