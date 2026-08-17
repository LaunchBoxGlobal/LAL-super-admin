"use client";
import { motion } from "motion/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const algorithmSteps = [
  {
    id: 0,
    icon: "/face-detection-icon.png",
    prefix: "1",
    title: "Face Detection",
    description:
      "It starts with your selfie. We pick up the visual details that define your look",
  },
  {
    id: 1,
    icon: "/similarity-analysis-icon.png",
    prefix: "+",
    title: "Similarity Analysis",
    description:
      "Searching for familiar faces. Thousands of subtle traits are compared in an instant.",
  },
  {
    id: 2,
    icon: "/compatibility-icon.png",
    prefix: "+",
    title: "Compatibility Matching",
    description:
      "The closest lookalikes rise to the top. Results are ranked to uncover the most convincing matches.",
  },
  {
    id: 3,
    icon: "/match-score-icon.png",
    prefix: "=",
    title: "Your Match Score",
    description:
      'Then comes the "Wait..." moment. A confidence score shows how strong the resemblance really is.',
  },
  {
    id: 4,
    icon: "/language-icon.png",
    prefix: "=",
    title: "Use it in your language",
    description:
      "Available in English, Spanish, French, and Arabic so the experience feels native, not translated.",
  },
];

const SafetyAndTrust = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full pb-10 pt-20 lg:py-20 flex flex-col items-center relative">
      <div className="w-[600px] h-[600px] rounded-full absolute right-[-25%] top-[-40%] z-0 blur-[300px] pointer-events-none bg-blue-500 opacity-50" />

      <div
        id="look-again"
        className="w-full flex flex-col items-center gap-4 text-center relative z-20 padding-x"
      >
        <div className="">
          <span className="font-semibold uppercase text-xs px-4 py-2 glass-card custom-shadow rounded-xl text-[#5E51C9]">
            LOOK AGAIN
          </span>
        </div>
        <h2 className="text-3xl lg:text-[58px] font-semibold leading-[1.2] text-center">
          That One Second Where Your <br className="hidden lg:block" /> Brain
          Goes: <span className="gradient-text">“Wait.”</span>
        </h2>
        <p className="secondary-text text-lg max-w-[700px]">
          Not a random joke result. A real-person resemblance that makes you
          zoom in twice and think, "Wait... that's not me?"
        </p>
      </div>

      <section className="relative overflow-hidden w-full max-w-7xl mx-auto">
        <div className="w-full mx-auto pb-12 lg:py-20 px-4 md:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-0 lg:gap-12">
          {/* Left Visuals */}
          <div className="w-full lg:w-[45%] flex justify-center items-center py-10 order-1 lg:order-1">
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[460px] aspect-square mx-auto flex items-center justify-center">
              {/* Rings */}
              <div className="absolute w-[75%] h-[75%] rounded-full border border-indigo-200/80" />
              <div className="absolute w-[62%] h-[62%] rounded-full border border-indigo-200/80" />
              <div className="absolute w-[50%] h-[50%] rounded-full border border-indigo-200/80" />

              {/* Dots */}
              <motion.div
                className="absolute w-3 h-3 bg-[#5B7EE5] rounded-full top-[28%] right-[17%]"
                animate={{
                  scale: activeStep === 2 ? [1, 1.4, 1] : 1,
                  // opacity: activeStep === 2 ? 1 : 0.4,
                }}
                transition={{
                  // repeat: activeStep === 2 ? Infinity : 0,
                  duration: 2,
                }}
              >
                {activeStep === 2 && (
                  <div className="absolute inset-0 bg-[#5B7EE5] rounded-full animate-ping opacity-60"></div>
                )}
              </motion.div>

              <motion.div
                className="absolute w-2 h-2 bg-[#5B7EE5] rounded-full top-[52%] left-[13%]"
                animate={{
                  scale: activeStep === 1 ? [1, 1.5, 1] : 1,
                  // opacity: activeStep === 1 ? 1 : 0.4,
                }}
                transition={{
                  // repeat: activeStep === 1 ? Infinity : 0,
                  duration: 1.5,
                }}
              >
                {activeStep === 1 && (
                  <div className="absolute inset-0 bg-[#5B7EE5] rounded-full animate-ping opacity-60"></div>
                )}
              </motion.div>

              {/* Center Image */}
              <div className="w-[42%] h-[42%] rounded-full overflow-hidden relative z-10 border-[6px] border-white shadow-xl bg-slate-100">
                <Image
                  src="/girl-face-matching.png"
                  alt="Scanning face"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <motion.div
                  className="absolute left-0 right-0 h-24 bg-gradient-to-b from-transparent via-[#5B7EE5]/10 to-[#5B7EE5]/40 border-b-[3px] border-[#5B7EE5] z-20 pointer-events-none"
                  animate={{ top: ["-40%", "120%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Labels */}
              <LeftFloatingBadge
                text="Face Detection"
                isActive={activeStep === 0}
                isPast={activeStep > 0}
                className="top-[7%] sm:top-[9%] left-1/2 -translate-x-1/2 whitespace-nowrap"
              />
              <LeftFloatingBadge
                text="Similarity"
                isActive={activeStep === 1}
                isPast={activeStep > 1}
                className="top-[38%] left-[-2%] sm:left-[0%] whitespace-nowrap"
              />
              <LeftFloatingBadge
                text="Compatibility"
                isActive={activeStep === 2}
                isPast={activeStep > 2}
                className="top-[48%] right-[-2%] sm:right-[0%] whitespace-nowrap"
              />

              <div
                className={`absolute z-30 px-5 sm:px-6 py-2.5 rounded-full font-bold text-[13px] sm:text-[14px] transition-all duration-500 whitespace-nowrap ${
                  activeStep === 3
                    ? "gradient-bg text-white shadow-[0_8px_25px_-5px_rgba(91,126,229,0.5)] scale-110 opacity-100"
                    : activeStep > 3
                      ? "bg-[#5B7EE5] text-white shadow-md scale-100 opacity-90"
                      : "bg-[#E1E8F7] text-[#89A6EE] shadow-sm scale-95 opacity-80"
                } bottom-[10%] sm:bottom-[10%] left-1/2 -translate-x-1/2`}
              >
                ✦ 94% Match Found
              </div>
            </div>
          </div>

          {/* Right Cards */}
          <div className="w-full lg:w-[55%] flex flex-col gap-4 sm:gap-5 order-2 lg:order-2">
            {algorithmSteps.map((step) => (
              <div
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`p-5 sm:p-6 md:p-7 rounded-[1.5rem] bg-white border border-white transition-all duration-400 flex gap-4 sm:gap-6 cursor-pointer transform-gpu ${
                  activeStep === step.id
                    ? "shadow-[0_20px_60px_-5px_rgba(0,0,0,0.06)] scale-[1.02] border-[#5B7EE5]/5 z-10 relative"
                    : "custom-shadow opacity-50 hover:opacity-100 hover:scale-[1.01] z-0"
                }`}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[12px] bg-[#fff] custom-shadow shrink-0 flex items-center justify-center text-lg sm:text-xl border border-slate-50">
                  <Image
                    src={step.icon}
                    width={20}
                    height={20}
                    className="object-contain"
                    alt={`${step.title} icon`}
                  />
                </div>
                <div className="flex-1 pt-0.5 sm:pt-1">
                  <h4 className="font-bold text-[14px] sm:text-[15px] text-slate-800 mb-1.5 flex items-center gap-1.5 tracking-tight">
                    {step.title}
                  </h4>
                  <p className="text-slate-500 text-[13px] sm:text-[14.5px] leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default SafetyAndTrust;

const LeftFloatingBadge = ({ text, isActive, isPast, className }) => {
  return (
    <div
      className={`absolute z-20 px-4 py-1.5 rounded-full font-bold text-[10px] sm:text-[11px] tracking-wide transition-all duration-500 border ${
        isActive
          ? "bg-white/20 backdrop-blur-xl text-[#5B7EE5] border-white/30 shadow-[0_8px_25px_-5px_rgba(91,126,229,0.3)] scale-110"
          : isPast
            ? "bg-white/10 text-[#5B7EE5] border-white/20 shadow-sm scale-100 opacity-100"
            : "bg-white/60 text-slate-400 border-white shadow-sm scale-95 opacity-60"
      } ${className}`}
    >
      {text}
    </div>
  );
};
