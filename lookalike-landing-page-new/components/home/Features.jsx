"use client";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

const similarityMatches = [
  {
    name: "Sofia R.",
    age: 24,
    location: "New York",
    match: "94%",
    image: "/sofiya-image.png",
  },
  {
    name: "Mia L.",
    age: 22,
    location: "London",
    match: "87%",
    image: "/mia-l-image.png",
  },
  {
    name: "Emma K.",
    age: 25,
    location: "Paris",
    match: "83%",
    image: "/emma-profile.png",
  },
  {
    name: "Aria V.",
    age: 23,
    location: "Tokyo",
    match: "79%",
    image: "/aria-image.png",
  },
];

const Features = () => {
  return (
    <section className="w-full pt-10 lg:pb-20 flex flex-col items-center overflow-hidden relative padding-x">
      <div
        id="features"
        className="w-full flex flex-col items-center gap-4 text-center relative z-20"
      >
        <div className="mb-3">
          <span className="font-semibold tracking-wider uppercase text-xs px-4 py-2 glass-card custom-shadow rounded-xl text-[#5E51C9]">
            LOOKALIKE FEATURE
          </span>
        </div>
        <h2 className="text-4xl lg:text-[58px] font-semibold leading-[1.2] text-center">
          Your LookAlike Might Not Be Famous. <br className="hidden lg:block" />{" "}
          That's What Makes It <span className="gradient-text">Better</span>
        </h2>
        <p className="secondary-text text-lg max-w-[700px]">
          Celebrities are already everywhere. Your real lookalike could be
          someone living a completely normal life.
        </p>
      </div>

      <section className="py-10 relative overflow-hidden w-full">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center">
          {/* Top Avatar Node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center relative z-10"
          >
            <Image
              src="/girl-profile-image.png"
              className="object-cover w-[158px] h-[158px]"
              alt="You"
              width={188}
              height={188}
              referrerPolicy="no-referrer"
            />
            <div className="bg-[#5B7EE5] text-white text-[11px] font-bold px-4 py-1.5 rounded-full relative z-20 shadow-lg shadow-[#5B7EE5]/20 -mt-7">
              You
            </div>
          </motion.div>

          {/* Top Connection Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: 32 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
            className="w-px bg-indigo-200 mt-4"
          />

          {/* Info Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/80 backdrop-blur-md shadow-[0_8px_30px_-10px_rgba(91,126,229,0.15)] my-4 border border-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-[#5B7EE5] font-bold text-[13px] sm:text-[14px] tracking-tight flex items-center gap-2 relative z-10"
          >
            <span className="text-base">🧠</span> Similarity based on facial
            features
          </motion.div>

          {/* Bottom Connection Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: 40 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 1.2, ease: "easeInOut" }}
            className="w-px bg-indigo-200"
          />

          {/* Match Cards Grid */}
          <div className="w-full max-w-[768px] grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 lg:gap-6 mt-4">
            {similarityMatches.map((match, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 1.6 + idx * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative overflow-hidden shadow-lg shadow-slate-200/50 cursor-pointer rounded-3xl"
              >
                <Image
                  src={match.image}
                  alt={match.name}
                  width={178}
                  height={178}
                  className="object-contain transition-transform duration-700 rounded-3xl"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Features;
