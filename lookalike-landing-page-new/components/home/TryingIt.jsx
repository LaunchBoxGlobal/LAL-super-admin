"use client";
import React from "react";
import { motion } from "motion/react";

const quotes = [
  {
    text: "“Bro, this person stole my face.”",
    tag: "No way",
    rotate: -2,
    classes: "md:translate-y-7 md:w-[300px] lg:w-[320px]",
  },
  {
    text: "“Why does she look more like me than my cousin?”",
    tag: "That's literally you",
    rotate: 1,
    classes: "md:-translate-y-2 md:w-[440px] lg:w-[480px]",
  },
  {
    text: "“Downloaded as a joke. Now I need answers.”",
    tag: "Try mine next",
    rotate: -1,
    classes: "md:translate-y-4 md:w-[300px] lg:w-[320px]",
  },
  {
    text: "“I'm sending this to my best friend.”",
    tag: "Send link",
    rotate: 2,
    classes: "md:translate-y-1 md:w-[300px] lg:w-[320px]",
  },
  {
    text: "“It showed a real person, and somehow that was crazier.”",
    tag: "Face twin unlocked",
    rotate: -2,
    classes: "md:translate-y-7 md:w-[440px] lg:w-[480px]",
  },
  {
    text: "“Imagine finding your face twin before your soulmate.”",
    tag: "Plot twist",
    rotate: 2,
    classes: "md:-translate-y-1 md:w-[360px] lg:w-[380px]",
  },
];

const TryingIt = () => {
  return (
    <section className="w-full pt-10 pb-14 lg:pb-20 flex flex-col items-center overflow-hidden relative">
      <div
        id="reactions"
        className="w-full flex flex-col items-center gap-4 text-center relative z-20 padding-x"
      >
        <div className="">
          <span className="font-semibold text-xs px-5 py-2 glass-card rounded-xl text-[#5E51C9]">
            REAL REACTIONS
          </span>
        </div>
        <h2 className="text-4xl lg:text-[58px]  font-semibold leading-[1.2] text-center">
          Things People <br className="hidden lg:block" /> Say After{" "}
          <span className="gradient-text">Trying It</span>
        </h2>
        <p className="secondary-text text-lg max-w-[700px]">
          Inspired by the kind of messages people send when they find an
          unbelievable match.
        </p>
      </div>

      <div className="flex items-center justify-center overflow-hidden font-sans px-7 lg:px-0">
        <div className="py-14 max-w-7xl mx-auto flex flex-wrap justify-center gap-4 items-center">
          {quotes.map((quote, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{
                rotate: 0,
                y: -5,
                scale: 1.01,
              }}
              transition={{
                opacity: { delay: idx * 0.1, duration: 0.6, ease: "easeOut" },
                rotate: { duration: 0.3 },
                y: { duration: 0.3 },
                scale: { duration: 0.3 },
              }}
              style={{
                rotate: `${quote.rotate}deg`,
              }}
              className={`bg-white rounded-[30px] p-6 blue-shadow flex flex-col items-start gap-2 w-full sm:w-[calc(50%-1rem)] md:w-auto hover:z-10 ${quote.classes}`}
            >
              <h3 className="font-bold text-[#0B1527] text-[1.15rem] md:text-[1.35rem] leading-[1.35] tracking-tight">
                {quote.text}
              </h3>

              <div className="bg-[#EAF8FF] px-4 py-1.5 rounded-full mt-auto">
                <span className="text-[#1978C9] font-bold text-[0.8rem] md:text-[0.85rem] tracking-wide">
                  {quote.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TryingIt;
