"use client";

import { motion } from "motion/react";
import Image from "next/image";
import {
  Infinity as InfinityIcon,
  User as UserIcon,
  ArrowRight,
} from "lucide-react";
import Navbar from "../global/Navbar";
import Link from "next/link";
import HeroAnimation from "./HeroAnimation";

export default function Hero({ handleToggleWaitlistModal }) {
  return (
    <div
      id="home"
      className="min-h-screen relative overflow-hidden flex flex-col padding-x"
    >
      <div className="w-[800px] h-[800px] bg-[#408EE8] rounded-full absolute top-[-20%] right-[-20%] z-0 blur-[300px] opacity-40"></div>
      <div className="w-[400px] h-[400px] bg-[#408EE8] rounded-full absolute top-[-20%] left-[-20%] z-0 blur-[300px] opacity-40"></div>
      <Navbar />

      {/* Main Content Grid */}
      <main className="container mx-auto pt-40 pb-14 lg:pb-24 md:pt-48 flex-1 flex flex-col lg:flex-row items-center relative z-10 max-w-7xl gap-16 lg:gap-8">
        {/* Left Column */}
        <motion.div
          className="flex-1 w-full flex flex-col items-start text-left lg:min-w-[55%]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-[39px] bg-white custom-shadow mb-8 sm:mb-10 font-medium text-sm md:text-base text-[#5E51C9]">
            <span className="w-4 h-4 rounded-full gradient-bg border-[4px] border-indigo-100"></span>
            Real People. Real Resemblance.
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-semibold tracking-tight leading-[1.3]">
            Not Another
            <br />
            Celebrity <span className="gradient-text">LookAlike</span>
            <br />
            <span className="inline-flex items-end gap-3">
              App.
              <span className="text-lg sm:text-[23px] font-medium text-slate-800 leading-none tracking-normal">
                Find real people <br /> who actually look like you.
              </span>
            </span>
          </h1>

          <p className="mb-8 max-w-lg leading-[1.5] text-[17px] secondary-text mt-5">
            Somewhere out there, someone might have your eyes, your smile, your
            face shape, or that weirdly familiar look. LookAlike helps you
            discover real people who resemble you, not famous faces on a screen.
          </p>
          {/* actions */}
          <div className="flex items-center gap-4 w-full sm:w-auto mb-8">
            <Link
              href={
                "https://play.google.com/store/apps/details?id=com.launchbox.lal"
              }
              target="_blank"
              className="gradient-bg text-white py-3 px-5 flex items-center gap-3 justify-center rounded-[16px] font-semibold shadow-lg shadow-[#5E51C961] hover:scale-[1.05] transition-all duration-300"
            >
              <div className="">
                <Image
                  src={"/google-play-icon.png"}
                  alt="google-play-icon"
                  width={24}
                  height={27}
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="leading-none text-[10px] uppercase font-medium text-white/80">
                  get it on
                </span>
                <span className="leading-none text-base lg:text-lg">
                  Google Play
                </span>
              </div>
            </Link>
            <Link
              href={
                "https://apps.apple.com/us/app/lookalike-match/id6766226894"
              }
              target="_blank"
              className="gradient-bg text-white py-3 px-5 flex items-center gap-3 justify-center rounded-[16px] font-semibold shadow-lg shadow-[#5E51C961] hover:scale-[1.05] transition-all duration-300"
            >
              <div className="">
                <Image
                  src={"/apple-icon.png"}
                  alt="google-play-icon"
                  width={24}
                  height={27}
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="leading-none text-[10px] uppercase font-medium text-white/80">
                  get it on
                </span>
                <span className="leading-none text-base lg:text-lg">
                  App Store
                </span>
              </div>
            </Link>
          </div>

          <div className="mb-7 w-full leading-[1.5] text-[17px] secondary-text">
            <p className="w-full max-w-lg text-[11px]">
              Early access. Download now to reserve your spot. Complete your
              profile today and we'll notify you the moment matching goes live.
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 sm:gap-10 text-sm font-medium text-slate-500">
            <div className="flex items-center gap-2 text-[#888888]">
              <Image
                src={"/star-icon.png"}
                alt="star icon"
                width={12}
                height={19}
                className="object-contain"
              />
              Face Matching
            </div>
            <div className="flex items-center gap-2 text-[#888888]">
              <Image
                src={"/check-icon.png"}
                width={10}
                alt="check icon"
                height={19}
                className="object-contain"
              />
              Verified Profiles
            </div>
            <div className="flex items-center gap-2 text-[#888888]">
              <Image
                src={"/privacy-icon.png"}
                width={14}
                alt="privacy icon"
                height={20}
                className="object-contain"
              />
              Privacy Protected
            </div>
          </div>
        </motion.div>

        {/* Right Column (Animated Composition) */}
        <HeroAnimation />
      </main>
    </div>
  );
}

// Subcomponent for the floating avatar badges
