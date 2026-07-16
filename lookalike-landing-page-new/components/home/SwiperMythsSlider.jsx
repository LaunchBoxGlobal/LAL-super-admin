import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { MYTHS } from "@/constants/myths";

import "swiper/css";
import "swiper/css/pagination";
import "./swiper.css";

const NavButton = ({ direction, onClick, enabled }) => (
  <button
    onClick={onClick}
    disabled={!enabled}
    className={`w-10 h-10 rounded-full flex items-center justify-center custom-shadow transition-all duration-200
      ${enabled ? "gradient-bg cursor-pointer" : "bg-gray-300 cursor-not-allowed opacity-50"}`}
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
      <polyline
        points={direction === "left" ? "15 18 9 12 15 6" : "9 18 15 12 9 6"}
      />
    </svg>
  </button>
);

export default function SwiperMythsSlider() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrev = () => swiperInstance?.slidePrev();
  const handleNext = () => swiperInstance?.slideNext();

  const updateNavState = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="relative w-full pt-6">
      {/* Desktop: Left button */}
      <div className="hidden lg:flex absolute left-[0] top-1/2 -translate-y-1/2 z-30">
        <NavButton
          direction="left"
          onClick={handlePrev}
          enabled={!isBeginning}
        />
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        pagination={{ clickable: true }}
        modules={[Navigation]}
        className="mySwiper"
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
          updateNavState(swiper);
        }}
        onSlideChange={updateNavState}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 10 },
          1024: { slidesPerView: 3, spaceBetween: 0 },
          1920: { slidesPerView: 4, spaceBetween: 0 },
        }}
      >
        {MYTHS.map((s, i) => (
          <SwiperSlide key={i} className="p-5 md:pb-10">
            <div className="w-full min-h-[350px] md:min-h-[370px] lg:min-h-[395px] xl:min-h-[350px] flex flex-col items-start justify-start gap-5 p-7 rounded-[32px] glass-card hover:border-purple-200/60 custom-shadow">
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
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Desktop: Right button */}
      <div className="hidden lg:flex absolute right-[0] top-1/2 -translate-y-1/2 z-30">
        <NavButton direction="right" onClick={handleNext} enabled={!isEnd} />
      </div>

      {/* Mobile/Tablet: Buttons below */}
      <div className="flex lg:hidden items-center justify-center gap-4 mt-4">
        <NavButton
          direction="left"
          onClick={handlePrev}
          enabled={!isBeginning}
        />
        <NavButton direction="right" onClick={handleNext} enabled={!isEnd} />
      </div>
    </div>
  );
}
