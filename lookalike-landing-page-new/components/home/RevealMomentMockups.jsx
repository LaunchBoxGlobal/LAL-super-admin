"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function RevealMomentMockups() {
  return (
    <div className="w-full max-w-[680px] flex items-center justify-center relative min-h-[400px] md:min-h-[650px]">
      {/* Center Mockup */}
      <Image
        src="/center-mockup.png"
        alt="Center Mockup"
        width={433}
        height={505}
        className="
          relative
          z-20
          object-contain
          w-[220px]
          md:w-[320px]
          lg:w-[433px]
          h-auto
        "
      />

      {/* LEFT SIDE */}
      <motion.div
        className="absolute z-30"
        animate={{
          opacity: [0, 1, 1, 1, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.15, 0.65, 0.8, 1],
        }}
        style={{
          left: 0,
          bottom: "12%",
        }}
      >
        {/* Hello Bubble */}
        <motion.div
          className="
            absolute
            -top-10
            right-8
            z-40
            bg-white
            border-2
            border-gray-100
            rounded-xl
            rounded-bl-none
            px-3
            py-2
            text-xs
            md:text-sm
            shadow-lg
          "
          animate={{
            opacity: [0, 0, 0, 1, 1, 0],
            y: [10, 10, 10, 0, 0, 10],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.45, 0.55, 0.65, 0.8, 1],
          }}
        >
          Hello!
        </motion.div>

        <Image
          src="/left-mockup.png"
          alt="Left Mockup"
          width={280}
          height={350}
          className="
            object-contain
            w-[140px]
            md:w-[220px]
            lg:w-[280px]
            h-auto
            -rotate-6
          "
        />
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        className="absolute z-10"
        animate={{
          opacity: [0, 0, 1, 1, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.25, 0.4, 0.8, 1],
        }}
        style={{
          right: "6%",
          bottom: "15%",
        }}
      >
        {/* Celebration Cone */}
        <motion.div
          className="absolute -top-14 left-10 z-30"
          animate={{
            opacity: [0, 0, 0, 1, 1, 0],
            scale: [0.8, 0.8, 0.8, 1, 1, 0.8],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.45, 0.55, 0.65, 0.8, 1],
          }}
        >
          <Image
            src="/celeberation-cone.png"
            alt="celeberation-cone"
            width={102}
            height={102}
            className="
              object-contain
              w-[50px]
              md:w-[75px]
              lg:w-[102px]
              h-auto
            "
          />
        </motion.div>

        <Image
          src="/right-mockup.png"
          alt="Right Mockup"
          width={240}
          height={400}
          className="
            object-contain
            w-[130px]
            md:w-[190px]
            lg:w-[240px]
            h-auto
            rotate-[2deg]
          "
        />
      </motion.div>
    </div>
  );
}
