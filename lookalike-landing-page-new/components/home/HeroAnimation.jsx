import Image from "next/image";
import React, { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import FloatingCard from "./FloatingCard";

const ORBITS = [
  {
    radius: 198,
    count: 5,
    size: 10,
    duration: 18,
    color: "#818CF8",
    direction: 1,
  },
  {
    radius: 258,
    count: 4,
    size: 12,
    duration: 25,
    color: "#A78BFA",
    direction: -1,
  },
  {
    radius: 305,
    count: 6,
    size: 12,
    duration: 30,
    color: "#60A5FA",
    direction: 1,
  },
];

const HeroAnimation = () => {
  return (
    <div className="flex-1 w-full relative min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] flex items-center justify-center">
      {/* Concentric Circles Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
        <motion.div
          className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[400px] lg:h-[400px] rounded-full border-[4px] border-[#5E51C940]"
          // initial={{ scale: 0, opacity: 0 }}
          // animate={{ scale: 1, opacity: 1 }}
          // transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.div
          className="absolute w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] lg:w-[520px] lg:h-[520px] rounded-full border-[4px] border-[#5E51C940]"
          // initial={{ scale: 0, opacity: 0 }}
          // animate={{ scale: 1, opacity: 1 }}
          // transition={{ duration: 1, delay: 0.4 }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] lg:w-[650px] lg:h-[650px] rounded-full border-[4px] border-[#5E51C940]"
          // initial={{ scale: 0, opacity: 0 }}
          // animate={{ scale: 1, opacity: 1 }}
          // transition={{ duration: 1, delay: 0.6 }}
        />
        {/* Inner purple glow */}
        <div className="absolute w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl mix-blend-multiply" />
      </div>

      {/* Revolving Dots */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {ORBITS.map((orbit, orbitIndex) =>
          Array.from({ length: orbit.count }).map((_, i) => {
            const offset = (360 / orbit.count) * i;

            return (
              <OrbitDot
                key={`${orbitIndex}-${i}`}
                radius={orbit.radius}
                size={orbit.size}
                duration={orbit.duration}
                direction={orbit.direction}
                color={orbit.color}
                offset={offset}
              />
            );
          }),
        )}
      </div>

      {/* Phone Mockup Container */}
      <motion.div
        className="relative z-20"
        // initial={{ y: 50, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      >
        <Image
          src={"/lookalike-app-mockup.png"}
          alt="lookalike-app-mockup"
          width={470}
          height={985}
          className="object-contain"
        />
      </motion.div>

      {/* Floating Cards */}
      <FloatingCard
        src="/aiden-profile-picture.png"
        name="Aiden, 26"
        role="Product Designer"
        match="91%"
        className="absolute -right-8 sm:-right-16 lg:-right-16 top-1/4 z-30 hidden sm:flex"
        delay={1.2}
        duration={4}
        rotate={13}
      />

      <FloatingCard
        src="/grace.png"
        name="Grace, 22"
        role="Software Engineer"
        match="85%"
        className="absolute -left-12 sm:-left-20 lg:-left-14 top-36 -rotate-3 z-30 hidden sm:flex"
        delay={1.5}
        duration={5}
        rotate={7}
      />

      <FloatingCard
        src="/mia.png"
        name="Mia, 24"
        role="Photographer"
        match="78%"
        className="absolute -left-8 sm:-left-8 lg:-left-10 bottom-[45%] z-30"
        delay={1.0}
        duration={4.5}
        rotate={-18}
      />

      <FloatingCard
        src="/james-profile-picture.png"
        name="James, 27"
        role="Marketing Lead"
        match="67%"
        className="absolute -right-4 sm:-right-10 lg:-right-16 bottom-44 z-30"
        delay={1.8}
        duration={5.5}
        rotate={-10}
      />

      {/* Text decoration bubble */}
      <motion.div
        className="absolute -left-10 lg:-left-14 bottom-32 z-30 glass-card px-4 py-4 custom-shadow text-sm lg:text-base font-semibold text-slate-700 hidden sm:block rounded-full"
        style={{ transform: "rotate(45deg)" }}
        animate={{ y: [0, -28, 0], rotate: [8, 4, 6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Not famous. Just familiar.
      </motion.div>
    </div>
  );
};

export default HeroAnimation;

const OrbitDot = ({ radius, size, duration, direction, color, offset = 0 }) => {
  const angle = useMotionValue(offset);

  useEffect(() => {
    const controls = animate(angle, direction * 360 + offset, {
      duration,
      repeat: Infinity,
      ease: "linear",
    });

    return controls.stop;
  }, []);

  const x = useTransform(angle, (a) => radius * Math.cos((a * Math.PI) / 180));

  const y = useTransform(angle, (a) => radius * Math.sin((a * Math.PI) / 180));

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        x,
        y,
        boxShadow: "0 0 12px rgba(99,102,241,0.5)",
      }}
    />
  );
};
