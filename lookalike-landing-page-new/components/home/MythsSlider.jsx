"use client";

import { MYTHS } from "@/constants/myths";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

const CARD_WIDTH = 434;
const GAP = 32;
const SCROLL_AMOUNT = CARD_WIDTH + GAP;

const MythsSlider = () => {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  // Triple items for infinite loop
  const items = MYTHS;

  // -----------------------------
  // Arrow Buttons
  // -----------------------------
  const scrollByCard = (direction) => {
    sliderRef.current?.scrollBy({
      left: direction * SCROLL_AMOUNT,
      behavior: "smooth",
    });
  };

  // -----------------------------
  // Mouse Drag
  // -----------------------------
  const onMouseDown = (e) => {
    const slider = sliderRef.current;

    isDragging.current = true;
    startX.current = e.pageX;
    startScrollLeft.current = slider.scrollLeft;

    slider.style.cursor = "grabbing";
    slider.style.scrollBehavior = "auto";
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;

    e.preventDefault();

    const slider = sliderRef.current;
    const walk = e.pageX - startX.current;

    slider.scrollLeft = startScrollLeft.current - walk;
  };

  const stopDragging = () => {
    if (!isDragging.current) return;

    isDragging.current = false;

    const slider = sliderRef.current;

    slider.style.cursor = "grab";
    slider.style.scrollBehavior = "smooth";
  };

  const updateButtons = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    setCanScrollLeft(slider.scrollLeft > 0);

    setCanScrollRight(
      slider.scrollLeft < slider.scrollWidth - slider.clientWidth - 1,
    );
  };

  // -----------------------------
  // Touch Drag
  // -----------------------------
  const onTouchStart = (e) => {
    const slider = sliderRef.current;

    startX.current = e.touches[0].pageX;
    startScrollLeft.current = slider.scrollLeft;
  };

  const onTouchMove = (e) => {
    const slider = sliderRef.current;

    const walk = e.touches[0].pageX - startX.current;

    slider.scrollLeft = startScrollLeft.current - walk;
  };

  // useEffect(() => {
  //   window.addEventListener("mouseup", stopDragging);

  //   return () => {
  //     window.removeEventListener("mouseup", stopDragging);
  //   };
  // }, []);

  useEffect(() => {
    updateButtons();

    const slider = sliderRef.current;

    slider?.addEventListener("scroll", updateButtons);
    window.addEventListener("resize", updateButtons);
    window.addEventListener("mouseup", stopDragging);

    return () => {
      slider?.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
      window.removeEventListener("mouseup", stopDragging);
    };
  }, []);

  return (
    <div className="relative w-full">
      {/* Left */}
      <button
        disabled={!canScrollLeft}
        onClick={() => scrollByCard(-1)}
        className={`absolute left-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full flex items-center justify-center custom-shadow transition-all duration-200
    ${
      canScrollLeft
        ? "gradient-bg cursor-pointer"
        : "bg-gray-300 cursor-not-allowed opacity-50"
    }`}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Right */}
      <button
        disabled={!canScrollRight}
        onClick={() => scrollByCard(1)}
        className={`absolute right-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full flex items-center justify-center custom-shadow transition-all duration-200
    ${
      canScrollRight
        ? "gradient-bg cursor-pointer"
        : "bg-gray-300 cursor-not-allowed opacity-50"
    }`}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Slider */}
      <div
        ref={sliderRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseLeave={stopDragging}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        className="w-full relative z-20 flex items-start py-10 gap-6 overflow-x-auto select-none"
        style={{
          paddingLeft: "calc(2.6%)",
          paddingRight: "calc(2.6%)",
          cursor: "grab",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {items.map((s, i) => (
          <div
            key={i}
            draggable={false}
            className="min-w-[320px] md:min-w-[454px] min-h-[350px] flex flex-col items-start justify-start gap-5 p-7 rounded-[32px] glass-card hover:border-purple-200/60 custom-shadow"
          >
            <div className="uppercase custom-shadow bg-white/20 border border-white/70 text-[10px] text-[#408EE8] px-3 py-1 font-medium rounded-full">
              {s.label}
            </div>

            <div className="glass-card text-[10px] text-[#408EE8] w-[56px] h-[56px] flex items-center justify-center font-medium rounded-xl">
              <Image
                src={s.icon}
                width={s.width}
                height={s.height}
                alt={s.title}
                draggable={false}
                className="object-contain pointer-events-none"
              />
            </div>

            <p className="text-[#000] text-[24px] font-semibold leading-[1.3]">
              {s.title}
            </p>

            <p className="text-[17px] text-[#888888]">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MythsSlider;
