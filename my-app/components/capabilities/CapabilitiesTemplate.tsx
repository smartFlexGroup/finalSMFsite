"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { CapabilityData } from "./capabilities-data";
import CtaBand from "@/components/sections/CtaBand";

interface CapabilitiesTemplateProps {
  data: CapabilityData;
}

export default function CapabilitiesTemplate({ data }: CapabilitiesTemplateProps) {
  return (
    <div className="min-h-screen">
      {/* Section 1: Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src={data.heroVideo} type="video/mp4" />
          </video>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="max-w-4xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl"
            >
              {data.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 text-xl text-gray-200 md:text-2xl"
            >
              {data.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="#quote"
                className="inline-block rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-accent/90 hover:scale-105"
              >
                Get a {data.title} Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Stats Bar */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {data.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-white md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-lg text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Overview (Split Screen) */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6 text-4xl font-bold text-primary md:text-5xl">
                {data.overview.heading}
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                {data.overview.content}
              </p>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] overflow-hidden rounded-2xl shadow-2xl"
            >
              <Image
                src={data.overview.imageSrc}
                alt={data.overview.heading}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Tech Specs */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-bold text-primary md:text-5xl">
              Technical Specifications
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Materials Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl bg-white p-8 shadow-lg"
            >
              <h3 className="mb-6 text-2xl font-bold text-primary">
                Materials
              </h3>
              <ul className="space-y-4">
                {data.specs.materials.map((material, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-lg text-gray-700">{material}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Finishes Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl bg-white p-8 shadow-lg"
            >
              <h3 className="mb-6 text-2xl font-bold text-primary">
                Finishes
              </h3>
              <ul className="space-y-4">
                {data.specs.finishes.map((finish, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-lg text-gray-700">{finish}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: Design Guidelines */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-bold text-primary md:text-5xl">
              Design Guidelines
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Best practices for optimal manufacturing results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {data.guidelines.map((guideline, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-md transition-all hover:border-accent hover:shadow-xl"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all group-hover:bg-accent group-hover:text-white">
                  {/* Icon placeholder - you can replace with actual icons */}
                  <div className="text-2xl font-bold">
                    {guideline.icon === "corner-radius" ? "⌒" : "⫴"}
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold text-primary">
                  {guideline.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {guideline.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: CTA Band with 3D Viewer */}
      <CtaBand modelPath={data.model3d} />
    </div>
  );
}

