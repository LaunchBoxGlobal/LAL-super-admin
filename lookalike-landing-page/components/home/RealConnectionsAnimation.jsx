"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { User, Lock, Eye, Flag, Check, Sparkles } from "lucide-react";

export default function RealConnectionsAnimation() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const statusTexts = [
    "Uploading your selfie...",
    "Scanning the details...",
    "Finding real matches...",
    "Real Match found!",
  ];

  return (
    <main className="min-h-screen flex items-center justify-center font-sans text-slate-800">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Side: Avatar & Verification */}
        <div className="flex flex-col items-center justify-center relative pt-8 lg:pt-0">
          {/* Avatar Area */}
          <div className="relative w-[300px] h-[300px] rounded-full flex items-center justify-center">
            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-full border-[1.5px] border-indigo-200/60 shadow-[0_0_40px_-5px_rgba(91,126,229,0.15)] bg-gradient-to-tr from-[#EBEBFA] to-white/40"></div>

            {/* Inner border ring */}
            <div className="absolute w-[92%] h-[92%] rounded-full border border-indigo-100/50"></div>

            {/* Image Container */}
            <div className="relative w-[82%] h-[82%] rounded-full overflow-hidden border-[5px] border-white shadow-xl bg-slate-100 z-10">
              <Image
                src="https://picsum.photos/seed/face1/500/500"
                alt="Selfie"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />

              {/* Scanning Line - only active during scanning steps (0, 1, 2) */}
              <AnimatePresence>
                {step < 3 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 pointer-events-none"
                  >
                    <motion.div
                      className="absolute left-0 right-0 h-1 bg-[#5B7EE5] shadow-[0_0_15px_1px_rgba(91,126,229,0.8)]"
                      animate={{ top: ["0%", "100%", "0%"] }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <motion.div
                      className="absolute left-0 right-0 h-24 bg-gradient-to-t from-[#5B7EE5]/20 to-transparent"
                      animate={{
                        top: ["0%", "100%", "0%"],
                        transform: "translateY(-100%)",
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Big Blue Checkmark when fully verified (step 3) */}
            <AnimatePresence>
              {step === 3 && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="absolute bottom-5 right-5 z-30 w-[4.5rem] h-[4.5rem] rounded-full bg-[#5B7EE5] border-[5px] border-white flex items-center justify-center shadow-xl"
                >
                  <Check size={36} className="text-white stroke-[3.5]" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Verification Steps Checks */}
          <div className="flex items-center gap-6 md:gap-10 mt-10">
            <VerificationCheck label="Selfie Captured" active={step >= 1} />
            <VerificationCheck label="Liveness Check" active={step >= 2} />
            <VerificationCheck label="Face Verified" active={step >= 3} />
          </div>

          {/* Status Label Box */}
          <motion.div
            key={step}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-8 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-[0_8px_30px_-5px_rgba(0,0,0,0.04)] border border-white flex items-center gap-2.5 z-10 mx-auto"
          >
            <Sparkles size={20} className="text-[#FBBF24] fill-[#FBBF24]" />
            <span className="font-bold text-[#5B7EE5] text-[15px] tracking-tight">
              {statusTexts[step]}
            </span>
          </motion.div>
        </div>

        {/* Right Side: List & Trust Score */}
        <div className="flex flex-col gap-4">
          {/* List Cards */}
          <div className="flex flex-col gap-3.5">
            <RuleCard
              icon={
                <User size={18} className="text-slate-600 fill-slate-700/10" />
              }
              title="You're talking to a real person"
              desc="Every account goes through live selfie verification before they can match with anyone."
            />
            <RuleCard
              icon={
                <Lock
                  size={18}
                  className="text-yellow-600 fill-yellow-600/10"
                />
              }
              title="Your face data stays yours"
              desc="Encrypted, never stored as raw images, and never sold. Full stop."
            />
            <RuleCard
              icon={
                <Eye size={18} className="text-amber-700 fill-amber-700/10" />
              }
              title="You decide who sees you"
              desc="Control your visibility, who can find you, and what you share all from one place."
            />
            <RuleCard
              icon={
                <Flag size={18} className="text-rose-600 fill-rose-600/10" />
              }
              title="Something feels off? One tap."
              desc="Flag, block, report and an actual moderation team reviews it around the clock."
            />
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-[1.8rem] p-6 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.05)] border border-white mt-4 flex flex-col gap-5">
            <h3 className="font-bold text-slate-900 text-sm tracking-tight mb-2">
              Platform Trust Score
            </h3>
            <div className="grid grid-cols-3 gap-6 w-full">
              <TrustBar label="Safety" score={98} />
              <TrustBar label="Privacy" score={96} />
              <TrustBar label="Authenticity" score={99} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function VerificationCheck({ label, active }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <motion.div
        animate={{
          backgroundColor: active ? "#5B7EE5" : "#ffffff",
          color: active ? "#ffffff" : "#475569",
          borderColor: active ? "#5B7EE5" : "#e2e8f0",
          scale: active ? 1 : 0.95,
        }}
        className="w-[2.75rem] h-[2.75rem] rounded-full flex items-center justify-center border-[1.5px] shadow-sm transition-colors duration-400"
      >
        <Check size={20} className="stroke-[3]" />
      </motion.div>
      <span
        className={`text-[11px] font-bold text-center w-max transition-colors duration-400 ${active ? "text-[#5B7EE5]" : "text-slate-400"}`}
      >
        {label.split(" ").map((word, i) => (
          <span key={i} className="block">
            {word}
          </span>
        ))}
      </span>
    </div>
  );
}

function RuleCard({ icon, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-white custom-shadow backdrop-blur-sm rounded-[1.8rem] p-5 md:px-6 md:py-5 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] border border-white flex items-start gap-4 transition-transform hover:scale-[1.01]"
    >
      <div className="bg-slate-50/80 w-[2.75rem] h-[2.75rem] rounded-full flex items-center justify-center shrink-0 border border-slate-100 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] text-slate-600 mt-0.5">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-slate-900 text-[15px] mb-1.5 tracking-tight">
          {title}
        </h4>
        <p className="text-slate-500 text-[13.5px] leading-relaxed max-w-[95%]">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

function TrustBar({ label, score }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-end">
        <span className="text-[11px] font-medium text-slate-500">{label}</span>
        <span className="text-[11px] font-bold text-[#5B7EE5] leading-none mb-px">
          {score}%
        </span>
      </div>
      <div className="w-full bg-[#F1F5F9] h-1.5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${score}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="bg-[#5B7EE5] h-full rounded-full"
        />
      </div>
    </div>
  );
}
