"use client";
import Footer from "@/components/global/Footer";
import JoinWaitlistForm from "@/components/global/JoinWaitlistForm";
import { WaitlistModal } from "@/components/global/WaitlistModal";
import CelebrityApps from "@/components/home/CelebrityApps";
import CTA from "@/components/home/CTA";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import MythsAndMoments from "@/components/home/MythsAndMoments";
import RealConnections from "@/components/home/RealConnections";
import RevealMoment from "@/components/home/RevealMoment";
import SafetyAndTrust from "@/components/home/SafetyAndTrust";
import Subscriptions from "@/components/home/Subscriptions";
import TryingIt from "@/components/home/TryingIt";
import WhoIsThisFor from "@/components/home/WhoIsThisFor";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleToggleWaitlistModal = () => setIsModalOpen((prev) => !prev);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      const target = sessionStorage.getItem("scrollTarget");
      if (!target) return;

      sessionStorage.removeItem("scrollTarget");

      // Wait for the page to fully render before scrolling
      const attemptScroll = (retries = 10) => {
        const element = document.getElementById(target);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (retries > 0) {
          setTimeout(() => attemptScroll(retries - 1), 100);
        }
      };

      // Small initial delay to let Next.js hydrate the page
      setTimeout(() => attemptScroll(), 300);
    }
  }, [pathname]);

  return (
    <>
      <div className="relative overflow-hidden w-full">
        <Hero handleToggleWaitlistModal={handleToggleWaitlistModal} />
        <CelebrityApps />
        <TryingIt />
        <MythsAndMoments />
        <HowItWorks />
        <RevealMoment />
        <SafetyAndTrust />
        <Features />
        <RealConnections />
        {/* <Subscriptions handleToggleWaitlistModal={handleToggleWaitlistModal} /> */}
        <WhoIsThisFor />
        <CTA handleToggleWaitlistModal={handleToggleWaitlistModal} />
        <Footer />
      </div>

      {/* Waitlist form */}
      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
