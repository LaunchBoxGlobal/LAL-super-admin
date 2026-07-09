"use client";

import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import {
  Heart,
  Camera,
  //   Home as HomeIcon,
  HomeIcon,
  Search,
  MessageCircle,
  X,
  Check,
  MapPin,
  Clock,
  User,
  Bell,
  SlidersHorizontal,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import RevealMomentMockups from "./RevealMomentMockups";

const featuresTabs = [
  {
    id: "discover",
    icon: "/home-icon.png",
    label: "Discover Feed",
    badge: "THE DOUBLE TAKE",
    title: "Real Resemblance. Endless Curiosity.",
    description:
      "One match turns into another. Then another. Scroll through real people who share surprisingly familiar features and see how deep the rabbit hole goes.",
    features: [
      "Continuous feed of potential lookalikes",
      "Discover matches beyond your top results",
      "Save the profiles worth a second look",
    ],
  },
  {
    id: "lookalike",
    icon: "/search-icon.png",
    label: "LookAlike",
    badge: "THE FAMILIAR STRANGER",
    title: "See real people who actually look like you.",
    description:
      "Your closest real-person matches appear with resemblance scores and face-detail cues, so you can see why someone feels weirdly familiar.",
    features: [
      "Real-person match cards appear one by one",
      "Resemblance scores help compare close matches",
      "Face details show what makes the match feel similar",
    ],
  },
  {
    id: "conversations",
    icon: "/conversations-icon.png",
    label: "Start the Chat",
    badge: "THE NEXT MOVE",
    title: "Found your face twin? Now comes the fun part.",
    description:
      "Open the profile, compare the resemblance, and when curiosity kicks in, start a one-to-one chat with the person behind that familiar face.",
    features: [
      "Start chatting after a match is found",
      "See their profile before you say hello",
      "Turn a weird resemblance into a real conversation",
    ],
  },
];

const RevealMoment = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section className="w-full pb-0 xl:pb-0 pt-10 lg:pt-28 flex flex-col items-center relative padding-x">
      <div
        id="reveal"
        className="w-full flex flex-col items-center gap-4 text-center relative z-20"
      >
        <div className="">
          <span className="font-semibold uppercase text-xs px-4 py-2 glass-card custom-shadow rounded-xl text-[#5E51C9]">
            THE REVEAL MOMENT
          </span>
        </div>
        <h2 className="text-4xl lg:text-[58px] font-semibold leading-[1.2] text-center">
          Built for the <span className="gradient-text">"Send This"</span>{" "}
          moment
        </h2>
        <p className="secondary-text text-lg max-w-[700px]">
          Real-person resemblance that makes you zoom in twice and forward it to
          the chat.
        </p>
      </div>

      <section className="pt-10 lg:pt-14 relative z-20 overflow-hidden w-full">
        <div className="px-0 md:px-8 relative z-10 w-full">
          {/* Tab Navigation */}
          <div className="flex glass-card rounded-full p-1 md:p-1.5 w-max mx-auto lg:mb-5 relative z-10 overflow-hidden">
            {featuresTabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-3 lg:px-6 py-2.5 rounded-full flex items-center gap-1 md:gap-2.5 text-[10px] md:text-[13px] font-semibold transition-all relative ${
                  activeTab === i
                    ? "text-slate-800"
                    : "text-slate-500 hover:text-slate-700 hover:bg-slate-50/50"
                }`}
              >
                {activeTab === i && (
                  <motion.div
                    layoutId="featuresTabIndicator"
                    className="absolute inset-0 bg-[#F4F8FF] rounded-full shadow-inner border border-[#EBF2FC]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <Image
                  src={tab?.icon}
                  alt="lookalike-app-mockup-2"
                  width={14}
                  height={20}
                  className="object-contain relative z-10"
                />
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="flex items-start justify-center flex-wrap gap-6 relative">
            <RevealMomentMockups />

            {/* Right: Dynamic Text Content */}
            <div className="order-1 lg:order-2 flex flex-col justify-center h-full pt-8 xl:pt-24 pb-8 lg:pb-0 relative z-30 w-full xl:max-w-[50%] lg:pr-60">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col h-full"
                >
                  <div className="mb-6 lg:mb-8">
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[10px] glass-card text-[#5B7EE5] font-semibold text-[11px] tracking-widest uppercase mb-5 shadow-[0_2px_10px_-4px_rgba(91,126,229,0.3)]">
                      <Image
                        src={featuresTabs[activeTab].icon}
                        alt={featuresTabs[activeTab].title}
                        width={14}
                        height={20}
                      />
                      {featuresTabs[activeTab].badge}
                    </div>
                    <h2 className="text-3xl lg:text-[38px] font-bold tracking-normal mb-4 lg:mb-5 leading-[1.15] text-slate-800 drop-shadow-sm">
                      {featuresTabs[activeTab].title}
                    </h2>
                    <p className="text-[#888888] text-base sm:text-[15px] leading-normal max-w-lg font-normal">
                      {featuresTabs[activeTab].description}
                    </p>
                  </div>

                  <ul className="flex flex-col gap-2">
                    {featuresTabs[activeTab].features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 + idx * 0.1 }}
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full gradient-bg text-white flex items-center justify-center shrink-0 mt-[2px] shadow-md shadow-[#5B7EE5]/20 group-hover:scale-110 transition-transform">
                          <Check size={12} className="stroke-[3]" />
                        </div>
                        <span className="font-medium text-slate-700 text-[14px] sm:text-[14px] pt-px leading-snug">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <div className="w-[400px] h-[400px] rounded-full bg-blue-300 blur-[300px] absolute top-1/2 -translate-y-1/2 right-[-5%] z-0" />
    </section>
  );
};

export default RevealMoment;
