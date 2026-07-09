"use client";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

const CelebrityApps = () => {
  // efonewfoiewfoin
  return (
    <section className="w-full pt-10 lg:pt-0 pb-28 lg:pb-40 flex flex-col items-center gap-10 overflow-x-hidden relative padding-x">
      <div
        id="difference"
        className="w-full flex flex-col items-center gap-4 text-center relative z-20"
      >
        <div className="">
          <span className="font-semibold text-xs px-5 py-2 glass-card rounded-xl text-[#5E51C9]">
            THE REAL DIFFERENCE
          </span>
        </div>
        <h2 className="text-4xl lg:text-[58px] font-semibold leading-[1.2] text-center">
          Celebrity Apps Are Fun. <br className="hidden lg:block" /> This Is{" "}
          <span className="gradient-text">Different</span>
        </h2>
        <p className="secondary-text text-lg max-w-[700px]">
          Your real face twin probably isn’t on a movie poster. They might be a
          student, creator, traveler, gamer, founder, or someone scrolling right
          now.
        </p>
      </div>

      <div className="w-full border border-blue-100 max-w-7xl mx-auto p-10 bg-white blue-shadow rounded-[46px] grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-20">
        <motion.div
          className="absolute top-[20%] left-[-10%] z-20 hidden lg:block"
          animate={{
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src={"/user-profile-card.png"}
            alt="user-profile-card"
            width={270}
            height={285}
            className="object-contain"
          />
        </motion.div>

        {/* user-profile-image-card */}
        <motion.div
          className="absolute bottom-[-30%] right-[-5.5%] z-20 hidden lg:block"
          animate={{
            rotate: [0, -12, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/user-profile-image-card.png"
            alt="user-profile-image-card"
            width={306}
            height={120}
            className="object-contain"
          />
        </motion.div>
        {/* card 1 */}
        <div className="border border-[#0A8DFF1A] w-full relative bg-[#EEF9FF] overflow-hidden rounded-[34px] flex flex-col items-start justify-between">
          <Image
            src={"/ellipse-right-top.png"}
            alt="ellipse right top"
            width={133}
            height={133}
            className="object-contain absolute -top-10 -right-4 z-0"
          />
          <Image
            src={"/ellipse-left-bottom.png"}
            alt="ellipse left bottom"
            width={133}
            height={133}
            className="object-contain absolute -bottom-5 -left-10 z-0"
          />
          <div className="w-full px-6 pt-6">
            <h3 className="font-semibold text-[26px] lg:text-[34px] leading-none relative z-10">
              Celebrity apps say:
            </h3>
            <p className="font-medium text-base mt-4 relative z-10">
              “You look like this famous person.” Fun once, then it’s done.
            </p>
          </div>

          <div className="w-full min-h-[215px] relative rounded-b-[34px] flex items-end justify-end">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
            >
              <Image
                src="/person-1.png"
                alt="person-1"
                width={180}
                height={225}
                className="object-contain"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.4,
                delay: 0.85, // after person-1 (0.7s) and person-2 (0.7s + 0.15s)
                ease: "easeOut",
              }}
              className="absolute right-[145px] bottom-8"
            >
              <Image
                src="/heart-icon.png"
                alt="heart-icon"
                width={72}
                height={72}
                className="object-contain"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: "easeOut",
              }}
            >
              <Image
                src="/person-2.png"
                alt="person-2"
                width={180}
                height={225}
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>

        {/* card 2 */}
        <div className="border border-[#0A8DFF1A] w-full relative gradient-bg overflow-hidden rounded-[34px]  flex flex-col items-start justify-between">
          <Image
            src={"/ellipse-right-top.png"}
            alt="ellipse right top"
            width={133}
            height={133}
            className="object-contain absolute -top-5 right-0 z-0"
          />
          <Image
            src={"/ellipse-left-bottom.png"}
            alt="ellipse left bottom"
            width={133}
            height={133}
            className="object-contain absolute -bottom-5 -left-5 z-0"
          />
          <div className="w-full px-6 pt-6">
            <h3 className="font-semibold text-[26px] lg:text-[34px] leading-none relative z-10 text-white">
              LookAlike says:
            </h3>
            <p className="font-medium text-base mt-4 relative z-10 text-[#DCE8FF]">
              “Here are real people who might actually look like you.” That’s
              where it gets weirdly personal.
            </p>
          </div>

          <div className="w-full min-h-[215px] relative rounded-b-[34px] flex items-end justify-end">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
            >
              <Image
                src="/person-3.png"
                alt="person-3"
                width={180}
                height={225}
                className="object-contain"
              />
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.6,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: 0.85,
                ease: "easeOut",
              }}
              className="absolute right-[145px] bottom-8"
            >
              <Image
                src="/heart-icon-white.png"
                alt="heart icon white"
                width={72}
                height={72}
                className="object-contain"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: "easeOut",
              }}
            >
              <Image
                src="/person-4.png"
                alt="person-4"
                width={180}
                height={225}
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CelebrityApps;
