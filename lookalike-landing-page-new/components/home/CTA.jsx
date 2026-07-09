"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

const CTA = ({ handleToggleWaitlistModal }) => {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (id) => {
    if (pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Store the target section, then navigate
      sessionStorage.setItem("scrollTarget", id);
      router.push("/");
    }
  };
  return (
    <section className="w-full padding-x">
      <section className="w-full mx-auto max-w-[1106px] border my-20 border-white gradient-bg rounded-[40px] relative overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-10 p-10 lg:p-12 purple-shadow">
        <div className="space-y-8 relative z-20">
          <div className="rounded-full flex items-center gap-2 px-4 py-2 border border-white/50 backdrop-blur-xl text-white bg-white/10 font-bold max-w-max">
            ✦ DOWNLOAD LOOKALIKE
          </div>

          <h2 className="text-4xl lg:text-[48px] font-bold text-white leading-[1]">
            Your Next Connection Is Waiting.
          </h2>

          <p className="text-gray-100 lg:max-w-[90%]">
            Discover genuine connections with like-minded people. Available on
            iOS and Android.
          </p>

          <div className="flex items-center gap-4 mt-5">
            <Link
              href={
                "https://play.google.com/store/apps/details?id=com.launchbox.lal"
              }
              target="_blank"
            >
              <Image
                src={"/google-play-button.png"}
                alt="google-play-button"
                width={187}
                height={55}
                className="object-contain"
              />
            </Link>
            <Link
              href={
                "https://apps.apple.com/us/app/lookalike-match/id6766226894"
              }
              target="_blank"
            >
              <Image
                src={"/app-store-button.png"}
                alt="app-store-button"
                width={187}
                height={55}
                className="object-contain"
              />
            </Link>
          </div>
          <div className="mb-7 w-full leading-[1.5] text-[17px] secondary-text">
            <p className="w-full max-w-lg text-[11px] text-white">
              Early access. Download now to reserve your spot. Complete your
              profile today and we'll notify you the moment matching goes live.
            </p>
          </div>
          {/* <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12 sm:mb-10">
            <button
              type="button"
              onClick={() => handleToggleWaitlistModal()}
              className="bg-white text-black h-[57px] flex items-center gap-2 justify-center px-8 rounded-full font-semibold shadow-lg shadow-[#5E51C961] hover:scale-[1.05] transition-all duration-300"
            >
              Join The Waitlist
              <motion.span
                className="inline-block"
                initial={{ x: 0 }}
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight />
              </motion.span>
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("how-it-works")}
              href={`#how-it-works`}
              className="w-auto text-slate-800 bg-white px-8 py-4 rounded-full font-semibold text-base custom-shadow transition-all flex items-center justify-center gap-3 hover:scale-[1.05] duration-300"
            >
              How It Works
            </button>
          </div> */}

          <div className="w-full flex items-center flex-col md:flex-row gap-3 pt-2">
            <Image
              src={"/users.png"}
              alt="users"
              width={168}
              height={66}
              className="object-contain"
            />
            <Image
              src={"/rating-stars.png"}
              alt="rating-stars"
              width={192}
              height={29}
              className="object-contain"
            />
          </div>
        </div>

        <div className="relative flex items-center justify-end z-20 mx-auto">
          <Image
            src={"/lookalike-login-screen.png"}
            alt="lookalike-login-screen"
            width={266}
            height={529}
            className="object-contain absolute -left-4 md:left-[-30%] lg:-left-14"
          />
          <Image
            src={"/lookalike-home-screen.png"}
            alt="lookalike-home-screen"
            width={289}
            height={580}
            className="object-contain relative z-20 -right-5 md:right-0 lg:-right-20"
          />
        </div>

        <Image
          src={"/cta-bubble-top-right.png"}
          alt="cta-bubble-top-right"
          width={257}
          height={257}
          className="absolute -top-20 -right-20 z-0"
        />

        <Image
          src={"/cta-bottom-left-bubble.png"}
          alt="cta-bottom-left-bubble"
          width={257}
          height={257}
          className="absolute -bottom-10 -left-10 z-0"
        />
      </section>
    </section>
  );
};

export default CTA;
