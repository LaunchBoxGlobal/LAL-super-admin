"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { TextAlignJustify } from "lucide-react";
import Sidebar from "./Sidebar";
import { usePathname, useRouter } from "next/navigation";
import { SECTION_LINKS } from "@/constants/nav-links";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleSidebar = () => setIsOpen((prev) => !prev);

  const scrollToSection = (id) => {
    const NAVBAR_HEIGHT = 120;

    if (pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        const top =
          element.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
        window.scrollTo({ top, behavior: "smooth" });
      }
    } else {
      sessionStorage.setItem("scrollTarget", id);
      router.push("/");
    }
  };

  return (
    <>
      <header
        className={`w-full mx-auto fixed top-0 inset-x-0 z-40 padding-x py-5 lg:py-8 min-h-[70px] flex items-center justify-center transition-all duration-300 overflow-hidden ${
          isScrolled ? "bg-white shadow-sm" : "bg-transparent"
        }`}
      >
        <div
          className={`w-[800px] h-[800px] bg-[#408EE8] rounded-full absolute top-[-20%] right-[-20%] z-0 blur-[300px] ${isScrolled ? "opacity-30" : "opacity-0"}`}
        ></div>
        <nav className="max-w-7xl w-full mx-auto flex items-center justify-between rounded-[24px] relative z-20">
          {/* <Link href={"/"}> */}
          <div
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Image
              src="/lookalike-match-app-logo.png"
              alt="lookalike-match-app-logo"
              width={69}
              height={44}
              className="object-contain"
            />
          </div>
          {/* </Link> */}

          <p className="text-sm font-medium primary-text lg:hidden animate-pulse">
            Find LookAlikes Instantly
          </p>

          <div className="hidden lg:flex items-center gap-3 xl:gap-8 font-medium text-slate-600 relative z-20">
            {SECTION_LINKS.map((sec) => (
              <button
                key={sec.id}
                type="button"
                onClick={() => scrollToSection(sec.id)}
                className="text-xs font-semibold text-[#627199]"
              >
                {sec.title}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-end gap-2 relative z-20">
            <Link
              href="/contact"
              className="primary-button hidden lg:inline-flex items-center justify-center"
            >
              Contact Support
            </Link>

            <button
              type="button"
              onClick={handleToggleSidebar}
              className="lg:hidden"
            >
              <TextAlignJustify size={20} />
            </button>
          </div>
        </nav>
      </header>

      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Navbar;
