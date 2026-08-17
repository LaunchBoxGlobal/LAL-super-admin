"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { WaitlistModal } from "./WaitlistModal";

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 relative selection:bg-indigo-100 selection:text-indigo-900 font-sans overflow-hidden">
      {/* Soft Ambient Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-200/40 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-200/40 rounded-full blur-[150px] pointer-events-none mix-blend-multiply" />
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-pink-100/50 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />

      {/* Navigation */}
      <nav className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-gray-900 tracking-tight text-lg">
            Aura
          </span>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
        >
          Join The Waitlist
        </button>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-32 flex flex-col items-center justify-center min-h-[80vh] text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-gray-100 mb-8"
        >
          <span className="flex w-2 h-2 rounded-full bg-indigo-500"></span>
          <span className="text-sm font-medium text-gray-600">
            Private Beta Available Soon
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="text-5xl md:text-7xl font-semibold text-gray-900 tracking-[-0.02em] leading-[1.1] max-w-4xl mb-8"
        >
          Design that thinks{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            with you.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-500 max-w-2xl mb-12 font-light leading-relaxed"
        >
          Experience a new paradigm of creative tooling. Built for speed,
          precision, and elegance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-full sm:w-auto"
          >
            Get Early Access
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </main>

      {/* Waitlist Modal */}
      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
