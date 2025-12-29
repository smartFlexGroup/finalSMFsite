"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Box, 
  Layers, 
  Printer, 
  Droplet,
  CheckCircle2,
  Upload,
  FileCheck
} from "lucide-react";

// Process options with icons
const processes = [
  { id: "cnc", label: "CNC Machining", icon: Box },
  { id: "sheet", label: "Sheet Metal", icon: Layers },
  { id: "3d", label: "3D Printing", icon: Printer },
  { id: "injection", label: "Injection Molding", icon: Droplet },
];

// Quantity options
const quantities = [
  { id: "prototype", label: "Prototype", range: "1-10 parts" },
  { id: "pilot", label: "Pilot Run", range: "10-100 parts" },
  { id: "production", label: "Production", range: "100-1k parts" },
  { id: "high-vol", label: "High Volume", range: "1k+ parts" },
];

export default function SmartStart() {
  const [step, setStep] = useState(1);
  const [selectedProcess, setSelectedProcess] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState("");

  const handleProcessSelect = (processId: string) => {
    setSelectedProcess(processId);
    setTimeout(() => setStep(2), 300);
  };

  const handleQuantitySelect = (quantityId: string) => {
    setSelectedQuantity(quantityId);
    setTimeout(() => setStep(3), 300);
  };

  const getProcessLabel = () => {
    const process = processes.find((p) => p.id === selectedProcess);
    return process?.label || "";
  };

  const getQuantityLabel = () => {
    const quantity = quantities.find((q) => q.id === selectedQuantity);
    return quantity?.label || "";
  };

  const progressPercentage = (step / 3) * 100;

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Start Your Project in Seconds
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tell us what you need. We'll match you with the perfect partner.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-accent to-blue-400"
              initial={{ width: "0%" }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-500">
            <span className={step >= 1 ? "text-accent font-semibold" : ""}>
              Process
            </span>
            <span className={step >= 2 ? "text-accent font-semibold" : ""}>
              Quantity
            </span>
            <span className={step >= 3 ? "text-accent font-semibold" : ""}>
              Get Quote
            </span>
          </div>
        </div>

        {/* Multi-Step Form */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {/* Step 1: Process Selection */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-2xl font-semibold text-white text-center mb-8">
                  What process do you need?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {processes.map((process) => {
                    const Icon = process.icon;
                    return (
                      <button
                        key={process.id}
                        onClick={() => handleProcessSelect(process.id)}
                        className="group relative bg-slate-800 hover:bg-slate-750 p-8 rounded-2xl border-2 border-slate-700 hover:border-accent transition-all duration-300 text-left focus:outline-none focus:ring-4 focus:ring-accent/50"
                      >
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                            <Icon className="w-8 h-8 text-accent" />
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold text-white mb-1">
                              {process.label}
                            </h4>
                            <p className="text-gray-400 text-sm">
                              Click to select
                            </p>
                          </div>
                        </div>
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Step 2: Quantity Selection */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-2xl font-semibold text-white text-center mb-8">
                  Estimated Quantity?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                  {quantities.map((quantity) => (
                    <button
                      key={quantity.id}
                      onClick={() => handleQuantitySelect(quantity.id)}
                      className="group relative bg-slate-800 hover:bg-slate-750 px-8 py-6 rounded-2xl border-2 border-slate-700 hover:border-accent transition-all duration-300 text-center focus:outline-none focus:ring-4 focus:ring-accent/50"
                    >
                      <h4 className="text-xl font-bold text-white mb-2">
                        {quantity.label}
                      </h4>
                      <p className="text-gray-400 text-sm">{quantity.range}</p>
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Success & CTA */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Success Animation */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="inline-block mb-8"
                >
                  <div className="relative">
                    <CheckCircle2 className="w-24 h-24 text-green-500" />
                    {/* Pulse ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-4 border-green-500"
                      initial={{ scale: 1, opacity: 1 }}
                      animate={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </div>
                </motion.div>

                <h3 className="text-3xl font-bold text-white mb-4">
                  Great! We Have Partners Ready
                </h3>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                  For <span className="text-accent font-semibold">{getProcessLabel()}</span> runs of{" "}
                  <span className="text-accent font-semibold">{getQuantityLabel()}</span> parts.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="/register"
                    className="group flex items-center gap-3 bg-accent hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <Upload className="w-5 h-5" />
                    Upload CAD & Get Quote
                  </a>
                  <a
                    href="/nda"
                    className="flex items-center gap-2 text-gray-300 hover:text-white font-medium transition-colors duration-300 underline underline-offset-4"
                  >
                    <FileCheck className="w-4 h-4" />
                    I need an NDA first
                  </a>
                </div>

                {/* Reset Button */}
                <button
                  onClick={() => {
                    setStep(1);
                    setSelectedProcess("");
                    setSelectedQuantity("");
                  }}
                  className="mt-8 text-sm text-gray-500 hover:text-gray-300 transition-colors"
                >
                  ← Start Over
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

